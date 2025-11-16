import { Headset, Rocket, Cog, CheckCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Services() {
  const [services, setServices] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/services`)
        const data = await res.json()
        setServices(data.services || [])
      } catch (e) {
        // fallback if backend isn't reachable
        setServices([
          { key: 'sales', title: 'Sales Outsourcing', tagline: 'Pipeline, meetings, and revenue on autopilot', points: ['B2B/B2C outbound + inbound','SDR teams with SLA-driven KPIs','Lead qualification and appointment setting','24/7 coverage with multilingual reps'] },
          { key: 'technical', title: 'Technical Support', tagline: 'Delight customers with fast, expert help', points: ['Tier 1–3 support, L1 triage to L3 escalation','Omnichannel: chat, email, voice, socials','Knowledge base build-out and automation','CSAT, FRT, AHT, and QA tracked transparently'] },
          { key: 'operations', title: 'Operations Outsourcing', tagline: 'Scale back office with precision and speed', points: ['Data entry, content moderation, KYC','Finance ops: AR/AP, reconciliation','E-commerce: listings, order management','Custom workflows and SOP design'] },
        ])
      }
    }
    load()
  }, [])

  const iconFor = (key) => {
    switch (key) {
      case 'sales':
        return <Rocket className="h-6 w-6 text-blue-600" />
      case 'technical':
        return <Headset className="h-6 w-6 text-indigo-600" />
      default:
        return <Cog className="h-6 w-6 text-sky-600" />
    }
  }

  return (
    <section id="services" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">What we do</h2>
        <p className="mt-2 text-gray-600">Specialized teams tailored to your growth stage.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.key} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3">
                {iconFor(s.key)}
                <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
              </div>
              <p className="mt-2 text-sm text-gray-600">{s.tagline}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                {s.points?.map((p, i) => (
                  <li key={i} className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5" /> <span>{p}</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
