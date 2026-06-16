import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/trips')({
  component: TripsPage,
})

const packages = [
  {
    id: 'luar-discovery',
    name: 'Baduy Luar Discovery',
    duration: '2 Hari 1 Malam',
    price: 'Rp 450.000',
    level: 'Pemula',
    groupSize: '5–15 orang',
    badge: 'Populer',
    badgeColor: 'bg-earth-500 text-earth-100',
    desc: 'Paket ideal untuk pertama kali mengenal Suku Baduy. Jelajahi kehidupan warga Baduy Luar, menginap di rumah panggung tradisional, dan menikmati keindahan alam pegunungan Kendeng.',
    includes: [
      'Pemandu lokal berpengalaman',
      'Menginap di rumah adat Baduy',
      'Makan 3× sehari (menu tradisional)',
      'Workshop tenun singkat',
      'Transportasi dari Rangkasbitung',
      'Asuransi perjalanan',
    ],
    itinerary: [
      { day: 'Hari 1', items: ['Kumpul di Rangkasbitung pukul 07.00', 'Perjalanan ke Desa Ciboleger', 'Jalan kaki menuju kampung Baduy Luar', 'Makan siang di alam terbuka', 'Check-in di rumah adat', 'Diskusi budaya dengan tetua kampung', 'Makan malam & istirahat'] },
      { day: 'Hari 2', items: ['Sarapan pagi tradisional', 'Jelajah sekitar kampung & pengrajin', 'Workshop singkat anyaman bambu', 'Kunjungi pasar tradisional', 'Perjalanan pulang ke Rangkasbitung'] },
    ],
  },
  {
    id: 'dalam-expedition',
    name: 'Baduy Dalam Expedition',
    duration: '3 Hari 2 Malam',
    price: 'Rp 850.000',
    level: 'Menengah',
    groupSize: '5–12 orang',
    badge: 'Premium',
    badgeColor: 'bg-forest-600 text-earth-100',
    desc: 'Perjalanan mendalam memasuki wilayah Baduy Dalam yang sakral. Jalan kaki tanpa alas kaki mengikuti tradisi, bertemu tetua adat, dan merasakan kemurnian hidup tanpa teknologi.',
    includes: [
      'Pemandu khusus Baduy Dalam bersertifikat',
      'Izin khusus masuk wilayah Baduy Dalam',
      'Menginap 2 malam di kampung adat',
      'Makan 5× menu autentik Baduy',
      'Sesi tanya-jawab dengan pemuka adat',
      'Transportasi & asuransi perjalanan',
    ],
    itinerary: [
      { day: 'Hari 1', items: ['Berangkat pukul 06.00 dari Rangkasbitung', 'Orientasi budaya sebelum masuk wilayah', 'Treking memasuki Baduy Luar', 'Makan siang, lanjut ke Baduy Dalam', 'Tiba di Cibeo/Cikartawana', 'Makan malam & diskusi adat'] },
      { day: 'Hari 2', items: ['Jelajah alam Baduy Dalam', 'Kunjungi sumber mata air sakral', 'Makan siang bersama warga', 'Sesi berbagi dengan tetua adat', 'Malam budaya: cerita rakyat Baduy'] },
      { day: 'Hari 3', items: ['Sarapan & persiapan pulang', 'Treking kembali ke Ciboleger', 'Singgah di pasar kerajinan', 'Perjalanan pulang ke Rangkasbitung'] },
    ],
  },
  {
    id: 'sunda-cultural',
    name: 'Sunda & Baduy Cultural Tour',
    duration: '4 Hari 3 Malam',
    price: 'Rp 1.200.000',
    level: 'Semua Tingkat',
    groupSize: '8–20 orang',
    badge: 'All-inclusive',
    badgeColor: 'bg-earth-700 text-earth-100',
    desc: 'Paket terlengkap yang menggabungkan wisata budaya Sunda dan Baduy. Termasuk workshop tenun, kuliner tradisional, pertunjukan seni, dan kunjungan ke berbagai kampung adat.',
    includes: [
      'Semua yang ada di paket Premium',
      'Workshop tenun 3 jam (bawa pulang hasil karya)',
      'Kelas memasak kuliner Sunda-Baduy',
      'Pertunjukan seni musik angklung',
      'Kunjungan museum budaya Banten',
      'Buku panduan budaya Baduy',
      'Transportasi premium AC',
    ],
    itinerary: [
      { day: 'Hari 1', items: ['Kumpul di Serang', 'Kunjungi Museum Banten Lama', 'Perjalanan ke Rangkasbitung', 'Makan malam & orientasi program'] },
      { day: 'Hari 2', items: ['Berangkat ke Ciboleger', 'Memasuki wilayah Baduy Luar', 'Workshop tenun bersama pengrajin', 'Menginap di kampung adat'] },
      { day: 'Hari 3', items: ['Ekspedisi ke Baduy Dalam', 'Sesi bersama pemuka adat', 'Kelas kuliner tradisional', 'Malam budaya & pertunjukan seni'] },
      { day: 'Hari 4', items: ['Jelajah pasar kerajinan', 'Belanja oleh-oleh langsung dari pengrajin', 'Makan siang perpisahan', 'Perjalanan pulang ke Serang/Jakarta'] },
    ],
  },
]

const faqs = [
  { q: 'Apakah saya harus berjalan kaki tanpa alas kaki?', a: 'Untuk Baduy Luar, alas kaki diperbolehkan. Untuk Baduy Dalam, Anda perlu melepas alas kaki sebagai bentuk menghormati adat istiadat mereka.' },
  { q: 'Berapa usia minimum peserta?', a: 'Minimal 12 tahun untuk Baduy Luar, 16 tahun untuk Baduy Dalam. Peserta di bawah 18 tahun wajib didampingi orang tua/wali.' },
  { q: 'Apakah tersedia fasilitas MCK?', a: 'Fasilitas MCK tersedia di Baduy Luar. Di Baduy Dalam, fasilitas sangat terbatas dan menggunakan sumber alam. Mohon persiapkan diri untuk kondisi tersebut.' },
  { q: 'Bagaimana cara pembayaran?', a: 'DP 50% saat konfirmasi booking melalui transfer bank. Pelunasan 7 hari sebelum keberangkatan. Pembatalan H-7 mendapat refund 50%.' },
  { q: 'Apakah boleh membawa kamera?', a: 'Kamera diperbolehkan di area Baduy Luar dengan izin subjek foto. Di Baduy Dalam, fotografi sangat dibatasi dan harus mengikuti panduan pemandu.' },
]

function TripsPage() {
  return (
    <div>
      <div className="bg-forest-800 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs tracking-[0.2em] uppercase text-earth-400 font-body">Wisata Bertanggung Jawab</span>
          <h1 className="font-display text-5xl text-earth-100 mt-2 mb-4">Paket Open Trip</h1>
          <p className="text-earth-300 font-body max-w-xl">
            Bergabunglah dalam perjalanan autentik ke tanah adat Baduy. Setiap kunjungan berkontribusi langsung pada kesejahteraan masyarakat setempat.
          </p>
        </div>
      </div>

      {/* Packages */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {packages.map((pkg, i) => (
            <div key={pkg.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-start ${i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Info */}
              <div className={`bg-white border border-earth-200 rounded-2xl p-8 shadow-sm ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className={`text-xs font-body px-2.5 py-1 rounded-full ${pkg.badgeColor}`}>{pkg.badge}</span>
                    <h2 className="font-display text-3xl text-forest-800 mt-2">{pkg.name}</h2>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 mb-4 text-sm font-body text-earth-600">
                  <span className="flex items-center gap-1.5">⏱ {pkg.duration}</span>
                  <span className="flex items-center gap-1.5">👥 {pkg.groupSize}</span>
                  <span className="flex items-center gap-1.5">🥾 Level: {pkg.level}</span>
                </div>
                <p className="text-earth-700 font-body leading-relaxed mb-5">{pkg.desc}</p>
                <h3 className="font-display text-forest-700 font-semibold mb-3">Sudah Termasuk:</h3>
                <ul className="space-y-1.5 mb-6">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-earth-700 font-body">
                      <span className="text-forest-600 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-4 border-t border-earth-200">
                  <div>
                    <div className="text-xs text-earth-500 font-body uppercase tracking-widest">Mulai dari</div>
                    <div className="font-display text-3xl text-forest-800 font-semibold">{pkg.price}<span className="text-sm text-earth-500 font-body font-normal">/orang</span></div>
                  </div>
                  <Link
                    to="/contact"
                    className="px-6 py-3 bg-forest-700 hover:bg-forest-600 text-earth-100 font-body font-bold rounded-lg transition-colors"
                  >
                    Daftar Sekarang
                  </Link>
                </div>
              </div>

              {/* Itinerary */}
              <div className={`${i % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <h3 className="font-display text-2xl text-forest-800 mb-4">Itinerari Perjalanan</h3>
                <div className="space-y-4">
                  {pkg.itinerary.map((day) => (
                    <div key={day.day} className="bg-earth-50 border border-earth-200 rounded-xl p-5">
                      <h4 className="font-display text-forest-700 font-semibold text-lg mb-3">{day.day}</h4>
                      <ul className="space-y-1.5">
                        {day.items.map((item) => (
                          <li key={item} className="flex gap-2 text-sm text-earth-700 font-body">
                            <span className="text-earth-400 flex-shrink-0 mt-0.5">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-earth-100">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-xs tracking-[0.2em] uppercase text-earth-600 font-body">Yang Sering Ditanyakan</span>
            <h2 className="font-display text-3xl text-forest-800 mt-2">FAQ Open Trip</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white border border-earth-200 rounded-xl p-5">
                <h3 className="font-display text-forest-800 font-semibold mb-2">{faq.q}</h3>
                <p className="text-earth-700 text-sm font-body leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/contact"
              className="inline-block px-8 py-3.5 bg-forest-700 hover:bg-forest-600 text-earth-100 font-body font-bold rounded-lg transition-colors tracking-wide"
            >
              Daftar Open Trip Sekarang
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
