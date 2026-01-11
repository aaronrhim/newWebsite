"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Project } from "./ProjectBox";
import ProjectDetail from "./ProjectDetail";
import ProjectDeep from "./ProjectDeep";
import { PROJECT_DEEP } from "../lib/project-details";
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
            <div className="relative">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-secondary/80 backdrop-blur-sm flex items-center justify-center border border-border hover:bg-secondary transition-colors"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>

              <ProjectDetail
                project={project}
                onView={handleView}
                onCode={handleCode}
                viewClaimed={viewClaimed}
                codeClaimed={codeClaimed}
              />

              {/* Deeper project content (author can add content to app/lib/project-details.ts) */}
              <ProjectDeep deep={PROJECT_DEEP[project.id]} />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
