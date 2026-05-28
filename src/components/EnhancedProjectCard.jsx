import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
  FaCopy,
  FaCheck,
} from "react-icons/fa";

const EnhancedProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Silent error handling for production
    }
  };

  // Handle body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isModalOpen]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape" && isModalOpen) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isModalOpen]);

  return (
    <>
      <motion.div
        className="card-modern p-4 sm:p-6 cursor-pointer group"
        whileHover={{ scale: 1.02, y: -5 }}
        onClick={() => setIsModalOpen(true)}
      >
        {/* Project Image/Video */}
        <div className="w-full h-40 sm:h-55 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg mb-3 sm:mb-4 overflow-hidden">
          {project.video ? (
            <video
              src={project.video}
              alt={project.title}
              className="w-full h-full object-fill"
              controls
              muted
              loop
            />
          ) : project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-scale-down"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-4xl text-blue-600 opacity-60">🚀</div>
            </div>
          )}
        </div>

        {/* CLI Command Display */}
        {project.isCLI && (
          <div className="mb-4 p-3 bg-gray-900 rounded-lg border border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-xs ml-2">terminal</span>
              </div>
            </div>
            <div className="mt-2 flex items-center space-x-2">
              <span className="text-green-400 text-sm">$</span>
              <code className="text-white text-sm font-mono">
                {project.live}
              </code>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  copyToClipboard(project.live);
                }}
                className="ml-auto p-1 text-gray-400 hover:text-white transition-colors"
                title="Copy command"
              >
                {copied ? (
                  <FaCheck className="text-sm" />
                ) : (
                  <FaCopy className="text-sm" />
                )}
              </button>
            </div>
          </div>
        )}

        {/* Project Info */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.technologies?.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="flex gap-2 pt-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.github, "_blank");
              }}
              className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <FaGithub className="text-lg" />
            </button>
            {project.live && !project.isCLI && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.live, "_blank");
                }}
                className="p-2 text-gray-600 hover:text-green-600 transition-colors"
              >
                <FaExternalLinkAlt className="text-lg" />
              </button>
            )}
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm cursor-pointer" />

            {/* Modal Content */}
            <motion.div
              className="modal-content p-4 sm:p-6 max-w-lg w-full mx-2 sm:mx-4 relative bg-white rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto scrollbar-hide"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-3 text-gray-500 hover:text-gray-700 transition-colors bg-white hover:bg-gray-100 rounded-full shadow-lg z-10 border border-gray-200"
                aria-label="Close modal"
              >
                <FaTimes className="text-lg" />
              </button>

              {/* Project Image/Video */}
              <div className="w-full h-48 sm:h-80 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg mb-3 sm:mb-4 overflow-hidden">
                {project.video ? (
                  <video
                    src={project.video}
                    alt={project.title}
                    className="w-full h-full object-fill"
                    controls
                    muted
                    loop
                  />
                ) : project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-4xl text-blue-600 opacity-60">🚀</div>
                  </div>
                )}
              </div>

              {/* CLI Command Display */}
              {project.isCLI && (
                <div className="mb-4 p-4 bg-gray-900 rounded-lg border border-gray-700">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-400 text-sm ml-2">
                        terminal
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-400 text-base">$</span>
                    <code className="text-white text-base font-mono">
                      {project.live}
                    </code>
                    <button
                      onClick={() => copyToClipboard(project.live)}
                      className="ml-auto p-2 text-gray-400 hover:text-white transition-colors bg-gray-800 rounded"
                      title="Copy command"
                    >
                      {copied ? (
                        <FaCheck className="text-sm" />
                      ) : (
                        <FaCopy className="text-sm" />
                      )}
                    </button>
                  </div>
                  <p className="text-gray-400 text-xs mt-2">
                    Click to copy and run in your terminal
                  </p>
                </div>
              )}

              {/* Project Details */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-gray-900">
                  {project.title}
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Features */}
                {project.features && (
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                      Key Features:
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 text-xs">
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* My Contributions */}
                {project.myContributions && (
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                      My Contributions:
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 text-xs">
                      {project.myContributions.map((contribution, index) => (
                        <li key={index}>{contribution}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack */}
                {project.technologies && (
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                      Technologies:
                    </h3>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-modern flex items-center justify-center gap-2 flex-1"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaGithub />
                    View Code
                  </motion.a>

                  {project.live && !project.isCLI && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-modern flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 flex-1"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EnhancedProjectCard;
