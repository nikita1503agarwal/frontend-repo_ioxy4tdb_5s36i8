import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  { q: 'How accurate are the macros?', a: 'We use nutrition databases and model-based estimates verified against common sources. You can set targets and we auto-balance each day.' },
  { q: 'Can I exclude allergens or disliked foods?', a: 'Yes. Add exclusions and hard limits. The engine respects them across all suggestions and swaps.' },
  { q: 'Do you integrate with grocery delivery?', a: 'Lists are exportable to major retailers and can be synced to notes or reminders.' },
]

export default function FAQ() {
  const [open, setOpen] = React.useState(0)
  return (
    <section id="faq" className="relative py-28 bg-[#000000]">
      <div className="relative mx-auto max-w-4xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-extrabold tracking-tight text-center"
        >
          FAQ
        </motion.h2>
        <div className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-[#0A0A0A]/60">
          {faqs.map((f, i) => (
            <div key={f.q} className="p-6">
              <button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between text-left">
                <span className="font-medium text-white/90">{f.q}</span>
                <span className={`ml-4 h-6 w-6 grid place-items-center rounded-full text-black transition ${open===i?'bg-[#36FF8F]':'bg-white/10 text-white'}`}>{open===i?'−':'+'}</span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 text-white/70"
                  >
                    {f.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
