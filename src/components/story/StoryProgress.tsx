import { motion } from "framer-motion";

interface StoryProgressProps {
  current: number;
  total: number;
  slideProgress: number; // 0 to 1 for current slide
  elapsedTime: string;
  totalTime: string;
}

const StoryProgress = ({ current, total, slideProgress, elapsedTime, totalTime }: StoryProgressProps) => {
  const overallProgress = (current + slideProgress) / total;

  return (
    <div className="w-full">
      {/* Timeline bar */}
      <div className="relative h-[2px] w-full bg-border/30 overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 bg-primary/60"
          style={{ width: `${overallProgress * 100}%` }}
          transition={{ duration: 0.3 }}
        />
        {/* Slide markers */}
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 -translate-y-1/2 w-px h-2 bg-border/40"
            style={{ left: `${((i + 1) / total) * 100}%` }}
          />
        ))}
      </div>

      {/* Time display */}
      <div className="flex items-center justify-between mt-1.5 px-1">
        <span className="font-mono text-[10px] text-muted-foreground/60 tracking-wider">
          {elapsedTime} / {totalTime}
        </span>
      </div>
    </div>
  );
};

export default StoryProgress;
