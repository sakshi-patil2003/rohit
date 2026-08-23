import { motion } from 'framer-motion';
import { projects } from '../data/projects.js';
import ProjectCard from './ProjectCard.jsx';
import './Work.css';

export default function Work() {
  // No featured - all cards equal
  const allProjects = projects;

  return (
    <section id="work" className="work-section">
      {/* Animated Background */}
      <div className="work-bg">
        <div className="work-gradient-orb orb1" />
        <div className="work-gradient-orb orb2" />
      </div>

      <div className="work-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="work-header"
        >
          <div className="header-left">
            <span className="section-number">{String(allProjects.length).padStart(2, '0')}</span>
            <span className="section-label">Projects</span>
          </div>
          <div className="header-center">
            <span className="work-badge">✦ Selected Work</span>
            <h2 className="work-title">
              Recent <span className="highlight">Projects</span>
            </h2>
          </div>
          <motion.a
            href="https://www.behance.net/rohitpatil204"
            target="_blank"
            rel="noreferrer"
            className="behance-link"
            whileHover={{ x: 5 }}
          >
            Behance ↗
          </motion.a>
        </motion.div>

        {/* All Projects Grid - Equal Sizes */}
        <div className="projects-grid">
          {allProjects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} size="md" />
          ))}
        </div>
      </div>
    </section>
  );
}