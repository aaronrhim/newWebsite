"use client";

import { motion } from "framer-motion";

export default function ElbowJoint() {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer joint circle */}
      <circle
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      
      {/* Inner joint circle */}
      <circle
        cx="25"
        cy="25"
        r="12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      
      {/* Center dot */}
      <circle
        cx="25"
        cy="25"
        r="4"
        fill="currentColor"
      />
    </svg>
  );
}
