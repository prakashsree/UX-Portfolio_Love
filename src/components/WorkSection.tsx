import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import cartImg from "@/assets/case-universal-cart.jpg";
import deviceImg from "@/assets/case-device-setup.jpg";
import bcspImg from "@/assets/case-bcsp-services.jpg";

const projects = [
  {
    id: "universal-cart",
    title: "Universal Cart & Quote Experience",
    subtitle: "Communications & Technology",
    description:
      "Redesigned the cross-channel cart and quote system for a global telecom leader, reducing cart abandonment and enabling seamless quote-to-cart conversion across devices and channels.",
    role: "Sr UX Designer",
    tags: ["Research", "Design Thinking", "Prototyping", "Usability Testing"],
    image: cartImg,
    link: "/case-study/universal-cart",
  },
  {
    id: "device-setup",
    title: "Device Setup Experience",
    subtitle: "Communications & Technology",
    description:
      "Created a unified, easy-to-follow device setup experience that centralizes all setup assets and increases adoption of tech support offerings.",
    role: "Lead Designer",
    tags: ["UX Design", "Information Architecture", "User Flows"],
    image: deviceImg,
    link: "/case-study/device-setup",
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="bg-background py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Selected Work
          </h2>
          <p className="mx-auto max-w-md font-body text-muted-foreground">
            A few projects I'm proud of — from research to shipped product.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <Link
                to={project.link}
                className="group block overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all hover:shadow-card-hover"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                </div>
                <div className="p-6">
                  <p className="mb-1 font-body text-xs font-medium uppercase tracking-wider text-primary">
                    {project.subtitle}
                  </p>
                  <h3 className="mb-2 flex items-center gap-2 font-display text-xl font-bold text-card-foreground">
                    {project.title}
                    <ArrowUpRight className="h-4 w-4 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                  </h3>
                  <p className="mb-4 font-body text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-secondary px-2 py-1 font-body text-xs text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
