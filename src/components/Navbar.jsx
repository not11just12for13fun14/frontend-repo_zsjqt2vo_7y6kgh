import { useState } from 'react'
import { Menu, X, Bot } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#how' },
    { label: 'Showcase', href: '#showcase' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl shadow-cyan-500/10">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <a href="#" className="flex items-center gap-2 group">
              <div className="relative">
                <span className="absolute inset-0 blur-md bg-cyan-500/30 rounded-full" />
                <Bot className="relative h-7 w-7 text-cyan-400" />
              </div>
              <span className="text-white font-semibold tracking-tight text-lg">
                JarvisX
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-slate-300 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#cta"
                className="relative inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_45px_rgba(34,211,238,0.6)] transition-shadow"
              >
                Meet JarvisX
              </a>
            </nav>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-slate-200"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden px-4 pb-4"
              >
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="px-3 py-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/5"
                    >
                      {item.label}
                    </a>
                  ))}
                  <a
                    href="#cta"
                    onClick={() => setOpen(false)}
                    className="mt-2 w-full text-center relative inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_45px_rgba(34,211,238,0.6)] transition-shadow"
                  >
                    Meet JarvisX
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}
