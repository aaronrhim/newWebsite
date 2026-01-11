"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import AnimatedBalance from "./AnimatedBalance";
import { useMoney } from "../lib/money-context";

export default function Header() {
  const { scrollY } = useScroll();
  const money = useMoney();

  const lastY = useRef(0);
  const accumulatedUp = useRef(0);
  const accumulatedDown = useRef(0);

  const [visible, setVisible] = useState(true);

  // Tune these to taste
  const SHOW_AFTER_UP_PX = 20;     // how much upward scroll triggers showing
  const HIDE_AFTER_DOWN_PX = 40;   // how much downward scroll triggers hiding
  const ALWAYS_SHOW_BELOW_PX = 10; // near top of page, always show

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = lastY.current;
    const delta = y - prev;
    lastY.current = y;

    // Always show near the top
    if (y <= ALWAYS_SHOW_BELOW_PX) {
      accumulatedUp.current = 0;
      accumulatedDown.current = 0;
      setVisible(true);
      return;
    }

    if (delta > 0) {
      // scrolling down
      accumulatedDown.current += delta;
      accumulatedUp.current = 0;

      if (accumulatedDown.current >= HIDE_AFTER_DOWN_PX) {
        setVisible(false);
      }
    } else if (delta < 0) {
      // scrolling up
      accumulatedUp.current += -delta;
      accumulatedDown.current = 0;

      if (accumulatedUp.current >= SHOW_AFTER_UP_PX) {
        setVisible(true);
      }
    }
  });

  return (
    <motion.header
      initial={false}
      animate={visible ? "shown" : "hidden"}
      variants={{
        shown: { y: 0, opacity: 1 },
        hidden: { y: -120, opacity: 0 },
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 flex justify-center"
    >
      <div className="w-full max-w-5xl rounded-b-2xl rounded-t-none border-x border-b border-white/60 border-t-0 bg-transparent">
        <div className="flex items-center justify-between px-6 py-4 text-white">
          <div className="flex items-center gap-6">
            <div className="font-semibold">Aaron Rhim</div>
            <nav className="flex gap-6 text-sm text-white/80">
              <a href="/" className="hover:text-white">
                Home
              </a>
              <a href="/projects" className="hover:text-white">
                Projects
              </a>
              <a href="/motion-demo" className="hover:text-white">
                Demo
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-sm text-white/70">Balance</div>
            <AnimatedBalance value={money.balance} />

            <div className="hidden sm:flex items-center gap-2 ml-4">
              <div className="text-sm text-white/70">Found</div>
              <div className="text-sm text-white/90 font-medium">{money.claimedCount}</div>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
