import React from 'react'
import { motion } from 'framer-motion'

const tiers = [
  { name: 'Starter', price: 'Free', highlight: false, features: ['7-day plan', 'Smart grocery list', 'Macros overview'] },
  { name: 'Pro', price: '$12/mo', highlight: true, features: ['Unlimited plans', 'Advanced macros & targets', 'Taste learning', 'Priority support'] },
  { name: 'Teams', price: '$29/mo', highlight: false, features: ['Family profiles', 'Multi-cart lists', 'Shared pantry'] },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-28 bg-[var(--bg)]">
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-extrabold tracking-tight"
        >
          Simple pricing
        </motion.h2>
        <p className="mt-4 text-white/70 max-w-2xl">Start for free, upgrade when you need more power. Cancel anytime.</p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className={`relative rounded-2xl border border-white/10 bg-[var(--panel)] p-6 ${t.highlight ? 'ring-2 ring-[var(--accent)]/50' : ''}`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{t.name}</h3>
                <div className="text-2xl font-extrabold text-white">{t.price}</div>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-white/80">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" /> {f}
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full relative inline-flex items-center justify-center rounded-lg px-4 py-2 font-medium text-black">
                <span className="absolute inset-0 rounded-lg bg-[var(--accent)] blur-md opacity-30" />
                <span className="relative rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-weak)] transition-colors px-4 py-2">{t.highlight ? 'Go Pro' : 'Get started'}</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
