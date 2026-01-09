import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Senior Developer",
    company: "Tech Company",
    period: "2022 - Presente",
    description:
      "Liderança técnica em projetos de grande escala, definição de arquitetura de sistemas e mentoria de desenvolvedores juniores.",
    achievements: [
      "Redução de 40% no tempo de carregamento das aplicações",
      "Implementação de CI/CD automatizado",
      "Liderança de equipe de 5 desenvolvedores",
    ],
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Startup Inovadora",
    period: "2020 - 2022",
    description:
      "Desenvolvimento de aplicações web e mobile do zero, desde o planejamento até o deploy em produção.",
    achievements: [
      "Desenvolvimento de MVP em 3 meses",
      "Integração com mais de 10 APIs externas",
      "Crescimento de 200% na base de usuários",
    ],
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "Agência Digital",
    period: "2018 - 2020",
    description:
      "Criação de interfaces responsivas e acessíveis para clientes de diversos setores.",
    achievements: [
      "Entrega de mais de 30 projetos",
      "Implementação de design system interno",
      "Prêmio de melhor projeto do ano",
    ],
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-widest mb-4">
            Trajetória
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experiência <span className="text-gradient">profissional</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Minha jornada no mundo do desenvolvimento
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 + index * 0.15 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[11px] top-8 bottom-0 w-0.5 bg-border" />
              )}

              {/* Timeline Dot */}
              <div className="absolute left-0 top-1 w-6 h-6 bg-accent-gradient rounded-full flex items-center justify-center shadow-soft">
                <Briefcase className="w-3 h-3 text-secondary-foreground" />
              </div>

              {/* Content Card */}
              <div className="bg-card rounded-xl border border-border p-6 shadow-soft hover:shadow-card transition-all duration-300 ml-4">
                <div className="flex flex-wrap items-center gap-4 mb-3">
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {exp.role}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                </div>
                <p className="text-accent font-medium mb-3">{exp.company}</p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
