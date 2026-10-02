# EXECUTIVE PORTFOLIO CASE STUDIES & TECHNICAL DOSSIER
**Christian Lascuña — STXIC | Systems Architect & Full-Stack Engineer**

---

> This dossier contains the standardized executive project cards formatted according to the editorial design spec:
> **PROJECT TITLE** | **THE PROBLEM** | **THE SOLUTION** | **TECH SPEC**
>
> Followed by a comprehensive architectural deep-dive, system diagrams, technical highlights, and operational metrics for all 8 repositories.

---

# TABLE OF CONTENTS
1. [Quick-Reference Executive Cards (Visual Spec)](#1-quick-reference-executive-cards)
   - [RONINCLIPS](#1-roninclips)
   - [WORTHIT](#2-worthit)
   - [THE SHOE BOY](#3-the-shoe-boy) *(Special 100k+ Follower Enterprise Feature)*
   - [STXIC (Personal Life OS)](#4-stxic-personal-life-os)
   - [POLYSKILL](#5-polyskill)
   - [AI TICKET AUTOMATOR](#6-ai-ticket-automator)
   - [PAWFECTMATCH](#7-pawfectmatch-pet-adoption)
   - [STXIC.CL (Kinetic Portfolio)](#8-stxiccl-kinetic-portfolio)
2. [Comprehensive Project Dossiers & Architecture Specifications](#2-comprehensive-project-dossiers)
3. [Ready-to-Paste HTML / Tailwind Component Snippets](#3-ready-to-paste-html--tailwind-component-snippets)

---

# 1. Quick-Reference Executive Cards

```
========================================================================================
                                    EXECUTIVE CARDS
========================================================================================
```

### 1. RONINCLIPS

**RONINCLIPS**

**THE PROBLEM:**  
Content creators waste hours manually searching video footage for viral hooks, syncing subtitles, and paying expensive recurring cloud subscriptions with privacy risks.

**THE SOLUTION:**  
Engineered a 100% offline desktop AI engine combining Faster-Whisper, Groq AI, and FFmpeg to auto-extract viral highlights, render animated karaoke subtitles, and auto-crop faces locally.

**TECH SPEC: LARAVEL / PYTHON / FASTER-WHISPER / GROQ AI / FFMPEG**

---

### 2. WORTHIT

**WORTHIT**

**THE PROBLEM:**  
Algorithmic e-commerce and social commerce platforms hijack consumer dopamine loops through frictionless 1-click checkouts and manufactured urgency, triggering chronic compulsive spending and severe buyer's remorse.

**THE SOLUTION:**  
Architected an intentional friction mobile engine using Flutter and Groq LPU (`llama-3.3-70b-versatile`) that enforces 24–72h dopamine cooling vault locks, computes physical labor-hour costs, projects S&P 500 compound opportunity loss, and delivers sub-second AI reality checks with smart budget dupes.

**TECH SPEC: FLUTTER / DART / FIREBASE / GROQ LPU / LLAMA-3.3-70B / PROVIDER**

---

### 3. THE SHOE BOY

**THE SHOE BOY**

**THE PROBLEM:**  
A high-volume footwear retailer with over 100,000 online followers struggled with chaotic Facebook Live sales, where verbal claim codes and flooded Messenger inboxes caused rampant double-selling, dispute delays, and untracked inventory across 500-pair wholesale bales.

**THE SOLUTION:**  
Engineered a centralized batch-to-unit serialized inventory management and multi-channel live-selling POS system in Laravel 11, implementing unique SKU barcode generation, atomic reservation locks that eliminate live-stream double-selling, GCash payment verification workflows, and automated per-unit net profit calculations.

**TECH SPEC: LARAVEL 11 / PHP 8.2 / MYSQL / ALPINE.JS / TAILWIND CSS / BLADE / DOMPDF**

---

### 4. STXIC (PERSONAL LIFE OS)

**STXIC**

**THE PROBLEM:**  
Students and developers juggle fragmented, expensive subscription apps for tasks, notes, course portals, and finance, leaving their sensitive personal data exposed to commercial telemetry with zero offline privacy.

**THE SOLUTION:**  
Engineered a privacy-first, zero-cost Personal Life OS combining an encrypted local-first vault, Blackboard student automation engine (BADS-DE), personal finance & FX tracker, hybrid local/cloud AI (Groq + Ollama/Qwen), and live Obsidian sync built in Next.js 14, React 19, TypeScript, and Firebase.

**TECH SPEC: NEXT.JS / REACT 19 / TYPESCRIPT / TAILWIND CSS / FIREBASE / GROQ / OLLAMA / CAPACITOR / PWA**

---

### 5. POLYSKILL

**POLYSKILL**

**THE PROBLEM:**  
AI agent tooling is crippled by fragmented runtime protocols (MCP, Antigravity, Cursorrules, OpenAI) and vulnerable to prompt injection, SSRF, directory traversal, and unconfirmed destructive actions that block enterprise adoption.

**THE SOLUTION:**  
Architected the "LLVM for AI Agent Skills"—a zero-dependency static compiler that ingests Python AST, TypeScript SDKs, Bash scripts, and OpenAPI specs, compiling them into universal agent tools with hardcoded deterministic security guardrails in ~2 milliseconds at $0 cloud cost.

**TECH SPEC: TYPESCRIPT / NODE.JS / AST PARSING / MCP / ANTIGRAVITY / CURSORRULES / OPENAPI / CLI**

---

### 6. AI TICKET AUTOMATOR

**AI TICKET AUTOMATOR**

**THE PROBLEM:**  
Customer support engineering teams face crushing queues of unclassified tickets, resulting in sluggish resolution times, human triage inconsistencies, delayed critical incident escalations, and disconnected internal tooling.

**THE SOLUTION:**  
Engineered an asynchronous support ticket triage engine using FastAPI, Redis/RQ queues, and Groq LLMs that auto-classifies sentiment and priority, auto-responds to high-confidence tickets, and broadcasts HMAC-signed payloads across downstream webhooks.

**TECH SPEC: FASTAPI / PYTHON 3.12 / REDIS / RQ / SQLALCHEMY / MYSQL / GROQ LLM / JWT / DOCKER**

---

### 7. PAWFECTMATCH (PET ADOPTION)

**PAWFECTMATCH**

**THE PROBLEM:**  
Animal rescue shelters operate on fragmented paperwork, phone records, and unstructured social media inboxes, resulting in slow adoption vetting, high animal surrender rates, and zero systematic post-adoption welfare monitoring.

**THE SOLUTION:**  
Engineered an end-to-end pet adoption lifecycle platform using Laravel MVC, MySQL, Tailwind CSS, and Alpine.js, featuring cinematic video showcases, dynamic temperament filtering, role-based shelter management, and automated 7-day post-adoption check-in email dispatchers.

**TECH SPEC: LARAVEL / PHP 8.2 / MYSQL / BLADE / TAILWIND CSS / ALPINE.JS / DOCKER / VITE**

---

### 8. STXIC.CL (KINETIC PORTFOLIO)

**STXIC.CL**

**THE PROBLEM:**  
Developer portfolios are dominated by generic, cookie-cutter SaaS templates that fail to convey creative frontend engineering, bespoke motion choreography, real-time AI capabilities, or robust backend architecture.

**THE SOLUTION:**  
Architected an Awwwards-inspired kinetic web portfolio and AI Concierge powered by Laravel 11, GSAP 3, and Lenis, featuring physics-based magnetic cursor dynamics, living SVG morphing shaders, an authenticated `/admin` CMS, and a context-grounded Groq AI assistant with offline fallback.

**TECH SPEC: LARAVEL 11 / PHP 8.3 / GSAP 3 / LENIS / GROQ AI / TAILWIND CSS / DOCKER / MYSQL**

---

# 2. Comprehensive Project Dossiers

```
========================================================================================
                      DETAILED TECHNICAL ARCHITECTURE & SPECS
========================================================================================
```

## Project 1: RoninClips
*Local AI Video Clipper & Subtitle Engine*  
**Directory:** `C:\Users\Sebaz\roninclips`

### Architecture Overview
RoninClips is designed as a zero-cloud-cost, privacy-first desktop application combining a Laravel 12 application web server with an isolated Python 3.10+ processing daemon. It bridges modern AI video processing with zero SaaS subscription fees.

```
+-------------------------------------------------------------------------+
|                              RONINCLIPS                                 |
+-------------------------------------------------------------------------+
| [ User Input: Raw MP4/MKV Video ]                                      |
|          |                                                              |
|          v                                                              |
| [ Laravel 12 Web Dashboard ] ---> [ SQLite Database & Job Queue ]       |
|          |                                                              |
|          v                                                              |
| [ Python Processing Core (processor/.venv) ]                            |
|    |---> Faster-Whisper (CUDA / FP16 Timestamped Transcription)         |
|    |---> Groq LPU (openai/gpt-oss-120b Virality Scoring: 1-100)        |
|    |---> MediaPipe (Smart Face Tracking & 9:16 Center-Crop)             |
|    |---> ASS Subtitle Engine (Hormozi / Word-by-Word Highlighted Pop)   |
|    |---> FFmpeg (h264_nvenc GPU Accelerated Render)                     |
|          |                                                              |
|          v                                                              |
| [ Output: Rendered 9:16 Shorts + 1-Click Social Media Posting Kit ]     |
+-------------------------------------------------------------------------+
```

### Key Engineering Capabilities
1. **CUDA-Accelerated Faster-Whisper Pipeline:** Runs word-level timestamped transcription locally at up to 10x real-time speed on NVIDIA RTX/GTX GPUs using `h264_nvenc` hardware acceleration.
2. **Groq LPU Virality Scoring (1-100):** Deploys high-capacity LLMs (`openai/gpt-oss-120b`, `qwen/qwen3.6-27b`) to evaluate hook strength, audio pacing flow, and shareability index.
3. **Automated Social Media Copy Kit:** Automatically synthesizes high-CTR titles, TikTok/Reels captions with emojis, trending hashtags, and YouTube Shorts descriptions.
4. **ASS Karaoke Engine & 9:16 Live Simulator:** Generates word-by-word highlighted pop subtitles across 6 viral aesthetic presets (`Yellow Pop`, `Neon Cyan`, `Hormozi Style`, `Cyber Pink`) with real-time UI safe-zone HUD overlays.

---

## Project 2: WorthIt (Worthi)
*Intentional Friction & Behavioral Economics Engine for Compulsive Spending*  
**Directory:** `C:\Users\Sebaz\worthit` & `C:\Users\Sebaz\worthit\worthit`

### Architecture Overview
WorthIt is a cross-platform mobile application engineered in Flutter 3.13+ and Dart 3.0+ backed by Firebase and the Groq LPU inference engine (`llama-3.3-70b-versatile`). It acts as a cognitive speed bump that counteracts hyperbolic discounting.

```
+-------------------------------------------------------------------------+
|                                WORTHIT                                  |
+-------------------------------------------------------------------------+
| [ Impulse Purchase Trigger: Photo / OCR / Cart Item ]                   |
|          |                                                              |
|          v                                                              |
| [ Cognitive Friction Layer (Flutter + Provider Architecture) ]          |
|    |---> Labor-Hour Grounding ($Price / Hourly Wage = Physical Hours)   |
|    |---> S&P 500 Compound Opportunity Simulator (FV = PV(1+r)^t @ 8%)   |
|    |---> Groq LPU (Sub-second Devil's Advocate Reality Check)           |
|    |---> Smart Budget Alternative Finder (Dupes & Refurbished Options)  |
|          |                                                              |
|          v                                                              |
| [ Non-Negotiable Cooling-Off Vault (24h - 72h Lock) ]                   |
|    |---> Dopamine Baseline Reset Period                                 |
|    |---> Outcome A: Dismiss Impulse -> Victory Receipt + Savings Ledger |
|    |---> Outcome B: Timer Elapses   -> Conscious, Unregretted Buy       |
|          |                                                              |
|          v                                                              |
| [ Cloud Sync & Offline Simulation Engine (Firebase + Local Cache) ]     |
+-------------------------------------------------------------------------+
```

### Key Engineering Capabilities
1. **Neuroeconomic Speed Bump:** Translates abstract monetary tokens into physical working hours, forcing Kahneman System 2 deliberate cognition over impulsive System 1 dopamine triggers.
2. **Time-Locked Cooling Vault:** Enforces non-negotiable 24h to 72h countdowns preventing checkout before emotional arousal subsides.
3. **Compound Wealth Simulation:** Demonstrates real opportunity costs by projecting unspent capital over 3, 5, 10, and 20 years in broad-market index funds.
4. **Smart Alternative Finder:** Detects budget alternatives and calculates exact net savings (`Price_original - Price_alternative`), allowing instant 1-tap re-evaluation.
5. **Apple HIG OLED Design System:** Built to Apple Human Interface Guidelines standards with `#0A0A0C` true dark mode, frosted glassmorphism, synthesized haptic audio feedback, and 111 automated passing tests.
6. **Production Artifact:** Shipped as a standalone 75.7 MB release APK ([WorthIt-release.apk](file:///C:/Users/Sebaz/worthit/WorthIt-release.apk)) with zero-config guest access.

---

## Project 3: The Shoe Boy
*Integrated Serialized Inventory & Real-Time Live-Selling POS System*  
**Directory:** `C:\Users\Sebaz\shoeboy`  
**Enterprise Scale:** Developed for a high-volume footwear brand with **100,000+ online followers**

### Architecture Overview
The Shoe Boy is an enterprise inventory and order management system built on Laravel 11, MySQL, Tailwind CSS, and Alpine.js. It transitions a business from chaotic, unbacked-up Excel files and Messenger chats into an integrated, audit-trailed retail engine.

```
+-------------------------------------------------------------------------+
|                             THE SHOE BOY                                |
+-------------------------------------------------------------------------+
| [ Wholesale Bale Arrival: 16 Sacks / 400-500 Pairs ]                    |
|          |                                                              |
|          v                                                              |
| [ Washing, Inspection & Defect Repair Logging ]                         |
|          |                                                              |
|          v                                                              |
| [ Unit Serialization Engine: Unique SKU + 2x1 Barcode Label (DomPDF) ]  |
|          |                                                              |
|          +-------------------------------+------------------------------+
|          |                                                              |
|          v                                                              v
| [ In-Store POS Console ]                                  [ Real-Time Live Selling Queue ]
| (Walk-in barcode scan, cash / GCash)                      (Fast-paced claims, atomic lock)
|          |                                                              |
|          +-------------------------------+------------------------------+
|                                          |
|                                          v
|                    [ Payment Verification & Timer Gate ]
|                    (GCash ref match, auto-release on timeout)
|                                          |
|                                          v
|                    [ J&T Express Logistics & Dispatch ]
|                    (Waybill tagging, automated parcel tracking)
|                                          |
|                                          v
|                    [ Real-Time Financial & Unit Profit Ledger ]
|                    Margin = Price - (BatchCost / TotalPairs + RepairCost)
+-------------------------------------------------------------------------+
```

### Key Engineering Capabilities
1. **Handling 100k+ Follower Live Drops:** During viral Facebook Live broadcasts, arbitrary spoken codes and flooded Messenger inboxes previously caused chaotic double-selling. The system introduces atomic reservation locks that instantly secure claimed pairs and reject duplicate claims.
2. **Batch-to-Unit Serialization:** Ingests wholesale bales (400–500 pairs per shipment) and transitions them into unique serialized SKUs with condition grading, size categorization, and printable 2x1 barcode labels via `barryvdh/laravel-dompdf`.
3. **Automated Expiration Timers:** Claimed items are placed on a payment countdown timer; if GCash payment verification is not completed within the window, the reservation is automatically revoked and returned to available inventory.
4. **Unit Economics & Margin Precision:** Replaces guesswork by dynamically calculating per-shoe net profitability factoring in bulk purchase allocation and localized repair costs.
5. **Multi-Channel Reconciliation:** Harmonizes physical store POS counter transactions with live online claims into a unified relational database with scheduled cloud backups and full role-based access control (Owner vs Staff).

---

## Project 4: Stxic (Personal Life OS)
*Privacy-First Personal Life OS & Academic Student Automation Engine*  
**Directory:** `C:\Users\Sebaz\stxic`

### Architecture Overview
Stxic is a local-first, zero-subscription personal operating system engineered in Next.js 14 (App Router), React 19, TypeScript, and Firebase. It eliminates reliance on fragmented proprietary SaaS subscriptions while preserving absolute data sovereignty.

```
+-------------------------------------------------------------------------+
|                                 STXIC                                   |
+-------------------------------------------------------------------------+
| [ Client PWA Shell (Next.js 14 / React 19 / TypeScript / Tailwind) ]    |
|    |                                                                    |
|    +---> [ Encrypted Cloud Vault ] (WebCrypto AES-GCM + PIN Security)   |
|    +---> [ BADS-DE Student Engine ] (Blackboard Automation + GCal Sync) |
|    +---> [ Curated Tech News Hub ] (Privacy-First RSS Aggregation)      |
|    +---> [ Personal Finance & FX ] (Real-Time Currency Conversion)      |
|    +---> [ Obsidian Live Hybrid Sync ] (Local REST API + MCP Plugin)    |
|    |                                                                    |
|    v                                                                    |
| [ Hybrid AI Intelligence Architecture ]                                 |
|    |---> Cloud Tier: Sub-second Groq API LPU inference                  |
|    |---> Local Tier: 100% Offline Ollama (Qwen2.5-Coder 1.5B)            |
|    |                                                                    |
|    v                                                                    |
| [ Multi-Platform Deployment: Web App + Android APK via Capacitor ]      |
+-------------------------------------------------------------------------+
```

### Key Engineering Capabilities
1. **$0/Month Operational Footprint:** Designed to run indefinitely on free-tier infrastructure (Firebase Free Tier, Groq Free API, local Ollama LLMs, Frankfurter ECB rates).
2. **BADS-DE (Blackboard Automated Data Scraping & Delivery Engine):** Automates university coursework tracking, syllabus extraction, deadlines, and grade sync into Google Calendar.
3. **Local/Cloud Hybrid AI:** Delivers instant daily summaries, study schedules, and writing assistance using Groq cloud LPUs, falling back seamlessly to local Ollama (`Qwen2.5-Coder 1.5B`) when offline.
4. **Obsidian Hybrid Sync:** Connects web-based quick notes with local desktop Obsidian markdown vaults via Local REST APIs and MCP sidecars.
5. **Strict Performance Budget:** Enforces Core Web Vitals targets (LCP < 2.5s, CLS < 0.1, INP < 200ms) with route-level code splitting and dynamic imports.

---

## Project 5: PolySkill
*Universal Static Compiler & Deterministic Guardrails Engine for AI Agents*  
**Directory:** `C:\Users\Sebaz\polyskill`

### Architecture Overview
PolySkill is the "LLVM for AI Agent Skills"—a zero-dependency TypeScript compiler that ingests raw codebases and specs, normalizes them into an Intermediate Representation (IR), and emits hardened, sandboxed tools across conflicting AI runtimes.

```
+-------------------------------------------------------------------------+
|                               POLYSKILL                                 |
+-------------------------------------------------------------------------+
| [ Input Source: Python AST / TypeScript SDK / Bash / OpenAPI v3 ]       |
|          |                                                              |
|          v                                                              |
| [ Frontend Static Parser Suite (Regex & AST Tokenizers, No Exec) ]      |
|          |                                                              |
|          v                                                              |
| [ Universal Skill IR (Draft-07 Schema + Risk Classification Enums) ]    |
|          |                                                              |
|          v                                                              |
| [ Guardrail Synthesizer & Vulnerability Audit Engine ]                  |
|    |---> SSRF Filter (Blocks 169.254.169.254 & RFC 1918 Private IP)     |
|    |---> Path Traversal Shield (Blocks ../, /etc, System32)             |
|    |---> Credential Exfiltration Gate (Redacts AWS, GitHub, OpenAI keys)|
|    |---> Mandatory Mutation Confirmation (confirm: true / dryRun: true) |
|          |                                                              |
|          v                                                              |
| [ Multi-Target Emitter Matrix (~2ms Latency, $0 Cloud Cost) ]           |
|    |---> Google Antigravity (skills/<name>/SKILL.md + runner scripts)   |
|    |---> Model Context Protocol (MCP JSON-RPC 2.0 stdio server)         |
|    |---> Cursor & Windsurf (.cursorrules & system prompts)              |
|    |---> OpenAI / Anthropic Strict JSON Function Schemas                |
+-------------------------------------------------------------------------+
```

### Key Engineering Capabilities
1. **Breaching the SecOps Wall:** Replaces brittle prompt-based guardrails (`"Please do not delete data"`) with hardcoded deterministic runtime guards that prevent SSRF, path traversal, and raw token leakage.
2. **Universal Skill IR:** Establishes a standardized Intermediate Representation that decouples source code parsing from downstream target generation.
3. **Sub-2ms Compile Time:** Performs zero-network static analysis and emits production-ready agent skills in ~2ms, eliminating cloud latency and runtime LLM costs.
4. **Universal Protocol Interoperability:** Allows enterprise teams to author tooling once and compile simultaneously for Google Antigravity, Anthropic MCP, and Cursor.

---

## Project 6: AI Ticket Automator
*Autonomous Support Ticket Triage & Webhook Dispatch Platform*  
**Directory:** `C:\Users\Sebaz\ai-task-automator`

### Architecture Overview
AI Ticket Automator is an enterprise support automation backend built on FastAPI, Redis, Python-RQ, and SQLAlchemy (MySQL/TiDB). It processes high-volume incoming support tickets asynchronously with zero thread starvation.

```
+-------------------------------------------------------------------------+
|                          AI TICKET AUTOMATOR                            |
+-------------------------------------------------------------------------+
| [ Inbound API (POST /api/v1/intake) or Dashboard Ticket Creation ]      |
|          |                                                              |
|          v                                                              |
| [ FastAPI REST Core (JWT Auth, Pydantic v2 Validation, MySQL/TiDB) ]    |
|          |                                                              |
|          v                                                              |
| [ Redis Queue (RQ) Asynchronous Event Broker ]                         |
|    |                                                                    |
|    +---> [ Worker Queue 1: classify_ticket ]                            |
|    |        |---> Multi-tenant BYOK Groq LLM Inference                  |
|    |        |---> Sentiment, Priority & Category Extraction             |
|    |        |---> Confidence Score Calculation                          |
|    |        `---> High-Confidence Auto-Response Trigger                 |
|    |                                                                    |
|    `---> [ Worker Queue 2: dispatch_webhooks ]                          |
|             |---> HMAC SHA-256 Payload Signature Signing                |
|             |---> Outbound HTTP Dispatch with Exponential Backoff Retry |
|             `---> Delivery Status & Failure Audit Logging               |
|                                                                         |
| [ Reactive SPA Dashboard (Vanilla HTML5/ES6, Zero Build Step) ]         |
+-------------------------------------------------------------------------+
```

### Key Engineering Capabilities
1. **Asynchronous Non-Blocking Pipeline:** Decouples customer ticket intake from heavy LLM inference and third-party webhook latency via Redis and RQ workers.
2. **BYOK Multi-Tenancy:** Enables organizations to bring their own free or enterprise Groq API keys with graceful platform-level fallback routing.
3. **Confidence-Gated Auto-Resolution:** Automatically dispatches contextually generated first replies when model confidence exceeds predefined thresholds, freeing human agents for complex escalations.
4. **Cryptographic Webhook Center:** Implements secure HMAC SHA-256 signatures for outgoing events (`ticket.created`, `ticket.classified`, `reply.sent`) with automated retry backoffs and delivery tracking.
5. **Comprehensive Verification:** 65 passing automated tests across JWT authentication, ticket CRUD, mock Groq LLM classification, and webhook retries.

---

## Project 7: PawfectMatch (Pet Adoption)
*Cinematic Pet Adoption & Post-Care Lifecycle Engine*  
**Directory:** `C:\Users\Sebaz\pet-adoption`

### Architecture Overview
PawfectMatch is a full-stack pet rescue and lifecycle management platform built on Laravel MVC, MySQL, Tailwind CSS, and Alpine.js. It transforms animal shelter operations from paper-based chaos into a streamlined, cinematic digital experience.

```
+-------------------------------------------------------------------------+
|                              PAWFECTMATCH                               |
+-------------------------------------------------------------------------+
| [ Cinematic Discovery Layer (Blade, Tailwind CSS, Alpine.js) ]          |
|    |---> Full-Bleed Hero Video with Parallax Visuals                    |
|    |---> Multi-Attribute Trait Filter (Energy, Age, Size, Temperament)  |
|    |---> Interactive Pet Gallery & 360 View Cards                       |
|          |                                                              |
|          v                                                              |
| [ Structured Adoption Application & Vetting Engine ]                    |
|    |---> Form Request Validation & CSRF Protection                      |
|    |---> Shelter Staff Review & Interview Scheduling Pipeline           |
|          |                                                              |
|          v                                                              |
| [ Secure Role-Based Administration Dashboard (RBAC) ]                   |
|    |---> Staff Portal: Daily care, health logs, cataloging              |
|    |---> Admin Portal: Destructive actions, user RBAC, audit trails     |
|          |                                                              |
|          v                                                              |
| [ Automated 7-Day Post-Adoption Welfare Engine ]                        |
|    |---> Laravel Scheduler (schedule:run) & Mailable Queues             |
|    |---> Dispatches 7-day transition survey & check-in                  |
|    `---> Feeds verified community adoption testimonials                |
+-------------------------------------------------------------------------+
```

### Key Engineering Capabilities
1. **Full Adoption Lifecycle Management:** Tracks animals from initial shelter intake and medical quarantine through public listing, application review, home checks, and post-adoption support.
2. **Automated Post-Adoption Welfare Dispatcher:** Utilizes Laravel's background Task Scheduling and Mailables to automatically email adopters exactly 7 days after placement, collecting transition feedback and reducing return rates.
3. **Cinematic Public UI & Interactive Sliders:** Combines Playfair Display typography, responsive Alpine.js filters, and video reels to maximize prospective pet engagement.
4. **Dual-Tier Role Separation:** Employs custom Laravel middleware (`CheckRole:admin`) to ensure regular staff can update pet profiles while restricting sensitive financial and record deletions to administrators.
5. **Academic & Architectural Foundation:** Backed by comprehensive 3-chapter systems architecture documentation detailing full Entity Relationship Diagrams (ERDs), Level-0/1 Data Flow Diagrams (DFDs), and feasibility analyses.

---

## Project 8: STXIC.CL
*Kinetic Full-Stack Portfolio & AI Concierge Application*  
**Directory:** `C:\Users\Sebaz\fullstack-portfolio`

### Architecture Overview
STXIC.CL is an Awwwards-inspired, kinetic web application engineered by Christian Lascuña. Built on Laravel 11, GSAP 3, Lenis, and Groq AI, it rejects generic template UI in favor of custom physics, living SVGs, and real-time AI context grounding.

```
+-------------------------------------------------------------------------+
|                                STXIC.CL                                 |
+-------------------------------------------------------------------------+
| [ Public Motion & Visual Engine (Read-Only, Ultra High Performance) ]   |
|    |---> GSAP 3 ScrollTrigger (Line-by-line text reveal masks)          |
|    |---> Lenis Smooth Scroll (Inertial physics & scroll deceleration)   |
|    |---> Physics-Based Magnetic Cursor (Custom JS spring equations)     |
|    |---> Living Centerpiece (Custom animated inline morphing SVGs)      |
|    |---> Fluid Background Shaders (Dynamic noise & mesh gradients)      |
|          |                                                              |
|          +-------------------------------+------------------------------+
|          |                                                              |
|          v                                                              v
| [ Floating AI Concierge ]                                 [ Authenticated /admin CMS ]
| (Groq LPU + Live DB Grounding)                            (Secure CRUD for projects & certs)
| (Graceful local fallback engine)                          (JSON tags, media uploads, messages)
|          |                                                              |
|          +-------------------------------+------------------------------+
|                                          |
|                                          v
| [ Production Container: Multi-stage Docker with Nginx & PHP-FPM 8.3 ]    |
| [ Database: Neon.tech PostgreSQL / MySQL with Eloquent ORM ]            |
+-------------------------------------------------------------------------+
```

### Key Engineering Capabilities
1. **Custom Kinetic Motion System:** Orchestrates complex entrance timelines, line-by-line text reveals, and seamless page transitions with GSAP 3 and Lenis smooth scrolling without UI lag.
2. **Physics-Based Magnetic Cursor:** Built using raw Vanilla JavaScript spring equations to provide tactile, magnetic attraction on buttons and navigation items.
3. **Database-Grounded AI Concierge:** Features a floating multi-turn AI assistant powered by Groq (`llama-3.3-70b-versatile`), dynamically grounded in live project models, certifications, and developer credentials, paired with a deterministic local fallback engine for offline reliability.
4. **Architectural Public/Admin Separation:** Enforces strict separation between public read-only views and a secure, distraction-free `/admin` CMS dashboard managing JSON tech tags, credential verifications, and contact messages.
5. **Production Dockerization:** Fully containerized with an optimized multi-stage Docker build running PHP-FPM 8.3 and Nginx, pre-configured for zero-downtime deployment on Render.com and Neon PostgreSQL.

---

**IMPORTANT**

Project	Status	Remote Repository URL
RoninClips	Pushed	github.com/clascuna556171/roninclips
WorthIt	Pushed	github.com/clascuna556171/worthit
The Shoe Boy	Pushed	github.com/clascuna556171/shoeboy
Stxic	Pushed	github.com/clascuna556171/stxic-os
PolySkill	Pushed	github.com/clascuna556171/pollyskill
PawfectMatch (pet-adoption)	Pushed	github.com/clascuna556171/pawfect-match
Fullstack Portfolio	Pushed	github.com/clascuna556171/fullstack-portfolio
AI Task Automator	Local only	(No .git repository initialized)