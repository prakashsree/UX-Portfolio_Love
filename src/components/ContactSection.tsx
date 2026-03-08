import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-background py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Let's Build Something Great
          </h2>
          <p className="mb-10 font-body text-lg text-muted-foreground">
            Whether you're hiring for a lead UX role, need a consultant for a complex product challenge, or just want to chat about design — I'd love to hear from you.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:prakash@example.com"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-body font-medium text-primary-foreground transition-shadow hover:shadow-glow"
            >
              <Mail className="h-4 w-4" />
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/prakash-s"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-body font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
