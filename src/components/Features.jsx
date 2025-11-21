import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, UtensilsCrossed, ShoppingCart, Timer, Flame, Apple } from 'lucide-react'

const features = [
  {
    icon: <UtensilsCrossed className="h-6 w-6" />, 
    title: 'AI Meal Plans',
    desc: 'Weekly plans tailored to your goals, taste, time, and budget.'
  },
  {
    icon: <Flame className="h-6 w-6" />, 
    title: 'Macros & Calories',
    desc: 'Automatic macro balancing with adjustable protein, carbs, and fats.'
  },
  {
    icon: <ShoppingCart className="h-6 w-6" />, 
    title: 'Smart Grocery Lists',
    desc: 'One-tap lists grouped by aisle with substitutions and price awareness.'
  },
  {
    icon: <Timer className="h-6 w-6" />, 
    title: 'Prep Optimizer',
    desc: 'Batch-cook suggestions and step scheduling to save you hours each week.'
  },
  {
    icon: <Apple className="h-6 w-6" />, 
    title: 'Dietary Controls',
    desc: 'Allergies, cuisines, dislikes and macros—precision-personalized.'
  },
  {
    icon: <Sparkles className="h-6 w-6" />, 
    title: 'Taste Learning',
    desc: 'Learns your preferences over time for increasingly better meals.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-28 bg-[var(--bg)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-extrabold tracking-tight"
        >
          Focused features. Real results.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mt-4 text-white/70 max-w-2xl"
        >
          Designed for athletes, creators, and busy humans. Precision planning with a calm, minimal interface.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="relative group rounded-2xl border border-white/10 bg-[var(--panel)] p-6 overflow-hidden"
            >
              <div className="absolute -inset-0.5 opacity-0 group-hover:opacity-100 transition-opacity" style={{background: 'radial-gradient(120px circle at var(--x,50%) var(--y,50%), rgba(255,255,255,0.06), transparent 40%)'}} />
              <div className="relative flex items-start gap-4">
                <div className="relative grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-black text-[var(--accent)]">
                  <div className="absolute -inset-2 rounded-2xl bg-[var(--accent)]/15 blur-md" />
                  <div className="relative">{f.icon}</div>
                </div>
                <div>
                  <h3 className="font-semibold text-white">{f.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
