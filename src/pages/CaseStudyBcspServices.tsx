import { motion } from "framer-motion";
import { ArrowLeft, Search, Users, MessageSquare, ClipboardList, Lightbulb, CheckCircle, BarChart3, Bot } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import bcspImg from "@/assets/case-bcsp-services.jpg";
import guidingQ1 from "@/assets/bcsp-guiding-q1.png";
import guidingQ2 from "@/assets/bcsp-guiding-q2.png";
import surveyImg from "@/assets/bcsp-survey.png";
import usabilityImg from "@/assets/bcsp-usability.png";
import feedbackImg from "@/assets/bcsp-feedback.png";
import chatbotImg from "@/assets/bcsp-chatbot.png";

const CaseStudyBcspServices = () => {
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
                BCSP Services
              </h1>
              <p className="mb-8 max-w-2xl font-body text-lg text-muted-foreground">
                Discover the service offerings within BCSP and provide feedback to improve their user experience.
              </p>
              <div className="flex flex-wrap gap-6 font-body text-sm text-muted-foreground">
                <div><span className="font-semibold text-foreground">Role:</span> UX Designer</div>
                <div><span className="font-semibold text-foreground">Type:</span> Individual Contributor</div>
                <div><span className="font-semibold text-foreground">Methods:</span> User Research, Surveys, Heuristic Evaluation, Prototyping</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Cover image */}
        <div className="container mx-auto px-6 py-12">
          <img src={bcspImg} alt="BCSP Services case study" className="w-full rounded-xl object-cover shadow-card" />
          <p className="mt-4 text-center text-xs italic text-muted-foreground">
            Note: This portfolio (contents/images) are for demonstration purpose only. To comply with my non-disclosure agreement, I have omitted and obfuscated confidential information in this portfolio. It should not be disclosed to any third party. Please feel free to contact me for further details. Some images and screens are blurred for confidentiality.
          </p>
        </div>

        {/* Content */}
        <div className="container mx-auto max-w-3xl px-6 pb-24">

          {/* Overview & Problem */}
          <Section title="1. Overview & the Problem">
            <p>The Client is a leading global Communications and Technology leader with millions of customers around the world.</p>
            <p className="mt-3">There are applications like Webex Meetings, Webex Teams and Jabber used for video collaboration activities along with various video endpoints like desk devices and room endpoints on CUCM and cloud.</p>
            <p className="mt-3">The goal was to analyze various usage feedback from end users of the respective services and to understand:</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                { icon: <CheckCircle className="h-5 w-5 text-primary" />, label: "Highlights", desc: "Good points impacting users daily work value" },
                { icon: <Search className="h-5 w-5 text-destructive" />, label: "Opportunities", desc: "Pain points impacting users output" },
                { icon: <Lightbulb className="h-5 w-5 text-yellow-500" />, label: "Recommended Actions", desc: "Suggestions helpful for UX improvement" },
              ].map((item) => (
                <div key={item.label} className="rounded-lg border border-border bg-card p-4">
                  <p className="flex items-center gap-2 font-display text-sm font-bold text-foreground">{item.icon}{item.label}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* What I Did */}
          <Section title="2. What I Did">
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
                <div key={item} className="flex items-center gap-2 rounded-lg bg-secondary/30 p-3 text-sm text-foreground">
                  <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                  {item}
                </div>
              ))}
            </div>
          </Section>

          {/* Guiding Questions */}
          <Section title="3. Guiding Questions for User Interviews">
            <p>Created a list of questions that we can use throughout the customer and product development process. Observed that asking open-ended questions are critical to keeping the conversation going and creating an opportunity for the person to tell stories about their lives that could lead to critical insights and ideas.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <img src={guidingQ1} alt="Guiding questions document 1" className="w-full rounded-xl border border-border object-cover shadow-card" />
              <img src={guidingQ2} alt="Guiding questions document 2" className="w-full rounded-xl border border-border object-cover shadow-card" />
            </div>
          </Section>

          {/* Survey */}
          <Section title="4. Survey">
            <p>Vovici is a web-based application to design surveys. As a UX designer, the goal was to gauge the overall impact of the #teamup adoption campaign in GIS & Sales and marketing to learn more about how people in the organization use collaboration applications.</p>
            <div className="mt-6 flex justify-center">
              <img src={surveyImg} alt="Survey design" className="max-w-sm rounded-xl border border-border object-cover shadow-card" />
            </div>
          </Section>

          {/* Heuristic Evaluation */}
          <Section title="5. Usability / Heuristic Evaluation">
            <p>The report provides a detailed analysis of the heuristic evaluation process used to evaluate BCSP Services Applications. The evaluation was performed using the heuristic evaluation usability method, based on heuristics provided by Jakob Nielsen.</p>
            <p className="mt-3">Follow up with a summary of the major problems identified by the heuristic evaluation and a more detailed exploration of the findings related to these specific problems prioritized according to their severity and impact on the user experience.</p>
            <div className="mt-6">
              <img src={usabilityImg} alt="Usability evaluation" className="w-full rounded-xl border border-border object-cover shadow-card" />
            </div>
          </Section>

          {/* UX Feedback Reports */}
          <Section title="6. UX Feedback Reports">
            <p>Created an interview questionnaire for Webex Teams. Emailed a batch of users from the sales organization (based on participant criteria), and conducted user interviews using the interview guide. Followed up with recommendations report relevant to Webex Teams.</p>
            <div className="mt-6">
              <img src={feedbackImg} alt="UX feedback report" className="w-full rounded-xl border border-border object-cover shadow-card" />
            </div>
          </Section>

          {/* Chatbots */}
          <Section title="7. Chatbots">
            <p>Defined the MVP along with the product owner, and ensured the chatbot delivers a fluid conversation helping users complete their tasks. Developed a good practices guideline for the conversational UX.</p>
            <div className="mt-6">
              <img src={chatbotImg} alt="Chatbot design" className="w-full rounded-xl border border-border object-cover shadow-card" />
            </div>
          </Section>

          {/* Solutions */}
          <Section title="8. Solutions">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: <CheckCircle className="h-5 w-5 text-primary" />, title: "Streamlined Success Path", desc: "Avoidance of wrong paths and excessive effort" },
                { icon: <Search className="h-5 w-5 text-primary" />, title: "Error Minimization", desc: "Simplification, clarity & proactive error prevention" },
                { icon: <Users className="h-5 w-5 text-primary" />, title: "User Satisfaction", desc: "Align design with user needs & ensure goals are accomplished easily" },
                { icon: <BarChart3 className="h-5 w-5 text-primary" />, title: "Promote Valuable Features", desc: "Use design to emphasize, prioritize, steer users to desired features" },
                { icon: <MessageSquare className="h-5 w-5 text-primary" />, title: "Engagement", desc: "Getting users to use the system regularly" },
              ].map((s) => (
                <div key={s.title} className="rounded-lg border border-border bg-card p-5">
                  {s.icon}
                  <p className="mt-3 font-display text-sm font-bold text-foreground">{s.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Benefits */}
          <Section title="9. Benefits">
            <div className="rounded-md border-l-4 border-primary bg-secondary/50 p-4">
              <p className="text-sm font-medium text-foreground">
                We are giving more feedback to service teams to help drive them to improve their user experience by taking appropriate actions on the service application's UX modification.
              </p>
            </div>
          </Section>

          {/* Lessons Learned */}
          <Section title="10. Lessons Learned">
            <div className="space-y-4">
              {[
                { title: "Collaboration", desc: "From the earliest stage of a project, involve key stakeholders and any other team members who will be involved. This will help you come up with more solid solutions and make everyone feel ownership of the design choices." },
                { title: "Be Open to Criticism", desc: "We are not designing for ourselves. It's very important to show what we design to other designers, developers, and potential or real users. Making a good experience for a product is a multidisciplinary effort." },
                { title: "Avoid Being Defensive", desc: "Critical feedback is an opportunity to see the work from a different perspective and learn from it. Try not to take it as an attack on you as a designer. It's ok to explain the approach, but acting defensively will make the critiquer avoid further discussions." },
                { title: "Chatbots", desc: "The user can talk about anything anytime. We as a UX team needed to prepare our bot for all scenarios. The way of documenting and thinking about user flows is very different from building a screen-to-screen interface." },
              ].map((l) => (
                <div key={l.title} className="rounded-lg border border-border bg-card p-5">
                  <p className="font-display text-sm font-bold text-foreground">{l.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{l.desc}</p>
                </div>
              ))}
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
    <h2 className="mb-4 font-display text-2xl font-bold text-foreground">{title}</h2>
    <div className="font-body text-sm leading-relaxed text-muted-foreground">{children}</div>
  </motion.div>
);

export default CaseStudyBcspServices;
