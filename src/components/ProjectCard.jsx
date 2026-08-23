import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import './ProjectCard.css';

export default function ProjectCard({ project, index, size = 'md' }) {
  const [loaded, setLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // All cards have the SAME size
  const sizeClasses = {
    md: 'aspect-[4/3]',  // All cards use this
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="project-card-wrapper"
    >
      <Link
        to={`/work/${project.slug}`}
        data-cursor="View"
        className="project-card-link"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`project-card ${sizeClasses.md}`}>
          {!loaded && (
            <div className="project-loader">
              <span className="loader-number">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
          )}

          <motion.img
            src={project.thumb}
            alt={project.title}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            className="project-image"
            style={{ opacity: loaded ? 1 : 0 }}
            animate={{ scale: isHovered ? 1.08 : 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />

          <div className="project-overlay" />

          {/* Viewfinder Corners */}
          <div className="project-corners">
            <span className="corner top-left" />
            <span className="corner top-right" />
            <span className="corner bottom-left" />
            <span className="corner bottom-right" />
          </div>

          <div className="project-content">
            <div className="project-info">
              <span className="project-number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="project-title">{project.title}</h3>
              <span className="project-category">{project.category || 'Project'}</span>
            </div>
            <motion.span
              className="project-view"
              animate={{ 
                opacity: isHovered ? 1 : 0,
                x: isHovered ? 0 : 8
              }}
              transition={{ duration: 0.3 }}
            >
              View →
            </motion.span>
          </div>

          <motion.div
            className="project-glow"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </Link>
    </motion.div>
  );
}