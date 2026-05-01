import {
  motion,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Phone, PhoneOff } from "lucide-react";

const messages = [
  { from: "jg", text: "Hey Priya — got 5 mins after work?" },
  { from: "sam", text: "Sure, what's up?" },
  { from: "jg", text: "What's the most draining part of your week?" },
  { from: "sam", text: "Honestly? Chasing KYC docs every Monday." },
];

type Props = {
  progress: MotionValue<number>;
  start: number;
  end: number;
};

const InterviewScene = ({ progress, start, end }: Props) => {
  const reduced = useReducedMotion();

  // Local time within this scene's slot (0..1). Held at 1 after end.
  const localT = useTransform(progress, (p) => {
    if (reduced) return 1;
    return Math.max(0, Math.min(1, (p - start) / (end - start)));
  });

  // Call screen: fade in fast, stay until 0.55, then crossfade out by 0.62
  const callOpacity = useTransform(localT, [0, 0.05, 0.55, 0.62], [0, 1, 1, 0]);
  // Chat fades in as call fades out, then stays
  const chatOpacity = useTransform(localT, [0, 0.55, 0.62, 1], [0, 0, 1, 1]);

  // Message timing inside localT (after chat opens at 0.62)
  const msgTimes = [0.66, 0.74, 0.82, 0.9];

  return (
    <div className="relative w-full aspect-[4/3] rounded-xl bg-gradient-to-br from-secondary/60 to-background border border-border overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,hsl(var(--accent)/0.12),transparent_60%)]" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[58%] aspect-[9/16] rounded-[28px] bg-foreground border-2 border-border shadow-xl overflow-hidden">
          {/* Notch */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-12 h-3 rounded-full bg-black/80 z-30" />

          {/* ── Incoming call screen ─────────────────────────────────────── */}
          <motion.div
            style={{ opacity: callOpacity }}
            className="absolute inset-0 flex flex-col items-center justify-between py-7 px-3"
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, hsl(var(--foreground)) 0%, #0a0a14 100%)",
              }}
            />
            {/* Status row */}
            <div className="relative w-full flex items-center justify-between px-3 text-[8px] text-white/70">
              <span>9:42</span>
              <span>•••</span>
            </div>

            <div className="relative flex flex-col items-center gap-2">
              <div className="text-[9px] uppercase tracking-widest text-white/60">
                incoming call
              </div>
              <div className="text-[14px] font-semibold text-white leading-none">
                Jobgraph
              </div>
              <div className="text-[9px] text-white/50">mobile</div>

              {/* Avatar with pulsing rings */}
              <div className="relative mt-3">
                {!reduced &&
                  [0, 0.6, 1.2].map((d) => (
                    <motion.span
                      key={d}
                      className="absolute inset-0 rounded-full border border-accent/60"
                      animate={{ scale: [1, 1.9], opacity: [0.6, 0] }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        delay: d,
                        ease: "easeOut",
                      }}
                    />
                  ))}
                <div className="relative w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-extrabold text-sm">
                  JG
                </div>
              </div>
            </div>

            <div className="relative w-full flex items-center justify-around">
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
                  <PhoneOff size={12} className="text-white" />
                </div>
                <span className="text-[8px] text-white/60">Decline</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <motion.div
                  animate={reduced ? { scale: 1 } : { scale: [1, 1.08, 1] }}
                  transition={{ duration: 1.4, repeat: Infinity }}
                  className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center"
                >
                  <Phone size={12} className="text-white" />
                </motion.div>
                <span className="text-[8px] text-white/60">Accept</span>
              </div>
            </div>
          </motion.div>

          {/* ── Chat screen ──────────────────────────────────────────────── */}
          <motion.div
            style={{ opacity: chatOpacity }}
            className="absolute inset-0 flex flex-col bg-background"
          >
            <div className="flex items-center justify-between px-4 pt-3 pb-2 text-[9px] text-muted-foreground">
              <span>9:43 PM</span>
              <span>Jobgraph</span>
            </div>
            <div className="h-px bg-border mx-3" />

            <div className="flex-1 flex flex-col justify-start gap-1.5 p-3 pt-4">
              {messages.map((m, i) => (
                <Message
                  key={i}
                  localT={localT}
                  start={msgTimes[i]}
                  side={m.from}
                  text={m.text}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

type MessageProps = {
  localT: MotionValue<number>;
  start: number;
  side: string;
  text: string;
};

const Message = ({ localT, start, side, text }: MessageProps) => {
  const opacity = useTransform(localT, [start - 0.02, start, 1], [0, 1, 1]);
  const y = useTransform(localT, [start - 0.02, start, 1], [8, 0, 0]);
  return (
    <motion.div
      style={{ opacity, y }}
      className={`max-w-[78%] px-2.5 py-1.5 rounded-2xl text-[10px] leading-snug ${
        side === "jg"
          ? "self-start bg-secondary text-foreground rounded-bl-sm"
          : "self-end bg-accent text-white rounded-br-sm"
      }`}
    >
      {text}
    </motion.div>
  );
};

export default InterviewScene;
