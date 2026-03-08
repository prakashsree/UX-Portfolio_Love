import { motion } from "framer-motion";
import {
  ArrowLeft,
  AlertCircle,
  ClipboardList,
  MessageSquare,
  BarChart3,
  Bot,
  Lightbulb,
  CheckCircle,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import bcspHero from "@/assets/case-bcsp-hero.jpg";
import ux1 from "@/assets/bcsp-ux1.png";
import ux2 from "@/assets/bcsp-ux2.png";
import survey from "@/assets/bcsp-survey.png";
import usability from "@/assets/bcsp-usability.png";
import feedback from "@/assets/bcsp-feedback.png";
import chatbot from "@/assets/bcsp-chatbot.png";

const Section = ({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon?: React.ElementType;
  children: React.ReactNode;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-16"
  >
    <div className="mb-6 flex items-center gap-3">
      {Icon && (
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-5 w-5 text-primary" />
        </div>
      )}
      <h2 className="font-display text-2xl font-bold text-foreground">{title}</h2>
    </div>
    {children}
  </motion.div>
);

const CaseStudyBCSP = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden bg-card py-16">
          <div className="absolute inset-0">
            <img src={bcspHero} alt="BCSP Services" className="h-full w-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-card/60 to-card" />
          </div>
          <div className="container relative mx-auto px-6">
            <Link
              to="/"
              className="mb-8 inline-flex items-center gap-2 font-body text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="mb-2 font-body text-sm font-medium uppercase tracking-wider text-primary">
                Communications &amp; Technology
              </p>
              <h1 className="mb-4 font-display text-3xl font-bold text-foreground sm:text-5xl">
                BCSP Services
              </h1>
              <p className="max-w-2xl font-body text-lg leading-relaxed text-muted-foreground">
                Discover the service offerings within BCSP and provide feedback to improve their user experience.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-md bg-secondary px-3 py-1 font-body text-xs text-secondary-foreground">
                  UX Research
                </span>
                <span className="rounded-md bg-secondary px-3 py-1 font-body text-xs text-secondary-foreground">
                  Heuristic Evaluation
                </span>
                <span className="rounded-md bg-secondary px-3 py-1 font-body text-xs text-secondary-foreground">
                  Survey Design
                </span>
                <span className="rounded-md bg-secondary px-3 py-1 font-body text-xs text-secondary-foreground">
                  Chatbots
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="bg-background py-16">
          <div className="container mx-auto max-w-4xl px-6">
            {/* Overview & Problem */}
            <Section title="Overview & the Problem" icon={AlertCircle}>
              <p className="mb-4 font-body text-sm leading-relaxed text-muted-foreground">
                The Client is a leading global Communications and Technology leader with millions of customers around the world.
              </p>
              <p className="mb-4 font-body text-sm leading-relaxed text-muted-foreground">
                There are applications like Webex Meetings, Webex Teams and Jabber used for video collaboration activities along with various video endpoints like desk devices and room endpoints on CUCM and cloud.
              </p>
              <p className="mb-4 font-body text-sm leading-relaxed text-muted-foreground">
                To analyze various usage feedback from end users of the respective services and to understand:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 font-body text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
                  Good points impacting users daily work value (Highlights)
                </li>
                <li className="flex items-start gap-3 font-body text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                  Pain points impacting users output (Opportunities)
                </li>
                <li className="flex items-start gap-3 font-body text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Suggestions from the user which might be helpful to consider for UX improvement (Recommended Actions)
                </li>
              </ul>
            </Section>

            {/* What I Did */}
            <Section title="What I Did" icon={ClipboardList}>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Setting goals and objectives",
                  "Stakeholder interviews",
                  "Understanding key audiences",
                  "Understanding existing flow",
                  "Guiding questions for user interviews",
                  "Survey",
                  "Usability/Heuristic Evaluation",
                  "Recommendation reports",
                  "Low/medium-fidelity prototypes",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-lg border border-border bg-card p-3"
                  >
                    <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                    <span className="font-body text-sm text-card-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </Section>

            {/* Guiding Questions */}
            <Section title="Guiding Questions for User Interview" icon={MessageSquare}>
              <p className="mb-6 font-body text-sm leading-relaxed text-muted-foreground">
                Created a list of questions that we can use throughout the customer and product development process. Observed that asking open-ended questions are critical to keeping the conversation going and creating an opportunity for the person to tell stories about their lives that could lead to critical insights and ideas.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-xl border border-border bg-muted/30 p-2">
                  <img src={ux1} alt="Interview questions part 1" className="h-auto w-full rounded-lg object-contain" />
                </div>
                <div className="overflow-hidden rounded-xl border border-border bg-muted/30 p-2">
                  <img src={ux2} alt="Interview questions part 2" className="h-auto w-full rounded-lg object-contain" />
                </div>
              </div>
            </Section>

            {/* Survey */}
            <Section title="Survey" icon={BarChart3}>
              <p className="mb-6 font-body text-sm leading-relaxed text-muted-foreground">
                Vovici is a web-based application to design surveys. As a UX designer, I gauged the overall impact of the #teamup adoption campaign in GIS & Sales and Marketing to learn more about how people in the organization use collaboration applications.
              </p>
              <div className="mx-auto max-w-sm overflow-hidden rounded-xl border border-border bg-muted/30 p-2">
                <img src={survey} alt="Survey design" className="h-auto w-full rounded-lg object-contain" />
              </div>
            </Section>

            {/* Usability/Heuristic Evaluation */}
            <Section title="Usability / Heuristic Evaluation" icon={AlertCircle}>
              <p className="mb-6 font-body text-sm leading-relaxed text-muted-foreground">
                The report provides a detailed analysis of the heuristic evaluation process used to evaluate BCSP Services Applications. The evaluation was performed using Jakob Nielsen's heuristic evaluation usability method, followed by a summary of the major problems identified and a detailed exploration of findings prioritized according to severity and impact on user experience.
              </p>
              <div className="overflow-hidden rounded-xl border border-border bg-muted/30 p-2">
                <img src={usability} alt="Heuristic evaluation report" className="h-auto w-full rounded-lg object-contain" />
              </div>
            </Section>

            {/* UX Feedback Reports */}
            <Section title="UX Feedback Reports" icon={BarChart3}>
              <p className="mb-6 font-body text-sm leading-relaxed text-muted-foreground">
                Created an interview questionnaire for Webex Teams. Emailed a batch of users from the sales organization (based on participant criteria), and conducted user interviews using the interview guide. Followed up with recommendations report relevant to Webex Teams.
              </p>
              <div className="overflow-hidden rounded-xl border border-border bg-muted/30 p-2">
                <img src={feedback} alt="UX feedback report" className="h-auto w-full rounded-lg object-contain" />
              </div>
            </Section>

            {/* Chatbots */}
            <Section title="Chatbots" icon={Bot}>
              <p className="mb-6 font-body text-sm leading-relaxed text-muted-foreground">
                Defining the MVP along with the product owner, and making sure the chatbot delivers a fluid conversation helping users complete their tasks. We developed a good practices guideline.
              </p>
              <div className="overflow-hidden rounded-xl border border-border bg-muted/30 p-2">
                <img src={chatbot} alt="Chatbot design" className="h-auto w-full rounded-lg object-contain" />
              </div>
            </Section>

            {/* Solutions */}
            <Section title="Solutions" icon={Lightbulb}>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Streamlined Success Path", desc: "Avoidance of wrong paths and excessive effort" },
                  { label: "Error Minimization", desc: "Simplification, clarity & proactive error prevention" },
                  { label: "User Satisfaction", desc: "Align design with user needs & ensure goals can be accomplished easily" },
                  { label: "Promote Valuable Features", desc: "Use design to emphasize, prioritize, and steer users to desired features" },
                  { label: "Engagement", desc: "Getting users to use the system regularly" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-border bg-card p-4 shadow-card"
                  >
                    <h4 className="mb-1 font-display text-sm font-bold text-card-foreground">{s.label}</h4>
                    <p className="font-body text-xs text-muted-foreground">{s.desc}</p>
                  </div>
                ))}
              </div>
            </Section>

            {/* Benefits */}
            <Section title="Benefits" icon={CheckCircle}>
              <div className="rounded-xl border border-border bg-card p-6 shadow-card">
                <p className="font-body text-sm leading-relaxed text-muted-foreground">
                  We are giving more feedback to service teams to help drive them to improve their user experience by taking appropriate actions on the service application's UX modifications.
                </p>
              </div>
            </Section>

            {/* Lessons Learned */}
            <Section title="Lessons Learned" icon={BookOpen}>
              <div className="space-y-4">
                {[
                  {
                    title: "Collaboration",
                    desc: "From the earliest stage of a project, involve key stakeholders and any other team members who will be involved. This will help you come up with more solid solutions and make everyone feel ownership of the design choices.",
                  },
                  {
                    title: "Be Open to Criticism",
                    desc: "We are not designing for ourselves. This means it's very important to show what we design to other designers, developers, and potential or real users. Making a good experience for a product is a multidisciplinary effort.",
                  },
                  {
                    title: "Avoid Being Defensive",
                    desc: "Critical feedback is an opportunity to see the work from a different perspective and learn from it. Try not to take it as an attack on you as a designer.",
                  },
                  {
                    title: "Chatbots",
                    desc: "The user can talk about anything anytime. We as a UX team needed to prepare our bot for all scenarios; the way of documenting and thinking about user flows is very different from building a screen-to-screen interface.",
                  },
                ].map((lesson) => (
                  <div
                    key={lesson.title}
                    className="rounded-xl border border-border bg-card p-5 shadow-card"
                  >
                    <h4 className="mb-2 font-display text-sm font-bold text-card-foreground">
                      {lesson.title}
                    </h4>
                    <p className="font-body text-xs leading-relaxed text-muted-foreground">
                      {lesson.desc}
                    </p>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CaseStudyBCSP;
