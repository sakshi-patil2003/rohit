import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import BehanceEmbed from './BehanceEmbed.jsx'

export default function VideoModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] bg-ink/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-5xl"
          >
            <div className="flex items-center justify-between mb-3">
              <p className="font-mono text-xs tracking-widest uppercase text-mute">
                {project.title}
              </p>
              <button
                onClick={onClose}
                aria-label="Close"
                data-cursor=""
                className="text-paper hover:text-tally transition-colors"
              >
                <X size={22} />
              </button>
            </div>
            <BehanceEmbed embedUrl={project.embedUrl} title={project.title} eager />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
