'use client'

import { useEffect, useRef } from 'react'

export function Konfetti() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const colors = ['#4285f4', '#ea4335', '#fbbc05', '#34a853', '#8e24aa', '#00bcd4']

    let animId: number
    const particles: any[] = []
    const dust: any[] = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Subtle background dust
    for (let i = 0; i < 150; i++) {
      dust.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.15,
        speedX: (Math.random() - 0.5) * 0.1,
        speedY: (Math.random() - 0.5) * 0.1,
      })
    }

    const emit = (amount = 80) => {
      for (let i = 0; i < amount; i++) {
        const baseAngle = (Math.PI / 4) + (Math.random() - 0.5) * 0.8
        const speed = Math.random() * 6 + 2
        particles.push({
          x: -100 + Math.random() * 300,
          y: -100 + Math.random() * 300,
          size: Math.random() * 3 + 1.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          vx: Math.cos(baseAngle) * speed,
          vy: Math.sin(baseAngle) * speed,
          life: 1.0,
          decay: Math.random() * 0.008 + 0.002,
          rotation: Math.random() * Math.PI * 2,
          spin: (Math.random() - 0.5) * 0.2,
          wobbleSpeed: Math.random() * 0.1 + 0.05,
          wobbleOffset: Math.random() * Math.PI * 2,
        })
      }
    }

    const update = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Dust
      dust.forEach(d => {
        d.x += d.speedX
        d.y += d.speedY
        if (d.x < 0) d.x = canvas.width
        if (d.x > canvas.width) d.x = 0
        if (d.y < 0) d.y = canvas.height
        if (d.y > canvas.height) d.y = 0
        ctx.fillStyle = `rgba(128, 128, 128, ${d.opacity})`
        ctx.beginPath()
        ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2)
        ctx.fill()
      })

      // Particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx + Math.cos(p.wobbleOffset) * 1.5
        p.y += p.vy + Math.sin(p.wobbleOffset) * 1.0
        p.wobbleOffset += p.wobbleSpeed
        p.rotation += p.spin
        p.life -= p.decay
        if (p.life <= 0) { particles.splice(i, 1); continue }

        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rotation)
        ctx.fillStyle = p.color
        ctx.globalAlpha = Math.min(1, p.life * 2)
        ctx.shadowBlur = p.size * 2
        ctx.shadowColor = p.color
        ctx.beginPath()
        ctx.roundRect(-p.size * 2, -p.size / 2, p.size * 4, p.size, p.size / 2)
        ctx.fill()
        ctx.restore()
      }

      animId = requestAnimationFrame(update)
    }

    // Initial burst
    emit(250)
    update()

    // Continuous gentle emitter
    const interval = setInterval(() => {
      if (Math.random() > 0.3) emit(15)
    }, 1500)

    return () => {
      cancelAnimationFrame(animId)
      clearInterval(interval)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}
