import { motion } from "framer-motion";

export interface SlideData {
  id: number;
  label: string;
  duration: number; // seconds per slide for autoplay
  content: React.ReactNode;
}

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
});

const fadeIn = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { delay, duration: 0.8 },
});

export const slides: SlideData[] = [
  {
    id: 1,
    label: "THE BEGINNING",
    duration: 8,
    content: (
      <div className="flex h-full flex-col items-center justify-center text-center px-8">
        <motion.p {...fadeUp(0.2)} className="font-body text-lg text-muted-foreground md:text-xl max-w-2xl">
          Engineering gave me logic. But it was the people using technology who fascinated me more than the technology itself. Why do some tools clicks instantly, while others frustrate you into giving up?
        </motion.p>
        <motion.p {...fadeUp(0.6)} className="mt-4 font-body text-lg text-muted-foreground md:text-xl max-w-2xl">
          Learning how systems are built.
        </motion.p>
        <motion.p {...fadeUp(1.0)} className="mt-4 font-body text-lg text-muted-foreground md:text-xl max-w-2xl">
          How they <strong className="text-foreground">scale</strong>. How they <strong className="text-foreground">hold</strong>.
        </motion.p>
        <motion.p {...fadeUp(1.6)} className="mt-8 font-body text-lg text-muted-foreground md:text-xl max-w-2xl">
          But somewhere along the way,
        </motion.p>
        <motion.p {...fadeUp(2.0)} className="mt-4 font-body text-lg text-muted-foreground md:text-xl max-w-2xl">
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
        <motion.p {...fadeIn(3.2)} className="mt-6 font-display text-sm tracking-widest text-primary/60">
          That question changed everything.
        </motion.p>
      </div>
    ),
  },
  {
    id: 2,
    label: "TWO WORLDS",
    duration: 7,
    content: (
      <div className="flex h-full flex-col items-center justify-center text-center px-8">
        <motion.p {...fadeUp(0.2)} className="font-display text-4xl font-bold text-foreground md:text-5xl">
          12+ years
        </motion.p>
        <motion.p {...fadeUp(0.6)} className="mt-2 font-body text-lg text-muted-foreground">
          across <strong className="text-foreground">two worlds</strong>
        </motion.p>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 max-w-3xl w-full">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
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
            transition={{ delay: 1.4, duration: 0.6 }}
            className="rounded-2xl border border-border bg-card p-8 text-left"
          >
            <h3 className="font-display text-xl font-bold text-foreground">Consulting</h3>
            <p className="mt-3 font-body text-sm text-muted-foreground leading-relaxed">
              taught me <strong className="text-foreground">strategy</strong>. Ownership.<br />
              Decisions that shaped products.
            </p>
          </motion.div>
        </div>
        <motion.div {...fadeIn(2.0)} className="mt-10 flex items-center gap-4 font-display text-xs tracking-[0.2em] text-muted-foreground">
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
    duration: 7,
    content: (
      <div className="flex h-full flex-col items-center justify-center text-center px-8">
        <motion.p {...fadeUp(0.2)} className="font-body text-lg text-muted-foreground md:text-xl max-w-2xl">
          I've worked across
        </motion.p>
        <motion.div {...fadeUp(0.6)} className="mt-6 flex flex-wrap justify-center gap-3">
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
        <motion.p {...fadeUp(2.0)} className="mt-8 font-body text-lg text-muted-foreground max-w-xl">
          Designing products people rely on every day.<br /><br />Each domain taught me something the last one couldn't. Complex enterprise systems. Consumer apps. Government education platforms. Different problems, same methodology.
        </motion.p>
        <motion.p {...fadeIn(2.6)} className="mt-6 font-display text-base font-semibold tracking-wide text-primary">
          Outcomes over outputs.
        </motion.p>
      </div>
    ),
  },
  {
    id: 4,
    label: "IMPACT",
    duration: 7,
    content: (
      <div className="flex h-full flex-col items-center justify-center text-center px-8">
        <motion.p {...fadeUp(0.2)} className="font-body text-base text-muted-foreground mb-10">
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
              transition={{ delay: 0.6 + i * 0.3, duration: 0.6 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="font-display text-3xl font-bold text-primary md:text-4xl">{stat.value}</div>
              <div className="mt-2 font-body text-xs text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        <motion.p {...fadeIn(2.2)} className="mt-8 font-display text-sm tracking-widest text-primary/60">
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
    duration: 7,
    content: (
      <div className="flex h-full flex-col items-center justify-center text-center px-8 max-w-2xl mx-auto">
        <motion.p {...fadeUp(0.2)} className="font-body text-lg text-muted-foreground md:text-xl leading-relaxed">
          Simplified <strong className="text-foreground">complex workflows</strong>.
        </motion.p>
        <motion.p {...fadeUp(0.8)} className="mt-6 font-body text-lg text-muted-foreground md:text-xl leading-relaxed">
          Partnered with everyone from <strong className="text-foreground">C-suite stakeholders</strong> to <strong className="text-foreground">frontline users</strong>.
        </motion.p>
        <motion.div {...fadeUp(1.4)} className="mt-12 border-l-2 border-primary/30 pl-6 text-left">
          <p className="font-body text-base text-muted-foreground italic leading-relaxed">
            "Great design sits at the intersection of <strong className="text-foreground not-italic">empathy</strong> and <strong className="text-foreground not-italic">strategy</strong>."
          </p>
        </motion.div>
        <motion.p {...fadeIn(2.0)} className="mt-8 font-display text-sm tracking-widest text-primary/60">
          I didn't just design screens. I shaped experiences.
        </motion.p>
      </div>
    ),
  },
  {
    id: 6,
    label: "EVOLUTION",
    duration: 7,
    content: (
      <div className="flex h-full flex-col items-center justify-center text-center px-8 max-w-2xl mx-auto">
        <motion.p {...fadeUp(0.2)} className="font-body text-lg text-muted-foreground md:text-xl">
          And now, I'm evolving again.
        </motion.p>
        <motion.p {...fadeUp(0.8)} className="mt-4 font-body text-lg text-muted-foreground md:text-xl leading-relaxed">
          Blending <strong className="text-foreground">deep user research</strong> with <strong className="text-foreground">analytical thinking</strong>
        </motion.p>
        <motion.p {...fadeUp(1.4)} className="mt-4 font-body text-lg text-muted-foreground md:text-xl leading-relaxed">
          to deliver interfaces that are not just beautiful,
        </motion.p>
        <motion.p {...fadeUp(2.0)} className="mt-2 font-display text-2xl font-bold text-primary md:text-3xl">
          but measurably effective.
        </motion.p>
        <motion.div {...fadeIn(2.8)} className="mt-12 flex flex-col items-center gap-4">
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
  {
    id: 7,
    label: "NOW",
    duration: 7,
    content: (
      <div className="flex h-full flex-col items-center justify-center text-center px-8 max-w-2xl mx-auto">
        <motion.p {...fadeUp(0.2)} className="font-body text-lg text-muted-foreground md:text-xl leading-relaxed">
          Still curious.
        </motion.p>
        <motion.p {...fadeUp(0.8)} className="mt-4 font-body text-lg text-muted-foreground md:text-xl leading-relaxed">
          Still designing.
        </motion.p>
        <motion.p {...fadeUp(1.4)} className="mt-4 font-body text-lg text-muted-foreground md:text-xl leading-relaxed">
          Still asking <strong className="text-foreground">why</strong>.
        </motion.p>
        <motion.p {...fadeUp(2.0)} className="mt-10 font-display text-sm tracking-widest text-primary/60">
          Based in Bengaluru, available globally.
        </motion.p>
        <motion.p {...fadeUp(2.6)} className="mt-6 font-body text-base text-muted-foreground leading-relaxed">
          If you have a complex problem that needs both <strong className="text-foreground">design thinking</strong> and <strong className="text-foreground">business sense</strong> — I'd genuinely love to hear about it.
        </motion.p>
      </div>
    ),
  },
  {
    id: 8,
    label: "CLOSING",
    duration: 8,
    content: (
      <div className="flex h-full flex-col items-center justify-center text-center px-8 max-w-2xl mx-auto">
        <motion.p {...fadeUp(0.2)} className="font-body text-base text-muted-foreground md:text-lg leading-relaxed">
          Engineering taught me systems. Design taught me empathy. AI is teaching me orchestration.
        </motion.p>
        <motion.div {...fadeIn(0.8)} className="mt-8 text-primary/40 text-lg tracking-[0.3em]">
          ✿❀✿
        </motion.div>
        <motion.h2 {...fadeUp(1.2)} className="mt-8 font-display text-3xl font-bold text-foreground md:text-4xl">
          Prakash S
        </motion.h2>
        <motion.p {...fadeUp(1.6)} className="mt-2 font-display text-sm tracking-widest text-primary">
          Lead UX Designer
        </motion.p>
        <motion.p {...fadeIn(2.0)} className="mt-6 font-display text-xs tracking-[0.2em] text-muted-foreground">
          Engineer ✿ Designer ✿ AI-native
        </motion.p>
        <motion.p {...fadeIn(2.4)} className="mt-4 font-body text-sm text-muted-foreground">
          ✿ Bengaluru, India
        </motion.p>
        <motion.p {...fadeUp(2.8)} className="mt-8 font-display text-lg font-semibold text-primary tracking-wide">
          Let's build what's next.
        </motion.p>
      </div>
    ),
  },
];
