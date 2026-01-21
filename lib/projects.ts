// types: website, github
export const PROJECTS = [
  {
    id: "engine",
    title: "3D Simulation Engine",
    description: "Built a custom knock-off matlab with movement mechanics all in Java.",
    longDescription: "I built a physics engine built from scratch in Java that simulates scalar fields and has the capability to visualize Machine Learning algorithms and functions. This application will allow users to input a scalar field (xy function wrt z) and visualize multiple ML algorithms in a 3D space. I implemented a camera controller after taking MATH 200 (Multivariable Calculus) and multithreading (simple concurrency) after taking CPSC 313 (Computer Hardware and Operating Systems).",
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
    description: "Attachable AI-powered camera and speaking memory aid for Alzheimers' patients.",
    longDescription: "Started off as an idea to \"screw over meta glasses,\" we quickly realized that was a huge goal. We created an attachable memory aid for Alzheimers' patients so that they can remember their loved ones. All you need to do is simply attach it to your glasses, get your family to set it up with detailed instructions, and it will start capturing your memories and familiars right there! The backend uses AWS Rekognition to recognize passerbyes in which we made it so that the attachment will announce the familiar's name when the patient walks near.",
    features: ["AWS Rekognition for facial recognition", "ElevenLabs for natural text-to-speech", "OpenAI API for memory summarization", "ExpoGo for cross-platform mobile app"],
    image: "/images/thumbnails/rememberme.png",
    tags: ["ExpoGo", "React Native", "Firebase", "ElevenLabs", "OpenAI API", "AWS Rekognition", "AWS S3", "DynamoDB"],
    links: [
        {
            url: "https://www.youtube.com/watch?v=H-2SR8Qk0QQ&t=3s",
            type: "website",
            label: "Live Demo"
        },
        {
            url: "https://github.com/LeCruitUsPls/AlzheimerCamera",
            type: "github",
            label: "Source Code"
        },
    ],
    highlight: true,
    gallery: [
      "/images/rememberme3.png",
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
    longDescription: "I'm not ashamed to admit it. This was by far, the most fun I've ever had in a hackathon. While it was hosted by AWS and was pretty competitive to get into, my team spontaneously decided that \"if we can't win, then we might as well have a good time.\" Designed to aid the interview prep process, LeCruiter AI is a platform for practicing both behavioral and technical interviews. We used AWS Bedrock primarily to power the whole thing and used standard full-stack tools like FastAPI, React, Typescript, and other tools to build the website.",
    features: ["AWS Bedrock for Generative AI", "FastAPI for backend services", "Tone & Sentiment Analysis for voice", "Automated Scoring Engine"],
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
      "/images/lecruiter.png",
      "/images/lecruiter1.png",
      "/images/lecruiter2.png",
      "/images/lecruiter3.png"
    ],
    extendingImages: [
      "/images/lecruiter.png",
      "/images/lecruiter1.png"
    ],
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description: "The very website that you are looking at. Built with Next.js, Supabase, Framer Motion, React, and RESTful API.",
    longDescription: "I built this website mainly to share my projects and experiences with others but also to show people more about myself and my personality. My main feature is the \"earnings\" gimmick which was created to incentivize users to read more of my website so that they can \"earn more money!\" Of course, this feature is still in development and I eventually want to incorporate some sort of spending mechanic but for now, I'm going to leave it as it is. The website is built with Next.js for server-side rendering, Supabase for client-side persistence, Framer Motion for animations, and React for the overall structure.",
    features: ["Gamified currency system", "Next.js for server-side rendering", "Supabase for client-side persistence", "Framer Motion for animations", "RESTful API for backend services"],
    image: "/images/thumbnails/websitethumbnail.png",
    tags: ["React", "TailwindCSS", "Next.js", "Framer Motion", "TypeScript", "Supabase", "Prettier"],
    links: [
        {
            url: "https://aaronrhim.github.io",
            type: "website",
            label: "Live Site"
        },
        {
            url: "https://github.com/aaronrhim/aaronrhim.github.io",
            type: "github",
            label: "Source Code"
        },
    ],
    highlight: false,
    gallery: [
      "/images/thumbnails/websitethumbnail.png",
      "/images/portfolio1.png",
    ],
    extendingImages: [
      "/images/thumbnails/websitethumbnail.png",
      "/images/portfolio1.png"
    ],
  },
  {
    id: "aigymtrainer",
    title: "Get Swole",
    description: "AI-powered gym trainer that analyzes your workout form in real-time to ensure every rep counts.",
    longDescription: "This hackathon marked the beginning of my journey as a Computer Scientist. I was alone, hungry (lived off of chocolate for 48 hours), yet dedicated (somehow) to winning the hackathon. While it may have been small, I wanted to prove to myself that I can do anything. Going into this hackathon, I had never used Node.JS before (and chatGPT, still being in the GPT-4 phase, was the equivalent to almost useless). I also had never done a hackathon before, never used Vite before, or Next.js, FastAPI, SocketIO (a form of websockets that I randomly found), or had done any practical Computer Vision (of course I came from a background in AI so that's why I chose Comptuter Vision as my first project). Anyways, Get Swole took quite the toll on me and as you can see in the images to the right, I looked anything but clean. In the end, yes, through it all, I was able to secure 3rd-place and awards for Best Solo Hack and Best First Hack.",
    features: [
      "Real-Time Pose Estimation via MediaPipe",
      "Custom ML model for Repetition Verification",
      "Full-stack Integration (FastAPI & React)",
      "Near Instant Visual Feedback on Form"
    ],
    image: "/images/thumbnails/get-swole.png",
    tags: ["MediaPipe", "Python", "FastAPI", "React", "Next.js", "Machine Learning"],
    links: [
        {
            url: "https://github.com/aaronrhim/HackathonCS6",
            type: "github",
            label: "Source Code"
        },
    ],
    highlight: false,
    gallery: [
      "/images/getswole1.png",
      "/images/getswole2.png",
      "/images/getswole3.png",
      "/images/getswole4.png"
    ],
    extendingImages: [
      "/images/getswole1.png",
      "/images/getswole2.png"
    ],
  },
  {
    id: "fact",
    title: "F.A.C.T",
    description: "",
    longDescription: "",
    features: [""],
    image: "/images/thumbnails/get-swole.png",
    tags: ["React", "TailwindCSS", "Next.js", "Framer Motion", "TypeScript", "Supabase", "Prettier"],
    links: [
        {
            url: "https://www.youtube.com/watch?v=qAPHT_JzxHk",
            type: "website",
            label: "Live Demo"
        },
        {
            url: "https://github.com/aaronrhim/HackathonCS6",
            type: "github",
            label: "Source Code"
        },
    ],
    highlight: false,
    gallery: [
      "/images/thumbnails/get-swole.png",
      "/images/portfolio1.png",
    ],
    extendingImages: [
      "/images/thumbnails/get-swole.png",
      "/images/portfolio1.png"
    ],
  },
];
