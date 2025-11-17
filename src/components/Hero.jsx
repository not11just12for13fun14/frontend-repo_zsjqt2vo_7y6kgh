import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[#06080f]" id="hero">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.12),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(14,165,233,0.1),transparent_45%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,255,0.06)_1px,transparent_1px)] bg-[size:120px_120px]" />
      </div>

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-40 pb-28">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight"
              >
                <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,211,238,0.35)]">
                  Meet JarvisX
                </span>
                <span className="mt-2 block text-slate-300">
                  Your Personal AI System
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1 }}
                className="mt-6 text-lg text-slate-300/90 max-w-xl"
              >
                A hyper‑real assistant with holographic UI, cinematic motion, and neural precision. Designed for creators, engineered for speed.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.15 }}
                className="mt-10 flex flex-wrap items-center gap-4"
              >
                <a
                  href="#cta"
                  className="group relative inline-flex items-center justify-center rounded-full px-6 py-3 text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_40px_rgba(34,211,238,0.35)] hover:shadow-[0_0_60px_rgba(34,211,238,0.6)] transition-all"
                >
                  <span className="pr-2">Try the demo</span>
                  <span className="relative ml-2 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.95)] group-hover:scale-125 transition-transform" />
                </a>

                <a href="#features" className="text-slate-300 hover:text-white transition-colors">
                  Explore features →
                </a>
              </motion.div>
            </div>

            <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-[520px]">
              <div className="pointer-events-none absolute -inset-x-8 -inset-y-8 bg-gradient-to-tr from-cyan-500/10 via-blue-500/10 to-transparent blur-2xl" />
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#06080f] to-transparent" />
    </section>
  )
}
