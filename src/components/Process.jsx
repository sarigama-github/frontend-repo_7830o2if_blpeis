export default function Process() {
  const steps = [
    { title: 'Discovery', desc: 'We align on goals, KPIs, and workflows.' },
    { title: 'Design', desc: 'We craft SOPs, playbooks, and coverage model.' },
    { title: 'Deploy', desc: 'We recruit, train, and launch your dedicated pod.' },
    { title: 'Optimize', desc: 'We improve weekly with transparent reporting.' },
  ]

  return (
    <section id="process" className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">How we work</h2>
        <p className="mt-2 text-gray-600">A proven framework to ramp fast and scale predictably.</p>

        <ol className="mt-8 grid md:grid-cols-4 gap-6 list-none counter-reset">
          {steps.map((s, i) => (
            <li key={i} className="relative rounded-xl border bg-white p-6 shadow-sm">
              <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold shadow">{i + 1}</div>
              <h3 className="mt-2 font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
