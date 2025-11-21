import React from 'react'
import { Menu, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[var(--panel)]/80 backdrop-blur-xl px-5 py-3">
          <div className="flex items-center gap-3">
            <motion.div
              initial={{ scale: 0.8, rotate: -10, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="relative"
           >
              <div className="absolute inset-0 blur-md rounded-lg bg-[var(--accent)]/30" />
              <div className="relative grid h-10 w-10 place-items-center rounded-lg bg-black border border-white/10">
                <Sparkles className="h-5 w-5 text-[var(--accent)]" />
              </div>
            </motion.div>
            <div className="leading-tight">
              <span className="block text-white font-semibold tracking-tight">Meal.ai</span>
              <span className="block text-xs text-white/60">AI Meal Planning</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm">
            {['Features','Recommendations','Engine','Pricing','Testimonials','FAQ'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-white/70 hover:text-white transition-colors">
                {item}
              </a>
            ))}
            <a href="#pricing" className="relative inline-flex items-center justify-center rounded-lg px-4 py-2 font-medium text-black">
              <span className="absolute inset-0 rounded-lg bg-[var(--accent)] blur-md opacity-40" />
              <span className="relative rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-weak)] transition-colors px-4 py-2">Get started</span>
            </a>
          </div>

          <button className="md:hidden text-white/80">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  )
}
