import { motion } from "framer-motion";
import { Search, Target, Lightbulb, Layout, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "Understand business goals, conduct research, audit current state, and define scope.",
  },
  {
    icon: Target,
    title: "Define",
    description: "Create personas, map user journeys, define requirements, and frame the core problem.",
  },
  {
    icon: Lightbulb,
    title: "Ideate",
    description: "Build information architecture, sketch wireframes, explore visual design concepts.",
  },
  {
    icon: Layout,
    title: "Prototype",
    description: "Craft interactive prototypes, run usability tests, and iterate based on real feedback.",
  },
  {
    icon: Rocket,
    title: "Implement",
    description: "Collaborate with dev teams, validate post-launch, and measure outcomes against goals.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="bg-card py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
            How I Work
          </h2>
          <p className="mx-auto max-w-md font-body text-muted-foreground">
            A proven, iterative process that bridges user needs and business outcomes.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-xl border border-border bg-background p-6 transition-all hover:border-primary/30 hover:shadow-card-hover"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                <step.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="mb-1 font-body text-xs font-medium text-primary">
                Step {i + 1}
              </div>
              <h3 className="mb-2 font-display text-lg font-bold text-foreground">
                {step.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
