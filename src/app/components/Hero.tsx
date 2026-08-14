import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { AnimatedBackground } from "./AnimatedBackground";

type SwotKey = "strengths" | "weaknesses" | "opportunities" | "threats";

const swotData: Record<SwotKey, { title: string; items: string[]; accent: string }> = {
  strengths: {
    title: "Strengths",
    items: [
      "Quick learner",
      "Strong dedication",
      "Passion for Data Analysis and AI",
      "Problem-solving mindset",
    ],
    accent: "from-cyan-400 to-blue-500",
  },
  weaknesses: {
    title: "Weaknesses",
    items: ["Perfectionist in work", "Spend extra time on tasks"],
    accent: "from-orange-400 to-rose-500",
  },
  opportunities: {
    title: "Opportunities",
    items: [
      "Expanding AI & Data Science industry",
      "Learning emerging technologies",
    ],
    accent: "from-emerald-400 to-cyan-500",
  },
  threats: {
    title: "Threats",
    items: [
      "Fast-changing technology trends",
      "Competitive tech industry",
    ],
    accent: "from-violet-400 to-fuchsia-500",
  },
};

export function Hero({ onExplore }: { onExplore: () => void }) {
  const role = "Data Science Enthusiast";
  const [selectedSwot, setSelectedSwot] = useState<SwotKey>("strengths");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <AnimatedBackground />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h1
              className="text-7xl md:text-8xl tracking-tight mb-6"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                ABDUL
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                ANEEF
              </span>
            </h1>
          </motion.div>

          <motion.div
            className="h-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <p
              className="text-2xl md:text-3xl text-cyan-300"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {role}
              <motion.span
                className="inline-block w-0.5 h-8 bg-cyan-400 ml-1"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </p>
          </motion.div>

          <motion.p
            className="text-lg text-gray-400"
            style={{ fontFamily: "'Inter', sans-serif" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            "Code. Learn. Build. Impact."
          </motion.p>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
          >
            <motion.button
              onClick={onExplore}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg relative overflow-hidden group"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Explore Projects</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              onClick={() => window.open("#contact", "_self")}
              className="px-8 py-4 border-2 border-cyan-500 rounded-lg hover:bg-cyan-500/10 transition-colors"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative h-[560px] hidden md:flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.85, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-[440px] h-[440px] rounded-full border border-cyan-400/20 bg-cyan-500/5 blur-3xl"
              animate={{ scale: [1, 1.08, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="relative w-[420px] h-[420px]">
            <motion.div
              className="absolute inset-6 rounded-full border border-cyan-400/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-16 rounded-full border border-purple-400/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            />

            <div className="absolute inset-0">
              {(Object.keys(swotData) as SwotKey[]).map((key) => {
                const isActive = selectedSwot === key;
                const data = swotData[key];
                const positionClasses: Record<SwotKey, string> = {
                  strengths: "top-0 left-1/2 -translate-x-1/2",
                  weaknesses: "left-0 top-1/2 -translate-y-1/2",
                  opportunities: "bottom-0 left-1/2 -translate-x-1/2",
                  threats: "right-0 top-1/2 -translate-y-1/2",
                };

                return (
                  <motion.button
                    key={key}
                    type="button"
                    onClick={() => setSelectedSwot(key)}
                    className={`absolute ${positionClasses[key]} flex h-28 w-28 items-center justify-center rounded-full border text-center transition-all duration-300 ${
                      isActive
                        ? "border-white/70 bg-white/15 shadow-[0_0_40px_rgba(34,211,238,0.35)]"
                        : "border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10"
                    }`}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <span
                      className={`px-4 text-sm font-semibold uppercase tracking-[0.25em] bg-gradient-to-r ${data.accent} bg-clip-text text-transparent`}
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {data.title}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            <motion.div
              key={selectedSwot}
              className="absolute inset-24 rounded-full border border-white/15 bg-black/55 backdrop-blur-md p-6 flex flex-col items-center justify-center text-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.35 }}
            >
              <p
                className={`text-xl font-semibold uppercase tracking-[0.3em] bg-gradient-to-r ${swotData[selectedSwot].accent} bg-clip-text text-transparent`}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {swotData[selectedSwot].title}
              </p>
              <div className="mt-5 space-y-2 text-sm text-gray-200">
                {swotData[selectedSwot].items.map((item) => (
                  <p key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                    {item}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-cyan-400" />
      </motion.div>
    </section>
  );
}
