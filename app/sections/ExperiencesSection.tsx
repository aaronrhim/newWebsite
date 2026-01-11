"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Panel from "../components/Panel";
import Section from "../components/Section";
import BulletIcon from "../icons/BulletIcon";

import RedText from "../components/RedText";

const tabs = [
  { id: "work", label: "Work" },
  { id: "education", label: "Education" },
];

const defaultBadge = "/logo/roverlogo.png";

// <RedText rewardId="hero-red" amount={2.5}>red</RedText>

const EXPERIENCES = [
  {
    role: "Startup Founder & CTO",
    company: "Connections",
    dates: "Dec. 2025 – Present",
    badge: "/logo/conlogo.png", 
    bullets: [
      "[[red:exp-1:2.5|Co-Founded]] an [[red:exp-2:2.5|agentic learning platform]], enabling talented individuals to easily monetize their skills",
      "Engineered the backend on n8n cloud, featuring a full threaded, multi-step API/web-scraping agents",
      "Business model surrounds a commission-based fee of 20% where within 2 days of launch, we received around [[red:exp-3:2.5|230 paying students]], 8 instructors, and over [[red:exp-4:2.5|23,000 impressions]] on our social media platforms",
      "Receiving guidance and mentorship from Aaron Stuart, CEO of VANTEC Angel Network",
      "Applying as a venture capital to startup accelerators such as [[red:exp-yc:2.5|Y Combinator]], Techstars, and Google for Startups",
    ],
  },
  {
    role: "Software Co-Lead - AI Autonomy",
    company: "UBC Rover (Engineering Design Team)",
    dates: "Sep. 2025 – Present",
    badge: "/logo/roverlogo.png",
    bullets: [
      "Transformed team workflow by designing a Docker-based pipeline adopted by 40 members, significantly [[red:exp-collab:2.5|improving collaboration]] experience for new members",
      "Leading a four-member team to develop the [[red:exp-rl:0.5|Reinforcement Learning]] pipeline, coordinating progress and presenting weekly updates to align the rest of the team with our research and development efforts",
      "Managed project timelines, reviewed PRs, and hosted weekly reviews, ensuring transparency and progress",
      "Worked with the mechanical sub-team to develop a cohesive simulation environment and detailed robotic design mechanics (with modeling capability), achieving an [[red:exp-acc:2.5|84% accuracy]] to the real world",
      "Competing at the University Rover Challenge (URC) and the Canadian International Rover Competition (CIRC) in 2026",
    ],
  },
  {
    role: "Software Member - Computer Vision & Telemetry",
    company: "UBC ARRC (Engineering Design Team)",
    dates: "Sep. 2024 – Aug. 2025",
    badge: "/logo/roverlogo.png",
    bullets: [
      "Achieved [[red:exp-second:2.5|2nd place]] at the Aerial Evolution Association of Canada (AEAC) in 2025, demonstrating strong performance against top Canadian universities",
      "Developed an autoencoding denoiser based on the RRDBNet architecture from the ESRGAN framework which enhanced image quality for the DL model below",
      "Applied transfer learning to the YOLOv8 object detection model to seclude IR emission in a live setting, improving detection accuracy by [[red:exp-perc:2.5|27%]]",
    ],
  },
];

function mapToExperienceData() {
  return {
    work: EXPERIENCES.map((e, i) => ({
      id: `work-${i}`,
      title: e.role,
      subtitle: e.company,
      period: e.dates,
      badge: { src: e.badge ?? defaultBadge, alt: e.company },
      highlights: e.bullets.map((b) => ({ text: b })),
    })),
    education: [],
  } as const;
}

// Parse inline tokens of the form [[red:rewardId:amount|display text]] inside quoted strings
function renderWithRedText(str?: string | null) {
  if (!str) return null;
  const re = /\[\[red:([^:|]+)(?::([0-9.]+))?\|([^\]]+)\]\]/g;
  const parts: (string | React.ReactNode)[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  let idx = 0;

  // eslint-disable-next-line no-cond-assign
  while ((m = re.exec(str))) {
    if (m.index > last) parts.push(str.slice(last, m.index));
    const id = m[1];
    const amt = m[2] ? Number(m[2]) : undefined;
    const text = m[3];
    parts.push(
      <RedText key={`${id}-${idx}`} rewardId={id} amount={amt}>
        {text}
      </RedText>,
    );
    last = re.lastIndex;
    idx++;
  }

  if (last < str.length) parts.push(str.slice(last));
  return parts.length === 1 ? parts[0] : parts;
}

function TimelineItem({ item }: { item: any }) {
  return (
    <div className="relative flex gap-3 sm:gap-6">
      <div className="h-10 w-10 overflow-hidden rounded-full border-1 border-white/20 sm:h-13 sm:w-13">
        <Image
          src={item.badge?.src ?? defaultBadge}
          alt={item.badge?.alt ?? `${item.title} logo`}
          width={60}
          height={60}
          className="h-full w-full"
          sizes="(max-width: 640px) 40px, 52px"
          quality={75}
        />
      </div>

      <div className="flex-1 space-y-2">
        <div className="space-y-0">
          <h3 className="text-lg leading-tight font-semibold text-white sm:text-xl sm:leading-normal">
            {item.title}
          </h3>
          {item.subtitle && (
            <p className="text-md font-medium text-white/90">{item.subtitle}</p>
          )}
          {item.period && <p className="text-sm text-gray-400">{item.period}</p>}
        </div>

        <div className="space-y-1 font-light tracking-wide text-gray-100">
          {item.highlights.map((highlight: any, index: number) => (
            <div
              key={`${item.id}-highlight-${index}`}
              className="relative flex items-center gap-x-3 pl-0 sm:gap-x-4"
            >
              <BulletIcon className="text-highlight-color h-2 w-2 shrink-0" />
              <div className="space-y-0">
                <p className="text-body-text text-sm leading-tight sm:text-base">
                  {renderWithRedText(highlight.text)}
                </p>
                {highlight.note && (
                  <p className="text-xs text-gray-400 sm:text-sm">{highlight.note}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function useMeasure() {
  const ref = useRef<HTMLElement | null>(null);
  const [bounds, setBounds] = useState({ height: 0 });

  useEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver((entries) => {
      setBounds({ height: entries[0].contentRect.height });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, [ref]);

  const setRef = (node: HTMLElement | null) => {
    ref.current = node;
  };

  return [setRef, bounds] as const;
}

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState("work");
  const experiences = mapToExperienceData();
  const tabItems = tabs.map((tab) => ({ ...tab, items: experiences[tab.id as keyof typeof experiences] ?? [] }));
  const [ref, { height }] = useMeasure();

  return (
    <Section id="experience">
      <Panel
        title="Experience"
        rightSlot={
          <div className="flex gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 sm:text-base ${
                  activeTab === tab.id
                    ? "bg-highlight-color text-white shadow-[0_5px_30px_rgba(255,255,255,0.2)]"
                    : "cursor-pointer text-white md:hover:bg-white/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        }
      >
        <div className="mx-auto flex max-w-5xl flex-col gap-6">
          <motion.div
            animate={{ height }}
            transition={{ duration: 0 }}
            className="bg-background border-outline-gray relative rounded-2xl border shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
          >
            {tabItems.map((tab) => {
              const isActive = tab.id === activeTab;
              return (
                <div
                  key={tab.id}
                  aria-hidden={!isActive}
                  className={`transition-opacity duration-0 ${
                    isActive
                      ? "relative opacity-100"
                      : "pointer-events-none absolute inset-0 opacity-0"
                  }`}
                >
                  <div
                    ref={isActive ? ref : undefined}
                    className="relative px-3 pt-5 pb-16 sm:px-6 sm:pt-6 sm:pb-10"
                  >
                    <div
                      className="absolute top-6 bottom-16 left-[2rem] w-px bg-white/10 sm:left-[3.1rem]"
                      aria-hidden="true"
                    />
                    <div className="z-10 space-y-8">
                      {tab.items.map((item: any) => (
                        <TimelineItem key={item.id} item={item} />
                      ))}
                      <div className="h-4" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </Panel>
    </Section>
  );
}
