import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const dur = 1700;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setCount(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setGone(true), 350);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence onExitComplete={onDone}>
      {!gone && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col justify-between overflow-hidden bg-ink p-6 md:p-10"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            className="absolute -left-24 top-1/4 h-72 w-72 blob bg-primary/30 blur-3xl"
            animate={{ x: [0, 60, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute -right-16 bottom-1/4 h-64 w-64 blob bg-secondary/25 blur-3xl"
            animate={{ x: [0, -50, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
          />

          <div className="relative flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-secondary" />
            Portfolio
          </div>

          <div className="relative overflow-hidden">
            <motion.h1
              className="display text-[18vw] leading-none text-foreground md:text-[14vw]"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              Ruban<span className="text-primary">.</span>
            </motion.h1>
          </div>

          <div className="relative">
            <div className="mb-4 h-[3px] w-full overflow-hidden bg-border">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-secondary"
                style={{ width: `${count}%` }}
              />
            </div>
            <div className="flex items-end justify-between">
              <p className="max-w-xs text-sm text-muted-foreground">
                Full-Stack Developer — building interfaces &amp; automations
              </p>
              <span className="display text-5xl text-secondary md:text-7xl">{count}</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
