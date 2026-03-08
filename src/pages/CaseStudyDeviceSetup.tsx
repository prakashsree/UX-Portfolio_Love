import { motion } from "framer-motion";
import { ArrowLeft, Phone, Target, Users, Search, Lightbulb, Headphones, CheckCircle, Monitor, MessageSquare, Smartphone, Shield, Zap, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import deviceImg from "@/assets/ds-wizard-step1.png";
import dsHeuristicEval from "@/assets/ds-heuristic-eval.png";
import dsPersonaJonathan from "@/assets/ds-persona-jonathan.jpg";
import touchpointsImg from "@/assets/ds-touchpoints.png";
import userflowWorkshopImg from "@/assets/ds-userflow-workshop.png";

const DeviceSetupCaseStudy = () => {
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
                Device Setup Experience
              </h1>
              <p className="mb-8 max-w-2xl font-body text-lg text-muted-foreground">
                Building a "One Place To Go" (OPTG) experience for device setup, activation, and content transfer — reducing support calls and increasing adoption of Tech Coach offerings.
              </p>
              <div className="flex flex-wrap gap-6 font-body text-sm text-muted-foreground">
                <div><span className="font-semibold text-foreground">Role:</span> Sr UX Designer</div>
                <div><span className="font-semibold text-foreground">Type:</span> Individual Contributor</div>
                <div><span className="font-semibold text-foreground">Task:</span> Research, Design Thinking, Low/Hi-Fidelity Prototypes</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Cover image */}
        <div className="container mx-auto px-6 py-12">
          <img src={deviceImg} alt="Device Setup case study" className="w-full rounded-xl object-cover shadow-card" />
          <p className="mt-4 text-center text-xs italic text-muted-foreground">
            Note: This portfolio (contents/images) are for demonstration purpose only. To comply with my non-disclosure agreement, I have omitted and obfuscated confidential information in this portfolio. It should not be disclosed to any third party. Please feel free to contact me for further details. Some images and screens are blurred for confidentiality.
          </p>
        </div>

        {/* Content */}
        <div className="container mx-auto max-w-3xl px-6 pb-24">

          {/* 1. The Challenge */}
          <Section title="1. The Challenge">
            <p>The client is a leading global Communications and Technology leader with millions of customers worldwide. Based on recent studies, the device setup experience was confusing and contained extraneous information, making it hard for customers to understand how to backup old devices, set up and activate their new devices.</p>
            <div className="mt-6 rounded-md border-l-4 border-primary bg-secondary/50 p-4">
              <p className="flex items-center gap-2 font-semibold text-foreground">
                <Target className="h-5 w-5 text-primary" />
                The Goal
              </p>
              <p className="mt-1 text-sm">Build a "One Place To Go" (OPTG) for device setup, activation, and content transfer.</p>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                { icon: <Phone className="h-5 w-5" />, label: "Reduce ND-CIR", desc: "Reduce New Device Calling-in Rate related to Setup/Activation" },
                { icon: <Target className="h-5 w-5" />, label: "One Place To Go", desc: "Easily access all assets and offerings that help with device setup" },
                { icon: <Headphones className="h-5 w-5" />, label: "Tech Coach Adoption", desc: "Increase adoption of Tech Coach offerings via OPTG" },
                { icon: <Zap className="h-5 w-5" />, label: "Intelligent Assistance", desc: "Expand and accommodate opportunities with intelligent setup assistance options" },
              ].map((obj) => (
                <div key={obj.label} className="rounded-lg border border-border bg-card p-4">
                  <p className="flex items-center gap-2 font-display text-sm font-bold text-foreground">{obj.icon}{obj.label}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{obj.desc}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Key Metrics */}
          <Section title="Key Metrics">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { metric: "122K/mo", label: "Activation failures" },
                { metric: "35%", label: "Calls related to activation & setup" },
                { metric: "11%", label: "Increase digital engagement target" },
              ].map((m) => (
                <div key={m.label} className="rounded-lg border border-border bg-secondary/30 p-4 text-center">
                  <p className="font-display text-2xl font-bold text-primary">{m.metric}</p>
                  <p className="text-sm">{m.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 rounded-md border-l-4 border-primary bg-secondary/50 p-4 text-sm font-semibold text-foreground">Goal: Decrease post-sale transaction time from 21 minutes to 18 minutes by offering alternative setup options.</p>
          </Section>

          {/* 2. Design Process */}
          <Section title="2. Design Process">
            <p>Followed the Double Diamond structure to understand customers and their problems and explore innovative ways to solve them. Approached problems and solutions by using Divergent (Broad & Open mind) & Convergent Thinking (Narrow down & one or more key problems and solutions).</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { phase: "Discover", items: ["User Interviews", "Heuristic Evaluation", "Competitive Analysis"] },
                { phase: "Define", items: ["Personas", "Problem Statement", "User Journey Mapping"] },
                { phase: "Ideate", items: ["DT Workshops", "Concept Sketches", "Low-fi Wireframes"] },
                { phase: "Prototype & Implement", items: ["Hi-fi Mockups", "Usability Testing", "Final Handoff"] },
              ].map((p) => (
                <div key={p.phase} className="rounded-lg border border-border bg-card p-4">
                  <p className="mb-2 font-display text-sm font-bold text-primary">{p.phase}</p>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    {p.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          {/* 3. Discover */}
          <Section title="3. Discover">
            <p>I began by understanding the user pain points in the current device setup and content transfer process, along with identifying user needs and preferences for support options.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                { icon: <Users className="h-6 w-6 text-primary" />, title: "User Interviews", desc: "Conducted with 15 users experiencing issues with device setup and content transfer via CMI Team." },
                { icon: <Search className="h-6 w-6 text-primary" />, title: "Heuristic Evaluation", desc: "Audited existing experiences using Jakob Nielsen's 10 usability heuristics to identify design problems." },
                { icon: <Lightbulb className="h-6 w-6 text-primary" />, title: "Competitive Analysis", desc: "Reviewed AT&T, T-Mobile, and Verizon solutions to identify gaps and opportunities in the market." },
              ].map((m) => (
                <div key={m.title} className="rounded-lg border border-border bg-card p-5">
                  {m.icon}
                  <p className="mt-3 font-display text-sm font-bold text-foreground">{m.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{m.desc}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Persona */}
          <Section title="User Persona — Jonathan">
            <div className="rounded-xl border border-border bg-card p-6 md:p-8">
              <div className="grid gap-6 md:grid-cols-[200px_1fr]">
                <div className="flex flex-col items-center text-center">
                  <img src={dsPersonaJonathan} alt="Jonathan - Floor Supervisor" className="h-52 w-44 rounded-lg object-cover" />
                  <p className="mt-3 font-display text-base font-bold text-foreground">Jonathan, 52</p>
                  <p className="mt-1 max-w-[200px] text-xs italic text-primary">"I want a clear path for me to follow and activate my new device. Just tell me what to do."</p>
                </div>
                <div className="space-y-5">
                  <div className="flex flex-wrap gap-3">
                    <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">Age: 52</span>
                    <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">Floor Supervisor</span>
                    <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">Non-tech-savvy</span>
                  </div>
                  <div className="grid gap-5 lg:grid-cols-2">
                    <div className="rounded-lg bg-muted/50 p-4">
                      <h4 className="mb-2 font-display text-sm font-bold text-foreground">Behaviors</h4>
                      <ul className="list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-muted-foreground">
                        <li>Always relies on someone for help</li>
                        <li>Afraid of making mistakes</li>
                        <li>Interprets things literally</li>
                        <li>Keeps looking for feedback</li>
                      </ul>
                    </div>
                    <div className="rounded-lg bg-destructive/5 p-4">
                      <h4 className="mb-2 font-display text-sm font-bold text-destructive">Challenges</h4>
                      <ul className="list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-muted-foreground">
                        <li>Confused with multiple options</li>
                        <li>Little or no tech experience</li>
                        <li>Doesn't know tech jargon</li>
                        <li>Gets overwhelmed with info</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* Heuristic Evaluation */}
          <Section title="Heuristic Evaluation">
            <img src={dsHeuristicEval} alt="Heuristic Evaluation - Smart Setup page with User Control & Freedom findings" className="mb-2 max-w-lg rounded-lg border border-border" />
            <h3 className="mb-3 font-display text-lg font-bold text-foreground">Key Findings (Severity Rated)</h3>
            <div className="space-y-4">
              {[
                { title: "User Control & Freedom", severity: "4", desc: "No option for lost device, BYOD, or custom setup scenarios.", rec: "Add a section to ask users their scenario and show content accordingly." },
                { title: "Consistency & Standards", severity: "3", desc: "Two primary CTAs on the banner — not standard practice.", rec: "'Get Started' should be filled (primary) and 'Watch Video' outlined (secondary)." },
                { title: "Flexibility & Efficiency", severity: "4", desc: "Design favors novice users; 'Let's go' CTA is pushed to the bottom.", rec: "'Let's get started' section should be moved to the first fold." },
              ].map((h) => (
                <div key={h.title} className="rounded-lg border border-border bg-card p-5">
                  <div className="flex items-center justify-between">
                    <p className="font-display text-sm font-bold text-foreground">{h.title}</p>
                    <span className={`rounded-full px-3 py-0.5 text-xs font-bold ${h.severity === "4" ? "bg-destructive/10 text-destructive" : "bg-yellow-500/10 text-yellow-600"}`}>
                      Severity {h.severity}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{h.desc}</p>
                  <p className="mt-2 text-sm font-medium text-foreground">→ {h.rec}</p>
                </div>
              ))}
            </div>

            <h3 className="mb-3 mt-8 font-display text-lg font-bold text-foreground">Final Thoughts from Evaluation</h3>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-lg bg-muted/50 p-5">
                <p className="mb-2 font-display text-sm font-bold text-foreground">🔍 Observations</p>
                <ul className="list-disc space-y-1.5 pl-4 text-sm text-muted-foreground">
                  <li>First fold doesn't highlight important aspects or offerings</li>
                  <li>Navigation issues lead to accessibility problems</li>
                  <li>Findability issue — important highlights buried below the fold</li>
                </ul>
              </div>
              <div className="rounded-lg bg-primary/5 p-5">
                <p className="mb-2 font-display text-sm font-bold text-foreground">💡 Recommendations</p>
                <ul className="list-disc space-y-1.5 pl-4 text-sm text-muted-foreground">
                  <li>First fold should clearly show key Smart Setup services</li>
                  <li>Provide guided experience with visual clues (images, videos, quick tour)</li>
                  <li>Second fold for additional supporting information</li>
                </ul>
              </div>
            </div>
          </Section>

          {/* 4. Define */}
          <Section title="4. Define">
            <p>Based on research, created detailed personas representing different user types. Each persona had specific goals and challenges that guided the design process.</p>

            <img src={touchpointsImg} alt="Customer touch points and factors impacting experience" className="mt-6 mb-4 w-full rounded-lg" />

            <h3 className="mb-3 mt-6 font-display text-lg font-bold text-foreground">Pain Points & Opportunities</h3>
            <div className="space-y-3">
              {[
                { pain: "Power On Activation can fail, generating a call to Care", opp: "Proactive identification of failure and provide personalized assistance" },
                { pain: "Customers may not remember their PIN", opp: "Enable link to reset PIN online to continue with Activation" },
                { pain: "FMi can prevent device activation and generate a call to Care", opp: "Track FMi Status. Communicate user to deactivate with steps" },
                { pain: "No backup reminder sent while new device is in transit", opp: "Before delivery, communicate backup reminder with a link to Tech Coach" },
                { pain: "Lack of confidence in self-serve", opp: "Keep highlighting Tech Coach benefits and multitude of support options" },
                { pain: "Customer doesn't remember individual account logins", opp: "Tech Coach guide instructions to recover account logins" },
              ].map((row, i) => (
                <div key={i} className="grid gap-3 md:grid-cols-2">
                  <div className="flex items-start gap-2 rounded-lg bg-destructive/5 p-3">
                    <span className="mt-0.5 text-destructive">✕</span>
                    <p className="text-sm text-muted-foreground">{row.pain}</p>
                  </div>
                  <div className="flex items-start gap-2 rounded-lg bg-primary/5 p-3">
                    <span className="mt-0.5 text-primary">✓</span>
                    <p className="text-sm text-muted-foreground">{row.opp}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Customer Journey */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="mb-4 font-display text-2xl font-bold text-foreground">Customer Journey — Jonathan</h2>
            <div className="relative flex flex-col gap-0">
              {[
                { stage: "Received Device", emotion: "😟 Anxious", desc: "Jonathan reads the leaflet but doesn't find enough info. Activation process failed.", color: "primary" as const },
                { stage: "Called Support", emotion: "😤 Annoyed / Embarrassed", desc: "After a long call, it was a firewall issue. He couldn't recall his Verizon PIN.", color: "yellow" as const },
                { stage: "Content Transfer", emotion: "😫 Frustrated", desc: "Contacts transferred but some photos didn't. He hadn't backed up his old iPad.", color: "destructive" as const },
              ].map((s, i) => {
                const colorMap = {
                  primary: { bg: "bg-primary", border: "border-primary/30", text: "text-primary-foreground" },
                  yellow: { bg: "bg-yellow-500", border: "border-yellow-500/30", text: "text-white" },
                  destructive: { bg: "bg-destructive", border: "border-destructive/30", text: "text-destructive-foreground" },
                };
                const c = colorMap[s.color];
                return (
                  <div key={i}>
                    <div className="mb-2 mt-4">
                      <span className={`inline-block rounded-full ${c.bg} px-3 py-1 font-display text-xs font-bold ${c.text}`}>{s.stage}</span>
                    </div>
                    <div className={`flex flex-col gap-4 border-l-2 ${c.border} pl-6`}>
                      <div className="relative rounded-lg border border-border bg-card p-4">
                        <span className={`absolute -left-[1.85rem] top-4 flex h-4 w-4 items-center justify-center rounded-full ${c.bg} text-[10px] ${c.text}`}>{i + 1}</span>
                        <p className="text-xs font-medium text-muted-foreground/70">{s.emotion}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* 5. Ideate */}
          <Section title="5. Ideate">
            <p>Organized Design Thinking workshops with stakeholders (UX team and product management) to generate ideas and solutions for the identified problems.</p>
            <img src={userflowWorkshopImg} alt="User flow and DT workshop session" className="mt-6 mb-4 w-full rounded-lg" />

            <h3 className="mb-3 mt-6 font-display text-lg font-bold text-foreground">Workshop Process</h3>
            <div className="space-y-2">
              {["Key metrics review", "Summary of user research & problem statement", "Key use case / user flow", "Customer Journey walkthrough", "Competitor Analysis review", "Concept Sketches & 'How Might We' exercises"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg border border-border bg-card p-3">
                  <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* 6. Prototype */}
          <Section title="6. Prototype">
            <p>Identified the key use cases and created interactive hi-fidelity prototypes to simulate user interactions.</p>
            <div className="mt-6 rounded-xl border border-border bg-card p-6">
              <h3 className="mb-3 font-display text-lg font-bold text-foreground">Key Use Case — Device Setup & Activate</h3>
              <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                <li><strong>Objective:</strong> Reduce NDCIR related to Setup/Activation</li>
                <li><strong>Approach:</strong> Personalized landing page for logged-in customers as a hub for all setup/activation info and support</li>
                <li><strong>Entry Point:</strong> Tile/Notifications in Dashboard</li>
                <li><strong>Target:</strong> Upgrade (UPG) and Add-A-Line (AAL) use cases</li>
                <li><strong>Platforms:</strong> MVO; MVA</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Old & New device details", "Setup steps (pre/post delivery)", "Activation & FMI status", "OS-based backup steps", "Tech Coach support options", "Verizon Chatbot integration"].map((tag) => (
                  <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{tag}</span>
                ))}
              </div>
            </div>
          </Section>

          {/* 7. The Solution */}
          <Section title="7. The Solution">
            <p>The final design provided a personalized, dynamic landing page with device-specific setup instructions, real-time status tracking, and integrated support options.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                { icon: <Smartphone className="h-5 w-5 text-primary" />, title: "Personalized Setup", desc: "Shows old & new device details with setup steps based on pre/post delivery status." },
                { icon: <Monitor className="h-5 w-5 text-primary" />, title: "Status Tracking", desc: "Displays Activation & FMI status with actionable steps to resolve issues." },
                { icon: <Headphones className="h-5 w-5 text-primary" />, title: "Integrated Support", desc: "Tech Coach support based on subscription with Verizon Chatbot integration." },
                { icon: <Shield className="h-5 w-5 text-primary" />, title: "Guided Experience", desc: "Step-by-step instructions for backup, transfer, and activation with clear progress." },
              ].map((f) => (
                <div key={f.title} className="rounded-lg border border-border bg-card p-5">
                  <p className="flex items-center gap-2 font-display text-sm font-bold text-foreground">{f.icon}{f.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* 8. Implement & Validate */}
          <Section title="8. Implement & Validate">
            <p>Conducted usability tests with 15 participants from different user personas to validate the design.</p>

            <h3 className="mb-3 mt-6 font-display text-lg font-bold text-foreground">Research Methodology</h3>
            <div className="space-y-2">
              {["Age 45+, Verizon customers and prospects", "Mix of incomes, ages, ethnicities & genders", "15 participants total", "Remote mixed-methods usability study", "Study took approximately 10 minutes", "Think-aloud protocol + click tests + questionnaire"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg border border-border bg-card p-3">
                  <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>

            <h3 className="mb-3 mt-8 font-display text-lg font-bold text-foreground">Key Takeaways</h3>
            <div className="space-y-3">
              {[
                "Overall, users found the 'Getting Started' device setup experience easy to understand, but adjustments to language and location of CTAs could make it even easier.",
                "All users understood the 'Getting Started' page and most pointed out that it was a checklist as well.",
                "Users were able to consistently find the 'Learn more' CTA between the two tasks. Instructional videos would also be beneficial.",
              ].map((insight, i) => (
                <div key={i} className="flex gap-4 rounded-lg border border-border bg-card p-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">{i + 1}</span>
                  <p className="text-sm text-muted-foreground">{insight}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-3 rounded-xl border border-border bg-secondary/30 p-6">
              <MessageSquare className="h-6 w-6 text-primary" />
              <blockquote className="text-sm italic text-muted-foreground">"This page showed me what functions I need to complete on my old and new phone. All but one was in the pending stage."</blockquote>
              <blockquote className="text-sm italic text-muted-foreground">"I've already backed up my data, so I just need to turn off 'Find my iPhone' so that I may activate the new device."</blockquote>
            </div>
          </Section>

          {/* 9. Impact */}
          <Section title="9. Impact">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { metric: "232,813", label: "Page Visits" },
                { metric: "04:25", label: "Avg Session Time" },
                { metric: "14.3%", label: "Chat Sessions" },
                { metric: "22%", label: "Bounce Rate" },
              ].map((m) => (
                <div key={m.label} className="rounded-lg border border-border bg-secondary/30 p-4 text-center">
                  <p className="font-display text-2xl font-bold text-primary">{m.metric}</p>
                  <p className="text-sm">{m.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-lg border border-border bg-card p-5">
              <h3 className="mb-2 font-display text-sm font-bold text-foreground">Most Clicked CTAs</h3>
              <p className="text-sm text-muted-foreground">How to Backup — <strong>17%</strong> of total views</p>
              <p className="text-sm text-muted-foreground">How to turn off FMI — <strong>13%</strong> of total views</p>
            </div>
          </Section>

          {/* 10. Reflections */}
          <Section title="10. Reflections">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-lg border border-border bg-card p-6">
                <BookOpen className="mb-3 h-6 w-6 text-primary" />
                <h3 className="mb-2 font-display text-sm font-bold text-foreground">Seek Feedback Early</h3>
                <p className="text-sm text-muted-foreground">This allows being less attached to the work since we didn't spend too much time on it. Try to seek feedback regularly throughout the entire design process.</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <BookOpen className="mb-3 h-6 w-6 text-primary" />
                <h3 className="mb-2 font-display text-sm font-bold text-foreground">Iteration is Key</h3>
                <p className="text-sm text-muted-foreground">Anything developed from scratch is an assumption. It's essential to keep iterating to understand users and their evolving needs. If a test fails, test again.</p>
              </div>
            </div>
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
    <h2 className="mb-2 font-display text-2xl font-bold text-foreground">{title}</h2>
    <div className="space-y-2 font-body text-base leading-relaxed text-muted-foreground">{children}</div>
  </motion.div>
);

export default DeviceSetupCaseStudy;
