import { motion } from "framer-motion";

const flowers = [
  { symbol: "✿", className: "top-[8%] right-[8%] text-3xl", duration: 7, delay: 0 },
  { symbol: "❀", className: "top-[15%] left-[5%] text-2xl", duration: 9, delay: 1 },
  { symbol: "✾", className: "bottom-[20%] right-[12%] text-2xl", duration: 6, delay: 2 },
  { symbol: "❁", className: "top-[40%] right-[4%] text-xl", duration: 8, delay: 0.5 },
  { symbol: "✿", className: "bottom-[30%] left-[8%] text-3xl", duration: 10, delay: 1.5 },
  { symbol: "❀", className: "bottom-[12%] left-[15%] text-xl", duration: 7, delay: 3 },
  { symbol: "✾", className: "top-[60%] left-[3%] text-lg", duration: 5, delay: 2.5 },
  { symbol: "✿", className: "top-[25%] right-[20%] text-lg", duration: 8, delay: 1.8 },
];

// Particle dots
const particles = Array.from({ length: 12 }).map((_, i) => ({
  x: `${5 + Math.random() * 90}%`,
  y: `${5 + Math.random() * 90}%`,
  size: 2 + Math.random() * 3,
  duration: 4 + Math.random() * 6,
  delay: Math.random() * 3,
}));

const StoryDecorations = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Floating flowers */}
      {flowers.map((f, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -12, 0, 8, 0],
            rotate: [0, 5, -3, 5, 0],
            scale: [1, 1.05, 0.98, 1.02, 1],
          }}
          transition={{
            duration: f.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: f.delay,
          }}
          className={`absolute text-primary/[0.08] ${f.className}`}
        >
          {f.symbol}
        </motion.div>
      ))}

      {/* Subtle particles */}
      {particles.map((p, i) => (
        <motion.div
          key={`p-${i}`}
          animate={{
            opacity: [0, 0.3, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
          className="absolute rounded-full bg-primary/10"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
          }}
        />
      ))}

      {/* Ambient gradient orbs */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 10, 0],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px]"
      />
      <motion.div
        animate={{
          x: [0, -25, 15, 0],
          y: [0, 15, -25, 0],
          opacity: [0.02, 0.05, 0.02],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-primary/5 blur-[100px]"
      />
    </div>
  );
};

export default StoryDecorations;
