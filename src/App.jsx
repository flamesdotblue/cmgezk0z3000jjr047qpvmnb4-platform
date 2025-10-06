import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Flipbook from './components/Flipbook'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Flipbook />
      </main>
      <Footer />
    </div>
  )
}
