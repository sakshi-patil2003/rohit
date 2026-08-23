import { useState } from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Hero.jsx'
import Work from '../components/Work.jsx'
import About from '../components/About.jsx'
import Services from '../components/Services.jsx'
import Contact from '../components/Contact.jsx'
import VideoModal from '../components/VideoModal.jsx'
import { projects } from '../data/projects.js'

// The project the Hero's "Watch Showreel" button opens, in the modal.
const reelProject =
  projects.find((p) => p.slug === 'behind-the-scene') ?? projects[1]

export default function Home() {
  const [openProject, setOpenProject] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Hero onWatchShowreel={() => setOpenProject(reelProject)} />
      <Work />
      <About />
      <Services />
      <Contact />
      <VideoModal project={openProject} onClose={() => setOpenProject(null)} />
    </motion.div>
  )
}
