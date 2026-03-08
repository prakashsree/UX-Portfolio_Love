import { motion } from "framer-motion";
import avatar from "@/assets/prakash-avatar.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative">
            
            <div className="relative mx-auto max-w-sm overflow-hidden rounded-2xl">
              <img
                src={avatar}
                alt="Prakash S – Lead UX Designer"
                className="h-full w-full object-cover" />
              
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary/10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}>
            
            <h2 className="mb-6 font-display text-3xl font-bold text-foreground sm:text-4xl">
              Nice to meet you.
            </h2>
            <div className="space-y-4 font-body text-base leading-relaxed text-muted-foreground">
              <p>I'm Prakash S — a Lead UX Designer/Analyst with 12+ years of experience building products that make a real difference. I've had the privilege of working across Communications, Media, Technology, Retail, and Hospitality, partnering with everyone from C-suite stakeholders to frontline users.

              </p>
              <p>
                I believe great design sits at the intersection of empathy and strategy. My approach blends deep user research with analytical thinking to deliver interfaces that are not just beautiful, but measurably effective.
              </p>
              <p>
                I hold an MBA in Marketing & IT from Vanguard Business School, Bengaluru, and a B.Tech in IT from DCE, Chennai (Anna University). When I'm not designing, I'm probably exploring a new domain problem or mentoring junior designers.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
              { value: "12+", label: "Years Experience" },
              { value: "5+", label: "Industry Domains" },
              { value: "30+", label: "Projects Delivered" }].
              map((stat) =>
              <div key={stat.label}>
                  <div className="font-display text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="font-body text-xs text-muted-foreground">{stat.label}</div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default AboutSection;