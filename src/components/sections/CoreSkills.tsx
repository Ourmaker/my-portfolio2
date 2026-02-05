import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { coreSkills } from '@/data/resume';
import { Wrench, Code, Settings, CheckCircle } from 'lucide-react';

const categoryIcons = {
  'CNC Machining': Wrench,
  'Programming': Code,
  'Process Engineering': Settings,
  'Quality Control': CheckCircle,
};

export function CoreSkills() {
  return (
    <section id="core-skills" className="py-24 md:py-32 px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 
            className="text-3xl md:text-4xl font-bold tracking-wider text-center mb-16 uppercase"
            style={{ fontFamily: "'Orbitron', 'Rajdhani', 'Share Tech Mono', monospace" }}
          >
            Core Skills
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coreSkills.map((skillGroup, index) => {
            const Icon = categoryIcons[skillGroup.category as keyof typeof categoryIcons] || Wrench;
            return (
              <ScrollReveal key={skillGroup.category} delay={index * 0.1}>
                <motion.div 
                  className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="size-6 text-primary" />
                    <h3 className="text-xl font-semibold tracking-wide">{skillGroup.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <li key={skill} className="text-muted-foreground font-light flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
