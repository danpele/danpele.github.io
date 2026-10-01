"""
check_orcid.py -- add works that are on ORCID but not yet in assets/pubs.js

    python3 tools/check_orcid.py            # writes the new entries into assets/pubs.js
    python3 tools/check_orcid.py --dry-run  # only lists them

Run weekly by .github/workflows/new-publications.yml, which opens a pull request with the result,
so every new entry is reviewed before it reaches the site. Metadata come from Crossref; a work is
new when its DOI is not already in pubs.js.
"""
import json
import os
import re
import sys
import urllib.request

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUBS = os.path.join(HERE, 'assets', 'pubs.js')
ORCID = '0000-0002-5891-5495'
UA = {'User-Agent': 'danpele.github.io publication check (mailto:danpele@ase.ro)'}
KIND = {'journal-article': 'journal', 'proceedings-article': 'proc', 'book-chapter': 'chapter',
        'book': 'chapter', 'posted-content': 'wp', 'report': 'wp'}


def get(url, accept='application/json'):
    req = urllib.request.Request(url, headers={**UA, 'Accept': accept})
    with urllib.request.urlopen(req, timeout=60) as r:
        return json.load(r)


def known_dois(text):
    return {d.lower() for d in re.findall(r'"doi":\s*"([^"]+)"', text)}


def orcid_dois():
    works = get(f'https://pub.orcid.org/v3.0/{ORCID}/works')
    out = set()
    for g in works.get('group', []):
        for e in g.get('external-ids', {}).get('external-id', []):
            if e.get('external-id-type') == 'doi':
                out.add(e['external-id-value'].strip().lower())
    return out


def entry(doi):
    m = get(f'https://api.crossref.org/works/{doi}')['message']
    year = (m.get('published-print') or m.get('published-online') or m.get('issued') or {}).get('date-parts', [[None]])[0][0]
    authors = [' '.join(x for x in (a.get('given'), a.get('family')) if x) for a in m.get('author', [])]
    return {
        'y': year,
        't': re.sub(r'\s+', ' ', (m.get('title') or [''])[0]).strip(),
        'a': authors,
        'v': (m.get('container-title') or [''])[0],
        'vol': m.get('volume', ''),
        'no': m.get('issue', ''),
        'p': m.get('page', '') or m.get('article-number', ''),
        'doi': doi,
        'c': KIND.get(m.get('type'), 'journal'),
    }


IGNORE = os.path.join(HERE, 'tools', 'orcid_ignore.txt')   # DOIs deliberately not on the site (one per line)


def ignored():
    if not os.path.exists(IGNORE):
        return set()
    return {l.split('#')[0].strip().lower() for l in open(IGNORE, encoding='utf8') if l.split('#')[0].strip()}


def main():
    text = open(PUBS, encoding='utf8').read()
    new = sorted(d for d in orcid_dois() - known_dois(text) - ignored()
                 if not re.match(r'10\.24818/ida-(ql|cl)/', d))      # IDA Quantlet / code-library DOIs: software, not publications
    entries = []
    for d in new:
        try:
            entries.append(entry(d))
        except Exception as e:                      # a DOI that Crossref does not know: report, do not guess
            print('skipped', d, e)
    entries.sort(key=lambda e: -(e['y'] or 0))
    for e in entries:
        print(f"new: {e['y']} {e['t']} ({e['v']}) doi:{e['doi']}")
    if not entries:
        print('no new works')
        return
    if '--dry-run' in sys.argv:
        return
    block = ''.join(json.dumps(e, ensure_ascii=False, indent=0) + ',\n' for e in entries)
    i = text.index('window.PUBS = [') + len('window.PUBS = [')
    text = text[:i] + '\n' + block.rstrip('\n') + text[i:]
    open(PUBS, 'w', encoding='utf8').write(text)
    print(f'added {len(entries)} works to assets/pubs.js')


if __name__ == '__main__':
    main()
