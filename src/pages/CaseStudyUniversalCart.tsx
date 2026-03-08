import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import cartImg from "@/assets/case-universal-cart.jpg";

const UniversalCartCaseStudy = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
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
                Universal Cart & Quote Experience
              </h1>
              <p className="mb-8 max-w-2xl font-body text-lg text-muted-foreground">
                Reducing cart abandonment and enabling seamless quote-to-cart conversion for a global telecom leader with millions of customers.
              </p>
              <div className="flex flex-wrap gap-6 font-body text-sm text-muted-foreground">
                <div><span className="font-semibold text-foreground">Role:</span> Sr UX Designer</div>
                <div><span className="font-semibold text-foreground">Type:</span> Individual Contributor</div>
                <div><span className="font-semibold text-foreground">Methods:</span> Research, Design Thinking, Prototyping, Spot Testing</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Cover image */}
        <div className="container mx-auto px-6 py-12">
          <img src={cartImg} alt="Universal Cart case study" className="w-full rounded-xl object-cover shadow-card" />
        </div>

        {/* Content */}
        <div className="container mx-auto max-w-3xl px-6 pb-24">
          <Section title="The Challenge">
            <p>The client, a leading global Communications and Technology company, was facing significant cart abandonment rates across digital channels and physical stores. Customers would start shopping, only to leave their carts unfinished. There was also a major disconnect between online and offline — customers couldn't manage quotes generated in-store or convert them into online purchases.</p>
          </Section>

          <Section title="Objectives">
            <ul className="list-disc space-y-2 pl-5">
              <li>Encourage customers to return to abandoned carts and resume shopping across devices and channels</li>
              <li>Enable seamless conversion of POS-generated quotes into digital carts</li>
              <li>Allow customers to compare multiple quotes for informed purchasing decisions</li>
            </ul>
          </Section>

          <Section title="Research & Discovery">
            <p>I conducted 30 in-depth interviews with customers who had abandoned carts or quotes within the past 30 days, plus gathered feedback from customer service teams. Key findings included:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Half of customers abandoned carts because in-store deals offered better pricing and same-day pickup</li>
              <li>All customers felt a lack of follow-up and found navigation complex</li>
              <li>Customers wanted a simple, consistent saved cart experience across web and app</li>
              <li>In the assisted channel, shared cart info was buried, and reps couldn't see the entire cart in one place</li>
            </ul>
          </Section>

          <Section title="Define & Frame">
            <p>We synthesized research into clear problem statements and goals:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Increase cart closure rate by 20% within 3 months</li>
              <li>Improve quote-to-cart conversion by 15%</li>
              <li>Enhance cross-device and cross-channel user experience</li>
              <li>Provide clear comparison tools for quotes</li>
            </ul>
            <p className="mt-4">Developed detailed user personas — including "Sam," a busy working mom who needs quick, efficient shopping — and mapped multi-channel customer journeys (web→web, app→web, web→app).</p>
          </Section>

          <Section title="Ideate & Prototype">
            <p>Through collaborative brainstorming with cross-functional teams, we prioritized:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>A unified cart and quote system across all channels</li>
              <li>Personalized push notifications and email reminders</li>
              <li>An intuitive quote-to-cart conversion flow</li>
              <li>A persistent shopping cart active across sessions</li>
              <li>Intelligent product recommendations based on cart contents</li>
            </ul>
            <p className="mt-4">We created low-fidelity sketches, paper prototypes, and user flow diagrams, then tested them with representative users before moving to high-fidelity prototypes with A/B testing.</p>
          </Section>

          <Section title="Key Design Decisions">
            <ul className="list-disc space-y-2 pl-5">
              <li><strong>"A few things have changed" messaging:</strong> Dynamic notifications for both digital and assisted channels when cart contents changed over time</li>
              <li><strong>Cross-channel quote comparison:</strong> Users could compare up to 3 quotes on a single page across desktop and mobile</li>
              <li><strong>Express Hub integration:</strong> Feed cards in the mobile app when customers had resumable quotes, with the rep still receiving credit for the sale</li>
            </ul>
          </Section>

          <Section title="Outcome">
            <p>The redesigned universal cart experience successfully reduced cart abandonment, streamlined quote conversion, and created a seamless cross-channel journey — meeting the business goals of increased cart closure and improved customer satisfaction.</p>
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

export default UniversalCartCaseStudy;
