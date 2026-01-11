"use client";

import { useRouter } from "next/navigation";
import Panel from "../components/Panel";
import Section from "../components/Section";
import { PROJECTS } from "../lib/projects";
import { useMoney } from "../lib/money-context";
import ProjectDetail from "../projects/ProjectDetail";

function ProjectCard(p: (typeof PROJECTS)[number]) {
  const { awardOnce, hasAward } = useMoney();
  const router = useRouter();
  const rewardId = `project-${p.id}`;
  const claimed = hasAward(rewardId);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!claimed) awardOnce(rewardId, "project", 0.5);
    router.push(`/projects?project=${p.id}`);
  };

  const handleView = (e: React.MouseEvent) => {
    e.stopPropagation();
    awardOnce(`project-view-${p.id}`, "external", 0.5);
    if (p.link && p.link !== "#") window.open(p.link, "_blank");
  };

  const handleCode = (e: React.MouseEvent) => {
    e.stopPropagation();
    awardOnce(`project-code-${p.id}`, "external", 0.25);
    if (p.link && p.link !== "#") window.open(p.link, "_blank");
  };

  return (
    <div
      onClick={handleClick}
      data-reward-id={rewardId}
      data-reward-amount={0.5}
      role="button"
      className={`group block rounded-2xl border border-white/10 bg-white/5 p-2 hover:border-white/30 ${
        claimed ? "opacity-60 cursor-default" : "cursor-pointer"
      }`}
    >
      <ProjectDetail project={p as any} onView={handleView} onCode={handleCode} viewClaimed={hasAward(`project-view-${p.id}`)} codeClaimed={hasAward(`project-code-${p.id}`)} compact />
    </div>
  );
}

export default function FeaturedProjectsSection() {
  return (
    <Section id="projects">
      <Panel title="Highlighted Projects">
        <div className="grid gap-6 sm:grid-cols-2">
          {PROJECTS.filter((p) => p.highlight).map((p) => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>
      </Panel>
    </Section>
  );
}
