import { motion } from "framer-motion";
import { ArrowLeft, Users, MessageSquare, Search, ClipboardList, CircleAlert, ShoppingCart, Bookmark, CircleHelp, Smartphone, EyeOff, TriangleAlert } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import cartImg from "@/assets/case-universal-cart.jpg";
import personaImg from "@/assets/persona-sam.jpg";
import multiQuoteImg from "@/assets/multi-quote-comparison.png";
import smartConciergeImg from "@/assets/smart-concierge-quote.png";
import successImg from "@/assets/smart-concierge-success.png";
import appreciationImg from "@/assets/appreciation-email.png";
import awardsImg from "@/assets/awards-bravo.png";
import surveyImg from "@/assets/survey-questions.png";

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
                <div><span className="font-semibold text-foreground">Methods:</span>Methods: Research, Design Thinking, Low/High Fidelity Prototyping, Spot Testing Ambassador</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Cover image */}
        <div className="container mx-auto px-6 py-12">
          <img src={cartImg} alt="Universal Cart case study" className="w-full rounded-xl object-cover shadow-card" />
          <p className="mt-4 text-center text-xs italic text-muted-foreground">
            Note: This portfolio (contents/images) are for demonstration purpose only. To comply with my non-disclosure agreement, I have omitted and obfuscated confidential information in this portfolio. It should not be disclosed to any third party. Please feel free to contact me for further details. Some images and screens are blurred for confidentiality.
          </p>
        </div>

        {/* Content */}
        <div className="container mx-auto max-w-3xl px-6 pb-24">
          {/* Role & Scope meta */}
          






          

          <Section title="1. The Challenge">
            <p>A leading global telecommunications provider was facing a significant revenue leak: high cart abandonment rates across digital channels. The problem went deeper than just "change of mind." Our analytics revealed a disconnect between online and offline experiences.</p>
            <p>Customers would start a journey on a mobile device, or get a quote in-store (POS), but struggle to resume that journey later on a desktop or via a different channel. Sales representatives (Reps) also lacked visibility into digital carts, often forcing them to rebuild orders from scratch — a redundancy that frustrated customers and wasted time.</p>
            <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-6">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-lg text-primary-foreground">🎯</span>
                <div>
                  <h4 className="font-display text-sm font-bold uppercase tracking-wider text-primary">The Goal</h4>
                  <p className="mt-1 text-base font-medium leading-relaxed text-foreground">Create a "Universal Cart" experience that persists across devices and channels.</p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">↑ 20% Cart Recovery</span>
                    <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">↑ 15% Quote-to-Cart Conversion</span>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="2. Discovery & Research">
            <p>To understand why users were abandoning carts, I led a mixed-methods research phase focusing on the end-to-end purchase experience.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-display text-sm font-bold text-foreground">User Interviews</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Conducted 30 remote, one-on-one interviews with customers who had abandoned a cart or quote in the last 30 days.</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-display text-sm font-bold text-foreground">Stakeholder Feedback</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Gathered insights from Customer Service and Sales teams to understand barriers they faced when closing a sale initiated online.</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Search className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-display text-sm font-bold text-foreground">Competitive Audit</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Analyzed competitors like AT&T and T-Mobile to benchmark best practices for quote-to-cart transitions.</p>
              </div>
            </div>

            {/* Study Setup */}
            <div className="mt-8 rounded-xl border border-border bg-card p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <ClipboardList className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">Study Setup</h3>
              </div>
              <p className="text-sm text-muted-foreground"><strong className="text-foreground">Study Objective:</strong> Capture the end-to-end experience of customers who abandoned their cart while making a purchase to uncover:</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                <div className="flex items-start gap-2 rounded-lg bg-muted/50 p-3">
                  <CircleAlert className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">Expectations, needs and pain points about the current purchase process</span>
                </div>
                <div className="flex items-start gap-2 rounded-lg bg-muted/50 p-3">
                  <ShoppingCart className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">Reasons why carts are abandoned and returned to</span>
                </div>
                <div className="flex items-start gap-2 rounded-lg bg-muted/50 p-3">
                  <Bookmark className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">Customer awareness of current save cart features</span>
                </div>
              </div>
            </div>

            {/* Research Questions */}
            <div className="mt-6 rounded-xl border border-border bg-card p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <CircleHelp className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">Sample Key Research Questions</h3>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "What factors do customers consider when choosing what to add to their cart? When choosing to checkout?",
                  "What are the reasons behind customers abandoning their shopping carts before checkout?",
                  "In what instances do customers decide to return to an abandoned cart and checkout?",
                  "How long does it take for customers to make a purchase?",
                  "Do customers have any specific expectations when making a purchase?",
                  "Are customers aware that their cart is saved with the \"Save cart for later\" feature? Do they know how that feature works?",
                  "What information would customers like to have when returning to complete the checkout process? What would they like that information to look like?",
                ].map((q, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-lg bg-muted/50 p-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">{i + 1}</span>
                    <p className="text-sm leading-relaxed text-muted-foreground">{q}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Insights */}
            <div className="mt-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10">
                  <Lightbulb className="h-5 w-5 text-destructive" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">Key Insights</h3>
              </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10">
                  <Smartphone className="h-5 w-5 text-destructive" />
                </div>
                <h4 className="font-display text-sm font-bold text-foreground">Device Switching Friction</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Customers frequently switched devices (Mobile App → Desktop Web) but lost their progress, forcing them to restart.</p>
              </div>
              <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10">
                  <EyeOff className="h-5 w-5 text-destructive" />
                </div>
                <h4 className="font-display text-sm font-bold text-foreground">The "Black Box" for Reps</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Sales reps couldn't see if a customer had an active digital cart, leading them to ignore the digital cart entirely and rebuild orders from scratch.</p>
              </div>
              <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10">
                  <TriangleAlert className="h-5 w-5 text-destructive" />
                </div>
                <h4 className="font-display text-sm font-bold text-foreground">Lack of Context</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">When users returned to a cart, prices or promos might have changed. Without clear messaging, users felt confused and abandoned the cart again.</p>
              </div>
            </div>
            </div>
          </Section>

          <Section title="3. Defining the Problem">
            <p>Synthesizing the research, we developed the "Sam" persona — a busy working mom who starts shopping on her mobile app but needs to finish on her laptop after the kids are asleep. We mapped "Sam's" journey and identified the specific drop-off points.</p>
            <p className="mt-4">This led to two core "How Might We" statements:</p>
            <ul className="mt-2 list-disc space-y-2 pl-5">
              <li>How might we encourage customers to resume their shopping journey exactly where they left off, regardless of the device?</li>
              <li>How can we give Sales Reps immediate visibility into a customer's digital activity to facilitate a seamless hand-off?</li>
            </ul>

            {/* User Persona */}
            <div className="mt-8 rounded-xl border border-border bg-card p-6 md:p-8">
              <h3 className="mb-6 font-display text-lg font-bold text-foreground">User Persona</h3>
              <div className="grid gap-6 md:grid-cols-[200px_1fr]">
                <div className="flex flex-col items-center text-center">
                  <div className="relative h-52 w-44 overflow-hidden rounded-lg bg-muted">
                    <img src={personaImg} alt="User persona - Sam" className="h-full w-full object-cover" />
                  </div>
                  <p className="mt-3 max-w-[200px] text-xs italic text-primary">"I appreciate shopping experiences that are quick, convenient and simple."</p>
                </div>
                <div className="space-y-5">
                  <div className="flex flex-wrap gap-3">
                    <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">Age: 38</span>
                    <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">Occupation: Finance</span>
                    <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">Status: Married</span>
                  </div>
                  <div>
                    <h4 className="mb-1.5 font-display text-sm font-bold text-foreground">Background</h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">I'm a very busy working mom. When I'm not at work, I'm dropping kids off or picking kids up from school or various activities. I'm lucky if I get a few minutes to myself to relax. A few of us need new phones and I hope that it's quick and easy.</p>
                  </div>
                  <div className="grid gap-5 lg:grid-cols-2">
                    <div className="rounded-lg bg-muted/50 p-4">
                      <h4 className="mb-2 font-display text-sm font-bold text-foreground">Behaviors</h4>
                      <ul className="list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-muted-foreground">
                        <li>I use my phone a lot between work, keeping in touch with the kids and personal use</li>
                        <li>Time is precious, so efficiency is key</li>
                        <li>I do try to get a good deal on things when I can, so I'm not afraid to do a little research before making a big purchase</li>
                      </ul>
                    </div>
                    <div className="rounded-lg bg-destructive/5 p-4">
                      <h4 className="mb-2 font-display text-sm font-bold text-destructive">Key Frustrations</h4>
                      <ul className="list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-muted-foreground">
                        <li>My life is very busy and hectic. I'm constantly being pulled in multiple directions. I have a tendency to have to stop what I'm doing because something has come up with the kids or work.</li>
                        <li>When I've upgraded in the past, it always seemed to be a much more complicated process than I thought it would be</li>
                        <li>When I do get around to buying phones, I hope it is quick because I can't afford to spend too much time on it with everything else going on with the family</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* User Journey */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="mb-4 font-display text-2xl font-bold text-foreground">User Journey: .COM to .COM</h2>
            <div className="space-y-0">
              {/* Timeline */}
              <div className="relative flex flex-col gap-0">
                {/* Start phase */}
                <div className="mb-2">
                  <span className="inline-block rounded-full bg-primary px-3 py-1 font-display text-xs font-bold text-primary-foreground">Start</span>
                </div>
                <div className="flex flex-col gap-4 border-l-2 border-primary/30 pl-6">
                  <div className="relative rounded-lg border border-border bg-card p-4">
                    <span className="absolute -left-[1.85rem] top-4 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">1</span>
                    <p className="text-sm text-muted-foreground">Sam is an existing customer with an old smartphone.</p>
                  </div>
                  <div className="relative rounded-lg border border-border bg-card p-4">
                    <span className="absolute -left-[1.85rem] top-4 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">2</span>
                    <p className="text-sm text-muted-foreground">Sam wants to upgrade her phone and see how much it would cost her.</p>
                  </div>
                  <div className="relative rounded-lg border border-border bg-card p-4">
                    <span className="absolute -left-[1.85rem] top-4 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">3</span>
                    <p className="text-sm text-muted-foreground">She shops for an iPhone on the website, customizes it according to her needs and adds it to her cart to estimate the price.</p>
                  </div>
                </div>

                {/* Pause phase */}
                <div className="mb-2 mt-6">
                  <span className="inline-block rounded-full bg-yellow-500 px-3 py-1 font-display text-xs font-bold text-white">Pause</span>
                </div>
                <div className="flex flex-col gap-4 border-l-2 border-yellow-500/30 pl-6">
                  <div className="relative rounded-lg border border-border bg-card p-4">
                    <span className="absolute -left-[1.85rem] top-4 flex h-4 w-4 items-center justify-center rounded-full bg-yellow-500 text-[10px] text-white">4</span>
                    <p className="text-sm text-muted-foreground">She gets a call from a friend, which keeps her busy for a while. In the meantime, her log in session on the website expires.</p>
                  </div>
                </div>

                {/* Resume phase */}
                <div className="mb-2 mt-6">
                  <span className="inline-block rounded-full bg-destructive px-3 py-1 font-display text-xs font-bold text-destructive-foreground">Resume</span>
                </div>
                <div className="flex flex-col gap-4 border-l-2 border-destructive/30 pl-6">
                  <div className="relative rounded-lg border border-border bg-card p-4">
                    <span className="absolute -left-[1.85rem] top-4 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] text-destructive-foreground">5</span>
                    <p className="text-sm text-muted-foreground">She logs back in to her account after her call, to complete her purchase journey.</p>
                  </div>
                  <div className="relative rounded-lg border border-destructive/40 bg-destructive/5 p-4">
                    <span className="absolute -left-[1.85rem] top-4 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] text-destructive-foreground">6</span>
                    <p className="text-sm font-medium text-destructive">She scans for the cart icon. To her surprise, there is no indication that there is a product in her cart, and no direct prompt for her to continue from where she left off.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* User Journey: MVA to .COM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="mb-4 font-display text-2xl font-bold text-foreground">User Journey: MVA to .COM</h2>
            <div className="relative flex flex-col gap-0">
              <div className="mb-2">
                <span className="inline-block rounded-full bg-primary px-3 py-1 font-display text-xs font-bold text-primary-foreground">Start</span>
              </div>
              <div className="flex flex-col gap-4 border-l-2 border-primary/30 pl-6">
                <div className="relative rounded-lg border border-border bg-card p-4">
                  <span className="absolute -left-[1.85rem] top-4 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">1</span>
                  <p className="text-sm text-muted-foreground">Sam is an existing customer.</p>
                </div>
                <div className="relative rounded-lg border border-border bg-card p-4">
                  <span className="absolute -left-[1.85rem] top-4 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">2</span>
                  <p className="text-sm text-muted-foreground">On her way back home from work, Sam notices an offer for the new iPhone.</p>
                </div>
                <div className="relative rounded-lg border border-border bg-card p-4">
                  <span className="absolute -left-[1.85rem] top-4 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">3</span>
                  <p className="text-sm text-muted-foreground">Sam opens the My Verizon app to begin her purchase journey and adds the new iPhone to her cart.</p>
                </div>
              </div>

              <div className="mb-2 mt-6">
                <span className="inline-block rounded-full bg-yellow-500 px-3 py-1 font-display text-xs font-bold text-white">Pause</span>
              </div>
              <div className="flex flex-col gap-4 border-l-2 border-yellow-500/30 pl-6">
                <div className="relative rounded-lg border border-border bg-card p-4">
                  <span className="absolute -left-[1.85rem] top-4 flex h-4 w-4 items-center justify-center rounded-full bg-yellow-500 text-[10px] text-white">4</span>
                  <p className="text-sm text-muted-foreground">Her phone runs out of battery before she can complete the purchase.</p>
                </div>
              </div>

              <div className="mb-2 mt-6">
                <span className="inline-block rounded-full bg-destructive px-3 py-1 font-display text-xs font-bold text-destructive-foreground">Resume</span>
              </div>
              <div className="flex flex-col gap-4 border-l-2 border-destructive/30 pl-6">
                <div className="relative rounded-lg border border-border bg-card p-4">
                  <span className="absolute -left-[1.85rem] top-4 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] text-destructive-foreground">5</span>
                  <p className="text-sm text-muted-foreground">After reaching home and relaxing for a bit, Sam signs in to her account from her laptop to complete her purchase.</p>
                </div>
                <div className="relative rounded-lg border border-destructive/40 bg-destructive/5 p-4">
                  <span className="absolute -left-[1.85rem] top-4 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] text-destructive-foreground">6</span>
                  <p className="text-sm font-medium text-destructive">On checking her cart, Sam noticed that her cart was empty, which was very surprising and disturbing. The progress of her purchase journey was lost.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* User Journey: MVA to MVA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="mb-4 font-display text-2xl font-bold text-foreground">User Journey: MVA to MVA</h2>
            <div className="relative flex flex-col gap-0">
              <div className="mb-2">
                <span className="inline-block rounded-full bg-primary px-3 py-1 font-display text-xs font-bold text-primary-foreground">Start</span>
              </div>
              <div className="flex flex-col gap-4 border-l-2 border-primary/30 pl-6">
                <div className="relative rounded-lg border border-border bg-card p-4">
                  <span className="absolute -left-[1.85rem] top-4 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">1</span>
                  <p className="text-sm text-muted-foreground">Sam opens the My Verizon app on her phone during her lunch break to browse upgrade options.</p>
                </div>
                <div className="relative rounded-lg border border-border bg-card p-4">
                  <span className="absolute -left-[1.85rem] top-4 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">2</span>
                  <p className="text-sm text-muted-foreground">She customizes a new device, selects a plan, and adds it to her cart in the app.</p>
                </div>
              </div>

              <div className="mb-2 mt-6">
                <span className="inline-block rounded-full bg-yellow-500 px-3 py-1 font-display text-xs font-bold text-white">Pause</span>
              </div>
              <div className="flex flex-col gap-4 border-l-2 border-yellow-500/30 pl-6">
                <div className="relative rounded-lg border border-border bg-card p-4">
                  <span className="absolute -left-[1.85rem] top-4 flex h-4 w-4 items-center justify-center rounded-full bg-yellow-500 text-[10px] text-white">3</span>
                  <p className="text-sm text-muted-foreground">Her lunch break ends, and she closes the app before completing checkout.</p>
                </div>
              </div>

              <div className="mb-2 mt-6">
                <span className="inline-block rounded-full bg-destructive px-3 py-1 font-display text-xs font-bold text-destructive-foreground">Resume</span>
              </div>
              <div className="flex flex-col gap-4 border-l-2 border-destructive/30 pl-6">
                <div className="relative rounded-lg border border-border bg-card p-4">
                  <span className="absolute -left-[1.85rem] top-4 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] text-destructive-foreground">4</span>
                  <p className="text-sm text-muted-foreground">Later that evening, Sam re-opens the My Verizon app on the same phone to finish her purchase.</p>
                </div>
                <div className="relative rounded-lg border border-destructive/40 bg-destructive/5 p-4">
                  <span className="absolute -left-[1.85rem] top-4 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] text-destructive-foreground">5</span>
                  <p className="text-sm font-medium text-destructive">The app shows no saved cart. Sam has to start the entire configuration process over again, wasting her time and increasing frustration.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* User Journey: .COM to MVA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="mb-4 font-display text-2xl font-bold text-foreground">User Journey: .COM to MVA</h2>
            <div className="relative flex flex-col gap-0">
              <div className="mb-2">
                <span className="inline-block rounded-full bg-primary px-3 py-1 font-display text-xs font-bold text-primary-foreground">Start</span>
              </div>
              <div className="flex flex-col gap-4 border-l-2 border-primary/30 pl-6">
                <div className="relative rounded-lg border border-border bg-card p-4">
                  <span className="absolute -left-[1.85rem] top-4 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">1</span>
                  <p className="text-sm text-muted-foreground">Sam sits down at her laptop at home and browses the website for a new phone deal she saw advertised.</p>
                </div>
                <div className="relative rounded-lg border border-border bg-card p-4">
                  <span className="absolute -left-[1.85rem] top-4 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">2</span>
                  <p className="text-sm text-muted-foreground">She picks out a device, selects accessories, and adds everything to her cart on the website.</p>
                </div>
              </div>

              <div className="mb-2 mt-6">
                <span className="inline-block rounded-full bg-yellow-500 px-3 py-1 font-display text-xs font-bold text-white">Pause</span>
              </div>
              <div className="flex flex-col gap-4 border-l-2 border-yellow-500/30 pl-6">
                <div className="relative rounded-lg border border-border bg-card p-4">
                  <span className="absolute -left-[1.85rem] top-4 flex h-4 w-4 items-center justify-center rounded-full bg-yellow-500 text-[10px] text-white">3</span>
                  <p className="text-sm text-muted-foreground">She needs to leave the house for an errand and closes her laptop before checking out.</p>
                </div>
              </div>

              <div className="mb-2 mt-6">
                <span className="inline-block rounded-full bg-destructive px-3 py-1 font-display text-xs font-bold text-destructive-foreground">Resume</span>
              </div>
              <div className="flex flex-col gap-4 border-l-2 border-destructive/30 pl-6">
                <div className="relative rounded-lg border border-border bg-card p-4">
                  <span className="absolute -left-[1.85rem] top-4 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] text-destructive-foreground">4</span>
                  <p className="text-sm text-muted-foreground">While waiting at the store, Sam opens the My Verizon app on her phone hoping to quickly complete checkout.</p>
                </div>
                <div className="relative rounded-lg border border-destructive/40 bg-destructive/5 p-4">
                  <span className="absolute -left-[1.85rem] top-4 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] text-destructive-foreground">5</span>
                  <p className="text-sm font-medium text-destructive">Her cart in the app is empty — nothing she added on the website carried over. Sam gives up and decides to try again another day, risking losing the deal entirely.</p>
                </div>
              </div>
            </div>
          </motion.div>

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

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden rounded-xl border border-border shadow-md"
              >
                <img src={multiQuoteImg} alt="Multi-Quote Comparison – side-by-side in-store vs online quote view" className="w-full" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="overflow-hidden rounded-xl border border-border shadow-md"
              >
                <img src={smartConciergeImg} alt="Smart Concierge – review quote details with item breakdown" className="w-full" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="overflow-hidden rounded-xl border border-border shadow-md"
              >
                <img src={successImg} alt="Smart Concierge – success confirmation and secure checkout redirect" className="w-full" />
              </motion.div>
            </div>
            <p className="mt-4 text-center text-xs italic text-muted-foreground">
              Note: This portfolio (contents/images) are for demonstration purpose only. To comply with my non-disclosure agreement, I have omitted and obfuscated confidential information in this portfolio. It should not be disclosed to any third party. Please feel free to contact me for further details. Some images and screens are blurred for confidentiality.
            </p>
          </Section>

          <Section title="5. Validation & Iteration">
            <p>Before full release, we ran a survey with 127 Retail and Inside Sales employees to validate the new POS tiles.</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li><strong>The Friction:</strong> 82% of reps admitted they historically didn't resume carts because they feared technical errors or outdated promos.</li>
              <li><strong>The Iteration:</strong> We used this feedback to refine the error handling and ensure the "Last Edited" timestamps were prominent, giving Reps the confidence to use the feature.</li>
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-8 overflow-hidden rounded-xl border border-border shadow-md"
            >
              <img src={surveyImg} alt="Sample survey questions for Shared Cart tile feedback" className="w-full" />
            </motion.div>
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

          <Section title="8. Appreciation">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-xl border border-border shadow-md"
            >
              <img src={appreciationImg} alt="Stakeholder appreciation email for Pause & Resume design contributions" className="w-full" />
            </motion.div>
          </Section>

          <Section title="9. Awards">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-xl border border-border shadow-md"
            >
              <img src={awardsImg} alt="Bravo Award certificate awarded to Prakash Sundarraj by Tech Mahindra" className="w-full" />
            </motion.div>
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