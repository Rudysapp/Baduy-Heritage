import { createFileRoute, Link } from '@tanstack/react-router'
import { allPosts } from 'content-collections'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const tripPackages = [
  {
    name: 'Baduy Luar Discovery',
    duration: '2 Hari 1 Malam',
    price: 'Rp 450.000',
    desc: 'Jelajahi kehidupan warga Baduy Luar, menginap di rumah panggung, dan menikmati alam pegunungan Kendeng.',
    badge: 'Populer',
  },
  {
    name: 'Baduy Dalam Expedition',
    duration: '3 Hari 2 Malam',
    price: 'Rp 850.000',
    desc: 'Perjalanan mendalam memasuki wilayah Baduy Dalam yang sakral. Jalan kaki tanpa alas kaki mengikuti tradisi.',
    badge: 'Premium',
  },
  {
    name: 'Sunda & Baduy Cultural Tour',
    duration: '4 Hari 3 Malam',
    price: 'Rp 1.200.000',
    desc: 'Paket lengkap menjelajahi warisan budaya Sunda dan Baduy, termasuk workshop tenun dan kuliner tradisional.',
    badge: 'All-inclusive',
  },
]

const highlights = [
  { icon: '🏞️', title: 'Alam Asli', desc: 'Hutan dan pegunungan Kendeng yang terjaga keasliannya selama ribuan tahun' },
  { icon: '🧵', title: 'Kerajinan Tangan', desc: 'Tenun khas Baduy dengan motif warisan yang dibuat tanpa mesin' },
  { icon: '🌿', title: 'Kearifan Lokal', desc: 'Filosofi hidup selaras alam yang dipraktikkan turun-temurun' },
  { icon: '🎋', title: 'Arsitektur Tradisional', desc: 'Rumah panggung bambu yang dibangun tanpa paku sesuai adat' },
]

function HeroSection() {
  return (
    <section className="hero-pattern relative overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-forest-900/60 via-forest-800/30 to-forest-900/80" />

      {/* Decorative botanical SVG overlay */}
      <div className="absolute right-0 top-0 opacity-10 w-1/2 h-full" aria-hidden>
        <svg viewBox="0 0 400 600" className="w-full h-full" fill="currentColor">
          <path className="text-earth-300" d="M300 0 C250 100 350 150 300 250 C250 350 350 400 300 500 C280 550 260 580 240 600" stroke="currentColor" strokeWidth="2" fill="none" />
          <ellipse cx="280" cy="120" rx="60" ry="30" fill="currentColor" opacity="0.4" transform="rotate(-20 280 120)" />
          <ellipse cx="320" cy="220" rx="70" ry="35" fill="currentColor" opacity="0.3" transform="rotate(15 320 220)" />
          <ellipse cx="270" cy="340" rx="65" ry="32" fill="currentColor" opacity="0.4" transform="rotate(-10 270 340)" />
          <ellipse cx="330" cy="450" rx="75" ry="38" fill="currentColor" opacity="0.3" transform="rotate(20 330 450)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <span className="inline-block mb-4 px-3 py-1 bg-earth-600/40 text-earth-200 text-xs tracking-[0.2em] uppercase rounded-full border border-earth-500/30 font-body">
            Lebak, Banten — Indonesia
          </span>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-earth-100 leading-tight mb-6">
            Menelusuri <em className="text-earth-300 not-italic">Warisan</em><br />
            Suku Baduy
          </h1>
          <p className="text-earth-300 text-lg sm:text-xl leading-relaxed mb-8 font-body font-light max-w-xl">
            Di balik lebatnya hutan Kendeng, Suku Baduy hidup dalam harmoni bersama alam. Cerita, perjalanan, dan kebudayaan yang bertahan di tengah zaman modern.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/trips"
              className="px-7 py-3.5 bg-earth-400 hover:bg-earth-300 text-forest-900 font-bold rounded transition-colors font-body tracking-wide"
            >
              Daftar Open Trip
            </Link>
            <Link
              to="/blog"
              className="px-7 py-3.5 border border-earth-400 text-earth-200 hover:bg-earth-600/20 rounded transition-colors font-body tracking-wide"
            >
              Baca Cerita
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent" />
    </section>
  )
}

function HighlightsSection() {
  return (
    <section className="py-16 bg-earth-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {highlights.map((h) => (
            <div key={h.title} className="text-center p-6">
              <div className="text-4xl mb-3">{h.icon}</div>
              <h3 className="font-display font-semibold text-forest-700 text-lg mb-2">{h.title}</h3>
              <p className="text-earth-700 text-sm leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedPosts({ posts }: { posts: ReturnType<typeof allPosts>[number][] }) {
  const featured = posts.slice(0, 3)
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between mb-10">
        <div>
          <span className="text-xm tracking-[0.2em] uppercase text-earth-600 font-body">Artikel Terbaru</span>
          <h2 className="font-display text-4xl text-forest-800 mt-1">Tulisan Dari Tanah Kanekes</h2>
        </div>
        <Link to="/blog" className="text-sm text-forest-600 hover:text-forest-800 underline font-body transition-colors">
          Lihat semua →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featured.map((post, i) => (
          <Link key={post._meta.path} to={`/posts/${post.slug}`} className="group block">
            <article className={`bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-earth-200 h-full flex flex-col ${i === 0 ? 'md:col-span-1' : ''}`}>
              <div className="h-52 relative overflow-hidden">
  {post.image ? (
    <img
      src={post.image}
      alt={post.title}
      className="w-full h-full object-cover"
    />
  ) : (
    <div className="w-full h-full bg-gradient-to-br from-forest-700 via-earth-700 to-forest-900" />
  )}
  <div className="absolute inset-0 bg-black/20" />
  <div className="absolute bottom-3 left-3 flex flex-wrap gap-1">
    {post.categories.map((cat) => (
      <span key={cat} className="text-xs bg-earth-400/30 text-earth-100 px-2 py-0.5 rounded-full border border-white/20">
        {cat}
      </span>
    ))}
  </div>
</div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-xs text-earth-500 mb-2 font-body tracking-wide">{post.date}</p>
                <h3 className="font-display text-xl font-semibold text-forest-800 group-hover:text-forest-600 transition-colors mb-3 leading-snug">
                  {post.title}
                </h3>
                <p className="text-earth-700 text-sm leading-relaxed line-clamp-3 flex-1">{post.summary}</p>
                <span className="mt-4 text-sm text-forest-600 font-body group-hover:underline">Baca selengkapnya →</span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  )
}

function TripsTeaser() {
  return (
    <section className="py-20 bg-forest-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.2em] uppercase text-earth-400 font-body">Pengalaman Autentik</span>
          <h2 className="font-display text-4xl text-earth-100 mt-2">Paket Open Trip</h2>
          <p className="text-earth-400 mt-3 max-w-xl mx-auto font-body">
            Bergabunglah bersama komunitas petualang dan pencinta budaya untuk menjelajahi kehidupan Suku Baduy secara langsung.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {tripPackages.map((pkg) => (
            <div key={pkg.name} className="bg-forest-900/60 border border-forest-700 rounded-xl p-6 hover:border-earth-500 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display text-earth-100 text-xl font-semibold">{pkg.name}</h3>
                <span className="text-xs bg-earth-600/30 text-earth-300 px-2 py-0.5 rounded-full border border-earth-600/30 whitespace-nowrap ml-2">{pkg.badge}</span>
              </div>
              <p className="text-earth-400 text-xs mb-3 font-body tracking-wide">⏱ {pkg.duration}</p>
              <p className="text-earth-300 text-sm leading-relaxed mb-4 font-body">{pkg.desc}</p>
              <div className="flex items-center justify-between">
                <span className="font-display text-earth-200 text-lg font-semibold">{pkg.price}<span className="text-xs text-earth-500 font-body font-normal">/orang</span></span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/trips"
            className="inline-block px-8 py-3.5 bg-earth-400 hover:bg-earth-300 text-forest-900 font-bold rounded transition-colors font-body tracking-wide"
          >
            Lihat Semua Paket & Daftar
          </Link>
        </div>
      </div>
    </section>
  )
}

function MerchTeaser() {
  const items = [
    { name: 'Kain Tenun Baduy', type: 'Tekstil', price: 'Rp 180.000', color: 'from-earth-700 to-earth-900' },
    { name: 'Tas Koja Anyaman', type: 'Kerajinan', price: 'Rp 95.000', color: 'from-forest-700 to-forest-900' },
    { name: 'Gelang Manik Khas', type: 'Aksesori', price: 'Rp 35.000', color: 'from-earth-600 to-forest-800' },
    { name: 'Madu Hutan Baduy', type: 'Kuliner', price: 'Rp 75.000', color: 'from-earth-800 to-forest-700' },
  ]
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between mb-10">
        <div>
          <span className="text-xs tracking-[0.2em] uppercase text-earth-600 font-body">Kerajinan Autentik</span>
          <h2 className="font-display text-4xl text-forest-800 mt-1">Belanja Kerajinan Baduy</h2>
          <p className="text-earth-600 mt-2 max-w-md font-body text-sm">
            Setiap produk dibuat langsung oleh pengrajin Suku Baduy dan mendukung kesejahteraan mereka.
          </p>
        </div>
        <Link to="/merchandise" className="text-sm text-forest-600 hover:text-forest-800 underline font-body transition-colors">
          Lihat semua →
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item) => (
          <Link key={item.name} to="/merchandise" className="group block">
            <div className={`h-48 bg-gradient-to-br ${item.color} rounded-xl mb-3 flex items-end p-4 group-hover:opacity-90 transition-opacity`}>
              <span className="text-xs text-earth-200 bg-white/10 px-2 py-0.5 rounded-full">{item.type}</span>
            </div>
            <h4 className="font-display text-forest-800 font-semibold text-sm group-hover:text-forest-600 transition-colors">{item.name}</h4>
            <p className="text-earth-600 text-sm mt-0.5">{item.price}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

function QuoteSection() {
  return (
    <section className="py-16 bg-parchment">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="text-earth-400 text-4xl mb-4 font-display">"</div>
        <blockquote className="font-display text-2xl md:text-3xl text-forest-800 italic leading-relaxed mb-6">
          Lojor teu beunang dipotong, pondok teu beunang disambung.
        </blockquote>
        <p className="text-earth-600 font-body text-sm tracking-wide">
          Yang panjang tak boleh dipotong, yang pendek tak boleh disambung. — Falsafah Suku Baduy
        </p>
      </div>
    </section>
  )
}

function HomePage() {
  const posts = allPosts.sort((a, b) => (a.date > b.date ? -1 : 1))
  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <FeaturedPosts posts={posts} />
      <TripsTeaser />
      <MerchTeaser />
      <QuoteSection />
    </>
  )
}
