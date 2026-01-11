"use client";

import { motion } from "framer-motion";

export default function WristJoint() {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer joint circle */}
      <circle
        cx="17.5"
        cy="17.5"
        r="14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      
      {/* Inner joint circle */}
      <circle
        cx="17.5"
        cy="17.5"
        r="8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      
      {/* Center dot */}
      <circle
        cx="17.5"
        cy="17.5"
        r="3"
        fill="currentColor"
      />
    </svg>
  );
}
