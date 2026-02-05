import { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number; // Positive = slower, Negative = faster
  direction?: 'up' | 'down';
}

/**
 * Parallax wrapper component that creates depth effect on scroll
 * Uses framer-motion for smooth, performant animations
 */
export function ParallaxSection({ 
  children, 
  className = '', 
  speed = 0.5,
  direction = 'up'
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const multiplier = direction === 'up' ? -1 : 1;
  const y = useTransform(scrollYProgress, [0, 1], [0, 200 * speed * multiplier]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}

interface ParallaxBackgroundProps {
  children?: ReactNode;
  className?: string;
  speed?: number;
}

/**
 * Parallax background layer - moves slower than content
 */
export function ParallaxBackground({ 
  children, 
  className = '', 
  speed = 0.3 
}: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100 * speed, 100 * speed]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div 
        className={`absolute inset-0 ${className}`}
        style={{ y }}
      >
        {children}
      </motion.div>
    </div>
  );
}
