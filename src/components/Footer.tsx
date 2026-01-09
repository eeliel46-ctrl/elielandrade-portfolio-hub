import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} Elielandrade. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
            Feito com{" "}
            <Heart className="w-4 h-4 text-accent fill-accent" /> e muito café
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
