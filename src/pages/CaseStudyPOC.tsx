import { motion } from "framer-motion";
import { ArrowLeft, Pizza, Wifi, Car, CheckCircle, AlertCircle, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import pocHero from "@/assets/poc-hero.jpg";
import poc1a from "@/assets/poc-1a.png";
import poc1b from "@/assets/poc-1b.png";
import poc2a from "@/assets/poc-2a.png";
import poc2b from "@/assets/poc-2b.png";
import poc3a from "@/assets/poc-3a.png";
import poc3b from "@/assets/poc-3b.png";
import poc4a from "@/assets/poc-4a.png";
import poc4b from "@/assets/poc-4b.png";

const Section = ({ title, children, className = "" }: { title?: string; children: React.ReactNode; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`mb-16 ${className}`}
  >
    {title && (
      <h2 className="mb-6 font-display text-2xl font-bold text-foreground">{title}</h2>
    )}
    {children}
  </motion.div>
);

const POCCard = ({
  number,
  icon: Icon,
  title,
  overview,
  problems,
  wireframes,
  solutions,
  benefits,
}: {
  number: number;
  icon: React.ElementType;
  title: string;
  overview: string;
  problems?: string[];
  wireframes: { src: string; alt: string }[];
  solutions: string | string[];
  benefits: string[];
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-16 rounded-2xl border border-border bg-card p-8 shadow-card"
  >
    {/* Header */}
    <div className="mb-8 flex items-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <div>
        <p className="font-body text-xs font-medium uppercase tracking-wider text-primary">
          POC/RFP-{number}
        </p>
        <h3 className="font-display text-xl font-bold text-foreground">{title}</h3>
      </div>
    </div>

    {/* Overview */}
    <div className="mb-8">
      <h4 className="mb-3 flex items-center gap-2 font-display text-lg font-semibold text-foreground">
        <AlertCircle className="h-5 w-5 text-destructive" />
        Overview & the Problem
      </h4>
      <p className="mb-4 font-body text-sm leading-relaxed text-muted-foreground">{overview}</p>
      {problems && (
        <ul className="space-y-2">
          {problems.map((p, i) => (
            <li key={i} className="flex items-start gap-3 font-body text-sm text-muted-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
              {p}
            </li>
          ))}
        </ul>
      )}
    </div>

    {/* Wireframes */}
    <div className="mb-8">
      <h4 className="mb-4 font-display text-lg font-semibold text-foreground">Wireframes</h4>
      <div className="grid gap-4 sm:grid-cols-2">
        {wireframes.map((wf, i) => (
          <div key={i} className="overflow-hidden rounded-xl border border-border bg-muted/30 p-2">
            <img src={wf.src} alt={wf.alt} className="h-auto w-full rounded-lg object-contain" />
          </div>
        ))}
      </div>
    </div>

    {/* Solutions */}
    <div className="mb-8">
      <h4 className="mb-3 flex items-center gap-2 font-display text-lg font-semibold text-foreground">
        <Lightbulb className="h-5 w-5 text-primary" />
        Solutions
      </h4>
      {typeof solutions === "string" ? (
        <p className="font-body text-sm leading-relaxed text-muted-foreground">{solutions}</p>
      ) : (
        <ul className="space-y-2">
          {solutions.map((s, i) => (
            <li key={i} className="flex items-start gap-3 font-body text-sm text-muted-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {s}
            </li>
          ))}
        </ul>
      )}
    </div>

    {/* Benefits */}
    <div>
      <h4 className="mb-3 flex items-center gap-2 font-display text-lg font-semibold text-foreground">
        <CheckCircle className="h-5 w-5 text-green-500" />
        Benefits
      </h4>
      <ul className="space-y-2">
        {benefits.map((b, i) => (
          <li key={i} className="flex items-start gap-3 font-body text-sm text-muted-foreground">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
            {b}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const CaseStudyPOC = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden bg-card py-16">
          <div className="absolute inset-0">
            <img src={pocHero} alt="POC/RFP" className="h-full w-full object-cover opacity-20" />
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
                UX Design &amp; Strategy
              </p>
              <h1 className="mb-4 font-display text-3xl font-bold text-foreground sm:text-5xl">
                Proof of Concept / Request for Proposal
              </h1>
              <p className="max-w-2xl font-body text-lg leading-relaxed text-muted-foreground">
                Demonstration in principle with the aim of verifying that some concept or theory has practical potential.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="bg-background py-16">
          <div className="container mx-auto max-w-4xl px-6">
            {/* POC 1 */}
            <POCCard
              number={1}
              icon={Pizza}
              title="Restaurant Chain — iOS Ordering Experience"
              overview="The Client is an American restaurant chain and international franchise, known for its Italian-American cuisine menu including pizza and pasta, as well as side dishes and desserts. The ask is to have a native application in the iOS platform with enhanced User Experience."
              problems={[
                "The user has to navigate through a minimum of 09 screens to place an order",
                "The user has to put a lot of effort in manual entry of inputs in several pages",
                "The Home page is not tailor-made for each user based on the location",
                "The process of customizing a pizza is cumbersome",
                "The system does not take full advantage of the native platform features",
                "A lot of information is hidden which forces the user to recall earlier information during Customization",
                "This application takes a traditional old fashioned approach in UI components such as Dropdowns, Radio button etc.",
                "Increase bounce rates and poor conversion rate due to a less engaging experience",
              ]}
              wireframes={[
                { src: poc1a, alt: "POC 1 Wireframe A" },
                { src: poc1b, alt: "POC 1 Wireframe B" },
              ]}
              solutions="Leveraging native platform advantages like gestures and thumb interactions as well as the Implementation of Chat Bots."
              benefits={[
                "The user would complete the Pizza ordering in just 06 screens",
                "The option of customizing a pizza is made simple and intuitive by taking full advantage of the native platform through gestures, drag and drop etc.",
                "Geo-located user's position aids in balancing the order load of the store",
                "Reorganized Menu helps the user's engaged to order the food of their choice and also proactively upsell the other categories",
                "Introduced Quick/Easy ordering for the existing customers which helps in user retention and user loyalty",
                "A smart Chatbot is introduced which helps the user in effective party planning without many hindrances",
                "The home page is tailor-made to each user by pushing deals and promotional offers based on location",
                "Using user's geolocation and buying patterns, the client now has enough data to read the market and come up with improvised strategies",
              ]}
            />

            {/* POC 2 */}
            <POCCard
              number={2}
              icon={Wifi}
              title="Telecom Leader — Network Engineer Dashboard"
              overview="The Client is the Global Communications and Technology leader known for its 4G and 5G wireless networks, broadband and fiber options and many more. The ask is to provide a dashboard for the network engineers who handle multiple applications and requests from those."
              wireframes={[
                { src: poc2a, alt: "POC 2 Wireframe A" },
                { src: poc2b, alt: "POC 2 Wireframe B" },
              ]}
              solutions={[
                "Personalization of the dashboard",
                "Highlight critical tasks",
                "Aid to finish the tasks by scanning codes",
                "Routing activities to people",
              ]}
              benefits={[
                "Latest UX trends such as Flat Design technique is used for the screen design",
                "Chart based Intuitive UI is introduced to provide a better user experience which helps the user in performing the tasks easily. Also, the user can personalize the data that can be viewed",
                "The form is made clutter free by progressive disclosure of form elements. These elements are grouped into meaningful categories and stacked as a wizard to reduce clutter on the screen and for better navigation",
              ]}
            />

            {/* POC 3 */}
            <POCCard
              number={3}
              icon={Car}
              title="Automobile — Vehicle Service Contracts (Wecare)"
              overview="The Client is a company based in Belgium that is engaged in automobile distribution and vehicle glass repair and replacement. Wecare is the brand name for the vehicle services and maintenance contracts distributed by the client, which imports and distributes vehicles along with spare parts and accessories to brands like Volkswagen, Seat, Skoda, Audi. The ask is to build an application for initiating and maintaining paid contracts through Wecare."
              wireframes={[
                { src: poc3a, alt: "POC 3 Wireframe A" },
                { src: poc3b, alt: "POC 3 Wireframe B" },
              ]}
              solutions={[
                "Personalization: With the details fetched from the client during purchase, personalized offers specific to the user are presented",
                "Customization: The user can also create their own contract by quoting the cost or building it with specifications",
                "Value Add: The user can print the contract card for quick reference whenever necessary",
              ]}
              benefits={[
                "Personalized offers drive higher conversion rates",
                "Self-service contract creation reduces dependency on support",
                "Printable contract cards improve user confidence and reference accessibility",
              ]}
            />

            {/* Miscellaneous */}
            <Section title="Miscellaneous POC Work">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-xl border border-border bg-muted/30 p-2">
                  <img src={poc4a} alt="Miscellaneous POC A" className="h-auto w-full rounded-lg object-contain" />
                </div>
                <div className="overflow-hidden rounded-xl border border-border bg-muted/30 p-2">
                  <img src={poc4b} alt="Miscellaneous POC B" className="h-auto w-full rounded-lg object-contain" />
                </div>
              </div>
            </Section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CaseStudyPOC;
