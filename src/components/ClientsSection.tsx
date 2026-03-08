import { motion } from "framer-motion";
import logoCisco from "@/assets/logo-cisco.png";
import logoVerizon from "@/assets/logo-verizon.png";
import logoHuawei from "@/assets/logo-huawei.png";
import logoHmshost from "@/assets/logo-hmshost.png";
import logoMasterbrands from "@/assets/logo-masterbrands.png";
import logoMhrd from "@/assets/logo-mhrd.png";

const clients = [
  { name: "Cisco", logo: logoCisco },
  { name: "Verizon", logo: logoVerizon },
  { name: "Huawei", logo: logoHuawei },
  { name: "HMS Host", logo: logoHmshost },
  { name: "Masterbrands Cabinet", logo: logoMasterbrands },
  { name: "MHRD, Govt of India", logo: logoMhrd },
];

const ClientsSection = () => {
  return (
    <section className="border-b border-border bg-card py-12">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 text-center font-body text-sm uppercase tracking-widest text-muted-foreground"
        >
          Trusted by teams at
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col items-center gap-2 transition-colors"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="h-16 w-auto object-contain opacity-60 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0"
              />
              <span className="font-body text-xs text-muted-foreground/50 transition-colors group-hover:text-primary">
                {client.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
