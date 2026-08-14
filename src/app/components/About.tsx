import { motion } from "motion/react";
import { Monitor, Code, Cpu } from "lucide-react";
import { AnimatedStarfield } from "./AnimatedStarfield";

export function About() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center py-20 bg-black overflow-hidden">
      <AnimatedStarfield />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-5xl md:text-6xl mb-4 text-center bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            ABOUT ME
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-16" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-80 h-80 mx-auto relative flex items-center justify-center">
              {/* Monitor frame animation */}
              <motion.div
                className="absolute inset-0 border-4 border-cyan-500/30 rounded-2xl"
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(0, 255, 255, 0.3)",
                    "0 0 40px rgba(0, 255, 255, 0.5)",
                    "0 0 20px rgba(0, 255, 255, 0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              {/* Inner animated border */}
              <motion.div
                className="absolute inset-4 border-2 border-purple-500/30 rounded-lg"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />

              {/* Computer/Developer visual content */}
              <div className="absolute inset-8 bg-gradient-to-br from-cyan-500/10 to-purple-600/10 rounded-xl flex flex-col items-center justify-center backdrop-blur-sm p-6">
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Monitor className="w-20 h-20 text-cyan-400 mb-4" />
                </motion.div>
                
                <motion.div
                  className="flex gap-3 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity }}>
                    <Code className="w-6 h-6 text-cyan-300" />
                  </motion.div>
                  <motion.div animate={{ rotate: -360 }} transition={{ duration: 4, repeat: Infinity }}>
                    <Cpu className="w-6 h-6 text-purple-300" />
                  </motion.div>
                </motion.div>

                <p className="text-cyan-300 text-center text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Abdul Aneef
                </p>
                <p className="text-gray-400 text-xs text-center mt-2">
                  AI & Data Science
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="border border-cyan-500/30 rounded-lg p-6 bg-black/50 backdrop-blur-sm">
              <h3
                className="text-xl mb-4 text-cyan-300"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Profile
              </h3>
              <p className="text-gray-300 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Computer Science student specialising in AI & Data Science with strong skills in Python, SQL, and data analysis. Experienced in data preprocessing, EDA, and visualisation using NumPy, Pandas, Matplotlib, and Seaborn. Familiar with full stack web technologies. Quick learner with analytical thinking and teamwork abilities. More interested about data science.
              </p>
            </div>

            <div className="border border-purple-500/30 rounded-lg p-6 bg-black/50 backdrop-blur-sm">
              <h3
                className="text-xl mb-4 text-purple-400"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Focus Areas
              </h3>
              <ul className="space-y-2 text-gray-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">▹</span>
                  <span>Data Science & Machine Learning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">▹</span>
                  <span>Data Analysis & Visualization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">▹</span>
                  <span>Building Intelligent Systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">▹</span>
                  <span>Full Stack Development</span>
                </li>
              </ul>
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
}
