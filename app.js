// Project Dataset with Problem, Solution, Tech Stack, Image, and Links
const projects = {
    roninclips: {
        title: "RoninClips",
        badge: "100% OFFLINE AI ENGINE",
        problem: "Content creators waste hours manually searching video footage for viral hooks, syncing subtitles, and paying expensive recurring cloud subscriptions with privacy risks.",
        solution: "Engineered a 100% offline desktop AI engine combining Faster-Whisper, Groq AI, and FFmpeg to auto-extract viral highlights, render animated karaoke subtitles, and auto-crop faces locally.",
        stack: "LARAVEL / PYTHON / FASTER-WHISPER / GROQ AI / FFMPEG",
        img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80",
        repo: "https://github.com/clascuna556171/roninclips",
        live: null
    },
    worthit: {
        title: "WorthIt",
        badge: "NEUROECONOMIC FRICTION ENGINE",
        problem: "Algorithmic e-commerce and social commerce platforms hijack consumer dopamine loops through frictionless 1-click checkouts and manufactured urgency, triggering chronic compulsive spending and severe buyer's remorse.",
        solution: "Architected an intentional friction mobile engine using Flutter and Groq LPU (llama-3.3-70b-versatile) that enforces 24–72h dopamine cooling vault locks, computes physical labor-hour costs, projects S&P 500 compound opportunity loss, and delivers sub-second AI reality checks with smart budget dupes.",
        stack: "FLUTTER / DART / FIREBASE / GROQ LPU / LLAMA-3.3-70B / PROVIDER",
        img: "images/worthit.png",
        repo: "https://github.com/clascuna556171/worthit",
        live: null
    },
    shoeboy: {
        title: "The Shoe Boy",
        badge: "ENTERPRISE POS & LIVE SELLING",
        problem: "A high-volume footwear retailer with over 100,000 online followers struggled with chaotic Facebook Live sales, where verbal claim codes and flooded Messenger inboxes caused rampant double-selling, dispute delays, and untracked inventory across 500-pair wholesale bales.",
        solution: "Engineered a centralized batch-to-unit serialized inventory management and multi-channel live-selling POS system in Laravel 11, implementing unique SKU barcode generation, atomic reservation locks that eliminate live-stream double-selling, GCash payment verification workflows, and automated per-unit net profit calculations.",
        stack: "LARAVEL 11 / PHP 8.2 / MYSQL / ALPINE.JS / TAILWIND CSS / BLADE / DOMPDF",
        img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=600&q=80",
        repo: "https://github.com/clascuna556171/shoeboy",
        live: null
    },
    stxic: {
        title: "STXIC (Personal Life OS)",
        badge: "ZERO-SUBSCRIPTION LIFE OS",
        problem: "Students and developers juggle fragmented, expensive subscription apps for tasks, notes, course portals, and finance, leaving their sensitive personal data exposed to commercial telemetry with zero offline privacy.",
        solution: "Engineered a privacy-first, zero-cost Personal Life OS combining an encrypted local-first vault, Blackboard student automation engine (BADS-DE), personal finance & FX tracker, hybrid local/cloud AI (Groq + Ollama/Qwen), and live Obsidian sync built in Next.js 14, React 19, TypeScript, and Firebase.",
        stack: "NEXT.JS / REACT 19 / TYPESCRIPT / TAILWIND CSS / FIREBASE / GROQ / OLLAMA / CAPACITOR / PWA",
        img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
        repo: "https://github.com/clascuna556171/stxic-os",
        live: null
    },
    polyskill: {
        title: "PolySkill",
        badge: "UNIVERSAL SKILL COMPILER",
        problem: "AI agent tooling is crippled by fragmented runtime protocols (MCP, Antigravity, Cursorrules, OpenAI) and vulnerable to prompt injection, SSRF, directory traversal, and unconfirmed destructive actions that block enterprise adoption.",
        solution: "Architected the \"LLVM for AI Agent Skills\"—a zero-dependency static compiler that ingests Python AST, TypeScript SDKs, Bash scripts, and OpenAPI specs, compiling them into universal agent tools with hardcoded deterministic security guardrails in ~2 milliseconds at $0 cloud cost.",
        stack: "TYPESCRIPT / NODE.JS / AST PARSING / MCP / ANTIGRAVITY / CURSORRULES / OPENAPI / CLI",
        img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
        repo: "https://github.com/clascuna556171/pollyskill",
        live: null
    },
    automator: {
        title: "AI Ticket Automator",
        badge: "ASYNC SUPPORT TRIAGE ENGINE",
        problem: "Customer support engineering teams face crushing queues of unclassified tickets, resulting in sluggish resolution times, human triage inconsistencies, delayed critical incident escalations, and disconnected internal tooling.",
        solution: "Engineered an asynchronous support ticket triage engine using FastAPI, Redis/RQ queues, and Groq LLMs that auto-classifies sentiment and priority, auto-responds to high-confidence tickets, and broadcasts HMAC-signed payloads across downstream webhooks.",
        stack: "FASTAPI / PYTHON 3.12 / REDIS / RQ / SQLALCHEMY / MYSQL / GROQ LLM / JWT / DOCKER",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
        repo: "https://github.com/clascuna556171/ai-task-automator",
        live: null
    },
    pawfect: {
        title: "PawfectMatch",
        badge: "LIVE PRODUCTION PLATFORM",
        problem: "Animal rescue shelters operate on fragmented paperwork, phone records, and unstructured social media inboxes, resulting in slow adoption vetting, high animal surrender rates, and zero systematic post-adoption welfare monitoring.",
        solution: "Engineered an end-to-end pet adoption lifecycle platform using Laravel MVC, MySQL, Tailwind CSS, and Alpine.js, featuring cinematic video showcases, dynamic temperament filtering, role-based shelter management, and automated 7-day post-adoption check-in email dispatchers.",
        stack: "LARAVEL / PHP 8.2 / MYSQL / BLADE / TAILWIND CSS / ALPINE.JS / DOCKER / VITE",
        img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=600&q=80",
        repo: "https://github.com/clascuna556171/pawfect-match",
        live: "https://pawfect-match-1gqf.onrender.com/"
    },
    kinetic: {
        title: "STXIC.CL (Kinetic Portfolio)",
        badge: "KINETIC MOTION & AI CONCIERGE",
        problem: "Developer portfolios are dominated by generic, cookie-cutter SaaS templates that fail to convey creative frontend engineering, bespoke motion choreography, real-time AI capabilities, or robust backend architecture.",
        solution: "Architected an Awwwards-inspired kinetic web portfolio and AI Concierge powered by Laravel 11, GSAP 3, and Lenis, featuring physics-based magnetic cursor dynamics, living SVG morphing shaders, an authenticated /admin CMS, and a context-grounded Groq AI assistant with offline fallback.",
        stack: "LARAVEL 11 / PHP 8.3 / GSAP 3 / LENIS / GROQ AI / TAILWIND CSS / DOCKER / MYSQL",
        img: "images/kinetic.jpg",
        repo: "https://github.com/clascuna556171/fullstack-portfolio",
        live: null
    }
};

// DOM References
const deck = document.getElementById('deck');
const flipTrigger = document.getElementById('flipTrigger');
const returnTrigger = document.getElementById('returnTrigger');

// Flip Controls (Clean 2D Sheet Flip)
if (flipTrigger && deck) {
    flipTrigger.addEventListener('click', () => {
        deck.classList.add('flipped');
    });
}

if (returnTrigger && deck) {
    returnTrigger.addEventListener('click', () => {
        deck.classList.remove('flipped');
    });
}

// Dossier Tabs Navigation
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanes.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        const target = btn.getAttribute('data-tab');
        const targetPane = document.getElementById(`pane-${target}`);
        if (targetPane) {
            targetPane.classList.add('active');
        }
    });
});

// Project Directory Item Selection & Details Render
const projectItems = document.querySelectorAll('.project-card-item');
const detailTitle = document.getElementById('detailTitle');
const detailBadge = document.getElementById('detailBadge');
const detailProblem = document.getElementById('detailProblem');
const detailSolution = document.getElementById('detailSolution');
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
        projectItems.forEach(i => i.classList.remove('selected'));
        item.classList.add('selected');
        renderProject(item.getAttribute('data-id'));
    });
});

// Initial Render
renderProject('roninclips');
