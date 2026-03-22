'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { client, urlFor } from '@/lib/sanity'
import Image from 'next/image'

const ModelViewer = dynamic(
  () => import('./ModelViewer').then(m => m.ModelViewer),
  { ssr: false, loading: () => <div className="w-full h-[500px] bg-[var(--card)] animate-pulse" /> }
)

export function FeaturedProject() {
  const [project, setProject] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    client.fetch(`
      *[_type == "project" && featured == true][0] {
        _id, title, slug, category, year,
        coverImage, description, tags,
        "modelUrl": modelFile.asset->url
      }
    `).then(data => {
      setProject(data)
      setLoading(false)
    }).catch(() => setLoading(false))
  }, [])

  if (loading || !project) return null

  return (
    <section className="border-t border-[var(--border)] py-0">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-xs tracking-widest uppercase opacity-40">Featured Project</span>
          <span className="font-mono text-xs opacity-30">{project.year}</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 min-h-[560px]">
        {/* Left — 3D model or cover image */}
        <div className="bg-[var(--card)] flex items-center justify-center relative overflow-hidden min-h-[360px] md:min-h-[560px]">
          {project.modelUrl ? (
            <ModelViewer src={project.modelUrl} alt={project.title} />
          ) : project.coverImage ? (
            <Image
              src={urlFor(project.coverImage).width(800).height(600).url()}
              alt={project.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex flex-col items-center justify-center gap-4 opacity-20 p-8">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
              <p className="font-mono text-xs tracking-widest uppercase text-center">
                Add a cover image or .glb file in Sanity Studio
              </p>
            </div>
          )}
        </div>

        {/* Right — project info */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-16">
          <span className="font-mono text-xs tracking-widest uppercase opacity-40 mb-6">
            {project.category}
          </span>
          <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
            {project.title}
          </h2>
          {project.description && (
            <p className="opacity-60 leading-relaxed font-light mb-10">
              {project.description[0]?.children?.[0]?.text || ''}
            </p>
          )}
          {project.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-10">
              {project.tags.map((tag: string) => (
                <span key={tag} className="font-mono text-xs px-3 py-1 border border-[var(--border)] opacity-60">
                  {tag}
                </span>
              ))}
            </div>
          )}
          <div className="flex items-center gap-4">
            {project.slug?.current && (
              <Link
                href={`/projects/${project.slug.current}`}
                className="self-start font-mono text-xs tracking-widest uppercase border border-[var(--fg)] px-6 py-3 hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors"
              >
                View Project →
              </Link>
            )}
            <a href="#projects" className="font-mono text-xs tracking-widest uppercase opacity-50 hover:opacity-100 transition-opacity">
              All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
