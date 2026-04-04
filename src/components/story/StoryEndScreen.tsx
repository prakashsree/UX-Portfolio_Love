import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface StoryEndScreenProps {
  onReplay: () => void;
}

const StoryEndScreen = ({ onReplay }: StoryEndScreenProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 z-20 bg-background/80 backdrop-blur-sm"
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="font-body text-base text-muted-foreground"
      >
        You've reached the end of Prakash's story ✿
      </motion.p>

      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        onClick={onReplay}
        className="mt-8 flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
      >
        <RotateCcw className="h-5 w-5" />
        <span className="font-display text-sm tracking-widest">Replay</span>
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="mt-10 flex flex-col sm:flex-row items-center gap-4"
      >
        <button
          onClick={() => navigate("/")}
          className="flex h-11 items-center gap-2 rounded-full bg-primary px-8 font-body text-sm font-medium text-primary-foreground transition-shadow hover:shadow-glow"
        >
          View Portfolio →
        </button>
        <a
          href="https://drive.google.com/file/d/1n58wH_qmFwxfxLoMcdD5zfwAm07T-4Us/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="font-display text-xs tracking-widest text-muted-foreground hover:text-primary transition-colors"
        >
          Download Resume ↓
        </a>
      </motion.div>
    </motion.div>
  );
};

export default StoryEndScreen;
