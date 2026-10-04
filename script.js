// Browser environment guard (prevents SSR/Serverless runner crashes if evaluated in Node)
if (typeof window === 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (req, res) => {
            if (res) { res.writeHead(200, { 'Content-Type': 'text/plain' }); res.end('Client Script'); }
        };
    }
    return;
}

// Project Dataset with Problem, Solution, Tech Stack, Image, and Links
const projects = {
    roninclips: {
        title: "RoninClips",
        badge: "100% OFFLINE AI ENGINE",
        monogram: "RC",
        subtitle: "Offline AI Video Clipper & Subtitle Engine",
        summary: "Extracts viral highlights, renders animated subtitles, and auto-crops faces locally at zero cloud egress cost.",
        tokens: ["LARAVEL", "PYTHON", "WHISPER", "GROQ", "FFMPEG"],
        problem: "Content creators waste hours manually searching video footage for viral hooks, syncing subtitles, and paying expensive recurring cloud subscriptions with privacy risks.",
        solution: "Engineered a 100% offline desktop AI engine combining Faster-Whisper, Groq AI, and FFmpeg to auto-extract viral highlights, render animated karaoke subtitles, and auto-crop faces locally.",
        performance: "Sub-3s transcription latency • 0 cloud egress fees • 100% local data residency • 5x–10x faster export via CUDA h264_nvenc.",
        stack: "LARAVEL / PYTHON / FASTER-WHISPER / GROQ AI / FFMPEG",
        img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=85",
        repo: "https://github.com/clascuna556171/roninclips",
        live: null
    },
    worthit: {
        title: "WorthIt",
        badge: "NEUROECONOMIC ENGINE",
        monogram: "WI",
        subtitle: "Behavioral Friction & Impulse Shield App",
        summary: "Enforces 24–72h dopamine cooling vaults on impulsive checkouts, computes physical labor costs, and projects S&P 500 compound loss.",
        tokens: ["FLUTTER", "DART", "GROQ LPU", "FIREBASE", "PROVIDER"],
        problem: "Algorithmic e-commerce and social commerce platforms hijack consumer dopamine loops through frictionless 1-click checkouts and manufactured urgency, triggering chronic compulsive spending and severe buyer's remorse.",
        solution: "Architected an intentional friction mobile engine using Flutter and Groq LPU (llama-3.3-70b-versatile) that enforces 24–72h dopamine cooling vault locks, computes physical labor-hour costs, projects S&P 500 compound opportunity loss, and delivers sub-second AI reality checks with smart budget dupes.",
        performance: "<850ms Groq LPU inference latency • 74%+ impulse cancellation rate • 100% offline fallback resilience • 111 passing test suites.",
        stack: "FLUTTER / DART / FIREBASE / GROQ LPU / LLAMA-3.3-70B / PROVIDER",
        img: "images/worthit.png",
        repo: "https://github.com/clascuna556171/worthit",
        live: null
    },
    shoeboy: {
        title: "The Shoe Boy",
        badge: "ENTERPRISE LIVE POS",
        monogram: "SB",
        subtitle: "Serialized Inventory & High-Concurrency POS",
        summary: "Atomic reservation locks and barcode SKU dispatch for high-volume live selling, eliminating double-selling across 500-pair drops.",
        tokens: ["LARAVEL 11", "PHP 8.2", "MYSQL", "ALPINE.JS", "DOMPDF"],
        problem: "A high-volume footwear retailer with over 100,000 online followers struggled with chaotic Facebook Live sales, where verbal claim codes and flooded Messenger inboxes caused rampant double-selling, dispute delays, and untracked inventory across 500-pair wholesale bales.",
        solution: "Engineered a centralized batch-to-unit serialized inventory management and multi-channel live-selling POS system in Laravel 11, implementing unique SKU barcode generation, atomic reservation locks that eliminate live-stream double-selling, GCash payment verification workflows, and automated per-unit net profit calculations.",
        performance: "0% double-selling across 100k+ follower live drops • 500-pair intake digitized in minutes • 100% per-unit net profit visibility • Automated parcel waybill sync.",
        stack: "LARAVEL 11 / PHP 8.2 / MYSQL / ALPINE.JS / TAILWIND CSS / BLADE / DOMPDF",
        img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1000&q=85",
        repo: "https://github.com/clascuna556171/shoeboy",
        live: null
    },
    stxic: {
        title: "STXIC (Personal Life OS)",
        badge: "ENCRYPTED LIFE OS",
        monogram: "SX",
        subtitle: "Zero-Subscription Student Automation PWA",
        summary: "Encrypted local vault, Blackboard automation (BADS-DE), personal finance tracker, and hybrid local/cloud AI in Next.js 14.",
        tokens: ["NEXT.JS 14", "REACT 19", "TYPESCRIPT", "GROQ", "PWA"],
        problem: "Students and developers juggle fragmented, expensive subscription apps for tasks, notes, course portals, and finance, leaving their sensitive personal data exposed to commercial telemetry with zero offline privacy.",
        solution: "Engineered a privacy-first, zero-cost Personal Life OS combining an encrypted local-first vault, Blackboard student automation engine (BADS-DE), personal finance & FX tracker, hybrid local/cloud AI (Groq + Ollama/Qwen), and live Obsidian sync built in Next.js 14, React 19, TypeScript, and Firebase.",
        performance: "$0/mo recurring operational spend • LCP < 2.5s & INP < 200ms Core Web Vitals • Zero data leakage via AES-GCM encryption • Sub-500ms hybrid AI routing.",
        stack: "NEXT.JS / REACT 19 / TYPESCRIPT / TAILWIND CSS / FIREBASE / GROQ / OLLAMA / CAPACITOR / PWA",
        img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=85",
        repo: "https://github.com/clascuna556171/stxic-os",
        live: null
    },
    polyskill: {
        title: "PolySkill",
        badge: "STATIC SKILL COMPILER",
        monogram: "PS",
        subtitle: "The LLVM Compiler for AI Agent Skills",
        summary: "Compiles Python AST, TypeScript, and OpenAPI into hardened agent tools in ~2ms with deterministic security guardrails.",
        tokens: ["TYPESCRIPT", "NODE.JS", "AST PARSING", "MCP", "SECURITY"],
        problem: "AI agent tooling is crippled by fragmented runtime protocols (MCP, Antigravity, Cursorrules, OpenAI) and vulnerable to prompt injection, SSRF, directory traversal, and unconfirmed destructive actions that block enterprise adoption.",
        solution: "Architected the \"LLVM for AI Agent Skills\"—a zero-dependency static compiler that ingests Python AST, TypeScript SDKs, Bash scripts, and OpenAPI specs, compiling them into universal agent tools with hardcoded deterministic security guardrails in ~2 milliseconds at $0 cloud cost.",
        performance: "~2ms static compile time • 100% deterministic SSRF & path-traversal blocking • 4-in-1 multi-runtime target emission • $0 LLM token overhead during compilation.",
        stack: "TYPESCRIPT / NODE.JS / AST PARSING / MCP / ANTIGRAVITY / CURSORRULES / OPENAPI / CLI",
        img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=85",
        repo: "https://github.com/clascuna556171/pollyskill",
        live: null
    },
    automator: {
        title: "AI Ticket Automator",
        badge: "ASYNC SUPPORT ENGINE",
        monogram: "AT",
        subtitle: "Asynchronous Enterprise Support Triage Pipeline",
        summary: "FastAPI & Redis/RQ pipeline that classifies sentiment, auto-dispatches high-confidence responses, and broadcasts HMAC-signed webhooks.",
        tokens: ["FASTAPI", "PYTHON 3.12", "REDIS", "RQ", "DOCKER"],
        problem: "Customer support engineering teams face crushing queues of unclassified tickets, resulting in sluggish resolution times, human triage inconsistencies, delayed critical incident escalations, and disconnected internal tooling.",
        solution: "Engineered an asynchronous support ticket triage engine using FastAPI, Redis/RQ queues, and Groq LLMs that auto-classifies sentiment and priority, auto-responds to high-confidence tickets, and broadcasts HMAC-signed payloads across downstream webhooks.",
        performance: "Sub-second asynchronous ticket ingestion • 70% manual triage reduction via auto-response • 100% HMAC SHA-256 webhook delivery integrity • 65 automated passing tests.",
        stack: "FASTAPI / PYTHON 3.12 / REDIS / RQ / SQLALCHEMY / MYSQL / GROQ LLM / JWT / DOCKER",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85",
        repo: "https://github.com/clascuna556171/ai-task-automator",
        live: null
    },
    pawfect: {
        title: "PawfectMatch",
        badge: "LIVE PRODUCTION PLATFORM",
        monogram: "PM",
        subtitle: "Interactive Pet Adoption Lifecycle Platform",
        summary: "Cinematic adoption showcases, dynamic temperament filtering, shelter management, and automated 7-day post-adoption check-ins.",
        tokens: ["LARAVEL", "PHP 8.2", "MYSQL", "TAILWIND", "ALPINE.JS"],
        problem: "Animal rescue shelters operate on fragmented paperwork, phone records, and unstructured social media inboxes, resulting in slow adoption vetting, high animal surrender rates, and zero systematic post-adoption welfare monitoring.",
        solution: "Engineered an end-to-end pet adoption lifecycle platform using Laravel MVC, MySQL, Tailwind CSS, and Alpine.js, featuring cinematic video showcases, dynamic temperament filtering, role-based shelter management, and automated 7-day post-adoption check-in email dispatchers.",
        performance: "100% automated 7-day post-adoption check-in dispatch • 0 lost adoption applications • Sub-100ms multi-attribute filter response • Zero paper record dependency.",
        stack: "LARAVEL / PHP 8.2 / MYSQL / BLADE / TAILWIND CSS / ALPINE.JS / DOCKER / VITE",
        img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1000&q=85",
        repo: "https://github.com/clascuna556171/pawfect-match",
        live: "https://pawfect-match-1gqf.onrender.com/"
    },
    kinetic: {
        title: "STXIC.CL",
        badge: "KINETIC MOTION & AI",
        monogram: "KC",
        subtitle: "Kinetic Motion Portfolio & Real-time AI Concierge",
        summary: "Awwwards-inspired portfolio with physics-based cursor dynamics, SVG morphing shaders, /admin CMS, and context-grounded AI concierge.",
        tokens: ["LARAVEL 11", "GSAP 3", "LENIS", "GROQ AI", "TAILWIND"],
        problem: "Developer portfolios are dominated by generic, cookie-cutter SaaS templates that fail to convey creative frontend engineering, bespoke motion choreography, real-time AI capabilities, or robust backend architecture.",
        solution: "Architected an Awwwards-inspired kinetic web portfolio and AI Concierge powered by Laravel 11, GSAP 3, and Lenis, featuring physics-based magnetic cursor dynamics, living SVG morphing shaders, an authenticated /admin CMS, and a context-grounded Groq AI assistant with offline fallback.",
        performance: "Locked 60fps Lenis inertial scroll physics • Sub-second Groq AI concierge responses • 0 cumulative layout shift (CLS 0.0) • Multi-stage Docker zero-downtime deployment.",
        stack: "LARAVEL 11 / PHP 8.3 / GSAP 3 / LENIS / GROQ AI / TAILWIND CSS / DOCKER / MYSQL",
        img: "images/kinetic.jpg",
        repo: "https://github.com/clascuna556171/fullstack-portfolio",
        live: null
    }
};

// ==========================================================================
// TACTILE SOUND ENGINE (Zero-Latency Web Audio API)
// Obsessively engineered acoustic textures for luxury physical stationery
// ==========================================================================
const SoundEngine = (function () {
    let audioCtx = null;
    let fxEnabled = localStorage.getItem('stxic_haptics_enabled') !== 'false'; // default true

    function getAudioContext() {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        return audioCtx;
    }

    // 1. Heavy Cotton Paper Flip (Main 3D Turn: Front to Dossier & Return)
    // Acoustic model: 32pt heavy cotton card moving through air with low-mid swoosh & subtle desk settle
    function playPaperFlip() {
        if (!fxEnabled) return;
        try {
            const ctx = getAudioContext();
            const now = ctx.currentTime;
            const duration = 0.13;

            // Air swoosh (shaped bandpass white noise)
            const bufferSize = Math.floor(ctx.sampleRate * duration);
            const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) {
                const decay = Math.exp(-i / (ctx.sampleRate * 0.038));
                data[i] = (Math.random() * 2 - 1) * decay;
            }
            const noise = ctx.createBufferSource();
            noise.buffer = buffer;

            const filter = ctx.createBiquadFilter();
            filter.type = 'bandpass';
            filter.frequency.setValueAtTime(650, now);
            filter.frequency.exponentialRampToValueAtTime(1300, now + duration);
            filter.Q.setValueAtTime(1.6, now);

            const gain = ctx.createGain();
            gain.gain.setValueAtTime(0.22, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

            noise.connect(filter);
            filter.connect(gain);
            gain.connect(ctx.destination);
            noise.start(now);

            // Low paper impact / desk settle
            const osc = ctx.createOscillator();
            const oscGain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(90, now + 0.02);
            osc.frequency.exponentialRampToValueAtTime(38, now + 0.08);
            oscGain.gain.setValueAtTime(0.12, now + 0.02);
            oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

            osc.connect(oscGain);
            oscGain.connect(ctx.destination);
            osc.start(now + 0.02);
            osc.stop(now + 0.09);
        } catch (e) {
            // Audio context policy safe
        }
    }

    // 2. Crisp Card Snap (Project Carousel & Deck Shuffle)
    // Acoustic model: 2200Hz bandpass card snap
    function playCardSnap() {
        if (!fxEnabled) return;
        try {
            const ctx = getAudioContext();
            const now = ctx.currentTime;
            const duration = 0.045;
            const bufferSize = Math.floor(ctx.sampleRate * duration);
            const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
            const channel = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) {
                const decay = Math.exp(-i / (ctx.sampleRate * 0.012));
                channel[i] = (Math.random() * 2 - 1) * decay;
            }

            const noise = ctx.createBufferSource();
            noise.buffer = buffer;

            const filter = ctx.createBiquadFilter();
            filter.type = 'bandpass';
            filter.frequency.setValueAtTime(2200, now);
            filter.Q.setValueAtTime(2.5, now);

            const gain = ctx.createGain();
            gain.gain.setValueAtTime(0.18, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

            noise.connect(filter);
            filter.connect(gain);
            gain.connect(ctx.destination);
            noise.start(now);
        } catch (e) {
            // Audio context policy safe
        }
    }

    // 3. Micro Intaglio Tick (Tabs, Mode Switchers, Contact Copy, Steppers)
    // Acoustic model: Ultra-fast 18ms mechanical micro-tick, feels like a fingernail tap on raised ink
    function playMicroTick() {
        if (!fxEnabled) return;
        try {
            const ctx = getAudioContext();
            const now = ctx.currentTime;
            const duration = 0.02;
            const bufferSize = Math.floor(ctx.sampleRate * duration);
            const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
            const channel = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) {
                const decay = Math.exp(-i / (ctx.sampleRate * 0.004));
                channel[i] = (Math.random() * 2 - 1) * decay;
            }

            const noise = ctx.createBufferSource();
            noise.buffer = buffer;

            const filter = ctx.createBiquadFilter();
            filter.type = 'bandpass';
            filter.frequency.setValueAtTime(1600, now);
            filter.Q.setValueAtTime(3.2, now);

            const gain = ctx.createGain();
            gain.gain.setValueAtTime(0.12, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

            noise.connect(filter);
            filter.connect(gain);
            gain.connect(ctx.destination);
            noise.start(now);
        } catch (e) {
            // Audio context policy safe
        }
    }

    function isEnabled() {
        return fxEnabled;
    }

    function toggle() {
        fxEnabled = !fxEnabled;
        localStorage.setItem('stxic_haptics_enabled', fxEnabled);
        syncToggles();
        if (fxEnabled) {
            playMicroTick();
        }
        return fxEnabled;
    }

    function syncToggles() {
        const toggles = document.querySelectorAll('.haptic-audio-toggle, #frontAudioToggle, #dossierAudioToggle');
        toggles.forEach(btn => {
            btn.classList.toggle('active', fxEnabled);
            btn.setAttribute('aria-pressed', fxEnabled ? 'true' : 'false');

            const mark = btn.querySelector('.audio-mark');
            if (mark) {
                mark.textContent = fxEnabled ? '[ FX: ON ]' : '[ FX: OFF ]';
            }
        });
    }

    function initToggles() {
        const toggles = document.querySelectorAll('.haptic-audio-toggle, #frontAudioToggle, #dossierAudioToggle');
        toggles.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                toggle();
            });
        });
        syncToggles();
    }

    return {
        playPaperFlip,
        playCardSnap,
        playMicroTick,
        isEnabled,
        toggle,
        syncToggles,
        initToggles
    };
})();

// DOM References
const deck = document.getElementById('deck');
const frontFace = document.querySelector('.front-face');
const flipTrigger = document.getElementById('flipTrigger');
const returnTriggers = document.querySelectorAll('#returnTrigger, #mobileReturnTrigger, .return-btn');
const backFace = document.querySelector('.back-face');

// Flip Controls (Tap Anywhere on Front Card to Flip)
if (frontFace && deck) {
    frontFace.addEventListener('click', (e) => {
        // Never flip if deck is already flipped
        if (deck.classList.contains('flipped')) return;
        // Prevent flip if clicking external links or audio toggle
        if (e.target.closest('a')) return;
        if (e.target.closest('#frontAudioToggle') || e.target.closest('.card-audio-toggle')) return;

        SoundEngine.playPaperFlip();
        deck.classList.add('flipped');
        if (backFace) {
            backFace.scrollTop = 0;
        }
    });
}

// Keyboard Accessibility for Flip Trigger
if (flipTrigger) {
    flipTrigger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (deck) {
                SoundEngine.playPaperFlip();
                deck.classList.add('flipped');
                if (backFace) backFace.scrollTop = 0;
            }
        }
    });
}

returnTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        if (deck) {
            SoundEngine.playPaperFlip();
            deck.classList.remove('flipped');
        }
    });
});

// Dossier Tabs Navigation
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

tabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        SoundEngine.playMicroTick();

        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanes.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        const target = btn.getAttribute('data-tab');
        const targetPane = document.getElementById(`pane-${target}`);
        if (targetPane) {
            targetPane.classList.add('active');
        }

        // On mobile, smoothly reset scroll position to top of dossier
        if (backFace && window.innerWidth <= 768) {
            backFace.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
});

// Briefing Action Buttons (Direct Deep-Links to Other Dossier Tabs)
const briefingToProjects = document.getElementById('briefingToProjects');
const briefingToCerts = document.getElementById('briefingToCerts');
const briefingToExp = document.getElementById('briefingToExp');
const briefingToContact = document.getElementById('briefingToContact');

if (briefingToProjects) {
    briefingToProjects.addEventListener('click', () => {
        const tabBtn = document.getElementById('tabBtnProjects');
        if (tabBtn) tabBtn.click();
    });
}

if (briefingToCerts) {
    briefingToCerts.addEventListener('click', () => {
        const tabBtn = document.getElementById('tabBtnCerts');
        if (tabBtn) tabBtn.click();
    });
}

if (briefingToExp) {
    briefingToExp.addEventListener('click', () => {
        const tabBtn = document.getElementById('tabBtnExp');
        if (tabBtn) tabBtn.click();
    });
}

if (briefingToContact) {
    briefingToContact.addEventListener('click', () => {
        const tabBtn = document.getElementById('tabBtnContact');
        if (tabBtn) tabBtn.click();
    });
}

// Project Directory Item Selection & Details Render
const projectItems = document.querySelectorAll('.project-card-item');
const detailTitle = document.getElementById('detailTitle');
const detailBadge = document.getElementById('detailBadge');
const detailProblem = document.getElementById('detailProblem');
const detailSolution = document.getElementById('detailSolution');
const detailPerformance = document.getElementById('detailPerformance');
const detailStack = document.getElementById('detailStack');
const detailImg = document.getElementById('detailImg');
const detailRepoLink = document.getElementById('detailRepoLink');
const detailLiveLink = document.getElementById('detailLiveLink');

function renderProject(id) {
    const data = projects[id];
    if (!data) return;

    if (detailTitle) detailTitle.textContent = data.title;
    if (detailBadge) {
        detailBadge.textContent = data.badge || '';
        detailBadge.style.display = data.badge ? 'inline-block' : 'none';
    }
    if (detailProblem) detailProblem.textContent = data.problem;
    if (detailSolution) detailSolution.textContent = data.solution;
    if (detailPerformance) detailPerformance.textContent = data.performance || '';
    if (detailStack) detailStack.textContent = `TECH SPEC: ${data.stack}`;
    if (detailImg) detailImg.src = data.img;
    if (detailRepoLink) detailRepoLink.href = data.repo;

    if (detailLiveLink) {
        if (data.live) {
            detailLiveLink.href = data.live;
            detailLiveLink.style.display = 'inline';
        } else {
            detailLiveLink.style.display = 'none';
        }
    }
}

projectItems.forEach(item => {
    item.addEventListener('click', () => {
        SoundEngine.playMicroTick();
        projectItems.forEach(i => i.classList.remove('selected'));
        item.classList.add('selected');
        renderProject(item.getAttribute('data-id'));

        // Center active project in mobile horizontal selector
        if (window.innerWidth <= 900) {
            item.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    });
});

// Initial Render
renderProject('roninclips');

// Live Refresh for GitHub Contribution Graph (with zero layout shift)
const chartImg = document.querySelector('.github-chart-svg');
if (chartImg) {
    const liveUrl = 'https://ghchart.rshah.org/191817/clascuna556171';
    const imgLoader = new Image();
    imgLoader.onload = () => {
        chartImg.src = liveUrl;
    };
    imgLoader.src = liveUrl;
}

// ==========================================================================
// 3D BATEMAN BUSINESS CARD DECK ENGINE (SWIPE, WHEEL, SOUND & 3D FLIP)
// ==========================================================================
(function initBatemanDeck() {
    const stage = document.getElementById('batemanDeckStage');
    const carousel = document.getElementById('batemanCardCarousel');
    const counterBadge = document.getElementById('deckCounterBadge');
    const prevBtn = document.getElementById('deckStepPrev');
    const nextBtn = document.getElementById('deckStepNext');
    const btnModeDeck = document.getElementById('btnModeDeck');
    const btnModeClassic = document.getElementById('btnModeClassic');
    const classicSplit = document.getElementById('projectsClassicSplit');

    if (!stage || !carousel) return;

    const projectKeys = Object.keys(projects);
    const totalCards = projectKeys.length;
    let activeIndex = 0;

    // View Mode Switcher (Deck vs Classic Split Fallback)
    function setViewMode(mode) {
        if (mode === 'classic') {
            if (stage) {
                stage.classList.add('view-hidden');
                stage.style.display = 'none';
            }
            if (classicSplit) {
                classicSplit.classList.remove('view-hidden');
                classicSplit.style.display = window.innerWidth <= 900 ? 'flex' : 'grid';
            }
            if (btnModeDeck) btnModeDeck.classList.remove('active');
            if (btnModeClassic) btnModeClassic.classList.add('active');
            localStorage.setItem('stxic_proj_view_mode', 'classic');
        } else {
            if (stage) {
                stage.classList.remove('view-hidden');
                stage.style.display = 'flex';
            }
            if (classicSplit) {
                classicSplit.classList.add('view-hidden');
                classicSplit.style.display = 'none';
            }
            if (btnModeDeck) btnModeDeck.classList.add('active');
            if (btnModeClassic) btnModeClassic.classList.remove('active');
            localStorage.setItem('stxic_proj_view_mode', 'deck');
            updateCarousel(false);
        }
    }

    if (btnModeDeck) {
        btnModeDeck.addEventListener('click', (e) => {
            e.stopPropagation();
            SoundEngine.playMicroTick();
            setViewMode('deck');
        });
    }

    if (btnModeClassic) {
        btnModeClassic.addEventListener('click', (e) => {
            e.stopPropagation();
            SoundEngine.playMicroTick();
            setViewMode('classic');
        });
    }

    // Build the 8 cards
    carousel.innerHTML = '';
    const cardElements = [];

    projectKeys.forEach((key, index) => {
        const item = projects[key];
        const card = document.createElement('article');
        card.className = 'bateman-project-card';
        card.setAttribute('data-id', key);
        card.setAttribute('data-index', index);
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', `${item.title} Executive Specimen Card`);

        const formattedIndex = String(index + 1).padStart(2, '0');
        const tokenPills = (item.tokens || item.stack.split('/')).map(t =>
            `<span class="card-stack-pill">${t.trim()}</span>`
        ).slice(0, 5).join('');

        card.innerHTML = `
            <div class="bateman-card-inner">
                <!-- FRONT FACE: THE EXECUTIVE BONE CARD WITH UPPER LANDSCAPE PHOTO -->
                <div class="card-face-front">
                    <!-- UPPER PART: RECTANGULAR LANDSCAPE PHOTO -->
                    <div class="card-photo-hero">
                        <img src="${item.img}" alt="${item.title} Specimen Visual" class="card-hero-img" loading="lazy" />
                        <div class="card-photo-overlay"></div>
                        <div class="card-photo-meta">
                            <span class="card-specimen-id-badge">SPECIMEN // ${formattedIndex}</span>
                            <span class="card-division-badge">${item.badge || 'PRODUCTION SYSTEM'}</span>
                        </div>
                    </div>

                    <!-- LOWER PART: BONE CARDSTOCK WITH LETTERPRESS IDENTITY -->
                    <div class="card-body-content">
                        <div class="card-stock-watermark" aria-hidden="true">STXIC</div>
                        
                        <div class="card-identity-group">
                            <h3 class="card-proj-title letterpress">${item.title}</h3>
                            <p class="card-proj-sub">${item.subtitle || item.title}</p>
                            <p class="card-proj-summary">${item.summary || item.problem}</p>
                        </div>

                        <div class="card-stack-tokens" aria-label="Core Technology Specifications">
                            ${tokenPills}
                        </div>

                        <div class="card-action-row">
                            <button type="button" class="card-btn-inspect" data-action="flip" aria-label="Flip card to inspect technical specifications">
                                <span>Inspect Specimen</span>
                                <span aria-hidden="true">&olarr;</span>
                            </button>
                            ${item.repo ? `
                                <a href="${item.repo}" class="card-quick-link" target="_blank" rel="noopener noreferrer" title="View Source Repository" aria-label="View Source Repository">
                                    &rarr;
                                </a>
                            ` : ''}
                            ${item.live ? `
                                <a href="${item.live}" class="card-quick-link" target="_blank" rel="noopener noreferrer" title="Launch Live Production System" aria-label="Launch Live Production System">
                                    &nearr;
                                </a>
                            ` : ''}
                        </div>
                    </div>
                </div>

                <!-- REVERSE FACE: SPECIMEN TECHNICAL DOSSIER -->
                <div class="card-face-back">
                    <div class="back-top-meta">
                        <span class="back-archive-title letterpress">SPECIMEN // ${formattedIndex} &bull; DOSSIER</span>
                        <button type="button" class="back-btn-flip-return" data-action="flip-return" aria-label="Return to card front face">
                            &circlearrowleft; FRONT
                        </button>
                    </div>

                    <div class="back-specs-body">
                        <div class="back-spec-block">
                            <span class="back-spec-label">THE PROBLEM</span>
                            <p class="back-spec-copy">${item.problem}</p>
                        </div>
                        <div class="back-spec-block">
                            <span class="back-spec-label">THE ARCHITECTURE</span>
                            <p class="back-spec-copy">${item.solution}</p>
                        </div>
                        <div class="back-spec-block">
                            <span class="back-spec-label">BENCHMARKS</span>
                            <p class="back-spec-perf">${item.performance || 'Verified 100% test integrity & zero telemetry.'}</p>
                        </div>
                    </div>

                    <div class="back-links-row">
                        ${item.repo ? `
                            <a href="${item.repo}" class="back-action-cta primary-cta" target="_blank" rel="noopener noreferrer">
                                Access Repository &rarr;
                            </a>
                        ` : ''}
                        ${item.live ? `
                            <a href="${item.live}" class="back-action-cta secondary-cta" target="_blank" rel="noopener noreferrer">
                                Launch System &nearr;
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;

        carousel.appendChild(card);
        cardElements.push(card);
    });

    // Update Deck Layout Geometry
    function updateCarousel(playSound = true) {
        if (playSound) SoundEngine.playCardSnap();

        const isMobile = window.innerWidth <= 768;
        const xOffset = isMobile ? 110 : 260;
        const xOffsetFar = isMobile ? 200 : 470;

        cardElements.forEach((card, index) => {
            let diff = index - activeIndex;
            // Symmetrical wrap-around distribution across all cards
            if (diff > totalCards / 2) diff -= totalCards;
            if (diff < -totalCards / 2) diff += totalCards;

            // Always un-flip non-center cards
            if (diff !== 0) {
                card.classList.remove('is-flipped');
            }

            if (diff === 0) {
                // Center hero card
                card.style.transform = `translateX(0px) translateY(0px) translateZ(${isMobile ? '50px' : '100px'}) scale(1.0) rotateY(0deg) rotateZ(0deg)`;
                card.style.opacity = '1';
                card.style.zIndex = '10';
                card.classList.add('is-center');
                card.setAttribute('aria-hidden', 'false');
            } else if (diff === -1) {
                // Immediate left card
                card.style.transform = `translateX(-${xOffset}px) translateY(14px) translateZ(${isMobile ? '10px' : '30px'}) scale(${isMobile ? 0.86 : 0.88}) rotateY(12deg) rotateZ(-3deg)`;
                card.style.opacity = isMobile ? '0.5' : '0.75';
                card.style.zIndex = '8';
                card.classList.remove('is-center');
                card.setAttribute('aria-hidden', 'true');
            } else if (diff === 1) {
                // Immediate right card
                card.style.transform = `translateX(${xOffset}px) translateY(14px) translateZ(${isMobile ? '10px' : '30px'}) scale(${isMobile ? 0.86 : 0.88}) rotateY(-12deg) rotateZ(3deg)`;
                card.style.opacity = isMobile ? '0.5' : '0.75';
                card.style.zIndex = '8';
                card.classList.remove('is-center');
                card.setAttribute('aria-hidden', 'true');
            } else if (diff === -2) {
                // Far left card
                card.style.transform = `translateX(-${xOffsetFar}px) translateY(28px) translateZ(-50px) scale(${isMobile ? 0.72 : 0.76}) rotateY(20deg) rotateZ(-6deg)`;
                card.style.opacity = isMobile ? '0' : '0.35';
                card.style.zIndex = '5';
                card.classList.remove('is-center');
                card.setAttribute('aria-hidden', 'true');
            } else if (diff === 2) {
                // Far right card
                card.style.transform = `translateX(${xOffsetFar}px) translateY(28px) translateZ(-50px) scale(${isMobile ? 0.72 : 0.76}) rotateY(-20deg) rotateZ(6deg)`;
                card.style.opacity = isMobile ? '0' : '0.35';
                card.style.zIndex = '5';
                card.classList.remove('is-center');
                card.setAttribute('aria-hidden', 'true');
            } else {
                // Hidden beyond view
                const dir = diff > 0 ? 1 : -1;
                card.style.transform = `translateX(${dir * (xOffsetFar + 180)}px) translateY(40px) translateZ(-120px) scale(0.6)`;
                card.style.opacity = '0';
                card.style.zIndex = '1';
                card.classList.remove('is-center');
                card.setAttribute('aria-hidden', 'true');
            }
        });

        if (counterBadge) {
            counterBadge.textContent = `${String(activeIndex + 1).padStart(2, '0')} / ${String(totalCards).padStart(2, '0')}`;
        }

        // Keep classic split directory in sync
        const activeKey = projectKeys[activeIndex];
        projectItems.forEach(i => {
            i.classList.toggle('selected', i.getAttribute('data-id') === activeKey);
        });
        if (typeof renderProject === 'function') {
            renderProject(activeKey);
        }
    }

    function goToCard(idx, playSound = true) {
        if (idx < 0) idx = 0;
        if (idx >= totalCards) idx = totalCards - 1;
        if (idx === activeIndex) return;
        activeIndex = idx;
        updateCarousel(playSound);
    }

    function nextCard() {
        if (activeIndex < totalCards - 1) {
            goToCard(activeIndex + 1);
        } else {
            goToCard(0);
        }
    }

    function prevCard() {
        if (activeIndex > 0) {
            goToCard(activeIndex - 1);
        } else {
            goToCard(totalCards - 1);
        }
    }

    if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); prevCard(); });
    if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); nextCard(); });

    // Card Click & Flip Handling
    cardElements.forEach((card, index) => {
        card.addEventListener('click', (e) => {
            // If click was on an external link, allow normal navigation
            if (e.target.closest('a')) return;

            // If card is not in center, clicking it brings it to center
            if (index !== activeIndex) {
                e.stopPropagation();
                goToCard(index);
                return;
            }

            // If card IS in center:
            // Check if inspect button or flip return was clicked
            const flipBtn = e.target.closest('[data-action="flip"]');
            const returnBtn = e.target.closest('[data-action="flip-return"]');
            if (flipBtn || returnBtn) {
                e.stopPropagation();
                card.classList.toggle('is-flipped');
                SoundEngine.playCardSnap();
                return;
            }
        });
    });

    // Touch & Pointer Drag Gestures
    let startX = 0;
    let currentX = 0;
    let isDragging = false;
    let dragThreshold = 45;

    stage.addEventListener('pointerdown', (e) => {
        if (e.target.closest('a') || e.target.closest('button')) return;
        isDragging = true;
        startX = e.clientX;
        currentX = e.clientX;
        try { stage.setPointerCapture(e.pointerId); } catch(err) {}
    });

    stage.addEventListener('pointermove', (e) => {
        if (!isDragging) return;
        currentX = e.clientX;
    });

    stage.addEventListener('pointerup', (e) => {
        if (!isDragging) return;
        isDragging = false;
        try { stage.releasePointerCapture(e.pointerId); } catch(err) {}

        const delta = currentX - startX;
        if (Math.abs(delta) > dragThreshold) {
            if (delta < 0) {
                nextCard();
            } else {
                prevCard();
            }
        }
    });

    stage.addEventListener('pointercancel', () => {
        isDragging = false;
    });

    // Mouse Wheel / Trackpad Scroll Navigation
    let wheelDebounceTimer = null;
    stage.addEventListener('wheel', (e) => {
        e.preventDefault();
        if (wheelDebounceTimer) return;

        const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
        if (Math.abs(delta) > 16) {
            if (delta > 0) {
                nextCard();
            } else {
                prevCard();
            }
            wheelDebounceTimer = setTimeout(() => {
                wheelDebounceTimer = null;
            }, 260);
        }
    }, { passive: false });

    // Keyboard Navigation
    window.addEventListener('keydown', (e) => {
        const paneProjects = document.getElementById('pane-projects');
        if (!paneProjects || !paneProjects.classList.contains('active')) return;
        if (stage.style.display === 'none') return;

        if (e.key === 'ArrowRight') {
            e.preventDefault();
            nextCard();
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            prevCard();
        } else if (e.key === ' ' || e.key === 'Enter') {
            const activeCard = cardElements[activeIndex];
            if (activeCard && !e.target.closest('input, textarea, button, a')) {
                e.preventDefault();
                activeCard.classList.toggle('is-flipped');
                SoundEngine.playCardSnap();
            }
        }
    });

    // Window Resize Handler
    window.addEventListener('resize', () => {
        if (classicSplit && !classicSplit.classList.contains('view-hidden') && classicSplit.style.display !== 'none' && classicSplit.style.display !== '') {
            classicSplit.style.display = window.innerWidth <= 900 ? 'flex' : 'grid';
        }
        updateCarousel(false);
    });

    // Initial Deck Render (Default to 3D Deck)
    setViewMode('deck');
    updateCarousel(false);
})();

// Direct Line Email Copy Handler
(function initDirectLineCopy() {
    const btnCopyEmail = document.getElementById('btnCopyEmail');
    const copyEmailText = document.getElementById('copyEmailText');
    if (btnCopyEmail && copyEmailText) {
        btnCopyEmail.addEventListener('click', (e) => {
            e.stopPropagation();
            SoundEngine.playMicroTick();
            const email = 'c.lascuna556171@gmail.com';
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(email).then(() => {
                    const originalText = copyEmailText.textContent;
                    copyEmailText.textContent = 'COPIED TO CLIPBOARD ✓';
                    btnCopyEmail.style.borderColor = 'var(--ink)';
                    btnCopyEmail.style.background = 'rgba(25, 24, 23, 0.08)';
                    setTimeout(() => {
                        copyEmailText.textContent = originalText;
                        btnCopyEmail.style.borderColor = '';
                        btnCopyEmail.style.background = '';
                    }, 2200);
                }).catch(() => {
                    window.location.href = `mailto:${email}`;
                });
            } else {
                window.location.href = `mailto:${email}`;
            }
        });
    }
})();

// Initialize Global Tactile Sound Engine Toggles
SoundEngine.initToggles();
