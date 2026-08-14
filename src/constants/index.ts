const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#experience",
  },
];

const words = [
  { text: "Full Stack Apps", imgPath: "/images/code.svg" },
  { text: "3D Animations", imgPath: "/images/designs.svg" },
  { text: "x86 OS in Assembly", imgPath: "/images/concepts.svg" },
  { text: "AI / ML Projects", imgPath: "/images/ideas.svg" },
  { text: "Full Stack Apps", imgPath: "/images/code.svg" },
  { text: "3D Animations", imgPath: "/images/designs.svg" },
  { text: "x86 OS in Assembly", imgPath: "/images/concepts.svg" },
  { text: "AI / ML Projects", imgPath: "/images/ideas.svg" },
];

const counterItems = [
  { value: 15, suffix: "", label: "Years Old, Self-Taught" },
  { value: 13, suffix: "+", label: "Projects Built & Published" },
  { value: 3, suffix: "", label: "Google Certifications" },
  { value: 100, suffix: "%", label: "Learning in Public" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Rebuild to Understand",
    desc: "I recreate real UI and animation patterns from scratch to learn exactly how they work — not just copy them.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Learn by Shipping",
    desc: "Instead of tutorials alone, I build small, complete projects end-to-end and ship them — GitHub is the best way to reach me.",
  },
  {
    imgPath: "/images/time.png",
    title: "Open to Feedback",
    desc: "I build in public and welcome feedback from experienced developers and collaboration on open-source projects.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React & Next.js Dev",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
    mobileImg: "/images/logos/react.png",
  },
  {
    name: "Node.js Backend",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
    mobileImg: "/images/logos/node.png",
  },
  {
    name: "Git & DevOps",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
    mobileImg: "/images/logos/git.svg",
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
    mobileImg: "/images/logos/python.svg",
  },
  {
    name: "Three.js & 3D Web",
    modelPath: "/models/threejs-icon.glb",
    scale: 0.5,
    rotation: [0, 0, 0],
    mobileImg: "/images/logos/three.png",
  },
  {
    name: "GSAP Animations",
    modelPath: "/models/gsap-icon.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
    mobileImg: "/images/gsap.svg",
  },
  {
    name: "Tailwind CSS",
    modelPath: "/models/tailwind-icon.glb",
    scale: 0.45,
    rotation: [0, 0, 0],
    mobileImg: "/images/tailwind.svg",
  },
  {
    name: "TypeScript",
    modelPath: "/models/typescript-icon.glb",
    scale: 0.45,
    rotation: [0, 0, 0],
    mobileImg: "/images/typescript.svg",
  },
  {
    name: "React Native & Expo",
    modelPath: "/models/reactnative-icon.glb",
    scale: 0.55,
    rotation: [0, 0, 0],
    mobileImg: "/images/expo-icon.svg",
  },
  {
    name: "HTML5",
    modelPath: "/models/html.glb",
    scale: 0.45,
    rotation: [0, 0, 0],
    mobileImg: "/images/html5-icon.svg",
  },
  {
    name: "CSS3",
    modelPath: "/models/css.glb",
    scale: 0.45,
    rotation: [0, 0, 0],
    mobileImg: "/images/css3-icon.svg",
  },
  {
    name: "JavaScript",
    modelPath: "/models/js.glb",
    scale: 0.45,
    rotation: [0, 0, 0],
    mobileImg: "/images/js-icon.svg",
  },
];

const expCards = [

  {
    review: "My main focus — recreating real portfolio and landing page patterns from scratch to understand exactly how they work.",
    imgPath: "/images/code.svg",
    logoPath: "/images/logo1.png",
    title: "Full Stack Web Development",
    date: "Current Focus: Building",
    responsibilities: [
      "Building full-stack apps from the ground up: React + Next.js frontend, Node.js backend, databases to deployment.",
      "Learning by shipping small, complete projects end-to-end instead of tutorials alone.",
      "Practicing Git workflows and publishing every project as a public repository.",
    ],
  },
  {
    review: "Scroll-triggered and physics-based motion — recreating effects I find impressive until I can build them myself.",
    imgPath: "/images/designs.svg",
    logoPath: "/images/logo2.png",
    title: "Frontend Animation",
    date: "Current Focus: Practicing",
    responsibilities: [
      "Practicing GSAP scroll effects, ScrollTrigger timelines, and 3D transforms in real-world layouts.",
      "Experimenting with Framer Motion for page and element transitions in React.",
      "Adding Three.js 3D scenes to web experiences — every model on this site is interactive.",
    ],
  },
  {
    review: "Completed an introductory track covering AI fundamentals, Python, and generative AI — certified by Google.",
    imgPath: "/images/ideas.svg",
    logoPath: "/images/logo3.png",
    title: "AI / ML Fundamentals",
    date: "Intro Track Completed",
    responsibilities: [
      "Earned Google certifications: AI Essentials, Crash Course on Python, and Generative AI Leader.",
      "Built DentWise with an AI voice assistant to practice applying AI in a real product.",
      "Exploring how LLMs and generative models work, one project at a time.",
    ],
  },
  {
    review: "The project I'm most serious about: no frameworks, no shortcuts — just the CPU, the bootloader, and a lot of documentation.",
    imgPath: "/images/concepts.svg",
    logoPath: "/images/logo1.png",
    title: "x86 OS Development",
    date: "In Progress: Bare Metal",
    responsibilities: [
      "Writing a custom x86 operating system in Assembly and C, starting from bare-metal boot code.",
      "Understanding the bootloader process and low-level systems programming from the ground up.",
      "Learning how an OS really works by building one — not just using one.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Google",
    mentions: "@google",
    review:
      "Google AI Essentials — foundational understanding of artificial intelligence: how AI works, its applications, and responsible AI practices.",
    imgPath: "/images/logo1.png",
  },
  {
    name: "Google",
    mentions: "@google",
    review:
      "Crash Course on Python — programming fundamentals: variables, loops, functions, data structures, and Python modules.",
    imgPath: "/images/logo2.png",
  },
  {
    name: "Google Cloud",
    mentions: "@googlecloud",
    review:
      "Generative AI Leader — understanding generative AI technology, its business impact, and how organizations can adopt it.",
    imgPath: "/images/logo3.png",
  },
  {
    name: "H4X",
    mentions: "@h4xvxd",
    review:
      "Self-taught snapshot: a beginner who ships. Most of what I know comes from taking things apart and rebuilding them.",
    imgPath: "/images/logo1.png",
  },
  {
    name: "x86 OS Project",
    mentions: "@assembly-c",
    review:
      "Building a custom x86 operating system from bare-metal boot code in Assembly and C — no frameworks, no shortcuts.",
    imgPath: "/images/logo2.png",
  },
  {
    name: "GitHub",
    mentions: "@h4xvxd",
    review:
      "13+ public repositories, all coded from scratch as learning exercises — the best way to reach me is through an issue or discussion.",
    imgPath: "/images/logo3.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
