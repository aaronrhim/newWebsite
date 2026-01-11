"use client";

import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "./ProjectBox";

export default function ProjectDetail({
  project,
  onView,
  onCode,
  viewClaimed = false,
  codeClaimed = false,
  compact = false,
}: {
  project: Project;
  onView?: (e: React.MouseEvent) => void;
  onCode?: (e: React.MouseEvent) => void;
  viewClaimed?: boolean;
  codeClaimed?: boolean;
  compact?: boolean;
}) {
  return (
    <div className={`project-card ${compact ? "p-4" : "h-full p-6 md:p-8"} flex flex-col overflow-hidden`}>
      {/* Hero image */}
      <div className={`relative ${compact ? "h-40" : "h-64 md:h-80"} overflow-hidden flex-shrink-0 rounded-t-lg`}>
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pt-4">
        <div className="">
          <h3 className={`text-lg ${compact ? "text-xl" : "text-2xl md:text-3xl"} font-bold text-foreground mb-2 glow-text`}>
            {project.title}
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-4 text-sm">{project.description}</p>

          <div className="mb-4">
            <h4 className="text-sm font-semibold text-foreground mb-2">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs font-mono rounded-lg bg-secondary text-secondary-foreground border border-border">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={onView}
              className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-opacity ${
                viewClaimed ? "bg-muted text-white/70 cursor-default" : "bg-primary text-primary-foreground hover:opacity-90"
              }`}
            >
              <ExternalLink className="w-4 h-4" />
              View Project
            </button>

            <button
              onClick={onCode}
              className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium border transition-colors ${
                codeClaimed ? "bg-muted text-white/70 cursor-default" : "bg-secondary text-secondary-foreground border-border hover:bg-muted"
              }`}
            >
              <Github className="w-4 h-4" />
              Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
