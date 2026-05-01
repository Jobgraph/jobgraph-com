import {
  motion,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "framer-motion";

const nodes = [
  { cx: 22, cy: 30 },
  { cx: 38, cy: 18 },
  { cx: 32, cy: 52 },
  { cx: 52, cy: 38 },
  { cx: 48, cy: 70 },
  { cx: 18, cy: 64 },
  { cx: 60, cy: 22 },
];

const edges: Array<[number, number]> = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 3],
  [2, 5],
  [3, 4],
  [3, 6],
  [1, 6],
];

const opps = [
  { title: "KYC document review", hours: "1,800 hrs/mo", value: "£240k" },
  { title: "AML alert triage", hours: "1,200 hrs/mo", value: "£164k" },
  { title: "Mortgage prep checks", hours: "740 hrs/mo", value: "£98k" },
];

const HOT_NODES = new Set([1, 3, 5]);

type Props = {
  progress: MotionValue<number>;
  start: number;
  end: number;
};

const IntelScene = ({ progress, start, end }: Props) => {
  const reduced = useReducedMotion();

  const localT = useTransform(progress, (p) => {
    if (reduced) return 1;
    return Math.max(0, Math.min(1, (p - start) / (end - start)));
  });

  return (
    <div className="relative w-full aspect-[4/3] rounded-xl bg-gradient-to-br from-secondary/60 to-background border border-border overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-5">
        <div className="col-span-3 relative">
          <svg viewBox="0 0 70 80" className="absolute inset-0 w-full h-full">
            {edges.map(([a, b], i) => (
              <Edge
                key={i}
                localT={localT}
                index={i}
                x1={nodes[a].cx}
                y1={nodes[a].cy}
                x2={nodes[b].cx}
                y2={nodes[b].cy}
              />
            ))}
            {nodes.map((n, i) => (
              <Node key={i} localT={localT} index={i} cx={n.cx} cy={n.cy} hot={HOT_NODES.has(i)} />
            ))}
          </svg>
          <div className="absolute top-2 left-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
            Live graph
          </div>
        </div>

        <div className="col-span-2 border-l border-border bg-background/50 p-3 flex flex-col gap-2">
          <div className="text-[9px] font-bold uppercase tracking-widest text-accent">
            Top opportunities
          </div>
          {opps.map((o, i) => (
            <Opp key={i} localT={localT} index={i} {...o} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Edge = ({
  localT,
  index,
  x1,
  y1,
  x2,
  y2,
}: {
  localT: MotionValue<number>;
  index: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}) => {
  const t0 = 0.05 + index * 0.04;
  const t1 = t0 + 0.18;
  const pathLength = useTransform(localT, [t0, t1, 1], [0, 1, 1]);
  const opacity = useTransform(localT, [t0, t1, 1], [0, 0.6, 0.6]);
  return (
    <motion.line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="hsl(var(--border))"
      strokeWidth={0.4}
      style={{ pathLength, opacity }}
    />
  );
};

const Node = ({
  localT,
  index,
  cx,
  cy,
  hot,
}: {
  localT: MotionValue<number>;
  index: number;
  cx: number;
  cy: number;
  hot: boolean;
}) => {
  const t0 = 0.1 + index * 0.04;
  const opacity = useTransform(localT, [t0 - 0.02, t0, 1], [0, 1, 1]);
  const scale = useTransform(
    localT,
    hot ? [t0, t0 + 0.05, t0 + 0.1, t0 + 0.18, 1] : [t0, t0 + 0.05, 1],
    hot ? [0, 1, 1.4, 1, 1] : [0, 1, 1],
  );
  return (
    <motion.circle
      cx={cx}
      cy={cy}
      r={hot ? 1.8 : 1.3}
      fill={hot ? "hsl(var(--accent))" : "hsl(var(--muted-foreground))"}
      style={{
        opacity,
        scale,
        transformBox: "fill-box",
        transformOrigin: "center",
      }}
    />
  );
};

const Opp = ({
  localT,
  index,
  title,
  hours,
  value,
}: {
  localT: MotionValue<number>;
  index: number;
  title: string;
  hours: string;
  value: string;
}) => {
  const t0 = 0.55 + index * 0.1;
  const opacity = useTransform(localT, [t0 - 0.02, t0 + 0.05, 1], [0, 1, 1]);
  const x = useTransform(localT, [t0 - 0.02, t0 + 0.05, 1], [12, 0, 0]);
  return (
    <motion.div
      style={{ opacity, x }}
      className="rounded-md border border-border bg-background p-2"
    >
      <div className="text-[10px] font-bold text-foreground leading-tight">{title}</div>
      <div className="flex items-center justify-between mt-1">
        <span className="text-[8px] text-muted-foreground">{hours}</span>
        <span className="text-[9px] font-extrabold text-accent">{value}</span>
      </div>
    </motion.div>
  );
};

export default IntelScene;
