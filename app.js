// Project Dataset with Problem, Solution, Tech Stack, Image, and Links
const projects = {
    roninclips: {
        title: "RoninClips",
        problem: "Content creators waste hours manually searching video footage for viral hooks, syncing subtitles, and paying expensive recurring cloud subscriptions with privacy risks.",
        solution: "Engineered a 100% offline desktop AI engine combining Faster-Whisper, Groq AI, and FFmpeg to auto-extract viral highlights, render animated karaoke subtitles, and auto-crop faces locally.",
        stack: "LARAVEL / PYTHON / FASTER-WHISPER / GROQ AI / FFMPEG",
        img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80",
        repo: "https://github.com/clascuna556171/roninclips",
        live: null
    },
    pawfect: {
        title: "PawfectMatch",
        problem: "Animal shelters struggle with disjointed adoption records, slow applicant screening, and chaotic intake procedures handled across fragmented spreadsheets.",
        solution: "Built a unified full-stack pet adoption management platform with glassmorphic interface, natural language adoption chatbot, and comprehensive shelter management ledger with audit trails.",
        stack: "LARAVEL / PHP / MYSQL / JAVASCRIPT / TAILWIND CSS",
        img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=600&q=80",
        repo: "https://github.com/clascuna556171/pawfect-match",
        live: "https://pawfect-match-1gqf.onrender.com/"
    },
    kinetic: {
        title: "Kinetic Portfolio / STXIC.CL",
        problem: "Traditional developer portfolios feel static and forgettable, failing to convey deep technical creativity and real-time graphics capability.",
        solution: "Developed a custom GSAP and Canvas2D interactive web experience featuring real-time ASCII rasterization, magnetic cursor physics, and embedded conversational AI concierge.",
        stack: "LARAVEL / PHP / GSAP / LENIS / CANVAS 2D / CSS3",
        img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
        repo: "https://github.com/clascuna556171",
        live: null
    },
    automator: {
        title: "AI Task Automator",
        problem: "Customer support desks face overwhelming ticket queues, manual categorization delays, and prolonged first-response latency on repetitive inquiries.",
        solution: "Architected a Python-driven automation suite integrating LLMs to auto-categorize support inquiries, parse intent, and dispatch instant verified resolution templates, cutting manual triage by 70%.",
        stack: "PYTHON / OPENAI API / FASTAPI / MYSQL / WORKFLOW AUTOMATION",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
        repo: "https://github.com/clascuna556171",
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
