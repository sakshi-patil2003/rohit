import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ink/90 backdrop-blur-xl border-b border-hairline shadow-lg shadow-black/30'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 md:h-24 flex items-center justify-between">
          {/* Logo - Bolder */}
          <Link
            to="/"
            className="font-display text-xl md:text-2xl tracking-tight font-bold hover:text-tally transition-colors duration-300"
            data-cursor=""
          >
            <span className="text-paper">ROHIT</span>
            <span className="text-tally ml-1">PATIL</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10 shrink-0">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="font-mono text-sm tracking-[0.2em] uppercase text-mute hover:text-paper transition-all duration-300 hover:scale-105 relative group"
              >
                {l.label}
                {/* Underline animation */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tally transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            {/* "Open for Work" Badge - BOLDER & MORE ATTENTION */}
            <span className="flex items-center gap-3 pl-8 ml-4 border-l border-hairline shrink-0">
              {/* Animated Pulse Ring - BIGGER */}
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tally opacity-75" />
                <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-tally opacity-50" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-tally shadow-lg shadow-tally/50" />
              </span>
              
              {/* Text - BOLDER & BRIGHTER */}
              <span className="flex flex-col leading-none">
                <span className="font-mono text-[11px] tracking-[0.25em] uppercase font-bold text-tally">
                  Open for Work
                </span>
                <span className="font-mono text-[8px] tracking-[0.3em] uppercase text-mute/60">
                  Worldwide Projects
                </span>
              </span>
            </span>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-paper hover:text-tally transition-colors duration-300"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} strokeWidth={2} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[60] bg-ink flex flex-col"
          >
            {/* Mobile Header */}
            <div className="flex items-center justify-between px-6 h-20 border-b border-hairline">
              <span className="font-display text-xl font-bold">
                <span className="text-paper">ROHIT</span>
                <span className="text-tally ml-1">PATIL</span>
              </span>
              <button 
                onClick={() => setOpen(false)} 
                aria-label="Close menu"
                className="hover:text-tally transition-colors duration-300"
              >
                <X size={28} strokeWidth={2} />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="flex-1 flex flex-col items-start justify-center gap-6 px-8">
              {links.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                  className="font-display text-5xl md:text-6xl tracking-tight font-semibold hover:text-tally transition-colors duration-300 relative group"
                >
                  {l.label}
                  <span className="absolute -bottom-2 left-0 w-0 h-1 bg-tally transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
            </nav>

            {/* Mobile Footer with Open for Work Badge */}
            <div className="px-8 pb-12 flex flex-col gap-4 border-t border-hairline pt-6">
              {/* Open for Work Badge - Mobile */}
              <div className="flex items-center gap-4">
                <span className="relative flex h-3 w-3 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tally opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-tally shadow-lg shadow-tally/50" />
                </span>
                <div className="flex flex-col">
                  <span className="font-mono text-sm tracking-[0.25em] uppercase font-bold text-tally">
                    Open for Work
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-mute/60">
                    Freelance + Full-time
                  </span>
                </div>
              </div>
              
              {/* Location */}
              <p className="font-mono text-xs tracking-widest text-mute uppercase">
                Pune, India — Available Worldwide
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}