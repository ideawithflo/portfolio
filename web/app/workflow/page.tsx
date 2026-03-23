import { client, urlFor } from '@/lib/sanity'
import Link from 'next/link'
import Image from 'next/image'
import { unstable_noStore as noStore } from 'next/cache'

async function getPosts() {
  noStore()
  try {
    return await client.fetch(`
      *[_type == "post"] | order(publishedAt desc) {
        _id, title, slug, category, publishedAt,
        coverImage, "videoUrl": video.asset->url,
        description
      }
    `)
  } catch { return [] }
}

const CATEGORY_LABELS: Record<string, string> = {
  workflow: 'Workflow',
  process: 'Process',
  bts: 'Behind the Scenes',
  insight: 'Insight',
}

export default async function WorkflowPage() {
  const posts = await getPosts()

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg)] border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-mono text-xs tracking-widest uppercase opacity-100 hover:opacity-100 transition-opacity">← Back</Link>
          <span className="font-mono text-xs opacity-100 tracking-widest uppercase">Workflow</span>
        </div>
      </div>

      <div className="pt-32 pb-24 px-6 max-w-6xl mx-auto">
        <p className="font-mono text-xs tracking-widest uppercase opacity-100 mb-4">Process & Insights</p>
        <h1 className="text-5xl md:text-7xl font-light leading-none mb-16">Workflow.</h1>

        {posts.length === 0 ? (
          <div className="border border-dashed border-[var(--border)] p-16 text-center">
            <p className="font-mono text-xs opacity-100 mb-2">No posts yet</p>
            <p className="font-mono text-xs opacity-100">Add videos in Sanity Studio → Workflow / Blog</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post: any) => (
              <Link key={post._id} href={`/workflow/${post.slug?.current}`} className="group block">
                {/* Thumbnail / Video Preview */}
                <div className="aspect-[9/16] bg-[var(--card)] relative overflow-hidden mb-4">
                  {post.videoUrl ? (
                    <video
                      src={post.videoUrl}
                      className="w-full h-full object-cover"
                      muted
                      playsInline
                      preload="metadata"
                    />
                  ) : post.coverImage ? (
                    <Image
                      src={urlFor(post.coverImage).width(400).height(700).url()}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center opacity-100">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <polygon points="5 3 19 12 5 21 5 3"/>
                      </svg>
                    </div>
                  )}
                  {/* Play icon overlay */}
                  {post.videoUrl && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                      <div className="w-12 h-12 border border-white/60 rounded-full flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                          <polygon points="5 3 19 12 5 21 5 3"/>
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                {/* Info */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-light text-lg group-hover:opacity-100 transition-opacity leading-snug">{post.title}</h3>
                    {post.category && (
                      <p className="font-mono text-xs tracking-widest uppercase opacity-100 mt-1">
                        {CATEGORY_LABELS[post.category] || post.category}
                      </p>
                    )}
                  </div>
                  {post.publishedAt && (
                    <span className="font-mono text-xs opacity-100 mt-1 shrink-0 ml-2">
                      {new Date(post.publishedAt).getFullYear()}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <footer className="border-t border-[var(--border)] px-6 py-8">
        <div className="max-w-6xl mx-auto flex gap-6">
          <Link href="/impressum" className="font-mono text-xs opacity-100 hover:opacity-100 transition-opacity">Impressum</Link>
          <Link href="/datenschutz" className="font-mono text-xs opacity-100 hover:opacity-100 transition-opacity">Datenschutz</Link>
          <Link href="/agb" className="font-mono text-xs opacity-100 hover:opacity-100 transition-opacity">AGB</Link>
        </div>
      </footer>
    </div>
  )
}
