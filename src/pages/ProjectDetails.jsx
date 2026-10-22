import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import { HiArrowLeft, HiExternalLink, HiCode, HiLightBulb, HiShieldCheck } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-6">
        <div className="text-center max-w-md bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Project Not Found</h2>
          <p className="text-gray-600 text-sm mb-6">
            The project you are looking for does not exist or has been moved.
          </p>
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold transition"
          >
            <HiArrowLeft /> Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-28 pb-20 bg-gray-50/60 text-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-blue-600 transition"
          >
            <HiArrowLeft /> Back to All Projects
          </Link>
        </div>

        {/* Project Card */}
        <div className="bg-white rounded-2xl border border-gray-200/90 shadow-sm overflow-hidden p-6 sm:p-10 space-y-8">
          
          {/* Main Screenshot */}
          <div className="rounded-xl overflow-hidden border border-gray-200/80 shadow-md aspect-video bg-gray-100">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Title & Category */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              {project.category && (
                <span className="inline-block bg-blue-50 text-blue-700 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">
                  {project.category}
                </span>
              )}
              {project.subtitle && (
                <span className="text-xs font-medium text-gray-500">
                  • {project.subtitle}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              {project.title}
            </h1>
          </div>

          {/* Main Technology Stack Used */}
          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <HiCode className="text-blue-600 text-base" /> Main Technology Stack Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-50 text-blue-800 border border-blue-100 px-3 py-1.5 rounded-lg text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Brief Description */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-gray-900">Brief Description</h3>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              {project.description}
            </p>
          </div>

          {/* Technical Challenges Faced */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="space-y-3 p-5 sm:p-6 rounded-xl bg-gray-50 border border-gray-100">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <HiShieldCheck className="text-emerald-600 text-xl" />
                Challenges Faced While Developing the Project
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {project.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></span>
                    <span className="leading-relaxed">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Potential Improvements & Future Plans */}
          {project.future && project.future.length > 0 && (
            <div className="space-y-3 p-5 sm:p-6 rounded-xl bg-blue-50/50 border border-blue-100">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <HiLightBulb className="text-amber-500 text-xl" />
                Potential Improvements &amp; Future Plans
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {project.future.map((enhancement, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></span>
                    <span className="leading-relaxed">{enhancement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Links */}
          <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center gap-4">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold shadow-sm hover:shadow transition"
              >
                <span>Live Project Demo</span>
                <HiExternalLink className="text-base" />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-xl font-bold shadow-sm hover:shadow transition"
              >
                <FaGithub className="text-lg" />
                <span>GitHub Repository (Client)</span>
              </a>
            )}

            <Link
              to="/resume"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:underline ml-auto"
            >
              View Full Resume &rarr;
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;
