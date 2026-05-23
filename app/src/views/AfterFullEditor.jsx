import { useState } from 'react'
import { ArrowLeft, Check, Search, Plus, ChevronRight } from 'lucide-react'

const HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="style.scss">
</head>
<body>
  <div class="card">
    <h1>Hello, World!</h1>
    <p>Welcome to <span class="highlight">CodePen</span>.</p>
  </div>
  <script src="script.jsx"></script>
</body>
</html>`

const SCSS_CODE = `$primary: #47cf73;
$bg: #f5f5f5;

body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0;
  background: $bg;
}

.card {
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.highlight {
  color: $primary;
  font-weight: bold;
}`

const JSX_CODE = `import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h1>Hello, World!</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`

export default function AfterFullEditor({ onBack }) {
  const [showIntro, setShowIntro] = useState(true)
  const [showOmnibar, setShowOmnibar] = useState(false)

  if (showIntro) {
    return (
      <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
        <div className="bg-bg-editor border-2 border-accent-green rounded-2xl p-12 max-w-[700px] text-center">
          <h2 className="text-accent-green text-2xl font-bold mb-4">Progressive Disclosure — The Editor Grows With You</h2>
          <p className="text-text-primary text-base leading-relaxed mb-3">
            Instead of showing every feature at once, the editor expands through natural progression.
          </p>
          <p className="text-text-primary text-base leading-relaxed mb-6">
            Each tier unlocks when the user takes an action that requires it.
          </p>
          <div className="flex gap-4 mb-8 text-left">
            <div className="flex-1 bg-accent-green/8 border border-accent-green/30 rounded-lg p-4">
              <h4 className="text-accent-green font-semibold text-sm mb-1">Discover</h4>
              <p className="text-text-muted text-xs mb-2">Where everyone starts</p>
              <ul className="text-text-muted text-xs space-y-0.5">
                <li>✓ 3 panes, one file each</li>
                <li>✓ Auto-linked HTML/CSS/JS</li>
                <li>✓ No sidebar, no Blocks</li>
              </ul>
            </div>
            <div className="flex-1 bg-accent-blue/8 border border-accent-blue/30 rounded-lg p-4">
              <h4 className="text-accent-blue font-semibold text-sm mb-1">Explore</h4>
              <p className="text-text-muted text-xs mb-2">When you need more</p>
              <ul className="text-text-muted text-xs space-y-0.5">
                <li>+ File tree visible</li>
                <li>+ Can add new files</li>
                <li>Triggered by: adding a file</li>
              </ul>
            </div>
            <div className="flex-1 bg-accent-purple/8 border border-accent-purple/30 rounded-lg p-4">
              <h4 className="text-accent-purple font-semibold text-sm mb-1">Build</h4>
              <p className="text-text-muted text-xs mb-2">Full power, on demand</p>
              <ul className="text-text-muted text-xs space-y-0.5">
                <li>+ Blocks panel</li>
                <li>+ Processor config</li>
                <li>Triggered by: using SCSS/JSX</li>
              </ul>
            </div>
          </div>
          <p className="text-text-muted text-sm italic mb-4">
            This mockup shows the "Build" tier — what the editor looks like once a user has progressed.
          </p>
          <button
            onClick={() => setShowIntro(false)}
            className="bg-accent-green hover:bg-accent-green/80 text-black px-8 py-3 rounded-lg text-base font-bold transition-colors cursor-pointer"
          >
            Show me the editor
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="h-screen flex flex-col bg-bg-dark">
      {/* Back button */}
      <button
        onClick={onBack}
        className="fixed top-3 left-3 z-50 flex items-center gap-2 bg-bg-editor/90 hover:bg-bg-surface border border-border px-3 py-1.5 rounded-lg text-text-muted text-sm transition-colors cursor-pointer backdrop-blur-sm"
      >
        <ArrowLeft size={14} /> Back to Overview
      </button>

      {/* Top bar */}
      <div className="flex items-center justify-between bg-bg-header px-4 h-[50px] border-b border-border">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 font-bold text-white text-lg">
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6" className="w-9 h-9">
              <polygon points="50,5 95,30 95,70 50,95 5,70 5,30" />
              <polygon points="50,25 75,40 75,60 50,75 25,60 25,40" />
              <line x1="50" y1="5" x2="50" y2="25" />
              <line x1="95" y1="30" x2="75" y2="40" />
              <line x1="95" y1="70" x2="75" y2="60" />
              <line x1="50" y1="95" x2="50" y2="75" />
              <line x1="5" y1="70" x2="25" y2="60" />
              <line x1="5" y1="30" x2="25" y2="40" />
            </svg>
            CodePen
          </div>
          <input
            className="bg-transparent border-none text-text-primary text-[15px] font-medium px-2.5 py-1.5 rounded focus:outline-none focus:ring-1 focus:ring-accent-blue focus:bg-bg-editor"
            defaultValue="My Component"
          />
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-bg-editor text-text-primary border border-border px-4 py-2 rounded-md text-sm font-semibold hover:bg-border transition-colors cursor-pointer">
            Fork
          </button>
          <button className="bg-accent-green text-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-accent-green/80 transition-colors cursor-pointer">
            Save
          </button>
          <div className="w-8 h-8 rounded-full bg-text-muted" />
        </div>
      </div>

      {/* Main layout: sidebar + editor */}
      <div className="flex flex-1 min-h-0">
        {/* Sidebar */}
        <div className="w-60 bg-bg-sidebar border-r border-border flex flex-col overflow-y-auto">
          {/* Tier indicator */}
          <div className="m-2 p-3 bg-bg-surface rounded-lg border border-border">
            <div className="text-accent-green text-[11px] font-bold uppercase tracking-wide mb-1.5">Build Tier</div>
            <div className="flex gap-1 mb-1.5">
              <div className="w-2 h-2 rounded-full bg-accent-green" title="Discover" />
              <div className="w-2 h-2 rounded-full bg-accent-green" title="Explore" />
              <div className="w-2 h-2 rounded-full bg-accent-yellow shadow-[0_0_0_2px_rgba(228,198,96,0.3)]" title="Build" />
              <div className="w-2 h-2 rounded-full bg-border" title="Advanced" />
            </div>
            <div className="text-text-muted text-[11px] leading-relaxed">
              Full editor with Blocks, file tree, and processor configuration.
            </div>
            <a href="#" className="text-accent-blue text-[11px] mt-1 block hover:underline">What triggers the next tier?</a>
          </div>

          {/* Files */}
          <div className="border-b border-border">
            <div className="flex items-center justify-between px-4 py-3 text-[11px] font-bold uppercase tracking-wide text-text-muted">
              Files
              <button className="text-text-muted hover:text-text-primary cursor-pointer"><Plus size={14} /></button>
            </div>
            <div className="pb-1">
              <FileItem name="index.html" icon="html" active />
              <FileItem name="style.scss" icon="scss" badge="Sass" badgeColor="sass" />
              <FileItem name="script.jsx" icon="js" badge="Babel" badgeColor="babel" />
            </div>
          </div>

          {/* Blocks */}
          <div className="border-b border-border">
            <div className="flex items-center justify-between px-4 py-3 text-[11px] font-bold uppercase tracking-wide text-text-muted">
              Blocks
              <button className="text-text-muted hover:text-text-primary cursor-pointer"><Plus size={14} /></button>
            </div>
            <div>
              <BlockItem letter="C" name="Classic Block" color="green" />
              <BlockItem letter="B" name="Babel" color="blue" />
              <BlockItem letter="P" name="PostCSS" color="purple" />
            </div>
          </div>

          {/* Omnibar hint */}
          <div className="mt-auto p-4 border-t border-border">
            <button
              onClick={() => setShowOmnibar(true)}
              className="flex items-center gap-2 w-full text-text-muted text-xs hover:text-text-primary cursor-pointer"
            >
              <Search size={14} />
              Search features & settings...
              <kbd className="ml-auto bg-bg-dark px-1.5 py-0.5 rounded border border-border text-[10px]">Ctrl+K</kbd>
            </button>
          </div>
        </div>

        {/* Editor area */}
        <div className="flex-1 flex flex-col min-h-0">
          <div className="flex flex-1 min-h-0 border-b-3 border-bg-header">
            <EditorPanel label="index.html" color="text-accent-yellow" code={HTML_CODE} />
            <EditorPanel label="style.scss" color="text-accent-blue" code={SCSS_CODE} />
            <EditorPanel label="script.jsx" color="text-accent-green" code={JSX_CODE} />
          </div>

          {/* Preview */}
          <div className="flex-1 bg-white relative">
            <span className="absolute top-2 right-3 bg-black/5 text-gray-500 px-2.5 py-1 rounded text-[11px] font-semibold uppercase tracking-wide z-10">
              Preview
            </span>
            <div className="p-10">
              <h1 className="text-[28px] text-gray-800 mb-3 font-sans">Hello, World!</h1>
              <p className="text-base text-gray-500 leading-relaxed font-sans">
                Welcome to <span className="text-accent-green font-semibold">CodePen</span>.
              </p>
            </div>

            {/* Annotation callouts */}
            <div className="absolute top-3 left-[260px] z-20">
              <div className="bg-bg-editor border border-accent-green rounded-lg p-3 max-w-[280px] shadow-2xl">
                <h5 className="text-accent-green text-[13px] font-bold mb-1.5 flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
                  Block auto-added
                </h5>
                <p className="text-text-muted text-xs leading-relaxed">
                  Sass Block was added when you renamed <code className="text-text-primary">style.css</code> → <code className="text-text-primary">style.scss</code>. It compiles your SCSS into CSS automatically.
                </p>
              </div>
            </div>

            <div className="absolute bottom-3 right-4 z-20">
              <div className="bg-bg-editor border border-accent-blue rounded-lg p-3 max-w-[280px] shadow-2xl">
                <h5 className="text-accent-blue text-[13px] font-bold mb-1.5 flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
                  File tree unlocked
                </h5>
                <p className="text-text-muted text-xs leading-relaxed">
                  You added a second file, so the file tree appeared. You can always find it in the Sidebar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex items-center justify-between bg-bg-header px-4 h-9 border-t border-border text-xs text-text-muted">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded hover:bg-bg-editor cursor-pointer">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" /></svg>
          Console
        </div>
        <span className="text-[11px]">
          Tier: <strong className="text-accent-yellow">Build</strong> · Press <kbd className="bg-bg-editor px-1.5 py-0.5 rounded border border-border text-text-primary">Ctrl+K</kbd> for Omnibar
        </span>
      </div>

      {/* Omnibar */}
      {showOmnibar && (
        <div className="fixed inset-0 bg-black/60 z-[200] flex items-start justify-center pt-20" onClick={() => setShowOmnibar(false)}>
          <div className="bg-bg-editor border border-accent-blue rounded-xl w-[560px] shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="flex items-center gap-3 px-5 py-4 border-b border-border">
              <Search size={20} className="text-text-muted shrink-0" />
              <input
                type="text"
                placeholder="Search features, settings, blocks..."
                className="flex-1 bg-transparent border-none text-text-primary text-base outline-none"
                autoFocus
              />
              <kbd className="bg-bg-dark px-2 py-1 rounded border border-border text-xs text-text-muted">Esc</kbd>
            </div>
            <div className="py-2 max-h-[300px] overflow-y-auto">
              <div className="px-5 py-2 text-[10px] font-bold uppercase tracking-wide text-text-muted">Suggested</div>
              <OmnibarItem icon="add" color="blue" name="Add Sass Block" desc="Compile .scss and .sass files" />
              <OmnibarItem icon="edit" color="green" name="Format on Save" desc="Auto-format code when saving" moved="Moved from Settings" />
              <OmnibarItem icon="preview" color="purple" name="Preview Only" desc="Hide all editor panels" moved="Moved from View menu" />
              <div className="px-5 py-2 text-[10px] font-bold uppercase tracking-wide text-text-muted">Where did ___ go?</div>
              <OmnibarItem icon="help" color="orange" name="External Resources" desc="Now added directly as <link> and <script> tags in HTML" moved="Moved from Settings" />
              <OmnibarItem icon="help" color="orange" name="CSS Preprocessor" desc="Now handled by Blocks — rename your file extension (e.g., .scss)" moved="Moved from Settings" />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function FileItem({ name, icon, active, badge, badgeColor }) {
  const iconColors = {
    html: 'text-accent-orange',
    scss: 'text-accent-blue',
    js: 'text-accent-yellow',
  }

  return (
    <div className={`flex items-center gap-2 px-4 py-1.5 text-[13px] cursor-pointer transition-colors ${active ? 'bg-bg-surface text-text-primary' : 'text-text-muted hover:bg-bg-surface hover:text-text-primary'}`}>
      <span className={`text-xs ${iconColors[icon]}`}>●</span>
      {name}
      {badge && (
        <span className={`ml-auto text-[10px] px-1.5 py-0.5 rounded font-semibold ${
          badgeColor === 'sass' ? 'bg-[#ce57ab]/15 text-[#ce57ab]' :
          badgeColor === 'babel' ? 'bg-accent-blue/15 text-accent-blue' : ''
        }`}>
          {badge}
        </span>
      )}
    </div>
  )
}

function BlockItem({ letter, name, color }) {
  const colors = {
    green: 'bg-accent-green/20 text-accent-green',
    blue: 'bg-accent-blue/20 text-accent-blue',
    purple: 'bg-accent-purple/20 text-accent-purple',
  }

  return (
    <div className="flex items-center gap-2 px-4 py-2 text-[13px] text-text-primary cursor-pointer hover:bg-bg-surface transition-colors border-b border-border">
      <span className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold ${colors[color]}`}>
        {letter}
      </span>
      {name}
      <span className="ml-auto text-[10px] text-accent-green">✓ Active</span>
    </div>
  )
}

function EditorPanel({ label, color, code }) {
  return (
    <div className="flex-1 flex flex-col border-r-3 border-bg-header last:border-r-0">
      <div className={`flex items-center gap-2 px-4 py-2.5 bg-bg-header text-[13px] font-semibold ${color}`}>
        {label}
      </div>
      <div className="flex-1 bg-bg-editor p-4 font-mono text-sm leading-relaxed text-text-primary overflow-auto whitespace-pre">
        {code}
      </div>
    </div>
  )
}

function OmnibarItem({ name, desc, moved, color }) {
  return (
    <div className="flex items-center gap-3 px-5 py-2.5 cursor-pointer hover:bg-bg-surface transition-colors">
      <div className={`w-7 h-7 rounded flex items-center justify-center shrink-0 ${
        color === 'blue' ? 'bg-accent-blue/15 text-accent-blue' :
        color === 'green' ? 'bg-accent-green/15 text-accent-green' :
        color === 'purple' ? 'bg-accent-purple/15 text-accent-purple' :
        'bg-accent-orange/15 text-accent-orange'
      }`}>
        {color === 'blue' ? '⚙' : color === 'green' ? '✎' : color === 'purple' ? '◉' : '?'}
      </div>
      <div className="flex-1">
        <div className="text-[14px] text-text-primary">{name}</div>
        <div className="text-[12px] text-text-muted">{desc}</div>
      </div>
      {moved && (
        <span className="text-[10px] text-accent-orange bg-accent-orange/10 px-1.5 py-0.5 rounded">
          {moved}
        </span>
      )}
    </div>
  )
}