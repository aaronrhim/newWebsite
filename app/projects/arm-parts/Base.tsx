"use client";

import { motion } from "framer-motion";

export default function Base() {
  return (
    <svg
      width="80"
      height="45"
      viewBox="0 0 80 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Base platform - rounded bottom */}
      <path
        d="M10 35 Q10 42 20 42 L60 42 Q70 42 70 35 L70 25 Q70 18 60 18 L20 18 Q10 18 10 25 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Base top mount plate */}
      <rect
        x="28"
        y="8"
        width="24"
        height="12"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      
      {/* Connection circle on top */}
      <circle
        cx="40"
        cy="14"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      
      {/* Small detail circle in base */}
      <circle
        cx="40"
        cy="30"
        r="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="40"
        cy="30"
        r="2"
        fill="currentColor"
      />
    </svg>
  );
}
