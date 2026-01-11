export type ProjectDeep = {
  id: string;
  longDescription?: string;
  features?: string[];
  gallery?: string[];
  repo?: string;
  external?: string;
};

export const PROJECT_DEEP: Record<string, ProjectDeep> = {
  connections: {
    id: "connections",
    longDescription:
      "Connections is a gamified community-learning platform that provides persona-driven experiences, mentorship, and monetization paths for instructors. The platform includes event triggers, reputation, and payment rails.",
    features: [
      "Persona-based progress and onboarding",
      "Event-driven agent workflows",
      "Instructor monetization and revenue shares",
      "Fast, local-first performance for course interactions",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=100&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=100&q=80",
    ],
    repo: "https://github.com/example/connections",
    external: "https://connections.example.com",
  },
  ubcrashout: {
    id: "ubcrashout",
    longDescription:
      "UBCrashout is a GPA tracking and course planning application built with privacy-first sync and a fast local-first architecture. It helps students model course loads and outcomes.",
    features: ["Local-first offline support", "Course planning and GPA forecasting", "Integration with campus APIs"],
    gallery: [
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=100&q=80",
    ],
    repo: "https://github.com/example/ubcrashout",
    external: "https://ubcrashout.example.com",
  },
  // Add more deep entries here keyed by project id
};
