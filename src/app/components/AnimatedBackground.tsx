import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

export function AnimatedBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const particleCount = 50;
    const newParticles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 3 + 1,
      });
    }

    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="particleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f0ff" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {particles.map((particle, index) => (
          <g key={particle.id}>
            <motion.circle
              cx={`${particle.x}%`}
              cy={`${particle.y}%`}
              r={particle.size}
              fill="#00f0ff"
              filter="url(#glow)"
              initial={{ opacity: 0 }}
              animate={{
                cx: [`${particle.x}%`, `${(particle.x + particle.vx * 50) % 100}%`],
                cy: [`${particle.y}%`, `${(particle.y + particle.vy * 50) % 100}%`],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {index < particles.length - 1 && Math.random() > 0.7 && (
              <motion.line
                x1={`${particle.x}%`}
                y1={`${particle.y}%`}
                x2={`${particles[index + 1].x}%`}
                y2={`${particles[index + 1].y}%`}
                stroke="#00f0ff"
                strokeWidth="0.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}
          </g>
        ))}

        <motion.path
          d="M0,50 Q25,30 50,50 T100,50"
          stroke="#00f0ff"
          strokeWidth="1"
          fill="none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        <motion.circle
          cx="10%"
          cy="20%"
          r="100"
          fill="none"
          stroke="#a855f7"
          strokeWidth="1"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.05, 0.1]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <motion.circle
          cx="80%"
          cy="70%"
          r="150"
          fill="none"
          stroke="#00f0ff"
          strokeWidth="1"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.05, 0.1]
          }}
          transition={{ duration: 7, repeat: Infinity }}
        />
      </svg>

      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5" />
    </div>
  );
}
