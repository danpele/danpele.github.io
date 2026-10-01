// ============================================================
// Conference map and co-author network (D3). Built from SITE.talks and PUBS.
// ============================================================
(function () {
    'use strict';
    const has = id => !!document.getElementById(id);
    const S = window.SITE, PUBS = window.PUBS || [];
    const LANG = document.documentElement.dataset.lang === 'ro' ? 'ro' : 'en';
    const T = S.t[LANG];
    const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

    // city coordinates (lat, lon); matched against the event's place and name
    const CITIES = [
        ['Singapore', 1.30, 103.78], ['Bucharest|București|Business Excellence|AIDA Conference|RuleML', 44.44, 26.10],
        ['Stolberg', 51.57, 10.95], ['Wrocław|Wroclaw', 51.11, 17.06], ['Predeal', 45.50, 25.58], ['Shanghai', 31.23, 121.47],
        ['Berlin|HTW', 52.52, 13.40], ['Pavia', 45.19, 9.16], ['Tokyo', 35.71, 139.72], ['Hsinchu', 24.80, 120.97],
        ['Taipei', 25.04, 121.56], ['Kaohsiung', 22.63, 120.30], ['Sharjah', 25.31, 55.49], ['Napoli|Naples', 40.85, 14.27],
        ['Copenhag|Denmark', 55.79, 12.52], ['Twente', 52.24, 6.85], ['Istanbul', 41.01, 28.98], ['Warsaw', 52.23, 21.01],
        ['Barcelona', 41.39, 2.17], ['Prague', 50.08, 14.44], ['Milan', 45.52, 9.21], ['London', 51.51, -0.12],
        ['Winterthur', 47.50, 8.72], ['Brașov|Brasov', 45.65, 25.61], ['Perugia', 43.11, 12.39], ['Karviná|Karvina', 49.85, 18.54],
        ['Craiova', 44.32, 23.80], ['Dubai', 25.20, 55.27], ['Rotterdam', 51.92, 4.48], ['Hammamet', 36.40, 10.61], ['Pitești|Pitesti', 44.86, 24.87]
    ];
    const cityOf = c => {
        const txt = `${c.place.en || ''} ${c.place.ro || ''} ${c.name}`;
        for (const [rx, lat, lon] of CITIES) if (new RegExp(rx, 'i').test(txt)) return { key: rx.split('|')[0], lat, lon };
        return null;
    };

    const tip = document.querySelector('.viz-tip') || document.createElement('div');
    tip.className = 'viz-tip'; tip.hidden = true; if (!tip.parentNode) document.body.appendChild(tip);
    const showTip = (html, ev) => { tip.innerHTML = html; tip.hidden = false; moveTip(ev); };
    const moveTip = ev => { tip.style.left = Math.min(ev.clientX + 14, window.innerWidth - 300) + 'px'; tip.style.top = (ev.clientY + 14) + 'px'; };
    const hideTip = () => { tip.hidden = true; };

    // ---------------- conference map ----------------
    async function drawMap() {
        const el = document.getElementById('talk-map');
        if (el) el.innerHTML = '';   // the page may be prerendered
        if (!el || !window.d3 || !window.topojson) return;
        const byCity = new Map();
        S.talks.forEach(c => { const g = cityOf(c); if (!g) return;
            const o = byCity.get(g.key) || { ...g, events: [] }; o.events.push(c); byCity.set(g.key, o); });
        const pts = [...byCity.values()];
        const world = window.WORLD_110M;
        const land = topojson.feature(world, world.objects.countries);
        const W = 960, H = 440;
        const proj = d3.geoNaturalEarth1().fitExtent([[10, 10], [W - 10, H - 10]], { type: 'Sphere' });
        const geo = d3.geoPath(proj);
        const svg = d3.select(el).append('svg').attr('viewBox', `0 0 ${W} ${H}`).attr('class', 'map-svg');
        svg.append('rect').attr('width', W).attr('height', H).attr('rx', 10).attr('class', 'map-bg');
        const zg = svg.append('g');
        zg.append('path').attr('d', geo({ type: 'Sphere' })).attr('class', 'map-sphere');
        zg.append('path').attr('d', geo(d3.geoGraticule10())).attr('class', 'map-grat');
        zg.append('g').selectAll('path').data(land.features).join('path').attr('d', geo).attr('class', 'map-land');
        const r = d3.scaleSqrt().domain([1, d3.max(pts, d => d.events.length)]).range([4, 13]);
        const home = proj([26.10, 44.44]);
        zg.append('g').selectAll('path').data(pts.filter(p => p.key !== 'Bucharest')).join('path')
            .attr('class', 'map-arc')
            .attr('d', d => { const p = proj([d.lon, d.lat]); const mx = (home[0] + p[0]) / 2, my = Math.min(home[1], p[1]) - Math.abs(home[0] - p[0]) * 0.18;
                return `M${home[0]},${home[1]} Q${mx},${my} ${p[0]},${p[1]}`; });
        const dots = zg.append('g').selectAll('circle').data(pts.sort((a, b) => b.events.length - a.events.length)).join('circle')
            .attr('class', d => 'map-dot' + (d.key === 'Bucharest' ? ' home' : ''))
            .attr('cx', d => proj([d.lon, d.lat])[0]).attr('cy', d => proj([d.lon, d.lat])[1])
            .attr('r', d => r(d.events.length))
            .on('mouseenter', (ev, d) => showTip(`<b>${esc(cityName(d))}</b> · ${d.events.length}<ul>` +
                d.events.slice(0, 8).map(e => `<li>${esc(e.name)} <span>${esc(e.when[LANG])}</span></li>`).join('') +
                (d.events.length > 8 ? `<li>…</li>` : '') + '</ul>', ev))
            .on('mousemove', moveTip).on('mouseleave', hideTip);
        // zoom: start framed on the region with events, allow the whole world and closer views
        const zoom = d3.zoom().scaleExtent([1, 12]).translateExtent([[0, 0], [W, H]])
            .on('zoom', ev => { zg.attr('transform', ev.transform); dots.attr('r', d => r(d.events.length) / ev.transform.k).attr('stroke-width', 1.2 / ev.transform.k); });
        svg.call(zoom).on('wheel.zoom', null);                         // page scroll stays normal; zoom with buttons, pinch or double click
        const [[x0, y0], [x1, y1]] = [proj([-12, 66]), proj([150, -10])];
        const k0 = Math.min(W / (x1 - x0), H / (y1 - y0)) * 0.95;
        const start = d3.zoomIdentity.translate(W / 2, H / 2).scale(k0).translate(-(x0 + x1) / 2, -(y0 + y1) / 2);
        svg.call(zoom.transform, start);
        const ctl = d3.select(el).append('div').attr('class', 'map-ctl');
        ctl.append('button').attr('type', 'button').attr('aria-label', 'Zoom in').text('+').on('click', () => svg.transition().duration(300).call(zoom.scaleBy, 1.6));
        ctl.append('button').attr('type', 'button').attr('aria-label', 'Zoom out').text('−').on('click', () => svg.transition().duration(300).call(zoom.scaleBy, 1 / 1.6));
        ctl.append('button').attr('type', 'button').attr('aria-label', 'Reset').html('&#8634;').on('click', () => svg.transition().duration(400).call(zoom.transform, start));
        ctl.append('button').attr('type', 'button').attr('aria-label', 'World').html('&#127760;').on('click', () => svg.transition().duration(400).call(zoom.transform, d3.zoomIdentity));
        document.getElementById('talk-map-note').textContent = T.mapNote(S.talks.length, nCities);
    }
    const CITY_RO = { Bucharest: 'București', Copenhag: 'Copenhaga', Napoli: 'Napoli', Twente: 'Enschede (Twente)', Milan: 'Milano', Prague: 'Praga',
        Warsaw: 'Varșovia', London: 'Londra', Tokyo: 'Tokyo', Shanghai: 'Shanghai', Wrocław: 'Wrocław', Brașov: 'Brașov', Karviná: 'Karviná', Pitești: 'Pitești' };
    const CITY_EN = { Copenhag: 'Copenhagen', Napoli: 'Naples', Twente: 'Enschede (Twente)', Brașov: 'Brașov' };
    const cityName = d => (LANG === 'ro' ? CITY_RO[d.key] : CITY_EN[d.key]) || d.key;

    // ---------------- co-author network ----------------
    function drawNetwork() {
        const el = document.getElementById('coauthor-net');
        if (!el || !window.d3) return;
        el.innerHTML = '';   // the page may be prerendered
        const norm = n => n.normalize('NFKD').replace(/[̀-ͯ]/g, '').toLowerCase();
        const keyOf = n => { const parts = norm(n).replace(/[.,]/g, ' ').split(/[\s]+/).filter(Boolean); if (!parts.length) return null;
            const last = parts[parts.length - 1].split('-')[0]; return last + '|' + parts[0][0]; };
        const isMe = n => /pele$/i.test(norm(n).trim()) && /(daniel|dan|d\. ?t)/i.test(norm(n));
        const names = new Map(), cnt = new Map(), pair = new Map();
        PUBS.forEach(p => {
            const ks = [...new Set(p.a.filter(a => a && !/et al/i.test(a) && !isMe(a)).map(a => { const k = keyOf(a); if (!k) return null;
                const cur = names.get(k); if (!cur || a.length > cur.length) names.set(k, a.replace(/\b([A-ZĂÂÎȘȚŞŢ])([A-ZĂÂÎȘȚŞŢ]+)\b/g, (m, x, y) => x + y.toLowerCase())); return k; }).filter(Boolean))];
            ks.forEach(k => cnt.set(k, (cnt.get(k) || 0) + 1));
            for (let i = 0; i < ks.length; i++) for (let j = i + 1; j < ks.length; j++) {
                const e = [ks[i], ks[j]].sort().join('~'); pair.set(e, (pair.get(e) || 0) + 1); }
        });
        const keep = [...cnt.entries()].filter(([, c]) => c >= 2).map(([k]) => k);
        const keepSet = new Set(keep);
        const ME = { id: 'me', name: 'Daniel Traian Pele', n: PUBS.length, me: true };
        const nodes = [ME, ...keep.map(k => ({ id: k, name: names.get(k), n: cnt.get(k) }))];
        const links = keep.map(k => ({ source: 'me', target: k, w: cnt.get(k), spoke: true }));
        pair.forEach((w, e) => { const [a, b] = e.split('~'); if (w >= 2 && keepSet.has(a) && keepSet.has(b)) links.push({ source: a, target: b, w }); });
        const W = 960, H = 560;
        const svg = d3.select(el).append('svg').attr('viewBox', `0 0 ${W} ${H}`).attr('class', 'net-svg');
        const r = d3.scaleSqrt().domain([2, d3.max(nodes.filter(n => !n.me), d => d.n)]).range([5, 17]);
        const sim = d3.forceSimulation(nodes)
            .force('link', d3.forceLink(links).id(d => d.id).distance(d => d.spoke ? 170 - Math.min(90, d.w * 7) : 60).strength(d => d.spoke ? 0.25 : 0.05))
            .force('charge', d3.forceManyBody().strength(-230))
            .force('collide', d3.forceCollide(d => (d.me ? 30 : r(d.n)) + 3))
            .force('center', d3.forceCenter(W / 2, H / 2))
            .stop();
        ME.fx = W / 2; ME.fy = H / 2;
        for (let i = 0; i < 400; i++) sim.tick();
        nodes.forEach(d => { d.x = Math.max(20, Math.min(W - 20, d.x)); d.y = Math.max(20, Math.min(H - 20, d.y)); });
        svg.append('g').selectAll('line').data(links).join('line')
            .attr('class', d => d.spoke ? 'net-spoke' : 'net-link')
            .attr('stroke-width', d => d.spoke ? 0.6 + Math.min(3, d.w * 0.25) : 0.6 + Math.min(2, d.w * 0.3))
            .attr('x1', d => d.source.x).attr('y1', d => d.source.y).attr('x2', d => d.target.x).attr('y2', d => d.target.y);
        const g = svg.append('g').selectAll('g').data(nodes).join('g').attr('transform', d => `translate(${d.x},${d.y})`);
        g.append('circle').attr('r', d => d.me ? 26 : r(d.n)).attr('class', d => d.me ? 'net-me' : 'net-node');
        g.filter(d => d.me).append('text').attr('class', 'net-me-label').attr('text-anchor', 'middle').attr('dy', '0.35em').text('DTP');
        g.filter(d => !d.me && d.n >= 4).append('text').attr('class', 'net-label').attr('text-anchor', 'middle')
            .attr('dy', d => -r(d.n) - 5).text(d => d.name.split(/\s+/).slice(-1)[0]);
        g.on('mouseenter', (ev, d) => showTip(d.me ? `<b>${esc(d.name)}</b>` :
                `<b>${esc(d.name)}</b><br>${d.n} ${T.netPapers}`, ev))
            .on('mousemove', moveTip).on('mouseleave', hideTip);
        document.getElementById('coauthor-note').textContent = T.netNote(keep.length, cnt.size);
    }

    function load(src) { return new Promise((res, rej) => { const s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = rej; document.head.appendChild(s); }); }
    load('assets/vendor/d3.min.js')
        .then(() => load('assets/vendor/topojson-client.min.js'))
        .then(() => has('talk-map') ? load('assets/vendor/countries-110m.js') : null)
        .then(() => { drawNetwork(); return drawMap(); })
        .catch(() => { /* offline: the lists below still work */ });
})();
