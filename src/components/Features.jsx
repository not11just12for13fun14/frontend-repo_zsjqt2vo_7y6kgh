import { motion } from 'framer-motion'
import { Sparkles, Shield, Rocket, Cpu, GaugeCircle, Workflow } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Holographic UI',
    desc: 'Crystal‑clear panels with neon depth, particle glows, and physically‑based motion.',
  },
  {
    icon: Cpu,
    title: 'Neural Precision',
    desc: 'Multi‑agent cognition with vector recall, tool routing, and chain‑of‑thought privacy.',
  },
  {
    icon: GaugeCircle,
    title: 'Real‑time Speed',
    desc: 'GPU‑accelerated responses, streaming output, and predictive prefetch.',
  },
  {
    icon: Shield,
    title: 'Private by Design',
    desc: 'On‑device inference modes with end‑to‑end encryption and secure enclaves.',
  },
  {
    icon: Workflow,
    title: 'Workflow Orchestration',
    desc: 'Automate research, build, and shipping with reusable blueprints and triggers.',
  },
  {
    icon: Rocket,
    title: 'Cinematic Motion',
    desc: 'Parallax, particles and inertial micro‑interactions tuned to perfection.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-28 bg-[#05060b]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.08),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Designed for creators. Engineered for power.
          </h2>
          <p className="mt-3 text-slate-300/80">
            Neon‑blue accents, premium polish, and a technical soul.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-cyan-400/30"
            >
              <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity bg-[conic-gradient(from_0deg,rgba(34,211,238,0.25),transparent_30%,transparent_70%,rgba(34,211,238,0.25))] blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-400/20">
                    <f.icon className="h-6 w-6 text-cyan-300" />
                  </span>
                  <h3 className="text-white font-semibold text-lg">{f.title}</h3>
                </div>
                <p className="mt-3 text-slate-300/80 leading-relaxed">{f.desc}</p>
                <div className="mt-6">
                  <button className="relative overflow-hidden rounded-full px-4 py-2 text-sm text-white bg-white/10 border border-white/10 hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-colors">
                    Learn more
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
