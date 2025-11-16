import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 shadow ring-1 ring-black/5" />
          <span className="font-semibold text-xl text-gray-900">Flames BPO</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <button onClick={() => scrollTo('services')} className="hover:text-gray-900">Services</button>
          <button onClick={() => scrollTo('process')} className="hover:text-gray-900">Process</button>
          <a href="/test" className="hover:text-gray-900">Status</a>
          <button onClick={() => scrollTo('contact')} className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">Get Quote</button>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          <Menu className="h-6 w-6" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3 grid gap-3">
            <button onClick={() => scrollTo('services')} className="text-left py-2">Services</button>
            <button onClick={() => scrollTo('process')} className="text-left py-2">Process</button>
            <a href="/test" className="py-2">Status</a>
            <button onClick={() => scrollTo('contact')} className="text-left py-2 text-blue-600">Get Quote</button>
          </div>
        </div>
      )}
    </header>
  )
}
