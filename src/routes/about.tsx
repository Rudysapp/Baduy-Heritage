import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

const timeline = [
  { year: '~400 SM', event: 'Leluhur Baduy dipercaya telah menghuni wilayah Kendeng jauh sebelum era modern' },
  { year: 'Abad 15', event: 'Kerajaan Sunda runtuh, Suku Baduy mengasingkan diri ke pedalaman untuk menjaga adat' },
  { year: '1809', event: 'Pemerintah Belanda pertama kali mendokumentasikan keberadaan Suku Baduy' },
  { year: '1990', event: 'Pemerintah Indonesia mengakui wilayah adat Baduy seluas 5.101 hektar' },
  { year: '2020', event: 'UNESCO merekomendasikan pengetahuan adat Baduy sebagai warisan budaya tak benda' },
]

const values = [
  { icon: '🌿', title: 'Pikukuh Karuhun', desc: 'Aturan leluhur yang harus dipatuhi. Setiap aspek kehidupan diatur oleh hukum adat yang tidak boleh dilanggar.' },
  { icon: '🏔️', title: 'Ngukus Ngawalu', desc: 'Menjaga dan merawat alam. Tanah, air, dan hutan adalah titipan leluhur yang wajib dijaga.' },
  { icon: '🤝', title: 'Gotong Royong', desc: 'Kehidupan komunal yang kuat. Setiap pekerjaan dilakukan bersama-sama tanpa pamrih.' },
  { icon: '🚫', title: 'Larangan Teknologi', desc: 'Penolakan terhadap teknologi modern sebagai bentuk perlindungan identitas budaya dan alam.' },
]

function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-forest-800 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs tracking-[0.2em] uppercase text-earth-400 font-body">Mengenal Lebih Dekat</span>
          <h1 className="font-display text-5xl text-earth-100 mt-2 mb-6">Tentang Baduy Heritage</h1>
          <p className="text-earth-300 font-body text-lg max-w-2xl leading-relaxed">
            Kami hadir untuk menjembatani dunia luar dengan kekayaan budaya Suku Baduy — menjaga warisan tetap hidup tanpa mengorbankan keasliannya.
          </p>
        </div>
      </div>

      {/* About the tribe */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs tracking-[0.2em] uppercase text-earth-600 font-body">Siapa Mereka?</span>
            <h2 className="font-display text-4xl text-forest-800 mt-2 mb-6">Suku Baduy: Penjaga Alam Kendeng</h2>
            <div className="space-y-4 text-earth-700 font-serif text-lg leading-relaxed">
              <p>
                Suku Baduy atau Urang Kanekes adalah masyarakat adat yang menghuni wilayah pegunungan Kendeng di Kabupaten Lebak, Banten. Dengan jumlah sekitar 26.000 jiwa, mereka hidup dalam sistem kepercayaan Sunda Wiwitan — agama asli yang menghormati keseimbangan antara manusia, alam, dan leluhur.
              </p>
              <p>
                Terbagi menjadi dua kelompok besar: <strong className="text-forest-700">Baduy Dalam (Urang Tangtu)</strong> yang hidup sangat ketat mengikuti aturan adat, dan <strong className="text-forest-700">Baduy Luar (Urang Panamping)</strong> yang relatif lebih terbuka terhadap dunia luar namun tetap menjaga tradisi.
              </p>
              <p>
                Yang membuat Baduy Dalam begitu unik adalah larangan ketat terhadap teknologi modern: tidak boleh menggunakan kendaraan bermotor, listrik, alas kaki di wilayah adat, serta berbagai larangan lain yang menjadi penanda identitas budaya mereka.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {values.map((v) => (
              <div key={v.title} className="bg-earth-50 border border-earth-200 rounded-xl p-5">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-display text-forest-700 font-semibold text-sm mb-2">{v.title}</h3>
                <p className="text-earth-600 text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-earth-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-xs tracking-[0.2em] uppercase text-earth-600 font-body">Perjalanan Waktu</span>
            <h2 className="font-display text-4xl text-forest-800 mt-2">Sejarah Singkat Suku Baduy</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-earth-300" />
            <div className="space-y-8">
              {timeline.map((item) => (
                <div key={item.year} className="flex gap-6 pl-2">
                  <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-forest-700 border-2 border-forest-500 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-earth-300" />
                    </div>
                  </div>
                  <div className="pb-2">
                    <span className="font-display text-forest-600 font-semibold text-sm">{item.year}</span>
                    <p className="text-earth-700 text-sm mt-1 leading-relaxed font-body">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About the site */}
      <section className="py-20 max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-xs tracking-[0.2em] uppercase text-earth-600 font-body">Misi Kami</span>
          <h2 className="font-display text-4xl text-forest-800 mt-2">Mengapa Baduy Heritage?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Edukasi', icon: '📚', desc: 'Menyebarkan pengetahuan tentang budaya Baduy melalui artikel dan konten berkualitas kepada masyarakat luas.' },
            { title: 'Wisata Bertanggung Jawab', icon: '🧭', desc: 'Memfasilitasi perjalanan wisata yang menghormati adat istiadat dan tidak merusak ekosistem budaya Baduy.' },
            { title: 'Pemberdayaan Ekonomi', icon: '💚', desc: 'Mendukung pengrajin dan petani Baduy dengan menghubungkan mereka kepada pasar yang lebih luas.' },
          ].map((m) => (
            <div key={m.title} className="text-center p-6 bg-white rounded-xl border border-earth-200 shadow-sm">
              <div className="text-4xl mb-4">{m.icon}</div>
              <h3 className="font-display text-forest-700 font-semibold text-xl mb-3">{m.title}</h3>
              <p className="text-earth-600 text-sm leading-relaxed font-body">{m.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/contact"
            className="inline-block px-8 py-3.5 bg-forest-700 hover:bg-forest-600 text-earth-100 font-body font-bold rounded transition-colors tracking-wide"
          >
            Hubungi Kami
          </Link>
        </div>
      </section>
    </div>
  )
}
