# Fixing CodePen's Onboarding: Progressive Disclosure for a Power User Editor

> **CodePen 2.0 replaced a 1-step editor with a 4-step IDE — and forgot to bring new users along.**

---

## The Problem

CodePen's classic editor was magical in its simplicity: open the site, type CSS, see results. Three panes, zero setup, instant gratification. That's why millions of people used it to learn web development.

CodePen 2.0 traded that simplicity for power — a full file system, compilation pipelines called "Blocks", an Omnibar, and a persistent Sidebar. Valid tradeoff. But the onboarding didn't come along for the ride.

### What went wrong

| # | Failure | Example |
|---|---------|---------|
| 1 | **Blocks are opaque** | Renaming `style.css` → `style.scss` silently adds a Sass Block. No explanation. No tooltip. The user didn't ask for this. |
| 2 | **Simple workflows are now multi-step** | Writing CSS that applies to `<body>` used to be: open pen, type CSS. Now: understand the file system, use `.pen.html` naming, know the Classic Block exists. |
| 3 | **Features relocated everywhere** | Settings → Sidebar panels. Preprocessors → Blocks. External resources → manual `<link>` tags. The Omnibar exists *because* nothing is where you'd expect it. |
| 4 | **Minimal UI is a band-aid** | CodePen recommends enabling Minimal UI + Classic Template as default — admitting the new default is too complex for the most common use case. |
| 5 | **New users get the worst of both worlds** | No old-workflow muscle memory, no understanding of build systems. No guided path from "I just want to try CSS" to "I understand the full editor." |

### Real user evidence

> *"I don't know what blocks are… Blocks is still something that I need to process a bit better."*
> — Cassidy Williams, [Trying the new CodePen 2.0](https://www.youtube.com/watch?v=0R4l8nlmCAQ)

> *"Turns out this is real web development instead of mystical web development where CodePen kind of hid away all the HTML head and body tags."*
> — Cassidy Williams, on discovering she needed `.pen.html` naming for basic CSS to work

CodePen published an entire FAQ titled [🧀 Why Did Everything Change?](https://blog.codepen.io/docs/what-changed/) — the "Who moved my cheese?" metaphor acknowledges the disruption but doesn't solve the onboarding gap.

---

## Our Prompting Methodology

This project was built using a structured prompt-driven design process. Rather than jumping straight to mockups, we used iterative prompting to:

1. **Decompose the problem first.** We started by asking: what are the *specific* onboarding failures, not just "the new editor is confusing"? This produced five distinct failure modes (see [01-problem-statement.md](brainstorming/01-problem-statement.md)) — each one grounded in a real user behavior, not a vague feeling.

2. **Generate broadly, then prioritize ruthlessly.** Our first prompt produced nine solution ideas across four tiers (see [02-solution-ideas.md](brainstorming/02-solution-ideas.md)). Instead of trying to implement all nine, we ranked them by impact-vs-effort and selected the three that create the biggest UX improvement with the least implementation risk:

   - **Quick Start Mode** — restores the 1-step path
   - **Progressive Disclosure** — the editor grows with you
   - **Inline Teaching Tooltips** — learn at the point of action

3. **Build to communicate, not just to function.** Each mockup exists to make a specific argument visible. The "before" mockup shows *what we're restoring the spirit of*. The "after" mockups show *what progressive disclosure actually feels like*. The interactive React app lets judges click through the experience rather than imagining it.

4. **Start from the user's first question.** We redesigned the landing page to answer "what can I achieve?" before explaining "how does it work?" — because that's what a new CodePen user actually wonders. The project gallery showcases real creations first; the onboarding proposal is secondary.

This methodology ensures every design decision traces back to a documented problem, every mockup argues a specific point, and the presentation order matches how users actually think — from "what's possible?" to "how do I use it?"

---

## The Fix: Progressive Disclosure

The solution isn't to remove power features. It's to **meet users where they are and reveal complexity as they need it.**

### 1. Quick Start Mode — Restore the 1-Step Path

**Before:** New users land in the full IDE with Files, Blocks, Sidebar, and Compiler. They need to discover `.pen.html`, Classic Blocks, and Minimal UI just to write CSS.

**After:** New users land in a clean 3-pane editor. Under the hood, it uses the Classic Block — but the user never sees that plumbing. A "Switch to full editor" link is always available.

| Before (Current 2.0) | After (Quick Start) |
|---|---|
| Full IDE with all panels visible | Three panes, zero setup |
| Must discover `.pen.html` convention | Classic Block auto-configured |
| Must find Minimal UI setting | Clean by default |
| 4+ steps to write working CSS | 1 step: open and type |

### 2. Progressive Disclosure — The Editor Grows With You

**Before:** Every feature visible from frame one. Sidebar, Blocks, file tree, Omnibar — all competing for attention.

**After:** The UI expands through natural progression. Each tier unlocks when the user takes an action that requires it.

| Tier | What You See | What Triggers the Next Tier |
|---|---|---|
| **Discover** | 3 panes, one file each, auto-linked | Adding a second file, or clicking "Switch to full editor" |
| **Explore** | + File tree visible, can add files | Pasting SCSS/JSX, or clicking "Add processor" |
| **Build** | + Blocks panel, processor config | Needing custom build config |
| **Advanced** | Full editor, Omnibar, everything | Always available via Ctrl+K |

The key: **each tier auto-promotes when the user's actions require it**, not when they find a settings menu. Pasting SCSS? A tooltip offers "Add Sass" and explains what happened.

### 3. Inline Teaching Tooltips — Learn by Doing

**Before:** Features silently appear or relocate. Users must read the FAQ or use the Omnibar to figure out what changed.

**After:** Contextual tooltips appear at the exact moment a user encounters a new concept — triggered by their own actions.

| Trigger | Tooltip |
|---|---|
| Sass Block auto-added | "Sass Block added — this compiles your `.scss` into CSS. [Learn more] [Dismiss]" |
| First Sidebar open | "Your files and settings live here now. [Take the tour] [Got it]" |
| First Omnibar use | "Search for any feature or setting — try typing 'format'. [Dismiss]" |

---

## Interactive Demo

The app in this repo is an interactive React demo you can click through. It has two parts:

### Part 1: Project Gallery (Landing Page)

The first thing a new user should see is **what they can create** — not an explanation of how the editor works. The gallery showcases real CodePen projects organized by category, answering the new user's first question: "what can I achieve here?"

### Part 2: Onboarding Proposal (Before / After Mockups)

Three interactive mockups showing the proposed fix:

| View | What It Shows |
|---|---|
| **Before: Classic Editor** | The old 3-pane CodePen — simple, immediate, zero friction |
| **After: Quick Start** | Our proposed Quick Start mode — same simplicity, built on 2.0's architecture |
| **After: Full Editor** | Progressive disclosure in action — features appear when needed, not from frame one |

### Running the app

```bash
cd app
npm install
npm run dev
```

Then open the URL shown in your terminal. The landing page is the project gallery; click "Onboarding Proposal" in the header to see the before/after mockups.

---

## Why This Works

| Principle | How It Applies |
|---|---|
| **Don't break the quick path** | Quick Start mode makes "open and type" 1 step again |
| **Reveal complexity progressively** | The editor grows with the user — no re-learning required |
| **Teach at the point of action** | Inline tooltips explain *what just happened* when it happens |
| **Power features stay powerful** | Full editor is one click away. Nothing is removed. |
| **Clean by default, not by workaround** | Minimal UI shouldn't be a setting. Simplicity should be the default. |

---

## Closing Thought

CodePen 2.0 traded simplicity for power. We're proposing they give users **both** — starting simple and graduating to powerful, instead of starting powerful and hoping users figure it out.

---

### Further Reading

- [CodePen: Why Did Everything Change?](https://blog.codepen.io/docs/what-changed/)
- [Cassidy Williams: Trying the new CodePen 2.0](https://www.youtube.com/watch?v=0R4l8nlmCAQ)
- [JWS News: Trying to figure out the CodePen 2.0 editor](https://jws.news/2026/trying-to-figure-out-the-codepen-2-0-editor/)
- [CodePen Blog #425: Debug Logs](https://blog.codepen.io/2026/05/12/425-debug-logs/)

### Detailed Brainstorming

- [Problem Statement — five specific onboarding failures](brainstorming/01-problem-statement.md)
- [Solution Ideas — 9 ideas across 4 tiers with priority ranking](brainstorming/02-solution-ideas.md)
- [Hackathon Plan — submission strategy and time allocation](brainstorming/03-hackathon-plan.md)