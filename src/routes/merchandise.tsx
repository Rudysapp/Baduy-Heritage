import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/merchandise')({
  component: MerchandisePage,
})

const categories = ['Semua', 'Tekstil', 'Kerajinan', 'Aksesori', 'Kuliner', 'Dekorasi']

const products = [
  {
    id: 1,
    name: 'Kain Tenun Baduy Hitam',
    category: 'Tekstil',
    price: 'Rp 180.000',
    desc: 'Kain tenun tradisional khas Baduy Luar berwarna hitam dengan motif garis halus. Dibuat menggunakan alat tenun tradisional.',
    badge: 'Terlaris',
    color: 'from-gray-800 to-gray-950',
  },
  {
    id: 2,
    name: 'Kain Tenun Biru Indigo',
    category: 'Tekstil',
    price: 'Rp 210.000',
    desc: 'Tenun Baduy pewarnaan indigo alami dari tanaman tarum. Motif khas yang hanya ditemukan di wilayah Baduy Dalam.',
    color: 'from-blue-900 to-indigo-950',
  },
  {
    id: 3,
    name: 'Tas Koja Anyaman',
    category: 'Kerajinan',
    price: 'Rp 95.000',
    desc: 'Tas tradisional pria Baduy yang dianyam dari kulit kayu. Fungsional dan kuat sebagai tas jinjing atau backpack kecil.',
    badge: 'Populer',
    color: 'from-amber-800 to-amber-950',
  },
  {
    id: 4,
    name: 'Bakul Nasi Bambu',
    category: 'Kerajinan',
    price: 'Rp 65.000',
    desc: 'Wadah nasi tradisional dari anyaman bambu pilihan. Menjaga nasi tetap lembap dan hangat secara alami.',
    color: 'from-yellow-700 to-amber-900',
  },
  {
    id: 5,
    name: 'Gelang Manik Baduy',
    category: 'Aksesori',
    price: 'Rp 35.000',
    desc: 'Gelang manik warna-warni hasil karya pengrajin Baduy. Tersedia dalam berbagai pola dan kombinasi warna.',
    color: 'from-rose-700 to-purple-900',
  },
  {
    id: 6,
    name: 'Kalung Biji Aren',
    category: 'Aksesori',
    price: 'Rp 55.000',
    desc: 'Kalung etnik dari biji aren pilihan yang dirangkai dengan benang kuat. Cocok sebagai aksesoris kasual sehari-hari.',
    color: 'from-stone-700 to-stone-900',
  },
  {
    id: 7,
    name: 'Madu Hutan Baduy (250ml)',
    category: 'Kuliner',
    price: 'Rp 75.000',
    desc: 'Madu asli dari lebah liar hutan Kendeng. Dipanen secara tradisional oleh warga Baduy tanpa campuran apapun.',
    badge: 'Organik',
    color: 'from-amber-600 to-yellow-800',
  },
  {
    id: 8,
    name: 'Gula Aren Baduy (500g)',
    category: 'Kuliner',
    price: 'Rp 45.000',
    desc: 'Gula aren murni hasil produksi pengrajin Baduy. Rasa karamel alami yang kaya tanpa bahan pengawet.',
    color: 'from-amber-800 to-red-900',
  },
  {
    id: 9,
    name: 'Miniatur Rumah Baduy',
    category: 'Dekorasi',
    price: 'Rp 135.000',
    desc: 'Replika miniatur rumah panggung khas Baduy dari bambu dan ijuk. Ukuran 25×20cm, cocok sebagai dekorasi meja.',
    color: 'from-green-800 to-earth-900',
  },
  {
    id: 10,
    name: 'Ukiran Motif Baduy',
    category: 'Dekorasi',
    price: 'Rp 85.000',
    desc: 'Panel dekorasi kayu dengan ukiran motif tradisional Baduy. Tersedia berbagai ukuran (A5–A3).',
    color: 'from-earth-700 to-earth-900',
  },
  {
    id: 11,
    name: 'Paket Hamper Baduy',
    category: 'Kuliner',
    price: 'Rp 250.000',
    desc: 'Paket hamper berisi madu hutan, gula aren, kopi luwak hutan, dan keripik singkong tradisional dalam kemasan batik.',
    badge: 'Spesial',
    color: 'from-forest-700 to-earth-900',
  },
  {
    id: 12,
    name: 'Set Tenun & Manik',
    category: 'Tekstil',
    price: 'Rp 285.000',
    desc: 'Bundle kain tenun hitam + gelang manik 3 buah. Harga lebih hemat dibanding beli terpisah.',
    badge: 'Bundle',
    color: 'from-slate-700 to-gray-900',
  },
]

function MerchandisePage() {
  return (
    <div>
      <div className="bg-forest-800 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs tracking-[0.2em] uppercase text-earth-400 font-body">Kerajinan Autentik</span>
          <h1 className="font-display text-5xl text-earth-100 mt-2 mb-4">Belanja Kerajinan Baduy</h1>
          <p className="text-earth-300 font-body max-w-xl">
            Setiap produk dibuat langsung oleh pengrajin Suku Baduy. Dengan berbelanja, Anda berkontribusi pada pelestarian budaya dan kesejahteraan masyarakat adat.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={`px-4 py-1.5 rounded-full text-sm font-body border transition-colors ${
                i === 0
                  ? 'bg-forest-700 text-earth-100 border-forest-700'
                  : 'border-earth-300 text-earth-600 hover:border-forest-500 hover:text-forest-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <div key={product.id} className="group bg-white border border-earth-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className={`h-40 bg-gradient-to-br ${product.color} flex items-start p-3`}>
                {product.badge && (
                  <span className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full border border-white/20">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-4">
                <span className="text-xs text-earth-500 font-body uppercase tracking-wide">{product.category}</span>
                <h3 className="font-display text-forest-800 font-semibold text-sm mt-1 mb-2 leading-snug group-hover:text-forest-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-earth-600 text-xs leading-relaxed line-clamp-2 mb-3">{product.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-display text-forest-700 font-semibold text-sm">{product.price}</span>
                  <Link
                    to="/contact"
                    className="text-xs px-3 py-1.5 bg-earth-100 hover:bg-earth-200 text-earth-700 rounded-lg font-body transition-colors"
                  >
                    Pesan
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info banner */}
        <div className="mt-14 bg-earth-100 border border-earth-300 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { icon: '🌿', title: 'Produk Asli', desc: 'Semua produk 100% dibuat langsung oleh pengrajin Baduy tanpa perantara pabrik' },
              { icon: '🚚', title: 'Pengiriman ke Seluruh Indonesia', desc: 'Dikemas dengan bahan ramah lingkungan dan dikirim via JNE/J&T ke seluruh wilayah' },
              { icon: '💚', title: 'Manfaat Langsung', desc: 'Minimal 70% harga produk langsung diterima oleh pengrajin Suku Baduy' },
            ].map((item) => (
              <div key={item.title}>
                <div className="text-3xl mb-2">{item.icon}</div>
                <h4 className="font-display text-forest-700 font-semibold mb-1">{item.title}</h4>
                <p className="text-earth-600 text-sm font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-earth-600 font-body text-sm mb-4">Ingin memesan dalam jumlah besar atau butuh produk custom?</p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-forest-700 hover:bg-forest-600 text-earth-100 font-body font-bold rounded-lg transition-colors"
          >
            Hubungi Kami untuk Pemesanan
          </Link>
        </div>
      </div>
    </div>
  )
}
