import React from 'react'
import { motion } from 'framer-motion'

const cards = [
  { title: 'High-Protein Cut', cals: 2100, protein: 170, carbs: 180, fats: 65 },
  { title: 'Lean Bulk', cals: 2700, protein: 190, carbs: 300, fats: 80 },
  { title: 'Mediterranean Clean', cals: 2300, protein: 140, carbs: 240, fats: 75 },
]

export default function Recommendations() {
  return (
    <section id="recommendations" className="relative py-28 bg-[var(--bg)]">
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between gap-6 flex-wrap"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Personalized recommendations</h2>
            <p className="mt-4 text-white/70 max-w-2xl">Set your goals and let the engine design your week. Tap to view recipes, swap dishes, and auto-update macros.</p>
          </div>
          <a href="#pricing" className="text-[var(--accent)] hover:text-white transition">Try it free →</a>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[var(--panel)]"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
              <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-[var(--accent)]/10" />
              <div className="p-6 relative">
                <h3 className="text-xl font-semibold">{c.title}</h3>
                <p className="mt-1 text-white/70">~{c.cals} kcal/day</p>
                <div className="mt-6 grid grid-cols-3 gap-3 text-sm">
                  <div className="rounded-lg border border-white/10 bg-black/40 p-3">
                    <div className="text-white/50">Protein</div>
                    <div className="font-semibold">{c.protein}g</div>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-black/40 p-3">
                    <div className="text-white/50">Carbs</div>
                    <div className="font-semibold">{c.carbs}g</div>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-black/40 p-3">
                    <div className="text-white/50">Fats</div>
                    <div className="font-semibold">{c.fats}g</div>
                  </div>
                </div>
                <button className="mt-6 relative inline-flex items-center justify-center rounded-lg px-4 py-2 font-medium text-black">
                  <span className="absolute inset-0 rounded-lg bg-[var(--accent)] blur-md opacity-30 group-hover:opacity-60 transition" />
                  <span className="relative rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-weak)] transition-colors px-4 py-2">Generate plan</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
