"use client";

import { motion } from "framer-motion";

const particles = [
  { left: "8%", top: "14%" },
  { left: "18%", top: "72%" },
  { left: "28%", top: "36%" },
  { left: "36%", top: "82%" },
  { left: "45%", top: "18%" },
  { left: "54%", top: "64%" },
  { left: "62%", top: "30%" },
  { left: "70%", top: "78%" },
  { left: "78%", top: "12%" },
  { left: "84%", top: "48%" },
  { left: "91%", top: "70%" },
  { left: "96%", top: "28%" },
];

export default function FloatingParticles() {
  return (
    <>
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -50, 0],
            x: [0, 20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 5 + i,
          }}
          className="absolute rounded-full bg-white/10 blur-lg"
          style={{
            width: 80,
            height: 80,
            left: particle.left,
            top: particle.top,
          }}
        />
      ))}
    </>
  );
}
