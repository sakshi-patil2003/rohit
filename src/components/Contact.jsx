import { motion } from 'framer-motion'
import { profile } from '../data/projects.js'

export default function Contact() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-40 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-5xl md:text-8xl leading-[0.92] tracking-tight"
      >
        Let's create
        <br />
        something
        <br />
        <span className="text-tally">worth watching.</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-14 flex flex-col md:flex-row items-center justify-center gap-6"
      >
        <a
          href={profile.instagramUrl}
          target="_blank"
          rel="noreferrer"
          data-cursor="View"
          className="px-8 py-4 bg-paper text-ink font-mono text-xs tracking-[0.2em] uppercase font-medium hover:bg-tally hover:text-paper transition-colors"
        >
          Instagram
        </a>
        <a
          href={profile.behanceUrl}
          target="_blank"
          rel="noreferrer"
          data-cursor="View"
          className="px-8 py-4 border border-paper/30 font-mono text-xs tracking-[0.2em] uppercase hover:border-paper transition-colors"
        >
          Behance
        </a>
      </motion.div>

      <p className="font-mono text-xs tracking-widest uppercase text-mute mt-14">
        {profile.location} · {profile.availability}
      </p>
    </section>
  )
}
