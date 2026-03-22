'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { client, urlFor } from '@/lib/sanity'

export function ProjectSlider() {
  const [projects, setProjects] = useState<any[]>([])
  const trackRef = useRef<HTMLDivElement>(null)
  const animRef = useRef<number>()
  const posRef = useRef(0)
  const pausedRef = useRef(false)

  useEffect(() => {
    client.fetch(`
      *[_type == "project" && defined(coverImage)] | order(year desc) {
        _id, title, category, year, slug, coverImage
      }
    `).then(data => setProjects(data))
  }, [])

  useEffect(() => {
    if (projects.length === 0) return
    const track = trackRef.current
    if (!track) return

    const speed = 0.6 // px per frame
    const halfWidth = track.scrollWidth / 2

    const animate = () => {
      if (!pausedRef.current) {
        posRef.current += speed
        if (posRef.current >= halfWidth) posRef.current = 0
        track.style.transform = `translateX(-${posRef.current}px)`
      }
      animRef.current = requestAnimationFrame(animate)
    }

    animRef.current = requestAnimationFrame(animate)
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current) }
  }, [projects])

  if (projects.length === 0) return null

  // Duplicate for seamless loop
  const doubled = [...projects, ...projects]

  return (
    <section className="border-t border-[var(--border)] py-0 overflow-hidden">
      <div
        className="flex gap-4 py-4 cursor-grab active:cursor-grabbing"
        onMouseEnter={() => { pausedRef.current = true }}
        onMouseLeave={() => { pausedRef.current = false }}
        style={{ width: '100%' }}
      >
        <div ref={trackRef} className="flex gap-4 will-change-transform" style={{ width: 'max-content' }}>
          {doubled.map((project, i) => (
            <a
              key={`${project._id}-${i}`}
              href={`/projects/${project.slug?.current}`}
              className="relative shrink-0 overflow-hidden group"
              style={{ width: '320px', height: '200px' }}
              draggable={false}
            >
              <Image
                src={urlFor(project.coverImage).width(640).height(400).url()}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                draggable={false}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100">
                <p className="font-mono text-xs text-white tracking-widest uppercase">{project.category}</p>
                <p className="font-light text-white text-lg leading-tight">{project.title}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
