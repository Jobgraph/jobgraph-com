import { useEffect } from "react";
import { useMotionValue, useReducedMotion } from "framer-motion";

// Shared 0→1 clock that drives the synchronized Interview → Map → Automate
// storyboard across LoopFlow. One cycle plays the full story; on reset every
// scene snaps back to its initial state and the call rings again.
//
// The clock only ticks while `active` is true, and restarts from 0 each time
// it transitions false → true. That way the storyboard always begins with the
// phone ringing the moment the section scrolls into view.

export const useLoopProgress = (durationMs = 18000, active = true) => {
  const reduced = useReducedMotion();
  const progress = useMotionValue(reduced ? 1 : 0);

  useEffect(() => {
    if (reduced) {
      progress.set(1);
      return;
    }
    if (!active) {
      progress.set(0);
      return;
    }
    let raf = 0;
    const startedAt = performance.now();
    const tick = (now: number) => {
      const elapsed = (now - startedAt) % durationMs;
      progress.set(elapsed / durationMs);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, durationMs, progress, reduced]);

  return progress;
};

// Phase windows (fractions of the global progress 0..1)
// Interview holds its final frame until the cycle resets, then the call
// rings again. Same for Map and Automate.
export const PHASES = {
  interview: { start: 0.0, end: 0.42 },
  map: { start: 0.42, end: 0.7 },
  automate: { start: 0.7, end: 0.97 },
} as const;
