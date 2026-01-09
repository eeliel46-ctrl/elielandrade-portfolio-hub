import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Rocket, Users } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Desenvolvimento",
    description: "React, TypeScript, Node.js e outras tecnologias modernas para criar aplicações robustas.",
  },
  {
    icon: Palette,
    title: "Design",
    description: "UI/UX focado em experiências intuitivas e visualmente impactantes.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Otimização para garantir velocidade e eficiência em todas as plataformas.",
  },
  {
    icon: Users,
    title: "Colaboração",
    description: "Trabalho em equipe e comunicação clara para resultados excepcionais.",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block text-sm font-medium text-accent uppercase tracking-widest mb-4">
              Sobre Mim
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Criando experiências digitais com{" "}
              <span className="text-gradient">paixão e propósito</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Sou um desenvolvedor apaixonado por criar soluções digitais que 
                fazem a diferença. Com anos de experiência no mercado, desenvolvi 
                uma abordagem única que combina criatividade técnica com visão 
                estratégica de negócios.
              </p>
              <p>
                Minha jornada me levou a trabalhar com startups inovadoras e 
                empresas consolidadas, sempre focando em entregar produtos que 
                excedem expectativas e geram resultados reais.
              </p>
              <p>
                Quando não estou codando, você pode me encontrar explorando novas 
                tecnologias, contribuindo para projetos open source ou 
                compartilhando conhecimento com a comunidade.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group p-6 bg-card-gradient rounded-xl border border-border hover:border-accent/30 shadow-soft hover:shadow-card transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent-gradient transition-colors duration-300">
                  <skill.icon className="w-6 h-6 text-accent group-hover:text-secondary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {skill.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
