import { client, urlFor } from '@/lib/sanity'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const posts = await client.fetch(`*[_type == "post"]{ "slug": slug.current }`)
  return posts.map((p: any) => ({ slug: p.slug }))
}

async function getPost(slug: string) {
  return client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id, title, slug, category, publishedAt,
      coverImage, "videoUrl": video.asset->url, description
    }
  `, { slug })
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
  if (!post) notFound()

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      <div className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg)] border-b border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/workflow" className="font-mono text-xs tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity">← Workflow</Link>
        </div>
      </div>

      <div className="pt-16">
        {/* Video */}
        {post.videoUrl && (
          <div className="max-w-md mx-auto px-6 pt-16">
            <video
              src={post.videoUrl}
              controls
              playsInline
              className="w-full aspect-[9/16] object-cover bg-[var(--card)]"
            />
          </div>
        )}

        <div className="max-w-2xl mx-auto px-6 py-16">
          <p className="font-mono text-xs tracking-widest uppercase opacity-40 mb-4">
            {post.category} · {post.publishedAt && new Date(post.publishedAt).toLocaleDateString('de-AT', {day: '2-digit', month: 'long', year: 'numeric'})}
          </p>
          <h1 className="text-4xl md:text-5xl font-light leading-tight mb-10">{post.title}</h1>
          {post.description && (
            <div className="flex flex-col gap-4">
              {post.description.map((block: any, i: number) => (
                <p key={i} className="font-light opacity-60 leading-relaxed text-lg">
                  {block.children?.map((c: any) => c.text).join('')}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
