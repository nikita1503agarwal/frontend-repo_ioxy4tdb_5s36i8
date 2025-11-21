import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Recommendations from './components/Recommendations'
import Engine from './components/Engine'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="min-h-screen bg-[#000000] text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Recommendations />
        <Engine />
        <Pricing />
        <Testimonials />
        <FAQ />
      </main>
      <footer className="relative bg-[#0A0A0A] border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/60">© {new Date().getFullYear()} Meal.ai</div>
          <div className="text-white/60 text-sm">Made with love and good food.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
