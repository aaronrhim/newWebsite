"use client";

import { motion } from "framer-motion";

export default function Gripper() {
  return (
    <svg
      width="50"
      height="40"
      viewBox="0 0 50 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Gripper base / wrist connection */}
      <rect
        x="2"
        y="12"
        width="18"
        height="16"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      
      {/* Upper finger */}
      <path
        d="M20 14 L38 6 L44 10 L44 14 L38 14 L28 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Lower finger */}
      <path
        d="M20 26 L38 34 L44 30 L44 26 L38 26 L28 22"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Connection circle */}
      <circle
        cx="8"
        cy="20"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="8"
        cy="20"
        r="1.5"
        fill="currentColor"
      />
    </svg>
  );
}
