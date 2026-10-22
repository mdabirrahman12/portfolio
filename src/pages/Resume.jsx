import { Link } from "react-router-dom";
import {
  HiArrowLeft,
  HiPrinter,
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiExternalLink,
} from "react-icons/hi";
import { FaGithub, FaLinkedin, FaFacebook, FaGlobe } from "react-icons/fa";

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 text-gray-800 font-sans print:bg-white print:py-0 print:px-0">
      {/* Top Action Bar (Hidden during print) */}
      <div className="max-w-4xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 px-4 py-2.5 rounded-lg shadow-sm hover:bg-gray-50 hover:text-blue-600 transition"
        >
          <HiArrowLeft className="text-base" /> Back to Portfolio
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition cursor-pointer"
          >
            <HiPrinter className="text-base" /> Print / Save as PDF
          </button>
        </div>
      </div>

      {/* Main Resume Sheet */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-200/80 p-8 sm:p-12 print:shadow-none print:border-none print:p-0 print:rounded-none">
        
        {/* Header Section */}
        <header className="border-b border-gray-200 pb-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                ABIR RAHMAN
              </h1>
              <p className="text-lg font-semibold text-blue-600 mt-1">
                Frontend Web Developer
              </p>
              <p className="text-sm text-gray-500 mt-1 max-w-xl">
                Web Development professional with proven experience in WordPress site management, technical SEO, and modern React web applications.
              </p>
            </div>

            {/* Quick Availability Badge */}
            <div className="flex flex-col items-start md:items-end gap-1 text-sm text-gray-600">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Executive Communication • IID
              </span>
              <span className="text-xs text-gray-500 mt-1">Open for Web &amp; SEO Projects</span>
            </div>
          </div>

          {/* Contact Details Bar */}
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-xs sm:text-sm text-gray-600 pt-4 border-t border-gray-100">
            <a
              href="mailto:abir019750@gmail.com"
              className="flex items-center gap-1.5 hover:text-blue-600 transition"
            >
              <HiMail className="text-blue-600 text-base shrink-0" />
              <span className="truncate">abir019750@gmail.com</span>
            </a>
            <a
              href="tel:+8801975575572"
              className="flex items-center gap-1.5 hover:text-blue-600 transition"
            >
              <HiPhone className="text-blue-600 text-base shrink-0" />
              <span>+8801975575572</span>
            </a>
            <div className="flex items-center gap-1.5">
              <HiLocationMarker className="text-blue-600 text-base shrink-0" />
              <span className="truncate">Dhaka-1100</span>
            </div>
            <a
              href="https://github.com/mdabirrahman12"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-blue-600 transition"
            >
              <FaGithub className="text-gray-900 text-base shrink-0" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/abir-rahman-mohammad/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-blue-600 transition"
            >
              <FaLinkedin className="text-blue-600 text-base shrink-0" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://www.facebook.com/ab.rahman.1272010"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-blue-600 transition"
            >
              <FaFacebook className="text-blue-600 text-base shrink-0" />
              <span>Facebook</span>
            </a>
          </div>
        </header>

        {/* Section: Professional Summary */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-2.5 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-sm"></span>
            Professional Summary
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed text-justify">
            Digital Marketing and Frontend Web professional with solid experience in <strong>WordPress website management</strong>, <strong>SEO content optimization</strong>, <strong>technical SEO</strong> (sitemap, robots.txt, indexing analysis), social media campaigns, and AI-assisted workflows. Combines strong business administration and communication knowledge from <strong>Notre Dame University Bangladesh</strong> with technical engineering capabilities in <strong>React.js</strong>, <strong>JavaScript (ES6+)</strong>, and <strong>Tailwind CSS</strong> to build responsive, accessible, and high-ranking digital experiences.
          </p>
        </section>

        {/* Section: Work Experience */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-3.5 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-sm"></span>
            Work Experience
          </h2>

          <div className="space-y-4">
            <div className="border-l-2 border-blue-600 pl-4 py-0.5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <div>
                  <h3 className="text-base font-bold text-gray-900">
                    Executive Communication
                  </h3>
                  <p className="text-sm font-semibold text-blue-600">
                    IID (Institute for Informed Development)
                  </p>
                </div>
                <div className="text-xs sm:text-sm text-gray-500 font-medium">
                  July 2025 – June 2026
                </div>
              </div>

              <ul className="mt-2 list-disc list-inside text-xs sm:text-sm text-gray-700 space-y-1.5">
                <li>
                  Managed and updated WordPress website content including news, events, making pages with Elementor Pro, notices, and ToR updates.
                </li>
                <li>
                  Optimized website pages and posts to be SEO friendly, including focus keywords, meta titles, meta descriptions, slugs, and internal links.
                </li>
                <li>
                  Executed technical SEO activities such as sitemap generation, robots.txt auditing, indexing issue analysis, and search visibility improvement.
                </li>
                <li>
                  Improved media content quality by writing relevant image alt text, organizing visual assets, and maintaining consistency across website uploads.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section: Technical Skills */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-sm"></span>
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="p-3 bg-gray-50/80 rounded-lg border border-gray-100">
              <span className="font-semibold text-gray-900 block mb-1">
                WordPress &amp; CMS:
              </span>
              <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
                WordPress CMS, Elementor Pro, Themes, Plugins, Page Editing, Content Publishing, Media Management.
              </p>
            </div>

            <div className="p-3 bg-gray-50/80 rounded-lg border border-gray-100">
              <span className="font-semibold text-gray-900 block mb-1">
                SEO &amp; Website Optimization:
              </span>
              <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
                On-page SEO, Technical SEO, Yoast SEO, Focus Keywords, Meta Titles/Descriptions, Slugs, Sitemaps, Robots.txt, Page Speed, Image Alt Text, Indexing issue analysis.
              </p>
            </div>

            <div className="p-3 bg-gray-50/80 rounded-lg border border-gray-100">
              <span className="font-semibold text-gray-900 block mb-1">
                Frontend &amp; Web Development:
              </span>
              <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
                React 19, JavaScript (ES6+), HTML5 Semantic Structure, CSS3, Tailwind CSS v4, DaisyUI, Vite, Git &amp; GitHub Pages.
              </p>
            </div>

            <div className="p-3 bg-gray-50/80 rounded-lg border border-gray-100">
              <span className="font-semibold text-gray-900 block mb-1">
                Digital Marketing, AI &amp; Tools:
              </span>
              <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
                Advanced Email Marketing (Certified), Digital Marketing 101 (Certified), Facebook Campaigns, ChatGPT, Prompt Engineering, Canva, cPanel, Hosting &amp; Cloudflare.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Featured Projects */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-3.5 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-sm"></span>
            Featured Projects
          </h2>

          <div className="space-y-4">
            {/* Project 1 */}
            <div className="border-l-2 border-blue-600 pl-4 py-0.5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                  Developer Tech Conference 2026
                  <span className="text-xs font-normal text-blue-600 font-mono bg-blue-50 px-2 py-0.5 rounded">
                    Landing Page
                  </span>
                </h3>
                <div className="flex items-center gap-3 text-xs font-semibold text-blue-600">
                  <a href="https://mdabirrahman12.github.io/Assignment_01/" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                    Live Demo <HiExternalLink />
                  </a>
                  <span>•</span>
                  <a href="https://github.com/mdabirrahman12/Assignment_01" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                    GitHub Client <HiExternalLink />
                  </a>
                </div>
              </div>
              <p className="text-xs text-gray-500 font-medium mt-0.5">
                Tech Stack: HTML5, CSS3, Responsive Design, Flexbox/Grid
              </p>
              <ul className="mt-1.5 list-disc list-inside text-xs sm:text-sm text-gray-700 space-y-1">
                <li>
                  Designed an interactive summit landing page highlighting keynote speakers, schedule tracks, and registration flow.
                </li>
                <li>
                  Engineered clean, fluid grid layouts adhering to responsive mobile-first standards without external CSS framework overhead.
                </li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="border-l-2 border-indigo-600 pl-4 py-0.5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                  Dev-Stack - Curated Developer Toolkit
                  <span className="text-xs font-normal text-indigo-600 font-mono bg-indigo-50 px-2 py-0.5 rounded">
                    React 19 &amp; TypeScript
                  </span>
                </h3>
                <div className="flex items-center gap-3 text-xs font-semibold text-indigo-600">
                  <a href="https://mdabirrahman12.github.io/dev-stack/" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                    Live Demo <HiExternalLink />
                  </a>
                  <span>•</span>
                  <a href="https://github.com/mdabirrahman12/dev-stack" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                    GitHub Client <HiExternalLink />
                  </a>
                </div>
              </div>
              <p className="text-xs text-gray-500 font-medium mt-0.5">
                Tech Stack: React 19, TypeScript, Tailwind CSS v4, DaisyUI, Vite
              </p>
              <ul className="mt-1.5 list-disc list-inside text-xs sm:text-sm text-gray-700 space-y-1">
                <li>
                  Developed an interactive directory for developers to discover tools and resources with React Suspense asynchronous loading.
                </li>
                <li>
                  Implemented modern Tailwind CSS v4 and DaisyUI styling with responsive layouts and feedback notifications.
                </li>
              </ul>
            </div>

            {/* Project 3 */}
            <div className="border-l-2 border-emerald-600 pl-4 py-0.5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                  Portfolio Landing Page
                  <span className="text-xs font-normal text-emerald-600 font-mono bg-emerald-50 px-2 py-0.5 rounded">
                    HTML5 &amp; CSS3
                  </span>
                </h3>
                <div className="flex items-center gap-3 text-xs font-semibold text-emerald-600">
                  <a href="https://mdabirrahman12.github.io/Portfolio_landing_page/" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                    Live Demo <HiExternalLink />
                  </a>
                  <span>•</span>
                  <a href="https://github.com/mdabirrahman12/Portfolio_landing_page" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                    GitHub Client <HiExternalLink />
                  </a>
                </div>
              </div>
              <p className="text-xs text-gray-500 font-medium mt-0.5">
                Tech Stack: HTML5, CSS3, Flexbox, Semantic Markup
              </p>
              <ul className="mt-1.5 list-disc list-inside text-xs sm:text-sm text-gray-700 space-y-1">
                <li>
                  Handcrafted an elegant portfolio layout with section navigation, experience blocks, and client showcase cards.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section: Education */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-sm"></span>
            Education
          </h2>

          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm">
              <div>
                <h3 className="font-bold text-gray-900">
                  Bachelor of Business Administration (BBA)
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Notre Dame University Bangladesh
                </p>
              </div>
              <div className="text-xs sm:text-sm text-gray-500 font-medium sm:text-right">
                July 2023 – Present
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm pt-2 border-t border-gray-100">
              <div>
                <h3 className="font-bold text-gray-900">
                  Higher Secondary Certificate (HSC)
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Nabakumar Institution and Dr. Shahidullah College
                </p>
              </div>
              <div className="text-xs sm:text-sm text-gray-500 font-medium sm:text-right">
                Passing Year: 2022
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm pt-2 border-t border-gray-100">
              <div>
                <h3 className="font-bold text-gray-900">
                  Secondary School Certificate (SSC)
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Pogose Laboratory School and College
                </p>
              </div>
              <div className="text-xs sm:text-sm text-gray-500 font-medium sm:text-right">
                Passing Year: 2020
              </div>
            </div>
          </div>
        </section>

        {/* Section: Certifications */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-sm"></span>
            Certifications
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
              <h4 className="font-semibold text-gray-900 text-xs">
                Advanced Email Marketing
              </h4>
              <p className="text-[11px] text-blue-600 mt-0.5">SkillUP by Simplilearn</p>
              <p className="text-[11px] text-gray-500">Issued: Sep 30, 2022</p>
            </div>

            <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
              <h4 className="font-semibold text-gray-900 text-xs">
                Digital Marketing 101
              </h4>
              <p className="text-[11px] text-blue-600 mt-0.5">SkillUP by Simplilearn</p>
              <p className="text-[11px] text-gray-500">Code: 3771440 • Sep 14, 2022</p>
            </div>

            <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
              <h4 className="font-semibold text-gray-900 text-xs">
                Set Your Marketing Goals
              </h4>
              <p className="text-[11px] text-blue-600 mt-0.5">Nazm C</p>
              <p className="text-[11px] text-gray-500">Duration: 5 hrs • Jan 8, 2024</p>
            </div>
          </div>
        </section>

        {/* Section: Languages & Other */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-sm"></span>
            Languages
          </h2>

          <div className="text-xs sm:text-sm text-gray-700">
            <p><span className="font-semibold text-gray-900">Languages:</span> English (Professional), Bangla (Native).</p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Resume;
