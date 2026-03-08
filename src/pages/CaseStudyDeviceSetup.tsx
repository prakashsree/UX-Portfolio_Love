import { motion } from "framer-motion";
import { ArrowLeft, Users, Search, Lightbulb, AlertTriangle, Target, Map, Brain, Smartphone, CheckCircle, BarChart3, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import deviceImg from "@/assets/case-device-setup.jpg";
import dsDoubleDiamond from "@/assets/ds-double-diamond.jpg";
import dsPersona from "@/assets/ds-persona-jonathan.jpg";
import dsHeuristic1 from "@/assets/ds-heuristic-1.jpg";
import dsHeuristic2 from "@/assets/ds-heuristic-2.jpg";
import dsHeuristic3 from "@/assets/ds-heuristic-3.jpg";
import dsJourney from "@/assets/ds-journey.jpg";
import dsWorkshop1 from "@/assets/ds-workshop-1.jpg";
import dsWorkshop2 from "@/assets/ds-workshop-2.jpg";
import dsHifiDashboard from "@/assets/ds-hifi-dashboard.png";
import dsHifiDetail from "@/assets/ds-hifi-detail.jpg";
import dsHifiAnnotated from "@/assets/ds-hifi-annotated.jpg";
import dsSolution1 from "@/assets/ds-solution-1.jpg";
import dsSolution2 from "@/assets/ds-solution-2.jpg";
import dsUsability1 from "@/assets/ds-usability-1.jpg";
import dsUsability2 from "@/assets/ds-usability-2.jpg";
import dsHeatmap1 from "@/assets/ds-heatmap-1.jpg";
import dsHeatmap2 from "@/assets/ds-heatmap-2.jpg";
import dsHifiEntry from "@/assets/ds-hifi-entry.jpg";

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
        <div className="container mx-auto max-w-4xl px-6 pb-24">

          {/* 1. The Challenge */}
          <Section title="1. The Challenge">
            <p>The client is a leading global Communications and Technology leader with millions of customers worldwide. Based on recent studies, the device setup experience was confusing and contained extraneous information, making it hard for customers to understand how to backup old devices, set up and activate their new devices.</p>
            <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-6">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-lg text-primary-foreground">🎯</span>
                <div>
                  <h4 className="font-display text-sm font-bold uppercase tracking-wider text-primary">The Goal</h4>
                  <p className="mt-1 text-base font-medium leading-relaxed text-foreground">Build a "One Place To Go" (OPTG) for device setup, activation, and content transfer.</p>
                </div>
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                { icon: <Target className="h-5 w-5" />, label: "Reduce ND-CIR", desc: "Reduce New Device Calling-in Rate related to Setup/Activation" },
                { icon: <Smartphone className="h-5 w-5" />, label: "One Place To Go", desc: "Easily access all assets and offerings that help with device setup" },
                { icon: <Users className="h-5 w-5" />, label: "Tech Coach Adoption", desc: "Increase adoption of Tech Coach offerings via OPTG" },
                { icon: <Lightbulb className="h-5 w-5" />, label: "Intelligent Assistance", desc: "Expand and accommodate opportunities with intelligent setup assistance options" },
              ].map((obj) => (
                <div key={obj.label} className="rounded-lg border border-border bg-card p-4">
                  <div className="mb-2 flex items-center gap-2 text-primary">{obj.icon}<span className="font-display text-sm font-bold">{obj.label}</span></div>
                  <p className="font-body text-sm text-muted-foreground">{obj.desc}</p>
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
                <div key={m.label} className="rounded-lg border border-border bg-card p-5 text-center">
                  <p className="font-display text-2xl font-bold text-primary">{m.metric}</p>
                  <p className="mt-1 font-body text-sm text-muted-foreground">{m.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 font-body text-sm text-muted-foreground">Goal: Decrease post-sale transaction time from 21 minutes to 18 minutes by offering alternative setup options.</p>
          </Section>

          {/* 2. Design Process */}
          <Section title="2. Design Process — Double Diamond">
            <p>Followed the Double Diamond structure to understand customers and their problems and explore innovative ways to solve them. Approached problems and solutions by using Divergent (Broad & Open mind) & Convergent Thinking (Narrow down & one or more key problems and solutions).</p>
            <img src={dsDoubleDiamond} alt="Double Diamond design process" className="mt-6 w-full rounded-xl shadow-card" />
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { phase: "Discover", items: ["User Interviews", "Heuristic Evaluation", "Competitive Analysis"] },
                { phase: "Define", items: ["Personas", "Problem Statement", "User Journey Mapping"] },
                { phase: "Ideate", items: ["DT Workshops", "Concept Sketches", "Low-fi Wireframes"] },
                { phase: "Prototype & Implement", items: ["Hi-fi Mockups", "Usability Testing", "Final Handoff"] },
              ].map((p) => (
                <div key={p.phase} className="rounded-lg border border-border bg-card p-4">
                  <h4 className="mb-2 font-display text-sm font-bold text-primary">{p.phase}</h4>
                  <ul className="space-y-1">
                    {p.items.map((item) => (
                      <li key={item} className="font-body text-xs text-muted-foreground">• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          {/* 3. Discover */}
          <Section title="3. Phase 1 — Discover">
            <p>I began by understanding the user pain points in the current device setup and content transfer process, along with identifying user needs and preferences for support options.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                { icon: <Users className="h-5 w-5" />, title: "User Interviews", desc: "Conducted with 15 users experiencing issues with device setup and content transfer via CMI Team." },
                { icon: <Search className="h-5 w-5" />, title: "Heuristic Evaluation", desc: "Audited existing experiences using Jakob Nielsen's 10 usability heuristics to identify design problems." },
                { icon: <BarChart3 className="h-5 w-5" />, title: "Competitive Analysis", desc: "Reviewed AT&T, T-Mobile, and Verizon solutions to identify gaps and opportunities in the market." },
              ].map((m) => (
                <div key={m.title} className="rounded-lg border border-border bg-card p-5">
                  <div className="mb-3 text-primary">{m.icon}</div>
                  <h4 className="mb-1 font-display text-sm font-bold text-foreground">{m.title}</h4>
                  <p className="font-body text-xs leading-relaxed text-muted-foreground">{m.desc}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Heuristic Evaluation */}
          <Section title="Heuristic Evaluation">
            <p>Created a persona (Jonathan, aged 52) — a non-tech-savvy floor supervisor who purchased a new iPhone through Verizon. He wants a clear path to follow and activate his new device.</p>
            <div className="mt-6 flex flex-col gap-6 sm:flex-row">
              <img src={dsPersona} alt="Persona: Jonathan" className="h-48 w-48 flex-shrink-0 rounded-xl object-cover shadow-card" />
              <div>
                <h4 className="font-display text-lg font-bold text-foreground">Jonathan, 52</h4>
                <p className="mt-1 font-body text-sm italic text-primary">"I want a clear path for me to follow and activate my new device. Just tell me what to do."</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div>
                    <h5 className="mb-1 font-display text-xs font-bold uppercase tracking-wider text-foreground">Behaviors</h5>
                    <ul className="space-y-1 font-body text-xs text-muted-foreground">
                      <li>• Always relies on someone for help</li>
                      <li>• Afraid of making mistakes</li>
                      <li>• Interprets things literally</li>
                      <li>• Keeps looking for feedback</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="mb-1 font-display text-xs font-bold uppercase tracking-wider text-foreground">Challenges</h5>
                    <ul className="space-y-1 font-body text-xs text-muted-foreground">
                      <li>• Confused with multiple options</li>
                      <li>• Little or no tech experience</li>
                      <li>• Doesn't know tech jargon</li>
                      <li>• Gets overwhelmed with info</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="mb-4 font-display text-base font-bold text-foreground">Key Findings (Severity Rated)</h4>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { img: dsHeuristic1, title: "User Control & Freedom", severity: "4", desc: "No option for lost device, BYOD, or custom setup scenarios.", rec: "Add a section to ask users their scenario and show content accordingly." },
                  { img: dsHeuristic2, title: "Consistency & Standards", severity: "3", desc: "Two primary CTAs on the banner — not standard practice.", rec: "'Get Started' should be filled (primary) and 'Watch Video' outlined (secondary)." },
                  { img: dsHeuristic3, title: "Flexibility & Efficiency", severity: "4", desc: "Design favors novice users; 'Let's go' CTA is pushed to the bottom.", rec: "'Let's get started' section should be moved to the first fold." },
                ].map((h) => (
                  <div key={h.title} className="overflow-hidden rounded-lg border border-border bg-card">
                    <img src={h.img} alt={h.title} className="h-40 w-full object-cover" />
                    <div className="p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <h5 className="font-display text-xs font-bold text-foreground">{h.title}</h5>
                        <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${h.severity === "4" ? "bg-destructive/10 text-destructive" : "bg-accent text-accent-foreground"}`}>
                          Severity {h.severity}
                        </span>
                      </div>
                      <p className="font-body text-xs text-muted-foreground">{h.desc}</p>
                      <p className="mt-2 font-body text-xs font-medium text-primary">→ {h.rec}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-border bg-card p-6">
              <h4 className="mb-3 font-display text-base font-bold text-foreground">Final Thoughts from Evaluation</h4>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <h5 className="mb-2 flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wider text-destructive"><AlertTriangle className="h-4 w-4" /> Observations</h5>
                  <ul className="space-y-2 font-body text-xs text-muted-foreground">
                    <li>• First fold doesn't highlight important aspects or offerings</li>
                    <li>• Navigation issues lead to accessibility problems</li>
                    <li>• Findability issue — important highlights buried below the fold</li>
                  </ul>
                </div>
                <div>
                  <h5 className="mb-2 flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wider text-primary"><Lightbulb className="h-4 w-4" /> Recommendations</h5>
                  <ul className="space-y-2 font-body text-xs text-muted-foreground">
                    <li>• First fold should clearly show key Smart Setup services</li>
                    <li>• Provide guided experience with visual clues (images, videos, quick tour)</li>
                    <li>• Second fold for additional supporting information</li>
                  </ul>
                </div>
              </div>
            </div>
          </Section>

          {/* 4. Define */}
          <Section title="4. Phase 2 — Define">
            <p>Based on research, created detailed personas representing different user types. Each persona had specific goals and challenges that guided the design process.</p>

            <div className="mt-6">
              <h4 className="mb-4 font-display text-base font-bold text-foreground">Pain Points & Opportunities</h4>
              <div className="space-y-3">
                {[
                  { pain: "Power On Activation can fail, generating a call to Care", opp: "Proactive identification of failure and provide personalized assistance" },
                  { pain: "Customers may not remember their PIN", opp: "Enable link to reset PIN online to continue with Activation" },
                  { pain: "FMi can prevent device activation and generate a call to Care", opp: "Track FMi Status. Communicate user to deactivate with steps" },
                  { pain: "No backup reminder sent while new device is in transit", opp: "Before delivery, communicate backup reminder with a link to Tech Coach" },
                  { pain: "Lack of confidence in self-serve", opp: "Keep highlighting Tech Coach benefits and multitude of support options" },
                  { pain: "Customer doesn't remember individual account logins", opp: "Tech Coach guide instructions to recover account logins" },
                ].map((row, i) => (
                  <div key={i} className="grid gap-2 rounded-lg border border-border bg-card p-4 sm:grid-cols-2">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" />
                      <p className="font-body text-xs text-muted-foreground">{row.pain}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Lightbulb className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <p className="font-body text-xs text-muted-foreground">{row.opp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* Customer Journey */}
          <Section title="Customer Journey — Jonathan's Story">
            <img src={dsJourney} alt="Customer journey map" className="w-full rounded-xl shadow-card" />
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                { stage: "Received Device", emotion: "Anxious", desc: "Jonathan reads the leaflet but doesn't find enough info. Activation process failed." },
                { stage: "Called Support", emotion: "Annoyed / Embarrassed", desc: "After a long call, it was a firewall issue. He couldn't recall his Verizon PIN." },
                { stage: "Content Transfer", emotion: "Frustrated", desc: "Contacts transferred but some photos didn't. He hadn't backed up his old iPad." },
              ].map((s) => (
                <div key={s.stage} className="rounded-lg border border-border bg-card p-4">
                  <h5 className="font-display text-sm font-bold text-foreground">{s.stage}</h5>
                  <span className="mt-1 inline-block rounded-full bg-destructive/10 px-2 py-0.5 text-xs font-medium text-destructive">{s.emotion}</span>
                  <p className="mt-2 font-body text-xs text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* 5. Ideate */}
          <Section title="5. Phase 3 — Ideate">
            <p>Organized Design Thinking workshops with stakeholders (UX team and product management) to generate ideas and solutions for the identified problems.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <img src={dsWorkshop1} alt="Design Thinking workshop - user flow" className="rounded-xl shadow-card" />
              <img src={dsWorkshop2} alt="Design Thinking workshop - session" className="rounded-xl shadow-card" />
            </div>
            <div className="mt-6 rounded-xl border border-border bg-card p-6">
              <h4 className="mb-3 font-display text-sm font-bold text-foreground">Workshop Process</h4>
              <div className="grid gap-2 sm:grid-cols-2">
                {["Key metrics review", "Summary of user research & problem statement", "Key use case / user flow", "Customer Journey walkthrough", "Competitor Analysis review", "Concept Sketches & 'How Might We' exercises"].map((item) => (
                  <p key={item} className="flex items-center gap-2 font-body text-xs text-muted-foreground">
                    <CheckCircle className="h-3.5 w-3.5 text-primary" /> {item}
                  </p>
                ))}
              </div>
            </div>
          </Section>

          {/* 6. Prototype */}
          <Section title="6. Phase 4 — Prototype">
            <p>Identified the key use cases and created interactive hi-fidelity prototypes to simulate user interactions.</p>
            <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-6">
              <h4 className="mb-3 font-display text-sm font-bold text-primary">Key Use Case — Device Setup & Activate</h4>
              <ul className="space-y-2 font-body text-sm text-muted-foreground">
                <li>• <strong>Objective:</strong> Reduce NDCIR related to Setup/Activation</li>
                <li>• <strong>Approach:</strong> Personalized landing page for logged-in customers as a hub for all setup/activation info and support</li>
                <li>• <strong>Entry Point:</strong> Tile/Notifications in Dashboard</li>
                <li>• <strong>Target:</strong> Upgrade (UPG) and Add-A-Line (AAL) use cases</li>
                <li>• <strong>Platforms:</strong> MVO; MVA</li>
              </ul>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Old & New device details", "Setup steps (pre/post delivery)", "Activation & FMI status", "OS-based backup steps", "Tech Coach support options", "Verizon Chatbot integration"].map((tag) => (
                  <span key={tag} className="rounded-md bg-primary/10 px-2 py-1 font-body text-xs text-primary">{tag}</span>
                ))}
              </div>
            </div>

            <h4 className="mt-8 mb-4 font-display text-base font-bold text-foreground">Hi-Fidelity Mockups</h4>
            <div className="grid gap-4 sm:grid-cols-2">
              <img src={dsHifiEntry} alt="Dashboard entry point" className="rounded-xl shadow-card" />
              <img src={dsHifiDashboard} alt="Device setup landing page" className="rounded-xl shadow-card" />
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <img src={dsHifiDetail} alt="Getting started detail page" className="rounded-xl shadow-card" />
              <img src={dsHifiAnnotated} alt="Annotated getting started page" className="rounded-xl shadow-card" />
            </div>
          </Section>

          {/* Solution */}
          <Section title="7. The Solution">
            <p>The final design provided a personalized, dynamic landing page with device-specific setup instructions, real-time status tracking, and integrated support options.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <img src={dsSolution1} alt="Final solution - mobile view" className="rounded-xl shadow-card" />
              <img src={dsSolution2} alt="Final solution - desktop view" className="rounded-xl shadow-card" />
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                { icon: <Smartphone className="h-5 w-5" />, title: "Personalized Setup", desc: "Shows old & new device details with setup steps based on pre/post delivery status." },
                { icon: <CheckCircle className="h-5 w-5" />, title: "Status Tracking", desc: "Displays Activation & FMI status with actionable steps to resolve issues." },
                { icon: <MessageSquare className="h-5 w-5" />, title: "Integrated Support", desc: "Tech Coach support based on subscription with Verizon Chatbot integration." },
                { icon: <Map className="h-5 w-5" />, title: "Guided Experience", desc: "Step-by-step instructions for backup, transfer, and activation with clear progress." },
              ].map((f) => (
                <div key={f.title} className="rounded-lg border border-border bg-card p-4">
                  <div className="mb-2 flex items-center gap-2 text-primary">{f.icon}<span className="font-display text-sm font-bold">{f.title}</span></div>
                  <p className="font-body text-xs text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* 8. Implement & Validate */}
          <Section title="8. Phase 5 — Implement & Validate">
            <p>Conducted usability tests with 15 participants from different user personas to validate the design.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <img src={dsUsability1} alt="Usability testing session" className="rounded-xl shadow-card" />
              <img src={dsUsability2} alt="Usability testing insights" className="rounded-xl shadow-card" />
            </div>

            <div className="mt-6 rounded-xl border border-border bg-card p-6">
              <h4 className="mb-3 font-display text-sm font-bold text-foreground">Research Methodology</h4>
              <div className="grid gap-2 sm:grid-cols-2">
                {["Age 45+, Verizon customers and prospects", "Mix of incomes, ages, ethnicities & genders", "15 participants total", "Remote mixed-methods usability study", "Study took approximately 10 minutes", "Think-aloud protocol + click tests + questionnaire"].map((item) => (
                  <p key={item} className="flex items-center gap-2 font-body text-xs text-muted-foreground">
                    <CheckCircle className="h-3.5 w-3.5 text-primary" /> {item}
                  </p>
                ))}
              </div>
            </div>

            <h4 className="mt-8 mb-4 font-display text-base font-bold text-foreground">Key Takeaways</h4>
            <div className="space-y-4">
              {[
                "Overall, users found the 'Getting Started' device setup experience easy to understand, but adjustments to language and location of CTAs could make it even easier.",
                "All users understood the 'Getting Started' page and most pointed out that it was a checklist as well.",
                "Users were able to consistently find the 'Learn more' CTA between the two tasks. Instructional videos would also be beneficial.",
              ].map((insight, i) => (
                <div key={i} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary font-display text-xs font-bold text-primary-foreground">{i + 1}</span>
                  <p className="font-body text-sm text-muted-foreground">{insight}</p>
                </div>
              ))}
            </div>

            <h4 className="mt-8 mb-4 font-display text-base font-bold text-foreground">Click Test Heatmaps</h4>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <img src={dsHeatmap1} alt="Find my iPhone task heatmap" className="rounded-xl shadow-card" />
                <p className="mt-2 text-center font-body text-xs text-muted-foreground">'Turn off Find my iPhone' task heatmap</p>
              </div>
              <div>
                <img src={dsHeatmap2} alt="Back up your data task heatmap" className="rounded-xl shadow-card" />
                <p className="mt-2 text-center font-body text-xs text-muted-foreground">'Back up your data' task heatmap</p>
              </div>
            </div>

            <div className="mt-6 text-sm italic text-muted-foreground">
              <p>"This page showed me what functions I need to complete on my old and new phone. All but one was in the pending stage."</p>
              <p className="mt-2">"I've already backed up my data, so I just need to turn off 'Find my iPhone' so that I may activate the new device."</p>
            </div>
          </Section>

          {/* 9. Impact */}
          <Section title="9. Impact — DSLP Engagement">
            <div className="grid gap-4 sm:grid-cols-4">
              {[
                { metric: "232,813", label: "Page Visits" },
                { metric: "04:25", label: "Avg Session Time" },
                { metric: "14.3%", label: "Chat Sessions" },
                { metric: "22%", label: "Bounce Rate" },
              ].map((m) => (
                <div key={m.label} className="rounded-lg border border-border bg-card p-4 text-center">
                  <p className="font-display text-xl font-bold text-primary">{m.metric}</p>
                  <p className="mt-1 font-body text-xs text-muted-foreground">{m.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-lg border border-border bg-card p-4">
              <h5 className="mb-2 font-display text-sm font-bold text-foreground">Most Clicked CTAs</h5>
              <div className="flex gap-4">
                <span className="rounded-md bg-primary/10 px-3 py-1 font-body text-sm text-primary">How to Backup — 17% of total views</span>
                <span className="rounded-md bg-primary/10 px-3 py-1 font-body text-sm text-primary">How to turn off FMI — 13% of total views</span>
              </div>
            </div>
          </Section>

          {/* 10. Reflections */}
          <Section title="10. Key Learnings">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-border bg-card p-5">
                <div className="mb-2 flex items-center gap-2 text-primary"><Brain className="h-5 w-5" /><span className="font-display text-sm font-bold">Seek Feedback Early</span></div>
                <p className="font-body text-xs text-muted-foreground">This allows being less attached to the work since we didn't spend too much time on it. Try to seek feedback regularly throughout the entire design process.</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-5">
                <div className="mb-2 flex items-center gap-2 text-primary"><Target className="h-5 w-5" /><span className="font-display text-sm font-bold">Iteration is Key</span></div>
                <p className="font-body text-xs text-muted-foreground">Anything developed from scratch is an assumption. It's essential to keep iterating to understand users and their evolving needs. If a test fails, test again.</p>
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
    className="mb-16"
  >
    <h2 className="mb-4 font-display text-2xl font-bold text-foreground">{title}</h2>
    <div className="space-y-3 font-body text-base leading-relaxed text-muted-foreground">{children}</div>
  </motion.div>
);

export default DeviceSetupCaseStudy;
