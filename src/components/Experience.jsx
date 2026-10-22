import {
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineCheckCircle,
  HiOutlineSparkles,
} from "react-icons/hi";
import { FaLaptopCode, FaHandsHelping, FaAward, FaSearch, FaWordpress } from "react-icons/fa";

const experiences = [
  {
    role: "Executive Communication (Website & SEO)",
    company: "IID (Institute for Informed Development)",
    location: "Dhaka, Bangladesh",
    period: "July 2025 – June 2026",
    type: "Professional Experience",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    responsibilities: [
      "Managed and regularly updated WordPress website content including news, event coverage, notices, and ToR updates.",
      "Engineered responsive and aesthetic landing pages and templates utilizing Elementor Pro.",
      "Optimized website pages and posts to be search engine friendly—including focus keywords, meta titles, meta descriptions, URL slugs, and internal linking strategies.",
      "Conducted technical SEO audits, created sitemaps, verified robots.txt configurations, analyzed Google indexing issues, and improved overall organic search visibility.",
      "Enhanced digital media quality across the site by composing keyword-rich image alt tags, structuring media libraries, and maintaining brand consistency.",
    ],
    technologies: ["WordPress CMS", "Elementor Pro", "Technical SEO", "On-Page SEO", "Content Management", "Web Analytics"],
  },
];

const valueProps = [
  {
    icon: FaWordpress,
    title: "Hands-on CMS & Web Management",
    desc: "Over a year of real-world experience managing live organizational websites, building pages with Elementor Pro, and publishing digital assets.",
  },
  {
    icon: FaSearch,
    title: "Organic SEO & Search Visibility",
    desc: "Proven track record optimizing metadata, sitemaps, robots.txt, and fixing indexing bottlenecks to boost Google rankings.",
  },
  {
    icon: FaLaptopCode,
    title: "Modern Frontend Stack",
    desc: "Proficient in React 19, Tailwind CSS v4, and component architectures, delivering pixel-perfect and responsive UIs.",
  },
  {
    icon: FaHandsHelping,
    title: "Business & Communication Acumen",
    desc: "Combining BBA education from Notre Dame University with technical skills to communicate effectively across multidisciplinary teams.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-gray-50/50">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold uppercase tracking-wider">
          <HiOutlineBriefcase className="text-blue-600 text-sm" />
          <span>Professional Journey</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Experience</span>
        </h2>

        <p className="text-base sm:text-lg text-gray-600">
          Professional experience in web management, technical SEO, and frontend engineering.
        </p>
      </div>

      {/* Experience Timeline Cards */}
      <div className="max-w-4xl mx-auto space-y-8 mb-16">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-gray-200/90 p-6 sm:p-8 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 relative"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
              <div>
                <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full border mb-2 ${exp.badgeColor}`}>
                  {exp.type}
                </span>
                <h3 className="text-xl font-bold text-gray-900">
                  {exp.role}
                </h3>
                <p className="text-sm font-semibold text-blue-600 mt-0.5">
                  {exp.company}
                </p>
              </div>

              <div className="flex flex-col sm:items-end text-xs text-gray-500 gap-1 shrink-0">
                <span className="flex items-center gap-1 font-medium text-gray-700">
                  <HiOutlineCalendar className="text-blue-600" />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1">
                  <HiOutlineLocationMarker className="text-gray-400" />
                  {exp.location}
                </span>
              </div>
            </div>

            {/* Responsibilities list */}
            <ul className="space-y-2.5 mb-5">
              {exp.responsibilities.map((task, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <HiOutlineCheckCircle className="text-blue-600 text-base shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{task}</span>
                </li>
              ))}
            </ul>

            {/* Technologies used */}
            <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase text-gray-400 mr-1">
                Tech &amp; Skills:
              </span>
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-50 text-gray-700 border border-gray-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Value Proposition Callout Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-blue-200/80 p-8 shadow-sm">
        <div className="text-center max-w-xl mx-auto mb-8 space-y-1">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
            Key Value &amp; Impact I Deliver
          </h3>
          <p className="text-sm text-gray-500">
            What makes my skillset distinctive for your team and digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {valueProps.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-start gap-3.5 p-4 rounded-xl bg-blue-50/40 border border-blue-100/60">
                <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Icon className="text-lg" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
