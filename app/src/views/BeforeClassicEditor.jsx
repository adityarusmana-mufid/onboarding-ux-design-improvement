import { ArrowLeft } from 'lucide-react'

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

export default function BeforeClassicEditor({ onBack }) {
  return (
    <div className="h-screen flex flex-col bg-bg-dark">
      {/* Back button overlay */}
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

      {/* Editors */}
      <div className="flex flex-1 min-h-0 border-b-3 border-bg-header">
        <EditorPanel label="HTML" color="text-accent-yellow" code={HTML_CODE} />
        <EditorPanel label="CSS" color="text-accent-blue" code={CSS_CODE} />
        <EditorPanel label="JS" color="text-accent-green" code={JS_CODE} />
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
      </div>

      {/* Bottom bar */}
      <div className="flex items-center justify-between bg-bg-header px-4 h-9 border-t border-border text-xs text-text-muted">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded hover:bg-bg-editor cursor-pointer">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" /></svg>
          Console
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