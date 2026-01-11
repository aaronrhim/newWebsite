"use client";

import { useState } from "react";
import { useMoney } from "../lib/money-context";

export default function RedText({
  rewardId,
  kind = "redtext",
  amount = 0.25,
  children,
  weight = "bold",
  className = "",
}: {
  rewardId: string;
  kind?: string;
  amount?: number;
  children: React.ReactNode;
  weight?: "bold" | "semibold";
  className?: string;
}) {
  const { awardOnce, hasAward } = useMoney();
  const claimed = hasAward(rewardId);
  const [popping, setPopping] = useState(false);

  const weightOverride = weight === "semibold" ? "!font-semibold" : "";

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (claimed) return;
    const paid = awardOnce(rewardId, kind, amount);
    if (paid) {
      setPopping(false);
      requestAnimationFrame(() => setPopping(true));
      setTimeout(() => setPopping(false), 200);
    }
  };

  return (
    <>
      <span
        onClick={handleClick}
        className={` ${claimed ? "text-highlight-color/60 cursor-default dark:opacity-100" : "cursor-pointer"} custom-bold text-highlight-color ${weightOverride} ${popping ? "pop" : ""} ${className} inline-block`}
        role="button"
        aria-pressed={claimed}
        data-reward-click
        data-reward-id={rewardId}
        data-reward-amount={amount}
      >
        {children}
      </span>

      <style jsx>{`
        .pop {
          animation: redtext-pop 200ms ease-out;
          will-change: transform;
        }
        @keyframes redtext-pop {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(0.96);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
}
