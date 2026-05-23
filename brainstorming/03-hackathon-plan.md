# Hackathon Submission Plan

## Format: GitHub Repo as Presentation

Since submissions go through GitHub, the **README.md IS the pitch deck**. Judges will clone/browse the repo and scroll through the README. Everything needs to be self-contained and visual.

## Repo Structure

```
onboarding-ux-design-improvement-/
├── README.md                  ← THE PRESENTATION (before/after story)
├── brainstorming/
│   ├── 01-problem-statement.md
│   └── 02-solution-ideas.md
└── mockups/
    ├── before-classic-editor.html    ← Working HTML mockup of "before" (old CodePen)
    ├── after-quick-start.html       ← Working HTML mockup of "after" (our proposed fix)
    └── after-full-editor.html        ← Working HTML mockup of progressive disclosure full editor
```

## README.md Presentation Flow

The README should read like a 3-minute pitch. Structure:

### 1. HOOK — The Problem in One Sentence
"CodePen 2.0 replaced a 1-step editor with a 4-step IDE — and forgot to bring new users along."

One screenshot or mockup comparison: old 3-pane vs new full IDE side by side.

### 2. BEFORE — What Went Wrong
- 3-4 bullet points with visual evidence
- Show the actual user confusion (quote from Cassidy Williams video, CodePen's own "Who moved my cheese?" FAQ)
- The "Minimal UI" band-aid — if you need a workaround for your own default, the default is wrong

### 3. AFTER — Our Proposed Fix (3 Key Ideas)
Don't present all 9 ideas. Pick the 3 that are most visual and most impactful:

**a) Quick Start Mode** — Mockup of the landing experience: 3 panes, clean, no sidebar, no Blocks panel. Just HTML/CSS/JS and go. One small "Switch to full editor" link.

**b) Progressive Disclosure** — Show the same editor at 3 tiers: Discover → Explore → Build. The UI literally grows as the user needs it. This is the "aha" moment for judges.

**c) Inline Teaching Tooltips** — Show a mockup where a Sass Block auto-appears and a brief tooltip explains what just happened. Learning at the point of action, not in a separate doc.

### 4. INTERACTIVE MOCKUPS — Links to HTML files
Each mockup is a standalone HTML file that judges can open in a browser. This makes it tangible, not just screenshots.

### 5. IMPACT — Why This Matters
- Quick Start restores the 1-step path → immediate usability gain
- Progressive disclosure means the editor grows WITH the user → no re-learning
- Inline tooltips teach at point of need → no onboarding tour to skip

### 6. CLOSING — One-line summary
"CodePen 2.0 traded simplicity for power. We're proposing they give both."

## What to Build in the 1 Hour

Given the time constraint, prioritize:

| Priority | What | Time | Why |
|---|---|---|---|
| 1 | README.md presentation | 25 min | This IS the submission — it has to be compelling |
| 2 | before-classic-editor.html mockup | 10 min | Simple 3-pane layout showing the "before" state |
| 3 | after-quick-start.html mockup | 15 min | The hero mockup — shows Quick Start mode in action |
| 4 | after-full-editor.html mockup | 10 min | If time permits, show progressive disclosure tiers |

Total: ~60 minutes

## Mockup Approach (Plain HTML/CSS)

Keep it simple. The mockups are NOT functional editors — they're **visual proofs of concept**. Think of them as clickable wireframes:

- **before-classic-editor.html**: A recreation of the old CodePen 3-pane layout. Three resizable-ish panels (HTML, CSS, JS) with a preview pane. Minimal chrome. This sets the baseline.
- **after-quick-start.html**: Same 3-pane layout but with CodePen 2.0 branding, showing what Quick Start mode would look like. Key differences: "Classic Mode" chip visible, "Switch to full editor" link, sidebar collapsed, no Blocks panel visible. Include one inline tooltip (e.g., on the "Classic Mode" chip) to show the teaching pattern.
- **after-full-editor.html**: The full IDE view with progressive disclosure — sidebar open, Blocks panel visible, file tree. Show the "graduated" version. Include the Omnibar with suggested actions.

## Tips for a Strong Hackathon Presentation

1. **Lead with emotion** — Start with the user frustration (Cassidy's video quote, the "Who moved my cheese?" FAQ). Make judges feel the pain.
2. **Show, don't tell** — The HTML mockups do more than any amount of text. Make them look good enough to be believable.
3. **Three ideas, not nine** — The brainstorming doc has 9 ideas. The README presents 3. Judges can dig into brainstorming/ if they want more.
4. **Name the approach** — "Progressive Disclosure" is a real UX pattern with a name. That gives it credibility and shows research depth.
5. **Close with a memorable line** — "Give them both" is short and sticks.