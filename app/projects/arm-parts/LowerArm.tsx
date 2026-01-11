"use client";

import { motion } from "framer-motion";

export default function LowerArm() {
  return (
    <svg
      width="40"
      height="100"
      viewBox="0 0 40 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main arm segment - tapered */}
      <path
        d="M12 5 L8 95 L32 95 L28 5 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Top connection point */}
      <circle
        cx="20"
        cy="8"
        r="6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="20"
        cy="8"
        r="2.5"
        fill="currentColor"
      />
      
      {/* Bottom connection point */}
      <circle
        cx="20"
        cy="92"
        r="6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="20"
        cy="92"
        r="2.5"
        fill="currentColor"
      />
    </svg>
  );
}
