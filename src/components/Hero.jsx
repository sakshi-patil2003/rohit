import { motion } from 'framer-motion';
import { profile } from '../data/profile.js';
import './Hero.css';

export default function Hero({ onWatchShowreel }) {
  return (
    <section className="hero-section">
      {/* Background with left-to-right gradient */}
      <div className="hero-bg">
        {/* Base gradient - left to right: dark to light */}
        <div 
          className="hero-gradient-base"
          style={{
            background: 'linear-gradient(90deg, #0a0a09 0%, #1a0a0a 30%, #241010 60%, #2d1515 100%)',
          }}
        />
        
        {/* Warm amber glow behind headline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          className="hero-glow-amber"
        />
        
        {/* Signature tally-red rim light */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="hero-glow-tally"
        />
        
        {/* Vignette to keep edges dark */}
        <div className="hero-vignette" />
        
        {/* Subtle grain texture */}
        <div className="hero-grain" />
      </div>

      {/* Corner Reticle */}
      <div className="hero-reticle">
        <span className="reticle-top-left" />
        <span className="reticle-top-right" />
        <span className="reticle-bottom-left" />
        <span className="reticle-bottom-right" />
      </div>

      {/* Content */}
      <div className="hero-content">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="hero-location"
        >
          {profile.location} · {profile.availability}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="hero-title"
        >
          Rohit Patil
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="hero-subtitle"
        >
          Cinematographer / DOP / Video Editor
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="hero-actions"
        >
          <a
            href="#work"
            data-cursor="View"
            className="btn-primary"
          >
            View Work
          </a>
          <button
            onClick={onWatchShowreel}
            data-cursor="Play"
            className="btn-secondary"
          >
            Watch Showreel
          </button>
        </motion.div>
      </div>
    </section>
  );
}