import { ArrowLeft, ArrowRight, Play, Pause, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";

interface StoryControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  onPrev: () => void;
  onNext: () => void;
  onReset: () => void;
  canPrev: boolean;
  canNext: boolean;
}

const StoryControls = ({
  isPlaying,
  onPlayPause,
  onPrev,
  onNext,
  onReset,
  canPrev,
  canNext,
}: StoryControlsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="flex items-center gap-2"
    >
      <button
        onClick={onPrev}
        disabled={!canPrev}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-card/80 backdrop-blur-sm text-foreground transition-all hover:bg-card hover:border-border disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Previous slide"
      >
        <ArrowLeft className="h-4 w-4" />
      </button>

      <button
        onClick={onPlayPause}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm text-primary transition-all hover:bg-primary/20"
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
      </button>

      <button
        onClick={onNext}
        disabled={!canNext}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-card/80 backdrop-blur-sm text-foreground transition-all hover:bg-card hover:border-border disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Next slide"
      >
        <ArrowRight className="h-4 w-4" />
      </button>

      <button
        onClick={onReset}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-card/80 backdrop-blur-sm text-muted-foreground transition-all hover:bg-card hover:text-foreground"
        aria-label="Reset"
      >
        <RotateCcw className="h-3.5 w-3.5" />
      </button>
    </motion.div>
  );
};

export default StoryControls;
