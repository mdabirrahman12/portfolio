import { useState } from "react";
import {
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineBadgeCheck,
  HiX,
  HiExternalLink,
} from "react-icons/hi";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";
import certEmailMarketing from "../assets/cert-email-marketing.png";
import certDigitalMarketing from "../assets/cert-digital-marketing.jpg";
import certMarketingGoals from "../assets/cert-marketing-goals.jpg";

const educationHistory = [
  {
    degree: "Bachelor of Business Administration (BBA)",
    institution: "Notre Dame University Bangladesh",
    location: "Dhaka, Bangladesh",
    period: "July 2023 – Present",
    grade: "In Progress (Undergraduate)",
    description:
      "Gaining in-depth knowledge in strategic marketing, corporate communication, digital management, and analytical business modeling, bridging organizational strategy with digital web execution.",
    coursework: [
      "Marketing Strategy & Management",
      "Business Communication",
      "Management Information Systems (MIS)",
      "Organizational Behavior",
      "Strategic Business Decisions",
    ],
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Nabakumar Institution and Dr. Shahidullah College",
    location: "Dhaka, Bangladesh",
    period: "Passing Year: 2022",
    grade: "Completed",
    description:
      "Completed higher secondary education developing strong discipline, analytical problem solving, and academic consistency.",
    coursework: ["Information & Communication Technology", "Business Studies", "General Science & Analytics"],
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Pogose Laboratory School and College",
    location: "Dhaka, Bangladesh",
    period: "Passing Year: 2020",
    grade: "Completed",
    description:
      "Graduated secondary school establishing a solid educational foundation and early enthusiasm for digital technologies.",
    coursework: ["Mathematics", "General Science", "Computer Studies", "Language Fundamentals"],
  },
];

const certifications = [
  {
    title: "Advanced Email Marketing",
    issuer: "SkillUP by Simplilearn",
    year: "September 2022",
    date: "30th Sep 2022",
    image: certEmailMarketing,
    desc: "Demonstrated initiative and commitment to deepening skills in advanced email marketing campaigns, segmentation, and CRM workflows.",
  },
  {
    title: "Digital Marketing 101",
    issuer: "SkillUP by Simplilearn",
    year: "September 2022",
    date: "14th Sep 2022",
    code: "3771440",
    image: certDigitalMarketing,
    desc: "Mastery in core digital marketing channels, content promotion, search visibility, paid campaigns, and web audience growth.",
  },
  {
    title: "Set Your Marketing Goals",
    issuer: "Nazm C (Instructor: Nazmul)",
    year: "January 2024",
    date: "January 8, 2024",
    duration: "5 hrs 0 min",
    image: certMarketingGoals,
    desc: "Completed verified course and project focusing on marketing goal formulation, conversion tracking, and campaign optimization.",
  },
];

const Education = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="education" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold uppercase tracking-wider">
          <HiOutlineAcademicCap className="text-blue-600 text-sm" />
          <span>Academic &amp; Certifications</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          Education &amp;{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Credentials
          </span>
        </h2>

        <p className="text-base sm:text-lg text-gray-600">
          Formal academic background alongside industry-standard certifications in marketing, digital strategies, and web technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Formal Degrees Timeline (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-4">
            <FaGraduationCap className="text-blue-600" />
            <span>Academic Qualifications</span>
          </h3>

          <div className="space-y-6">
            {educationHistory.map((edu) => (
              <div
                key={edu.degree}
                className="bg-white rounded-2xl border border-gray-200/90 p-6 sm:p-8 shadow-xs hover:shadow-md hover:border-blue-200 transition-all duration-300 relative overflow-hidden"
              >
                {/* Decorative left accent border */}
                <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-600 to-indigo-600"></div>

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                      {edu.degree}
                    </h4>
                    <p className="text-sm font-semibold text-blue-600 mt-0.5">
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                      <span className="flex items-center gap-1">
                        <HiOutlineCalendar className="text-gray-400" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <HiOutlineLocationMarker className="text-gray-400" />
                        {edu.location}
                      </span>
                    </div>
                  </div>

                  <span className="inline-block bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold px-3 py-1 rounded-full shrink-0">
                    {edu.grade}
                  </span>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {edu.description}
                </p>

                {/* Coursework list */}
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 flex items-center gap-1">
                    <HiOutlineBookOpen className="text-blue-600 text-sm" />
                    Key Areas of Study
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="text-xs font-medium px-2.5 py-1 rounded-md bg-gray-50 text-gray-700 border border-gray-100"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Verified Certifications (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-4">
            <FaCertificate className="text-amber-500" />
            <span>Verified Certifications</span>
          </h3>

          <div className="space-y-4">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                onClick={() => setSelectedCert(cert)}
                className="bg-white rounded-2xl border border-gray-200/80 p-5 shadow-xs hover:border-amber-300 hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="flex gap-4 items-start">
                  {/* Thumbnail */}
                  <div className="w-20 h-14 rounded-lg overflow-hidden bg-gray-100 border border-gray-200 shrink-0 group-hover:scale-105 transition-transform">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-grow">
                    <div className="flex items-start justify-between gap-1">
                      <h4 className="font-bold text-gray-900 text-sm group-hover:text-blue-600 transition-colors">
                        {cert.title}
                      </h4>
                      <span className="text-[11px] font-bold text-amber-700 bg-amber-50/80 border border-amber-200 px-2 py-0.5 rounded shrink-0">
                        {cert.year}
                      </span>
                    </div>

                    <p className="text-xs font-semibold text-blue-600 mt-0.5">
                      {cert.issuer}
                    </p>

                    {cert.code && (
                      <p className="text-[11px] text-gray-400 font-mono mt-0.5">
                        Code: {cert.code}
                      </p>
                    )}

                    <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                      {cert.desc}
                    </p>

                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 mt-2 group-hover:underline">
                      <span>Click to view certificate</span>
                      <HiExternalLink className="text-xs" />
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Quick Note Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-md">
              <h4 className="font-bold text-base mb-1">Continuous Skill Growth</h4>
              <p className="text-xs text-blue-100 leading-relaxed mb-3">
                Committed to continuously staying on top of modern frontend paradigms, React updates, and advanced SEO strategies.
              </p>
              <span className="inline-block bg-white/20 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1 rounded-full">
                Abir Digital • Certified
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100">
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  {selectedCert.title}
                </h3>
                <p className="text-xs text-blue-600 font-medium">
                  {selectedCert.issuer} • {selectedCert.date}
                </p>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                aria-label="Close modal"
                className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition"
              >
                <HiX className="text-xl" />
              </button>
            </div>

            <div className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-auto max-h-[70vh] object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Education;
