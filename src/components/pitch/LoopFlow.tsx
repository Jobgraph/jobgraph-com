import { useRef } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";
import {
  motion,
  useInView,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import FadeIn from "@/components/FadeIn";
import InterviewScene from "./InterviewScene";
import IntelScene from "./IntelScene";
import AutomateScene from "./AutomateScene";
import { useLoopProgress, PHASES } from "./useLoopProgress";

type SceneProps = {
  progress: MotionValue<number>;
  start: number;
  end: number;
};

type Stage = {
  number: string;
  title: string;
  Scene: React.ComponentType<SceneProps>;
  body: string;
  start: number;
  end: number;
};

const stages: Stage[] = [
  {
    number: "01",
    title: "Interview",
    Scene: InterviewScene,
    body: "A friendly AI calls or texts your people after work. It asks what they do, what drains them, what they want to keep, what they'd happily hand over. No surveys. No consultants. Built in the style of Professor Phillip Brown.",
    start: PHASES.interview.start,
    end: PHASES.interview.end,
  },
  {
    number: "02",
    title: "Map",
    Scene: IntelScene,
    body: "A live graph of tasks, skills, and AI exposure across the org. Surfaces the biggest opportunities: what to redesign, who to reskill, what to automate first, and what each one is worth.",
    start: PHASES.map.start,
    end: PHASES.map.end,
  },
  {
    number: "03",
    title: "Automate",
    Scene: AutomateScene,
    body: "An exec greenlights the top opportunities. Jobgraph spins up autonomous agents that work with the employee — asking for the docs and access they need — and take the painful tasks off their plate.",
    start: PHASES.automate.start,
    end: PHASES.automate.end,
  },
];

const StageCard = ({
  stage,
  progress,
}: {
  stage: Stage;
  progress: MotionValue<number>;
}) => {
  const { number, title, Scene, body, start, end } = stage;
  return (
    <div className="bg-background border-2 border-border rounded-2xl p-5 md:p-6 hover:border-accent/40 hover:shadow-lg transition-all duration-500 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <span className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent text-sm font-extrabold">
          {number}
        </span>
        <h3 className="text-lg font-extrabold text-foreground">{title}</h3>
      </div>
      <div className="mb-5">
        <Scene progress={progress} start={start} end={end} />
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
    </div>
  );
};

const LoopFlow = () => {
  const reduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.25, margin: "-10% 0px" });
  const progress = useLoopProgress(18000, inView);

  return (
    <div ref={containerRef}>
      {/* Desktop: 3 across with forward arrows + return arrow underneath */}
      <div className="hidden md:block">
        <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 items-stretch">
          <FadeIn delay={0}>
            <StageCard stage={stages[0]} progress={progress} />
          </FadeIn>
          <div className="flex items-center justify-center text-accent">
            <ArrowRight size={28} strokeWidth={2.5} />
          </div>
          <FadeIn delay={0.1}>
            <StageCard stage={stages[1]} progress={progress} />
          </FadeIn>
          <div className="flex items-center justify-center text-accent">
            <ArrowRight size={28} strokeWidth={2.5} />
          </div>
          <FadeIn delay={0.2}>
            <StageCard stage={stages[2]} progress={progress} />
          </FadeIn>
        </div>

        {/* Return-arrow ribbon */}
        <FadeIn delay={0.35}>
          <div className="mt-10 relative">
            <svg
              viewBox="0 0 1000 60"
              preserveAspectRatio="none"
              className="w-full h-14"
              aria-hidden="true"
            >
              <motion.path
                d="M 940 8 Q 940 52 500 52 Q 60 52 60 8"
                fill="none"
                stroke="hsl(var(--accent))"
                strokeWidth={2}
                strokeDasharray="6 6"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={
                  reduced
                    ? { pathLength: 1, opacity: 0.7 }
                    : { pathLength: 1, opacity: 0.7 }
                }
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
              <motion.polygon
                points="50,4 70,4 60,16"
                fill="hsl(var(--accent))"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.2 }}
              />
            </svg>
            <div className="absolute left-1/2 -translate-x-1/2 -top-1 flex items-center gap-2 px-4 py-1.5 rounded-full bg-background border border-border text-[11px] font-bold uppercase tracking-widest text-accent">
              <RotateCcw size={12} />
              Re-interview · Re-map · Re-measure
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Mobile: vertical with ↓ arrows + loop pill at the end */}
      <div className="md:hidden flex flex-col gap-5">
        {stages.map((s, i) => (
          <div key={s.number} className="flex flex-col gap-5">
            <FadeIn delay={i * 0.05}>
              <StageCard stage={s} progress={progress} />
            </FadeIn>
            {i < stages.length - 1 && (
              <div className="flex justify-center text-accent">
                <ArrowRight size={24} strokeWidth={2.5} className="rotate-90" />
              </div>
            )}
          </div>
        ))}
        <FadeIn delay={0.2}>
          <div className="mt-2 flex justify-center">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-[11px] font-bold uppercase tracking-widest text-accent">
              <RotateCcw size={12} />
              Re-interview · Re-map · Re-measure
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default LoopFlow;
