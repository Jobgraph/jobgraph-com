import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
  useTransform,
} from "framer-motion";

// A subtle, parallaxing graph-like background that drifts toward the mouse.
// Sits absolutely behind its parent (which must be `relative`).

const nodes = [
  { x: 12, y: 22, depth: 0.6 },
  { x: 28, y: 14, depth: 1.0 },
  { x: 44, y: 30, depth: 0.4 },
  { x: 62, y: 18, depth: 0.9 },
  { x: 78, y: 34, depth: 0.5 },
  { x: 88, y: 62, depth: 1.1 },
  { x: 70, y: 76, depth: 0.7 },
  { x: 50, y: 70, depth: 0.4 },
  { x: 32, y: 82, depth: 0.9 },
  { x: 14, y: 60, depth: 0.6 },
  { x: 22, y: 44, depth: 0.3 },
  { x: 56, y: 50, depth: 0.5 },
];

const edges: Array<[number, number]> = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6],
  [6, 7], [7, 8], [8, 9], [9, 10], [10, 0], [10, 11],
  [11, 2], [11, 7], [1, 11], [3, 11], [4, 5],
];

const LivingMapBg = () => {
  const reduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  // Normalised mouse position from -1..1 around the section centre
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const sx = useSpring(mx, { stiffness: 60, damping: 18, mass: 0.8 });
  const sy = useSpring(my, { stiffness: 60, damping: 18, mass: 0.8 });

  // Translate the orb in pixels following mouse
  const orbX = useTransform(sx, (v) => v * 80);
  const orbY = useTransform(sy, (v) => v * 60);

  useEffect(() => {
    if (reduced) return;
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const nx = (e.clientX - cx) / (rect.width / 2);
      const ny = (e.clientY - cy) / (rect.height / 2);
      mx.set(Math.max(-1, Math.min(1, nx)));
      my.set(Math.max(-1, Math.min(1, ny)));
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my, reduced]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden"
    >
      {/* Soft accent orb that drifts with the cursor */}
      <motion.div
        style={{ x: orbX, y: orbY }}
        className="absolute top-1/4 left-1/3 w-[55vw] h-[55vw] max-w-[820px] max-h-[820px] rounded-full opacity-30"
      >
        <div className="w-full h-full rounded-full bg-[radial-gradient(circle,hsl(var(--accent)/0.08),transparent_70%)]" />
      </motion.div>

      {/* Network — each node parallaxes by its depth */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
      >
        {edges.map(([a, b], i) => {
          const na = nodes[a];
          const nb = nodes[b];
          const avgDepth = (na.depth + nb.depth) / 2;
          return (
            <ParallaxLine
              key={i}
              x1={na.x}
              y1={na.y}
              x2={nb.x}
              y2={nb.y}
              depth={avgDepth}
              sx={sx}
              sy={sy}
            />
          );
        })}
        {nodes.map((n, i) => (
          <ParallaxNode key={i} {...n} sx={sx} sy={sy} />
        ))}
      </svg>
    </div>
  );
};

type ParallaxProps = {
  depth: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sx: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sy: any;
};

const ParallaxNode = ({
  x,
  y,
  depth,
  sx,
  sy,
}: { x: number; y: number } & ParallaxProps) => {
  const tx = useTransform(sx, (v: number) => x + v * depth * 1.6);
  const ty = useTransform(sy, (v: number) => y + v * depth * 1.2);
  return (
    <motion.circle
      cx={tx}
      cy={ty}
      r={0.28 + depth * 0.2}
      fill="hsl(var(--accent))"
      opacity={0.18 + depth * 0.15}
    />
  );
};

const ParallaxLine = ({
  x1,
  y1,
  x2,
  y2,
  depth,
  sx,
  sy,
}: { x1: number; y1: number; x2: number; y2: number } & ParallaxProps) => {
  const tx1 = useTransform(sx, (v: number) => x1 + v * depth * 1.6);
  const ty1 = useTransform(sy, (v: number) => y1 + v * depth * 1.2);
  const tx2 = useTransform(sx, (v: number) => x2 + v * depth * 1.6);
  const ty2 = useTransform(sy, (v: number) => y2 + v * depth * 1.2);
  return (
    <motion.line
      x1={tx1}
      y1={ty1}
      x2={tx2}
      y2={ty2}
      stroke="hsl(var(--accent))"
      strokeWidth={0.08}
      opacity={0.12}
    />
  );
};

export default LivingMapBg;
