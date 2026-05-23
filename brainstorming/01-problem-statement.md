# Problem Statement: CodePen Onboarding UX Breakdown

## Core Problem

CodePen 2.0 replaced a dead-simple "three panels, zero setup" editor with a full IDE paradigm — and failed to bridge the gap for both new and existing users.

The old CodePen was magical because it *hid* web development complexity. You opened it, typed CSS in the CSS box, and it worked. The new editor exposes real web development (full HTML documents, file systems, compilation pipelines) without enough scaffolding to make that transition intuitive.

## Five Specific Onboarding Failures

### 1. The "Blocks" Concept Is Opaque
The #1 source of confusion. Users don't understand what Blocks are, when they're auto-added, or why they exist. File extensions silently trigger processors — there's no visible cause-and-effect. A user renames `style.css` to `style.scss` and suddenly a Sass Block appears, but *why* is never explained in the UI.

### 2. Simple Workflows Are Now Multi-Step
Writing CSS that applies to the `<body>` used to be: open pen, type CSS. Now you need to understand the file system, ensure your file uses the `.pen.html` convention (or manually add `<link>` tags), and know that the "Classic Block" exists. The path from "I want to try something" to "it's working" went from 1 step to 4+.

### 3. Feature Relocation With No Spatial Memory
Settings, preprocessors, external resources, and views all moved — and moved to *different kinds of places* (sidebar panels, Blocks, direct HTML, Omnibar). The Omnibar itself is an admission that nothing is where you'd expect it to be.

### 4. The "Minimal UI" Workaround Proves the Default Is Wrong
CodePen recommends enabling Minimal UI + setting a Classic Template as default — which recreates the old experience. This means they know the new default is too complex for the most common use case, but they haven't solved the onboarding problem; they've just offered a band-aid.

### 5. New Users Face the Worst of Both Worlds
They don't have the old workflow muscle memory (so they can't use Minimal UI as a fallback), but they also don't understand "real" web development concepts (file linking, build pipelines) that the new editor assumes. There's no guided path from "I just want to try CSS" to "I understand the full editor."

## Root Tension

CodePen 2.0 traded **simplicity for power** — and that's a valid tradeoff. But onboarding should meet users where they *are*, not where the system wants them to be. Right now, the editor assumes either (a) you already know the old CodePen and can translate, or (b) you understand build systems. Most users fall into neither camp.

## Relocated Features Map (Old → New)

| Old Feature | New Location |
|---|---|
| Format on Save | Prettier Block |
| Full Page View | Close all panels → "Preview Only" from View Menu |
| Collab Mode | Privacy & Collaboration Panel |
| Professor Mode | Discontinued |
| CSS Preprocessors | Blocks (triggered by file extension) |
| CSS Base (Normalize/Reset) | Manual `<link>` tags |
| Autoprefixer | PostCSS Block |
| Babel/JSX | Babel Block (auto-added for `.jsx`) |
| External Resources | `<link>`/`<script>` directly in `index.html` |
| Pen Settings | Fragmented across Sidebar, Blocks, and direct HTML |