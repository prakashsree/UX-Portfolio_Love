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
              className="mb-8 inline-flex items-center gap-2 font-body text-sm text-muted-foreground transition-colors hover:text-primary">
              
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}>
              
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
          {/* Role & Scope meta */}
          <div className="mb-12 rounded-lg border border-border bg-card p-6 font-body text-sm text-muted-foreground">
            <div className="grid gap-3 sm:grid-cols-2">
              <div><span className="font-semibold text-foreground">Role:</span> Senior UX Designer (Individual Contributor)</div>
              <div><span className="font-semibold text-foreground">Scope:</span> Research, Design Thinking, Prototyping, A/B Testing</div>
              <div><span className="font-semibold text-foreground">Tools:</span>Tools: Figma, Sketch, User</div>
              <div><span className="font-semibold text-foreground">Timeline:</span> 3-month initial sprint for recovery improvements</div>
            </div>
          </div>

          <Section title="1. The Challenge">
            <p>A leading global telecommunications provider was facing a significant revenue leak: high cart abandonment rates across digital channels. The problem went deeper than just "change of mind." Our analytics revealed a disconnect between online and offline experiences.</p>
            <p>Customers would start a journey on a mobile device, or get a quote in-store (POS), but struggle to resume that journey later on a desktop or via a different channel. Sales representatives (Reps) also lacked visibility into digital carts, often forcing them to rebuild orders from scratch — a redundancy that frustrated customers and wasted time.</p>
            <p className="mt-4 rounded-md border-l-4 border-primary bg-secondary/50 p-4 font-semibold text-foreground">The Goal: Create a "Universal Cart" experience that persists across devices and channels, increasing cart recovery by 20% and quote-to-cart conversion by 15%.</p>
          </Section>

          <Section title="2. Discovery & Research">
            <p>To understand why users were abandoning carts, I led a mixed-methods research phase focusing on the end-to-end purchase experience.</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li><strong>User Interviews:</strong> I conducted 30 remote, one-on-one interviews with customers who had abandoned a cart or quote in the last 30 days.</li>
              <li><strong>Stakeholder Feedback:</strong> I gathered insights from Customer Service and Sales teams to understand the barriers they faced when trying to close a sale initiated online.</li>
              <li><strong>Competitive Audit:</strong> We analyzed competitors like AT&T and T-Mobile to benchmark best practices for quote-to-cart transitions.</li>
            </ul>
            <h3 className="mb-3 mt-6 font-display text-lg font-bold text-foreground">Key Insights</h3>
            <ul className="list-disc space-y-2 pl-5">
              <li><strong>Device Switching Friction:</strong> Customers frequently switched devices (Mobile App to Desktop Web) but lost their progress, forcing them to restart.</li>
              <li><strong>The "Black Box" for Reps:</strong> Sales reps couldn't see if a customer had an active digital cart without expanding multiple line items or launching a full order flow, leading them to ignore the digital cart entirely.</li>
              <li><strong>Lack of Context:</strong> When users did return to a cart, prices or promos might have changed. Without clear messaging explaining the change, users felt confused and abandoned the cart again.</li>
            </ul>
          </Section>

          <Section title="3. Defining the Problem">
            <p>Synthesizing the research, we developed the "Sam" persona — a busy working mom who starts shopping on her mobile app but needs to finish on her laptop after the kids are asleep. We mapped "Sam's" journey and identified the specific drop-off points.</p>
            <p className="mt-4">This led to two core "How Might We" statements:</p>
            <ul className="mt-2 list-disc space-y-2 pl-5">
              <li>How might we encourage customers to resume their shopping journey exactly where they left off, regardless of the device?</li>
              <li>How can we give Sales Reps immediate visibility into a customer's digital activity to facilitate a seamless hand-off?</li>
            </ul>
          </Section>

          <Section title="4. The Solution">
            <p>We moved into ideation and prototyping, focusing on a Unified Cart System. I worked closely with engineering to ensure the designs were feasible within the backend constraints.</p>

            <h3 className="mb-3 mt-6 font-display text-lg font-bold text-foreground">A. The "Universal" Cross-Channel Cart</h3>
            <p>We designed a persistent cart architecture. If a user adds an iPhone to their cart in the app, it appears instantly on the desktop site. We created multiple entry points (Empty Cart page, Account Landing, Email) to guide users back to their active journey.</p>

            <h3 className="mb-3 mt-6 font-display text-lg font-bold text-foreground">B. "A Few Things Have Changed" Messaging</h3>
            <p>One of our biggest UX wins was transparency. If a user returned to a cart after a promotion expired or stock changed, the system historically just updated the price silently, causing distrust.</p>
            <p className="mt-2"><strong>The Fix:</strong> I designed a dynamic notification module titled "A few things have changed since your last visit." This explicitly listed what changed (e.g., "The selected promo is no longer available") helping re-anchor the user so they could proceed with confidence.</p>

            <h3 className="mb-3 mt-6 font-display text-lg font-bold text-foreground">C. Shared Cart Tiles for Sales Reps</h3>
            <p>To solve the "Black Box" issue for employees, I redesigned the POS interface.</p>
            <ul className="mt-2 list-disc space-y-2 pl-5">
              <li><strong>Dynamic Visibility:</strong> We added a dedicated "Shared Cart" tile that only appears if the customer has an active digital cart.</li>
              <li><strong>Unified View:</strong> Reps could now see the full cart contents at a glance and click one button to "Launch Order," effectively bridging the gap between digital browsing and in-store closing.</li>
            </ul>

            <h3 className="mb-3 mt-6 font-display text-lg font-bold text-foreground">D. Multi-Quote Comparison</h3>
            <p>We found users often requested multiple quotes in-store but couldn't compare them easily at home. I designed a "Cross-Channel Quote Experience" allowing users to compare up to three quotes side-by-side on their digital dashboard and convert their preferred choice into a cart with a single click.</p>
          </Section>

          <Section title="5. Validation & Iteration">
            <p>Before full release, we ran a survey with 127 Retail and Inside Sales employees to validate the new POS tiles.</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li><strong>The Friction:</strong> 82% of reps admitted they historically didn't resume carts because they feared technical errors or outdated promos.</li>
              <li><strong>The Iteration:</strong> We used this feedback to refine the error handling and ensure the "Last Edited" timestamps were prominent, giving Reps the confidence to use the feature.</li>
            </ul>
          </Section>

          <Section title="6. The Impact">
            <p>The Universal Cart project delivered immediate, quantifiable business results within three months of launch:</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-border bg-secondary/30 p-4 text-center">
                <p className="font-display text-2xl font-bold text-primary">25%</p>
                <p className="text-sm">Increase in cart recovery rates</p>
              </div>
              <div className="rounded-lg border border-border bg-secondary/30 p-4 text-center">
                <p className="font-display text-2xl font-bold text-primary">30%</p>
                <p className="text-sm">Increase in POS quote-to-digital cart conversion</p>
              </div>
              <div className="rounded-lg border border-border bg-secondary/30 p-4 text-center">
                <p className="font-display text-2xl font-bold text-primary">15,000+</p>
                <p className="text-sm">Resumed carts per month via Assisted channels</p>
              </div>
              <div className="rounded-lg border border-border bg-secondary/30 p-4 text-center">
                <p className="font-display text-2xl font-bold text-primary">1.4%</p>
                <p className="text-sm">Reduction in redundant new carts by Reps</p>
              </div>
            </div>
          </Section>

          <Section title="7. Reflections">
            <p>This project reinforced that in an omnichannel environment, you cannot design for the customer in isolation. You must also design for the employees (Reps) who support them. By solving the Reps' visibility issues, we inadvertently solved the customer's continuity issue.</p>
          </Section>
        </div>
      </main>
      <Footer />
    </>);

};

const Section = ({ title, children }: {title: string;children: React.ReactNode;}) =>
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="mb-12">
  
    <h2 className="mb-4 font-display text-2xl font-bold text-foreground">{title}</h2>
    <div className="space-y-3 font-body text-base leading-relaxed text-muted-foreground">{children}</div>
  </motion.div>;


export default UniversalCartCaseStudy;