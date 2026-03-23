import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity'

interface Project {
  _id: string
  title: string
  category: string
  year: number
  slug: { current: string }
  coverImage?: any
}

export function ProjectCard({ project }: { project: Project }) {
  const href = project.slug?.current ? `/projects/${project.slug.current}` : '#'
  return (
    <Link href={href} className="group cursor-pointer block">
      {/* Image */}
      <div className="aspect-[4/3] bg-[var(--card)] mb-4 overflow-hidden relative">
        {project.coverImage ? (
          <Image
            src={urlFor(project.coverImage).width(600).height(450).url()}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center opacity-100">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
          </div>
        )}
        <div className="absolute inset-0 bg-[var(--fg)] opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
      </div>
      {/* Info */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-light text-lg group-hover:opacity-100 transition-opacity">
            {project.title}
          </h3>
          <p className="font-mono text-xs tracking-widest uppercase opacity-100 mt-1">
            {project.category}
          </p>
        </div>
        <span className="font-mono text-xs opacity-100 mt-1">{project.year}</span>
      </div>
    </Link>
  )
}
