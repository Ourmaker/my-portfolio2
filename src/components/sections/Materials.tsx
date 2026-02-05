import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { materials } from '@/data/resume';
import { motion } from 'framer-motion';
import { Layers, Box, Hexagon, Sparkles } from 'lucide-react';

const categoryIcons = {
  'Metals': Layers,
  'Plastics': Box,
  'Composites': Hexagon,
  'Specialty': Sparkles,
};

export function Materials() {
  return (
    <section id="materials" className="py-24 md:py-32 px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 
            className="text-3xl md:text-4xl font-bold tracking-wider text-center mb-16 uppercase"
            style={{ fontFamily: "'Orbitron', 'Rajdhani', 'Share Tech Mono', monospace" }}
          >
            Materials
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {materials.map((materialGroup, index) => {
            const Icon = categoryIcons[materialGroup.category as keyof typeof categoryIcons] || Layers;
            return (
              <ScrollReveal key={materialGroup.category} delay={index * 0.1}>
                <motion.div 
                  className="p-6 rounded-lg border border-border bg-card"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="size-6 text-primary" />
                    <h3 className="text-xl font-semibold tracking-wide">{materialGroup.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {materialGroup.items.map((material) => (
                      <span 
                        key={material}
                        className="text-sm px-3 py-1.5 rounded-full bg-primary/10 text-foreground font-light"
                      >
                        {material}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
