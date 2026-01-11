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
            intersection of AI, <RedText rewardId="hero-robotics">robotics</RedText>, and design. I focus on expressive
            interfaces and practical engineering. Try clicking the <RedText rewardId="red-1">real-time</RedText> word.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="mt-4 sm:mt-0 text-sm text-white/60">Currently exploring <RedText rewardId="red-1">real-time</RedText> ML and robotics.</div>

          <div className="mt-2 sm:mt-0 ml-auto text-right">
            <div className="text-sm text-white/70">Balance</div>
            <div className="mt-1 text-lg font-semibold text-white">
              <AnimatedBalance value={money.balance} />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
