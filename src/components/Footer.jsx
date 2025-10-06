import React from 'react'

export default function Footer() {
  return (
    <footer className="border-top border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-400">
        <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
          <p>© {new Date().getFullYear()} Flipfolio. All rights reserved.</p>
          <p className="text-neutral-500">Built with React + Tailwind • Page-turn effect with CSS 3D</p>
        </div>
      </div>
    </footer>
  )
}
