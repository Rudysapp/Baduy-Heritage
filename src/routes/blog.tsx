import { createFileRoute, Link } from '@tanstack/react-router'
import { allPosts } from 'content-collections'

export const Route = createFileRoute('/blog')({
  component: BlogPage,
})

const categoryColors: Record<string, string> = {
  Budaya: 'bg-forest-100 text-forest-700',
  Perjalanan: 'bg-earth-100 text-earth-700',
  Tradisi: 'bg-amber-100 text-amber-700',
  Kuliner: 'bg-orange-100 text-orange-700',
  default: 'bg-earth-100 text-earth-700',
}

function BlogPage() {
  const posts = allPosts.sort((a, b) => (a.date > b.date ? -1 : 1))
  const allCategories = Array.from(new Set(posts.flatMap((p) => p.categories)))

  return (
    <div>
      {/* Header banner */}
      <div className="bg-forest-800 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs tracking-[0.2em] uppercase text-earth-400 font-body">Cerita & Inspirasi</span>
          <h1 className="font-display text-5xl text-earth-100 mt-2 mb-4">Blog Budaya</h1>
          <p className="text-earth-300 font-body max-w-xl">
            Kisah tentang tradisi, perjalanan, dan kehidupan Suku Baduy yang telah terjaga selama berabad-abad di pedalaman Banten.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          <span className="px-4 py-1.5 bg-forest-700 text-earth-100 rounded-full text-sm font-body">Semua</span>
          {allCategories.map((cat) => (
            <span
              key={cat}
              className={`px-4 py-1.5 rounded-full text-sm font-body cursor-pointer hover:bg-forest-100 hover:text-forest-700 border border-earth-200 ${categoryColors[cat] ?? categoryColors.default}`}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Post grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post._meta.path} to={`/posts/${post.slug}`} className="group block">
              <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-earth-200 h-full flex flex-col">
                <div className="h-48 bg-gradient-to-br from-forest-700 via-earth-700 to-forest-900 flex items-end p-4">
                  <div className="flex flex-wrap gap-1">
                    {post.categories.map((cat) => (
                      <span key={cat} className="text-xs bg-white/15 text-earth-100 px-2 py-0.5 rounded-full border border-white/10">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-xs text-earth-500 mb-2 font-body">{post.date}</p>
                  <h2 className="font-display text-xl font-semibold text-forest-800 group-hover:text-forest-600 transition-colors mb-2 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-earth-600 text-sm leading-relaxed line-clamp-3 flex-1">{post.summary}</p>
                  <span className="mt-4 text-sm text-forest-600 font-body group-hover:underline">Baca selengkapnya →</span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <p className="text-center text-earth-500 py-20 font-body">Belum ada artikel tersedia.</p>
        )}
      </div>
    </div>
  )
}
