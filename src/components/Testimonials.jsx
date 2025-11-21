import React from 'react'
import { motion } from 'framer-motion'

const quotes = [
  { name: 'Ava M.', role: 'Designer & Runner', text: 'I save 5+ hours a week and my macros are finally dialed. The neon UI is a vibe.' },
  { name: 'Jordan P.', role: 'Engineer', text: 'The AI swaps based on my cravings. Plans are balanced and grocery runs are shorter.' },
  { name: 'Kai R.', role: 'Creator', text: 'Clean, fast, futuristic. It actually learns my taste and keeps variety high.' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 bg-[#000000]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(61,242,255,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-extrabold tracking-tight"
        >
          Loved by doers
        </motion.h2>
        <p className="mt-4 text-white/70 max-w-2xl">What our community says</p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <motion.div
              key={q.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="relative rounded-2xl border border-white/10 bg-[#0A0A0A]/60 p-6"
            >
              <p className="text-white/90">“{q.text}”</p>
              <div className="mt-6 text-sm text-white/60">{q.name} • {q.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
