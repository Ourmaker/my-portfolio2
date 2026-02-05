import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { photographerInfo } from '@/data/photographer';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { SEOHead } from '@/components/seo/SEOHead';
import orbexBackground from '@/assets/Orbex-background.mp4';

// Section Components
import { CoreSkills } from '@/components/sections/CoreSkills';
import { CamCad } from '@/components/sections/CamCad';
import { CncControls } from '@/components/sections/CncControls';
import { Materials } from '@/components/sections/Materials';
import { Languages } from '@/components/sections/Languages';
import { Education } from '@/components/sections/Education';
import { Certifications } from '@/components/sections/Certifications';
import { Experience } from '@/components/sections/Experience';

/**
 * Single-page scrolling resume website
 * Showcases CNC Specialist & CAM Programmer skills and experience
 */
export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  
  // Parallax effect for hero content
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  // Hero content moves up slower as you scroll
  const heroContentY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  // Video moves slower for depth effect
  const videoY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <>
      <SEOHead />
      
      <div className="min-h-screen">
        {/* Hero Section - Full viewport with video background */}
        <section ref={heroRef} id="hero" className="relative h-screen w-full overflow-hidden">
          {/* Background Video with Parallax */}
          <motion.div 
            className="absolute inset-0"
            style={{ y: videoY, scale: videoScale }}
          >
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              preload="metadata" 
              className="w-full h-full object-cover" 
              onError={(e) => {
                const target = e.currentTarget;
                target.style.opacity = '0';
              }}
            >
              <source src={orbexBackground} type="video/mp4" />
            </video>
            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
          </motion.div>

          {/* Hero Content with Parallax */}
          <motion.div 
            className="relative h-full flex flex-col items-center justify-center px-6"
            style={{ y: heroContentY, opacity: heroOpacity }}
          >
            <motion.div 
              className="text-center space-y-6 max-w-4xl" 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider text-white text-center uppercase" 
                style={{ fontFamily: "'Orbitron', 'Rajdhani', 'Share Tech Mono', monospace" }} 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1, delay: 0.2 }}
              >
                {photographerInfo.name}
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl font-light tracking-wide text-white/90" 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1, delay: 0.4 }}
              >
                {photographerInfo.tagline}
              </motion.p>
            </motion.div>

            {/* Scroll Indicator - not affected by parallax opacity */}
          </motion.div>
          
          <motion.div 
            className="absolute bottom-12 left-1/2 -translate-x-1/2" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <ScrollIndicator />
          </motion.div>
        </section>

        {/* Resume Sections with staggered parallax */}
        <CoreSkills />
        <CamCad />
        <CncControls />
        <Materials />
        <Languages />
        <Education />
        <Certifications />
        <Experience />
      </div>
    </>
  );
}
