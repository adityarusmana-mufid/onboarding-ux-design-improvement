import { useState, useRef, useEffect, useCallback } from 'react'
import projects, { categories } from '../data/projects'

const ITEMS_PER_PAGE = 6 // 3 per row × 2 rows

function formatHearts(n) {
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'k'
  return n.toString()
}

function ProjectCard({ project }) {
  return (
    <div className="flex-shrink-0 w-full group">
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-2xl overflow-hidden bg-[#14151a] border border-[#22242e] transition-all duration-300 hover:border-[#47cf73]/25 hover:shadow-[0_8px_40px_-12px_rgba(71,207,115,0.12)]"
      >
        {/* Gradient accent strip */}
        <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />

        {/* Thumbnail */}
        <div className={`relative aspect-[16/10] bg-gradient-to-br ${project.gradient} overflow-hidden`}>
          {/* Mesh overlay for depth */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(0,0,0,0.3) 0%, transparent 50%)',
            }}
          />
          {/* Dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />
          {/* Center title */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="bg-black/50 backdrop-blur-md rounded-lg px-4 py-2 border border-white/[0.08]">
              <span className="text-white/90 text-[13px] font-medium">{project.title}</span>
            </div>
          </div>
          {/* Hearts badge */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm rounded-full px-2.5 py-1">
            <svg className="w-3 h-3 text-rose-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <span className="text-white/80 text-[11px] font-medium">{formatHearts(project.hearts)}</span>
          </div>
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white font-medium flex items-center gap-2 text-sm">
              Open in CodePen
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </span>
          </div>
        </div>

        {/* Card body */}
        <div className="p-5">
          <p className="text-[#8b8ea3] text-[13px] leading-[1.65] mb-4 line-clamp-2">
            {project.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-[#55576a] text-xs">
              by <span className="text-[#8b8ea3]">{project.authorName}</span>
            </span>
            <span className="text-[10px] font-semibold tracking-[0.08em] uppercase text-[#47cf73]/60 group-hover:text-[#47cf73] transition-colors">
              {project.category}
            </span>
          </div>
        </div>
      </a>
    </div>
  )
}

export default function ProjectGallery({ onViewMockups }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(0)
  const gridRef = useRef(null)

  const filtered = projects.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory
    const matchesSearch = !search ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.authorName.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE)
  const pageItems = filtered.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE)
  const topRow = pageItems.slice(0, 3)
  const bottomRow = pageItems.slice(3, 6)

  const goToPage = useCallback((p) => {
    setPage(Math.max(0, Math.min(p, totalPages - 1)))
  }, [totalPages])

  // Reset page when filters change
  useEffect(() => {
    setPage(0)
  }, [activeCategory, search])

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') goToPage(page + 1)
      if (e.key === 'ArrowLeft') goToPage(page - 1)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [page, goToPage])

  return (
    <div className="min-h-screen bg-[#0d0e11] flex flex-col">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#0d0e11]/80 backdrop-blur-xl border-b border-[#1a1b23]">
        <div className="max-w-[1400px] mx-auto px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#1a1b23] rounded-xl flex items-center justify-center border border-[#252730]">
              <svg className="w-5 h-5 text-[#47cf73]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm0 2.5l7.5 4.2L12 12.8 4.5 8.7 12 4.5zM4 15.5v-5.5l7 3.9v5.5l-7-3.9zm9 3.9v-5.5l7-3.9v5.5l-7 3.9z" />
              </svg>
            </div>
            <span className="text-white font-semibold text-[15px] tracking-tight">CodePen</span>
          </div>
          <button
            onClick={onViewMockups}
            className="text-[#55576a] hover:text-white text-[13px] transition-colors duration-200 flex items-center gap-1.5 group"
          >
            Onboarding Proposal
            <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero */}
      <div className="max-w-[1400px] mx-auto px-8 pt-24 pb-16">
        <p className="text-[#47cf73] text-[12px] font-semibold tracking-[0.2em] uppercase mb-5">
          Community Showcase
        </p>
        <h1 className="text-[clamp(2.8rem,5vw,4.5rem)] font-bold text-white leading-[1.05] mb-6 tracking-[-0.02em]">
          What will you create<span className="text-[#47cf73]">?</span>
        </h1>
        <p className="text-[#6b6e82] text-[17px] max-w-[560px] leading-[1.7]">
          Explore what people have built with nothing but a browser. Every project below was made on CodePen — HTML, CSS, and a little JavaScript.
        </p>
      </div>

      {/* Filters */}
      <div className="max-w-[1400px] mx-auto px-8 mb-14">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="relative w-full sm:w-72">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#3a3d4a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#14151a] border border-[#22242e] rounded-xl pl-11 pr-4 py-3 text-[14px] text-white placeholder-[#3a3d4a] focus:border-[#47cf73]/30 focus:ring-1 focus:ring-[#47cf73]/15 transition-all duration-200"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-[13px] font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#47cf73] text-[#0d0e11] shadow-[0_0_24px_-4px_rgba(71,207,115,0.35)]'
                    : 'bg-[#14151a] text-[#55576a] border border-[#22242e] hover:border-[#2e3040] hover:text-[#8b8ea3]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery area */}
      <div className="flex-1">
        {filtered.length === 0 ? (
          <div className="max-w-[1400px] mx-auto px-8 py-24 text-center">
            <p className="text-[#55576a] text-lg mb-2">No projects match your search</p>
            <p className="text-[#3a3d4a] text-sm">Try a different keyword or category</p>
          </div>
        ) : (
          <div className="max-w-[1400px] mx-auto px-8">
            {/* Pagination header */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-[#3a3d4a] text-[13px]">
                Showing <span className="text-[#8b8ea3]">{pageItems.length}</span> of <span className="text-[#8b8ea3]">{filtered.length}</span> projects
              </p>
              <div className="flex items-center gap-3">
                {/* Prev */}
                <button
                  onClick={() => goToPage(page - 1)}
                  disabled={page === 0}
                  className="w-10 h-10 rounded-full bg-[#14151a] border border-[#22242e] flex items-center justify-center text-[#55576a] hover:text-white hover:border-[#47cf73]/30 transition-all duration-200 disabled:opacity-25 disabled:cursor-not-allowed cursor-pointer"
                  aria-label="Previous page"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                {/* Next */}
                <button
                  onClick={() => goToPage(page + 1)}
                  disabled={page >= totalPages - 1}
                  className="w-10 h-10 rounded-full bg-[#14151a] border border-[#22242e] flex items-center justify-center text-[#55576a] hover:text-white hover:border-[#47cf73]/30 transition-all duration-200 disabled:opacity-25 disabled:cursor-not-allowed cursor-pointer"
                  aria-label="Next page"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Two-row grid */}
            <div ref={gridRef} className="space-y-6">
              {/* Top row */}
              {topRow.length > 0 && (
                <div className="grid grid-cols-3 gap-6">
                  {topRow.map(project => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              )}
              {/* Bottom row */}
              {bottomRow.length > 0 && (
                <div className="grid grid-cols-3 gap-6">
                  {bottomRow.map(project => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              )}
            </div>

            {/* Dot pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-12">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goToPage(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 cursor-pointer ${
                      i === page
                        ? 'bg-[#47cf73] w-6'
                        : 'bg-[#252730] hover:bg-[#3a3d4a]'
                    }`}
                    aria-label={`Page ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-[#1a1b23] mt-24">
        <div className="max-w-[1400px] mx-auto px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#2a2d3a] text-[13px]">
            Showcasing real creations from the CodePen community
          </p>
          <button
            onClick={onViewMockups}
            className="text-[#47cf73] text-[13px] font-medium hover:underline cursor-pointer"
          >
            View the onboarding redesign proposal →
          </button>
        </div>
      </footer>
    </div>
  )
}