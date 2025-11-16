import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Contact />
        <footer className="py-12 border-t bg-white">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} Flames BPO. All rights reserved.</p>
            <div className="text-sm text-gray-500">Built for speed, measured by outcomes.</div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
