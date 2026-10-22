import { useState } from "react";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaWordpress,
  FaSearch,
  FaEnvelope,
  FaRobot,
  FaServer,
  FaPalette,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiElementor,
  SiGooglesearchconsole,
  SiGoogleanalytics,
  SiCloudflare,
  SiVite,
} from "react-icons/si";
import {
  HiOutlineCode,
  HiOutlineGlobeAlt,
  HiOutlineChartBar,
  HiOutlineSparkles,
} from "react-icons/hi";

const categories = [
  { id: "all", name: "All Skills" },
  { id: "frontend", name: "Frontend & Web", icon: HiOutlineCode },
  { id: "cms", name: "WordPress & CMS", icon: HiOutlineGlobeAlt },
  { id: "seo", name: "SEO & Performance", icon: HiOutlineChartBar },
  { id: "marketing", name: "Marketing & AI", icon: HiOutlineSparkles },
];

const skillsData = [
  // Frontend & Web
  {
    name: "React.js",
    category: "frontend",
    icon: FaReact,
    color: "text-cyan-500",
    bg: "bg-cyan-50 border-cyan-100",
    level: "Proficient",
    percentage: 85,
    description: "Component-driven design, Hooks, Router, State handling, Vite integration",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: SiTailwindcss,
    color: "text-teal-500",
    bg: "bg-teal-50 border-teal-100",
    level: "Advanced",
    percentage: 92,
    description: "Utility-first workflows, custom responsive grids, modern animations, v4 styling",
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    icon: FaJsSquare,
    color: "text-yellow-500",
    bg: "bg-yellow-50 border-yellow-100",
    level: "Proficient",
    percentage: 82,
    description: "Async/await, DOM events, modern array methods, ES modules, dynamic UI logic",
  },
  {
    name: "HTML5 & Semantic Markup",
    category: "frontend",
    icon: FaHtml5,
    color: "text-orange-500",
    bg: "bg-orange-50 border-orange-100",
    level: "Expert",
    percentage: 95,
    description: "Semantic tag structure, web accessibility (a11y), clean DOM trees for SEO",
  },
  {
    name: "CSS3 & Responsive Layouts",
    category: "frontend",
    icon: FaCss3Alt,
    color: "text-blue-500",
    bg: "bg-blue-50 border-blue-100",
    level: "Advanced",
    percentage: 90,
    description: "Flexbox, CSS Grid, media queries, mobile-first design, fluid transitions",
  },
  {
    name: "Git & GitHub",
    category: "frontend",
    icon: FaGitAlt,
    color: "text-rose-500",
    bg: "bg-rose-50 border-rose-100",
    level: "Proficient",
    percentage: 84,
    description: "Branching, clean commit hygiene, GitHub Pages hosting, collaborative workflows",
  },

  // WordPress & CMS
  {
    name: "WordPress CMS",
    category: "cms",
    icon: FaWordpress,
    color: "text-blue-600",
    bg: "bg-blue-50 border-blue-100",
    level: "Advanced",
    percentage: 90,
    description: "Website management at IID, theme setup, plugin configuration, content publishing",
  },
  {
    name: "Elementor & Elementor Pro",
    category: "cms",
    icon: SiElementor,
    color: "text-rose-600",
    bg: "bg-rose-50 border-rose-100",
    level: "Advanced",
    percentage: 92,
    description: "Custom page building, responsive templates, dynamic content blocks, ToR updates",
  },
  {
    name: "Content Management",
    category: "cms",
    icon: HiOutlineGlobeAlt,
    color: "text-emerald-600",
    bg: "bg-emerald-50 border-emerald-100",
    level: "Advanced",
    percentage: 88,
    description: "News posts, event pages, notices, blog formatting, media library organization",
  },
  {
    name: "Hosting, cPanel & Cloudflare",
    category: "cms",
    icon: SiCloudflare,
    color: "text-amber-600",
    bg: "bg-amber-50 border-amber-100",
    level: "Experienced",
    percentage: 80,
    description: "cPanel management, SSL configuration, domain DNS routing, Cloudflare caching",
  },

  // SEO & Performance
  {
    name: "On-Page SEO",
    category: "seo",
    icon: FaSearch,
    color: "text-indigo-600",
    bg: "bg-indigo-50 border-indigo-100",
    level: "Advanced",
    percentage: 90,
    description: "Focus keywords, meta titles, descriptions, slugs, heading hierarchy, internal linking",
  },
  {
    name: "Technical SEO",
    category: "seo",
    icon: SiGooglesearchconsole,
    color: "text-blue-700",
    bg: "bg-blue-50 border-blue-100",
    level: "Proficient",
    percentage: 86,
    description: "Sitemap generation, robots.txt auditing, search indexing analysis, schema basics",
  },
  {
    name: "Website Optimization",
    category: "seo",
    icon: SiGoogleanalytics,
    color: "text-emerald-600",
    bg: "bg-emerald-50 border-emerald-100",
    level: "Proficient",
    percentage: 85,
    description: "Page speed optimization, image alt text, asset compression, indexing visibility",
  },

  // Marketing & AI
  {
    name: "Advanced Email Marketing",
    category: "marketing",
    icon: FaEnvelope,
    color: "text-blue-500",
    bg: "bg-blue-50 border-blue-100",
    level: "Certified",
    percentage: 90,
    description: "Simplilearn Certified • Campaign workflows, deliverability, CRM and audience segmentation",
  },
  {
    name: "Digital Marketing 101",
    category: "marketing",
    icon: HiOutlineSparkles,
    color: "text-purple-600",
    bg: "bg-purple-50 border-purple-100",
    level: "Certified",
    percentage: 88,
    description: "Simplilearn Certified (Code: 3771440) • Organic growth, social campaigns, funnel strategy",
  },
  {
    name: "AI & Prompt Engineering",
    category: "marketing",
    icon: FaRobot,
    color: "text-teal-600",
    bg: "bg-teal-50 border-teal-100",
    level: "Proficient",
    percentage: 88,
    description: "ChatGPT, AI-assisted content workflows, prompt crafting, SEO content optimization",
  },
  {
    name: "Canva & Visual Design",
    category: "marketing",
    icon: FaPalette,
    color: "text-pink-500",
    bg: "bg-pink-50 border-pink-100",
    level: "Proficient",
    percentage: 85,
    description: "Social media graphics, banner design, website visual assets, brand presentations",
  },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold uppercase tracking-wider">
          <HiOutlineSparkles className="text-blue-600 text-sm" />
          <span>Technical Toolkit</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          Skills &amp;{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Competencies
          </span>
        </h2>

        <p className="text-base sm:text-lg text-gray-600">
          A blend of modern web engineering, CMS mastery, technical SEO, and certified digital marketing capabilities.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-102"
                  : "bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {Icon && <Icon className="text-base" />}
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Skills Grid with Graphical Visuals */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              className="bg-white rounded-2xl border border-gray-200/90 p-6 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header: Icon + Name + Badge */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border text-2xl shrink-0 ${skill.bg} ${skill.color}`}
                    >
                      <Icon />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-base leading-snug">
                        {skill.name}
                      </h3>
                      <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-wider">
                        {skill.level}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-mono font-bold text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-100">
                    {skill.percentage}%
                  </span>
                </div>

                {/* Graphical Progress Bar */}
                <div className="w-full bg-gray-100 rounded-full h-2 mb-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full transition-all duration-700"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>

                {/* Description */}
                <p className="text-xs text-gray-600 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
