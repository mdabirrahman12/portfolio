import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineSparkles,
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlineBriefcase,
  HiOutlineCheckCircle,
  HiOutlineHeart,
} from "react-icons/hi";
import { FaLaptopCode, FaRocket, FaFutbol, FaPalette, FaPlane } from "react-icons/fa";
import avatarImg from "../assets/avatar.png";

const AboutMe = () => {
  const highlights = [
    {
      title: "Modern Web & Frontend",
      desc: "Creating component-driven, responsive applications with React 19, Tailwind CSS, and modern JavaScript.",
    },
    {
      title: "WordPress & CMS Expertise",
      desc: "Experienced with Elementor Pro, theme customization, content publishing, and site maintenance at IID.",
    },
    {
      title: "Technical & On-Page SEO",
      desc: "Optimizing meta tags, robots.txt, sitemaps, page speed, image alt tags, and Google search indexing.",
    },
    {
      title: "Business & Analytical Mindset",
      desc: "Currently pursuing BBA at Notre Dame University Bangladesh, combining business vision with technical implementation.",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-gray-50/50">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold uppercase tracking-wider">
          <HiOutlineUser className="text-blue-600 text-sm" />
          <span>About Me</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          Who I <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Am</span>
        </h2>

        <p className="text-base sm:text-lg text-gray-600">
          A deeper look into my developer journey, technical expertise, work ethos, and personal interests.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Visual Card & Quick Stats */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative bg-white rounded-2xl border border-gray-200/90 p-6 sm:p-8 shadow-sm">
            {/* Ambient Accent Glow */}
            <div className="w-24 h-24 bg-blue-500/10 rounded-full blur-2xl absolute -top-4 -right-4 -z-10"></div>

            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
              <div className="w-16 h-16 rounded-2xl overflow-hidden border border-blue-100 shadow-md shrink-0">
                <img
                  src={avatarImg}
                  alt="Abir Rahman"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Abir Rahman</h3>
                <p className="text-sm font-semibold text-blue-600">Frontend &amp; Web Developer</p>
                <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-1">
                  <HiOutlineLocationMarker className="text-gray-400" />
                  <span>8, North Brook Hall Road, Dhaka-1100</span>
                </div>
              </div>
            </div>

            {/* Quick Specs List */}
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center justify-between py-1.5 border-b border-gray-50">
                <span className="flex items-center gap-2 text-gray-500">
                  <HiOutlineBriefcase className="text-blue-600" /> Experience:
                </span>
                <span className="font-semibold text-gray-800 text-xs">
                  IID (Executive Communication)
                </span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-gray-50">
                <span className="flex items-center gap-2 text-gray-500">
                  <FaLaptopCode className="text-blue-600" /> Primary Stack:
                </span>
                <span className="font-semibold text-gray-800">React, Tailwind, WordPress</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-gray-50">
                <span className="flex items-center gap-2 text-gray-500">
                  <HiOutlineMail className="text-blue-600" /> Direct Email:
                </span>
                <a
                  href="mailto:abir019750@gmail.com"
                  className="font-semibold text-blue-600 hover:underline text-xs"
                >
                  abir019750@gmail.com
                </a>
              </div>
            </div>

            {/* Micro Stats */}
            <div className="grid grid-cols-3 gap-3 pt-6 mt-6 border-t border-gray-100 text-center">
              <div className="p-2.5 bg-gray-50 rounded-xl">
                <span className="block text-2xl font-black text-blue-600">3+</span>
                <span className="text-[11px] text-gray-500 font-medium">Live Projects</span>
              </div>
              <div className="p-2.5 bg-gray-50 rounded-xl">
                <span className="block text-2xl font-black text-indigo-600">1+ Yr</span>
                <span className="text-[11px] text-gray-500 font-medium">IID Experience</span>
              </div>
              <div className="p-2.5 bg-gray-50 rounded-xl">
                <span className="block text-2xl font-black text-emerald-600">3</span>
                <span className="text-[11px] text-gray-500 font-medium">Certifications</span>
              </div>
            </div>
          </div>

          {/* Hobbies & Outside Interests Card */}
          <div className="bg-white rounded-2xl border border-gray-200/90 p-6 shadow-sm">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3 flex items-center gap-2">
              <HiOutlineHeart className="text-rose-500 text-base" />
              Outside of Programming
            </h4>
            <div className="grid grid-cols-2 gap-3 text-xs text-gray-700">
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-gray-50">
                <FaFutbol className="text-emerald-600 text-base shrink-0" />
                <span>Sports &amp; Football</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-gray-50">
                <FaPalette className="text-indigo-600 text-base shrink-0" />
                <span>Canva &amp; Visual Design</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-gray-50">
                <FaPlane className="text-sky-600 text-base shrink-0" />
                <span>Exploring &amp; Travel</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-gray-50">
                <HiOutlineSparkles className="text-amber-500 text-base shrink-0" />
                <span>Tech Trends &amp; AI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bio Narrative & Strengths */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-4 text-gray-600 leading-relaxed text-base sm:text-lg">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight leading-snug">
              Bridging business acumen with creative frontend engineering &amp; digital performance.
            </h3>
            
            <p>
              My journey into web development began with a strong curiosity about how the web works and how businesses can reach their audiences effectively. Pursuing my <strong>Bachelor of Business Administration (BBA)</strong> at Notre Dame University Bangladesh gave me deep insights into marketing, communication, and organizational goals, which I channeled directly into learning and mastering modern web development.
            </p>

            <p>
              Over the past year at <strong>IID (Institute for Informed Development)</strong> as an Executive Communication team member, I actively managed WordPress websites with Elementor Pro, spearheaded On-page and Technical SEO (meta tags, robots.txt, sitemaps, indexing issue resolution), and authored engaging digital content. Concurrently, I expanded my frontend development capabilities with <strong>React 19</strong>, <strong>JavaScript (ES6+)</strong>, <strong>Tailwind CSS</strong>, and modern component-driven architectures.
            </p>

            <p>
              I genuinely enjoy building clean, user-friendly digital products where every detail—from responsiveness and performance to SEO visibility and typography—is thoughtfully refined.
            </p>
          </div>

          {/* Core Strengths Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-4 rounded-xl bg-white border border-gray-200/80 shadow-xs flex items-start gap-3"
              >
                <HiOutlineCheckCircle className="text-xl text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">{item.title}</h4>
                  <p className="text-xs text-gray-500 mt-1 leading-normal">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              to="/resume"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md shadow-blue-500/20 transition-all duration-300"
            >
              <HiOutlineSparkles className="text-lg" />
              <span>Inspect Full Resume</span>
            </Link>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-gray-700 border border-gray-300 hover:border-blue-500 hover:text-blue-600 px-6 py-3 rounded-xl font-semibold shadow-xs transition-all duration-300"
            >
              <FaRocket className="text-sm" />
              <span>Let's Work Together</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
