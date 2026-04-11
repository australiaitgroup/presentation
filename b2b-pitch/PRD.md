# PRD: JR Academy B2B Pitch Deck (English)

## Overview

A professional English-language pitch deck targeting **businesses, enterprises, universities, and government agencies**. Unlike the existing `company-intro` deck (to-C, Chinese, targeting individual learners), this deck sells **JR Academy as a workforce solution partner**.

**URL**: `/presentation/b2b-pitch/`
**Language**: English only
**Audience**: CTOs, HR Directors, L&D Managers, University Program Directors, Government Workforce Agencies
**Goal**: Secure partnerships, corporate training contracts, talent pipeline agreements

---

## Target Audience & Use Cases

| Audience | What They Care About | Our Pitch |
|----------|---------------------|-----------|
| **CTO / Engineering** | Need AI capabilities but lack in-house expertise | AI solution delivery, team augmentation, AI strategy consulting |
| **Enterprise L&D** | AI upskilling for existing workforce | Customizable AI training programs, 15 learning directions |
| **HR / Talent Acquisition** | Sourcing AI-ready talent | 10K+ trained candidates, P3 project incubator, pre-vetted talent pipeline |
| **University Partners** | Supplementing curriculum | Co-branded bootcamps, certification programs, industry mentors |
| **Government / Workforce** | Reskilling unemployed / immigrants | Proven track record in migrant upskilling, 6K+ job placements |
| **Tech Companies** | Community engagement, employer branding | 200+ events/year, co-hosted meetups, sponsored content |

---

## Slide-by-Slide Specification

### S01 — Cover

**File**: `S01_Cover.tsx`
**Background**: `colors.dark` (#10162f)
**Layout**: Full-bleed dark background with decorative neo-brutalist shapes

**Content**:
- JR Academy logo badge (white card, black border, shadow)
- Main title: **"AI-Powered Workforce Solutions"**
- Subtitle: "Training the next generation of AI-ready talent"
- Tags: `jiangren.com.au` | `EST. 2017` | `9 Countries`
- Right side: Professional event photo (reuse `event-atlassian-group.webp`)
- Floating badge: "6,000+ Job Placements"

**Design**: Same neo-brutalist style as company-intro cover. Tilted decorative color blocks (yellow, green, blue). Floating particles.

---

### S02 — The Problem

**File**: `S02_Problem.tsx`
**Background**: `colors.warmBg`
**Layout**: `<Inner split>` — left title, right data cards

**Content**:
- Title: **"The AI Skills Gap Is Real"**
- 3 data cards with real industry stats:
  - **"87%"** — of companies report AI skills gaps (McKinsey 2024)
  - **"$320B"** — projected AI training market by 2030 (Grand View Research)
  - **"40%"** — of workers will need reskilling within 5 years (WEF)
- Bottom quote: "Organizations that invest in AI upskilling see 2-3x ROI within 18 months"

**Design**: Large tilted stat cards (red, yellow, blue backgrounds). Black borders. Each card with big number + source citation.

---

### S03 — Who We Are

**File**: `S03_WhoWeAre.tsx`
**Background**: `colors.warmBg`
**Layout**: `<Inner split>` — left content, right stacked photos

**Content**:
- Title: **"Who We Are"**
- Bullet points:
  - Founded in **2017** in Sydney, Australia
  - The **largest Chinese-speaking IT & AI education platform** globally
  - Full transformation to **AI-native learning platform** in 2024
- Stat cards (scattered, tilted):
  - **8 Years** — Education Experience
  - **9 Countries** — Global Presence
  - **10K+** — Learners Trained
  - **600+** — Industry Mentors
- Right: Stacked event/partnership photos with brutal frame

---

### S04 — Impact Numbers

**File**: `S04_Impact.tsx`
**Background**: `colors.warmBg`
**Layout**: Left = 2x2 stat card grid, Right = offer collage image

**Content**:
- Title: **"Our Impact"**
- 4 impact cards:
  - **6,000+** — Job Placements | "Graduates working at top companies"
  - **200+** — Events/Year | "Online & Offline"
  - **10,000+** — Learners | "Across 9 countries"
  - **600+** — Mentors | "From Google, Canva, Atlassian, Microsoft"
- Right: Offer collage image with partner logo strip
- Badge: "Verified Outcomes"

---

### S05 — Where Our Alumni Work

**File**: `S05_Alumni.tsx`
**Background**: `colors.white`
**Layout**: `<Inner center>` — logo wall

**Content**:
- Title: **"Where Our Graduates Work"**
- Company name rows (text-based, monospace font):
  - ATLASSIAN, Canva, Microsoft, Amazon, Google
  - J.P.Morgan, Deloitte, PwC, KPMG, EY, Accenture
  - NAB, CommBank, ANZ, Westpac, Telstra, Thoughtworks
  - REA Group, Domain, MYOB, ROKT, Xero, Rio Tinto
  - Suncorp, Carsales, Cognizant, Tencent, Binance
- Footer: "and more..."

**Design**: Clean, minimal. Company names in monospace. Subtle AnimatedBg shapes.

---

### S06 — Our Solutions (Overview)

**File**: `S06_Solutions.tsx`
**Background**: `colors.warmBg`
**Layout**: `<Inner center>` — 4-column card grid

**Content**:
- Title: **"End-to-End Workforce Solutions"**
- Subtitle: "From AI upskilling to talent placement — we cover the full lifecycle"
- 5 solution cards (use 5-column or 3+2 grid):
  1. **AI Delivery & Consulting** — "End-to-end AI solution design, development & deployment" | Tag: CONSULTING
  2. **Corporate AI Training** — "Customizable upskilling programs for enterprise teams" | Tag: TRAINING
  3. **Talent Pipeline** — "Pre-trained, job-ready AI professionals" | Tag: HIRING
  4. **Certification Programs** — "350+ IT certs with AI-powered prep" | Tag: CERTIFICATION
  5. **Community & Events** — "200+ events/year for brand engagement" | Tag: ENGAGEMENT
- Each card: emoji icon, title, description, tag badge

---

### S07 — AI Delivery & Consulting

**File**: `S07_Consulting.tsx`
**Background**: `colors.darkBg`
**Layout**: `<Inner split>` — left title + value props, right service cards (2x2 grid)

**Content**:
- Tag: "CONSULTING" (indigo/teal accent)
- Title: **"AI Delivery & Consulting"**
- Subtitle: "From strategy to production — we build AI solutions that ship"
- Left side value proposition:
  - "Not just training — we deliver AI projects end-to-end"
  - "Our team of 600+ engineers & AI practitioners can augment your delivery capacity"
  - "From PoC to production, we handle the full AI development lifecycle"

- Right side — 4 service cards (2x2 grid):
  1. **AI Strategy & Assessment**
     - AI readiness audit for your organization
     - Use case identification & prioritization
     - ROI modeling & build-vs-buy analysis
     - Tag: STRATEGY | Icon: 🧭

  2. **AI Solution Development**
     - Custom AI/ML application development
     - LLM integration & fine-tuning (OpenAI, Claude, Gemini)
     - RAG systems, AI Agents, workflow automation
     - Tag: BUILD | Icon: ⚙️

  3. **AI Team Augmentation**
     - Embed AI engineers into your existing teams
     - Short-term (3 months) or long-term engagements
     - Pre-vetted from our 10K+ talent pool
     - Tag: AUGMENT | Icon: 👥

  4. **AI Enablement & Adoption**
     - Internal AI tool rollout (Copilot, Claude, custom tools)
     - Change management & adoption programs
     - AI governance & responsible AI frameworks
     - Tag: ADOPT | Icon: 🚀

- Bottom strip — Tech capabilities:
  - LangChain | OpenAI | Claude API | AWS Bedrock | RAG | Vector DB | MCP | AI Agents | Vibe Coding

**Design**: Dark background with gradient overlay (indigo/teal tones). Cards have white background with black borders and colored accent shadows. Each card has an icon, title, 3 bullet points, and a tag.

---

### S08 — Corporate AI Training

**File**: `S08_Training.tsx`
**Background**: `colors.darkBg`
**Layout**: `<Inner split>` — left details, right program grid

**Content**:
- Tag: "ENTERPRISE"
- Title: **"AI Training Programs"**
- Subtitle: "Upskill your workforce with industry-leading AI curriculum"
- Left bullets:
  - 15 AI learning directions, 385+ chapters
  - Customizable to your tech stack & industry
  - Instructor-led or self-paced options
  - Real-world projects with measurable outcomes
- Right: 3-column program cards (same as S09 bootcamps but English):
  1. **AI & Engineering** — AI Engineer, DevOps, Data Engineer, Cyber Security
  2. **AI Essentials** — Vibe Coding, Prompt Master, AI Office, AI Builder
  3. **Career Acceleration** — Interview Prep, Career Coaching, P3 Project Incubator

---

### S09 — Interactive Labs & Platform

**File**: `S09_Platform.tsx`
**Background**: `colors.darkBg`
**Layout**: `<Inner center>` — 3x2 feature card grid

**Content**:
- Title: **"More Than Courses — A Complete Learning System"**
- 6 feature cards (dark card style with white text):
  1. **AI Learning Assistant** — "24/7 AI-powered Q&A support"
  2. **Interactive Labs** — "8 hands-on labs: Frontend, Python, AWS, Git, LLM"
  3. **Learning Calendar** — "Track progress & manage study schedule"
  4. **Certification Engine** — "80K+ practice questions with AI tutoring"
  5. **Learning Roadmaps** — "Visual career pathways"
  6. **Community** — "10,000+ learners collaborating globally"

---

### S10 — Certification Programs

**File**: `S10_Certification.tsx`
**Background**: `colors.yellow`
**Layout**: Left = big title + stats, Right = feature cards + cert logos

**Content**:
- Title: **"350+ IT Certifications"**
- Subtitle: "One-stop exam prep with AI-powered practice"
- Stat cards: **80K+** Questions | **350+** Certs | **6K+** Learners
- Cert provider logos: AWS, Azure, GCP, Kubernetes, Terraform, CompTIA, PMP, Salesforce
- Feature cards: Question Bank (80K+), AI Tutor, Learning Chapters (350+), Mobile App (24/7)
- Chrome Extension: CertMaster — AI-powered exam prep on ExamTopics

---

### S11 — Talent Pipeline

**File**: `S11_Pipeline.tsx`
**Background**: `colors.warmBg`
**Layout**: 3-column flow diagram (Current Stage → P3 Incubator → Job Ready)

**Content**:
- Tag: "JR EXCLUSIVE"
- Title: **"P3 Career Incubator"**
- Subtitle: "Learn by doing — real projects, real teams, real outcomes"
- Left column: **Candidate Profiles** — University graduates, Career changers, Junior engineers, Non-IT professionals
- Center: **P3 Incubator** — Real commercial projects, Cross-functional teams (AI Engineer + DevOps + PM), 3-month project cycle, Pixel-art virtual office
- Right column: **Target Roles** — AI Engineer, Full-stack Developer, DevOps/Cloud, Data Engineer, Product Manager
- Bottom stat: "5,000+ successful career transitions"

---

### S12 — AI Career Tools

**File**: `S12_CareerTools.tsx`
**Background**: `colors.darkBg`
**Layout**: `<Inner split>` — left features list, right Chrome extension mock

**Content**:
- Tags: "CHROME EXTENSION" | "FREE"
- Title: **"Job Hunter — AI Career Assistant"**
- Subtitle: "AI-powered job search toolkit for your graduates & employees"
- Feature grid (2 columns):
  - AI Job Analysis (match scoring)
  - Interview Question Prediction
  - AI Cover Letter Generator
  - Company Intelligence
  - LinkedIn SEO Optimizer
  - Job Application Tracker
- Right: Interactive Chrome extension mock panel (reuse same design as S12_ChromeExt)
- Stats: "1,000+ active users"
- Enterprise angle: "Available as white-label solution for your organization"

---

### S13 — Global Reach

**File**: `S13_Global.tsx`
**Background**: `colors.darkBg`
**Layout**: Full-width interactive world map

**Content**:
- Title: **"Global Presence"**
- Tags: "Chinese Site" | "English Site"
- World map with markers:
  - Australia (HQ) — Sydney, Melbourne, Brisbane, Canberra
  - New Zealand — Auckland, Wellington
  - Singapore — Southeast Asian hub
  - Malaysia — Kuala Lumpur
  - United Kingdom — London
  - United States — North America
  - China — Shanghai
  - Canada — Toronto, Vancouver
  - Dubai — Middle East
- Connection lines from HQ to each location
- Bottom: clickable location buttons
- Note: Reuse `react-simple-maps` and same map component logic from company-intro S05

---

### S14 — Industry Mentors

**File**: `S14_Mentors.tsx`
**Background**: `#f5f0eb`
**Layout**: `<Inner center>` — 6-column mentor card grid

**Content**:
- Title: **"600+ Mentors from Leading Companies"**
- Subtitle: "Google · Canva · Atlassian · Microsoft · Amazon · Deloitte · PwC"
- 12 mentor cards (same data as company-intro):
  - Lightman — CEO, JR Academy
  - Jatin Wadhwa — Head of Data & AI, Givvable
  - Joe Zhou — Software Engineer, Google
  - Yu Wang — SRE, Atlassian
  - Sally Chen — Data Analyst, Deloitte
  - Ran Ding — Principal Engineer, Atlassian
  - Kevin Luo — Team Lead, Google
  - Owen Yan — Data Engineer, Canva
  - Vik Gambhir — Product Lead, Atlassian
  - Katherine Chen — Software Engineer, Google
  - Ray Ma — DevOps Engineer, Microsoft
  - Bruce Zhao — Senior Developer, Deloitte

---

### S15 — Partnership Models

**File**: `S15_Partnerships.tsx`
**Background**: `colors.warmBg`
**Layout**: `<Inner center>` — 3 or 4 column card grid

**Content**:
- Title: **"Partnership Models"**
- Subtitle: "Flexible engagement options tailored to your needs"
- 5 partnership cards (3+2 or 5-column grid):
  1. **AI Delivery & Consulting** — "End-to-end AI solutions. Strategy → PoC → Production. Team augmentation available." | Tag: NEW
  2. **Corporate Training** — "Custom AI bootcamps for your team. 8-12 week programs. On-site or remote." | Tag: POPULAR
  3. **Talent Referral** — "Access our pipeline of 10K+ trained candidates. Pre-vetted for your tech stack." | Tag: HIRING
  4. **Co-Branded Events** — "Joint meetups & workshops. 200+ events/year. 100+ attendees per event." | Tag: BRANDING
  5. **Platform Licensing** — "White-label our learning platform. Custom content. Your branding." | Tag: ENTERPRISE

---

### S16 — Case Studies / Social Proof

**File**: `S16_CaseStudies.tsx`
**Background**: `colors.white`
**Layout**: `<Inner center>` — 3-column testimonial/case cards

**Content**:
- Title: **"Trusted By Industry Leaders"**
- 4 case study cards (2x2 grid):
  1. **AI Solution Delivery** — "Built custom RAG-powered knowledge base and AI agent system for enterprise client. 60% reduction in support ticket resolution time." | Tag: CONSULTING
  2. **Atlassian Partnership** — "Co-hosted 20+ tech events. Direct talent pipeline into Atlassian Sydney & Melbourne offices." | Photo: event-atlassian-group.webp | Tag: PARTNERSHIP
  3. **Enterprise Upskilling** — "Trained 200+ professionals in AI fundamentals for a Big 4 consulting firm. 94% completion rate." | Tag: TRAINING
  4. **University Collaboration** — "Supplemented computer science curriculum with AI & cloud certifications for 500+ students across 3 universities." | Tag: EDUCATION
- Bottom: Partner logos strip — ATLASSIAN, Canva, AWS, Google Cloud, Microsoft, Deloitte

---

### S17 — Why JR Academy

**File**: `S17_WhyJR.tsx`
**Background**: `#f5f0eb`
**Layout**: `<Inner split>` — left title, right numbered cards

**Content**:
- Title: **"Why Partner With Us?"**
- 4 reason cards:
  1. **"600+ Industry Mentors"** — "Not academic instructors — practising engineers from Google, Canva, Atlassian, Microsoft"
  2. **"Largest Chinese-Speaking IT Community"** — "10,000+ learners + global referral network across 9 countries"
  3. **"AI-Native Platform"** — "We don't just teach AI — our platform is built with AI. Interactive labs, AI tutoring, AI career tools"
  4. **"Full Lifecycle: Learn → Build → Hire"** — "Training → Projects → Resume → Interview → Referral → Offer. End-to-end."

---

### S18 — CTA / Next Steps

**File**: `S18_CTA.tsx`
**Background**: `colors.dark`
**Layout**: `<Inner center>` — centered CTA

**Content**:
- Title: **"Let's Build the AI Workforce Together"**
- Contact info:
  - Website: jiangren.com.au
  - Email: business@jiangren.com.au
  - LinkedIn: JR Academy
- CTA buttons:
  - Primary (yellow): "Schedule a Meeting"
  - Secondary (white border): "Download Partnership Kit"
- Footer: JR Academy logo + tagline

---

## Technical Specification

### Tech Stack
- React 19 + TypeScript + Vite 8
- framer-motion for animations
- Inline styles only (no CSS files, no styled-components, no Tailwind)
- react-simple-maps for the global map slide (S12)
- qrcode.react for any QR codes

### File Structure
```
presentations/b2b-pitch/
├── package.json
├── index.html
├── vite.config.ts          # base: '/presentation/b2b-pitch/'
├── tsconfig.json
├── tsconfig.app.json
├── public/
│   └── images/             # Reuse from company-intro where possible
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── styles/
│   │   └── theme.ts        # Copy from company-intro, keep same colors
│   ├── utils/
│   │   └── img.ts          # Copy from company-intro
│   └── components/
│       ├── SlideEngine.tsx  # Copy from company-intro
│       ├── AnimatedBg.tsx   # Copy from company-intro
│       ├── AvatarWall.tsx   # Copy from company-intro
│       ├── ui.tsx           # Copy from company-intro
│       └── slides/
│           ├── S01_Cover.tsx
│           ├── S02_Problem.tsx
│           ├── S03_WhoWeAre.tsx
│           ├── S04_Impact.tsx
│           ├── S05_Alumni.tsx
│           ├── S06_Solutions.tsx
│           ├── S07_Consulting.tsx
│           ├── S08_Training.tsx
│           ├── S09_Platform.tsx
│           ├── S10_Certification.tsx
│           ├── S11_Pipeline.tsx
│           ├── S12_CareerTools.tsx
│           ├── S13_Global.tsx
│           ├── S14_Mentors.tsx
│           ├── S15_Partnerships.tsx
│           ├── S16_CaseStudies.tsx
│           ├── S17_WhyJR.tsx
│           └── S18_CTA.tsx
```

### Shared Assets (Reuse from company-intro)
Images that can be reused:
- `event-atlassian-group.webp`
- `event-slider-*.webp`
- `partnership-*.jpg`
- `offers-collage.webp`
- `meta-image-project.webp`
- `cert-providers/*.svg`
- `avatars/*.webp`
- `mentor-*.jpg`

### Design Principles
1. **Professional but bold** — Neo-brutalism stays, but content tone is corporate
2. **Data-driven** — Every claim backed by a number
3. **Outcome-focused** — Lead with results (6K+ placements, 600+ mentors), not features
4. **Scannable** — Decision makers skim. Big numbers, clear headers, short text
5. **No Chinese text** — All English. Remove WeChat, 小红书 references. Keep LinkedIn, email

### Compared to Company-Intro (to-C)

| Aspect | Company-Intro (to-C) | B2B Pitch |
|--------|----------------------|-----------|
| Language | Chinese | English |
| Audience | Individual learners | Business decision makers |
| Tone | Energetic, student-friendly | Professional, data-driven |
| CTA | "免费试听" (Free trial) | "Schedule a Meeting" |
| Focus | Course content, learning features | ROI, outcomes, consulting, partnership models |
| Slides | 21 slides | 18 slides (tighter) |
| Contact | WeChat, 小红书 | Email, LinkedIn |
| Key message | "学AI 找匠人 拿Offer" | "AI-Powered Workforce Solutions" |

---

## Content Guidelines

- **No filler language** — No "In today's rapidly evolving..." or "comprehensive solutions"
- **Lead with numbers** — "6,000+ job placements" not "many successful graduates"
- **Specific over generic** — "Trained 200+ professionals for Big 4" not "enterprise training experience"
- **Short text blocks** — Max 2-3 lines per card. Decision makers don't read paragraphs
- **Enterprise language** — "workforce solutions", "talent pipeline", "ROI", "upskilling", "L&D"

---

## Build & Deploy

```bash
cd presentations/b2b-pitch
bun install
bun run dev          # localhost:5173
bun run build        # dist/
```

Deploy: Add to GitHub Actions workflow alongside company-intro.
Output path: `~/Documents/presentations/b2b-pitch/` (following feedback_build_output convention)
