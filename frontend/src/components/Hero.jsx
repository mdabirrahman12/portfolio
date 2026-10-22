import { Link } from "react-router-dom";
import { HiDocumentText, HiArrowRight, HiSparkles, HiDownload } from "react-icons/hi";
import { FaReact, FaJsSquare, FaGitAlt, FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { SiTailwindcss, SiWordpress } from "react-icons/si";
import avatarImg from "../assets/avatar.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background Decorative Glows */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Introductions & CTAs */}
        <div className="lg:col-span-7 text-left space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs sm:text-sm font-semibold shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Available for New Projects • Web &amp; Frontend Specialist</span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <p className="text-gray-600 font-medium text-lg">
              Hello, I am <span className="text-gray-900 font-bold">Abir Rahman</span>
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight">
              Frontend &amp;{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                Web Developer
              </span>
            </h1>
            <p className="text-sm sm:text-base font-semibold text-blue-600 uppercase tracking-wider pt-1">
              SEO Executive &amp; Digital Specialist • IID
            </p>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
            I build modern, high-performance web applications and responsive user interfaces with{" "}
            <span className="text-gray-900 font-semibold">React.js</span>,{" "}
            <span className="text-gray-900 font-semibold">Tailwind CSS</span>, and{" "}
            <span className="text-gray-900 font-semibold">JavaScript</span>, combined with hands-on expertise in{" "}
            <span className="text-gray-900 font-semibold">WordPress CMS</span> and{" "}
            <span className="text-gray-900 font-semibold">Technical SEO</span>.
          </p>

          {/* Action Buttons (Resume prominently featured) */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* Main Resume CTA - View and Download */}
            <Link
              to="/resume"
              className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-7 py-3.5 rounded-xl font-bold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base"
            >
              <HiDocumentText className="text-xl" />
              <span>View &amp; Download Resume</span>
              <HiDownload className="text-base" />
            </Link>

            {/* Explore Projects Button */}
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-800 border border-gray-300 hover:border-blue-500 hover:text-blue-600 px-6 py-3.5 rounded-xl font-semibold shadow-xs hover:shadow-md transition-all duration-300 text-sm sm:text-base hover:bg-blue-50/40"
            >
              <span>Explore Projects</span>
              <HiArrowRight className="text-base" />
            </a>

            {/* Quick Contact Link */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center text-sm font-semibold text-gray-600 hover:text-blue-600 px-3 py-3.5 transition"
            >
              Get in Touch &rarr;
            </a>
          </div>

          {/* Social Links Row */}
          <div className="pt-2 flex items-center gap-3">
            <span className="text-xs font-bold uppercase text-gray-400 tracking-wider mr-1">
              Connect:
            </span>
            <a
              href="https://github.com/mdabirrahman12"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-900 hover:text-white flex items-center justify-center text-gray-700 transition shadow-xs"
            >
              <FaGithub className="text-lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/abir-rahman-mohammad/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-blue-600 hover:text-white flex items-center justify-center text-gray-700 transition shadow-xs"
            >
              <FaLinkedin className="text-lg" />
            </a>
            <a
              href="https://www.facebook.com/ab.rahman.1272010"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook Profile"
              className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-blue-600 hover:text-white flex items-center justify-center text-gray-700 transition shadow-xs"
            >
              <FaFacebook className="text-lg" />
            </a>
            <a
              href="https://wa.me/8801975575572"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp Contact"
              className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-emerald-600 hover:text-white flex items-center justify-center text-gray-700 transition shadow-xs"
            >
              <FaWhatsapp className="text-lg" />
            </a>
          </div>

          {/* Core Tech Stack Badges */}
          <div className="pt-4 border-t border-gray-200/80">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-1.5">
              <HiSparkles className="text-blue-600" /> Core Tech &amp; Skills
            </p>
            <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100/90 text-gray-800 font-medium border border-gray-200">
                <FaReact className="text-cyan-500 text-base" /> React.js
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100/90 text-gray-800 font-medium border border-gray-200">
                <SiTailwindcss className="text-teal-500 text-base" /> Tailwind CSS
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100/90 text-gray-800 font-medium border border-gray-200">
                <FaJsSquare className="text-yellow-500 text-base" /> JavaScript
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100/90 text-gray-800 font-medium border border-gray-200">
                <SiWordpress className="text-blue-600 text-base" /> WordPress &amp; Elementor
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100/90 text-gray-800 font-medium border border-gray-200">
                <FaGitAlt className="text-orange-500 text-base" /> Git &amp; GitHub
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Professional Photo + Code Showcase */}
        <div className="lg:col-span-5 relative flex flex-col items-center">
          {/* Professional Photo Card */}
          <div className="relative mb-6 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-md opacity-70 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden bg-white p-2 shadow-2xl">
              <img
                src={avatarImg}
                alt="Abir Rahman - Web Developer"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-md px-4 py-1 rounded-full border border-gray-200 shadow-md text-xs font-bold text-gray-800 whitespace-nowrap flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              Abir Rahman
            </div>
          </div>

          {/* Visual Code Box */}
          <div className="w-full relative bg-gray-900 rounded-2xl shadow-2xl border border-gray-800 overflow-hidden text-left">
            {/* Terminal Window Header */}
            <div className="bg-gray-800/90 px-4 py-3 flex items-center justify-between border-b border-gray-700/60">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-xs text-gray-400 font-mono">AbirProfile.jsx</span>
              <div className="w-12"></div>
            </div>

            {/* Code Content */}
            <div className="p-5 font-mono text-xs sm:text-sm text-gray-300 leading-relaxed overflow-x-auto">
              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-400">developer</span> = &#123;
              </p>
              <p className="pl-4">
                <span className="text-gray-400">name:</span>{" "}
                <span className="text-emerald-400">"Abir Rahman"</span>,
              </p>
              <p className="pl-4">
                <span className="text-gray-400">role:</span>{" "}
                <span className="text-emerald-400">"Frontend &amp; Web Developer"</span>,
              </p>
              <p className="pl-4">
                <span className="text-gray-400">organization:</span>{" "}
                <span className="text-emerald-400">"IID (Executive Communication)"</span>,
              </p>
              <p className="pl-4">
                <span className="text-gray-400">stack:</span> [
              </p>
              <p className="pl-8 text-yellow-300">
                "React", "Tailwind CSS", "WordPress", "SEO"
              </p>
              <p className="pl-4">],</p>
              <p className="pl-4">
                <span className="text-gray-400">certifications:</span> [
              </p>
              <p className="pl-8 text-cyan-300">
                "Advanced Email Marketing", "Digital Marketing 101"
              </p>
              <p className="pl-4">],</p>
              <p className="pl-4">
                <span className="text-gray-400">status:</span>{" "}
                <span className="text-emerald-400">"Open for Collaborations"</span>
              </p>
              <p>&#125;;</p>

              <div className="mt-4 pt-3 border-t border-gray-800 text-xs text-gray-400 flex items-center justify-between">
                <span>&#10003; 100% Responsive Design</span>
                <span className="text-blue-400">abirdigital</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
