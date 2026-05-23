import { useState } from 'react'
import projects, { categories } from '../data/projects'

function HeartIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

function ExternalLinkIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function CodePenLogo({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 9.5v5L12 22l10-7.5v-5L12 2zm0 2.5l6.5 4.9L12 14.3l-6.5-4.9L12 4.5zM4 14.3v-4.6l3.5 2.3L4 14.3zm4.5-2.3L12 14.8l3.5-2.8L12 9.2l-3.5 2.8zM20 14.3l-3.5-2.3 3.5-2.3v4.6z" />
    </svg>
  )
}

function formatHearts(n) {
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'k'
  return n.toString()
}

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-bg-surface border border-border rounded-xl overflow-hidden transition-all duration-200 hover:border-accent-green/40 hover:shadow-lg hover:shadow-accent-green/5 hover:-translate-y-0.5"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Thumbnail area */}
      <div className={`relative h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }} />
        {/* Project title in thumbnail */}
        <div className="relative z-10 text-center px-4">
          <span className="inline-block bg-black/40 backdrop-blur-sm text-white text-sm font-mono px-3 py-1.5 rounded-lg">
            {project.title}
          </span>
        </div>
        {/* Hover overlay */}
        <div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-200 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-white text-sm font-medium flex items-center gap-1.5">
            View on CodePen <ExternalLinkIcon className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-text-primary font-semibold text-sm leading-snug line-clamp-2">
            {project.title}
          </h3>
          <span className="flex items-center gap-1 text-accent-red text-xs whitespace-nowrap">
            <HeartIcon className="w-3 h-3" />
            {formatHearts(project.hearts)}
          </span>
        </div>
        <p className="text-text-muted text-xs leading-relaxed mb-3 line-clamp-2">
          {project.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-text-muted text-xs">
            @{project.author}
          </span>
          <span className="text-xs bg-bg-editor px-2 py-0.5 rounded text-accent-green font-medium">
            {project.category}
          </span>
        </div>
      </div>
    </a>
  )
}

export default function ProjectGallery({ onViewMockups }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = projects.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory
    const matchesSearch = !search ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.authorName.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-bg-dark">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-bg-dark/90 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <CodePenLogo className="w-6 h-6 text-white" />
            <span className="text-white font-bold text-lg tracking-tight">CodePen</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onViewMockups}
              className="text-text-muted hover:text-text-primary text-xs transition-colors flex items-center gap-1"
            >
              Onboarding Proposal
              <ExternalLinkIcon className="w-3 h-3" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
          What will you create<span className="text-accent-green">?</span>
        </h1>
        <p className="text-text-muted text-lg max-w-xl leading-relaxed">
          Explore what people have built with nothing but a browser.
          Every project below was made on CodePen — HTML, CSS, and a little JavaScript.
        </p>
      </div>

      {/* Filters */}
      <div className="max-w-6xl mx-auto px-6 mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {/* Search */}
          <div className="relative flex-1 max-w-xs">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-bg-editor border border-border rounded-lg pl-9 pr-4 py-2 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-green/50 transition-colors"
            />
          </div>
          {/* Category pills */}
          <div className="flex gap-2 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-accent-green text-black'
                    : 'bg-bg-editor text-text-muted hover:text-text-primary border border-border'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-text-muted text-lg mb-2">No projects match your search</p>
            <p className="text-text-muted text-sm">Try a different keyword or category</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            Showcasing real creations from the CodePen community.
          </p>
          <button
            onClick={onViewMockups}
            className="text-accent-green text-xs hover:underline cursor-pointer"
          >
            View the onboarding redesign proposal →
          </button>
        </div>
      </footer>
    </div>
  )
}