import React from 'react'
import { motion } from 'framer-motion'
import { BrainCircuit, Cpu, Zap, Shield } from 'lucide-react'

const steps = [
  { icon: <Cpu className="h-6 w-6" />, title: 'Profile ingest', desc: 'Goals, dietary constraints, biometrics, activity, and taste signals.' },
  { icon: <BrainCircuit className="h-6 w-6" />, title: 'Generative planning', desc: 'Multi-objective optimization balances macros, variety, cost, and prep time.' },
  { icon: <Zap className="h-6 w-6" />, title: 'Realtime adapt', desc: 'Swap meals, log exceptions, and auto-rebalance the rest of the week.' },
  { icon: <Shield className="h-6 w-6" />, title: 'Nutrition safety', desc: 'Science-backed limits and evidence-based defaults built-in.' },
]

export default function Engine() {
  return (
    <section id="engine" className="relative py-28 bg-[var(--bg)]">
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-extrabold tracking-tight"
        >
          The Meal.ai engine
        </motion.h2>
        <p className="mt-4 text-white/70 max-w-2xl">Under the hood: a hybrid of generative models and constraint solvers with a nutrition knowledge graph.</p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="relative rounded-2xl border border-white/10 bg-[var(--panel)] p-6"
            >
              <div className="relative grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-black text-[var(--accent)]">
                <div className="absolute -inset-2 rounded-2xl bg-[var(--accent)]/15 blur-md" />
                <div className="relative">{s.icon}</div>
              </div>
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-white/70">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
