import { MetadataRoute } from 'next'
import { client } from '@/lib/sanity'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await client.fetch(
    `*[_type == "project"]{ "slug": slug.current, _updatedAt }`
  )

  const projectUrls = projects.map((p: any) => ({
    url: `https://ideawithflo.com/projects/${p.slug}`,
    lastModified: new Date(p._updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: 'https://ideawithflo.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...projectUrls,
  ]
}
