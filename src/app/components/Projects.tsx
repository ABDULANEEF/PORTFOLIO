import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { X, ExternalLink, Github, Sparkles, Shield, Mic, Briefcase } from "lucide-react";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "AI Resume Analyzer",
      icon: Sparkles,
      color: "blue",
      description: "Deep Insight",
      insight:
        "An intelligent system that analyzes resumes using AI to extract key information, match job requirements, and provide actionable feedback to improve candidate profiles.",
      features: [
        "AI-powered resume parsing",
        "Skill matching algorithm",
        "Real-time feedback",
        "PDF processing",
        "Data visualization",
      ],
      technologies: ["Python", "TensorFlow", "React", "Node.js", "MongoDB"],
      github: "https://github.com/abdulaneef002/resume-analyzer",
      liveDemo: "#",
    },
    {
      id: 2,
      title: "Women Safety System",
      icon: Shield,
      color: "purple",
      description: "Protection & Care",
      insight:
        "A comprehensive safety application designed to protect women through real-time location tracking, emergency alerts, and quick access to help services.",
      features: [
        "Emergency SOS button",
        "Real-time GPS tracking",
        "Contact alerts",
        "Safe route suggestions",
        "Voice activation",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Google Maps API", "Twilio"],
      github: "https://github.com/abdulaneef002/Updated-women-safety",
      liveDemo: "#",
    },
    {
      id: 3,
      title: "Voice Assistant (Jarvis)",
      icon: Mic,
      color: "cyan",
      description: "AI-Powered Assistant",
      insight:
        "An advanced voice-controlled AI assistant inspired by Jarvis, capable of understanding natural language, executing commands, and providing intelligent responses.",
      features: [
        "Voice recognition",
        "Natural language processing",
        "Task automation",
        "Smart home integration",
        "Contextual responses",
      ],
      technologies: ["Python", "Speech Recognition", "TensorFlow", "React", "WebSocket"],
      github: "https://github.com/abdulaneef002/updated-jarvis",
      liveDemo: "#",
    },
    {
      id: 4,
      title: "AI Freelancer Platform",
      icon: Briefcase,
      color: "purple",
      description: "Smart Marketplace",
      insight:
        "An intelligent freelancing platform that uses AI to match freelancers with projects, predict project success, and optimize pricing strategies.",
      features: [
        "AI-powered matching",
        "Skill verification",
        "Project recommendations",
        "Secure payments",
        "Rating system",
      ],
      technologies: ["React", "Node.js", "Python", "Machine Learning", "MySQL"],
      github: "https://github.com/abdulaneef002/AI-Freelance",
      liveDemo: "#",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return {
          gradient: "from-blue-500/20 to-blue-500/0",
          border: "border-blue-500/50",
          text: "text-blue-400",
          bg: "bg-blue-500/10",
          glow: "shadow-blue-500/50",
        };
      case "purple":
        return {
          gradient: "from-purple-500/20 to-purple-500/0",
          border: "border-purple-500/50",
          text: "text-purple-400",
          bg: "bg-purple-500/10",
          glow: "shadow-purple-500/50",
        };
      case "cyan":
        return {
          gradient: "from-cyan-500/20 to-cyan-500/0",
          border: "border-cyan-500/50",
          text: "text-cyan-400",
          bg: "bg-cyan-500/10",
          glow: "shadow-cyan-500/50",
        };
      default:
        return {
          gradient: "from-gray-500/20 to-gray-500/0",
          border: "border-gray-500/50",
          text: "text-gray-400",
          bg: "bg-gray-500/10",
          glow: "shadow-gray-500/50",
        };
    }
  };

  return (
    <section id="projects" className="relative min-h-screen py-20 bg-black">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-5xl md:text-6xl mb-4 text-center bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            PROJECT SHOWCASE
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-purple-600 to-cyan-500 mx-auto mb-16" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const colors = getColorClasses(project.color);

            return (
              <motion.div
                key={project.id}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedProject(project.id)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div
                  className={`relative border border-gray-800 group-hover:${colors.border} rounded-lg p-6 bg-black/80 backdrop-blur-sm transition-all duration-300 h-full`}
                >
                  <div className={`p-4 ${colors.bg} rounded-lg inline-block mb-4`}>
                    <Icon className={`w-8 h-8 ${colors.text}`} />
                  </div>

                  <h3
                    className={`text-2xl mb-2 ${colors.text}`}
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-sm`}
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span
                        className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-sm`}
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <motion.div
                    className={`absolute bottom-4 right-4 ${colors.text}`}
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-black border border-cyan-500/30 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const project = projects.find((p) => p.id === selectedProject);
                if (!project) return null;

                const Icon = project.icon;
                const colors = getColorClasses(project.color);

                return (
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-4 ${colors.bg} rounded-lg`}>
                          <Icon className={`w-10 h-10 ${colors.text}`} />
                        </div>
                        <div>
                          <h2
                            className={`text-3xl ${colors.text}`}
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                          >
                            {project.title}
                          </h2>
                          <p className="text-gray-400">{project.description}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <X className="w-6 h-6" />
                      </button>
                    </div>

                    <div className="mb-8">
                      <div
                        className={`w-full h-64 ${colors.bg} rounded-lg flex items-center justify-center`}
                      >
                        <Icon className={`w-32 h-32 ${colors.text} opacity-20`} />
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3
                          className={`text-xl mb-3 ${colors.text}`}
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          Deep Insight
                        </h3>
                        <p className="text-gray-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {project.insight}
                        </p>
                      </div>

                      <div>
                        <h3
                          className={`text-xl mb-3 ${colors.text}`}
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          Key Features
                        </h3>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {project.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-2 text-gray-300"
                              style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                              <span className={colors.text}>▹</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3
                          className={`text-xl mb-3 ${colors.text}`}
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          Technologies Used
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className={`px-4 py-2 ${colors.bg} ${colors.text} rounded-lg`}
                              style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4 pt-4">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-2 px-6 py-3 ${colors.bg} ${colors.text} rounded-lg hover:${colors.border} border border-transparent transition-all`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-5 h-5" />
                          <span>GitHub</span>
                        </motion.a>

                        <motion.a
                          href={project.liveDemo}
                          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg cursor-not-allowed opacity-70"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-5 h-5" />
                          <span>Launching Soon</span>
                        </motion.a>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
