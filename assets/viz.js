// ============================================================
// Small vector illustrations drawn from simple models (no images):
// densities, price paths, networks. Deterministic (seeded).
// ============================================================
(function () {
    'use strict';

    function rng(seed) {                       // mulberry32
        let a = seed >>> 0;
        return () => {
            a = (a + 0x6D2B79F5) >>> 0;
            let t = a;
            t = Math.imul(t ^ (t >>> 15), t | 1);
            t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
            return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
        };
    }
    function gauss(r) { let u = 0, v = 0; while (!u) u = r(); v = r(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); }
    const normPdf = x => Math.exp(-x * x / 2) / Math.sqrt(2 * Math.PI);
    const tPdf = (x, nu) => {                  // Student t density (via log-gamma)
        const lg = z => { const c = [76.18009172947146, -86.50532032941677, 24.01409824083091, -1.231739572450155, 0.1208650973866179e-2, -0.5395239384953e-5];
            let y = z, tmp = z + 5.5; tmp -= (z + 0.5) * Math.log(tmp); let s = 1.000000000190015; for (const k of c) s += k / ++y; return -tmp + Math.log(2.5066282746310005 * s / z); };
        return Math.exp(lg((nu + 1) / 2) - lg(nu / 2)) / Math.sqrt(nu * Math.PI) * Math.pow(1 + x * x / nu, -(nu + 1) / 2);
    };
    const f = v => v.toFixed(1);
    const path = pts => 'M' + pts.map(p => f(p[0]) + ' ' + f(p[1])).join(' L');
    function scale(vals, lo, hi) { const mn = Math.min(...vals), mx = Math.max(...vals); return vals.map(v => hi - (v - mn) / (mx - mn || 1) * (hi - lo)); }
    function walk(n, seed, vol = 1, drift = 0, jumps = 0) {
        const r = rng(seed); let x = 0; const out = [];
        for (let i = 0; i < n; i++) { x += drift + vol * gauss(r) + (jumps && r() < jumps ? gauss(r) * vol * 6 : 0); out.push(x); }
        return out;
    }
    const svg = (w, h, body, cls = '') => `<svg class="viz ${cls}" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid meet" aria-hidden="true">${body}</svg>`;

    // palette: "dark" (on navy backgrounds) or "light" (on white cards)
    const PAL = {
        dark: { a: '#E7B34A', b: '#8DB4F5', c: 'rgba(255,255,255,0.55)', fillA: 'rgba(231,179,74,0.22)', fillB: 'rgba(141,180,245,0.14)', grid: 'rgba(255,255,255,0.10)' },
        light: { a: '#D9463B', b: '#1F4E9C', c: '#8A99B4', fillA: 'rgba(217,70,59,0.18)', fillB: 'rgba(31,78,156,0.10)', grid: 'rgba(31,78,156,0.10)' }
    };

    const DRAW = {
        // Normal vs Student-t(3) densities, 1% left tail shaded
        tails(p, w = 320, h = 160) {
            const L = 4, xs = []; for (let x = -L; x <= L + 1e-9; x += 0.04) xs.push(x);
            const k = Math.sqrt(3), ts = x => k * tPdf(x * k, 3);   // Student t(3) rescaled to unit variance
            const X = x => 10 + (x + L) / (2 * L) * (w - 20), Y = y => h - 16 - y / 0.66 * (h - 28);
            const n = xs.map(x => [X(x), Y(normPdf(x))]), t = xs.map(x => [X(x), Y(ts(x))]);
            const q = -4.541 / k;   // 1% quantile of the rescaled t(3)
            const tail = xs.filter(x => x <= q).map(x => [X(x), Y(ts(x))]);
            const tailArea = path([[X(-L), Y(0)], ...tail, [X(q), Y(0)]]) + ' Z';
            const fs = Math.round(w / 26);
            return svg(w, h,
                `<line x1="10" x2="${w - 10}" y1="${h - 16}" y2="${h - 16}" stroke="${p.grid}" stroke-width="1"/>` +
                `<path d="${path(n)} L${f(X(L))} ${f(Y(0))} L${f(X(-L))} ${f(Y(0))} Z" fill="${p.fillB}"/>` +
                `<path d="${tailArea}" fill="${p.a}" opacity="0.9"/>` +
                `<path d="${path(n)}" fill="none" stroke="${p.b}" stroke-width="2"/>` +
                `<path d="${path(t)}" fill="none" stroke="${p.a}" stroke-width="2.2"/>` +
                `<line x1="${f(X(q))}" x2="${f(X(q))}" y1="${h - 16}" y2="${f(Y(0.2))}" stroke="${p.a}" stroke-width="1.2" stroke-dasharray="3 3"/>` +
                `<text x="${f(X(q) - 5)}" y="${f(Y(0.2) + 4)}" text-anchor="end" font-size="${fs}" font-family="Inter, sans-serif" fill="${p.a}">VaR 1%</text>`);
        },
        // QQ plot of a fat-tailed sample against the Normal
        qq(p, w = 320, h = 160) {
            const r = rng(15), n = 60, xs = [], ys = [];
            const invN = q => { const a = [2.50662823884, -18.61500062529, 41.39119773534, -25.44106049637], b = [-8.47351093090, 23.08336743743, -21.06224101826, 3.13082909833];
                const c = [0.3374754822726147, 0.9761690190917186, 0.1607979714918209, 0.0276438810333863, 0.0038405729373609, 0.0003951896511919, 0.0000321767881768, 0.0000002888167364, 0.0000003960315187];
                const y = q - 0.5; if (Math.abs(y) < 0.42) { const s = y * y; return y * (((a[3] * s + a[2]) * s + a[1]) * s + a[0]) / ((((b[3] * s + b[2]) * s + b[1]) * s + b[0]) * s + 1); }
                let s = q; if (y > 0) s = 1 - q; s = Math.log(-Math.log(s)); let x = c[0] + s * (c[1] + s * (c[2] + s * (c[3] + s * (c[4] + s * (c[5] + s * (c[6] + s * (c[7] + s * c[8])))))));
                return y < 0 ? -x : x; };
            const sample = []; for (let i = 0; i < n; i++) { const z = gauss(r), u = Math.max(0.12, -Math.log(r())); sample.push(z / Math.sqrt(u) * 0.75); }
            sample.sort((a, b) => a - b);
            sample.forEach((s, i) => { xs.push(invN((i + 0.5) / n)); ys.push(Math.max(-5, Math.min(5, s))); });
            const s = (h - 16) / 7.2, X = x => w / 2 + x * s, Y = y => h / 2 - Math.max(-3.5, Math.min(3.5, y)) * s;
            let d = `<line x1="${f(X(-3.4))}" y1="${f(Y(-3.4))}" x2="${f(X(3.4))}" y2="${f(Y(3.4))}" stroke="${p.b}" stroke-width="1.6"/>`;
            xs.forEach((x, i) => { const tail = Math.abs(ys[i] - x) > 0.7; d += `<circle cx="${f(X(x))}" cy="${f(Y(ys[i]))}" r="${tail ? 3.4 : 2.6}" fill="${tail ? p.a : p.c}"/>`; });
            return svg(w, h, d);
        },
        // efficient frontier with random portfolios
        frontier(p, w = 320, h = 160) {
            const r = rng(8); let d = '';
            for (let i = 0; i < 90; i++) { const s = 0.12 + r() * 0.8, m = 0.1 + Math.sqrt(Math.max(0, s - 0.12)) * 0.8 * r(); d += `<circle cx="${f(20 + s * (w - 40))}" cy="${f(h - 16 - m * (h - 30))}" r="2.2" fill="${p.c}" opacity="0.8"/>`; }
            const fr = []; for (let s = 0.12; s <= 0.95; s += 0.01) fr.push([20 + s * (w - 40), h - 16 - (0.1 + Math.sqrt(s - 0.12) * 0.82) * (h - 30)]);
            const tan = fr[Math.round(fr.length * 0.35)];
            return svg(w, h, d + `<path d="${path(fr)}" fill="none" stroke="${p.b}" stroke-width="2.4"/>` +
                `<line x1="20" y1="${f(h - 26)}" x2="${f(tan[0] + (tan[0] - 20) * 0.9)}" y2="${f(tan[1] - (h - 26 - tan[1]) * 0.9)}" stroke="${p.a}" stroke-width="1.4" stroke-dasharray="4 3"/>` +
                `<circle cx="${f(tan[0])}" cy="${f(tan[1])}" r="5" fill="${p.a}"/>`);
        },
        // forward curves: contango and backwardation
        forward(p, w = 320, h = 160) {
            const n = 24, X = i => 16 + i / (n - 1) * (w - 32); const curve = (a, b, c) => { const o = []; for (let i = 0; i < n; i++) o.push([X(i), h / 2 + a - b * (1 - Math.exp(-i / 6)) + c * Math.sin(i / 1.9)]); return o; };
            const lines = [[20, 45, 6, p.b], [-30, -40, 5, p.a], [5, 12, 9, p.c]];
            return svg(w, h, lines.map(([a, b, c, col]) => { const pts = curve(a, b, c);
                return `<path d="${path(pts)}" fill="none" stroke="${col}" stroke-width="2"/>` + pts.filter((_, i) => i % 4 === 0).map(q => `<circle cx="${f(q[0])}" cy="${f(q[1])}" r="2.4" fill="${col}"/>`).join(''); }).join(''));
        },
        // correlation heatmap
        heatmap(p, w = 320, h = 160) {
            const r = rng(3), k = 8, cs = Math.min((w - 20) / k, (h - 12) / k), x0 = (w - cs * k) / 2, y0 = (h - cs * k) / 2; let d = '';
            for (let i = 0; i < k; i++) for (let j = 0; j < k; j++) {
                const v = i === j ? 1 : Math.max(-1, Math.min(1, (Math.floor(i / 3) === Math.floor(j / 3) ? 0.7 : 0.1) + 0.25 * (r() - 0.5)));
                d += `<rect x="${f(x0 + j * cs + 1)}" y="${f(y0 + i * cs + 1)}" width="${f(cs - 2)}" height="${f(cs - 2)}" rx="2" fill="${v > 0 ? p.b : p.a}" opacity="${f(0.15 + 0.85 * Math.abs(v))}"/>`; }
            return svg(w, h, d);
        },
        // volatility clustering (GARCH-like returns)
        garch(p, w = 320, h = 160) {
            const r = rng(27), n = 170; let s2 = 1, e = 0; const out = [], sig = [];
            for (let i = 0; i < n; i++) { s2 = 0.08 + 0.12 * e * e + 0.85 * s2; e = Math.sqrt(s2) * gauss(r); out.push(e); sig.push(Math.sqrt(s2)); }
            const m = Math.max(...out.map(Math.abs)), X = i => 8 + i / (n - 1) * (w - 16), Y = v => h / 2 - v / m * (h / 2 - 10);
            return svg(w, h, out.map((v, i) => `<line x1="${f(X(i))}" x2="${f(X(i))}" y1="${f(h / 2)}" y2="${f(Y(v))}" stroke="${p.c}" stroke-width="1.4"/>`).join('') +
                `<path d="${path(sig.map((s, i) => [X(i), Y(2 * s)]))}" fill="none" stroke="${p.a}" stroke-width="1.8"/>` +
                `<path d="${path(sig.map((s, i) => [X(i), Y(-2 * s)]))}" fill="none" stroke="${p.a}" stroke-width="1.8"/>`);
        },
        // return series with a VaR band and the breaches marked
        backtest(p, w = 320, h = 160) {
            const r = rng(11); const n = 110, xs = [], ys = [], v = [];
            let s = 1; for (let i = 0; i < n; i++) { s = 0.9 * s + 0.1 * (i > 55 && i < 75 ? 2.4 : 1); const e = gauss(r) * s; ys.push(e); v.push(-2.33 * s); }
            const Y = y => h / 2 - y * (h / 9); const X = i => 8 + i / (n - 1) * (w - 16);
            let bars = '', dots = '';
            ys.forEach((y, i) => { bars += `<line x1="${f(X(i))}" x2="${f(X(i))}" y1="${f(h / 2)}" y2="${f(Y(y))}" stroke="${p.c}" stroke-width="1.6"/>`; if (y < v[i]) dots += `<circle cx="${f(X(i))}" cy="${f(Y(y))}" r="3" fill="${p.a}"/>`; });
            return svg(w, h, bars + `<path d="${path(v.map((y, i) => [X(i), Y(y)]))}" fill="none" stroke="${p.b}" stroke-width="2"/>` + dots);
        },
        // neural-network-like graph
        network(p, w = 320, h = 160) {
            const layers = [4, 6, 6, 3], nodes = [];
            layers.forEach((k, l) => { for (let i = 0; i < k; i++) nodes.push([30 + l * (w - 60) / (layers.length - 1), (i + 1) * h / (k + 1), l]); });
            let e = '';
            nodes.forEach(a => nodes.forEach(b => { if (b[2] === a[2] + 1) e += `<line x1="${f(a[0])}" y1="${f(a[1])}" x2="${f(b[0])}" y2="${f(b[1])}" stroke="${p.c}" stroke-width="0.7" opacity="0.6"/>`; }));
            const c = nodes.map(n => `<circle cx="${f(n[0])}" cy="${f(n[1])}" r="${n[2] === 3 ? 6 : 5}" fill="${n[2] === 3 ? p.a : p.b}"/>`).join('');
            return svg(w, h, e + c);
        },
        // candlesticks with a trend
        candles(p, w = 320, h = 160) {
            const r = rng(5); let x = 0; const c = [];
            for (let i = 0; i < 16; i++) { const o = x; x += gauss(r) * 1.2 + 0.25; const hi = Math.max(o, x) + r() * 1.2, lo = Math.min(o, x) - r() * 1.2; c.push([o, x, hi, lo]); }
            const all = c.flat(), mn = Math.min(...all), mx = Math.max(...all), Y = v => h - 12 - (v - mn) / (mx - mn) * (h - 24);
            const bw = (w - 20) / c.length;
            return svg(w, h, c.map((k, i) => { const cx = 10 + (i + 0.5) * bw, up = k[1] >= k[0], col = up ? p.b : p.a;
                return `<line x1="${f(cx)}" x2="${f(cx)}" y1="${f(Y(k[2]))}" y2="${f(Y(k[3]))}" stroke="${col}" stroke-width="1.2"/>` +
                    `<rect x="${f(cx - bw * 0.32)}" y="${f(Y(Math.max(k[0], k[1])))}" width="${f(bw * 0.64)}" height="${f(Math.max(2, Math.abs(Y(k[0]) - Y(k[1]))))}" fill="${col}" rx="1"/>`; }).join(''));
        },
        // LPPL-type bubble: super-exponential growth with log-periodic oscillations, then a crash
        bubble(p, w = 320, h = 160) {
            const tc = 1, pts = [];
            for (let t = 0; t <= 0.985; t += 0.005) { const d = tc - t; pts.push([t, 3 - 1.8 * Math.pow(d, 0.45) * (1 + 0.09 * Math.cos(8 * Math.log(d) + 1))]); }
            const crash = [[0.99, 2.55], [1.0, 1.9], [1.03, 1.95], [1.06, 1.85], [1.1, 1.9]];
            const all = [...pts, ...crash], X = t => 10 + t / 1.1 * (w - 20), Y = scale(all.map(q => q[1]), 12, h - 12);
            const P = all.map((q, i) => [X(q[0]), Y[i]]);
            return svg(w, h, `<path d="${path(P.slice(0, pts.length))}" fill="none" stroke="${p.b}" stroke-width="2.2"/>` +
                `<path d="${path(P.slice(pts.length - 1))}" fill="none" stroke="${p.a}" stroke-width="2.2"/>` +
                `<line x1="${f(X(0.985))}" x2="${f(X(0.985))}" y1="10" y2="${h - 10}" stroke="${p.a}" stroke-width="1" stroke-dasharray="3 3"/>`);
        },
        // electricity-price-like series with spikes
        spikes(p, w = 320, h = 160) {
            const r = rng(21), n = 140, v = [];
            for (let i = 0; i < n; i++) v.push(50 + 10 * Math.sin(i / 7) + 6 * gauss(r) + (r() < 0.05 ? 60 + 60 * r() : 0));
            const Y = scale(v, 12, h - 10), X = i => 8 + i / (n - 1) * (w - 16);
            return svg(w, h, `<path d="${path(v.map((_, i) => [X(i), Y[i]]))}" fill="none" stroke="${p.b}" stroke-width="1.5"/>` +
                v.map((y, i) => y > 95 ? `<circle cx="${f(X(i))}" cy="${f(Y[i])}" r="3" fill="${p.a}"/>` : '').join(''));
        },
        // three densities of rising entropy
        entropy(p, w = 320, h = 160) {
            const xs = []; for (let x = -5; x <= 5.001; x += 0.05) xs.push(x);
            const X = x => 10 + (x + 5) / 10 * (w - 20), Y = y => h - 12 - y / 0.82 * (h - 26);
            const d = s => xs.map(x => [X(x), Y(normPdf(x / s) / s)]);
            return svg(w, h, `<path d="${path(d(0.5))}" fill="none" stroke="${p.a}" stroke-width="2"/>` +
                `<path d="${path(d(1))}" fill="none" stroke="${p.b}" stroke-width="2"/>` +
                `<path d="${path(d(1.8))}" fill="none" stroke="${p.c}" stroke-width="2"/>`);
        },
        // several price paths, one highlighted
        paths(p, w = 320, h = 160) {
            const n = 120, series = [walk(n, 3, 1, 0.08), walk(n, 8, 1, 0.02), walk(n, 13, 1.3, 0.05), walk(n, 17, 0.8, -0.02)];
            const all = series.flat(), mn = Math.min(...all), mx = Math.max(...all);
            const X = i => 8 + i / (n - 1) * (w - 16), Y = v => h - 10 - (v - mn) / (mx - mn) * (h - 20);
            return svg(w, h, series.map((s, k) => `<path d="${path(s.map((v, i) => [X(i), Y(v)]))}" fill="none" stroke="${k ? p.c : p.a}" stroke-width="${k ? 1.2 : 2.2}" opacity="${k ? 0.7 : 1}"/>`).join(''));
        },
        // trend + seasonality decomposition
        seasonal(p, w = 320, h = 160) {
            const n = 150, X = i => 8 + i / (n - 1) * (w - 16), r = rng(4);
            const tr = [], se = [], y = [];
            for (let i = 0; i < n; i++) { tr.push(i * 0.04); se.push(Math.sin(i / 4)); y.push(tr[i] + se[i] + 0.3 * gauss(r)); }
            const Y1 = scale(y, 10, h * 0.55), Y2 = scale(se, h * 0.64, h - 10);
            return svg(w, h, `<path d="${path(y.map((_, i) => [X(i), Y1[i]]))}" fill="none" stroke="${p.b}" stroke-width="1.6"/>` +
                `<path d="${path(tr.map((_, i) => [X(i), scale(y.map((_, j) => tr[j]), 10, h * 0.55)[i]]))}" fill="none" stroke="${p.a}" stroke-width="2"/>` +
                `<path d="${path(se.map((_, i) => [X(i), Y2[i]]))}" fill="none" stroke="${p.c}" stroke-width="1.4"/>`);
        },
        // scatter of two clusters (classification)
        clusters(p, w = 320, h = 160) {
            const r = rng(9); let s = '';
            for (let i = 0; i < 70; i++) { const g = i % 2, cx = g ? 0.68 : 0.32, cy = g ? 0.38 : 0.62;
                s += `<circle cx="${f(w * (cx + 0.1 * gauss(r)))}" cy="${f(h * (cy + 0.12 * gauss(r)))}" r="3.2" fill="${g ? p.a : p.b}" opacity="0.85"/>`; }
            return svg(w, h, `<line x1="${w * 0.22}" y1="${h * 0.12}" x2="${w * 0.78}" y2="${h * 0.9}" stroke="${p.c}" stroke-width="1" stroke-dasharray="4 4"/>` + s);
        },
        // declining ("zombie") paths
        decay(p, w = 320, h = 160) {
            const n = 110, X = i => 8 + i / (n - 1) * (w - 16); let out = '';
            [[2, -0.06, p.a], [6, -0.02, p.c], [12, 0.01, p.c], [19, -0.09, p.a], [24, 0.03, p.b]].forEach(([sd, dr, col]) => {
                const s = walk(n, sd, 0.9, dr); const Y = s.map(v => h / 2 - v * 2.2);
                out += `<path d="${path(s.map((_, i) => [X(i), Math.min(h - 8, Math.max(8, Y[i]))]))}" fill="none" stroke="${col}" stroke-width="${col === p.c ? 1.2 : 2}" opacity="${col === p.c ? 0.7 : 1}"/>`; });
            return svg(w, h, out);
        },
        // text-token bars feeding a density (LLM risk)
        llm(p, w = 320, h = 160) {
            const r = rng(2); let b = '';
            for (let i = 0; i < 14; i++) b += `<rect x="${12 + i * 10}" y="${f(h / 2 - 4 - r() * 36)}" width="6" height="${f(8 + r() * 36)}" rx="2" fill="${i % 4 ? p.c : p.b}" opacity="0.8"/>`;
            const xs = []; for (let x = -4; x <= 4.001; x += 0.08) xs.push(x);
            const X = x => w * 0.62 + (x + 4) / 8 * (w * 0.35), Y = y => h - 16 - y / 0.42 * (h - 40);
            const d = xs.map(x => [X(x), Y(tPdf(x, 4))]);
            const tail = xs.filter(x => x <= -2.2).map(x => [X(x), Y(tPdf(x, 4))]);
            return svg(w, h, b + `<path d="M${w * 0.5} ${h / 2} L${w * 0.6} ${h / 2}" stroke="${p.a}" stroke-width="2" marker-end=""/>` +
                `<path d="${path([[X(-4), Y(0)], ...tail, [X(-2.2), Y(0)]])} Z" fill="${p.a}"/>` +
                `<path d="${path(d)}" fill="none" stroke="${p.b}" stroke-width="2"/>`);
        },
        // code lines
        code(p, w = 320, h = 160) {
            const r = rng(7); let s = '';
            for (let i = 0; i < 8; i++) { const ind = [0, 1, 1, 2, 2, 1, 0, 1][i] * 18, len = 60 + r() * 150;
                s += `<rect x="${20 + ind}" y="${16 + i * 17}" width="${f(len * 0.35)}" height="7" rx="3.5" fill="${p.a}" opacity="0.9"/>` +
                     `<rect x="${f(26 + ind + len * 0.35)}" y="${16 + i * 17}" width="${f(len * 0.65)}" height="7" rx="3.5" fill="${i % 3 ? p.c : p.b}" opacity="0.8"/>`; }
            return svg(w, h, s);
        },
        // sentiment bars + price line
        sentiment(p, w = 320, h = 160) {
            const r = rng(12), n = 60, X = i => 8 + i / (n - 1) * (w - 16); let b = '';
            const s = []; for (let i = 0; i < n; i++) s.push(Math.sin(i / 6) + 0.6 * gauss(r));
            s.forEach((v, i) => { b += `<rect x="${f(X(i) - 2)}" y="${f(v > 0 ? h * 0.7 - v * 18 : h * 0.7)}" width="4" height="${f(Math.abs(v) * 18)}" fill="${v > 0 ? p.b : p.a}" opacity="0.75"/>`; });
            const pr = walk(n, 31, 1, 0.12), Y = scale(pr, 10, h * 0.45);
            return svg(w, h, b + `<path d="${path(pr.map((_, i) => [X(i), Y[i]]))}" fill="none" stroke="${p.c === '#8A99B4' ? '#13203A' : '#FFFFFF'}" stroke-width="1.8"/>`);
        }
    };

    window.VIZ = (kind, mode = 'light', w, h) => (DRAW[kind] || DRAW.paths)(PAL[mode], w, h);
})();
