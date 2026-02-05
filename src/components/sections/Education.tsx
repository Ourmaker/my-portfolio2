import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { education } from '@/data/resume';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="py-24 md:py-32 px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 
            className="text-3xl md:text-4xl font-bold tracking-wider text-center mb-16 uppercase"
            style={{ fontFamily: "'Orbitron', 'Rajdhani', 'Share Tech Mono', monospace" }}
          >
            Education
          </h2>
        </ScrollReveal>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <ScrollReveal key={edu.degree} delay={index * 0.1}>
              <motion.div 
                className="p-8 rounded-lg border border-border bg-card"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <GraduationCap className="size-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                    <p className="text-lg text-foreground mb-2">{edu.school}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <MapPin className="size-4" />
                        {edu.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="size-4" />
                        {edu.year}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground">
                      <span className="font-medium">Focus:</span> {edu.focus}
                    </p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
