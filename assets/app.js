(function () {
    'use strict';
    const S = window.SITE, PUBS = window.PUBS || [];
    const $ = id => document.getElementById(id);
    const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
    const LANG = document.documentElement.dataset.lang === 'ro' ? 'ro' : 'en';
    const T = S.t[LANG];
    const ext = 'target="_blank" rel="noopener"';

    const ICONS = {
        risk: '<path d="M3 20h18"/><path d="M4 16l4-5 3 3 4-7 5 6"/><path d="M4 20v-1M20 20v-8" opacity=".5"/>',
        ai: '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/><path d="M10 10h4v4h-4z"/>',
        coin: '<circle cx="12" cy="12" r="9"/><path d="M9.5 8h4a2 2 0 010 4h-4h4.5a2 2 0 010 4h-4.5zM11 6.5v1.5M11 16v1.5M9.5 8v8"/>',
        bubble: '<circle cx="9" cy="10" r="5"/><circle cx="17" cy="6" r="2.5"/><path d="M3 21l5-4 4 2 4-6 5 8"/>',
        bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
        entropy: '<path d="M3 18c3 0 3-12 6-12s3 12 6 12 3-8 6-8"/><path d="M3 21h18" opacity=".5"/>'
    };
    const icon = (k, cls = 'ico') => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[k] || ''}</svg>`;

    let cat = 'all', query = '', theme = null;
    const has = id => !!document.getElementById(id);
    const PAGE = document.body.dataset.page || 'home';
    // 'publications' -> file for this language; 'home#themes' -> file + anchor; '#contact' stays on the page
    const pageUrl = ref => { if (ref.startsWith('#')) return ref; const [k, h] = ref.split('#');
        const f = (S.pages[k] || S.pages.home)[LANG === 'ro' ? 1 : 0]; return h ? (k === PAGE ? '#' + h : f + '#' + h) : f; };
    const qs = new URLSearchParams(location.search);
    if (qs.has('theme')) theme = +qs.get('theme');

    function render() {
        document.querySelectorAll('[data-t]').forEach(el => { el.textContent = T[el.dataset.t]; });
        $('lang-' + LANG).setAttribute('aria-current', 'true');
        $('nav').innerHTML = T.nav.map(([v, ref]) => `<a href="${pageUrl(ref)}"${ref === PAGE ? ' aria-current="page"' : ''}>${v}</a>`).join('');
        document.querySelectorAll('.brand').forEach(b => b.setAttribute('href', pageUrl('home')));

        if (has('roles')) {
        // hero
        $('eyebrow').innerHTML = T.eyebrow.split(' · ').map(x => `<span class="seg">${esc(x)}</span>`).join(' · ');
        $('hero-viz').innerHTML = VIZ('tails', 'dark', 440, 250);
        $('roles').innerHTML = T.roles.map(([title, inst, logo, href]) =>
            `<a class="role" href="${href}" ${ext}><img src="assets/${logo}" alt=""><span><b>${esc(title)}</b>${esc(inst)}</span></a>`).join('');
        $('cta').innerHTML = T.cta.map(([l, h], i) => `<a class="btn ${i ? 'btn-ghost' : 'btn-solid'}" href="${pageUrl(h)}">${l}</a>`).join('');
        $('links').innerHTML = S.links.map(([n, h]) => `<a href="${h}"${h.startsWith('mailto') ? '' : ' ' + ext}>${n}</a>`).join('');
        const nJ = PUBS.filter(p => p.c === 'journal').length;
        $('kpis').innerHTML = [[PUBS.length, T.kpis.pubs], [nJ, T.kpis.journal], [S.courses.length, T.kpis.courses],
            [new Date().getFullYear() - 2001, T.kpis.years]]
            .map(([n, l]) => `<div class="kpi"><b data-n="${n}">${n}</b><span>${l}</span></div>`).join('');
        $('partners').innerHTML = S.partners.map(([img, name, href]) =>
            `<a href="${href}" ${ext} title="${esc(name)}"><img src="assets/${img}" alt="" loading="lazy"><span class="plabel">${esc(name)}</span></a>`).join('');

        }
        if (has('bio')) {
        // about
        $('bio').innerHTML = T.bio.map(p => `<p>${p}</p>`).join('') +
            '';
        $('now').innerHTML = T.now.map(n => `<li>${n}</li>`).join('');

        }
        if (has('theme-cards')) {
        // themes
        $('theme-cards').innerHTML = S.themes.map((th, i) => {
            const rx = new RegExp(th.rx, 'i'), n = PUBS.filter(p => rx.test(p.t)).length;
            return `<button type="button" class="theme" data-i="${i}"><div class="theme-viz">${VIZ(th.viz, 'light', 320, 110)}</div>
                <h4>${esc(th[LANG][0])}</h4><p>${esc(th[LANG][1])}</p><span class="more">${T.themePubs(n)}</span></button>`;
        }).join('');
        $('theme-cards').querySelectorAll('.theme').forEach(b => {
            b.onclick = () => { location.href = pageUrl('publications') + '?theme=' + b.dataset.i; };
        });

        }
        if (has('featured')) {
        // selected papers
        $('featured').innerHTML = S.featured.map((f, i) => {
            const p = PUBS.find(x => x.doi === f.doi);
            if (!p) return '';
            const head = `<div class="fig fig-viz">${VIZ(f.viz, 'dark')}</div>`;
            return `<a class="paper" href="https://doi.org/${p.doi}" ${ext}>${head}
                <div class="paper-body"><span class="journal">${esc(p.v)} · ${p.y}</span>
                <h4>${esc(p.t)}</h4><p>${esc(f[LANG])}</p><span class="more">${T.readPaper} →</span></div></a>`;
        }).join('');

        }
        if (has('courses')) {
        // courses
        $('courses').innerHTML = S.courses.map(c => {
            const [name, level, text] = c[LANG];
            const head = `<div class="fig fig-viz">${VIZ(c.viz, 'dark')}</div>`;
            return `<a class="course" href="${c.href}" ${ext}>${head}<div class="course-body">
                <span class="tag">${c.site ? T.courseSite : T.courseRepo}</span>
                <h4>${esc(name)}</h4><p class="meta">${esc(level)}</p><p>${esc(text)}</p></div></a>`;
        }).join('');
        $('other-teaching').innerHTML = `<b>${T.otherTeaching}:</b> ${esc(T.otherTeachingText)}`;

        }
        if (has('projects')) {
        // projects
        $('projects').innerHTML = S.projects.map(p => {
            const [name, meta, text] = p[LANG];
            const inner = `<span class="meta">${esc(meta)}</span><h4>${esc(name)}</h4><p>${esc(text)}</p>`;
            return p.href ? `<a class="project" href="${p.href}" ${ext}>${inner}</a>` : `<div class="project">${inner}</div>`;
        }).join('');
        if (PAGE === 'cv' && S.projectsMore && !document.querySelector('.more-projects')) $('projects').insertAdjacentHTML('afterend', `<h3 class="cv-sec more-proj">${T.moreProjects}</h3><ul class="more-projects">` +
            S.projectsMore.map(p => `<li><span class="meta">${esc(p.y)}</span> <b>${esc(p[LANG][0])}</b>. ${esc(p[LANG][1])}</li>`).join('') + '</ul>');

        }
        if (has('pub-list')) {
        // publications
        $('pubs-lead').innerHTML = T.pubsLead(PUBS.length);
        $('pub-search').placeholder = T.search;
        $('pub-search').setAttribute('aria-label', T.search);
        renderFilters();
        renderPubs();

        }
        if (has('phd-list')) {
        // PhD students: thesis, period, status and joint papers from the publication list
        const phdCard = st => {
            const rx = new RegExp(st.rx, 'i');
            const papers = PUBS.filter(p => p.a.some(n => rx.test(n)));
            const initials = st.name.replace(/\(.*?\)/g, '').split(/[\s-]+/).filter(Boolean).map(w => w[0]).slice(0, 2).join('');
            const av = st.photo ? `<img class="phd-av" src="assets/${st.photo}" alt="${esc(st.name)}">` : `<span class="phd-av">${esc(initials)}</span>`;
            const period = `${st.start}–${st.end || ''}`;
            const badge = st.status === 'defended' ? `<span class="phd-st st-def">${T.phdDefended} ${st.end}</span>`
                : st.status === 'ongoing' ? `<span class="phd-st">${T.phdOngoing}</span>` : '';
            const list = [...papers].sort((x, y) => y.y - x.y).map(p => {
                const link = p.doi ? `https://doi.org/${p.doi}` : p.url;
                return `<li>${link ? `<a href="${link}" ${ext}>${esc(p.t)}</a>` : esc(p.t)} <span class="muted">(${p.y})</span></li>`;
            }).join('');
            return `<article class="phd"><div class="phd-head">${av}
                <div><h4>${esc(st.name)}</h4><span class="phd-period">${period}</span> ${badge}</div></div>
                <p class="phd-thesis"><span>${T.phdThesis}:</span> ${esc(st.t[LANG])}</p>
                ${st.co ? `<p class="phd-co">${esc(st.co[LANG])}</p>` : ''}
                ${papers.length ? `<details><summary>${T.phdPapers} (${papers.length})</summary><ul>${list}</ul></details>` : ''}</article>`;
        };
        const all = [...S.phd].sort((a, b) => b.start - a.start || a.name.localeCompare(b.name));
        $('phd-list').innerHTML = `<div class="phd-grid">${all.map(phdCard).join('')}</div>`;
        $('phd-topics').innerHTML = S.phdTopics[LANG].map(t => `<li>${esc(t)}</li>`).join('');

        }
        if (has('talk-list')) {
        // conferences
        const norm = t => t.toLowerCase().replace(/[^a-z0-9]/g, '');
        const paperLink = t => {
            const p = PUBS.find(x => (x.doi || x.url) && norm(x.t) === norm(t));
            return p ? `<a href="${p.doi ? 'https://doi.org/' + p.doi : p.url}" ${ext}>${esc(t)}</a>` : esc(t);
        };
        const L = v => (v && typeof v === 'object') ? v[LANG] : (v || '');
        const talkHTML = c => `<article class="talk${c.award ? ' talk-award' : ''}">
            <div class="talk-when">${esc(L(c.when))}</div>
            <div class="talk-main">
                <h4>${c.href ? `<a href="${c.href}" ${ext}>${esc(c.name)}</a>` : esc(c.name)}</h4>
                <p class="talk-place">${esc(L(c.place))}${c.href ? ` · <a class="talk-link" href="${c.href}" ${ext}>${c.hrefLabel ? L(c.hrefLabel) : T.confSite} ↗</a>` : ''}</p>
                <ul>${c.items.map(it => `<li><span class="tk ${it.talk ? 'tk-talk' : ''}">${it.talk ? T.talkLabel : T.paperLabel}</span>
                    <span class="tt">${paperLink(L(it.t))}</span>${it.note ? `<span class="tn">${it.award ? '🏆 ' : ''}${esc(L(it.note))}</span>` : ''}</li>`).join('')}</ul>
            </div></article>`;
        const yearOf = c => +((c.when.en.match(/(20\d\d)/g) || ['0']).pop());
        const cutoff = new Date().getFullYear() - 1;
        const recent = S.talks.filter(c => yearOf(c) >= cutoff), older = S.talks.filter(c => yearOf(c) < cutoff);
        $('talk-list').innerHTML = recent.map(talkHTML).join('') + (older.length ?
            `<div id="talks-older" hidden>${older.map(talkHTML).join('')}</div>
             <button type="button" class="btn-more" id="talks-toggle">${T.showAllTalks(older.length)}</button>` : '');
        if (older.length) $('talks-toggle').onclick = () => {
            const box = $('talks-older'), open = box.hidden;
            box.hidden = !open;
            $('talks-toggle').textContent = open ? T.showFewerTalks : T.showAllTalks(older.length);
        };

        }
        if (has('repos')) {
        // code
        $('repos').innerHTML = S.repos.map(([n, h, d]) => {
            const gh = h.includes('github.com');
            return `<a class="repo" href="${h}" ${ext}><span class="repo-kind">${gh ? 'GitHub' : 'Platform'}</span>
                <h4>${esc(n)}</h4><p>${esc(d[LANG])}</p></a>`;
        }).join('');

        }
        if (has('positions')) {
        // CV
        const tl = arr => arr.map(e => `<li><span class="when">${e.y}</span><b>${esc(e[LANG][0])}</b><span class="what">${esc(e[LANG][1])}</span>${e.d ? `<span class="desc">${esc(e.d[LANG])}</span>` : ''}</li>`).join('');
        $('positions').innerHTML = tl(S.positions.slice().sort((a, b) => parseInt(b.y, 10) - parseInt(a.y, 10) || (/–$/.test(b.y) - /–$/.test(a.y))));
        $('education').innerHTML = tl(S.education);
        $('service').innerHTML = S.service[LANG].map(s => `<li>${s}</li>`).join('');
        $('awards').innerHTML = S.awards[LANG].map(s => `<li>${esc(s)}</li>`).join('');

        }
        // news
        if (has('news-list')) {
            const fmt = d => new Date(d + 'T12:00:00').toLocaleDateString(LANG === 'ro' ? 'ro-RO' : 'en-GB', { month: 'short', year: 'numeric' });
            $('news-list').innerHTML = S.news.map(n => { const h = /^https?:/.test(n.href) ? n.href : pageUrl(n.href);
                return `<li><time datetime="${n.d}">${fmt(n.d)}</time><a href="${h}"${/^https?:/.test(n.href) ? ' ' + ext : ''}>${esc(n[LANG])}</a></li>`; }).join('');
        }
        // CV page: link to the publications page and the PDF link
        if (has('cv-pubs-note')) {
            $('cv-pubs-note').innerHTML = `${T.cvPubsNote(PUBS.length)} <a href="${pageUrl('publications')}">${T.cvPubsLink}</a>.`;
            $('cv-pdf').href = `assets/CV_Daniel_Traian_Pele_${LANG.toUpperCase()}.pdf`;
            $('cv-contact').innerHTML = T.roles.map(r => `${esc(r[0])}, ${esc(r[1])}`).join('<br>') +
                `<br><a href="mailto:danpele@ase.ro">danpele@ase.ro</a> · <a href="https://danpele.github.io">danpele.github.io</a> · ORCID 0000-0002-5891-5495`;
        }
        if (has('page-title')) { $('page-title').textContent = T.pageTitles[PAGE]; $('page-lead').textContent = T.pageLeads[PAGE]; }

        // contact
        $('contact-text').innerHTML = T.contactText;
        $('footer-links').innerHTML = S.links.map(([n, h]) => `<a href="${h}"${h.startsWith('mailto') ? '' : ' ' + ext}>${n}</a>`).join('');
        $('footer').innerHTML = `&copy; ${new Date().getFullYear()} ${T.footer}`;
    }

    // ---------------- publications ----------------
    function themeFilter() { return theme === null ? null : new RegExp(S.themes[theme].rx, 'i'); }

    function renderFilters() {
        const counts = { all: PUBS.length };
        PUBS.forEach(p => { counts[p.c] = (counts[p.c] || 0) + 1; });
        $('pub-filters').innerHTML = Object.entries(T.cats).filter(([k]) => counts[k]).map(([k, v]) =>
            `<button type="button" data-c="${k}" aria-pressed="${k === cat}">${v} <small>${counts[k]}</small></button>`).join('');
        $('pub-filters').querySelectorAll('button').forEach(b => {
            b.onclick = () => { cat = b.dataset.c; renderFilters(); renderPubs(); };
        });
        const box = $('pub-theme');
        if (theme === null) { box.hidden = true; return; }
        box.hidden = false;
        box.innerHTML = `${icon(S.themes[theme].icon)} <span>${T.themeActive(esc(S.themes[theme][LANG][0]))}</span> <button type="button" id="theme-clear">${T.clear} ×</button>`;
        $('theme-clear').onclick = () => { theme = null; renderFilters(); renderPubs(); };
    }

    const codeOf = p => { const hit = (S.codeLinks || []).find(([k]) => (p.doi && p.doi === k) || p.t.startsWith(k)); return hit ? hit[1] : null; };
    function bibtex(p) {
        const first = (p.a[0] || 'Pele').split(/\s+/).slice(-1)[0].normalize('NFKD').replace(/[^A-Za-z]/g, '');
        const key = first + p.y + p.t.split(/\s+/)[0].normalize('NFKD').replace(/[^A-Za-z]/g, '').toLowerCase();
        const type = p.c === 'journal' ? 'article' : p.c === 'proc' ? 'inproceedings' : p.kind === 'book' ? 'book' : p.c === 'chapter' ? 'incollection' : 'techreport';
        const f = [['author', p.a.join(' and ')], ['title', p.t], ['year', String(p.y)]];
        if (type === 'article') f.push(['journal', p.v]); else if (type === 'inproceedings') f.push(['booktitle', p.v]);
        else if (type === 'incollection') { f.push(['booktitle', p.book || p.v]); if (p.ed) f.push(['editor', p.ed.replace(/, /g, ' and ')]); f.push(['publisher', p.v]); }
        else if (type === 'book') f.push(['publisher', p.v]); else f.push(['institution', p.v]);
        if (p.vol) f.push(['volume', p.vol]); if (p.no) f.push(['number', p.no]); if (p.p) f.push(['pages', String(p.p).replace('–', '--')]);
        if (p.doi) f.push(['doi', p.doi]); else if (p.url) f.push(['url', p.url]);
        return `@${type}{${key},\n` + f.map(([k, v]) => `  ${k} = {${v}}`).join(',\n') + '\n}';
    }
    function toggleBib(btn) {
        const li = btn.closest('li'), old = li.querySelector('.bib');
        if (old) { old.remove(); return; }
        const box = document.createElement('div'); box.className = 'bib';
        box.innerHTML = `<pre>${esc(bibtex(PUBS[+btn.dataset.bib]))}</pre><button type="button" class="pub-btn">${T.copy}</button>`;
        box.querySelector('button').onclick = e => { navigator.clipboard && navigator.clipboard.writeText(box.querySelector('pre').textContent); e.target.textContent = T.copied; };
        li.appendChild(box);
    }
    const authors = a => a.map(n => /\bPele$/i.test(n) && /Daniel|Dan/i.test(n) ? `<b>${esc(n)}</b>` : esc(n)).join(', ');

    function renderPubs() {
        const q = query.trim().toLowerCase(), rx = themeFilter();
        const list = PUBS.filter(p => (cat === 'all' || p.c === cat) && (!rx || rx.test(p.t)) &&
            (!q || [p.t, p.v, p.a.join(' '), p.y].join(' ').toLowerCase().includes(q)));

        // publications per year for the current selection
        const byYear = {};
        list.forEach(p => { byYear[p.y] = (byYear[p.y] || 0) + 1; });
        const all = PUBS.map(p => p.y), lo = Math.min(...all), hi = Math.max(...all);
        const max = Math.max(1, ...Object.values(byYear));
        let bars = '';
        for (let y = lo; y <= hi; y++) {
            const n = byYear[y] || 0;
            bars += `<div class="yb" title="${y}: ${n}"><i style="height:${n ? Math.max(6, 100 * n / max) : 0}%"></i>${n ? `<em>${n}</em>` : ''}<span>${(y % 4 === 0 || y === hi) ? y : ''}</span></div>`;
        }
        $('pub-years').innerHTML = bars;

        if (!list.length) { $('pub-list').innerHTML = `<p class="muted">${T.noResults}</p>`; return; }
        let html = '', year = null;
        list.forEach(p => {
            if (p.y !== year) { if (year !== null) html += '</ol></div>'; year = p.y; html += `<div class="pub-year"><h3 class="year">${year}</h3><ol class="pubs">`; }
            const vol = [p.vol && `${p.vol}${p.no ? `(${p.no})` : ''}`, p.p].filter(Boolean).join(', ');
            const link = p.doi ? `https://doi.org/${p.doi}` : (p.url || null);
            const kindLabel = p.kind === 'book' ? T.bookLabel : p.kind === 'chapter' ? T.chapterLabel : T.cats[p.c];
            const venue = p.book ? `${p.book === p.t ? T.inCollective : `${T.inVolume} <em>${esc(p.book)}</em>`}${p.ed ? ` (${esc(p.ed)}, ${T.eds})` : ''}, ${esc(p.v)}${p.p ? `, pp. ${esc(p.p)}` : ''}`
                : `<em>${esc(p.v)}</em>${vol ? `, ${esc(vol)}` : ''}`;
            html += `<li><span class="kind k-${p.c}">${kindLabel}</span>
                ${p.award ? `<span class="award">🏆 ${T.bestPaper}, ${esc(p.award)}</span>` : ''}
                <div class="pt">${link ? `<a href="${link}" ${ext}>${esc(p.t)}</a>` : esc(p.t)}</div>
                ${p.a.length ? `<div class="pa">${authors(p.a)}</div>` : ''}
                <div class="pv">${venue}${p.doi ? ` · <a class="doi" href="${link}" ${ext}>doi:${esc(p.doi)}</a>` : ''}</div>
                <div class="pub-actions"><button type="button" class="pub-btn" data-bib="${PUBS.indexOf(p)}">${T.bibtex}</button>${codeOf(p) ? `<a class="pub-btn" href="${codeOf(p)}" ${ext}>${T.codeLink} ↗</a>` : ''}</div></li>`;
        });
        $('pub-list').innerHTML = html + '</ol></div>';
        $('pub-list').querySelectorAll('[data-bib]').forEach(b => { b.onclick = () => toggleBib(b); });
    }

    // ---------------- behaviour ----------------
    function countUp() {
        document.querySelectorAll('.kpi b').forEach(b => {
            const n = +b.dataset.n, t0 = performance.now();
            const step = t => { const k = Math.min(1, (t - t0) / 900); b.textContent = Math.round(n * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(step); };
            if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) requestAnimationFrame(step);
        });
    }

    function reveal() {
        if (!('IntersectionObserver' in window)) return;
        const io = new IntersectionObserver(es => es.forEach(e => {
            if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
        }), { rootMargin: '0px 0px -8% 0px' });
        document.querySelectorAll('.section .wrap > *').forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight) return;   // already visible: no animation
            el.classList.add('rv'); io.observe(el);
        });
        setTimeout(() => document.querySelectorAll('.rv').forEach(el => el.classList.add('in')), 2500);
    }

    function navSpy() {
        const links = [...document.querySelectorAll('#nav a')];
        const secs = links.filter(a => a.getAttribute('href').startsWith('#')).map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
        const on = () => {
            $('topbar').classList.toggle('scrolled', window.scrollY > 40);
            let cur = null;
            secs.forEach(s => { if (s.getBoundingClientRect().top < 120) cur = s.id; });
            links.forEach(a => a.classList.toggle('active', a.getAttribute('aria-current') === 'page' || a.getAttribute('href') === '#' + cur));
        };
        window.addEventListener('scroll', on, { passive: true });
        on();
    }

    if (has('pub-search')) $('pub-search').addEventListener('input', e => { query = e.target.value; renderPubs(); });
    render();
    reveal();
    navSpy();
    // the page is built by script, so re-apply an anchor such as #publications once content exists
    if (location.hash && document.querySelector(location.hash)) {
        const target = document.querySelector(location.hash);
        requestAnimationFrame(() => target.scrollIntoView());
    }
})();
