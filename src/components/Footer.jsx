import React from 'react'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[var(--bg)]">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-white/60 text-sm">© {new Date().getFullYear()} Meal.ai — All rights reserved.</div>
        <div className="flex items-center gap-6 text-sm text-white/60">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
        </div>
      </div>
    </footer>
  )
}
