import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";

const slides = [
  {
    id: 1,
    label: "THE BEGINNING",
    content: (
      <div className="flex h-full flex-col items-center justify-center text-center px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-body text-lg text-muted-foreground md:text-xl max-w-2xl"
        >
          Engineering gave me logic. But it was the people using technology who fascinated me more than the technology itself. Why do some tools clicks instantly, while others frustrate you into giving up?
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-4 font-body text-lg text-muted-foreground md:text-xl max-w-2xl"
        >
          Learning how systems are built.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mt-4 font-body text-lg text-muted-foreground md:text-xl max-w-2xl"
        >
          How they <strong className="text-foreground">scale</strong>. How they <strong className="text-foreground">hold</strong>.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="mt-8 font-body text-lg text-muted-foreground md:text-xl max-w-2xl"
        >
          But somewhere along the way,
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0 }}
          className="mt-4 font-body text-lg text-muted-foreground md:text-xl max-w-2xl"
        >
          I started asking <strong className="text-foreground">different questions</strong>.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.6 }}
          className="mt-12 flex items-center gap-4"
        >
          <span className="font-display text-sm text-muted-foreground tracking-widest">How does it work?</span>
          <span className="text-primary text-2xl">→</span>
          <span className="font-display text-sm text-primary tracking-widest font-semibold">How does it feel?</span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2 }}
          className="mt-6 font-display text-sm tracking-widest text-primary/60"
        >
          That question changed everything.
        </motion.p>
      </div>
    ),
  },
  {
    id: 2,
    label: "TWO WORLDS",
    content: (
      <div className="flex h-full flex-col items-center justify-center text-center px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-display text-4xl font-bold text-foreground md:text-5xl"
        >
          12+ years
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-2 font-body text-lg text-muted-foreground"
        >
          across <strong className="text-foreground">two worlds</strong>
        </motion.p>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 max-w-3xl w-full">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0 }}
            className="rounded-2xl border border-border bg-card p-8 text-left"
          >
            <h3 className="font-display text-xl font-bold text-foreground">Enterprise</h3>
            <p className="mt-3 font-body text-sm text-muted-foreground leading-relaxed">
              taught me <strong className="text-foreground">scale</strong>. Process.<br />
              Collaboration across teams.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 }}
            className="rounded-2xl border border-border bg-card p-8 text-left"
          >
            <h3 className="font-display text-xl font-bold text-foreground">Consulting</h3>
            <p className="mt-3 font-body text-sm text-muted-foreground leading-relaxed">
              taught me <strong className="text-foreground">strategy</strong>. Ownership.<br />
              Decisions that shaped products.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0 }}
          className="mt-10 flex items-center gap-4 font-display text-xs tracking-[0.2em] text-muted-foreground"
        >
          <span>STRUCTURE</span>
          <span className="text-primary">✦</span>
          <span>OWNERSHIP</span>
        </motion.div>
      </div>
    ),
  },
  {
    id: 3,
    label: "DOMAINS",
    content: (
      <div className="flex h-full flex-col items-center justify-center text-center px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-body text-lg text-muted-foreground md:text-xl max-w-2xl"
        >
          I've worked across
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 flex flex-wrap justify-center gap-3"
        >
          {["Communications", "Media", "Technology", "Retail", "Hospitality"].map((domain, i) => (
            <motion.span
              key={domain}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.2 }}
              className="rounded-full border border-primary/30 bg-primary/5 px-5 py-2 font-display text-sm font-medium text-foreground"
            >
              {domain}
            </motion.span>
          ))}
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0 }}
          className="mt-8 font-body text-lg text-muted-foreground max-w-xl"
        >
          Designing products people rely on every day.<br /><br /><br />Each domain taught me something the last one couldn't. Complex enterprise systems. Consumer apps. Government education platforms. Different problems, same methodology.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6 }}
          className="mt-6 font-display text-base font-semibold tracking-wide text-primary"
        >
          Outcomes over outputs.
        </motion.p>
      </div>
    ),
  },
  {
    id: 4,
    label: "IMPACT",
    content: (
      <div className="flex h-full flex-col items-center justify-center text-center px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-body text-base text-muted-foreground mb-10"
        >
          And I've always believed in one thing:
        </motion.p>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 max-w-4xl w-full">
          {[
            { value: "12+", label: "Years of Experience" },
            { value: "5+", label: "Industry Domains" },
            { value: "20+", label: "Projects Delivered" },
            { value: "C-Suite", label: "Stakeholder Partnerships" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.3 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="font-display text-3xl font-bold text-primary md:text-4xl">{stat.value}</div>
              <div className="mt-2 font-body text-xs text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="mt-8 font-display text-sm tracking-widest text-primary/60"
        >
          Not just shipped. Improved.<br /><br />
          I don't just hand off designs.<br />
          I see them through —<br />
          from research to release.
        </motion.p>
      </div>
    ),
  },
  {
    id: 5,
    label: "CRAFT",
    content: (
      <div className="flex h-full flex-col items-center justify-center text-center px-8 max-w-2xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-body text-lg text-muted-foreground md:text-xl leading-relaxed"
        >
          I built <strong className="text-foreground">design systems</strong> from scratch.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-4 font-body text-lg text-muted-foreground md:text-xl leading-relaxed"
        >
          Simplified <strong className="text-foreground">complex workflows</strong>.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="mt-4 font-body text-lg text-muted-foreground md:text-xl leading-relaxed"
        >
          Partnered with everyone from <strong className="text-foreground">C-suite stakeholders</strong> to <strong className="text-foreground">frontline users</strong>.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2 }}
          className="mt-12 border-l-2 border-primary/30 pl-6 text-left"
        >
          <p className="font-body text-base text-muted-foreground italic leading-relaxed">
            "Great design sits at the intersection of <strong className="text-foreground not-italic">empathy</strong> and <strong className="text-foreground not-italic">strategy</strong>."
          </p>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8 }}
          className="mt-6 font-display text-sm tracking-widest text-primary/60"
        >
          I didn't just design screens. I shaped experiences.
        </motion.p>
      </div>
    ),
  },
  {
    id: 6,
    label: "EVOLUTION",
    content: (
      <div className="flex h-full flex-col items-center justify-center text-center px-8 max-w-2xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-body text-lg text-muted-foreground md:text-xl"
        >
          And now, I'm evolving again.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-4 font-body text-lg text-muted-foreground md:text-xl leading-relaxed"
        >
          Blending <strong className="text-foreground">deep user research</strong> with <strong className="text-foreground">analytical thinking</strong>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="mt-4 font-body text-lg text-muted-foreground md:text-xl leading-relaxed"
        >
          to deliver interfaces that are not just beautiful,
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0 }}
          className="mt-2 font-display text-2xl font-bold text-primary md:text-3xl"
        >
          but measurably effective.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8 }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <p className="font-display text-xs tracking-[0.2em] text-muted-foreground">
            MBA in Marketing & IT · B.Tech in IT
          </p>
          <p className="font-body text-sm text-muted-foreground">
            When I'm not designing, I'm exploring a new domain problem or mentoring junior designers.
          </p>
        </motion.div>
      </div>
    ),
  },
];

const Story = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const goNext = useCallback(() => {
    setCurrent((c) => Math.min(c + 1, slides.length - 1));
  }, []);

  const goPrev = useCallback(() => {
    setCurrent((c) => Math.max(c - 1, 0));
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "Escape") {
        navigate("/");
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev, navigate]);

  return (
    <div className="fixed inset-0 bg-background flex flex-col overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-4 z-10">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 font-body text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <Home className="h-4 w-4" />
          <span className="hidden sm:inline">Back</span>
        </button>

        {/* Dot indicators */}
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-primary w-6"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="font-display text-xs tracking-widest text-muted-foreground">
            {slides[current].label} · {current + 1}/{slides.length}
          </span>
          <ThemeToggle />
        </div>
      </div>

      {/* Slide content */}
      <div className="flex-1 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {slides[current].content}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom nav */}
      <div className="flex items-center justify-center gap-4 px-6 py-6 z-10">
        <button
          onClick={goPrev}
          disabled={current === 0}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-accent disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <button
          onClick={current === slides.length - 1 ? () => navigate("/") : goNext}
          className="flex h-10 items-center gap-2 rounded-full bg-primary px-6 font-body text-sm font-medium text-primary-foreground transition-shadow hover:shadow-glow"
        >
          {current === slides.length - 1 ? (
            "View My Work →"
          ) : (
            <>
              Next <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </div>

      {/* Decorative floating elements */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 text-2xl text-primary/10 pointer-events-none hidden md:block"
      >
        ✦
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-32 left-16 text-3xl text-primary/10 pointer-events-none hidden md:block"
      >
        ✧
      </motion.div>
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-40 left-32 text-xl text-primary/5 pointer-events-none hidden lg:block"
      >
        ◆
      </motion.div>
    </div>
  );
};

export default Story;
