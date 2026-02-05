import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { experience } from '@/data/resume';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, CheckCircle } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 
            className="text-3xl md:text-4xl font-bold tracking-wider text-center mb-16 uppercase"
            style={{ fontFamily: "'Orbitron', 'Rajdhani', 'Share Tech Mono', monospace" }}
          >
            Experience
          </h2>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />
          
          <div className="space-y-12">
            {experience.map((job, index) => (
              <ScrollReveal key={`${job.company}-${job.period}`} delay={index * 0.1}>
                <motion.div 
                  className="relative pl-0 md:pl-20"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-0 w-5 h-5 rounded-full bg-primary border-4 border-background hidden md:block" />
                  
                  <div className="p-6 rounded-lg border border-border bg-card">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                        <p className="text-lg text-primary">{job.company}</p>
                      </div>
                      <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                        {job.period}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                      <MapPin className="size-4" />
                      {job.location}
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    
                    <div className="space-y-2">
                      <p className="text-sm font-medium flex items-center gap-2">
                        <Briefcase className="size-4 text-primary" />
                        Key Achievements
                      </p>
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="size-4 text-primary mt-0.5 shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
