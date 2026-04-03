import { motion } from "framer-motion";

const storyBlocks = [
  {
    chapter: "The Beginning",
    lines: [
      "I began in engineering.",
      "Learning how systems are built.",
      <>How they <strong>scale</strong>. How they <strong>hold</strong>.</>,
      "Architecture before aesthetics.",
    ],
  },
  {
    chapter: "The Shift",
    lines: [
      "But somewhere along the way,",
      <>I started asking <strong>different questions</strong>.</>,
      <><em>How does it work?</em> → <em>How does it feel?</em></>,
      "That question changed everything.",
    ],
    transition: "Engineering → UX Design",
  },
  {
    chapter: "The Journey",
    lines: [
      <>12+ years across <strong>two worlds</strong>.</>,
      <>Enterprise taught me <strong>scale</strong>. Process. Collaboration across teams.</>,
      <>Consulting taught me <strong>speed</strong>. Ownership. Decisions that mattered immediately.</>,
    ],
    transition: "Structure → Ownership",
  },
  {
    chapter: "The Domains",
    lines: [
      <>I've worked across <strong>Communications</strong>, <strong>Media &amp; Technology</strong>, <strong>Retail</strong>, and <strong>Hospitality</strong></>,
      "designing products people rely on every day.",
      "And I've always believed in one thing:",
    ],
    highlight: "Outcomes over outputs.",
  },
  {
    chapter: "The Impact",
    stats: [
      { value: "20+", label: "Projects delivered across 5+ domains" },
      { value: "12+", label: "Years shaping high-impact interfaces" },
      { value: "5+", label: "Industry verticals transformed" },
    ],
    lines: ["Not just shipped. Improved."],
  },
  {
    chapter: "The Craft",
    lines: [
      <>I built <strong>design systems</strong> from scratch.</>,
      <>Simplified <strong>complex workflows</strong>.</>,
      <>Bridged <strong>UX &amp; Business</strong> to align stakeholders.</>,
      "I didn't just design screens.",
      "I shaped experiences.",
    ],
  },
  {
    chapter: "What's Next",
    lines: [
      "And now, I'm evolving again.",
      <>Designing <strong>scalable systems</strong> and <strong>strategic frameworks</strong>,</>,
      <>without ever compromising on <strong>craft</strong>.</>,
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  }),
};

const StorySection = () => {
  return (
    <section id="story" className="bg-muted/30 py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
            My Story
          </h2>
          <p className="mx-auto max-w-md font-body text-muted-foreground">
            The journey from engineering to experience design.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-2xl">
          {/* Vertical timeline line */}
          <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-px" />

          <div className="space-y-20">
            {storyBlocks.map((block, blockIdx) => (
              <motion.div
                key={block.chapter}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="relative pl-12 md:pl-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 top-1 h-3 w-3 rounded-full border-2 border-primary bg-background md:left-1/2 md:-translate-x-1.5" />

                {/* Chapter label */}
                <motion.span
                  custom={0}
                  variants={fadeUp}
                  className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 font-body text-xs font-semibold uppercase tracking-wider text-primary"
                >
                  {block.chapter}
                </motion.span>

                {/* Lines */}
                <div className="space-y-2">
                  {block.lines?.map((line, i) => (
                    <motion.p
                      key={i}
                      custom={i + 1}
                      variants={fadeUp}
                      className="font-body text-base leading-relaxed text-muted-foreground"
                    >
                      {line}
                    </motion.p>
                  ))}
                </div>

                {/* Highlight quote */}
                {block.highlight && (
                  <motion.p
                    custom={4}
                    variants={fadeUp}
                    className="mt-4 border-l-2 border-primary pl-4 font-display text-xl font-bold text-foreground"
                  >
                    {block.highlight}
                  </motion.p>
                )}

                {/* Transition badge */}
                {block.transition && (
                  <motion.div
                    custom={5}
                    variants={fadeUp}
                    className="mt-4 inline-block rounded-lg bg-accent px-4 py-2 font-body text-sm font-medium text-accent-foreground"
                  >
                    {block.transition}
                  </motion.div>
                )}

                {/* Stats */}
                {block.stats && (
                  <motion.div
                    custom={1}
                    variants={fadeUp}
                    className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3"
                  >
                    {block.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-xl border border-border bg-card p-4 text-center"
                      >
                        <div className="font-display text-2xl font-bold text-primary">
                          {stat.value}
                        </div>
                        <div className="mt-1 font-body text-xs text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
