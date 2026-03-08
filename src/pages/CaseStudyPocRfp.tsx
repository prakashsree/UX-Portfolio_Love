import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Utensils, Wifi, Car, Layout } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import pocImg from "@/assets/case-poc-rfp.jpg";
import poc1a from "@/assets/poc-1a.png";
import poc1b from "@/assets/poc-1b.png";
import poc2a from "@/assets/poc-2a.png";
import poc2b from "@/assets/poc-2b.png";
import poc3a from "@/assets/poc-3a.png";
import poc3b from "@/assets/poc-3b.png";
import poc4a from "@/assets/poc-4a.png";
import poc4b from "@/assets/poc-4b.png";

const POCCard = ({
  number,
  icon,
  domain,
  overview,
  problems,
  wireframes,
  solutions,
  benefits,
}: {
  number: string;
  icon: React.ReactNode;
  domain: string;
  overview: string;
  problems: string[];
  wireframes: { src: string; alt: string }[];
  solutions: string | string[];
  benefits: string[];
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-12 rounded-xl border border-border bg-card p-6 md:p-8"
  >
    <div className="mb-4 flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">{icon}</span>
      <div>
        <p className="font-body text-xs font-medium uppercase tracking-wider text-primary">{number}</p>
        <h3 className="font-display text-xl font-bold text-foreground">{domain}</h3>
      </div>
    </div>

    <h4 className="mb-2 font-display text-sm font-bold text-foreground">Overview & the Problem</h4>
    <p className="text-sm leading-relaxed text-muted-foreground">{overview}</p>

    {problems.length > 0 && (
      <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
        {problems.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    )}

    <h4 className="mb-3 mt-6 font-display text-sm font-bold text-foreground">Wireframes</h4>
    <div className="grid gap-4 sm:grid-cols-2">
      {wireframes.map((w, i) => (
        <img key={i} src={w.src} alt={w.alt} className="w-full rounded-lg border border-border object-cover shadow-card" />
      ))}
    </div>

    <h4 className="mb-2 mt-6 font-display text-sm font-bold text-foreground">Solutions</h4>
    {typeof solutions === "string" ? (
      <p className="text-sm text-muted-foreground">{solutions}</p>
    ) : (
      <ul className="list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
        {solutions.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    )}

    {benefits.length > 0 && (
      <>
        <h4 className="mb-2 mt-6 font-display text-sm font-bold text-foreground">Benefits</h4>
        <div className="space-y-2">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-start gap-2 rounded-lg bg-primary/5 p-3">
              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <p className="text-sm text-muted-foreground">{b}</p>
            </div>
          ))}
        </div>
      </>
    )}
  </motion.div>
);

const CaseStudyPocRfp = () => {
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
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="mb-2 font-body text-sm font-medium uppercase tracking-wider text-primary">
                Multi-Industry
              </p>
              <h1 className="mb-4 font-display text-3xl font-bold text-foreground sm:text-5xl">
                Proof of Concept / RFP
              </h1>
              <p className="mb-8 max-w-2xl font-body text-lg text-muted-foreground">
                Demonstration in principle with the aim of verifying that some concept or theory has practical potential.
              </p>
              <div className="flex flex-wrap gap-6 font-body text-sm text-muted-foreground">
                <div><span className="font-semibold text-foreground">Role:</span> UX Designer</div>
                <div><span className="font-semibold text-foreground">Type:</span> Proof of Concept</div>
                <div><span className="font-semibold text-foreground">Methods:</span> Wireframing, Prototyping, UX Strategy</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Cover image */}
        <div className="container mx-auto px-6 py-12">
          <img src={pocImg} alt="Proof of Concept case study" className="w-full rounded-xl object-cover shadow-card" />
          <p className="mt-4 text-center text-xs italic text-muted-foreground">
            Note: This portfolio (contents/images) are for demonstration purpose only. To comply with my non-disclosure agreement, I have omitted and obfuscated confidential information. Some images are blurred for confidentiality.
          </p>
        </div>

        {/* Content */}
        <div className="container mx-auto max-w-3xl px-6 pb-24">

          {/* POC 1 — Restaurant */}
          <POCCard
            number="POC/RFP-1"
            icon={<Utensils className="h-5 w-5" />}
            domain="Restaurant iOS App"
            overview="The Client is an American restaurant chain and international franchise, known for its Italian-American cuisine menu including pizza and pasta. The ask was to build a native application on iOS with enhanced User Experience."
            problems={[
              "User navigates through a minimum of 9 screens to place an order",
              "User has to put a lot of effort in manual entry of inputs in several pages",
              "Home page is not tailor-made for each user based on location",
              "Process of customizing a pizza is cumbersome",
              "System does not take full advantage of native platform features",
              "Information is hidden, forcing the user to recall earlier information during customization",
              "Traditional old-fashioned approach in UI components (Dropdowns, Radio buttons, etc.)",
              "Increased bounce rates and poor conversion rate due to less engaging experience",
            ]}
            wireframes={[
              { src: poc1a, alt: "Restaurant app wireframe A" },
              { src: poc1b, alt: "Restaurant app wireframe B" },
            ]}
            solutions="Leveraging native platform advantages like gestures and thumb interactions as well as the implementation of Chat Bots."
            benefits={[
              "User completes Pizza ordering in just 6 screens",
              "Customizing a pizza is made simple and intuitive through gestures, drag and drop",
              "Geo-located user's position aids in balancing the order load of the store",
              "Reorganized Menu helps users engage and proactively upsells other categories",
              "Quick/Easy ordering for existing customers helps user retention and loyalty",
              "Smart Chatbot introduced for effective party planning",
              "Home page tailor-made to each user with location-based deals and promotional offers",
              "Using geolocation and buying patterns for improvised market strategies",
            ]}
          />

          {/* POC 2 — Telecom Dashboard */}
          <POCCard
            number="POC/RFP-2"
            icon={<Wifi className="h-5 w-5" />}
            domain="Telecom Network Dashboard"
            overview="The Client is the Global Communications and Technology leader known for its 4G and 5G wireless networks, broadband and fiber options. The ask was to provide a dashboard for network engineers who handle multiple applications and requests."
            problems={[]}
            wireframes={[
              { src: poc2a, alt: "Telecom dashboard wireframe A" },
              { src: poc2b, alt: "Telecom dashboard wireframe B" },
            ]}
            solutions={[
              "Personalization of the dashboard",
              "Highlight critical tasks",
              "Aid to finish tasks by scanning codes",
              "Routing activities to people",
            ]}
            benefits={[
              "Latest UX trends such as Flat Design technique used for screen design",
              "Chart-based intuitive UI for better user experience with personalized data views",
              "Form made clutter-free by progressive disclosure of form elements, grouped into meaningful categories as a wizard",
            ]}
          />

          {/* POC 3 — Vehicle Services */}
          <POCCard
            number="POC/RFP-3"
            icon={<Car className="h-5 w-5" />}
            domain="Vehicle Service Contracts"
            overview="The Client is a company based in Belgium engaged in automobile distribution and vehicle glass repair and replacement. Wecare is the brand name for vehicle services and maintenance contracts. The ask was to build an application for initiating and maintaining paid contracts through Wecare."
            problems={[]}
            wireframes={[
              { src: poc3a, alt: "Vehicle services wireframe A" },
              { src: poc3b, alt: "Vehicle services wireframe B" },
            ]}
            solutions={[
              "Personalization: With details fetched from the client during purchase, personalized offers specific to the user are provided",
              "Customization: The user can create their own contract by quoting the cost or building it with specifications",
              "Value Add: The user can print the contract card for quick reference whenever necessary",
            ]}
            benefits={[]}
          />

          {/* POC Miscellaneous */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="mb-4 flex items-center gap-2 font-display text-2xl font-bold text-foreground">
              <Layout className="h-5 w-5 text-primary" />
              Miscellaneous
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <img src={poc4a} alt="Miscellaneous wireframe A" className="w-full rounded-lg border border-border object-cover shadow-card" />
              <img src={poc4b} alt="Miscellaneous wireframe B" className="w-full rounded-lg border border-border object-cover shadow-card" />
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CaseStudyPocRfp;
