import React from 'react'

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[32rem] w-[32rem] rounded-full bg-gradient-to-tr from-cyan-500/30 to-violet-500/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-gradient-to-tr from-fuchsia-500/20 to-blue-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              A flipbook portfolio that turns pages like magic
            </h1>
            <p className="mt-4 text-neutral-300 max-w-prose">
              Showcase your story, skills, and projects through an elegant, tactile page-turning experience. Click the edge of a page or use Next/Prev to flip.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#flipbook" className="inline-flex items-center justify-center rounded-md bg-white text-neutral-900 px-4 py-2 font-medium hover:opacity-90 transition-opacity">Open Flipbook</a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-white/20 px-4 py-2 font-medium text-white/90 hover:bg-white/5 transition-colors">Contact</a>
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full rounded-xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-800 overflow-hidden shadow-2xl">
            <DecorativeCanvas />
          </div>
        </div>
      </div>
    </section>
  )
}

function DecorativeCanvas() {
  return (
    <div className="absolute inset-0">
      <div className="absolute left-8 top-8 h-24 w-24 rounded-xl bg-gradient-to-br from-cyan-400/60 to-blue-500/60 backdrop-blur-sm animate-pulse" />
      <div className="absolute right-10 top-14 h-12 w-28 rounded-full bg-gradient-to-r from-violet-400/60 to-fuchsia-500/60 rotate-12" />
      <div className="absolute bottom-10 left-1/3 h-20 w-20 rounded-full bg-gradient-to-tr from-emerald-400/50 to-teal-500/50 blur-sm" />
      <div className="absolute inset-0 [background-image:radial-gradient(transparent,transparent_60%,rgba(255,255,255,0.06))]" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.15]" style={{backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(-45deg, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '24px 24px'}} />
      </div>
    </div>
  )
}
