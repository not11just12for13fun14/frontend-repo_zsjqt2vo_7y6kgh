import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Showcase from './components/Showcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-[#05060b] text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Showcase />
        <CTA />
      </main>
      <footer className="relative border-t border-white/10 bg-black/20">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} JarvisX. All rights reserved.</p>
          <div className="flex items-center gap-3 text-xs text-slate-500">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(103,232,249,0.95)]" />
            <span>Running in holo‑safe mode</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
