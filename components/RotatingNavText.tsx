"use client";

import React, { forwardRef, useImperativeHandle, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  texts: string[];
  auto?: boolean;
  loop?: boolean;
  className?: string;
  // the caller used only `jumpTo` in AnimatedBalance — keep it simple
};

export type RotatingNavTextHandle = {
  jumpTo: (index: number) => void;
};

const RotatingNavText = forwardRef<RotatingNavTextHandle, Props>(function RotatingNavText(
  { texts, auto = false, loop = false, className = "" },
  ref,
) {
  const [index, setIndex] = useState(0);

  useImperativeHandle(ref, () => ({
    jumpTo: (i: number) => setIndex(Math.max(0, Math.min(i, texts.length - 1))),
  }));

  return (
    <div className={`inline-block ${className}`}>
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={texts[index] + "-rot"}
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="inline-block"
        >
          {texts[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default RotatingNavText;
