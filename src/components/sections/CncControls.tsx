import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { cncControls } from '@/data/resume';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

export function CncControls() {
  return (
    <section id="cnc-controls" className="py-24 md:py-32 px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 
            className="text-3xl md:text-4xl font-bold tracking-wider text-center mb-16 uppercase"
            style={{ fontFamily: "'Orbitron', 'Rajdhani', 'Share Tech Mono', monospace" }}
          >
            CNC Controls
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cncControls.map((control, index) => (
            <ScrollReveal key={control.name} delay={index * 0.1}>
              <motion.div 
                className="p-6 rounded-lg border border-border bg-card group hover:border-primary/50 transition-colors"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Cpu className="size-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">{control.name}</h3>
                    <span className="text-sm text-muted-foreground">{control.experience}</span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <p className="text-sm font-medium text-muted-foreground mb-2">Machines:</p>
                  <div className="flex flex-wrap gap-2">
                    {control.machines.map((machine) => (
                      <span 
                        key={machine}
                        className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground"
                      >
                        {machine}
                      </span>
                    ))}
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
