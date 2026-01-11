"use client";

import { motion } from "framer-motion";

export default function UpperArm() {
  return (
    <svg
      width="100"
      height="30"
      viewBox="0 0 100 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main arm segment - tapered horizontal */}
      <path
        d="M5 8 L95 5 L95 25 L5 22 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Left connection point */}
      <circle
        cx="8"
        cy="15"
        r="6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="8"
        cy="15"
        r="2.5"
        fill="currentColor"
      />
      
      {/* Right connection point */}
      <circle
        cx="92"
        cy="15"
        r="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="92"
        cy="15"
        r="2"
        fill="currentColor"
      />
    </svg>
  );
}
