"use client";

import Section from "../components/Section";
import RedText from "../components/RedText";
import AnimatedBalance from "../components/AnimatedBalance";
import { useMoney } from "../lib/money-context";

export default function HeroSection() {
  const money = useMoney();

  return (
    <Section id="top">
      <div className="flex flex-col gap-6 text-white">
        <div>
          <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight">Aaron Rhim</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70 leading-8">
            Hi, I'm Aaron — I build interactive systems and experiments at the
            intersection of AI, robotics, and design. I focus on expressive
            interfaces and practical engineering. Try clicking the <RedText rewardId="hero-red" amount={2.5}>red</RedText> words!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="mt-4 sm:mt-0 text-sm text-white/60">Currently exploring real-time ML and robotics.</div>
        </div>
      </div>
    </Section>
  );
}
