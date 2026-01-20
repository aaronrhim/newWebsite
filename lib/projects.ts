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
      "/images/cpsc210.png"
    ],
    extendingImages: [
      "/images/cpsc210.png"
    ],
  },
  {
    id: "rememberme",
    title: "Remember Me",
    description: "AI-powered platform enabling users to practice both behavioral and technical interviews, delivering generative prompts, realistic feedback, and automated scoring.",
    longDescription: ".",
    features: [""],
    image: "/images/thumbnails/rememberme.png",
    tags: ["ExpoGo", "React Native", "Firebase", "ElevenLabs", "OpenAI API", "AWS Rekognition", "AWS S3", "DynamoDB"],
    links: [

        {
            url: "https://www.youtube.com/watch?v=H-2SR8Qk0QQ&t=3s",
            type: "website",
            label: "Live Demo"
        },
    ],
    highlight: false,
    gallery: [
      "/images/rememberme1.png",
      "/images/rememberme2.png"
    ],
    extendingImages: [
      "/images/rememberme1.png",
      "/images/rememberme2.png"
    ],
  },
  {
    id: "grannyai",
    title: "Granny AI",
    description: "An agent that helps your grandma navigate her technology.",
    longDescription: "Built as an Electron app, we created a workflow that allowed ElevenLabs and Gemini to control your mouse and navigate your computer. It was initially designed to only have those campabilities but due to some really bad buffering, we had to switch to using a combination of playwright and Gemini to give the AI access to mode features (opening apps and accessing websites) at the cost of full mouse movement/usage.",
    features: ["Agentic Workflow with ElevenLabs and Gemini", "Electron App for cross-platform compatibility", "Playwright for web navigation", "Text-to-Speech with ElevenLabs"],
    image: "/images/thumbnails/grandbuddy.png",
    tags: ["Gemini API", "ElevenLabs", "Playwright", "Electron", "React", "Bun", "TypeScript", "Vercel", "SocketIO"],
    links: [
        {
            url: "https://github.com/Alhwyn/nw-hacks-sub",
            type: "github",
            label: "Source Code"
        },
        {
          url: "https://www.youtube.com/watch?v=0IL0ZjVr7gI",
          type: "website",
          label: "Live Demo"
        }
    ],
    highlight: false,
    gallery: [
      "/images/granny1.png",
      "/images/granny2.png",
      "/images/granny3.png"
    ],
    extendingImages: [
      "/images/granny1.png",
      "/images/granny2.png"
    ],
  },
  {
    id: "lecruiter",
    title: "LeCruiter AI",
    description: "AI-powered platform enabling users to practice both behavioral and technical interviews, delivering generative prompts, realistic feedback, and automated scoring.",
    longDescription: ".",
    features: [""],
    image: "/images/thumbnails/lecruiter.png",
    tags: ["React", "TailwindCSS", "AWS Bedrock", "Python", "FastAPI"],
    links: [
        {
            url: "https://github.com/R0yZh3ng/CIC-GenAI-Hackathon",
            type: "github",
            label: "Source Code"
        },
    ],
    highlight: false,
    gallery: [
      "/images/cpsc210.png"
    ],
    extendingImages: [
      "/images/cpsc210.png"
    ],
  },
];
