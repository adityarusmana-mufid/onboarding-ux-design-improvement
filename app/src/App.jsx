import { useState } from 'react'
import BeforeClassicEditor from './views/BeforeClassicEditor'
import AfterQuickStart from './views/AfterQuickStart'
import AfterFullEditor from './views/AfterFullEditor'
import ProjectGallery from './views/ProjectGallery'

function App() {
  const [view, setView] = useState('landing')

  if (view === 'before') return <BeforeClassicEditor onBack={() => setView('landing')} />
  if (view === 'quickstart') return <AfterQuickStart onBack={() => setView('landing')} />
  if (view === 'full') return <AfterFullEditor onBack={() => setView('landing')} />
  if (view === 'mockups') {
    return (
      <div className="min-h-screen bg-bg-dark flex items-center justify-center p-8">
        <div className="max-w-3xl w-full text-center">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-3">
              Fixing CodePen's Onboarding
            </h1>
            <p className="text-xl text-text-muted leading-relaxed">
              Progressive Disclosure for a Power User Editor
            </p>
            <p className="text-text-muted mt-2 text-sm">
              CodePen 2.0 replaced a 1-step editor with a 4-step IDE — and forgot to bring new users along.
            </p>
          </div>

          <div className="grid gap-4 mb-12">
            <div className="bg-bg-surface border border-border rounded-xl p-6 text-left">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-accent-red/20 text-accent-red text-xs font-bold px-2 py-1 rounded">BEFORE</span>
                <h3 className="text-white font-semibold text-lg">Classic CodePen Editor</h3>
              </div>
              <p className="text-text-muted text-sm mb-4">
                Three panes, zero setup, instant results. The fastest path from idea to working code on the web.
              </p>
              <button
                onClick={() => setView('before')}
                className="bg-bg-editor hover:bg-border text-text-primary px-5 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer"
              >
                View Before &rarr;
              </button>
            </div>

            <div className="bg-bg-surface border border-accent-green/30 rounded-xl p-6 text-left">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-accent-green/20 text-accent-green text-xs font-bold px-2 py-1 rounded">AFTER — Quick Start</span>
                <h3 className="text-white font-semibold text-lg">Proposed Quick Start Mode</h3>
              </div>
              <p className="text-text-muted text-sm mb-4">
                Same simplicity, built on CodePen 2.0's architecture. Classic Block auto-configured — the user never has to know about it.
              </p>
              <button
                onClick={() => setView('quickstart')}
                className="bg-accent-green hover:bg-accent-green/80 text-black px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors cursor-pointer"
              >
                View Quick Start Mode &rarr;
              </button>
            </div>

            <div className="bg-bg-surface border border-accent-purple/30 rounded-xl p-6 text-left">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-accent-purple/20 text-accent-purple text-xs font-bold px-2 py-1 rounded">AFTER — Full Editor</span>
                <h3 className="text-white font-semibold text-lg">Progressive Disclosure Full Editor</h3>
              </div>
              <p className="text-text-muted text-sm mb-4">
                Power features are present but not intrusive. The file tree, Blocks panel, and Omnibar appear when needed — not competing for attention from frame one.
              </p>
              <button
                onClick={() => setView('full')}
                className="bg-accent-purple hover:bg-accent-purple/80 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors cursor-pointer"
              >
                View Full Editor &rarr;
              </button>
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <p className="text-text-muted text-xs">
              Interactive mockups built with React + Tailwind. Press <kbd className="bg-bg-editor px-1.5 py-0.5 rounded border border-border text-text-primary">Esc</kbd> to return here.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return <ProjectGallery onViewMockups={() => setView('mockups')} />
}

export default App