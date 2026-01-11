"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";
import ProjectCard, { Project } from "./ProjectBox";
import ProjectModal from "./ProjectModel";
import Base from "./arm-parts/Base";
import LowerArm from "./arm-parts/LowerArm";
import ElbowJoint from "./arm-parts/ElbowJoint";
import UpperArm from "./arm-parts/UpperArm";
import WristJoint from "./arm-parts/WristJoint";
import Gripper from "./arm-parts/Gripper";

const projects: Project[] = [
  {
    id: "1",
    title: "Neural Interface System",
    description: "A brain-computer interface that translates neural signals into digital commands. Built with real-time signal processing and machine learning algorithms.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80",
    tags: ["Python", "TensorFlow", "Signal Processing"],
    link: "#",
  },
  {
    id: "2",
    title: "Autonomous Drone Fleet",
    description: "Coordinated multi-drone system for search and rescue operations. Features swarm intelligence and real-time obstacle avoidance.",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&auto=format&fit=crop&q=80",
    tags: ["ROS", "C++", "Computer Vision"],
    link: "#",
  },
  {
    id: "3",
    title: "Robotic Exoskeleton",
    description: "Assistive wearable device for mobility enhancement. Incorporates adaptive control systems and haptic feedback mechanisms.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=80",
    tags: ["Embedded Systems", "CAD", "Arduino"],
    link: "#",
  },
  {
    id: "4",
    title: "Smart Manufacturing Cell",
    description: "Industry 4.0 compliant automated production line with predictive maintenance and quality control systems.",
    image: "https://images.unsplash.com/photo-1565514020179-026b92b2cc7b?w=800&auto=format&fit=crop&q=80",
    tags: ["PLC", "SCADA", "IoT"],
    link: "#",
  },
  {
    id: "5",
    title: "Surgical Robot Assistant",
    description: "Precision surgical system with 6-DOF manipulator arm. Enables minimally invasive procedures with sub-millimeter accuracy.",
    image: "https://images.unsplash.com/photo-1559757175-7b21671c7d36?w=800&auto=format&fit=crop&q=80",
    tags: ["Medical Devices", "MATLAB", "Control Systems"],
    link: "#",
  },
];

// Arm part positions when fully assembled (relative to center)
const armAssemblyPositions = {
  base: { x: 0, y: 180, rotate: 0 },
  lowerArm: { x: 0, y: 85, rotate: 0 },
  elbowJoint: { x: 0, y: 10, rotate: 0 },
  upperArm: { x: 60, y: 0, rotate: -35 },
  wristJoint: { x: 130, y: -30, rotate: 0 },
  gripper: { x: 175, y: -30, rotate: -35 },
};

// Starting positions for each part (where they fly in from)
const armStartPositions = {
  base: { x: 0, y: 400, rotate: 180 },
  lowerArm: { x: -300, y: 100, rotate: -90 },
  elbowJoint: { x: 300, y: -100, rotate: 180 },
  upperArm: { x: 400, y: -200, rotate: 90 },
  wristJoint: { x: -400, y: -150, rotate: -180 },
  gripper: { x: 500, y: 0, rotate: 90 },
};

export default function RoboticArmTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [progress, setProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001,
  });

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    setProgress(latest);
  });

  // Calculate interpolated positions based on scroll progress
  const getPartStyle = (partName: keyof typeof armAssemblyPositions, threshold: number) => {
    const start = armStartPositions[partName];
    const end = armAssemblyPositions[partName];
    
    // Each part has a threshold where it starts animating
    const partProgress = Math.max(0, Math.min(1, (progress - threshold) / 0.15));
    
    return {
      x: start.x + (end.x - start.x) * partProgress,
      y: start.y + (end.y - start.y) * partProgress,
      rotate: start.rotate + (end.rotate - start.rotate) * partProgress,
      opacity: partProgress > 0 ? 1 : 0,
      scale: 0.5 + partProgress * 0.5,
    };
  };

  return (
    <>
      <div
        ref={containerRef}
        className="relative min-h-[600vh] bg-background"
      >
        {/* Background grid */}
        <div className="fixed inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Fixed header */}
        <div className="sticky top-0 z-30 pt-16 pb-8 px-6 bg-gradient-to-b from-background via-background/95 to-transparent">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3 glow-text">
              Projects
            </h1>
            
          </motion.div>
        </div>

        {/* Robotic Arm Assembly - Fixed in center */}
        <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
          <div className="relative w-[400px] h-[400px] text-foreground">
            {/* Base */}
            <motion.div
              className="absolute left-1/2 top-1/2"
              style={{
                x: getPartStyle("base", 0).x - 40,
                y: getPartStyle("base", 0).y - 22,
                rotate: getPartStyle("base", 0).rotate,
                opacity: getPartStyle("base", 0).opacity,
                scale: getPartStyle("base", 0).scale,
              }}
            >
              <Base />
            </motion.div>

            {/* Lower Arm */}
            <motion.div
              className="absolute left-1/2 top-1/2"
              style={{
                x: getPartStyle("lowerArm", 0.1).x - 20,
                y: getPartStyle("lowerArm", 0.1).y - 50,
                rotate: getPartStyle("lowerArm", 0.1).rotate,
                opacity: getPartStyle("lowerArm", 0.1).opacity,
                scale: getPartStyle("lowerArm", 0.1).scale,
              }}
            >
              <LowerArm />
            </motion.div>

            {/* Elbow Joint */}
            <motion.div
              className="absolute left-1/2 top-1/2"
              style={{
                x: getPartStyle("elbowJoint", 0.25).x - 25,
                y: getPartStyle("elbowJoint", 0.25).y - 25,
                rotate: getPartStyle("elbowJoint", 0.25).rotate,
                opacity: getPartStyle("elbowJoint", 0.25).opacity,
                scale: getPartStyle("elbowJoint", 0.25).scale,
              }}
            >
              <ElbowJoint />
            </motion.div>

            {/* Upper Arm */}
            <motion.div
              className="absolute left-1/2 top-1/2"
              style={{
                x: getPartStyle("upperArm", 0.4).x - 50,
                y: getPartStyle("upperArm", 0.4).y - 15,
                rotate: getPartStyle("upperArm", 0.4).rotate,
                opacity: getPartStyle("upperArm", 0.4).opacity,
                scale: getPartStyle("upperArm", 0.4).scale,
                transformOrigin: "left center",
              }}
            >
              <UpperArm />
            </motion.div>

            {/* Wrist Joint */}
            <motion.div
              className="absolute left-1/2 top-1/2"
              style={{
                x: getPartStyle("wristJoint", 0.55).x - 17,
                y: getPartStyle("wristJoint", 0.55).y - 17,
                rotate: getPartStyle("wristJoint", 0.55).rotate,
                opacity: getPartStyle("wristJoint", 0.55).opacity,
                scale: getPartStyle("wristJoint", 0.55).scale,
              }}
            >
              <WristJoint />
            </motion.div>

            {/* Gripper */}
            <motion.div
              className="absolute left-1/2 top-1/2"
              style={{
                x: getPartStyle("gripper", 0.7).x - 25,
                y: getPartStyle("gripper", 0.7).y - 20,
                rotate: getPartStyle("gripper", 0.7).rotate,
                opacity: getPartStyle("gripper", 0.7).opacity,
                scale: getPartStyle("gripper", 0.7).scale,
                transformOrigin: "left center",
              }}
            >
              <Gripper />
            </motion.div>
          </div>
        </div>

        {/* Project Cards - Along the sides */}
        <div className="relative z-10 pt-[10vh]">
          {projects.map((project, index) => {
            const isLeft = index % 2 === 0;
            const projectThreshold = 0.05 + index * 0.15;

            return (
              <div
                key={project.id}
                className="min-h-[40vh] flex items-center px-6"
              >
                <motion.div
                  className={`w-full flex ${isLeft ? "justify-start" : "justify-end"}`}
                  initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 60 }}
                >
                  <div className={`max-w-sm ${isLeft ? "ml-4 md:ml-12" : "mr-4 md:mr-12"}`}>
                    <ProjectCard
                      project={project}
                      index={index}
                      onClick={() => setSelectedProject(project)}
                    />
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Progress Bar */}
        <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50">
          <div className="w-1 h-24 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="w-full bg-primary rounded-full"
              style={{ 
                height: `${progress * 100}%`,
                transition: "height 0.1s ease-out"
              }}
            />
          </div>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
