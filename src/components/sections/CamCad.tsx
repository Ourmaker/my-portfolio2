import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { camCadSoftware } from '@/data/resume';
import { motion } from 'framer-motion';

export function CamCad() {
  return (
    <section id="cam-cad" className="py-24 md:py-32 px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 
            className="text-3xl md:text-4xl font-bold tracking-wider text-center mb-16 uppercase"
            style={{ fontFamily: "'Orbitron', 'Rajdhani', 'Share Tech Mono', monospace" }}
          >
            CAM & CAD Software
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {camCadSoftware.map((software, index) => (
            <ScrollReveal key={software.name} delay={index * 0.05}>
              <motion.div 
                className="p-6 rounded-lg border border-border bg-card"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold">{software.name}</h3>
                  <span className="text-xs font-medium px-2 py-1 rounded bg-primary/10 text-primary">
                    {software.category}
                  </span>
                </div>
                
                {/* Proficiency Bar */}
                <div className="mt-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Proficiency</span>
                    <span className="font-medium">{software.proficiency}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${software.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
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
