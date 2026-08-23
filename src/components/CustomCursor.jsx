import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Circle cursor with a dot inside — clean and minimal
// Disabled entirely on touch/coarse-pointer devices.
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState('');
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  const ref = useRef(null);

  useEffect(() => {
    const isFine = window.matchMedia('(pointer: fine)').matches;
    setEnabled(isFine);
    if (!isFine) return;

    document.documentElement.classList.add('custom-cursor-active');

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
      const target = e.target.closest('[data-cursor]');
      setLabel(target ? target.getAttribute('data-cursor') : '');
    };
    const leave = () => setVisible(false);

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', leave);
      document.documentElement.classList.remove('custom-cursor-active');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!enabled) return null;

  const size = label ? 64 : 40;

  return (
    <motion.div
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 z-[100]"
      style={{
        x: sx,
        y: sy,
        translateX: '-50%',
        translateY: '-50%',
        opacity: visible ? 1 : 0,
      }}
    >
      <motion.div
        animate={{ width: size, height: size }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="relative flex items-center justify-center"
      >
        {label ? (
          <>
            {/* Circle with label */}
            <span className="absolute inset-0 border border-paper/80 rounded-full" />
            <span className="font-mono text-[10px] tracking-widest text-paper uppercase">
              {label}
            </span>
          </>
        ) : (
          <>
            {/* Circle with dot inside */}
            <span className="absolute inset-0 border border-paper/50 rounded-full" />
            <span className="absolute w-1.5 h-1.5 bg-paper rounded-full" />
          </>
        )}
      </motion.div>
    </motion.div>
  );
}