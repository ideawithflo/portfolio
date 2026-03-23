import { client, urlFor } from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const projects = await client.fetch(`*[_type == "project"]{ "slug": slug.current }`)
  return projects.map((p: any) => ({ slug: p.slug }))
}

async function getProject(slug: string) {
  return client.fetch(`
    *[_type == "project" && slug.current == $slug][0] {
      _id, title, slug, category, year, featured,
      coverImage, images[]{image, orientation}, description,
      tags, "modelUrl": modelFile.asset->url
    }
  `, { slug })
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug)
  if (!project) return {}
  return {
    title: project.title,
    description: `${project.title} — ${project.category}, ${project.year}. Industrial design project by Florian Huber, Vienna.`,
    openGraph: {
      title: `${project.title} | Florian Huber`,
      description: `${project.category} · ${project.year}`,
      images: project.coverImage
        ? [{ url: `https://cdn.sanity.io/images/m7bjlhok/production/${project.coverImage.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png')}` }]
        : [],
    },
  }
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug)
  if (!project) notFound()

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      {/* Back */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg)] border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/#projects" className="font-mono text-xs tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity">
            ← Back
          </Link>
          <span className="font-mono text-xs opacity-40">{project.category} · {project.year}</span>
        </div>
      </div>

      <div className="pt-16">
        {/* Hero image */}
        {project.coverImage && (
          <div className="w-full aspect-video relative overflow-hidden bg-[var(--card)]">
            <Image
              src={urlFor(project.coverImage).width(1400).height(800).url()}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="mb-12">
            <p className="font-mono text-xs tracking-widest uppercase opacity-40 mb-4">{project.category}</p>
            <h1 className="text-5xl md:text-7xl font-light leading-none tracking-tight mb-8">{project.title}</h1>
            <p className="font-mono text-xs opacity-30">{project.year}</p>
          </div>

          {/* Description */}
          {project.description && (
            <div className="prose prose-invert max-w-none mb-16">
              {project.description.map((block: any, i: number) => (
                <p key={i} className="text-lg font-light leading-relaxed opacity-70 mb-4">
                  {block.children?.map((c: any) => c.text).join('')}
                </p>
              ))}
            </div>
          )}

          {/* Tags */}
          {project.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-16">
              {project.tags.map((tag: string) => (
                <span key={tag} className="font-mono text-xs px-3 py-1.5 border border-[var(--border)] opacity-60">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Additional images — 1 column, orientation from CMS */}
          {project.images?.length > 0 && (
            <div className="flex flex-col gap-4">
              {project.images.map((item: any, i: number) => {
                const img = item.image || item
                if (!img || !img.asset) return null
                const orientation = item.orientation || 'landscape'
                const aspectClass =
                  orientation === 'portrait' ? 'aspect-[9/16]' :
                  orientation === 'square'   ? 'aspect-square' :
                                               'aspect-video'
                const imgW = orientation === 'portrait' ? 800  : 1400
                const imgH = orientation === 'portrait' ? 1422 : orientation === 'square' ? 800 : 800

                return (
                  <div key={i} className={`${aspectClass} relative overflow-hidden bg-[var(--card)] w-full`}>
                    <Image
                      src={urlFor(img).width(imgW).height(imgH).url()}
                      alt={`${project.title} ${i + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
