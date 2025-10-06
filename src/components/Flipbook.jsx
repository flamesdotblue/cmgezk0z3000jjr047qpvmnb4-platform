import React from 'react'
import { ChevronLeft, ChevronRight, Github, Mail, Globe } from 'lucide-react'

const pages = [
  {
    title: 'About Me',
    content: (
      <div className="space-y-4">
        <p>
          I craft delightful web experiences with a focus on clean design, performance, and playful interactions. This flipbook showcases a few highlights across skills and projects.
        </p>
        <p>
          I enjoy React, TypeScript, Tailwind CSS, and building immersive UI patterns. Outside coding, I sketch, photograph cities, and explore coffee spots.
        </p>
      </div>
    ),
  },
  {
    title: 'Skills',
    content: (
      <ul className="grid grid-cols-2 gap-3 text-sm">
        <li className="rounded-md bg-white/5 px-3 py-2">React / Next.js</li>
        <li className="rounded-md bg-white/5 px-3 py-2">TypeScript</li>
        <li className="rounded-md bg-white/5 px-3 py-2">Tailwind CSS</li>
        <li className="rounded-md bg-white/5 px-3 py-2">Node.js</li>
        <li className="rounded-md bg-white/5 px-3 py-2">UX Prototyping</li>
        <li className="rounded-md bg-white/5 px-3 py-2">Testing / CI</li>
      </ul>
    ),
  },
  {
    title: 'Projects',
    content: (
      <div className="grid gap-3">
        <ProjectItem title="Motion Cards" desc="Animated, accessible cards with focus on motion-reduced fallbacks." link="#" />
        <ProjectItem title="Realtime Board" desc="Collaborative whiteboard with OT and WebRTC." link="#" />
        <ProjectItem title="Design Tokens" desc="Cross-platform token pipeline with Style Dictionary." link="#" />
      </div>
    ),
  },
  {
    title: 'Contact',
    content: (
      <div className="space-y-4" id="contact">
        <p>Let’s collaborate or chat about your next project.</p>
        <div className="flex flex-wrap gap-3 text-sm">
          <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-md bg-white text-neutral-900 px-3 py-2 font-medium hover:opacity-90 transition-opacity"><Mail size={16}/> Email</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/20 px-3 py-2 hover:bg-white/5"><Github size={16}/> GitHub</a>
          <a href="#" className="inline-flex items-center gap-2 rounded-md border border-white/20 px-3 py-2 hover:bg-white/5"><Globe size={16}/> Website</a>
        </div>
      </div>
    ),
  },
]

function ProjectItem({ title, desc, link }) {
  return (
    <a href={link} className="block rounded-lg border border-white/10 bg-white/[0.03] p-4 hover:bg-white/[0.06] transition-colors">
      <div className="font-medium">{title}</div>
      <div className="text-sm text-neutral-300">{desc}</div>
    </a>
  )
}

export default function Flipbook() {
  const [pageIndex, setPageIndex] = React.useState(0)

  const canPrev = pageIndex > 0
  const canNext = pageIndex < pages.length - 1

  const goPrev = () => canPrev && setPageIndex(i => i - 1)
  const goNext = () => canNext && setPageIndex(i => i + 1)

  return (
    <section id="flipbook" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Portfolio Flipbook</h2>
            <p className="text-neutral-400 mt-1">Click a page edge or use the controls to turn pages.</p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button onClick={goPrev} disabled={!canPrev} className={`inline-flex items-center justify-center h-10 w-10 rounded-md border transition-all ${canPrev ? 'border-white/20 hover:bg-white/5' : 'border-white/10 opacity-40 cursor-not-allowed'}`}>
              <ChevronLeft size={18} />
            </button>
            <button onClick={goNext} disabled={!canNext} className={`inline-flex items-center justify-center h-10 w-10 rounded-md border transition-all ${canNext ? 'border-white/20 hover:bg-white/5' : 'border-white/10 opacity-40 cursor-not-allowed'}`}>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-5xl flex items-center justify-center">
          <Book pages={pages} pageIndex={pageIndex} setPageIndex={setPageIndex} />

          <div className="mt-6 flex justify-center gap-2 md:hidden">
            <button onClick={goPrev} disabled={!canPrev} className={`inline-flex items-center justify-center h-10 w-10 rounded-md border transition-all ${canPrev ? 'border-white/20 hover:bg-white/5' : 'border-white/10 opacity-40 cursor-not-allowed'}`}>
              <ChevronLeft size={18} />
            </button>
            <button onClick={goNext} disabled={!canNext} className={`inline-flex items-center justify-center h-10 w-10 rounded-md border transition-all ${canNext ? 'border-white/20 hover:bg-white/5' : 'border-white/10 opacity-40 cursor-not-allowed'}`}>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function Book({ pages, pageIndex, setPageIndex }) {
  return (
    <div className="relative mx-auto h-[560px] w-full max-w-5xl select-none flex items-center justify-center">
      {/* Centered book base */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-white/10 bg-neutral-900/70 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.6)]" />
      </div>

      <div className="absolute inset-0 [perspective:1600px] [perspective-origin:center]">
        {/* Static center crease */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-px -translate-x-1/2 -translate-y-1/2 bg-white/10" />

        {pages.map((p, i) => {
          const isLeft = i <= pageIndex
          const depth = i
          const z = 200 - depth

          // Keep a clean, centered rotation. Flipped pages go left, others stay right.
          const rotation = i <= pageIndex ? -176 : 0

          return (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 h-[500px] w-[340px] md:w-[360px] lg:w-[380px] -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d] origin-left will-change-transform"
              style={{
                zIndex: z,
                transform: `translate(-50%, -50%) rotateY(${rotation}deg)`,
                transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)'
              }}
            >
              {/* Front face */}
              <div className={`absolute inset-0 rounded-md border ${isLeft ? 'rounded-l-md' : 'rounded-r-md'} overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-50 text-neutral-900 [backface-visibility:hidden]`}>
                <PageInner title={p.title} index={i} side="front">
                  {p.content}
                </PageInner>
                {/* Right edge click area: next */}
                {i === pageIndex && (
                  <button
                    aria-label="Next page"
                    onClick={() => setPageIndex(prev => Math.min(pages.length - 1, prev + 1))}
                    className="absolute right-0 top-0 h-full w-10"
                  >
                    <span className="pointer-events-none absolute inset-y-0 right-0 w-px bg-neutral-300/50" />
                  </button>
                )}
              </div>

              {/* Back face */}
              <div className="absolute inset-0 rounded-md border border-neutral-200/80 bg-gradient-to-br from-neutral-100 to-neutral-50 text-neutral-900 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <PageBack index={i} />
                {/* Left edge click area: prev */}
                {i === pageIndex + 1 && (
                  <button
                    aria-label="Previous page"
                    onClick={() => setPageIndex(prev => Math.max(0, prev - 1))}
                    className="absolute left-0 top-0 h-full w-10"
                  >
                    <span className="pointer-events-none absolute inset-y-0 left-0 w-px bg-neutral-300/50" />
                  </button>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function PageInner({ title, children, index }) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b border-neutral-200/80 bg-white/80 px-4 py-2 text-xs uppercase tracking-wide text-neutral-500">
        <span>{title}</span>
        <span>Page {index + 1}</span>
      </div>
      <div className="flex-1 p-5 text-neutral-800">
        <div className="prose prose-neutral max-w-none prose-p:leading-relaxed prose-headings:mb-2 prose-headings:mt-0">
          {children}
        </div>
      </div>
      <div className="mt-auto border-t border-neutral-200/80 bg-gradient-to-r from-white to-white/60 px-4 py-2 text-[11px] text-neutral-500">
        Flipfolio • crafted with React & Tailwind
      </div>
    </div>
  )
}

function PageBack({ index }) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b border-neutral-200/80 bg-white/80 px-4 py-2 text-xs uppercase tracking-wide text-neutral-500">
        <span>Notes</span>
        <span>Page {index + 1} (back)</span>
      </div>
      <div className="flex-1 p-5">
        <div className="grid gap-2 text-sm text-neutral-700">
          <div className="rounded-md bg-neutral-100 p-3 border border-neutral-200">Scribbles, sketches, or additional details can live on the back.</div>
          <div className="rounded-md bg-neutral-100 p-3 border border-neutral-200">Tip: Click the outer edges to flip. Use the top controls on desktop.</div>
        </div>
      </div>
      <div className="mt-auto border-t border-neutral-200/80 bg-gradient-to-r from-white to-white/60 px-4 py-2 text-[11px] text-neutral-500">
        Back page • texture & paper grain for realism
      </div>
    </div>
  )
}
