import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Sense',
    desc: 'JarvisX ingests your world: files, apps, APIs, sensors — all in encrypted channels.',
    diagram: (
      <svg viewBox="0 0 300 120" className="w-full">
        <defs>
          <radialGradient id="g1" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect x="0" y="0" width="300" height="120" fill="url(#g1)" opacity="0.15" />
        <g stroke="#67e8f9" strokeOpacity="0.7">
          <circle cx="50" cy="60" r="24" fill="none" />
          <circle cx="150" cy="60" r="24" fill="none" />
          <circle cx="250" cy="60" r="24" fill="none" />
          <path d="M74 60 H126" />
          <path d="M174 60 H226" />
        </g>
      </svg>
    ),
  },
  {
    title: 'Think',
    desc: 'Multi‑agent planning, tool routing, and memory retrieval form a plan of action.',
    diagram: (
      <svg viewBox="0 0 300 120" className="w-full">
        <g>
          <rect x="20" y="20" width="80" height="80" rx="10" className="fill-cyan-500/10 stroke-cyan-300/40"/>
          <rect x="110" y="20" width="80" height="80" rx="10" className="fill-cyan-500/10 stroke-cyan-300/40"/>
          <rect x="200" y="20" width="80" height="80" rx="10" className="fill-cyan-500/10 stroke-cyan-300/40"/>
          <path d="M100 60 H110 M190 60 H200" className="stroke-cyan-300/60" />
        </g>
      </svg>
    ),
  },
  {
    title: 'Act',
    desc: 'Executes tasks across apps with safe‑guards and human‑in‑the‑loop review.',
    diagram: (
      <svg viewBox="0 0 300 120" className="w-full">
        <g>
          <circle cx="60" cy="60" r="18" className="fill-cyan-400/20 stroke-cyan-300/40" />
          <path d="M78 60 H220" className="stroke-cyan-300/60" />
          <rect x="220" y="40" width="40" height="40" rx="8" className="fill-cyan-400/20 stroke-cyan-300/40" />
        </g>
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-28 bg-[#06080f]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.07),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">How it works</h2>
          <p className="mt-3 text-slate-300/80">From signal → strategy → ship.</p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="absolute -inset-1 opacity-0 hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.25),transparent_60%)] blur-2xl" />
              <div className="relative">
                <h3 className="text-white font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-slate-300/80">{s.desc}</p>
                <div className="mt-6 border border-cyan-400/20 rounded-xl p-3 bg-black/20">{s.diagram}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
