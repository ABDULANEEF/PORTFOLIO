import { motion } from "motion/react";
import { Mail, Linkedin, Github, FileText, Send } from "lucide-react";

export function Contact() {
  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "abdulaneef@example.com",
      href: "mailto:abdulaneef@example.com",
      color: "cyan",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Abdul Aneef",
      href: "https://linkedin.com/in/abdul-aneef-865a952b9",
      color: "blue",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@abdulaneef002",
      href: "https://github.com/abdulaneef002",
      color: "purple",
    },
    {
      icon: FileText,
      label: "Resume",
      value: "Download CV",
      href: "/resume.pdf",
      color: "cyan",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "cyan":
        return {
          bg: "bg-cyan-500/10",
          text: "text-cyan-400",
          border: "border-cyan-500/50",
          hover: "hover:bg-cyan-500/20",
        };
      case "blue":
        return {
          bg: "bg-blue-500/10",
          text: "text-blue-400",
          border: "border-blue-500/50",
          hover: "hover:bg-blue-500/20",
        };
      case "purple":
        return {
          bg: "bg-purple-500/10",
          text: "text-purple-400",
          border: "border-purple-500/50",
          hover: "hover:bg-purple-500/20",
        };
      default:
        return {
          bg: "bg-gray-500/10",
          text: "text-gray-400",
          border: "border-gray-500/50",
          hover: "hover:bg-gray-500/20",
        };
    }
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center py-20 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.1),transparent_70%)]" />

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Open to Talk
          </h2>
          <h2
            className="text-5xl md:text-7xl mb-8 bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Meaningful.
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            const colors = getColorClasses(contact.color);

            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative border border-gray-800 ${colors.hover} rounded-lg p-6 transition-all duration-300`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className={`absolute inset-0 ${colors.bg} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`}
                />

                <div className="relative flex items-center gap-4">
                  <div className={`p-3 ${colors.bg} rounded-lg`}>
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {contact.label}
                    </p>
                    <p className={`${colors.text}`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {contact.value}
                    </p>
                  </div>
                  <motion.div
                    className={`ml-auto ${colors.text}`}
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Send className="w-5 h-5" />
                  </motion.div>
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="/resume.pdf"
            download="Abdul_Aneef_Resume.pdf"
            className="inline-block px-12 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 rounded-lg text-white relative overflow-hidden group"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative z-10 flex items-center gap-2 justify-center">
              <FileText className="w-5 h-5" />
              Download Full Resume
            </span>
          </motion.a>

          <motion.p
            className="mt-12 text-gray-500 text-sm"
            style={{ fontFamily: "'Inter', sans-serif" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Designed & Developed by{" "}
            <span className="text-cyan-400">Abdul Aneef</span>
          </motion.p>

          <motion.div
            className="mt-4 flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <motion.div
              className="w-2 h-2 bg-cyan-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-gray-500 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
              Available for opportunities
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
