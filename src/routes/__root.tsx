import { HeadContent, Link, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import { useState } from 'react'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Baduy Heritage — Penjaga Tradisi Di Tanah Banten' },
      { name: 'description', content: 'Mengenal budaya Suku Baduy di Banten, Indonesia. Cerita, panduan perjalanan, paket open trip, dan koleksi kerajinan tangan khas Baduy.' },
    ],
    links: [
      { rel: 'icon', href: '/favicon.ico' },
    ],
  }),
  shellComponent: RootDocument,
})

const navLinks = [
  { to: '/', label: 'Beranda' },
  { to: '/blog', label: 'Blog' },
  { to: '/trips', label: 'Open Trip' },
  { to: '/merchandise', label: 'Belanja' },
  { to: '/about', label: 'Tentang' },
  { to: '/contact', label: 'Kontak' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-forest-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-earth-300 flex items-center justify-center">
              <span className="text-forest-800 font-display font-bold text-lg">B</span>
            </div>
            <div className="leading-tight">
              <div className="text-earth-100 font-display font-semibold text-lg leading-none">Baduy Heritage</div>
              <div className="text-earth-400 text-xs tracking-widest uppercase">Penjaga Tradisi di tanah Banten</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="px-4 py-2 text-earth-200 hover:text-earth-100 hover:bg-forest-700 rounded text-sm font-body tracking-wide transition-colors"
                activeProps={{ className: 'px-4 py-2 text-earth-100 bg-forest-700 rounded text-sm font-body tracking-wide' }}
                activeOptions={{ exact: to === '/' }}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-3 px-5 py-2 bg-earth-400 hover:bg-earth-300 text-forest-900 rounded text-sm font-bold tracking-wide transition-colors"
            >
              Daftar Trip
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded text-earth-200 hover:bg-forest-700 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-0.5 bg-current mb-1" />
            <div className="w-5 h-0.5 bg-current mb-1" />
            <div className="w-5 h-0.5 bg-current" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-forest-900 border-t border-forest-700 px-4 py-3 space-y-1">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="block px-4 py-2 text-earth-200 hover:text-earth-100 hover:bg-forest-700 rounded text-sm"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block mt-2 px-4 py-2 bg-earth-400 text-forest-900 rounded text-sm font-bold text-center"
            onClick={() => setOpen(false)}
          >
            Daftar Trip
          </Link>
        </div>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-forest-900 text-earth-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-earth-300 flex items-center justify-center">
                <span className="text-forest-800 font-display font-bold text-lg">B</span>
              </div>
              <div>
                <div className="text-earth-100 font-display font-semibold text-xl">Baduy Heritage</div>
                <div className="text-earth-500 text-xs tracking-widest uppercase">Penjaga Tradisi Banten</div>
              </div>
            </div>
            <p className="text-earth-400 text-sm leading-relaxed max-w-xs">
              Platform pelestarian budaya Suku Baduy di Lebak, Banten. Kami hadir untuk mengenalkan kearifan lokal yang telah terjaga selama berabad-abad kepada dunia.
            </p>
          </div>

          <div>
            <h3 className="text-earth-200 font-display font-semibold mb-3 text-sm tracking-widest uppercase">Jelajahi</h3>
            <ul className="space-y-2">
              {[
                { to: '/blog', label: 'Blog Budaya' },
                { to: '/trips', label: 'Open Trip' },
                { to: '/merchandise', label: 'Belanja Kerajinan' },
                { to: '/about', label: 'Tentang Kami' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-earth-400 hover:text-earth-200 text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-earth-200 font-display font-semibold mb-3 text-sm tracking-widest uppercase">Kontak</h3>
            <ul className="space-y-2 text-sm text-earth-400">
              <li>Lebak, Banten, Indonesia</li>
              <li>baduyheritage@gmail.com</li>
              <li>+62 818 0706 8181</li>
            </ul>
            <div className="mt-4">
              <Link
                to="/contact"
                className="inline-block px-4 py-2 bg-earth-600 hover:bg-earth-500 text-earth-100 rounded text-sm transition-colors"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-forest-700 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-earth-500">
          <p>© 2025 Baduy Heritage. Semua hak dilindungi.</p>
          <p className="italic font-serif">Alam takambang jadi guru — alam terbentang menjadi guru</p>
        </div>
      </div>
    </footer>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-cream">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}
