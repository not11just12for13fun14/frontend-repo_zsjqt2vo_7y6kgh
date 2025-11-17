import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Play, Zap, Fingerprint } from 'lucide-react'
import { useRef } from 'react'

function MagneticButton({ children }) {
  const ref = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useTransform(my, [-50, 50], [8, -8])
  const ry = useTransform(mx, [-50, 50], [-8, 8])

  return (
    <motion.button
      ref={ref}
      onMouseMove={(e) => {
        const rect = ref.current?.getBoundingClientRect()
        if (!rect) return
        const x = e.clientX - (rect.left + rect.width / 2)
        const y = e.clientY - (rect.top + rect.height / 2)
        mx.set(Math.max(-50, Math.min(50, x)))
        my.set(Math.max(-50, Math.min(50, y)))
      }}
      onMouseLeave={() => {
        mx.set(0)
        my.set(0)
      }}
      style={{ rotateX: rx, rotateY: ry }}
      className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-white shadow-[0_0_40px_rgba(34,211,238,0.35)] hover:shadow-[0_0_60px_rgba(34,211,238,0.6)] transition-shadow"
    >
      {children}
    </motion.button>
  )
}

export default function Showcase() {
  return (
    <section id="showcase" className="relative py-28 bg-[#05060b] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.08),transparent_40%),radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.08),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Cinematic AI showcase
            </h2>
            <p className="mt-3 text-slate-300/80">
              Interact with the core. Watch particles ripple, panels react, and neon flows respond in real‑time.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <MagneticButton>
                <Play className="h-5 w-5" />
                Live demo
              </MagneticButton>
              <MagneticButton>
                <Zap className="h-5 w-5" />
                Run workflow
              </MagneticButton>
            </div>

            <div className="mt-10 flex items-center gap-4 text-slate-400">
              <Fingerprint className="h-5 w-5 text-cyan-300" />
              <span className="text-sm">Secure. Private. On‑device options available.</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-gradient-to-tr from-cyan-500/10 via-blue-500/10 to-transparent blur-3xl" />
            <div className="relative rounded-2xl border border-white/10 bg-black/40 p-3">
              <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-black/40 p-4">
                <div className="grid grid-cols-3 gap-3">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className="aspect-video rounded-lg border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-600/10"
                    />
                  ))}
                </div>
                <div className="mt-4 text-center text-slate-400 text-sm">
                  Hologram feeds • Tools • Agents • Telemetry
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
