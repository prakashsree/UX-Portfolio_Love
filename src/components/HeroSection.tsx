import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import avatar from "@/assets/prakash-avatar.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-15">
        <img src={heroBg} alt="" className="h-full w-full object-cover" />
      </div>

      <div className="container relative mx-auto flex min-h-screen flex-col justify-center px-6 pt-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 flex items-center gap-4"
          >
            <img
              src={avatar}
              alt="Prakash S"
              className="h-14 w-14 rounded-full border-2 border-primary/50 object-cover"
            />
            <span className="font-body text-sm text-primary-foreground/70">
              Lead UX Designer & Business Analyst
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-6 font-display text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl"
          >
            Hi, I'm Prakash.
            <br />
            <span className="text-primary">Bridging UX & Business</span> to
            create experiences people love.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mb-10 max-w-xl font-body text-lg leading-relaxed text-primary-foreground/70"
          >
            12+ years of crafting high-impact interfaces across Communications, Media, Technology, Retail, and Hospitality. I turn complex problems into simple, delightful solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#work"
              className="rounded-lg bg-primary px-6 py-3 font-body font-medium text-primary-foreground transition-all hover:shadow-glow"
            >
              See My Work
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-primary-foreground/20 px-6 py-3 font-body font-medium text-primary-foreground/90 transition-all hover:border-primary hover:text-primary"
            >
              Let's Talk
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="h-5 w-5 text-primary-foreground/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
