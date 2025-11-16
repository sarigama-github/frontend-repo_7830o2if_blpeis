import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      company: form.get('company') || undefined,
      phone: form.get('phone') || undefined,
      service: form.get('service'),
      message: form.get('message') || undefined,
      budget: form.get('budget') || undefined,
      timeframe: form.get('timeframe') || undefined,
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/inquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to send')
      setStatus({ type: 'success', message: 'Thanks! We will reach out shortly.' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ type: 'error', message: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Get a custom proposal</h2>
            <p className="mt-2 text-gray-600">Tell us about your goals and we’ll come back with a tailored plan within 24 hours.</p>
            <ul className="mt-6 space-y-3 text-sm text-gray-600">
              <li>• Dedicated team matched to your domain</li>
              <li>• Transparent pricing with flexible ramp</li>
              <li>• Security-first: SOC2-ready controls</li>
            </ul>
          </div>
          <form onSubmit={onSubmit} className="bg-white rounded-xl border p-6 shadow-sm grid gap-4">
            {status && (
              <div className={`${status.type === 'success' ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'} p-3 rounded-md text-sm`}>
                {status.message}
              </div>
            )}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input name="name" required className="mt-1 w-full rounded-md border-gray-300 focus:ring-blue-600 focus:border-blue-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-md border-gray-300 focus:ring-blue-600 focus:border-blue-600" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Company</label>
                <input name="company" className="mt-1 w-full rounded-md border-gray-300 focus:ring-blue-600 focus:border-blue-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input name="phone" className="mt-1 w-full rounded-md border-gray-300 focus:ring-blue-600 focus:border-blue-600" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Service</label>
              <select name="service" required className="mt-1 w-full rounded-md border-gray-300 focus:ring-blue-600 focus:border-blue-600">
                <option>Sales</option>
                <option>Technical Support</option>
                <option>Operations</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea name="message" rows="4" className="mt-1 w-full rounded-md border-gray-300 focus:ring-blue-600 focus:border-blue-600" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Budget</label>
                <input name="budget" className="mt-1 w-full rounded-md border-gray-300 focus:ring-blue-600 focus:border-blue-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Timeframe</label>
                <input name="timeframe" className="mt-1 w-full rounded-md border-gray-300 focus:ring-blue-600 focus:border-blue-600" />
              </div>
            </div>
            <button disabled={loading} className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50">
              {loading ? 'Sending…' : 'Request proposal'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
