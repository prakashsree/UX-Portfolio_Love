import logoCisco from "@/assets/logo-cisco.png";
import logoVerizon from "@/assets/logo-verizon.png";
import logoHuawei from "@/assets/logo-huawei.png";
import logoMhrd from "@/assets/logo-mhrd.png";
import logoTelefonica from "@/assets/logo-telefonica.png";

const clients = [
  { name: "Cisco", logo: logoCisco },
  { name: "Verizon", logo: logoVerizon },
  { name: "Huawei", logo: logoHuawei },
  { name: "Telefonica", logo: logoTelefonica },
  { name: "MHRD, Government of India", logo: logoMhrd },
];

const ClientsSection = () => {
  return (
    <section className="border-b border-border bg-card py-12 overflow-hidden">
      <div className="container mx-auto px-6">
        <p className="mb-8 text-center font-body text-sm uppercase tracking-widest text-muted-foreground">
          Trusted by teams at
        </p>
      </div>
      <div className="relative w-full">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-card to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-card to-transparent" />

        <div className="flex animate-marquee items-center gap-16">
          {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="group flex shrink-0 flex-col items-center gap-3"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="h-16 w-auto object-contain opacity-60 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0"
              />
              <span className="whitespace-nowrap font-body text-sm font-medium text-muted-foreground/70 transition-colors group-hover:text-primary">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
