"""
Build the pages of danpele.github.io (EN + RO) from one template.

    python3 build_pages.py

Sections are taken from sections.html (one <section> per id); content is filled in by assets/app.js
from assets/content.js and assets/pubs.js.
"""
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
BASE = 'https://danpele.github.io/'
SEC = open(os.path.join(HERE, 'sections.html'), encoding='utf8').read()


def section(sid):
    m = re.search(r'(        <section id="%s".*?\n        </section>\n)' % re.escape(sid), SEC, re.S)
    if not m:
        raise SystemExit('missing section ' + sid)
    return m.group(1)


PAGES = {
    #          file EN / RO                       sections
    'home': (('index.html', 'index_ro.html'), ['about', 'news', 'themes', 'selected', 'teaching']),
    'publications': (('publications.html', 'publications_ro.html'), ['publications', 'code']),
    'talks': (('talks.html', 'talks_ro.html'), ['talks']),
    'phd': (('phd.html', 'phd_ro.html'), ['phd']),
    'cv': (('cv.html', 'cv_ro.html'), ['cvhead', 'cv', 'research', 'cvpubs']),
}
TITLE = {
    'en': {'home': 'Daniel Traian Pele', 'publications': 'Publications', 'talks': 'Conferences and talks', 'phd': 'PhD students', 'cv': 'Curriculum vitae'},
    'ro': {'home': 'Daniel Traian Pele', 'publications': 'Publicații', 'talks': 'Conferințe și prezentări', 'phd': 'Doctoranzi', 'cv': 'Curriculum vitae'},
}
DESC = {
    'en': {'home': 'Daniel Traian Pele, Professor at the Bucharest University of Economic Studies and Senior Researcher I at the Institute for Economic Forecasting, Romanian Academy: research, courses, publications and CV.',
           'publications': 'Publications of Daniel Traian Pele: journal articles, proceedings, books, chapters and working papers, with BibTeX and code.',
           'talks': 'Conferences, workshops and invited talks of Daniel Traian Pele, with a map.',
           'phd': 'PhD students supervised by Daniel Traian Pele at the Bucharest University of Economic Studies.',
           'cv': 'Curriculum vitae of Daniel Traian Pele: positions, education, projects, service, awards and journal articles.'},
    'ro': {'home': 'Daniel Traian Pele, profesor universitar la Academia de Studii Economice din București și Cercetător Științific I la Institutul de Prognoză Economică al Academiei Române: cercetare, cursuri, publicații și CV.',
           'publications': 'Publicațiile lui Daniel Traian Pele: articole în reviste, volume de conferință, cărți, capitole și working papers, cu BibTeX și cod.',
           'talks': 'Conferințe, workshop-uri și prezentări invitate ale lui Daniel Traian Pele, cu hartă.',
           'phd': 'Doctoranzii coordonați de Daniel Traian Pele la Academia de Studii Economice din București.',
           'cv': 'Curriculum vitae Daniel Traian Pele: poziții, educație, proiecte, activitate profesională, distincții și articole în reviste.'},
}
PERSON = {
    '@context': 'https://schema.org', '@type': 'Person', 'name': 'Daniel Traian Pele', 'url': BASE,
    'image': BASE + 'assets/photo.jpg', 'email': 'mailto:danpele@ase.ro',
    'jobTitle': ['Professor', 'Senior Researcher I'],
    'affiliation': [{'@type': 'CollegeOrUniversity', 'name': 'Bucharest University of Economic Studies', 'url': 'https://www.ase.ro'},
                    {'@type': 'ResearchOrganization', 'name': 'Institute for Economic Forecasting, Romanian Academy', 'url': 'https://ipe.ro'}],
    'sameAs': ['https://scholar.google.com/citations?user=8dmnNZ4AAAAJ', 'https://orcid.org/0000-0002-5891-5495',
               'https://github.com/danpele', 'https://www.researchgate.net/profile/Daniel_Traian_Pele',
               'https://www.linkedin.com/in/daniel-traian-pele-4a73a49/'],
    'knowsAbout': ['Financial econometrics', 'Value at Risk', 'Expected Shortfall', 'Digital assets', 'Machine learning in finance', 'Large language models'],
}

HERO = """    <section class="hero" id="top">
        <div class="wrap hero-inner">
            <div class="hero-photo"><img src="assets/photo.jpg" alt="Daniel Traian Pele" width="220" height="220"></div>
            <div class="hero-text">
                <p class="eyebrow" id="eyebrow"></p>
                <h1>Daniel Traian Pele</h1>
                <div class="roles" id="roles"></div>
                <div class="cta" id="cta"></div>
                <div class="links" id="links"></div>
            </div>
            <div class="hero-viz" id="hero-viz"></div>
        </div>
        <div class="wrap"><div class="kpis" id="kpis"></div></div>
    </section>

    <section class="partners" aria-label="{aff}">
        <div class="wrap partners-inner" id="partners"></div>
    </section>
"""
PAGE_HERO = """    <section class="page-hero">
        <div class="wrap page-hero-inner">
            <a class="page-hero-person" id="page-person" href="{home}"><img src="assets/photo.jpg" alt="" width="56" height="56"><span>Daniel Traian Pele</span></a>
            <h1 id="page-title"></h1>
            <p id="page-lead"></p>
        </div>
    </section>
"""


def ver(path):
    """Short content hash, so browsers reload a changed script or stylesheet instead of using an old cached copy."""
    import hashlib
    return hashlib.md5(open(os.path.join(HERE, path), 'rb').read()).hexdigest()[:8]


def build(key, lang):
    files, secs = PAGES[key]
    me, other = files[0 if lang == 'en' else 1], files[1 if lang == 'en' else 0]
    en_file, ro_file = files
    title = TITLE[lang][key] if key == 'home' else f"{TITLE[lang][key]} · Daniel Traian Pele"
    desc = DESC[lang][key]
    head = f"""<!DOCTYPE html>
<html lang="{lang}" data-lang="{lang}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title}</title>
    <meta name="description" content="{desc}">
    <meta name="author" content="Daniel Traian Pele">
    <link rel="canonical" href="{BASE}{'' if me == 'index.html' else me}">
    <link rel="alternate" hreflang="en" href="{BASE}{'' if en_file == 'index.html' else en_file}">
    <link rel="alternate" hreflang="ro" href="{BASE}{ro_file}">
    <meta property="og:type" content="{'profile' if key == 'home' else 'website'}">
    <meta property="og:title" content="{title}">
    <meta property="og:description" content="{desc}">
    <meta property="og:url" content="{BASE}{'' if me == 'index.html' else me}">
    <meta property="og:image" content="{BASE}assets/og.jpg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:locale" content="{'ro_RO' if lang == 'ro' else 'en_GB'}">
    <meta name="twitter:card" content="summary_large_image">
    <link rel="icon" type="image/png" sizes="64x64" href="assets/favicon.png">
    <link rel="apple-touch-icon" href="assets/apple-touch-icon.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,500;8..60,600;8..60,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="assets/style.css?v={ver('assets/style.css')}">
""" + (f'    <script type="application/ld+json">{json.dumps(PERSON, ensure_ascii=False)}</script>\n' if key == 'home' else '') + "</head>\n"
    body = f"""<body data-page="{key}">
    <header class="topbar{' solid' if key != 'home' else ''}" id="topbar">
        <div class="wrap topbar-inner">
            <a class="brand" href="{files[0 if lang == 'en' else 1] if key == 'home' else PAGES['home'][0][0 if lang == 'en' else 1]}"><img src="assets/photo.jpg" alt=""><span>D. T. Pele</span></a>
            <nav class="nav" id="nav"></nav>
            <div class="lang" role="group" aria-label="{'Limba' if lang == 'ro' else 'Language'}"><a href="{ro_file}" hreflang="ro" id="lang-ro">RO</a><a href="{en_file}" hreflang="en" id="lang-en">EN</a></div>
        </div>
    </header>

"""
    home_file = PAGES['home'][0][0 if lang == 'en' else 1]
    body += HERO.replace('{aff}', 'Afilieri' if lang == 'ro' else 'Affiliations') if key == 'home' else PAGE_HERO.replace('{home}', home_file)
    body += "\n    <main>\n" + ''.join(section(s) for s in secs) + "    </main>\n\n"
    body += section('footer').replace('        <section id="footer"', '    <footer class="footer" id="contact"').replace('\n        </section>\n', '\n    </footer>\n').replace('\n    ', '\n    ')
    scripts = ['assets/pubs.js', 'assets/content.js', 'assets/viz.js', 'assets/app.js']
    if key in ('publications', 'talks'):
        scripts.append('assets/graphs.js')
    body += '\n' + ''.join(f'    <script src="{s}?v={ver(s)}"></script>\n' for s in scripts) + "</body>\n</html>\n"
    open(os.path.join(HERE, me), 'w', encoding='utf8').write(head + body)
    return me


import shutil
CHROME = os.environ.get('CHROME') or next((c for c in ['/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
                                                        shutil.which('google-chrome') or '', shutil.which('google-chrome-stable') or '',
                                                        shutil.which('chromium') or '', shutil.which('chromium-browser') or ''] if c and os.path.exists(c)), '')


def prerender(files):
    """Write the content generated by app.js/graphs.js into the HTML files, so the pages are readable
    without JavaScript (link previews, crawlers, AI readers). The scripts stay and re-render on load."""
    import functools, http.server, socketserver, subprocess, threading
    if not CHROME:
        print('prerender skipped: Chrome not found')
        return
    handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=HERE)
    handler.log_message = lambda *a, **k: None
    with socketserver.TCPServer(('127.0.0.1', 0), handler) as srv:
        port = srv.server_address[1]
        threading.Thread(target=srv.serve_forever, daemon=True).start()
        for f in files:
            dom = subprocess.run([CHROME, '--headless=new', '--disable-gpu', '--no-sandbox', '--virtual-time-budget=10000',
                                  '--dump-dom', f'http://127.0.0.1:{port}/{f}'],
                                 capture_output=True, text=True, timeout=120).stdout
            if '<main' not in dom:
                print('prerender failed for', f)
                continue
            dom = re.sub(r'<script src="assets/vendor/[^"]+"></script>', '', dom)      # added at run time by graphs.js
            dom = re.sub(r'<div class="viz-tip"[^>]*>.*?</div>', '', dom, flags=re.S)
            dom = re.sub(r' class="rv( in)?"', '', dom).replace(' rv in"', '"').replace(' rv"', '"')
            if not dom.lstrip().lower().startswith('<!doctype'):
                dom = '<!DOCTYPE html>\n' + dom
            open(os.path.join(HERE, f), 'w', encoding='utf8').write(dom)
        if '--no-cv' not in sys.argv:
            for lang in ('ro', 'en'):
                out = os.path.join(HERE, 'assets', f'CV_Daniel_Traian_Pele_{lang.upper()}.pdf')
                subprocess.run([CHROME, '--headless=new', '--disable-gpu', '--no-sandbox', '--virtual-time-budget=8000',
                                '--no-pdf-header-footer', f'--print-to-pdf={out}', f'http://127.0.0.1:{port}/cv_print.html?lang={lang}'],
                               capture_output=True, timeout=120)
            print('printed CV PDFs')
        srv.shutdown()
    print('prerendered', len(files), 'pages')


if __name__ == '__main__':
    out = [build(k, l) for k in PAGES for l in ('en', 'ro')]
    urls = [BASE + ('' if f == 'index.html' else f) for f in out]
    open(os.path.join(HERE, 'sitemap.xml'), 'w').write('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
                                                      ''.join(f'  <url><loc>{u}</loc></url>\n' for u in urls) + '</urlset>\n')
    open(os.path.join(HERE, 'robots.txt'), 'w').write(f'User-agent: *\nAllow: /\nSitemap: {BASE}sitemap.xml\n')
    print('built', ', '.join(out))
    if '--no-prerender' not in sys.argv:
        prerender(out)
