import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

function ParticleBackground() {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0, active: false })
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

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current.x = e.clientX - rect.left
      mouseRef.current.y = e.clientY - rect.top
      mouseRef.current.active = true
    }

    const handleMouseLeave = () => {
      mouseRef.current.active = false
    }

    window.addEventListener('resize', handleResize)
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)

    const ACCENT = getComputedStyle(document.documentElement).getPropertyValue('--accent')?.trim() || '#8AB4F8'
    const ACCENT_WEAK = getComputedStyle(document.documentElement).getPropertyValue('--accent-weak')?.trim() || '#3B82F6'

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
        const speed = rand(0.2, 0.7)
        const angle = rand(0, Math.PI * 2)
        this.vx = Math.cos(angle) * speed
        this.vy = Math.sin(angle) * speed
        this.size = rand(0.6, 2.2)
        this.alpha = rand(0.4, 0.9)
        this.pulse = rand(0.002, 0.006)
        this.pulsePhase = rand(0, Math.PI * 2)
      }
      update() {
        this.x += this.vx
        this.y += this.vy
        // gentle wrap
        if (this.x < -10) this.x = w + 10
        if (this.x > w + 10) this.x = -10
        if (this.y < -10) this.y = h + 10
        if (this.y > h + 10) this.y = -10
        this.pulsePhase += this.pulse
      }
      draw(ctx) {
        const s = this.size * (1 + Math.sin(this.pulsePhase) * 0.25)
        ctx.beginPath()
        ctx.arc(this.x, this.y, s, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${this.alpha * 0.9})`
        ctx.fill()
      }
    }

    function init() {
      const count = density
      particles = new Array(count).fill(0).map(() => new Particle())
    }

    function drawConnections() {
      const maxDist = Math.min(160, Math.max(90, Math.min(w, h) * 0.18))
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d2 = dx * dx + dy * dy
          if (d2 < maxDist * maxDist) {
            const opacity = 0.18 * (1 - Math.sqrt(d2) / maxDist)
            ctx.strokeStyle = `rgba(138,180,248,${opacity})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }
    }

    function drawMouseField() {
      if (!mouseRef.current.active) return
      const { x, y } = mouseRef.current
      const radius = Math.min(220, Math.max(120, Math.min(w, h) * 0.25))

      // soft radial highlight
      const grad = ctx.createRadialGradient(x, y, 0, x, y, radius)
      grad.addColorStop(0, ACCENT + '22')
      grad.addColorStop(1, 'transparent')
      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      ctx.fill()

      // attract particles slightly toward cursor
      for (const p of particles) {
        const dx = x - p.x
        const dy = y - p.y
        const dist = Math.hypot(dx, dy)
        if (dist < radius) {
          const force = (1 - dist / radius) * 0.6
          p.vx += (dx / dist || 0) * force * 0.02
          p.vy += (dy / dist || 0) * force * 0.02
        }
      }

      // draw orbiting "process" ring
      ctx.beginPath()
      ctx.strokeStyle = ACCENT_WEAK + '66'
      ctx.lineWidth = 1.5
      ctx.arc(x, y, radius * 0.6, 0, Math.PI * 2)
      ctx.stroke()
    }

    function loop() {
      ctx.clearRect(0, 0, w, h)

      // subtle background gradient tint
      const bgGrad = ctx.createLinearGradient(0, 0, 0, h)
      bgGrad.addColorStop(0, 'rgba(138,180,248,0.06)')
      bgGrad.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = bgGrad
      ctx.fillRect(0, 0, w, h)

      // update & draw particles
      for (const p of particles) {
        p.update()
        p.draw(ctx)
      }

      // connections and fields
      ctx.save()
      ctx.globalCompositeOperation = 'lighter'
      drawConnections()
      drawMouseField()
      ctx.restore()

      animationRef.current = requestAnimationFrame(loop)
    }

    init()
    loop()

    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener('resize', handleResize)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[var(--bg)]" id="home">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(138,180,248,0.08),transparent_60%)]" />

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
