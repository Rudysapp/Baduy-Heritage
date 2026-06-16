import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

const tripOptions = [
  'Baduy Luar Discovery (2H1M)',
  'Baduy Dalam Expedition (3H2M)',
  'Sunda & Baduy Cultural Tour (4H3M)',
  'Paket Custom (Hubungi Kami)',
  'Hanya Ingin Bertanya',
]

function ContactForm() {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    phone: '',
    trip: '',
    participants: '',
    date: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await fetch('/contact-form.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...fields }),
    })
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-6">🌿</div>
        <h3 className="font-display text-3xl text-forest-800 mb-4">Terima Kasih!</h3>
        <p className="text-earth-600 font-body max-w-md mx-auto">
          Pesan Anda telah kami terima. Tim kami akan menghubungi Anda dalam 1×24 jam melalui email atau WhatsApp.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="form-name" value="contact" />
      {/* Honeypot */}
      <div style={{ display: 'none' }}>
        <input type="text" name="bot-field" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-body font-semibold text-forest-800 mb-1.5">Nama Lengkap *</label>
          <input
            type="text"
            name="name"
            value={fields.name}
            onChange={handleChange}
            required
            placeholder="Masukkan nama Anda"
            className="w-full px-4 py-2.5 border border-earth-300 rounded-lg bg-earth-50 text-earth-800 font-body text-sm focus:outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-200 transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-body font-semibold text-forest-800 mb-1.5">Email *</label>
          <input
            type="email"
            name="email"
            value={fields.email}
            onChange={handleChange}
            required
            placeholder="email@contoh.com"
            className="w-full px-4 py-2.5 border border-earth-300 rounded-lg bg-earth-50 text-earth-800 font-body text-sm focus:outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-200 transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-body font-semibold text-forest-800 mb-1.5">No. WhatsApp</label>
          <input
            type="tel"
            name="phone"
            value={fields.phone}
            onChange={handleChange}
            placeholder="+62 812-xxxx-xxxx"
            className="w-full px-4 py-2.5 border border-earth-300 rounded-lg bg-earth-50 text-earth-800 font-body text-sm focus:outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-200 transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-body font-semibold text-forest-800 mb-1.5">Pilih Paket Trip</label>
          <select
            name="trip"
            value={fields.trip}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-earth-300 rounded-lg bg-earth-50 text-earth-800 font-body text-sm focus:outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-200 transition-colors"
          >
            <option value="">-- Pilih paket --</option>
            {tripOptions.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-body font-semibold text-forest-800 mb-1.5">Jumlah Peserta</label>
          <input
            type="number"
            name="participants"
            value={fields.participants}
            onChange={handleChange}
            min="1"
            placeholder="e.g. 4"
            className="w-full px-4 py-2.5 border border-earth-300 rounded-lg bg-earth-50 text-earth-800 font-body text-sm focus:outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-200 transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-body font-semibold text-forest-800 mb-1.5">Tanggal Rencana</label>
          <input
            type="date"
            name="date"
            value={fields.date}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-earth-300 rounded-lg bg-earth-50 text-earth-800 font-body text-sm focus:outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-200 transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-body font-semibold text-forest-800 mb-1.5">Pesan / Pertanyaan</label>
        <textarea
          name="message"
          value={fields.message}
          onChange={handleChange}
          rows={5}
          placeholder="Ceritakan kebutuhan perjalanan Anda, pertanyaan khusus, atau kebutuhan aksesibilitas..."
          className="w-full px-4 py-2.5 border border-earth-300 rounded-lg bg-earth-50 text-earth-800 font-body text-sm focus:outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-200 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 bg-forest-700 hover:bg-forest-600 disabled:bg-earth-400 text-earth-100 font-body font-bold rounded-lg transition-colors tracking-wide"
      >
        {loading ? 'Mengirim...' : 'Kirim Pesan & Daftar Trip'}
      </button>
      <p className="text-xs text-earth-500 text-center font-body">
        Kami menghargai privasi Anda. Data tidak akan disebarkan kepada pihak ketiga.
      </p>
    </form>
  )
}

function ContactPage() {
  const info = [
    { icon: '📍', label: 'Alamat', value: 'Desa Kanekes, Leuwidamar, Lebak, Banten 42365' },
    { icon: '📧', label: 'Email', value: 'info@baduyheritage.id' },
    { icon: '📱', label: 'WhatsApp', value: '+62 812-3456-7890' },
    { icon: '⏰', label: 'Jam Respons', value: 'Senin–Sabtu, 08.00–20.00 WIB' },
  ]

  return (
    <div>
      <div className="bg-forest-800 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs tracking-[0.2em] uppercase text-earth-400 font-body">Pendaftaran & Pertanyaan</span>
          <h1 className="font-display text-5xl text-earth-100 mt-2 mb-4">Hubungi Kami</h1>
          <p className="text-earth-300 font-body max-w-xl">
            Siap merencanakan perjalanan ke Baduy? Kirimkan pertanyaan atau daftarkan diri Anda untuk open trip berikutnya.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-1">
            <h2 className="font-display text-2xl text-forest-800 mb-6">Informasi Kontak</h2>
            <div className="space-y-5">
              {info.map((item) => (
                <div key={item.label} className="flex gap-4">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <div className="text-xs text-earth-500 uppercase tracking-widest font-body mb-0.5">{item.label}</div>
                    <div className="text-earth-800 font-body text-sm">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 bg-earth-100 rounded-xl border border-earth-200">
              <h3 className="font-display text-forest-800 font-semibold mb-2">Panduan Persiapan</h3>
              <ul className="space-y-2 text-sm text-earth-700 font-body">
                {[
                  'Bawa pakaian kasual dan nyaman',
                  'Siapkan fisik untuk treking ringan–sedang',
                  'Hormati adat: tidak memotret tanpa izin',
                  'Tidak membawa plastik sekali pakai',
                  'DP 50% untuk konfirmasi booking',
                ].map((tip) => (
                  <li key={tip} className="flex gap-2">
                    <span className="text-forest-600 flex-shrink-0">✓</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-earth-200 shadow-sm p-8">
            <h2 className="font-display text-2xl text-forest-800 mb-6">Form Pendaftaran & Pertanyaan</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
