import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[var(--bg)]" id="home">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(138,180,248,0.12),transparent_60%)]" />
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36 pb-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight text-white"
          >
            Eat smarter with <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">Meal.ai</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8, ease: 'easeOut' }}
            className="mt-5 text-lg text-white/70 max-w-xl"
          >
            Your AI-powered meal planning and nutrition copilot. Generate personalized weekly plans, optimize macros, and shop faster — with a calm, minimalist interface.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
            className="mt-8 flex items-center gap-4"
          >
            <a href="#pricing" className="relative inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-black">
              <span className="absolute inset-0 rounded-xl bg-[var(--accent)] blur-md opacity-30" />
              <span className="relative rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-weak)] transition-colors px-6 py-3">Start free</span>
            </a>
            <a href="#features" className="group inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors">
              <span className="relative">
                <span className="absolute -inset-1 rounded-full bg-white/10 blur" />
                <span className="relative">Explore features</span>
              </span>
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--bg)] to-transparent" />
    </section>
  )
}
