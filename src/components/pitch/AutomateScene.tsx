import {
  motion,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Bot, User } from "lucide-react";

const tasks = [
  { title: "KYC document review", saved: "1,800 hrs" },
  { title: "AML alert triage", saved: "1,200 hrs" },
  { title: "Mortgage prep checks", saved: "740 hrs" },
];

type Props = {
  progress: MotionValue<number>;
  start: number;
  end: number;
};

const AutomateScene = ({ progress, start, end }: Props) => {
  const reduced = useReducedMotion();

  const localT = useTransform(progress, (p) => {
    if (reduced) return 1;
    return Math.max(0, Math.min(1, (p - start) / (end - start)));
  });

  // Exec speech bubble: appears, holds, fades out
  const bubbleOpacity = useTransform(
    localT,
    [0, 0.05, 0.3, 0.38],
    [0, 1, 1, 0],
  );
  const bubbleX = useTransform(localT, [0, 0.05, 1], [-6, 0, 0]);

  return (
    <div className="relative w-full aspect-[4/3] rounded-xl bg-gradient-to-br from-secondary/60 to-background border border-border overflow-hidden">
      {/* Exec + speech bubble */}
      <div className="absolute top-3 left-3 flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center">
          <User size={14} />
        </div>
        <motion.div
          style={{ opacity: bubbleOpacity, x: bubbleX }}
          className="px-2.5 py-1.5 rounded-lg bg-background border border-border text-[10px] font-semibold text-foreground shadow-sm"
        >
          Spin up agents.
        </motion.div>
      </div>

      {/* Agent chips fanning out from exec to tasks */}
      {[0, 1, 2].map((i) => (
        <AgentChip key={i} localT={localT} index={i} />
      ))}

      {/* Task tiles */}
      <div className="absolute bottom-3 left-3 right-3 flex flex-col gap-1.5">
        {tasks.map((t, i) => (
          <TaskTile key={i} localT={localT} index={i} {...t} />
        ))}
      </div>
    </div>
  );
};

const AgentChip = ({
  localT,
  index,
}: {
  localT: MotionValue<number>;
  index: number;
}) => {
  const t0 = 0.32 + index * 0.04;
  const t1 = 0.55 + index * 0.04; // dock
  const t2 = t1 + 0.06; // fade after dock
  // Targets are in container px relative to top-left where the chip starts (top-3 left-3)
  const targetX = 50 + index * 22;
  const targetY = 30 + index * 26;
  const opacity = useTransform(localT, [t0 - 0.02, t0, t1, t2, 1], [0, 1, 1, 0, 0]);
  const x = useTransform(localT, [t0, t1, 1], [0, targetX, targetX]);
  const y = useTransform(localT, [t0, t1, 1], [0, targetY, targetY]);
  return (
    <motion.div
      style={{ opacity, x, y, pointerEvents: "none" }}
      className="absolute top-3 left-3 w-7 h-7 rounded-full bg-accent text-white flex items-center justify-center shadow-md"
    >
      <Bot size={12} />
    </motion.div>
  );
};

const TaskTile = ({
  localT,
  index,
  title,
  saved,
}: {
  localT: MotionValue<number>;
  index: number;
  title: string;
  saved: string;
}) => {
  const flipAt = 0.6 + index * 0.05;
  const manualOpacity = useTransform(
    localT,
    [0, flipAt - 0.02, flipAt, 1],
    [1, 1, 0, 0],
  );
  const automatedOpacity = useTransform(
    localT,
    [0, flipAt - 0.01, flipAt + 0.01, 1],
    [0, 0, 1, 1],
  );
  return (
    <div className="relative rounded-md border border-border bg-background overflow-hidden">
      <motion.div
        style={{ opacity: manualOpacity }}
        className="flex items-center justify-between px-2.5 py-1.5"
      >
        <span className="text-[10px] font-semibold text-muted-foreground">{title}</span>
        <span className="text-[8px] uppercase tracking-widest text-muted-foreground/70 font-bold">
          Manual
        </span>
      </motion.div>
      <motion.div
        style={{ opacity: automatedOpacity }}
        className="absolute inset-0 flex items-center justify-between px-2.5 py-1.5 bg-accent/10"
      >
        <span className="text-[10px] font-semibold text-foreground flex items-center gap-1.5">
          <Bot size={10} className="text-accent" />
          {title}
        </span>
        <span className="text-[9px] font-extrabold text-accent">+{saved}/mo</span>
      </motion.div>
    </div>
  );
};

export default AutomateScene;
