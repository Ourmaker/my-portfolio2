import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { certifications } from '@/data/resume';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32 px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 
            className="text-3xl md:text-4xl font-bold tracking-wider text-center mb-16 uppercase"
            style={{ fontFamily: "'Orbitron', 'Rajdhani', 'Share Tech Mono', monospace" }}
          >
            Certifications
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <ScrollReveal key={cert.name} delay={index * 0.1}>
              <motion.div 
                className="p-6 rounded-lg border border-border bg-card group hover:border-primary/50 transition-colors"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <Award className="size-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold mb-2">{cert.name}</h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                <p className="text-sm font-medium text-primary mt-2">{cert.year}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
