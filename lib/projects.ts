// types: website, github
export const PROJECTS = [
  {
    id: "connections",
    title: "Connections",
    description: "Co-Founded and built an event management and community-building platform aimed to help people monetize their skills.",
    longDescription:
      "Connections makes it easy for anyone to turn their hobbies, talents, or skills into money. Our platform allows general tutors to build and teach local student communities, without the burden of organizing events, marketing, or financials. Anyone who wants to learn can come to our platform to find groups with similar interests. Together, they can either find someone to learn from or wait for a tutor to approach them and learn together. We offer automation features that can help tutors to plan their workshops which gives them the freedom to bond with student groups and focus on teaching. Finding students is one of the biggest hurdles for tutors and takes a lot of time so, our solution is to facilitate learning communities and automate all of the planning steps to give tutors back their time.",
    features: [
      "Persona-based progress and onboarding",
      "Event-driven agent workflows",
      "Instructor monetization and revenue shares",
      "Fast, local-first performance for course interactions",
    ],
    image: "/images/thumbnails/connectionsthumbnail.png",
    tags: ["Many APIs", "Next.js", "TypeScript", "React", "Supabase", "Vercel", "Render"],
    links: [
        {
            url: "https://www.connectionsforcommunity.org",
            type: "website",
            label: "Live Site"
        },
    ],
    highlight: true,
    gallery: [
      "/images/connectionsteam.jpeg", 
      "/images/connectionsworkflow.png",
      "/images/kickstart.png"
    ],
    extendingImages: [
      "/images/connectionsteam.jpeg",
      "/images/kickstart.png"
    ],
  },
  {
    id: "engine",
    title: "3D Simulation Engine",
    description: "Built a custom knock-off matlab with movement mechanics all in Java.",
    longDescription: "A physics engine built from scratch in Java that simulates scalar fields and has the capability to visualize Machine Learning algorithms and functions.",
    features: ["Custom Physics implementation", "Custom virtualization & rasterization", "Visualize gradient descent", "Visualize K-Nearest Neighbobrs"],
    image: "/images/thumbnails/3dengine.png",
    tags: ["Java"],
    links: [
        {
            url: "https://github.com/aaronrhim/CPSC210-Final-Project",
            type: "github",
            label: "Source Code"
        },
    ],
    highlight: true,
    gallery: [
      "/images/cpsc210.png",
      "https://images.unsplash.com/photo-1550439062-609e1531270e?w=800&q=80"
    ],
    extendingImages: [
      "/images/cpsc210.png"
    ],
  },
];
