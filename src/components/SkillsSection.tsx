import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "UX Leadership",
    skills: ["Interaction Design", "Information Architecture", "Design Systems", "Design Strategy", "Team Mentoring", "Stakeholder Management"],
  },
  {
    title: "Research & Testing",
    skills: ["User Research", "Usability Testing", "A/B Testing", "Competitive Analysis", "Analytics Review", "Persona Development"],
  },
  {
    title: "Product & BA",
    skills: ["Business Analysis", "Requirements Gathering", "User Stories", "Journey Mapping", "Process Optimization", "Cross-functional Collaboration"],
  },
  {
    title: "Tools & Methods",
    skills: ["Figma", "Sketch", "Adobe XD", "Miro", "JIRA", "Design Thinking"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-card py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
            What I Bring
          </h2>
          <p className="mx-auto max-w-md font-body text-muted-foreground">
            A blend of design craft, research rigor, and business fluency.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-background p-6"
            >
              <h3 className="mb-4 font-display text-lg font-bold text-foreground">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
