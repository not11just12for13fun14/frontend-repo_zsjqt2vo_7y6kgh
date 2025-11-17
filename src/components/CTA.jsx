import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="cta" className="relative py-24 bg-[#06080f]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.08),transparent_40%)]" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Meet JarvisX — Your Personal AI System
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-4 text-slate-300/80"
        >
          Get early access and help shape the future of personal AI.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-white shadow-[0_0_40px_rgba(34,211,238,0.35)] hover:shadow-[0_0_60px_rgba(34,211,238,0.6)] transition-shadow"
          >
            Request access
          </a>
          <a href="#features" className="px-6 py-3 rounded-full border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400/40 transition-colors">
            Explore features
          </a>
        </motion.div>
      </div>
    </section>
  )
}
