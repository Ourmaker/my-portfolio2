import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { languages } from '@/data/resume';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

export function Languages() {
  return (
    <section id="languages" className="py-24 md:py-32 px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 
            className="text-3xl md:text-4xl font-bold tracking-wider text-center mb-16 uppercase"
            style={{ fontFamily: "'Orbitron', 'Rajdhani', 'Share Tech Mono', monospace" }}
          >
            Languages
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {languages.map((lang, index) => (
            <ScrollReveal key={lang.language} delay={index * 0.1}>
              <motion.div 
                className="p-6 rounded-lg border border-border bg-card text-center"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <Globe className="size-8 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-1">{lang.language}</h3>
                <p className="text-sm text-muted-foreground mb-4">{lang.level}</p>
                
                {/* Circular Progress Indicator */}
                <div className="relative w-16 h-16 mx-auto">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                      className="text-secondary"
                    />
                    <motion.circle
                      cx="32"
                      cy="32"
                      r="28"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                      className="text-primary"
                      strokeDasharray={`${2 * Math.PI * 28}`}
                      initial={{ strokeDashoffset: 2 * Math.PI * 28 }}
                      whileInView={{ 
                        strokeDashoffset: 2 * Math.PI * 28 * (1 - lang.proficiency / 100) 
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold">
                    {lang.proficiency}%
                  </span>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
