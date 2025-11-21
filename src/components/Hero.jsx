import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

function ParticleBackground() {
  const canvasRef = useRef(null)
  const animationRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let w = (canvas.width = window.innerWidth)
    let h = (canvas.height = Math.max(window.innerHeight * 0.9, 600))

    const handleResize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = Math.max(window.innerHeight * 0.9, 600)
      init()
    }

    window.addEventListener('resize', handleResize)

    const ACCENT = getComputedStyle(document.documentElement).getPropertyValue('--accent')?.trim() || '#0A84FF'

    let particles = []
    const density = Math.min(140, Math.floor((w * h) / 18000))

    function rand(min, max) {
      return Math.random() * (max - min) + min
    }

    class Particle {
      constructor() {
        this.reset()
      }
      reset() {
        this.x = rand(0, w)
        this.y = rand(0, h)
        const speed = rand(0.15, 0.55)
        const angle = rand(0, Math.PI * 2)
        this.vx = Math.cos(angle) * speed
        this.vy = Math.sin(angle) * speed
        this.size = rand(0.6, 2)
        this.alpha = rand(0.35, 0.8)
        this.pulse = rand(0.0015, 0.004)
        this.pulsePhase = rand(0, Math.PI * 2)
      }
      update() {
        this.x += this.vx
        this.y += this.vy
        if (this.x < -10) this.x = w + 10
        if (this.x > w + 10) this.x = -10
        if (this.y < -10) this.y = h + 10
        if (this.y > h + 10) this.y = -10
        this.pulsePhase += this.pulse
      }
      draw(ctx) {
        const s = this.size * (1 + Math.sin(this.pulsePhase) * 0.2)
        ctx.beginPath()
        ctx.arc(this.x, this.y, s, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${this.alpha})`
        ctx.fill()
      }
    }

    function init() {
      const count = density
      particles = new Array(count).fill(0).map(() => new Particle())
    }

    function drawConnections() {
      const maxDist = Math.min(150, Math.max(90, Math.min(w, h) * 0.16))
      ctx.lineWidth = 1
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d2 = dx * dx + dy * dy
          if (d2 < maxDist * maxDist) {
            const opacity = 0.16 * (1 - Math.sqrt(d2) / maxDist)
            const prevAlpha = ctx.globalAlpha
            ctx.globalAlpha = opacity
            ctx.strokeStyle = ACCENT
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
            ctx.globalAlpha = prevAlpha
          }
        }
      }
    }

    function loop() {
      ctx.clearRect(0, 0, w, h)

      // subtle vertical accent tint
      const grad = ctx.createLinearGradient(0, 0, 0, h)
      // use a tiny opacity by drawing a thin filled rect repeatedly via globalAlpha
      const prevAlpha = ctx.globalAlpha
      ctx.globalAlpha = 0.06
      ctx.fillStyle = ACCENT
      ctx.fillRect(0, 0, w, h)
      ctx.globalAlpha = prevAlpha

      // update & draw particles
      for (const p of particles) {
        p.update()
        p.draw(ctx)
      }

      // connections
      ctx.save()
      ctx.globalCompositeOperation = 'lighter'
      drawConnections()
      ctx.restore()

      animationRef.current = requestAnimationFrame(loop)
    }

    init()
    loop()

    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[var(--bg)]" id="home">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(10,132,255,0.06),transparent_60%)]" />

      <div className="absolute inset-0">
        <ParticleBackground />
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
