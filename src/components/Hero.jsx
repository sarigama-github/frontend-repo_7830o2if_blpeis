export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-indigo-50 to-white" />
      <div className="absolute -top-32 -right-32 h-72 w-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-blue-600/10 text-blue-700 ring-1 ring-blue-600/20">Global BPO Partner</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">Scale your sales, support, and ops without the overhead</h1>
          <p className="mt-4 text-gray-600 leading-relaxed">We build dedicated teams that plug into your business in weeks, not months. Transparent KPIs, 24/7 coverage, and enterprise-grade quality at a startup pace.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="px-5 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">Get a proposal</a>
            <a href="#services" className="px-5 py-3 rounded-md bg-white ring-1 ring-gray-200 hover:bg-gray-50">Explore services</a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
            <div>
              <div className="font-semibold text-gray-900">24/7</div>
              Coverage
            </div>
            <div>
              <div className="font-semibold text-gray-900">15+</div>
              Markets
            </div>
            <div>
              <div className="font-semibold text-gray-900">98%+</div>
              CSAT
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-1 shadow-xl">
            <div className="h-full w-full rounded-2xl bg-white grid grid-cols-2">
              <div className="p-6 border-r">
                <h3 className="font-semibold text-gray-900">Sales Desk</h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-600 list-disc pl-4">
                  <li>Outbound SDRs</li>
                  <li>Inbound conversions</li>
                  <li>Lead qualification</li>
                </ul>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900">Support Desk</h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-600 list-disc pl-4">
                  <li>Tier 1-3 support</li>
                  <li>Omnichannel</li>
                  <li>QA & reporting</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow p-4 ring-1 ring-black/5">
            <div className="text-xs text-gray-500">Avg. ramp time</div>
            <div className="text-lg font-semibold text-gray-900">2.5 weeks</div>
          </div>
        </div>
      </div>
    </section>
  )
}
