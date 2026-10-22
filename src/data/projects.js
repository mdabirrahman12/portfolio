import devconfImg from "../assets/projects/DEVCONF.JPG";
import devStackImg from "../assets/projects/DevStack.JPG";
import portfolioLandingImg from "../assets/projects/portfolio_landing_page.JPG";

const projects = [
  {
    id: 1,
    title: "Developer Tech Conference 2026",
    subtitle: "Code. Connect. Create - Tech Summit",
    image: devconfImg,
    category: "Event & Conference Website",
    technologies: [
      "HTML5",
      "CSS3",
      "Responsive Web Design",
      "Flexbox & CSS Grid",
      "Google Fonts (Inter)"
    ],
    description:
      "A high-impact, modern tech conference landing page designed for an international developer summit. Features an immersive hero banner with registration CTAs, a featured keynote speakers showcase (highlighting leaders in AI/ML & Cloud), interactive schedule tracks, event venue details, and developer blog highlights.",
    live: "https://mdabirrahman12.github.io/Assignment_01/",
    github: "https://github.com/mdabirrahman12/Assignment_01",
    challenges: [
      "Crafting a responsive multi-column speaker grid that adapts cleanly across mobile, tablet, and widescreen viewports",
      "Achieving fluid typography and visual hierarchy using modern CSS without external UI framework dependencies",
      "Designing accessible and touch-friendly navigation with intuitive call-to-action buttons"
    ],
    future: [
      "Add interactive speaker filtering by topic (AI/ML, DevOps, Frontend, Cloud)",
      "Integrate an interactive ticket booking modal with real-time seat selection",
      "Implement a live countdown timer leading up to the conference opening ceremony"
    ],
  },
  {
    id: 2,
    title: "Dev-Stack - Curated Developer Hub",
    subtitle: "Modern Tools, Frameworks & Resource Catalog",
    image: devStackImg,
    category: "Full Stack / Frontend Web App",
    technologies: [
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "DaisyUI",
      "Vite",
      "React Toastify",
      "React Icons"
    ],
    description:
      "A curated developer stack and toolkit directory built with React 19, TypeScript, and Tailwind CSS v4. Dev-Stack empowers software engineers and tech enthusiasts to explore, discover, and bookmark essential developer tools, UI libraries, and frameworks with an intuitive, component-driven user interface.",
    live: "https://mdabirrahman12.github.io/dev-stack/",
    github: "https://github.com/mdabirrahman12/dev-stack",
    challenges: [
      "Configuring Tailwind CSS v4 with DaisyUI components and Vite in a modern React 19 ecosystem",
      "Managing asynchronous JSON data fetching and suspense boundaries with graceful fallback loading states",
      "Ensuring strict TypeScript type safety across component props and data models"
    ],
    future: [
      "Implement real-time search indexing and multi-criteria category filtering",
      "Add a user submission portal allowing community members to suggest new dev tools",
      "Introduce a persistent favorites and bookmarking system powered by LocalStorage"
    ],
  },
  {
    id: 3,
    title: "Portfolio Landing Page",
    subtitle: "Clean, Responsive Personal Showcase",
    image: portfolioLandingImg,
    category: "Personal Showcase & Landing Page",
    technologies: [
      "HTML5",
      "CSS3",
      "Responsive Layout",
      "CSS Media Queries",
      "Modern Web Aesthetics"
    ],
    description:
      "A clean, elegant personal portfolio landing page emphasizing semantic HTML5 structure, responsive layout principles, and refined typography. Designed to highlight creative expertise, completed works, client testimonials, and a direct engagement channel.",
    live: "https://mdabirrahman12.github.io/Portfolio_landing_page/",
    github: "https://github.com/mdabirrahman12/Portfolio_landing_page",
    challenges: [
      "Structuring clean, hand-crafted CSS layouts without bloated CSS libraries",
      "Ensuring cross-browser compatibility and consistent box-sizing across desktop and mobile devices",
      "Creating seamless hover states and visual feedback on interactive buttons and navigation links"
    ],
    future: [
      "Incorporate dynamic dark and light mode theme toggling with CSS variables",
      "Add micro-interactions and smooth scroll animations using modern CSS animations",
      "Integrate an AJAX-powered interactive contact form with client-side validation"
    ],
  },
];

export default projects;
