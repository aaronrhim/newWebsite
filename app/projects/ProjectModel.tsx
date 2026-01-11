"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import { Project } from "./ProjectBox";
import { useMoney } from "../lib/money-context";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { awardOnce, hasAward } = useMoney();

  if (!project) return null;

  const handleView = (e: React.MouseEvent) => {
    e.stopPropagation();
    awardOnce(`project-view-${project.id}`, "external", 0.5);
    if (project.link && project.link !== "#") window.open(project.link, "_blank");
  };

  const handleCode = (e: React.MouseEvent) => {
    e.stopPropagation();
    awardOnce(`project-code-${project.id}`, "external", 0.25);
    if (project.link && project.link !== "#") window.open(project.link, "_blank");
  };

  const viewClaimed = hasAward(`project-view-${project.id}`);
  const codeClaimed = hasAward(`project-code-${project.id}`);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl md:max-h-[85vh] z-50 overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="project-card h-full flex flex-col overflow-hidden">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-secondary/80 backdrop-blur-sm flex items-center justify-center border border-border hover:bg-secondary transition-colors"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>

              {/* Hero image */}
              <div className="relative h-64 md:h-80 overflow-hidden flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 glow-text">
                    {project.title}
                  </h2>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Extended description */}
                  <div className="space-y-4 mb-8">
                    <h3 className="text-lg font-semibold text-foreground">Overview</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      This project showcases advanced engineering principles and innovative solutions. 
                      The implementation leverages cutting-edge technologies to deliver robust, 
                      scalable, and efficient systems. Key focus areas include performance optimization, 
                      user experience, and maintainability.
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-foreground mb-3">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 text-sm font-mono rounded-lg bg-secondary text-secondary-foreground border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-4">
                    <button
                      onClick={handleView}
                      data-reward-id={`project-view-${project.id}`}
                      data-reward-amount={0.5}
                      className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-opacity ${
                        viewClaimed ? "bg-muted text-white/70 cursor-default" : "bg-primary text-primary-foreground hover:opacity-90"
                      }`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </button>
                    <button
                      onClick={handleCode}
                      data-reward-id={`project-code-${project.id}`}
                      data-reward-amount={0.25}
                      className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium border transition-colors ${
                        codeClaimed ? "bg-muted text-white/70 cursor-default" : "bg-secondary text-secondary-foreground border-border hover:bg-muted"
                      }`}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
