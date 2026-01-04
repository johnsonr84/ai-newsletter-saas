# 📰 AI Newsletter SaaS — Generate Professional Newsletters in Minutes

[![Next.js 16](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb)](https://www.mongodb.com/atlas)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma)](https://www.prisma.io/)
[![Clerk](https://img.shields.io/badge/Clerk-Auth%20%26%20Billing-6C47FF?logo=clerk)](https://clerk.com/)
[![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4o-412991?logo=openai)](https://openai.com/)
[![Vercel AI SDK](https://img.shields.io/badge/Vercel-AI%20SDK-black?logo=vercel)](https://sdk.vercel.ai/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://vercel.com/)

---

## ✨ NewsletteRRS AI Newsletter SaaS — Your Personal AI Newsroom

**AI Newsletter SaaS** is the ultimate tool for newsletter creators who want to publish consistently **without burnout**.

Transform your RSS feeds into **professionally curated newsletters in seconds** — no more spending hours hunting for content or fighting writer’s block.

You subscribe to the sources you love, pick a date range, and AI generates:
- ✅ **5 newsletter title options**
- ✅ **5 subject line options (optimized for opens)**
- ✅ **A complete newsletter body (formatted + ready to send)**
- ✅ **Top 5 announcements / highlights**

Copy, paste, and ship.

---

## 🎯 Who This Is For

Newsletter creators who:
- Want to publish weekly/monthly without spending hours curating
- Need consistent content without “blank page syndrome”
- Want AI to produce *ready-to-send* output (not rough drafts)
- Prefer simple, clean SaaS architecture they can learn from or build on

---

## 🚀 What Makes This Special

This isn’t “just another newsletter generator.”

### 🧠 Intelligent Cross-User Caching (3-hour window)
When any user fetches a feed, the articles are cached for everyone for 3 hours:
- ⚡ Faster generation (no waiting for refresh)
- 📉 Fewer API calls to RSS providers
- 🛡️ More reliable (reduces rate-limit issues)
- 💰 Cost-effective at scale

> Example: User A fetches TechCrunch at 10:00 AM.  
> User B generates at 10:30 AM using TechCrunch → instant results via cache.

### 🧹 Article Deduplication
Articles are stored **once** even if they appear across multiple feeds:
- Same GUID across feeds = one stored record
- Saves ~40–50% storage for overlapping sources
- Enables trending detection: articles referenced in multiple feeds

### ⚡ Real-Time Streaming UI (Vercel AI SDK)
Watch newsletters generate **live** with streaming:
- Zero custom streaming code
- Uses standard `streamObject` + `useObject`
- Type-safe with Zod schema validation
- Simple + maintainable codebase

---

## 🖼️ Screenshots

| | |
|---|---|
| **Landing Page**<br/>![Home](./screenshots/home.png) | **Features**<br/>![Features](./screenshots/features.png) |
| **Pricing**<br/>![Pricing](./screenshots/pricing.png) | **Dashboard**<br/>![Dashboard](./screenshots/dashboard.png) |
| **Newsletter Generation**<br/>![Newsletter Generation](./screenshots/newsletter-generation.png) |  |

---

## 🧠 Core Features

### 📰 RSS Feed Management
Subscribe to multiple RSS feeds and manage them in one dashboard:
- Starter Plan: up to 3 RSS feeds
- Pro Plan: unlimited RSS feeds

### 🤖 AI-Powered Newsletter Generation
Generate professional newsletters in seconds:
- 5 title options
- 5 subject line options
- Full newsletter body (formatted)
- Top 5 announcements/highlights
- Additional insights and recommendations

### 📅 Custom Time Ranges
Generate newsletters for:
- last 7 days (weekly)
- last 30 days (monthly)
- custom date ranges (special editions)

### ✨ Smart Personalization
Customize generation using:
- newsletter name + description
- target audience
- brand voice + company info
- default tone (professional, casual, technical, etc.)
- custom disclaimers and footers

### 💾 Newsletter History (Pro)
Save and revisit past newsletters:
- view, edit, and reuse formats
- never lose a great edition

### ⚡ Real-Time Streaming Generation
Watch the newsletter write itself live (no polling).

### 📋 Copy & Paste Ready Output
Export content ready for:
- Mailchimp
- ConvertKit
- Substack
- or any email platform

---

## 🧱 Clean Architecture & Simple Code

This project prioritizes clean, readable code that beginners can understand and experienced devs can extend:

- **Vercel AI SDK**: no custom streaming — uses `streamObject` and `useObject`
- **Type-safe**: TypeScript + Zod validation throughout
- **Well-documented**: JSDoc on key functions
- **Modern patterns**: RSC, Server Actions, standard Next.js structure
- **Separation of concerns**: database, business logic, and UI are clearly separated

---

## 🛠️ Tech Stack

| Layer | Technology |
|------|------------|
| Frontend | Next.js 16, React 19, Tailwind CSS v4 |
| Auth + Billing | Clerk |
| Database | MongoDB Atlas |
| ORM | Prisma |
| AI | OpenAI GPT-4o (customizable) |
| Streaming | Vercel AI SDK (`streamObject`, `useObject`) |
| RSS | RSS parser + aggregation |
| Quality | Biome + TypeScript strict |
| Deployment | Vercel |

---

## 👇🏼 DO THIS Before You Get Started

> Note: Using the referral links below helps support development through affiliate partnerships.

1) **Clerk** — Auth + Billing + User Management  
2) **MongoDB Atlas** — Database  
3) **OpenAI** — Newsletter generation

---

## ⚙️ Getting Started

### Prerequisites
- Node.js 18+
- pnpm / npm / yarn
- Accounts: Clerk, MongoDB Atlas, OpenAI

---

## 📦 Clone & Install

```bash
git clone https://github.com/johnsonr84/ai-newsletter-saas
cd ai-newsletter-saas
pnpm install
# or
npm install
# or
yarn install
```

---

## 🔐 Environment Variables

Copy the template and fill in your values:

```bash
cp .env.example .env.local
```

`.env.local`:

```bash
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
CLERK_SECRET_KEY=sk_test_your_secret_key_here

# MongoDB Database
DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/newsletter-db?retryWrites=true&w=majority

# Prisma Accelerate (Optional - edge optimization)
# DATABASE_URL=prisma://accelerate.prisma-data.net/?api_key=your_api_key

# OpenAI API
OPENAI_API_KEY=sk-proj-your_openai_api_key_here
```

### Security Notes
- ⚠️ NEVER commit `.env.local`
- ✅ `NEXT_PUBLIC_` vars are exposed to the browser (use only for safe keys)
- 🔒 Keep `CLERK_SECRET_KEY`, `DATABASE_URL`, and `OPENAI_API_KEY` server-side only

---

## 🔧 Configure Clerk (Auth + Billing)

1. Create an application in Clerk
2. Enable sign-in methods:
   - Email/password (recommended)
   - Google OAuth (optional)
   - GitHub OAuth (optional)
3. Add keys to `.env.local`
4. Add allowed origins:
   - `http://localhost:3000`
   - your production domain after deploy
5. Create billing plans (Starter / Pro) and configure limits:
   - RSS feed count
   - newsletter history access

---

## 🗄️ MongoDB Atlas + Prisma Setup

1) Create a free MongoDB Atlas cluster (M0)  
2) Create a database user + password  
3) Whitelist IPs (dev: `0.0.0.0/0`)  
4) Paste connection string into `DATABASE_URL`

Initialize Prisma:

```bash
pnpm prisma:generate
pnpm prisma:push

# optional
pnpm prisma:studio
```

- Prisma Studio: http://localhost:5555

---

## 🤖 OpenAI Setup

1) Create an OpenAI account  
2) Add billing + set a monthly budget limit  
3) Create an API key and add it to `.env.local`

Model is customizable (default: **GPT-4o**).  
You can swap to a cheaper model like **gpt-4o-mini**.

---

## ▶️ Run the App

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open: http://localhost:3000

---

## 🧠 How It Works

### Newsletter Generation Flow
1. User selects date range + feeds
2. System fetches RSS articles (cached for 3 hours)
3. Articles are deduplicated by GUID (upsert)
4. AI generates:
   - titles
   - subject lines
   - newsletter body
   - top announcements
5. Output streams live via Vercel AI SDK

---

## ⚡ Smart Caching System (3 hours)

- Feed fetches are cached for 3 hours across users
- Faster for everyone, fewer RSS calls
- More stable at scale

---

## 🧹 Article Deduplication Strategy

- Articles stored once based on unique GUID
- Tracks `sourceFeedIds` for feeds referencing the article

Performance:
- ⚡ Lookup: O(1) via unique index on `guid`
- 💾 Storage savings: ~40–50%
- 📊 Trending detection: articles in multiple feeds = higher importance

---

## 📊 Database Schema Overview

Main models:
- **User** (minimal — Clerk handles auth)
- **UserSettings** (tone, audience, branding, disclaimers)
- **RssFeed** (subscriptions, lastFetched for caching)
- **RssArticle** (deduped by guid, cross-feed references)
- **Newsletter** (titles, subject lines, body, top announcements, history)

Key design decisions:
- Flexible schema with MongoDB
- GUID-based deduplication
- Indexes for common queries (userId + createdAt, feedId + pubDate)
- Cascade deletes for integrity

---

## 🚀 Deploy to Vercel

### Option A: Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
vercel --prod
```

### Option B: GitHub Integration
1. Push repo to GitHub
2. Import project into Vercel
3. Add env vars in Vercel dashboard
4. Deploy

Post-deploy:
- Add Vercel domain to Clerk allowed origins + redirect URLs
- Ensure MongoDB network access allows Vercel (often `0.0.0.0/0` for serverless)

---

## 🐛 Common Issues

### Env vars not loading
- Ensure `.env.local` is in the project root
- Restart dev server after changes
- Watch for typos (case-sensitive)

### Prisma types out of sync
```bash
pnpm prisma:generate
```

### DB connection issues
- Check Atlas cluster running
- Verify IP whitelist
- URL-encode special chars in password

### RSS feed doesn’t refresh
- Feeds are cached for 3 hours by design
- For testing, adjust `lastFetched` or reduce cache window

### OpenAI errors
- Verify billing enabled
- Confirm model access
- Monitor usage in OpenAI dashboard

---

## 👨‍💻 Author

**Robert Johnson**  
Full-Stack Software Engineer  
https://robertjohnsonportfolio.com
