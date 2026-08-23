import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { projects } from '../data/projects.js'
import BehanceEmbed from '../components/BehanceEmbed.jsx'

export default function Project() {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  const project = projects[index]

  if (!project) return <Navigate to="/" replace />

  const next = projects[(index + 1) % projects.length]

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-28 md:pt-36 pb-24"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <Link
          to="/#work"
          data-cursor=""
          className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-mute hover:text-paper transition-colors mb-10"
        >
          <ArrowLeft size={14} /> All Work
        </Link>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-mono text-xs tracking-[0.3em] uppercase text-tally mb-4"
        >
          {String(index + 1).padStart(2, '0')} / Selected Work
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="font-display text-5xl md:text-8xl tracking-tight leading-[0.9] mb-8"
        >
          {project.title}
        </motion.h1>

        <a
          href={project.behanceUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-mute hover:text-paper transition-colors mb-12"
        >
          View on Behance <ExternalLink size={13} />
        </a>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
        >
          <BehanceEmbed embedUrl={project.embedUrl} title={project.title} eager />
        </motion.div>

        <p className="font-mono text-[11px] text-mute mt-4">
          Full project — images, credits, and any video — is loaded live from
          Rohit's Behance page above.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-10 mt-24 pt-10 border-t border-hairline">
        <p className="font-mono text-xs tracking-widest uppercase text-mute mb-3">
          Next
        </p>
        <Link
          to={`/work/${next.slug}`}
          data-cursor="View"
          className="font-display text-4xl md:text-6xl tracking-tight hover:text-tally transition-colors"
        >
          {next.title} →
        </Link>
      </div>
    </motion.article>
  )
}
