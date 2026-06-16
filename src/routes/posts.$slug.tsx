import { createFileRoute, Link } from '@tanstack/react-router'
import { marked } from 'marked'
import { allPosts } from 'content-collections'

export const Route = createFileRoute('/posts/$slug')({
  loader: async ({ params }) => {
    const post = allPosts.find((post) => post.slug === params.slug)
    if (!post) throw new Error('Post not found')
    return post
  },
  component: RouteComponent,
})

function RouteComponent() {
  const post = Route.useLoaderData()
  const allPostsSorted = allPosts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => (a.date > b.date ? -1 : 1))
    .slice(0, 3)

  return (
    <div>
      {/* Article header */}
      <div className="bg-gradient-to-br from-forest-900 to-earth-900 py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-5">
            {post.categories.map((cat) => (
              <span key={cat} className="text-xs bg-earth-400/20 text-earth-300 px-3 py-1 rounded-full border border-earth-500/20 font-body">
                {cat}
              </span>
            ))}
          </div>
          <h1 className="font-display text-4xl sm:text-5xl text-earth-100 leading-tight mb-5">{post.title}</h1>
          <p className="text-earth-300 text-lg font-serif italic mb-6">{post.summary}</p>
          <div className="flex items-center gap-4 text-earth-500 text-sm font-body">
            <span>📅 {post.date}</span>
            <span>·</span>
            <span>✍️ Tim Baduy Heritage</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-earth-500 font-body mb-10">
          <Link to="/" className="hover:text-forest-600 transition-colors">Beranda</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-forest-600 transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-earth-700">{post.title}</span>
        </nav>

        {/* Content */}
        <article
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: marked(post.content) as string }}
        />

        {/* Tags / categories */}
        <div className="mt-10 pt-8 border-t border-earth-200 flex flex-wrap gap-2">
          {post.categories.map((cat) => (
            <Link
              key={cat}
              to="/blog"
              className="text-sm bg-earth-100 text-earth-700 hover:bg-earth-200 px-4 py-1.5 rounded-full font-body transition-colors border border-earth-200"
            >
              #{cat}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 bg-forest-800 rounded-2xl p-8 text-center">
          <h3 className="font-display text-2xl text-earth-100 mb-3">Siap Merasakan Sendiri?</h3>
          <p className="text-earth-300 font-body text-sm mb-5">
            Daftarkan diri Anda untuk open trip ke tanah adat Baduy bersama komunitas kami.
          </p>
          <Link
            to="/trips"
            className="inline-block px-6 py-3 bg-earth-400 hover:bg-earth-300 text-forest-900 font-body font-bold rounded-lg transition-colors"
          >
            Lihat Paket Open Trip
          </Link>
        </div>

        {/* Related posts */}
        {allPostsSorted.length > 0 && (
          <div className="mt-14">
            <h3 className="font-display text-2xl text-forest-800 mb-6">Baca Juga</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {allPostsSorted.map((p) => (
                <Link key={p._meta.path} to={`/posts/${p.slug}`} className="group block">
                  <div className="bg-white border border-earth-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                    <div className="h-28 bg-gradient-to-br from-forest-700 to-earth-800" />
                    <div className="p-4">
                      <p className="text-xs text-earth-500 font-body mb-1">{p.date}</p>
                      <h4 className="font-display text-sm text-forest-800 group-hover:text-forest-600 transition-colors leading-snug">
                        {p.title}
                      </h4>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-10 text-center">
          <Link to="/blog" className="text-sm text-forest-600 hover:text-forest-800 font-body underline transition-colors">
            ← Kembali ke Blog
          </Link>
        </div>
      </div>
    </div>
  )
}
