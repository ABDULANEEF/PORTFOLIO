import { motion } from "motion/react";
import {
  Code2,
  Database,
  Brain,
  Wrench,
  Palette,
  Server,
  FileJson,
  BarChart3,
  Network,
  Terminal,
} from "lucide-react";

// Icon mapping for each technology
const techIcons: Record<string, React.ElementType> = {
  Python: Code2,
  C: Code2,
  "C++": Code2,
  React: Palette,
  HTML: Code2,
  CSS: Palette,
  "Node.js": Server,
  "REST API": Network,
  "Jupyter Notebook": Terminal,
  "Power BI": BarChart3,
  "VS Code": Code2,
  "Machine Learning": Brain,
  "Data Analysis": BarChart3,
  Matplotlib: BarChart3,
  NumPy: Database,
  Pandas: Database,
  "Scikit-learn": Brain,
};

export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      color: "cyan",
      skills: ["Python", "C", "C++"],
    },
    {
      title: "Frontend",
      icon: Palette,
      color: "purple",
      skills: ["React", "HTML", "CSS"],
    },
    {
      title: "Backend",
      icon: Server,
      color: "cyan",
      skills: ["Node.js", "REST API"],
    },
    {
      title: "Tools",
      icon: Wrench,
      color: "purple",
      skills: ["Jupyter Notebook", "Power BI", "VS Code"],
    },
    {
      title: "Data Science",
      icon: Brain,
      color: "cyan",
      skills: [
        "Machine Learning",
        "Data Analysis",
        "Matplotlib",
        "NumPy",
        "Pandas",
        "Scikit-learn",
      ],
    },
  ];

  return (
    <section id="skills" className="relative min-h-screen py-20 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-5xl md:text-6xl mb-4 text-center bg-gradient-to-r from-purple-400 to-cyan-600 bg-clip-text text-transparent"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            TECHNICAL SKILLS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-600 mx-auto mb-16" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                className={`relative group`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    category.color === "cyan"
                      ? "from-cyan-500/20 to-cyan-500/0"
                      : "from-purple-500/20 to-purple-500/0"
                  } rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative border border-gray-800 group-hover:border-cyan-500/50 rounded-lg p-6 bg-black/80 backdrop-blur-sm transition-all duration-300">
                  <div className="flex items-center gap-3 mb-8">
                    <div
                      className={`p-3 rounded-lg ${
                        category.color === "cyan" ? "bg-cyan-500/10" : "bg-purple-500/10"
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 ${
                          category.color === "cyan" ? "text-cyan-400" : "text-purple-400"
                        }`}
                      />
                    </div>
                    <h3
                      className={`text-xl ${
                        category.color === "cyan" ? "text-cyan-300" : "text-purple-300"
                      }`}
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {category.title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill) => {
                      const SkillIcon = techIcons[skill] || Code2;
                      return (
                        <motion.div
                          key={skill}
                          className="flex flex-col items-center justify-center p-3 rounded-lg bg-gray-900/50 group/skill hover:bg-gray-800/50 transition-colors"
                          whileHover={{ scale: 1.1 }}
                        >
                          <SkillIcon
                            className={`w-8 h-8 mb-2 ${
                              category.color === "cyan" ? "text-cyan-400" : "text-purple-400"
                            }`}
                          />
                          <span
                            className="text-xs text-gray-300 text-center"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {skill}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>

                  <motion.div
                    className={`absolute bottom-4 right-4 w-20 h-20 opacity-5`}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Icon className="w-full h-full text-cyan-400" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
            Continuously learning and expanding my tech stack
          </p>
        </motion.div>
      </div>
    </section>
  );
}
