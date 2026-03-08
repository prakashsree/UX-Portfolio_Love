import { motion } from "framer-motion";

const clients = [
  "Cisco", "Verizon", "Huawei", "HMS Host",
  "Masterbrands Cabinet", "MHRD, Govt of India",
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
            <motion.span
              key={client}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="font-display text-lg font-semibold text-muted-foreground/60 transition-colors hover:text-primary"
            >
              {client}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
