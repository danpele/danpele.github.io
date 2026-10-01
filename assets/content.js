// ============================================================
// Site content (EN / RO). Publications are in pubs.js.
// ============================================================
window.SITE = {
    links: [
        ['Email', 'mailto:danpele@ase.ro'],
        ['Google Scholar', 'https://scholar.google.com/citations?user=8dmnNZ4AAAAJ'],
        ['ORCID', 'https://orcid.org/0000-0002-5891-5495'],
        ['GitHub', 'https://github.com/danpele'],
        ['ResearchGate', 'https://www.researchgate.net/profile/Daniel_Traian_Pele'],
        ['LinkedIn', 'https://www.linkedin.com/in/daniel-traian-pele-4a73a49/']
    ],

    // News on the home page (newest first)
    news: [
        { d: '2026-09-26', en: 'Talk at IntelligenceX 2026 (NUS, Singapore): diagnosing and recalibrating tail-risk forecasts.', ro: 'Prezentare la IntelligenceX 2026 (NUS, Singapore): diagnosticarea și recalibrarea prognozelor de tail risk.', href: 'talks' },
        { d: '2026-09-01', en: 'Lecture at the HTW Berlin summer school “Data Science for Sustainable Finance and Economics”.', ro: 'Prelegere la școala de vară HTW Berlin „Data Science for Sustainable Finance and Economics”.', href: 'talks' },
        { d: '2026-07-15', en: 'Invited-session talk at IFCS 2026 (Milan): foundation models in risk forecasting.', ro: 'Prezentare în sesiune invitată la IFCS 2026 (Milano): foundation models în prognoza riscului.', href: 'talks' },
        { d: '2026-07-01', en: 'New paper in Mathematics: finite-sample precision limits for Expected Shortfall forecast comparisons.', ro: 'Articol nou în Mathematics: limitele de precizie în eșantioane finite pentru compararea prognozelor Expected Shortfall.', href: 'https://doi.org/10.3390/math14132316' },
        { d: '2026-06-12', en: 'Talk at the Quantitative Finance Conference 2026 (NUS, Singapore).', ro: 'Prezentare la Quantitative Finance Conference 2026 (NUS, Singapore).', href: 'talks' },
        { d: '2026-03-28', en: 'Best Paper Award at ICBE 2026 for “A Multimodal Vision-Language Framework for Financial Anomaly Detection”.', ro: 'Best Paper Award la ICBE 2026 pentru „A Multimodal Vision-Language Framework for Financial Anomaly Detection”.', href: 'https://doi.org/10.2478/picbe-2026-0020' }
    ],

    // code or data linked to a publication (DOI or title start -> repository)
    codeLinks: [
        ['10.1016/j.eswa.2025.128676', 'https://github.com/danpele/LLM-Risk'],
        ['10.24818/18423264/60.2.26.14', 'https://github.com/danpele/TSFM_VaR_CEE'],
        ['10.1016/j.najef.2025.102543', 'https://github.com/danpele/Crypto_Zombies'],
        ['10.1007/s42521-026-00205-3', 'https://github.com/danpele/BitMood'],
        ['10.54694/stat.2024.75', 'https://github.com/danpele/AIAdoptionEU'],
        ['10.2478/mmcks-2025-0003', 'https://github.com/danpele/Covid-RO'],
        ['Recalibrating Tail Risk Forecasts', 'https://github.com/danpele/Conformal_Oracle'],
        ['Financial Risk Meter for the Romanian Stock Market', 'https://danpele.github.io/frm_ro/']
    ],

    // pages (EN file, RO file)
    pages: {
        home: ['index.html', 'index_ro.html'], publications: ['publications.html', 'publications_ro.html'],
        talks: ['talks.html', 'talks_ro.html'], phd: ['phd.html', 'phd_ro.html'], cv: ['cv.html', 'cv_ro.html']
    },

    partners: [
        ['logo_ida.png', 'Institute for Digital Assets', 'https://www.theida.net'],
        ['logo_ai4efin.png', 'AI4EFin', 'https://www.ai4efin.ase.ro'],
        ['logo_msca.png', 'MSCA Digital Finance', 'https://www.digital-finance-msca.com'],
        ['logo_ql.png', 'Quantlet', 'https://quantlet.com'],
        ['logo_qr.png', 'Quantinar', 'https://quantinar.com']
    ],

    // Research themes: rx selects the matching publications (by title) when a theme is clicked
    themes: [
        { icon: 'risk', viz: 'qq', rx: 'value at risk|expected shortfall|\\bvar\\b|\\bes\\b|shortfall|risk meter|market risk|manage risk',
          en: ['Tail risk and backtesting', 'Value at Risk and Expected Shortfall: estimation, forecast comparison, conformal calibration and regulatory backtests.'],
          ro: ['Tail risk și backtesting', 'Value at Risk și Expected Shortfall: estimare, compararea prognozelor, calibrare conformală și backtesting după cerințele Basel.'] },
        { icon: 'ai', viz: 'network', rx: 'llm|language|\\bai\\b|artificial|machine learning|neural|explainab|shap|foundation model|vision|causal',
          en: ['AI and LLMs in finance', 'Large language models, time-series foundation models and explainable machine learning for risk and prices.'],
          ro: ['AI și LLM-uri în finanțe', 'Modele mari de limbaj, time-series foundation models și machine learning explicabil pentru risc și prețuri.'] },
        { icon: 'coin', viz: 'candles', rx: 'crypto|bitcoin|blockchain|ethereum|defi|stablecoin',
          en: ['Digital assets', 'Statistical classification of cryptocurrencies, liquidity, sentiment and on-chain innovation.'],
          ro: ['Active digitale', 'Clasificarea statistică a criptomonedelor, lichiditate, sentiment și inovație on-chain.'] },
        { icon: 'bubble', viz: 'bubble', rx: 'bubble|crash|log.period|herding|metcalfe|zombie|early warning',
          en: ['Bubbles, crashes and early warning', 'Log-periodic power laws, Metcalfe’s law, herding and early-warning systems.'],
          ro: ['Bule, crahuri și avertizare timpurie', 'Log-periodic power laws, legea lui Metcalfe, herding și sisteme de avertizare timpurie.'] },
        { icon: 'bolt', viz: 'spikes', rx: 'energy|electricity|power market|battery|redispatch',
          en: ['Energy finance', 'Electricity price spikes, energy–stock linkages, systemic risk in the energy sector.'],
          ro: ['Energy finance', 'Spike-uri de preț pe piața de electricitate, legătura dintre prețurile energiei și bursă, risc sistemic în sectorul energetic.'] },
        { icon: 'entropy', viz: 'entropy', rx: 'entropy|efficien|tweedie|alpha-stable|dividend|capital structure|risk premium',
          en: ['Entropy and market structure', 'Information entropy as a risk measure, market efficiency and distributional models.'],
          ro: ['Entropie și structura pieței', 'Entropia informațională ca măsură de risc, eficiența pieței și modele de distribuție.'] }
    ],

    // Selected papers (looked up in pubs.js by DOI)
    featured: [
        { doi: '10.1016/j.eswa.2025.128676', viz: 'llm', img: 'p_llm.jpg',
          en: 'Large language models forecast Value at Risk and Expected Shortfall, benchmarked against classical risk models with formal backtests.',
          ro: 'Modele mari de limbaj prognozează Value at Risk și Expected Shortfall, comparate cu modele clasice de risc prin backtesting formal.' },
        { doi: '10.24818/18423264/60.2.26.14', viz: 'backtest', img: 'p_tsfm.jpg',
          en: 'Zero-shot VaR and ES forecasts from time-series foundation models, recalibrated with conformal methods.',
          ro: 'Prognoze zero-shot de VaR și ES din time-series foundation models, recalibrate cu metode conformale.' },
        { doi: '10.1007/s00180-026-01742-6', viz: 'code', img: 'logo_ql.png', logo: true,
          en: 'The Quantlet platform: every chart and table linked to runnable, citable code.',
          ro: 'Platforma Quantlet: fiecare grafic și tabel legat de cod executabil și citabil.' },
        { doi: '10.1080/1351847x.2021.1960403', viz: 'clusters', img: null,
          en: 'A statistical classification of cryptocurrencies against traditional asset classes.',
          ro: 'O clasificare statistică a criptomonedelor în raport cu clasele tradiționale de active.' },
        { doi: '10.1016/j.najef.2025.102543', viz: 'decay', img: null,
          en: 'Machine-learning early warning for crypto-assets that turn into “zombies”.',
          ro: 'Avertizare timpurie cu machine learning pentru criptoactivele care devin „zombie”.' },
        { doi: '10.1007/s42521-026-00205-3', viz: 'sentiment', img: 'p_bitmood.jpg',
          en: 'Emotions in Facebook posts and their link to Bitcoin prices and trading volume.',
          ro: 'Emoțiile din postările de pe Facebook și legătura lor cu prețul și volumul Bitcoin.' }
    ],

    courses: [
        { href: 'https://danpele.github.io/MFM/', viz: 'frontier', site: true, img: 'c_mfm.jpg',
          en: ['Modelling Financial Markets', "Master's, CSIE – Applied Statistics and Data Science", 'Econometrics of returns, volatility, tail risk, derivatives, machine learning, LLMs and foundation models for finance, on real data with reproducible code.'],
          ro: ['Modelarea piețelor financiare', 'Master, CSIE – Statistică aplicată și Data Science', 'Econometria randamentelor, volatilitate, tail risk, derivate, machine learning, LLM-uri și foundation models în finanțe, pe date reale, cu cod reproductibil.'] },
        { href: 'https://danpele.github.io/SFM/', viz: 'paths', site: true, img: 'c_sfm.jpg',
          en: ['Statistics of Financial Markets', "Bachelor's, 3rd year, CSIE – Statistics and Data Science", 'Returns and stylised facts, volatility, portfolio theory, VaR and Expected Shortfall, with lecture slides, seminars, Python notebooks and Quantlets.'],
          ro: ['Statistica piețelor financiare', 'Licență, anul 3, CSIE – specializarea Statistică și Data Science', 'Randamente și fapte stilizate, volatilitate, teoria portofoliului, VaR și Expected Shortfall, cu slide-uri, seminarii, notebook-uri Python și Quantlets.'] },
        { href: 'https://danpele.github.io/Time-Series-Analysis/', viz: 'seasonal', site: true, img: 'c_tsa.jpg',
          en: ['Time Series Analysis', 'Faculty of Cybernetics, Statistics and Economic Informatics (CSIE)', 'From exponential smoothing and ARIMA to unit roots, volatility models and forecasting evaluation, with code for every chart.'],
          ro: ['Analiza seriilor de timp', 'Facultatea de Cibernetică, Statistică și Informatică Economică (CSIE)', 'De la netezirea exponențială și ARIMA la rădăcini unitare, modele de volatilitate și evaluarea prognozelor, cu cod pentru fiecare grafic.'] },
        { href: 'https://github.com/danpele/EMQA', viz: 'forward', icon: 'bolt',
          en: ['Energy Markets Quantitative Analysis', 'Course repository', 'Oil, gas and electricity prices: seasonality, spikes, ARIMA and GARCH, hedging and machine-learning forecasts.'],
          ro: ['Analiza cantitativă a piețelor de energie', 'Repository de curs', 'Prețurile petrolului, gazelor și energiei electrice: sezonalitate, spike-uri, ARIMA și GARCH, hedging și prognoze cu machine learning.'] },
        { href: 'https://github.com/danpele/NEURAL_BIZ', viz: 'heatmap', icon: 'ai',
          en: ['Neural Networks and Deep Learning', 'Course repository', 'Neural networks and deep learning with business applications.'],
          ro: ['Rețele neuronale și deep learning', 'Repository de curs', 'Rețele neuronale și deep learning cu aplicații în afaceri.'] },
        { href: 'https://github.com/danpele/Stat_fin_markets', viz: 'garch', img: 'c_sfmcode.jpg',
          en: ['Statistics of Financial Markets: code', 'Code repository', 'SAS, R and Python code for the statistics of financial markets.'],
          ro: ['Statistica piețelor financiare: cod', 'Repository de cod', 'Cod SAS, R și Python pentru statistica piețelor financiare.'] }
    ],

    projects: [
        { href: 'https://www.digital-finance-msca.com',
          en: ['DIGITAL: MSCA Industrial Doctoral Network on Digital Finance', '2024–present · Horizon Europe, No. 101119635', 'Project director for ASE and co-leader of Work Package 4, "Driving digital innovation with Blockchain applications"; industrial doctoral training in AI for finance.'],
          ro: ['DIGITAL: MSCA Industrial Doctoral Network on Digital Finance', '2024–prezent · Horizon Europe, nr. 101119635', 'Director de proiect din partea ASE și co-lider al pachetului de lucru 4, „Driving digital innovation with Blockchain applications”; formarea doctoranzilor industriali în AI aplicat în finanțe.'] },
        { href: 'https://www.theida.net',
          en: ['IDA: Institute for Digital Assets', '2023–2026 · PNRR, contract CN760046/23.05.2023', 'Deputy Director. Research: foundation models and LLMs for risk forecasting (LLM-VaR, LLM-ES), machine learning for digital assets (early warning for “zombie” assets, liquidity forecasting).'],
          ro: ['IDA: Institute for Digital Assets', '2023–2026 · PNRR, contract CN760046/23.05.2023', 'Director adjunct. Cercetare: foundation models și LLM-uri pentru prognoza riscului (LLM-VaR, LLM-ES), machine learning pentru active digitale (avertizare timpurie pentru active „zombie”, prognoza lichidității).'] },
        { href: 'https://www.ai4efin.ase.ro',
          en: ['AI4EFin: Artificial Intelligence for Energy Finance', '2023–2026 · PNRR, contract CN760048/23.05.2023', 'Researcher; led the research line on forecasting, explainable AI and statistical calibration and coordinated the PhD students in the team: energy-price forecasting, early warning for price spikes, conformal calibration.'],
          ro: ['AI4EFin: Artificial Intelligence for Energy Finance', '2023–2026 · PNRR, contract CN760048/23.05.2023', 'Cercetător; coordonarea liniei de cercetare prognoză, AI explicabil și calibrare statistică și a doctoranzilor din echipă: prognoza prețului energiei, avertizare timpurie pentru vîrfuri de preț, calibrare conformală.'] },
        { href: 'https://www.cost.eu/actions/CA19130/',
          en: ['COST Action CA19130: Fintech and AI in Finance', '2020–2024', 'Management Committee member for Romania; trainer in the Action’s summer schools.'],
          ro: ['Acțiunea COST CA19130: Fintech and AI in Finance', '2020–2024', 'Membru în Comitetul de Management din partea României; formator în școlile de vară ale acțiunii.'] },
        { href: null,
          en: ['FIN-TECH: Horizon 2020', '2019–2021 · Horizon 2020, No. 825215', 'Financial supervision and technology compliance training programme: an EU-wide risk-management platform.'],
          ro: ['FIN-TECH: Horizon 2020', '2019–2021 · Horizon 2020, nr. 825215', 'Program de formare în supravegherea financiară și conformitatea tehnologică, cu o platformă comună de management al riscului pentru UE.'] },
        { href: null,
          en: ['IRTG 1792: High Dimensional Nonstationary Time Series', '2018–2019 · Humboldt-Universität zu Berlin', 'Researcher on the genus–differentia classification of cryptocurrencies, with Wolfgang Karl Härdle.'],
          ro: ['IRTG 1792: High Dimensional Nonstationary Time Series', '2018–2019 · Humboldt-Universität zu Berlin', 'Cercetător: clasificarea gen proxim–diferență specifică a criptomonedelor, cu Wolfgang Karl Härdle.'] }
    ],

    projectsMore: [
        { y: '2021', en: ['Unified methodology for damage assessment in emergencies and disasters', 'World Bank and the General Inspectorate for Emergency Situations, contract no. 111823/20.08.2021'], ro: ['Metodologia unitară de evaluare a pagubelor în situații de urgență și dezastre', 'Banca Mondială și Inspectoratul General pentru Situații de Urgență, contract nr. 111823/20.08.2021'] },
        { y: '2012–2013', en: ['Pre-financing rate of the EU structural instruments', 'ACIS, contract no. 3/23/57/26.09.2012: econometric model of the impact of pre-financing on the absorption rate'], ro: ['Fundamentarea ratei de prefinanțare a instrumentelor structurale', 'ACIS, contract nr. 3/23/57/26.09.2012: model econometric al impactului prefinanțării asupra ratei de absorbție'] },
        { y: '2011–2012', en: ['Institutional capacity of the National Forecasting Commission (SMIS 27153)', 'Studies on the contribution of SMEs to economic growth and on the private sector in research and innovation: model of the impact of R&D spending on growth'], ro: ['Întărirea capacității instituționale a Comisiei Naționale de Prognoză (SMIS 27153)', 'Studiile „Contribuția IMM-urilor la creșterea economică” și „Rolul sectorului privat în dezvoltarea competiției în sistemul CDI”: model al impactului cheltuielilor de cercetare-dezvoltare asupra creșterii economice'] },
        { y: '2011–2012', en: ['Professionalism in the county statistics offices (SMIS 15966)', 'ASE with the National Institute of Statistics'], ro: ['Profesionalism la nivelul direcțiilor județene de statistică (SMIS 15966)', 'ASE în parteneriat cu Institutul Național de Statistică'] },
        { y: '2009–2011', en: ['CNCSIS IDEI research grants ID_1820 and ID_183', 'Team member'], ro: ['Granturi de cercetare CNCSIS IDEI ID_1820 și ID_183', 'Membru în echipă'] },
        { y: '2008–2011', en: ['Quality in education (CALE), POSDRU', 'Econometric model forecasting labour demand in construction under the macroeconomic and crisis context'], ro: ['Calitate în educație (CALE), POSDRU', 'Model econometric pentru prognoza necesarului de forță de muncă în construcții, în funcție de factorii macroeconomici și de contextul de criză'] },
        { y: '2006', en: ['CEEX research project', 'Team member'], ro: ['Proiect de cercetare CEEX', 'Membru în echipă'] },
        { y: '2002–2006', en: ['CERES research projects', 'Team member'], ro: ['Proiecte de cercetare CERES', 'Membru în echipă'] }
    ],

    repos: [
        ['Quantlet', 'https://quantlet.com', { en: 'Code-snippet knowledge platform: every chart and table linked to runnable code (Computational Statistics, 2026).', ro: 'Platformă de cod: fiecare grafic și tabel legat de cod executabil (Computational Statistics, 2026).' }],
        ['Quantinar', 'https://quantinar.com', { en: 'Peer-to-peer platform with advanced courses in quantitative finance and data science.', ro: 'Platformă P2P cu cursuri avansate de finanțe cantitative și data science.' }],
        ['FRM@RO', 'https://danpele.github.io/frm_ro/', { en: 'Financial Risk Meter for the Romanian market.', ro: 'Financial Risk Meter pentru piața din România.' }],
        ['LLM-Risk', 'https://github.com/danpele/LLM-Risk', { en: 'LLM-VaR and LLM-ES (Expert Systems with Applications).', ro: 'LLM-VaR și LLM-ES (Expert Systems with Applications).' }],
        ['Conformal_Oracle', 'https://github.com/danpele/Conformal_Oracle', { en: 'Conformal VaR recalibration for time-series foundation models and classical benchmarks.', ro: 'Recalibrare conformală a VaR pentru time-series foundation models și modele clasice.' }],
        ['TSFM_VaR_CEE', 'https://github.com/danpele/TSFM_VaR_CEE', { en: 'Foundation models for VaR/ES in CEE markets, with Basel backtesting.', ro: 'Foundation models pentru VaR/ES pe piețele CEE, cu backtesting Basel.' }],
        ['Crypto_Zombies', 'https://github.com/danpele/Crypto_Zombies', { en: 'Early warning for "zombie" crypto-assets with machine learning (NAJEF).', ro: 'Avertizare timpurie pentru criptoactive „zombie” cu machine learning (NAJEF).' }],
        ['BitMood', 'https://github.com/danpele/BitMood', { en: 'AI analysis of Bitcoin trends via Facebook emotions (Digital Finance).', ro: 'Analiza AI a trendurilor Bitcoin prin emoțiile de pe Facebook (Digital Finance).' }],
        ['FRM_Stable_Coins', 'https://github.com/danpele/FRM_Stable_Coins', { en: 'Financial Risk Meter for stablecoins.', ro: 'Financial Risk Meter pentru stablecoins.' }],
        ['aida-ensemble', 'https://github.com/danpele/aida-ensemble', { en: 'LPPL + AI ensemble for bubble and crash detection.', ro: 'Ansamblu LPPL + AI pentru detectarea bulelor și a crahurilor.' }],
        ['AIAdoptionEU', 'https://github.com/danpele/AIAdoptionEU', { en: 'AI adoption in EU enterprises (Statistika).', ro: 'Adoptarea AI în firmele din UE (Statistika).' }],
        ['Covid-RO', 'https://github.com/danpele/Covid-RO', { en: "Mapping COVID-19's digital discourse in Romania (Management & Marketing).", ro: 'Discursul digital despre COVID-19 în România (Management & Marketing).' }]
    ],

    // PhD students (DOCTORAT folder: PIDs, progress reports, CSUD lists). status: ongoing | defended | null (not shown)
    // rx matches the student in publication author lists
    phd: [
     {
      "name": "Miruna-Elena Văduva (Proșcanu)",
      "rx": "Pro[șs]canu, M|M\\. E\\. Pro[șs]canu|Miruna Pro[șs]canu|Miruna.*V[ăa]duva",
      "t": {
       "en": "Beyond the numbers: a statistical X-ray of the Romanian energy market",
       "ro": "Dincolo de cifre: radiografia statistică a pieței de energie din România"
      },
      "start": 2020,
      "end": 2025,
      "status": "defended",
      "photo": "phd_vaduva.jpg"
     },
     {
      "name": "Alexandru-Victor Andrei",
      "rx": "Alexandru.{0,3}Victor.{0,2}Andrei|A\\.-V\\. Andrei|A\\. V\\. Andrei",
      "t": {
       "en": "Explainable Artificial Intelligence (XAI): applications in economics",
       "ro": "Explainable Artificial Intelligence (XAI): aplicații în economie"
      },
      "start": 2023,
      "status": "ongoing",
      "end": null,
      "photo": "phd_andrei.jpg"
     },
     {
      "name": "Ștefan Găman",
      "rx": "G[ăa]man",
      "t": {
       "en": "Risk models for digital assets",
       "ro": "Modele de analiză a riscului activelor digitale"
      },
      "start": 2023,
      "status": "ongoing",
      "end": null,
      "photo": "phd_gaman.jpg"
     },
     {
      "name": "Rahul Tak",
      "rx": "\\bTak\\b",
      "t": {
       "en": "Deep learning algorithms for industry-ready automated trading systems",
       "ro": "Algoritmi deep learning pentru sisteme de tranzacționare automatizate pregătite pentru industrie"
      },
      "start": 2024,
      "status": "ongoing",
      "co": {
       "en": "Joint PhD (cotutelle), with Prof. Adrian Costea; MSCA Digital Finance",
       "ro": "Doctorat în cotutelă, cu Prof. Adrian Costea; MSCA Digital Finance"
      },
      "photo": "phd_tak.jpg",
      "end": null
     },
     {
      "name": "Siang-Li (David) Jheng",
      "rx": "Jheng",
      "t": {
       "en": "Early-warning systems for preventing the deterioration of the performance of financial and economic entities",
       "ro": "Modele de avertizare timpurie pentru prevenirea deteriorării performanțelor entităților financiare și economice"
      },
      "start": 2024,
      "status": "ongoing",
      "co": {
       "en": "Joint PhD (cotutelle), with Prof. Adrian Costea; MSCA Digital Finance",
       "ro": "Doctorat în cotutelă, cu Prof. Adrian Costea; MSCA Digital Finance"
      },
      "end": null,
      "photo": "phd_jheng.jpg"
     },
     {
      "name": "Andrei-Theodor Ginavar",
      "rx": "Ginavar",
      "t": {
       "en": "Application of large language models in the forecast of digital asset returns",
       "ro": "Aplicarea modelelor mari de limbaj în prognoza randamentelor activelor digitale"
      },
      "start": 2024,
      "status": "ongoing",
      "co": {
       "en": "Joint PhD (cotutelle), with Prof. Daniela-Ioana Manea",
       "ro": "Doctorat în cotutelă, cu Prof. Daniela-Ioana Manea"
      },
      "end": null,
      "photo": "phd_ginavar.jpg"
     },
     {
      "name": "Antoaneta Amza",
      "rx": "Amza",
      "t": {
       "en": "LLMs in economics",
       "ro": "Aplicații ale LLM în economie"
      },
      "start": 2025,
      "status": "ongoing",
      "end": null,
      "photo": "phd_amza.jpg"
     },
     {
      "name": "Ioana-Delia Diaconu",
      "rx": "Diaconu",
      "t": {
       "en": "Explainable Artificial Intelligence (XAI): applications in economics",
       "ro": "Explainable Artificial Intelligence (XAI): aplicații în economie"
      },
      "start": 2025,
      "status": "ongoing",
      "end": null,
      "photo": "phd_diaconu.jpg"
     },
     {
      "name": "Diana-Ioana Micu",
      "rx": "\\bMicu\\b",
      "t": {
       "en": "AI tools for financial markets: anomaly detection and crisis prevention",
       "ro": "Instrumente AI pentru piețele financiare: detectarea anomaliilor și prevenirea crizelor"
      },
      "start": 2026,
      "status": "ongoing",
      "end": null,
      "photo": "phd_micu.jpg"
     },
     {
      "name": "Vlad Bolovăneanu",
      "rx": "Bolov[ăa]neanu",
      "t": {
       "en": "Financial fraud detection models",
       "ro": "Modele de detectare a fraudelor financiare"
      },
      "start": 2021,
      "status": "ongoing",
      "end": null,
      "photo": "phd_bolovaneanu.jpg"
     },
     {
      "name": "Alexandru-Adrian Cramer",
      "rx": "Cramer",
      "t": {
       "en": "Applying deep learning and big data techniques in financial instruments trading",
       "ro": "Aplicarea tehnicilor deep learning și big data în tranzacționarea instrumentelor financiare"
      },
      "start": 2022,
      "status": "ongoing",
      "end": null,
      "photo": "phd_cramer.jpg"
     },
     {
      "name": "Saad Obaid Jameel Al-Masoodi",
      "rx": "Masoodi",
      "t": {
       "en": "Statistical methods for financial markets forecasting",
       "ro": "Metode statistice pentru prognoza piețelor financiare"
      },
      "start": 2022,
      "status": "ongoing",
      "end": null,
      "photo": "phd_almasoodi.jpg"
     },
     {
      "name": "Ioana-Alexandra Conda",
      "rx": "Conda",
      "t": {
       "en": "Statistical models for capital markets",
       "ro": "Modele statistice pentru piețele de capital"
      },
      "start": 2021,
      "status": "ongoing",
      "end": null,
      "photo": "phd_conda.jpg"
     }
    ],
    phdTopics: {
        en: ['LLMs in economics', 'Risk models for digital assets', 'Explainable Artificial Intelligence (XAI): applications in economics', 'Predictability of financial crises in the digital era', 'Transparent versus black-box decision-support models in the financial industry'],
        ro: ['Aplicații ale LLM în economie', 'Modele de analiză a riscului activelor digitale', 'Explainable Artificial Intelligence (XAI): aplicații în economie', 'Predictibilitatea crizelor financiare în era digitală', 'Modele transparente versus modele de tip black-box în industria financiară']
    },

    // Conference participations, from the IDA team conference lists (Drive) and travel reports.
    // talk: true = presented by D. T. Pele; otherwise co-authored paper
    talks: [
     {
      "when": {
       "en": "24–26 September 2026",
       "ro": "24–26 septembrie 2026"
      },
      "name": "IntelligenceX 2026: The Global Quantum × AI Frontier",
      "place": {
       "en": "National University of Singapore",
       "ro": "National University of Singapore"
      },
      "items": [
       {
        "t": "One Shift, Two Roles: Diagnosing and Recalibrating Tail Risk Forecasts",
        "talk": true,
        "note": {
         "en": "Session “AI for Energy and Finance”",
         "ro": "Sesiunea „AI for Energy and Finance”"
        }
       }
      ],
      "href": "https://www.soc-ai.org"
     },
     {
      "when": {
       "en": "31 August – 4 September 2026",
       "ro": "31 august – 4 septembrie 2026"
      },
      "name": "Summer School “Data Science for Sustainable Finance and Economics” 2026",
      "place": {
       "en": "HTW Berlin, Germany",
       "ro": "HTW Berlin, Germania"
      },
      "items": [
       {
        "t": "Day-Ahead Forecasting for Redispatch Measures Using Machine Learning Models",
        "talk": true,
        "note": {
         "en": "Lecture",
         "ro": "Prelegere"
        }
       }
      ],
      "href": "https://quantitative-finance-data-science.htw-berlin.de/en/research-practice/summer-school-data-science-for-sustainable-finance-and-economics/summer-school-2026/"
     },
     {
      "when": {
       "en": "14–16 July 2026",
       "ro": "14–16 iulie 2026"
      },
      "name": "IFCS 2026: 19th Conference of the International Federation of Classification Societies",
      "place": {
       "en": "University of Milano-Bicocca, Milan, Italy",
       "ro": "University of Milano-Bicocca, Milano, Italia"
      },
      "items": [
       {
        "t": "Black Boxes for Fat Tails: Foundation Models in Risk Forecasting",
        "talk": true,
        "note": {
         "en": "Invited session “From Data to Insights: the Explainability–Predictability Trade-Off”; with S. Lessmann and W. K. Härdle",
         "ro": "Sesiune invitată „From Data to Insights: the Explainability–Predictability Trade-Off”; cu S. Lessmann și W. K. Härdle"
        }
       }
      ],
      "href": "https://ifcs2026.unimib.it/"
     },
     {
      "when": {
       "en": "10–12 June 2026",
       "ro": "10–12 iunie 2026"
      },
      "name": "Quantitative Finance Conference 2026",
      "place": {
       "en": "Centre for Quantitative Finance, National University of Singapore",
       "ro": "Centre for Quantitative Finance, National University of Singapore"
      },
      "items": [
       {
        "t": "One Scalar, Two Jobs: Conformal Diagnosis and Correction of Tail Risk Forecasts",
        "talk": true,
        "note": {
         "en": "Track D: Digital Assets, FinTech and Decentralised Finance",
         "ro": "Track D: Digital Assets, FinTech and Decentralised Finance"
        }
       },
       {
        "t": "Stable Coin Risks",
        "note": {
         "en": "with K. Fan, W. K. Härdle and Y. Sha",
         "ro": "cu K. Fan, W. K. Härdle și Y. Sha"
        }
       }
      ],
      "href": "https://quantitative-finance-conference-2026.pages.dev/"
     },
     {
      "when": {
       "en": "3–5 June 2026",
       "ro": "3–5 iunie 2026"
      },
      "name": "AIDA Conference 2026: AI and Digital Assets in Energy and Finance",
      "place": {
       "en": "Bucharest University of Economic Studies, Bucharest",
       "ro": "Academia de Studii Economice din București"
      },
      "items": [
       {
        "t": "Large Language Models for Tail Risk Forecasting",
        "talk": true
       },
       {
        "t": "Conformal Diagnosis and Recalibration of Tail Risk Forecasts",
        "talk": true
       }
      ],
      "href": "https://www.theida.net/aida-conf/"
     },
     {
      "when": {
       "en": "7–9 May 2026",
       "ro": "7–9 mai 2026"
      },
      "name": "Machine Learning in Energy and Finance Workshop 2026",
      "place": {
       "en": "Stolberg (Südharz), Germany",
       "ro": "Stolberg (Südharz), Germania"
      },
      "items": [
       {
        "t": "Conformal Recalibration of Foundation Models for Tail Risk Forecasting",
        "talk": true
       }
      ]
     },
     {
      "when": {
       "en": "26–28 March 2026",
       "ro": "26–28 martie 2026"
      },
      "name": "20th International Conference on Business Excellence (ICBE 2026)",
      "place": {
       "en": "Bucharest University of Economic Studies",
       "ro": "Academia de Studii Economice din București"
      },
      "items": [
       {
        "t": "IDA – Institute of Digital Assets",
        "note": {
         "en": "Minitrack chair, with W. K. Härdle",
         "ro": "Chair de minitrack, cu W. K. Härdle"
        }
       },
       {
        "t": "A Multimodal Vision-Language Framework for Financial Anomaly Detection",
        "note": {
         "en": "Best Paper Award",
         "ro": "Best Paper Award"
        },
        "award": true
       },
       {
        "t": "ESG-Aware Asset Selection and Portfolio Optimization: A Comparative Study of Multi-Criteria Decision-Making Methods"
       },
       {
        "t": "Evaluating Intervention Effectiveness during Extreme Price Events: A Counterfactual Analysis of Romania’s 2024 Energy Crisis"
       },
       {
        "t": "Explainable AI in Financial Fraud Detection: Evidence from the IEEE-CIS Fraud Dataset"
       },
       {
        "t": "Explainable AI-Based Early Warning System for Electricity Price Spikes: Evidence from the Romanian Market"
       },
       {
        "t": "Inflation Forecasting with Monetary Policy Narratives: Evidence from an Emerging Economy"
       },
       {
        "t": "Mapping Causal Machine Learning in Energy Finance Domain"
       },
       {
        "t": "Multi-Horizon Explainability in Energy Price Forecasting: Disentangling Market Dynamics and Renewable Intermittency in Romania’s Liberalized Electricity Market"
       },
       {
        "t": "Sustainability of DeFi Carry Trading Using Stablecoins"
       }
      ],
      "href": "https://reference-global.com/issue/PICBE/20/1",
      "award": true
     },
     {
      "when": {
       "en": "15–16 January 2026",
       "ro": "15–16 ianuarie 2026"
      },
      "name": "Practice of Digital Finance – Research Workshop (MSCA Digital Finance)",
      "place": {
       "en": "Bucharest, Romania",
       "ro": "București"
      },
      "items": [
       {
        "t": "First Hitting Time Analysis for DeFi Portfolios",
        "note": {
         "en": "with A. T. Ginavar and F. Liu",
         "ro": "cu A. T. Ginavar și F. Liu"
        }
       },
       {
        "t": "White Paper on Cryptocurrency Indices",
        "note": {
         "en": "with Ș. Găman, B. Będowska-Sójka and W. K. Härdle",
         "ro": "cu Ș. Găman, B. Będowska-Sójka și W. K. Härdle"
        }
       }
      ],
      "href": "https://www.digital-finance-msca.com/event-details-registration/practice-of-digital-finance-research-workshop"
     },
     {
      "when": {
       "en": "11–12 December 2025",
       "ro": "11–12 decembrie 2025"
      },
      "name": "Energy Finance Christmas Workshop",
      "place": {
       "en": "Wrocław University of Science and Technology, Poland",
       "ro": "Wrocław University of Science and Technology, Polonia"
      },
      "items": [
       {
        "t": "Winds of Change: Interpretable Forecasting of Redispatch 2.0 Measures",
        "note": {
         "en": "with A. Petukhina, V. Bolovăneanu, A. Conda et al.",
         "ro": "cu A. Petukhina, V. Bolovăneanu, A. Conda ș.a."
        }
       }
      ],
      "href": "https://www.efc.pwr.edu.pl"
     },
     {
      "when": {
       "en": "21–22 November 2025",
       "ro": "21–22 noiembrie 2025"
      },
      "name": "18th International Conference on Applied Statistics (ICAS 2025)",
      "place": {
       "en": "Predeal, Romania",
       "ro": "Predeal"
      },
      "items": [
       {
        "t": "XAI-Based Early Warning System for Load-Generation Balance in the Romanian Electricity Market",
        "note": {
         "en": "with A.-V. Andrei, A. Amza and D. Diaconu",
         "ro": "cu A.-V. Andrei, A. Amza și D. Diaconu"
        }
       }
      ],
      "href": "https://simpstat.ase.ro/wp-content/uploads/2025/11/ICAS2025-ZOOM-links.pdf"
     },
     {
      "when": {
       "en": "3–7 November 2025",
       "ro": "3–7 noiembrie 2025"
      },
      "name": "MSCA Training Week: Introduction to Blockchain Applications in Finance",
      "place": {
       "en": "Bucharest University of Economic Studies",
       "ro": "Academia de Studii Economice din București"
      },
      "items": [
       {
        "t": "Do Investors Buy Innovation? Market Responses to Ethereum Development Milestones",
        "talk": true
       },
       {
        "t": "Stable Coin Risks",
        "talk": true
       }
      ],
      "href": "https://www.digital-finance-msca.com/event-details-registration/introduction-to-blockchain-applications-in-finance-training-week"
     },
     {
      "when": {
       "en": "20–22 October 2025",
       "ro": "20–22 octombrie 2025"
      },
      "name": "23rd Conference on International Exchange of Professionals (CIEP)",
      "place": {
       "en": "Shanghai, China",
       "ro": "Shanghai, China"
      },
      "items": [
       {
        "t": "AI Models for Systemic Risk: From Markets to Grids",
        "talk": true
       }
      ]
     },
     {
      "when": {
       "en": "9–11 October 2025",
       "ro": "9–11 octombrie 2025"
      },
      "name": "2nd International Conference on Economics – Challenges and Opportunities",
      "place": {
       "en": "Predeal, Romania",
       "ro": "Predeal"
      },
      "items": [
       {
        "t": "Explainable AI for Electricity Price Anomaly Detection: A SHAP-Driven Approach in Romania’s Energy Market",
        "note": {
         "en": "with A.-V. Andrei",
         "ro": "cu A.-V. Andrei"
        }
       }
      ]
     },
     {
      "when": {
       "en": "18–19 September 2025",
       "ro": "18–19 septembrie 2025"
      },
      "name": "Workshop Frontiers in DeFi",
      "place": {
       "en": "HTW Berlin, Germany",
       "ro": "HTW Berlin, Germania"
      },
      "items": [
       {
        "t": "Do Investors Buy Innovation? Market Responses to ETH Development Milestones",
        "talk": true
       }
      ],
      "href": "https://events.htw-berlin.de/files/Stg/WIKO/Frontiers_in_DeFi/20250821_Programm_DeFi_2025.pdf"
     },
     {
      "when": {
       "en": "15–19 September 2025",
       "ro": "15–19 septembrie 2025"
      },
      "name": "Blended Intensive Programme “New Corporate Scenarios: Innovation, Sustainability and Digitalisation”",
      "place": {
       "en": "Università di Pavia, Italy",
       "ro": "Università di Pavia, Italia"
      },
      "items": [
       {
        "t": "Large Language Models for Risk Management",
        "talk": true,
        "note": {
         "en": "Lecture",
         "ro": "Prelegere"
        }
       }
      ]
     },
     {
      "when": {
       "en": "8–12 September 2025",
       "ro": "8–12 septembrie 2025"
      },
      "name": "Summer School “Data Science for Sustainable Finance and Economics” 2025",
      "place": {
       "en": "HTW Berlin, Germany",
       "ro": "HTW Berlin, Germania"
      },
      "items": [
       {
        "t": "Tree-Based Machine Learning Methods",
        "talk": true,
        "note": {
         "en": "Lecture",
         "ro": "Prelegere"
        }
       }
      ],
      "href": "https://far.htw-berlin.de/en/research-practice/summer-school-data-science-for-sustainable-finance-and-economics/summer-school-2025/"
     },
     {
      "when": {
       "en": "20–23 August 2025",
       "ro": "20–23 august 2025"
      },
      "name": "8th International Conference on Econometrics and Statistics (EcoSta 2025)",
      "place": {
       "en": "Waseda University, Tokyo, Japan",
       "ro": "Waseda University, Tokyo, Japonia"
      },
      "items": [
       {
        "t": "Probabilistic Electricity Price Forecasting for Storage Arbitrage and Risk Management in Eastern Europe",
        "note": {
         "en": "with A. Petukhina, S. Lessmann, C. O. Cepoi and A.-V. Andrei",
         "ro": "cu A. Petukhina, S. Lessmann, C. O. Cepoi și A.-V. Andrei"
        }
       }
      ],
      "href": "https://www.cmstatistics.org/EcoSta2025/"
     },
     {
      "when": {
       "en": "30 July – 1 August 2025",
       "ro": "30 iulie – 1 august 2025"
      },
      "name": "Quantitative Finance Conference 2025",
      "place": {
       "en": "National University of Singapore",
       "ro": "National University of Singapore"
      },
      "items": [
       {
        "t": "Marketbusters: Hunting Anomalies with LLMs",
        "talk": true,
        "note": {
         "en": "Track A: Machine Learning Applications to Finance",
         "ro": "Track A: Machine Learning Applications to Finance"
        }
       }
      ],
      "href": "https://www.math.nus.edu.sg/quantitative-finance-conference-2025/"
     },
     {
      "when": {
       "en": "21 June 2025",
       "ro": "21 iunie 2025"
      },
      "name": "5th Yushan-Turing/Euler Conference",
      "place": {
       "en": "Taipei, Taiwan",
       "ro": "Taipei, Taiwan"
      },
      "items": [
       {
        "t": "AI and Digital Finance",
        "talk": true
       }
      ],
      "href": "https://yushanconference.wixsite.com/5th-yushan/event-details/the-5th-yushan-turingeuler-conference"
     },
     {
      "when": {
       "en": "19–20 June 2025",
       "ro": "19–20 iunie 2025"
      },
      "name": "34th Southern District Statistical Seminar & 2025 Annual Meeting of the Chinese Society of Probability and Statistics",
      "place": {
       "en": "National Taipei University, Taiwan",
       "ro": "National Taipei University, Taiwan"
      },
      "items": [
       {
        "t": "LLM-Based Risk Measures",
        "talk": true,
        "note": {
         "en": "Invited session “Digital Assets, LLMs & Risk Perceptions”",
         "ro": "Sesiune invitată „Digital Assets, LLMs & Risk Perceptions”"
        }
       }
      ],
      "href": "https://stsc34.org/general_information/"
     },
     {
      "when": {
       "en": "18 June 2025",
       "ro": "18 iunie 2025"
      },
      "name": "Research seminar, Department of Information Management and Finance",
      "place": {
       "en": "National Yang Ming Chiao Tung University, Hsinchu, Taiwan",
       "ro": "National Yang Ming Chiao Tung University, Hsinchu, Taiwan"
      },
      "items": [
       {
        "t": "AI-Driven Risk Forecasting with LLMs: Concepts and Applications in Financial Markets",
        "talk": true,
        "note": {
         "en": "Invited seminar",
         "ro": "Seminar invitat"
        }
       }
      ]
     },
     {
      "when": {
       "en": "17 June 2025",
       "ro": "17 iunie 2025"
      },
      "name": "English Lecture Event “Unveiling Return Dynamics: Energy, Crypto, and Equity Factor Insights”",
      "place": {
       "en": "Kaohsiung Medical University, Taiwan",
       "ro": "Kaohsiung Medical University, Taiwan"
      },
      "items": [
       {
        "t": "Infodemic Insights: Mapping COVID-19’s Digital Discourse in Romania",
        "talk": true,
        "note": {
         "en": "Invited lecture",
         "ro": "Prelegere invitată"
        }
       }
      ],
      "href": "https://devel.kmu.edu.tw/index.php/zh-tw/%E5%85%AC%E5%91%8A%E4%BA%8B%E9%A0%85/%E6%9C%AC%E8%99%95%E5%85%AC%E5%91%8A/3195"
     },
     {
      "when": {
       "en": "20–22 March 2025",
       "ro": "20–22 martie 2025"
      },
      "name": "19th International Conference on Business Excellence (ICBE 2025)",
      "place": {
       "en": "Bucharest University of Economic Studies",
       "ro": "Academia de Studii Economice din București"
      },
      "items": [
       {
        "t": "In the Beginning Was the Word: LLM-Based Risk Forecasting – VaR and ES",
        "talk": true
       },
       {
        "t": "LLM-Driven Stock Prediction: Capturing Market Trends with LLaMA"
       },
       {
        "t": "Cryptocurrency Market Analysis: Insights from Metcalfe’s Law and Log-Periodic Power Laws"
       },
       {
        "t": "Cryptocurrencies in a Changing Financial Landscape: A Systematic Review"
       }
      ],
      "href": "https://reference-global.com/issue/PICBE/19/1"
     },
     {
      "when": {
       "en": "20–22 February 2025",
       "ro": "20–22 februarie 2025"
      },
      "name": "4th International Conference on Mathematics and Statistics",
      "place": {
       "en": "American University of Sharjah, United Arab Emirates",
       "ro": "American University of Sharjah, Emiratele Arabe Unite"
      },
      "items": [
       {
        "t": "LLM-Enhanced Deep Reinforcement Learning for Automated Trading",
        "note": {
         "en": "with R. Tak, J. Osterrieder and A. Costea",
         "ro": "cu R. Tak, J. Osterrieder și A. Costea"
        }
       }
      ]
     },
     {
      "when": {
       "en": "14–16 December 2024",
       "ro": "14–16 decembrie 2024"
      },
      "name": "CFE-CMStatistics 2024",
      "place": {
       "en": "King’s College London, United Kingdom",
       "ro": "King’s College London, Regatul Unit"
      },
      "items": [
       {
        "t": "Bayesian Bandit Portfolio: Customized Thompson Sampling for Investor Preference",
        "note": {
         "en": "with V. Bolovăneanu",
         "ro": "cu V. Bolovăneanu"
        }
       }
      ],
      "href": "https://www.cmstatistics.org/CFECMStatistics2024/"
     },
     {
      "when": {
       "en": "6 December 2024",
       "ro": "6 decembrie 2024"
      },
      "name": "18th NYCU International Finance Conference & 4th Yushan Conference",
      "place": {
       "en": "National Yang Ming Chiao Tung University, Hsinchu, Taiwan",
       "ro": "National Yang Ming Chiao Tung University, Hsinchu, Taiwan"
      },
      "items": [
       {
        "t": "In the Beginning Was the Word: LLM Risk Measures",
        "talk": true,
        "note": {
         "en": "Keynote",
         "ro": "Keynote"
        }
       }
      ],
      "href": "https://yushan-conference.notion.site/The-4th-Yushan-Conference-9e9d4beb98e64e5c928e5e0680c80d67"
     },
     {
      "when": {
       "en": "14–15 November 2024",
       "ro": "14–15 noiembrie 2024"
      },
      "name": "17th International Conference on Applied Statistics (ICAS 2024)",
      "place": {
       "en": "Bucharest, Romania",
       "ro": "București"
      },
      "items": [
       {
        "t": "GAN Application for Automated Trading Systems",
        "note": {
         "en": "with R. Tak and W. K. Härdle",
         "ro": "cu R. Tak și W. K. Härdle"
        }
       },
       {
        "t": "Financial Risk Meters in Taiwan’s High-Cap Sectors",
        "note": {
         "en": "with S.-L. Jheng, H.-W. Teng, W. K. Härdle and A. Costea",
         "ro": "cu S.-L. Jheng, H.-W. Teng, W. K. Härdle și A. Costea"
        }
       },
       {
        "t": "Cryptocurrency Market Analysis: Insights from Metcalfe’s Law and Log-Periodic Power Laws",
        "note": {
         "en": "with A. Ginavar et al.",
         "ro": "cu A. Ginavar ș.a."
        }
       },
       {
        "t": "Data Mining and Artificial Intelligence",
        "note": {
         "en": "Session chair",
         "ro": "Chair de sesiune"
        }
       }
      ],
      "href": "https://simpstat.ase.ro/wp-content/uploads/2024/11/ICAS2024-Conference-Program.pdf"
     },
     {
      "when": {
       "en": "16–18 September 2024",
       "ro": "16–18 septembrie 2024"
      },
      "name": "8th International Joint Conference on Rules and Reasoning (RuleML+RR 2024)",
      "place": {
       "en": "Bucharest, Romania",
       "ro": "București"
      },
      "items": [
       {
        "t": "IDA: Institute for Digital Assets",
        "talk": true
       }
      ],
      "href": "https://2024.declarativeai.net/events/ruleml-rr/accepted-papers"
     },
     {
      "when": {
       "en": "9–13 September 2024",
       "ro": "9–13 septembrie 2024"
      },
      "name": "Summer School “Data Science for Sustainable Finance and Economics” 2024",
      "place": {
       "en": "HTW Berlin, Germany",
       "ro": "HTW Berlin, Germania"
      },
      "items": [
       {
        "t": "Overview of XAI Methods",
        "talk": true,
        "note": {
         "en": "Lecture",
         "ro": "Prelegere"
        }
       }
      ],
      "href": "https://far.htw-berlin.de/files/Stg/FINRISK/Summer_School/Summer_School_2024-29.pdf"
     },
     {
      "when": {
       "en": "4–7 September 2024",
       "ro": "4–7 septembrie 2024"
      },
      "name": "AFFINE Training School: Advanced Statistical Modelling for Fintech, Financial Inclusion and Inequality",
      "place": {
       "en": "Università di Napoli Parthenope, Italy",
       "ro": "Università di Napoli Parthenope, Italia"
      },
      "items": [
       {
        "t": "FRM: Financial Risk Meter",
        "talk": true,
        "note": {
         "en": "Lecture",
         "ro": "Prelegere"
        }
       }
      ],
      "href": "https://www.digital-finance-msca.com/event-details-registration/msca-network-event-advanced-statistical-modelling-for-fintech-financial-inclusion-and-inequality-una-naples-msca"
     },
     {
      "when": {
       "en": "5–6 September 2024",
       "ro": "5–6 septembrie 2024"
      },
      "name": "Deep Learning Models for Energy Finance Workshop (AI4EFin)",
      "place": {
       "en": "Humboldt-Universität zu Berlin, Germany",
       "ro": "Humboldt-Universität zu Berlin, Germania"
      },
      "items": [
       {
        "t": "LLM VaR: In the Beginning Was the Word",
        "talk": true
       },
       {
        "t": "The Link Between Energy Prices and Stock Markets in European Union Countries",
        "note": {
         "en": "with R.-A. Grecu and A.-A. Cramer",
         "ro": "cu R.-A. Grecu și A.-A. Cramer"
        }
       }
      ]
     },
     {
      "when": {
       "en": "30 June – 3 July 2024",
       "ro": "30 iunie – 3 iulie 2024"
      },
      "name": "33rd European Conference on Operational Research (EURO 2024)",
      "place": {
       "en": "Technical University of Denmark, Copenhagen",
       "ro": "Technical University of Denmark, Copenhaga"
      },
      "items": [
       {
        "t": "Financial Risk Meter for the Romanian Stock Market",
        "note": {
         "en": "with M. Mazurencu-Marinescu-Pele, A. Conda and R. C. Bâg",
         "ro": "cu M. Mazurencu-Marinescu-Pele, A. Conda și R. C. Bâg"
        }
       },
       {
        "t": "BitMood: Analyzing Bitcoin Trends through Facebook Emotions with AI"
       },
       {
        "t": "Energy Price Modelling: A Comparative Evaluation of Four Generations of Forecasting Methods",
        "note": {
         "en": "with S. Lessmann, A.-V. Andrei and G. Velev",
         "ro": "cu S. Lessmann, A.-V. Andrei și G. Velev"
        }
       },
       {
        "t": "The Impact of Energy Prices on European Stock Markets",
        "note": {
         "en": "with R.-A. Grecu and A.-A. Cramer",
         "ro": "cu R.-A. Grecu și A.-A. Cramer"
        }
       },
       {
        "t": "Predicting Realized Volatility: Insights from EU Energy Listed Firms during Crises",
        "note": {
         "en": "with C. O. Cepoi",
         "ro": "cu C. O. Cepoi"
        }
       },
       {
        "t": "The Chronicles of Ethereum: An Event Study on EIPs",
        "note": {
         "en": "with M.-B. Lin, Ș. Găman and R. Wang",
         "ro": "cu M.-B. Lin, Ș. Găman și R. Wang"
        }
       }
      ],
      "href": "https://www.euro-online.org/conf/admin/tmp/program-euro33.pdf"
     },
     {
      "when": {
       "en": "10–13 June 2024",
       "ro": "10–13 iunie 2024"
      },
      "name": "MSCA Digital Finance Summer School",
      "place": {
       "en": "University of Twente, Netherlands",
       "ro": "University of Twente, Țările de Jos"
      },
      "items": [
       {
        "t": "LLM Risk Measures",
        "talk": true,
        "note": {
         "en": "Lecture",
         "ro": "Prelegere"
        }
       }
      ],
      "href": "https://www.digital-finance-msca.com/cost-finai-phd-school-2024"
     },
     {
      "when": {
       "en": "20–21 May 2024",
       "ro": "20–21 mai 2024"
      },
      "name": "AI Finance Insights: Pioneering the Future of Fintech (COST FinAI Conference)",
      "place": {
       "en": "Istanbul, Turkey",
       "ro": "Istanbul, Turcia"
      },
      "items": [
       {
        "t": "Benchmarking Generations of Time Series Forecasting Models",
        "talk": true
       }
      ],
      "href": "https://www.cost.eu/actions/CA19130/"
     },
     {
      "when": {
       "en": "16–17 May 2024",
       "ro": "16–17 mai 2024"
      },
      "name": "Workshop “AI, Digital Assets and the Future of Energy Finance”",
      "place": {
       "en": "Bucharest University of Economic Studies",
       "ro": "Academia de Studii Economice din București"
      },
      "items": [
       {
        "t": "LLM VaR: In the Beginning Was the Word",
        "talk": true
       }
      ],
      "href": "https://www.meetup.com/fintech_ai_in_finance/events/299747969/"
     },
     {
      "when": {
       "en": "25 March 2024",
       "ro": "25 martie 2024"
      },
      "name": "QFRG & DSLab Open Seminar, Faculty of Economic Sciences",
      "place": {
       "en": "University of Warsaw, Poland",
       "ro": "University of Warsaw, Polonia"
      },
      "items": [
       {
        "t": "Analyzing Bitcoin Movements through Artificial Intelligence Evaluation of Facebook Sentiments",
        "talk": true,
        "note": {
         "en": "Invited seminar",
         "ro": "Seminar invitat"
        }
       }
      ],
      "href": "https://www.linkedin.com/posts/dslab-wne-uw_bitcoin-volume-facebook-activity-7176167133158989824-HVfS"
     },
     {
      "when": {
       "en": "21–23 March 2024",
       "ro": "21–23 martie 2024"
      },
      "name": "18th International Conference on Business Excellence (ICBE 2024)",
      "place": {
       "en": "Bucharest University of Economic Studies",
       "ro": "Academia de Studii Economice din București"
      },
      "items": [
       {
        "t": "Benchmarking Generations of Time Series Forecasting Models: From Econometrics to LLM",
        "note": {
         "en": "with A.-V. Andrei and S. Lessmann",
         "ro": "cu A.-V. Andrei și S. Lessmann"
        }
       },
       {
        "t": "The Link Between Energy Prices and Stock Markets in European Union Countries",
        "note": {
         "en": "with R.-A. Grecu and A.-A. Cramer",
         "ro": "cu R.-A. Grecu și A.-A. Cramer"
        }
       },
       {
        "t": "Optimizing Wind Energy Aggregation: A Comparative Analysis of Asset Allocation Techniques",
        "note": {
         "en": "with V. Bolovăneanu and A. Petukhina",
         "ro": "cu V. Bolovăneanu și A. Petukhina"
        }
       },
       {
        "t": "Financial Risk Meter for the Romanian Stock Market",
        "note": {
         "en": "with A. Conda, R. C. Bâg and M. Mazurencu-Marinescu-Pele",
         "ro": "cu A. Conda, R. C. Bâg și M. Mazurencu-Marinescu-Pele"
        }
       },
       {
        "t": "An Insightful View on Digital Assets",
        "note": {
         "en": "with Ș. Găman, R. C. Bâg, M. Mazurencu-Marinescu-Pele and B. Saftiuc",
         "ro": "cu Ș. Găman, R. C. Bâg, M. Mazurencu-Marinescu-Pele și B. Saftiuc"
        }
       }
      ],
      "href": "https://bizexcellence.ro/wp-content/uploads/2024/03/Extended-programme-ICBE-2024.docx-1.pdf"
     },
     {
      "when": {
       "en": "16–18 December 2023",
       "ro": "16–18 decembrie 2023"
      },
      "name": "17th International Conference on Computational and Financial Econometrics (CFE 2023)",
      "place": {
       "en": "HTW Berlin, Germany",
       "ro": "HTW Berlin, Germania"
      },
      "items": [
       {
        "t": "Understanding Digital Assets",
        "note": {
         "en": "Session “Dynamics of Digital Assets”",
         "ro": "Sesiunea „Dynamics of Digital Assets”"
        },
        "talk": true
       },
       {
        "t": "Deep Learning for Energy Forecasting: A Benchmark",
        "note": {
         "en": "with A.-V. Andrei",
         "ro": "cu A.-V. Andrei"
        }
       },
       {
        "t": "The Impact of Energy Prices on Stock Returns in Selected Central and Eastern European Countries",
        "note": {
         "en": "with R.-A. Grecu and A.-A. Cramer",
         "ro": "cu R.-A. Grecu și A.-A. Cramer"
        }
       },
       {
        "t": "Optimizing Wind Energy Aggregation: A Comparative Analysis of Asset Allocation Techniques",
        "note": {
         "en": "with V. Bolovăneanu, A.-I. Moukas, A. Petukhina and N. Thomaidis",
         "ro": "cu V. Bolovăneanu, A.-I. Moukas, A. Petukhina și N. Thomaidis"
        }
       },
       {
        "t": "Forecasting Realized Volatility Using Machine Learning: The Case of EU Energy Listed Firms",
        "note": {
         "en": "with C. O. Cepoi et al.",
         "ro": "cu C. O. Cepoi ș.a."
        }
       }
      ],
      "href": "https://www.cfenetwork.org/CFE2023/"
     },
     {
      "when": {
       "en": "8 December 2023",
       "ro": "8 decembrie 2023"
      },
      "name": "3rd Yushan Conference & 17th NYCU International Finance Conference",
      "place": {
       "en": "National Yang Ming Chiao Tung University, Hsinchu, Taiwan",
       "ro": "National Yang Ming Chiao Tung University, Hsinchu, Taiwan"
      },
      "items": [
       {
        "t": "Organising committee",
        "note": {
         "en": "Organising committee member",
         "ro": "Membru în comitetul de organizare"
        }
       }
      ],
      "href": "https://linminbin.wixsite.com/yushan-conference"
     },
     {
      "when": {
       "en": "17–18 November 2023",
       "ro": "17–18 noiembrie 2023"
      },
      "name": "16th International Conference on Applied Statistics (ICAS 2023)",
      "place": {
       "en": "Predeal, Romania",
       "ro": "Predeal"
      },
      "items": [
       {
        "t": "Modelling COVID-19 Infodemics in Romania",
        "note": {
         "en": "with A. R. Săvescu and M. Mazurencu-Marinescu-Pele",
         "ro": "cu A. R. Săvescu și M. Mazurencu-Marinescu-Pele"
        }
       }
      ],
      "href": "https://simpstat.ase.ro/wp-content/uploads/2023/11/Conference-Program_ICAS2023.pdf"
     },
     {
      "when": {
       "en": "30–31 October 2023",
       "ro": "30–31 octombrie 2023"
      },
      "name": "AI Innovations in Finance and Society (COST FinAI Conference)",
      "place": {
       "en": "Universitat Pompeu Fabra, Barcelona, Spain",
       "ro": "Universitat Pompeu Fabra, Barcelona, Spania"
      },
      "items": [
       {
        "t": "BRC: Blockchain Research Center",
        "talk": true
       }
      ],
      "href": "https://www.cost.eu/actions/CA19130/"
     },
     {
      "when": {
       "en": "5–6 October 2023",
       "ro": "5–6 octombrie 2023"
      },
      "name": "STAT of ML: Statistics of Machine Learning",
      "place": {
       "en": "Czech Academy of Sciences, Prague",
       "ro": "Czech Academy of Sciences, Praga"
      },
      "items": [
       {
        "t": "Robustified Markowitz Approach for Diversified Portfolios with Crypto-Assets",
        "note": {
         "en": "with A. Petukhina, V. Bolovăneanu and A. Conda",
         "ro": "cu A. Petukhina, V. Bolovăneanu și A. Conda"
        }
       }
      ],
      "href": "https://barunik.github.io/Prague2023/"
     },
     {
      "when": {
       "en": "23–25 March 2023",
       "ro": "23–25 martie 2023"
      },
      "name": "17th International Conference on Business Excellence (ICBE 2023)",
      "place": {
       "en": "Bucharest University of Economic Studies",
       "ro": "Academia de Studii Economice din București"
      },
      "items": [
       {
        "t": "Applying ML and AI to Finance, Business and Society",
        "note": {
         "en": "Minitrack chair and session moderator",
         "ro": "Chair de minitrack și moderator de sesiune"
        }
       }
      ],
      "href": "https://reference-global.com/issue/PICBE/17/1"
     },
     {
      "when": {
       "en": "24–26 March 2022",
       "ro": "24–26 martie 2022"
      },
      "name": "16th International Conference on Business Excellence (ICBE 2022)",
      "place": {
       "en": "Bucharest University of Economic Studies",
       "ro": "Academia de Studii Economice din București"
      },
      "items": [
       {
        "t": "Applying ML and AI to Finance, Business and Society",
        "note": {
         "en": "Session moderator",
         "ro": "Moderator de sesiune"
        }
       }
      ],
      "href": "https://reference-global.com/issue/PICBE/16/1"
     },
     {
      "when": {
       "en": "2021",
       "ro": "2021"
      },
      "name": "15th International Conference on Business Excellence (ICBE 2021)",
      "place": {
       "en": "Bucharest University of Economic Studies",
       "ro": "Academia de Studii Economice din București"
      },
      "items": [
       {
        "t": "Improvements in PD Models. A Case-Study Approach"
       },
       {
        "t": "DS2: Data Science, Digital Society & Fintech",
        "note": {
         "en": "Session moderator, with W. K. Härdle and V. Strat",
         "ro": "Moderator de sesiune, cu W. K. Härdle și V. Strat"
        }
       }
      ],
      "href": "https://reference-global.com/issue/PICBE/15/1"
     },
     {
      "when": {
       "en": "11–12 June 2020",
       "ro": "11–12 iunie 2020"
      },
      "name": "14th International Conference on Business Excellence (ICBE 2020)",
      "place": {
       "en": "Bucharest University of Economic Studies",
       "ro": "Academia de Studii Economice din București"
      },
      "items": [
       {
        "t": "DS2: Data Science & Digital Society",
        "note": {
         "en": "Session moderator, with W. K. Härdle and V. Strat",
         "ro": "Moderator de sesiune, cu W. K. Härdle și V. Strat"
        }
       }
      ],
      "href": "https://reference-global.com/issue/PICBE/14/1"
     },
     {
      "when": {
       "en": "June 2019",
       "ro": "iunie 2019"
      },
      "name": "13th International Conference on Applied Statistics (ICAS 2019)",
      "place": {
       "en": "Bucharest, Romania",
       "ro": "București"
      },
      "items": [
       {
        "t": "Modeling Expected Shortfall Using Tail Entropy",
        "note": {
         "en": "with E. Lazar",
         "ro": "cu E. Lazar"
        }
       }
      ]
     },
     {
      "when": {
       "en": "2019",
       "ro": "2019"
      },
      "name": "1st European Workshop for ML-Based Solutions for Finance",
      "place": {
       "en": "ZHAW, Winterthur, Switzerland",
       "ro": "ZHAW, Winterthur, Elveția"
      },
      "items": [
       {
        "t": "Phenotypic Convergence of Cryptocurrencies",
        "talk": true
       }
      ]
     },
     {
      "when": {
       "en": "2019",
       "ro": "2019"
      },
      "name": "13th International Conference on Business Excellence (ICBE 2019)",
      "place": {
       "en": "Bucharest University of Economic Studies",
       "ro": "Academia de Studii Economice din București"
      },
      "items": [
       {
        "t": "A Genus-Differentia Approach for the Time Series of Cryptocurrencies Returns",
        "note": {
         "en": "Best Paper Award (Journal of Economic Forecasting Award), with W. K. Härdle and N. Wesselhöfft",
         "ro": "Best Paper Award (Journal of Economic Forecasting Award), cu W. K. Härdle și N. Wesselhöfft"
        },
        "award": true
       }
      ],
      "href": "https://reference-global.com/issue/PICBE/13/1",
      "award": true
     },
     {
      "when": {
       "en": "2016",
       "ro": "2016"
      },
      "name": "10th International Conference on Applied Statistics (ICAS 2016)",
      "place": {
       "en": "Brașov, Romania",
       "ro": "Brașov"
      },
      "items": [
       {
        "t": "A Panel Data Approach of City Performance Analysis",
        "note": {
         "en": "with M. Mazurencu-Marinescu",
         "ro": "cu M. Mazurencu-Marinescu"
        }
       }
      ],
      "href": "https://simpstat.ase.ro/"
     },
     {
      "when": {
       "en": "2015",
       "ro": "2015"
      },
      "name": "9th International Conference on Applied Statistics (ICAS 2015)",
      "place": {
       "en": "Bucharest, Romania",
       "ro": "București"
      },
      "items": [
       {
        "t": "Learning from Mistakes: An Analysis of the Program Output Indicators of the Sectoral Operational Programme – Human Resources Development 2007–2013",
        "note": {
         "en": "with M. Mazurencu-Marinescu",
         "ro": "cu M. Mazurencu-Marinescu"
        }
       },
       {
        "t": "Stock Market, Bond Market and FX Market – A Panel Data Approach",
        "note": {
         "en": "with A. Rădulescu",
         "ro": "cu A. Rădulescu"
        }
       }
      ],
      "href": "https://simpstat.ase.ro/"
     },
     {
      "when": {
       "en": "24–25 October 2014",
       "ro": "24–25 octombrie 2014"
      },
      "name": "Emerging Markets Queries in Finance and Business (EMQFB 2014)",
      "place": {
       "en": "Bucharest, Romania",
       "ro": "București"
      },
      "items": [
       {
        "t": "Euro Area: The Long Way of Recovery",
        "note": {
         "en": "with A. Rădulescu",
         "ro": "cu A. Rădulescu"
        }
       }
      ],
      "href": "https://doi.org/10.1016/s2212-5671(15)01515-4"
     },
     {
      "when": {
       "en": "2013",
       "ro": "2013"
      },
      "name": "International Workshop EDEN V – Exploratory Domains of Econophysics News (UPitESW 2013)",
      "place": {
       "en": "University of Pitești, Romania",
       "ro": "Universitatea din Pitești"
      },
      "items": [
       {
        "t": "Fractals and Heavy Tails on the Romanian Stock Market",
        "note": {
         "en": "with M. Mazurencu-Marinescu",
         "ro": "cu M. Mazurencu-Marinescu"
        }
       }
      ]
     },
     {
      "when": {
       "en": "2013",
       "ro": "2013"
      },
      "name": "International Conference on Applied Statistics (ICAS 2013)",
      "place": {
       "en": "Bucharest, Romania",
       "ro": "București"
      },
      "items": [
       {
        "t": "A SAS Approach for Estimating the Parameters of an Alpha-Stable Distribution"
       },
       {
        "t": "An Econometric Model for Estimating the Equity Risk Premium",
        "note": {
         "en": "with A. Rădulescu",
         "ro": "cu A. Rădulescu"
        }
       },
       {
        "t": "Proceedings volume",
        "note": {
         "en": "Editor of the proceedings (Procedia Economics and Finance, vol. 10)",
         "ro": "Editor al volumului (Procedia Economics and Finance, vol. 10)"
        }
       }
      ],
      "href": "https://doi.org/10.1016/s2212-5671(14)00270-6"
     },
     {
      "when": {
       "en": "2012",
       "ro": "2012"
      },
      "name": "8th International Strategic Management Conference",
      "place": {
       "en": "Barcelona, Spain",
       "ro": "Barcelona, Spania"
      },
      "items": [
       {
        "t": "Modeling Stock Market Crashes: The Case of Bucharest Stock Exchange",
        "note": {
         "en": "with M. Mazurencu-Marinescu",
         "ro": "cu M. Mazurencu-Marinescu"
        }
       },
       {
        "t": "Modeling the Strategic Success Factors of the Romanian ICT Based Companies",
        "note": {
         "en": "with M. Mazurencu-Marinescu",
         "ro": "cu M. Mazurencu-Marinescu"
        }
       }
      ]
     },
     {
      "when": {
       "en": "2012",
       "ro": "2012"
      },
      "name": "6th International Conference on Applied Statistics",
      "place": {
       "en": "Bucharest, Romania",
       "ro": "București"
      },
      "items": [
       {
        "t": "LPPL Fit to Stock Market Bubbles"
       },
       {
        "t": "Modelling the Impact of R&D Expenses on Economic Growth",
        "note": {
         "en": "with M. Mazurencu-Marinescu",
         "ro": "cu M. Mazurencu-Marinescu"
        }
       }
      ]
     },
     {
      "when": {
       "en": "2012",
       "ro": "2012"
      },
      "name": "International Conference on Economic Cybernetic Analysis: The New Economic Crisis (NEC 2012)",
      "place": {
       "en": "Bucharest, Romania",
       "ro": "București"
      },
      "items": [
       {
        "t": "Modelling the Impact of Investment in Research-Development-Innovation, a Way to Relaunch the Romanian Economy",
        "note": {
         "en": "with M. Mazurencu-Marinescu and C. Păun",
         "ro": "cu M. Mazurencu-Marinescu și C. Păun"
        }
       }
      ]
     },
     {
      "when": {
       "en": "25–27 August 2011",
       "ro": "25–27 august 2011"
      },
      "name": "International Conference on Applied Economics (ICOAE 2011)",
      "place": {
       "en": "University of Perugia, Italy",
       "ro": "University of Perugia, Italia"
      },
      "items": [
       {
        "t": "Information Entropy and Efficient Market Hypothesis",
        "note": {
         "en": "with A. M. Țepuș",
         "ro": "cu A. M. Țepuș"
        }
       }
      ],
      "href": "https://www.yumpu.com/en/document/view/18229839/information-entropy-and-efficient-market-hypothesis"
     },
     {
      "when": {
       "en": "2011",
       "ro": "2011"
      },
      "name": "13th International Conference on Finance and Banking: Lessons Learned from the Financial Crisis",
      "place": {
       "en": "Silesian University, Karviná, Czech Republic",
       "ro": "Silesian University, Karviná, Cehia"
      },
      "items": [
       {
        "t": "Uncertainty and Heavy Tails in EU Stock Markets before and during the Financial Crisis",
        "talk": true
       }
      ],
      "href": "http://www.opf.slu.cz/kfi/icfb/proc2011/pdf/43_Pele.pdf"
     },
     {
      "when": {
       "en": "2010",
       "ro": "2010"
      },
      "name": "11th International Conference “Financial and Monetary Stability in Emerging Countries”",
      "place": {
       "en": "Bucharest, Romania",
       "ro": "București"
      },
      "items": [
       {
        "t": "Predictibilitatea crahurilor bursiere: o abordare conceptuală",
        "talk": true
       }
      ],
      "href": "http://store.ectap.ro/suplimente/Conferinta%2011%20FABBV%20%20romana%202011.pdf"
     },
     {
      "when": {
       "en": "30–31 May 2008",
       "ro": "30–31 mai 2008"
      },
      "name": "International Conference “Competitiveness and Stability in Knowledge-Based Economies”",
      "place": {
       "en": "University of Craiova, Romania",
       "ro": "Universitatea din Craiova"
      },
      "items": [
       {
        "t": "Some Considerations on Investment Project Valuation",
        "note": {
         "en": "with V. Dragotă and A. Semenescu",
         "ro": "cu V. Dragotă și A. Semenescu"
        }
       }
      ]
     },
     {
      "when": {
       "en": "27–28 March 2008",
       "ro": "27–28 martie 2008"
      },
      "name": "8th International Business Research Conference",
      "place": {
       "en": "Dubai, United Arab Emirates",
       "ro": "Dubai, Emiratele Arabe Unite"
      },
      "items": [
       {
        "t": "Corruption, Investments and Economic Growth",
        "note": {
         "en": "with A. Semenescu, D. Cataramă, V. Dragotă and L. Obreja Brașoveanu",
         "ro": "cu A. Semenescu, D. Cataramă, V. Dragotă și L. Obreja Brașoveanu"
        }
       }
      ],
      "href": "https://www.researchgate.net/publication/255520123_Corruption_Investments_and_Economic_Growth"
     },
     {
      "when": {
       "en": "10–12 May 2007",
       "ro": "10–12 mai 2007"
      },
      "name": "40th Meeting of the EURO Working Group on Financial Modelling",
      "place": {
       "en": "Erasmus University, Rotterdam, Netherlands",
       "ro": "Erasmus University, Rotterdam, Țările de Jos"
      },
      "items": [
       {
        "t": "The Analysis of Foreign Exchange Market from Romania and Its Effect on Exchange Rate Evolution",
        "note": {
         "en": "with C. Herţeliu and Al. Isaic-Maniu",
         "ro": "cu C. Herţeliu și Al. Isaic-Maniu"
        }
       }
      ]
     },
     {
      "when": {
       "en": "15–17 March 2007",
       "ro": "15–17 martie 2007"
      },
      "name": "4th International Finance Conference",
      "place": {
       "en": "Hammamet, Tunisia",
       "ro": "Hammamet, Tunisia"
      },
      "items": [
       {
        "t": "Some Correlations between Financial Variables for the Romanian Insurance Companies",
        "note": {
         "en": "with V. Dragotă and C. Şerbănescu",
         "ro": "cu V. Dragotă și C. Şerbănescu"
        }
       }
      ]
     },
     {
      "when": {
       "en": "November 2006",
       "ro": "noiembrie 2006"
      },
      "name": "3rd International Symposium of Statistics “Statistica în spaţiul soluţiilor”",
      "place": {
       "en": "Bucharest, Romania",
       "ro": "București"
      },
      "items": [
       {
        "t": "English Language in University: Romania and Russia. A Statistical Overview",
        "note": {
         "en": "with G. Mirassova",
         "ro": "cu G. Mirassova"
        }
       },
       {
        "t": "Calcul statistic pe mulţimi vagi"
       }
      ]
     },
     {
      "when": {
       "en": "November 2004",
       "ro": "noiembrie 2004"
      },
      "name": "2nd International Symposium of Statistics “Statistica – problema fiecăruia”",
      "place": {
       "en": "Bucharest, Romania",
       "ro": "București"
      },
      "items": [
       {
        "t": "Romania and Albania – Macroeconomic Comparisons According to EU Standards",
        "note": {
         "en": "with L. Rova Qirko",
         "ro": "cu L. Rova Qirko"
        }
       }
      ]
     }
    ],
    positions: [
        { y: '2020–', en: ['Professor', 'Bucharest University of Economic Studies (ASE), Department of Statistics and Econometrics'], ro: ['Profesor universitar', 'Academia de Studii Economice din București, Departamentul de Statistică și Econometrie'],
          d: { en: 'Courses: Statistics, Econometrics, Time Series, Financial Markets Statistics, Advanced Time-Series Modelling, Financial Markets Modelling; supervision of bachelor and master theses.', ro: 'Cursuri: Statistică, Econometrie, Serii de timp, Statistica piețelor financiare, Modelarea avansată a seriilor de timp, Modelarea piețelor financiare; coordonarea lucrărilor de licență și a disertațiilor.' } },
        { y: '2019–', en: ['PhD supervisor', 'Doctoral School of Cybernetics and Economic Statistics, ASE'], ro: ['Conducător de doctorat', 'Școala Doctorală Cibernetică și Statistică Economică, ASE'] },
        { y: '2022–', en: ['Senior Researcher I (CS I)', 'Institute for Economic Forecasting (IPE), Romanian Academy'], ro: ['Cercetător Științific I (CS I)', 'Institutul de Prognoză Economică (IPE), Academia Română'],
          d: { en: 'Head of the Department of Computer-Assisted Economic Research.', ro: 'Coordonator al Departamentului Cercetare Economică Asistată de Calculator.' } },
        { y: '2001–2020', en: ['Teaching assistant (2001), assistant (2003), lecturer (2007), associate professor (2013)', 'ASE, Department of Statistics and Econometrics'], ro: ['Preparator (2001), asistent (2003), lector (2007), conferențiar (2013)', 'ASE, Departamentul de Statistică și Econometrie'] },
        { y: '2018–2019', en: ['Researcher, IRTG 1792 “High Dimensional Nonstationary Time Series”', 'Humboldt-Universität zu Berlin, with Prof. Wolfgang Karl Härdle'], ro: ['Cercetător, IRTG 1792 „High Dimensional Nonstationary Time Series”', 'Humboldt-Universität zu Berlin, cu Prof. Wolfgang Karl Härdle'] },
        { y: '2014', en: ['Visiting researcher', 'Research Data Center, Humboldt-Universität zu Berlin, with Prof. Wolfgang Karl Härdle (Quantlet platform)'], ro: ['Cercetător invitat', 'Research Data Center, Humboldt-Universität zu Berlin, cu Prof. Wolfgang Karl Härdle (platforma Quantlet)'],
          d: { en: 'Development of the Quantlet platform in SAS for Statistics of Financial Markets.', ro: 'Dezvoltarea platformei Quantlet în SAS pentru Statistica piețelor financiare.' } },
        { y: '2014–2024', en: ['Statistical expert', 'The World Bank: tax framework, public procurement, disaster-risk financing, governance scorecards'], ro: ['Expert statistician', 'Banca Mondială: cadrul fiscal, achiziții publice, finanțarea riscului de dezastre, governance scorecards'],
          d: { en: 'Tax framework under Romania’s Recovery and Resilience Plan; public procurement strategy; disaster-risk financing and the Bucharest seismic-risk tool; Country Climate and Development Report for Azerbaijan; Moldova Governance Scorecard; Romania Strategy Unit; sampling methodology for the Human Capital Operational Programme.', ro: 'Cadrul fiscal în contextul PNRR; strategia de achiziții publice; finanțarea riscului de dezastre și instrumentul pentru riscul seismic al Bucureștiului; Country Climate and Development Report pentru Azerbaidjan; Moldova Governance Scorecard; Romania Strategy Unit; metodologia de eșantionare pentru POCU.' } },
        { y: '2014–2015', en: ['Statistical expert, Delivery Unit', 'Prime Minister’s Chancellery, Romania (World Bank project)'], ro: ['Expert statistician, Delivery Unit', 'Unitatea de Implementare a Priorităților, Cancelaria Prim-Ministrului (proiect al Băncii Mondiale)'],
          d: { en: 'Statistical analysis, monitoring and evaluation, government dashboard, risk model for VAT refunds; analyses of public procurement, youth employment, tax administration and energy.', ro: 'Analiză statistică, monitorizare și evaluare, tabloul de bord al Guvernului, modelul de risc pentru rambursarea TVA; analize privind achizițiile publice, ocuparea tinerilor, administrarea fiscală și energia.' } },
        { y: '2016–2020', en: ['Statistical expert', 'European Investment Bank, European Commission, National School of Political and Administrative Studies'], ro: ['Expert statistician', 'Banca Europeană de Investiții, Comisia Europeană, Școala Națională de Studii Politice și Administrative'],
          d: { en: 'Sampling methodology for the ex-ante control of public procurement (EIB); minimum-wage setting mechanism for Romania (European Commission, INCSMPS); cost standards for local public services (SIPOCA 9).', ro: 'Metodologia de eșantionare pentru controlul ex-ante al achizițiilor publice (BEI); mecanismul de stabilire a salariului minim în România (Comisia Europeană, INCSMPS); standarde de cost pentru serviciile publice locale (SIPOCA 9).' } },
        { y: '2007–2021', en: ['Statistician', 'Ipsos Interactive Services, Bucharest: statistical modelling'], ro: ['Statistician', 'Ipsos Interactive Services, București: modelare statistică'] },
        { y: '2007', en: ['Senior adviser', 'National Institute of Statistics, Bucharest: statistical analysis and sampling'], ro: ['Consilier principal', 'Institutul Național de Statistică, București: analiză statistică și eșantionare'] },
        { y: '2004–2005', en: ['Risk analyst', 'Credisson International, Bucharest: scoring models'], ro: ['Analist de risc', 'Credisson International, București: modele de scoring'] }
    ],

    education: [
        { y: '2019', en: ['Habilitation, Cybernetics and Statistics', 'ASE. Thesis: Statistical methods for financial markets'], ro: ['Abilitare, Cibernetică și Statistică', 'ASE. Teza: Metode statistice pentru piețele financiare'] },
        { y: '2011', en: ['Postdoctoral fellowship', 'ICMA Centre, University of Reading, with Emese Lazar: uncertainty in capital markets via information entropy'], ro: ['Bursă postdoctorală', 'ICMA Centre, University of Reading, cu Emese Lazar: incertitudinea pe piețele de capital prin entropia informațională'] },
        { y: '2010–2013', en: ['Postdoctoral researcher', 'ASE: predictability of financial crises'], ro: ['Cercetător postdoctoral', 'ASE: predictibilitatea crizelor financiare'] },
        { y: '2007', en: ['PhD in Economics (Cybernetics and Statistics)', 'ASE. Advisor: Vergil Voineagu'], ro: ['Doctor în Economie (Cibernetică și Statistică)', 'ASE. Coordonator: Vergil Voineagu'] },
        { y: '2002', en: ['MSc in Statistics (Stochastic Processes and Theoretical Statistics)', 'University of Bucharest, Faculty of Mathematics. Advisor: Monica Dumitrescu'], ro: ['Master în Statistică (Procese stocastice și statistică teoretică)', 'Universitatea din București, Facultatea de Matematică. Coordonator: Monica Dumitrescu'] },
        { y: '2000', en: ['BSc in Mathematics (Advanced Studies)', 'University of Bucharest, Faculty of Mathematics. Advisor: Anton Ștefănescu'], ro: ['Licență în Matematică (Studii avansate)', 'Universitatea din București, Facultatea de Matematică. Coordonator: Anton Ștefănescu'] },
        { y: '1992–1996', en: ['High school', 'Alexandru Ioan Cuza National College (then Theoretical High School), Corabia, Olt County'], ro: ['Studii liceale', 'Colegiul Național „Alexandru Ioan Cuza” (fost Liceul Teoretic), Corabia, județul Olt'] }
    ],

    service: {
        en: ['Associate Editor, <em>Digital Finance</em> (Springer)', 'Member, Romanian National Statistical Council (2023–)', 'Board member for Romania, European Courses in Advanced Statistics (ECAS, 2020–)', 'Management Committee member, COST Action CA19130 (2020–2024)', 'Minitrack chair, International Conference on Business Excellence (ICBE 2023, “Applying ML and AI to Finance, Business and Society”; ICBE 2025, IDA minitrack)'],
        ro: ['Editor asociat, <em>Digital Finance</em> (Springer)', 'Membru al Consiliului Statistic Național (2023–)', 'Membru în boardul European Courses in Advanced Statistics (ECAS) din partea României (2020–)', 'Membru în Comitetul de Management, Acțiunea COST CA19130 (2020–2024)', 'Chair de minitrack, International Conference on Business Excellence (ICBE 2023, „Applying ML and AI to Finance, Business and Society”; ICBE 2025, minitrack IDA)']
    },
    awards: {
        en: ['Editor of Distinction Award (Author Service Award 2026), Springer Nature, for editorial work at Digital Finance', 'Best Paper Award, International Conference on Business Excellence (ICBE) 2026, for “A Multimodal Vision-Language Framework for Financial Anomaly Detection”, with S.-L. Jheng, R. Tak and Ș. Găman', 'Honorary Citizen of Gura Padinii commune, Olt County (2024)',  'Best Paper Award, International Conference on Business Excellence (ICBE) 2019 (Journal of Economic Forecasting Award), with W. K. Härdle and N. Wesselhöfft', '"Bologna Professor" diploma (2010)', 'Diplomas of excellence, Romanian Statistical Society (2009, 2010, 2012)'],
        ro: ['Editor of Distinction Award (Author Service Award 2026), Springer Nature, pentru activitatea editorială la revista Digital Finance', 'Best Paper Award, International Conference on Business Excellence (ICBE) 2026, pentru „A Multimodal Vision-Language Framework for Financial Anomaly Detection”, cu S.-L. Jheng, R. Tak și Ș. Găman', 'Cetățean de onoare al comunei Gura Padinii, județul Olt (2024)',  'Best Paper Award, International Conference on Business Excellence (ICBE) 2019 (Journal of Economic Forecasting Award), cu W. K. Härdle și N. Wesselhöfft', 'Diploma „Profesor Bologna” (2010)', 'Diplome de excelență, Societatea Română de Statistică (2009, 2010, 2012)']
    },

    t: {
        en: {
            eyebrow: 'Statistics · Financial econometrics · AI in finance', heroViz: 'Normal distribution vs. fat tails (Student t, 3 d.f.); shaded: the 1% tail behind VaR 1%',
            cta: [['Publications', 'publications'], ['Courses', 'home#teaching'], ['Research themes', 'home#themes']],
            kpis: { pubs: 'publications', journal: 'journal articles', courses: 'open courses', years: 'years at ASE' },
            aboutKicker: 'Profile', themesKicker: 'What I work on', selectedKicker: 'Highlights', teachingKicker: 'Open courseware',
            researchKicker: 'Funding and networks', pubsKicker: 'Full list', codeKicker: 'Open science', cvKicker: 'Career',
            nowTitle: 'Currently',
            now: ['Professor, Department of Statistics and Econometrics, Bucharest University of Economic Studies (ASE)', 'Senior Researcher I (CS I) and Head of the Department of Computer-Assisted Economic Research, Institute for Economic Forecasting (IPE), Romanian Academy', 'Project director for ASE and WP4 co-leader, MSCA Doctoral Network <em>Digital Finance</em>', 'Associate Editor, <em>Digital Finance</em> (Springer)', 'Member, Romanian National Statistical Council', 'PhD supervisor, Doctoral School of Cybernetics and Economic Statistics'],
            themes: 'Research themes', themesIntro: 'Click a theme to see the matching publications.', themePubs: n => `${n} publications →`,
            themeActive: name => `Theme: <b>${name}</b>`, clear: 'Show all',
            selected: 'Selected papers', readPaper: 'Read the paper',
            nav: [['Home', 'home'], ['Research', 'home#themes'], ['Teaching', 'home#teaching'], ['Publications', 'publications'], ['Conferences', 'talks'], ['PhD students', 'phd'], ['CV', 'cv'], ['Contact', '#contact']],
            newsTitle: 'News', newsKicker: 'Latest', newsMore: 'More',
            bibtex: 'BibTeX', copy: 'Copy', copied: 'Copied', codeLink: 'Code',
            cvPdf: 'Download CV (PDF)', moreProjects: 'Other projects', cvJournal: 'Journal articles', cvPubsNote: n => `Full list of ${n} publications:`, cvPubsLink: 'Publications page',
            pageTitles: { publications: 'Publications', talks: 'Conferences and talks', phd: 'PhD students', cv: 'Curriculum vitae' },
            pageLeads: { publications: 'Journal articles, proceedings, books, chapters and working papers, with links, BibTeX and code.', talks: 'Conferences, workshops, summer schools and invited talks.', phd: 'Doctoral supervision at the Bucharest University of Economic Studies.', cv: 'Positions, education, projects, service and awards.' },
            roles: [['Professor', 'Bucharest University of Economic Studies (ASE)', 'logo_ase.png', 'https://www.ase.ro'],
                    ['Senior Researcher I (CS I)', 'Institute for Economic Forecasting (IPE), Romanian Academy', 'logo_acad.png', 'https://ipe.ro']],
            about: 'About', interests: 'Research interests',
            bio: [
                'My doctoral thesis (2007) dealt with statistical methods for the stock market, and my postdoctoral research with information entropy, uncertainty and the predictability of financial crises. I have since worked on speculative bubbles, digital assets and the forecasting of tail risk with Value at Risk and Expected Shortfall.',
                'My current research concerns large language models and time-series foundation models for risk forecasting and energy markets. My course materials and the code behind my papers are public on GitHub.'
            ],
            interestsList: ['Financial econometrics', 'Tail risk: VaR & ES', 'Information entropy', 'Digital assets', 'Bubbles & crashes', 'AI & LLMs in finance', 'Foundation models', 'Energy finance'],
            stats: { pubs: 'publications', journal: 'journal articles', courses: 'open courses', since: 'teaching at ASE since' },
            teaching: 'Teaching', teachingIntro: 'Open course websites with slides, seminars, notebooks, quizzes and runnable code for every chart.',
            courseSite: 'Course website', courseRepo: 'GitHub repository',
            otherTeaching: 'Also taught',
            otherTeachingText: 'Statistics, Econometrics, Advanced Time Series Modelling; supervision of bachelor, master and doctoral theses.',
            research: 'Projects and networks',
            publications: 'Publications',
            pubsLead: n => `${n} works. For citations see <a href="https://scholar.google.com/citations?user=8dmnNZ4AAAAJ" target="_blank" rel="noopener">Google Scholar</a>.`,
            cats: { all: 'All', journal: 'Journal articles', proc: 'Conference proceedings', chapter: 'Books and chapters', wp: 'Working papers' },
            search: 'Search title, author, journal…', bookLabel: 'Book', chapterLabel: 'Chapter', inVolume: 'Chapter in:', inCollective: 'Chapter in the edited volume', eds: 'eds.', bestPaper: 'Best Paper Award', noResults: 'No publications match.',
            phdKicker: 'Doctoral supervision', phdTitle: 'PhD students', phdIntro: 'Doctoral School of Cybernetics and Economic Statistics, Bucharest University of Economic Studies. PhD supervisor since 2019.', phdPapers: 'Joint papers', phdCurrent: 'Current PhD students', phdAlumni: 'Other doctoral students', phdDefended: 'Defended', phdOngoing: 'Ongoing', phdThesis: 'Thesis', phdTopicsTitle: 'PhD topics offered', phdTopicsIntro: 'Prospective students are welcome to get in touch about these topics:', phdNone: 'Joint work in progress.',
            talks: 'Conferences and talks', talksKicker: 'Presentations', talksIntro: 'Recent conference participations and presentations.', talkLabel: 'Talk', mapNote: (n, c) => `${n} conferences, workshops and invited talks in ${c} cities. Hover over a city for the list; zoom with + / − (or pinch, double click) and drag to move.`, netPapers: 'joint publications', netTitle: 'Co-author network', netNote: (k, all) => `${k} co-authors with at least two joint publications (of ${all} in total); lines join co-authors who published at least two papers together. Hover over a node for details.`, showAllTalks: n => `Show all conferences (${n} more)`, showFewerTalks: 'Show fewer', paperLabel: 'Paper', confSite: 'Conference website',
            code: 'Code and platforms', codeIntro: 'The code behind every paper is public. Selected repositories and platforms:',
            cv: 'Curriculum vitae', positions: 'Positions', education: 'Education', service: 'Editorial and professional service', awards: 'Awards',
            contact: 'Contact',
            contactText: 'Department of Statistics and Econometrics, Bucharest University of Economic Studies, Bucharest, Romania. E-mail: <a href="mailto:danpele@ase.ro">danpele@ase.ro</a>.',
            footer: 'Daniel Traian Pele'
        },
        ro: {
            eyebrow: 'Statistică · Econometrie financiară · AI în finanțe', heroViz: 'Distribuția Normală vs. cozi groase (Student t, 3 grade de libertate); hașurat: coada de 1% din spatele VaR 1%',
            cta: [['Publicații', 'publications'], ['Cursuri', 'home#teaching'], ['Teme de cercetare', 'home#themes']],
            kpis: { pubs: 'publicații', journal: 'articole în reviste', courses: 'cursuri deschise', years: 'ani la ASE' },
            aboutKicker: 'Profil', themesKicker: 'Direcții de cercetare', selectedKicker: 'Repere', teachingKicker: 'Cursuri deschise',
            researchKicker: 'Finanțare și rețele', pubsKicker: 'Lista completă', codeKicker: 'Știință deschisă', cvKicker: 'Carieră',
            nowTitle: 'În prezent',
            now: ['Profesor universitar, Departamentul de Statistică și Econometrie, Academia de Studii Economice din București (ASE)', 'Cercetător Științific I (CS I) și coordonator al Departamentului Cercetare Economică Asistată de Calculator, Institutul de Prognoză Economică (IPE), Academia Română', 'Director de proiect din partea ASE și co-lider WP4, MSCA Doctoral Network <em>Digital Finance</em>', 'Editor asociat, <em>Digital Finance</em> (Springer)', 'Membru al Consiliului Statistic Național', 'Conducător de doctorat, Școala Doctorală Cibernetică și Statistică Economică'],
            themes: 'Teme de cercetare', themesIntro: 'Alegeți o temă pentru a vedea publicațiile asociate.', themePubs: n => `${n} publicații →`,
            themeActive: name => `Tema: <b>${name}</b>`, clear: 'Arată toate',
            selected: 'Lucrări selectate', readPaper: 'Citește lucrarea',
            nav: [['Acasă', 'home'], ['Cercetare', 'home#themes'], ['Cursuri', 'home#teaching'], ['Publicații', 'publications'], ['Conferințe', 'talks'], ['Doctoranzi', 'phd'], ['CV', 'cv'], ['Contact', '#contact']],
            newsTitle: 'Noutăți', newsKicker: 'Recent', newsMore: 'Detalii',
            bibtex: 'BibTeX', copy: 'Copiază', copied: 'Copiat', codeLink: 'Cod',
            cvPdf: 'Descarcă CV-ul (PDF)', moreProjects: 'Alte proiecte', cvJournal: 'Articole în reviste', cvPubsNote: n => `Lista completă a celor ${n} de publicații:`, cvPubsLink: 'pagina Publicații',
            pageTitles: { publications: 'Publicații', talks: 'Conferințe și prezentări', phd: 'Doctoranzi', cv: 'Curriculum vitae' },
            pageLeads: { publications: 'Articole în reviste, volume de conferință, cărți, capitole și working papers, cu linkuri, BibTeX și cod.', talks: 'Conferințe, workshop-uri, școli de vară și prezentări invitate.', phd: 'Coordonare de doctorat la Academia de Studii Economice din București.', cv: 'Poziții, educație, proiecte, activitate profesională și distincții.' },
            roles: [['Profesor universitar', 'Academia de Studii Economice din București (ASE)', 'logo_ase.png', 'https://www.ase.ro'],
                    ['Cercetător Științific I (CS I)', 'Institutul de Prognoză Economică (IPE), Academia Română', 'logo_acad.png', 'https://ipe.ro']],
            about: 'Despre', interests: 'Domenii de cercetare',
            bio: [
                'Teza de doctorat (2007) a tratat metode statistice pentru piața de capital, iar cercetarea postdoctorală, entropia informațională, incertitudinea și predictibilitatea crizelor financiare. Am studiat apoi bulele speculative, activele digitale și prognoza riscului extrem prin Value at Risk și Expected Shortfall.',
                'În prezent cercetez modelele mari de limbaj și time-series foundation models în prognoza riscului și pe piețele de energie. Materialele de curs și codul lucrărilor mele sînt publice pe GitHub.'
            ],
            interestsList: ['Econometrie financiară', 'Tail risk: VaR și ES', 'Entropie informațională', 'Active digitale', 'Bule și crahuri', 'AI și LLM-uri în finanțe', 'Foundation models', 'Energy finance'],
            stats: { pubs: 'publicații', journal: 'articole în reviste', courses: 'cursuri deschise', since: 'la ASE din' },
            teaching: 'Cursuri', teachingIntro: 'Site-uri de curs deschise, cu slide-uri, seminarii, notebook-uri, quiz-uri și cod executabil pentru fiecare grafic.',
            courseSite: 'Site-ul cursului', courseRepo: 'Repository GitHub',
            otherTeaching: 'Alte discipline',
            otherTeachingText: 'Statistică, Econometrie, Modelarea avansată a seriilor de timp; coordonarea lucrărilor de licență, disertație și doctorat.',
            research: 'Proiecte și rețele de cercetare',
            publications: 'Publicații',
            pubsLead: n => `${n} de lucrări. Pentru citări, vedeți <a href="https://scholar.google.com/citations?user=8dmnNZ4AAAAJ" target="_blank" rel="noopener">Google Scholar</a>.`,
            cats: { all: 'Toate', journal: 'Articole în reviste', proc: 'Volume de conferință', chapter: 'Cărți și capitole', wp: 'Working papers' },
            search: 'Căutați titlu, autor, revistă…', bookLabel: 'Carte', chapterLabel: 'Capitol', inVolume: 'Capitol în:', inCollective: 'Capitol în volumul colectiv', eds: 'eds.', bestPaper: 'Best Paper Award', noResults: 'Nicio publicație găsită.',
            phdKicker: 'Coordonare de doctorat', phdTitle: 'Doctoranzi', phdIntro: 'Școala Doctorală Cibernetică și Statistică Economică, Academia de Studii Economice din București. Conducător de doctorat din 2019.', phdPapers: 'Lucrări comune', phdCurrent: 'Doctoranzi actuali', phdAlumni: 'Alți doctoranzi', phdDefended: 'Susținută', phdOngoing: 'În curs', phdThesis: 'Teza', phdTopicsTitle: 'Teme de doctorat propuse', phdTopicsIntro: 'Candidații interesați de aceste teme mă pot contacta:', phdNone: 'Lucrări comune în curs.',
            talks: 'Conferințe și prezentări', talksKicker: 'Prezentări', talksIntro: 'Participări recente la conferințe și prezentări.', talkLabel: 'Prezentare', mapNote: (n, c) => `${n} conferințe, workshop-uri și prezentări invitate în ${c} orașe. Treceți cu mouse-ul peste un oraș pentru listă; măriți cu + / − (sau dublu clic) și trageți pentru a muta harta.`, netPapers: 'lucrări comune', netTitle: 'Rețeaua de coautori', netNote: (k, all) => `${k} coautori cu cel puțin două lucrări comune (din ${all} în total); liniile unesc coautorii care au publicat împreună cel puțin două lucrări. Treceți cu mouse-ul peste un nod pentru detalii.`, showAllTalks: n => `Arată toate conferințele (încă ${n})`, showFewerTalks: 'Arată mai puține', paperLabel: 'Lucrare', confSite: 'Site-ul conferinței',
            code: 'Cod și platforme', codeIntro: 'Codul fiecărei lucrări este public. Repository-uri și platforme selectate:',
            cv: 'Curriculum vitae', positions: 'Poziții', education: 'Educație', service: 'Activitate editorială și profesională', awards: 'Distincții',
            contact: 'Contact',
            contactText: 'Departamentul de Statistică și Econometrie, Academia de Studii Economice din București, România. E-mail: <a href="mailto:danpele@ase.ro">danpele@ase.ro</a>.',
            footer: 'Daniel Traian Pele'
        }
    }
};
