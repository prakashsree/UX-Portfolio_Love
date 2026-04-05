import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";
import { slides } from "@/components/story/StorySlides";
import StoryControls from "@/components/story/StoryControls";
import StoryProgress from "@/components/story/StoryProgress";
import StoryDecorations from "@/components/story/StoryDecorations";
import StoryEndScreen from "@/components/story/StoryEndScreen";

const formatTime = (seconds: number) => {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
};

const totalDuration = slides.reduce((sum, s) => sum + s.duration, 0);

const Story = () => {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [slideElapsed, setSlideElapsed] = useState(0);
  const [showEnd, setShowEnd] = useState(false);
  const navigate = useNavigate();
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const currentSlide = slides[current];
  const slideDuration = currentSlide.duration;

  // Compute elapsed time
  const elapsedBefore = slides.slice(0, current).reduce((sum, s) => sum + s.duration, 0);
  const totalElapsed = elapsedBefore + slideElapsed;

  // Autoplay timer
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    if (isPlaying && !showEnd) {
      const tick = 100; // ms
      intervalRef.current = setInterval(() => {
        setSlideElapsed((prev) => {
          const next = prev + tick / 1000;
          if (next >= slideDuration) {
            if (current < slides.length - 1) {
              setCurrent((c) => c + 1);
              return 0;
            } else {
              setIsPlaying(false);
              // Navigate to home after a brief pause
              setTimeout(() => navigate("/home"), 1500);
              return slideDuration;
            }
          }
          return next;
        });
      }, tick);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, current, slideDuration, showEnd]);

  const goNext = useCallback(() => {
    if (current < slides.length - 1) {
      setCurrent((c) => c + 1);
      setSlideElapsed(0);
    }
  }, [current]);

  const goPrev = useCallback(() => {
    if (current > 0) {
      setCurrent((c) => c - 1);
      setSlideElapsed(0);
    }
  }, [current]);

  const handlePlayPause = useCallback(() => {
    if (showEnd) {
      setShowEnd(false);
      setCurrent(0);
      setSlideElapsed(0);
      setIsPlaying(true);
    } else {
      setIsPlaying((p) => !p);
    }
  }, [showEnd]);

  const handleReset = useCallback(() => {
    setCurrent(0);
    setSlideElapsed(0);
    setIsPlaying(true);
    setShowEnd(false);
  }, []);

  const handleDotClick = useCallback((i: number) => {
    setCurrent(i);
    setSlideElapsed(0);
    setShowEnd(false);
    setIsPlaying(true);
  }, []);

  // Keyboard controls
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "Escape") {
        navigate("/");
      } else if (e.key === "p" || e.key === "P") {
        handlePlayPause();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev, navigate, handlePlayPause]);

  return (
    <div className="fixed inset-0 bg-background flex flex-col overflow-hidden">
      {/* Decorations layer */}
      <StoryDecorations />

      {/* Progress bar at very top */}
      <div className="px-6 pt-3 z-10">
        <StoryProgress
          current={current}
          total={slides.length}
          slideProgress={slideElapsed / slideDuration}
          elapsedTime={formatTime(totalElapsed)}
          totalTime={formatTime(totalDuration)}
        />
      </div>

      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-2 z-10">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 font-body text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <Home className="h-4 w-4" />
          <span className="hidden sm:inline">Back</span>
        </button>

        {/* Dot indicators */}
        <div className="flex items-center gap-2">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className="group relative flex items-center"
            >
              <div
                className={`h-2 rounded-full transition-all duration-500 ${
                  i === current
                    ? "bg-primary w-8"
                    : i < current
                    ? "bg-primary/40 w-2"
                    : "bg-muted-foreground/20 w-2 hover:bg-muted-foreground/40"
                }`}
              />
              {/* Tooltip on hover */}
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity font-display text-[9px] tracking-widest text-muted-foreground whitespace-nowrap">
                {s.label}
              </span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="font-display text-xs tracking-widest text-muted-foreground hidden sm:inline">
            {slides[current].label} · {current + 1}/{slides.length}
          </span>
          <ThemeToggle />
        </div>
      </div>

      {/* Slide content */}
      <div className="flex-1 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {slides[current].content}
          </motion.div>
        </AnimatePresence>

        {/* End screen overlay */}
        {showEnd && <StoryEndScreen onReplay={handleReset} />}
      </div>

      {/* Bottom controls */}
      <div className="flex items-center justify-between px-6 py-4 z-10">
        {/* Left: links */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="font-display text-[10px] tracking-widest text-muted-foreground hover:text-primary transition-colors hidden sm:inline"
          >
            ↗ CASE STUDIES
          </button>
          <a
            href="https://drive.google.com/file/d/1n58wH_qmFwxfxLoMcdD5zfwAm07T-4Us/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-[10px] tracking-widest text-muted-foreground hover:text-primary transition-colors hidden sm:inline"
          >
            ↓ DOWNLOAD RESUME
          </a>
        </div>

        {/* Center: playback controls */}
        <StoryControls
          isPlaying={isPlaying}
          onPlayPause={handlePlayPause}
          onPrev={goPrev}
          onNext={goNext}
          onReset={handleReset}
          canPrev={current > 0}
          canNext={current < slides.length - 1}
        />

        {/* Right: CTA */}
        <button
          onClick={current === slides.length - 1 ? () => navigate("/") : goNext}
          className="flex h-10 items-center gap-2 rounded-full bg-primary px-6 font-body text-sm font-medium text-primary-foreground transition-shadow hover:shadow-glow"
        >
          {current === slides.length - 1 ? "VIEW MY WORK →" : "Next →"}
        </button>
      </div>
    </div>
  );
};

export default Story;
