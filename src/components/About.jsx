import { motion } from 'framer-motion'
import { experience } from '../data/projects.js'

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-36">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-mono text-xs tracking-[0.3em] uppercase text-tally mb-6"
      >
        About
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05, duration: 0.8 }}
        className="font-display text-4xl md:text-7xl leading-[0.95] tracking-tight max-w-4xl"
      >
        I create visual stories, frame by frame.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.8 }}
        className="text-mute text-lg md:text-xl max-w-2xl mt-8 leading-relaxed"
      >
        Rohit Patil is a filmmaker, DOP, and video editor based in Pune, India —
        working freelance across music videos, documentary, commercial, and
        behind-the-scenes coverage, and currently open to freelance and
        full-time work.
      </motion.p>

      <div className="mt-20 grid md:grid-cols-2 gap-16">
        <div>
          <p className="font-mono text-xs tracking-widest uppercase text-mute mb-6">
            Experience
          </p>
          <ul className="space-y-6">
            {experience.map((e, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-baseline justify-between border-b border-hairline pb-4"
              >
                <div>
                  <p className="font-display text-lg">{e.role}</p>
                  <p className="font-mono text-xs text-mute mt-1">{e.org}</p>
                </div>
                <span className="font-mono text-xs text-mute">{e.location}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs tracking-widest uppercase text-mute mb-6">
            Based In
          </p>
          <p className="font-display text-lg">Pune, India</p>
          <p className="font-mono text-xs text-mute mt-1">
            Available for Freelance &amp; Full-time
          </p>
        </div>
      </div>
    </section>
  )
}
