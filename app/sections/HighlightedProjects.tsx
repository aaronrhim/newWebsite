"use client";

import Link from "next/link";
import Panel from "../components/Panel";
import Section from "../components/Section";

const PROJECTS = [
  {
    slug: "connections",
    name: "Connections for Community",
    desc: "Gamified community-learning platform with persona-based progress and events.",
    tags: ["Next.js", "TypeScript", "SQLite"],
  },
  {
    slug: "ubcrashout",
    name: "UBCrashout",
    desc: "GPA tracking + course planning app with a fast local-first architecture.",
    tags: ["React", "Node", "SQLite"],
  },
];

import { useMoney } from "../lib/money-context";

function ProjectCard(p: (typeof PROJECTS)[number]) {
  const { awardOnce, hasAward } = useMoney();
  const rewardId = `project-${p.slug}`;
  const claimed = hasAward(rewardId);

  return (
    <Link
      href={`/projects/${p.slug}`}
      onClick={(e) => {
        e.stopPropagation();
        // award on project click (best-effort)
        awardOnce(rewardId, "project", 0.5);
      }}
      data-reward-id={rewardId}
      data-reward-amount={0.5}
      className={`group block rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-white/30 ${
        claimed ? "opacity-60 cursor-default" : ""
      }`}
    >
      <div className="text-white text-lg font-semibold group-hover:text-white">
        {p.name}
      </div>
      <div className="mt-2 text-sm text-white/70 leading-6">{p.desc}</div>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70"
          >
            {t}
          </span>
        ))}
      </div>
    </Link>
  );
}

export default function FeaturedProjectsSection() {
  return (
    <Section id="projects" variant="muted">
      <Panel title="Highlighted Projects">
        <div className="grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.slug} {...p} />
          ))}
        </div>
      </Panel>
    </Section>
  );
}
