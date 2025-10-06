import React from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 backdrop-blur bg-neutral-950/70">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-gradient-to-br from-cyan-400 to-violet-500" />
            <span className="font-semibold tracking-tight">Flipfolio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
            <a className="hover:text-white transition-colors" href="#hero">Home</a>
            <a className="hover:text-white transition-colors" href="#flipbook">Portfolio</a>
            <a className="hover:text-white transition-colors" href="#contact">Contact</a>
            <a className="inline-flex items-center justify-center rounded-md bg-white text-neutral-900 px-3 py-1.5 font-medium hover:opacity-90 transition-opacity" href="#flipbook">Open Flipbook</a>
          </nav>

          <button onClick={() => setOpen(v => !v)} aria-label="Toggle menu" className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-white/10 hover:bg-white/5">
            <Menu size={18} />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col gap-2 text-sm text-neutral-300">
              <a className="hover:text-white transition-colors" href="#hero" onClick={() => setOpen(false)}>Home</a>
              <a className="hover:text-white transition-colors" href="#flipbook" onClick={() => setOpen(false)}>Portfolio</a>
              <a className="hover:text-white transition-colors" href="#contact" onClick={() => setOpen(false)}>Contact</a>
              <a className="inline-flex items-center justify-center rounded-md bg-white text-neutral-900 px-3 py-2 font-medium mt-2 hover:opacity-90 transition-opacity" href="#flipbook" onClick={() => setOpen(false)}>Open Flipbook</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
