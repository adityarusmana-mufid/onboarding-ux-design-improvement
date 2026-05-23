import { useState } from 'react'
import { ArrowLeft, Check, ExternalLink, Link, X } from 'lucide-react'

const HTML_CODE = `<div class="card">
  <h1>Hello, World!</h1>
  <p>Welcome to <span class="highlight">CodePen</span>.</p>
</div>`

const CSS_CODE = `body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0;
  background: #f5f5f5;
}

.card {
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.highlight {
  color: #47cf73;
  font-weight: bold;
}`

const JS_CODE = `// Nothing here yet
// Just start typing...`

export default function AfterQuickStart({ onBack }) {
  const [showChipTooltip, setShowChipTooltip] = useState(false)
  const [showIntro, setShowIntro] = useState(true)
  const [showInlineTooltip, setShowInlineTooltip] = useState(true)

  if (showIntro) {
    return (
      <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
        <div className="bg-bg-editor border-2 border-accent-green rounded-2xl p-12 max-w-[640px] text-center">
          <h2 className="text-accent-green text-2xl font-bold mb-4">Quick Start Mode — Our Proposed Fix</h2>
          <p className="text-text-primary text-base leading-relaxed mb-3">
            CodePen 2.0's full IDE is powerful — but it shouldn't be the first thing new users see.
          </p>
          <p className="text-text-primary text-base leading-relaxed mb-6">
            Quick Start mode restores the 1-step path while keeping the full editor one click away.
          </p>
          <div className="flex gap-6 mb-8 text-left">
            <div className="flex-1 bg-accent-red/10 border border-accent-red/30 rounded-lg p-4">
              <h3 className="text-accent-red font-semibold text-sm mb-2">Current 2.0 Default</h3>
              <ul className="text-text-muted text-xs space-y-1">
                <li>✗ Full IDE with all panels visible</li>
                <li>✗ Must discover .pen.html convention</li>
                <li>✗ Must find Minimal UI setting</li>
                <li>✗ 4+ steps to write working CSS</li>
              </ul>
            </div>
            <div className="flex-1 bg-accent-green/10 border border-accent-green/30 rounded-lg p-4">
              <h3 className="text-accent-green font-semibold text-sm mb-2">Quick Start Mode</h3>
              <ul className="text-text-muted text-xs space-y-1">
                <li>✓ Three panes, zero setup</li>
                <li>✓ Classic Block auto-configured</li>
                <li>✓ Clean by default — no workaround</li>
                <li>✓ 1 step: open and type</li>
              </ul>
            </div>
          </div>
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
            defaultValue="Untitled Pen"
          />
          {/* Classic Mode Chip — KEY NEW ELEMENT */}
          <div className="relative">
            <button
              onClick={() => setShowChipTooltip(!showChipTooltip)}
              className="flex items-center gap-1.5 bg-accent-green/12 border border-accent-green/30 text-accent-green px-3 py-1 rounded-full text-xs font-semibold hover:bg-accent-green/20 transition-colors cursor-pointer"
            >
              <Check size={12} />
              Classic Mode
            </button>
            {showChipTooltip && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-bg-editor border border-accent-green rounded-lg p-4 w-80 z-50 shadow-2xl">
                <h4 className="text-accent-green text-sm font-bold mb-2">Classic Mode is active</h4>
                <p className="text-text-muted text-[13px] leading-relaxed mb-2">
                  Your CSS and JS files are auto-linked to your HTML. No need to add <code className="text-text-primary">&lt;link&gt;</code> or <code className="text-text-primary">&lt;script&gt;</code> tags manually — CodePen handles the scaffolding for you.
                </p>
                <p className="text-text-primary text-xs mb-3">
                  Under the hood: your files use the <code>.pen.html</code> convention and a Classic Block compiles and links everything.
                </p>
                <div className="flex gap-3">
                  <a href="#" className="text-accent-blue text-xs font-semibold hover:underline">Learn about Blocks</a>
                  <a href="#" className="text-accent-blue text-xs font-semibold hover:underline">Switch to full editor</a>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-3">
          {/* Switch to full editor — KEY NEW ELEMENT */}
          <button className="flex items-center gap-1.5 text-text-muted text-[13px] px-3 py-1.5 rounded hover:text-text-primary hover:bg-bg-editor transition-colors cursor-pointer">
            <ExternalLink size={14} />
            Switch to full editor
          </button>
          <button className="bg-bg-editor text-text-primary border border-border px-4 py-2 rounded-md text-sm font-semibold hover:bg-border transition-colors cursor-pointer">
            Fork
          </button>
          <button className="bg-accent-green text-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-accent-green/80 transition-colors cursor-pointer">
            Save
          </button>
          <div className="w-8 h-8 rounded-full bg-text-muted" />
        </div>
      </div>

      {/* Editors */}
      <div className="flex flex-1 min-h-0 border-b-3 border-bg-header">
        <EditorTab label="HTML" color="text-accent-yellow" code={HTML_CODE} autoLinked />
        <EditorTab label="CSS" color="text-accent-blue" code={CSS_CODE} autoLinked />
        <EditorTab label="JS" color="text-accent-green" code={JS_CODE} autoLinked />
      </div>

      {/* Preview */}
      <div className="flex-1 bg-white relative">
        <span className="absolute top-2 right-3 bg-black/5 text-gray-500 px-2.5 py-1 rounded text-[11px] font-semibold uppercase tracking-wide">
          Preview
        </span>
        <div className="p-10">
          <h1 className="text-[28px] text-gray-800 mb-3 font-sans">Hello, World!</h1>
          <p className="text-base text-gray-500 leading-relaxed font-sans">
            Welcome to <span className="text-accent-green font-semibold">CodePen</span>.
          </p>
        </div>

        {/* Inline tooltip */}
        {showInlineTooltip && (
          <div className="absolute bottom-3 left-4 bg-bg-editor border border-accent-green rounded-lg p-3 max-w-[340px] shadow-2xl z-40 animate-fade-in">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-4 rounded-full bg-accent-green/20 flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#47cf73" strokeWidth="3"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
              </div>
              <span className="text-accent-green text-[13px] font-bold">Inline Teaching Tooltip</span>
            </div>
            <p className="text-text-muted text-xs leading-relaxed mb-2">
              This tooltip appears at the point of action — e.g., when a Block auto-adds, when the Sidebar opens for the first time, or when a user adds a <code className="text-text-primary">&lt;link&gt;</code> tag. It teaches in context, not in a separate tour.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-accent-blue text-xs font-semibold hover:underline">Learn more</a>
              <button onClick={() => setShowInlineTooltip(false)} className="text-text-muted text-xs hover:text-text-primary cursor-pointer">Dismiss</button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom bar */}
      <div className="flex items-center justify-between bg-bg-header px-4 h-9 border-t border-border text-xs text-text-muted">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded hover:bg-bg-editor cursor-pointer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" /></svg>
            Console
          </div>
          <span className="text-text-muted text-[11px]">
            Press <kbd className="bg-bg-editor px-1.5 py-0.5 rounded border border-border text-text-primary">Ctrl+K</kbd> for Omnibar
          </span>
        </div>
        <div className="flex gap-1.5">
          <button className="px-2 py-1 rounded bg-bg-editor text-text-primary border border-text-muted/50 text-[11px] cursor-pointer hover:bg-border">Left</button>
          <button className="px-2 py-1 rounded bg-transparent text-text-muted border border-border text-[11px] cursor-pointer hover:bg-bg-editor">Center</button>
          <button className="px-2 py-1 rounded bg-transparent text-text-muted border border-border text-[11px] cursor-pointer hover:bg-bg-editor">Right</button>
        </div>
      </div>
    </div>
  )
}

function EditorTab({ label, color, code, autoLinked }) {
  return (
    <div className="flex-1 flex flex-col border-r-3 border-bg-header last:border-r-0">
      <div className={`flex items-center gap-2 px-4 py-2.5 bg-bg-header text-[13px] font-semibold ${color}`}>
        {label}
        {autoLinked && (
          <span className="flex items-center gap-1 bg-accent-green/8 text-text-muted text-[11px] px-2 py-0.5 rounded border border-dashed border-border ml-1">
            <Link size={10} className="opacity-50" />
            auto-linked
          </span>
        )}
      </div>
      <div className="flex-1 bg-bg-editor p-4 font-mono text-sm leading-relaxed text-text-primary overflow-auto whitespace-pre">
        {code}
      </div>
    </div>
  )
}