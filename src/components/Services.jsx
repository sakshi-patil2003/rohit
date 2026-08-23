import { motion } from 'framer-motion'
import { services } from '../data/projects.js'

export default function Services() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-36 border-t border-hairline">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-mono text-xs tracking-[0.3em] uppercase text-tally mb-10"
      >
        Services
      </motion.p>

      <ul>
        {services.map((s, i) => (
          <motion.li
            key={s}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="group flex items-center justify-between py-6 border-b border-hairline"
          >
            <span className="font-display text-2xl md:text-5xl tracking-tight group-hover:text-tally transition-colors">
              {s}
            </span>
            <span className="font-mono text-xs text-mute">
              {String(i + 1).padStart(2, '0')}
            </span>
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
