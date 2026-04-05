"use client";

import { motion } from "framer-motion";

const orbs = [
  { size: "h-64 w-64", color: "from-cyan-400/35 to-blue-500/10", x: "8%", y: "18%", dur: 14 },
  { size: "h-72 w-72", color: "from-purple-500/30 to-fuchsia-500/10", x: "70%", y: "8%", dur: 17 },
  { size: "h-56 w-56", color: "from-emerald-400/30 to-cyan-300/10", x: "55%", y: "64%", dur: 12 },
  { size: "h-44 w-44", color: "from-indigo-400/25 to-sky-300/10", x: "16%", y: "72%", dur: 15 },
];

export default function ThreeScene() {
  return (
    <div className="three-scene" aria-hidden>
      <div className="three-grid" />

      {orbs.map((orb) => (
        <motion.div
          key={`${orb.x}-${orb.y}`}
          className={`absolute rounded-full bg-gradient-to-br ${orb.size} ${orb.color} blur-3xl`}
          style={{ left: orb.x, top: orb.y }}
          animate={{
            x: [0, 18, -12, 0],
            y: [0, -15, 10, 0],
            scale: [1, 1.08, 0.95, 1],
          }}
          transition={{ duration: orb.dur, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <motion.div
        className="three-ring three-ring-a"
        animate={{ rotateX: [64, 71, 64], rotateZ: [0, 360] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="three-ring three-ring-b"
        animate={{ rotateY: [72, 66, 72], rotateZ: [360, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      />

      <div className="three-overlay" />
    </div>
  );
}
