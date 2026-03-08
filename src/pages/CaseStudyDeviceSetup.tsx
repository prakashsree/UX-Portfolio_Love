import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import deviceImg from "@/assets/case-device-setup.jpg";

const DeviceSetupCaseStudy = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="bg-card py-16">
          <div className="container mx-auto px-6">
            <Link
              to="/"
              className="mb-8 inline-flex items-center gap-2 font-body text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="mb-2 font-body text-sm font-medium uppercase tracking-wider text-primary">
                Communications & Technology
              </p>
              <h1 className="mb-4 font-display text-3xl font-bold text-foreground sm:text-5xl">
                Device Setup Experience
              </h1>
              <p className="mb-8 max-w-2xl font-body text-lg text-muted-foreground">
                Creating a single destination for device setup that's easy to follow and increases adoption of tech support offerings.
              </p>
              <div className="flex flex-wrap gap-6 font-body text-sm text-muted-foreground">
                <div><span className="font-semibold text-foreground">Role:</span> Lead Designer</div>
                <div><span className="font-semibold text-foreground">Goal:</span> One Place To Go for device setup</div>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-6 py-12">
          <img src={deviceImg} alt="Device Setup case study" className="w-full rounded-xl object-cover shadow-card" />
        </div>

        <div className="container mx-auto max-w-3xl px-6 pb-24">
          <Section title="The Challenge">
            <p>Customers struggled to find and access device setup resources. Assets were scattered across multiple touchpoints, making it difficult for users to complete setup on their own. The goal was to create a "One Place To Go" (OPTG) experience that centralizes all setup help and increases adoption of Tech Coach offerings.</p>
          </Section>

          <Section title="Approach">
            <p>I led the UX design for this initiative, focusing on:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Mapping the complete device setup journey from unboxing to activation</li>
              <li>Identifying all existing setup assets and organizing them into a clear information architecture</li>
              <li>Designing simple, step-by-step setup pages that are easy to follow</li>
              <li>Integrating Tech Coach offerings naturally within the setup flow</li>
            </ul>
          </Section>

          <Section title="Design Solution">
            <p>The final design provided a unified, guided experience where customers could:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Access all setup resources from a single entry point</li>
              <li>Follow clear, visual step-by-step instructions</li>
              <li>Get contextual help and Tech Coach support when needed</li>
              <li>Track their setup progress across multiple devices</li>
            </ul>
          </Section>

          <Section title="Outcome">
            <p>The consolidated device setup experience significantly improved user completion rates for device setup and boosted adoption of Tech Coach offerings, creating a more confident and self-sufficient customer base.</p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-12"
  >
    <h2 className="mb-4 font-display text-2xl font-bold text-foreground">{title}</h2>
    <div className="space-y-3 font-body text-base leading-relaxed text-muted-foreground">{children}</div>
  </motion.div>
);

export default DeviceSetupCaseStudy;
