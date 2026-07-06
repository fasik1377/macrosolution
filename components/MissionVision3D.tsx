"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Eye, Orbit, Sparkles, Target, Zap } from "lucide-react";
import { useRef } from "react";

const principles = ["Innovate", "Scale", "Deliver", "Transform"];

const cards = [
  {
    eyebrow: "M I S S I O N",
    title: "Empower every operation",
    copy:
      "To empower businesses with innovative, reliable and scalable technology solutions that streamline operations, enhance productivity, and deliver measurable value across Mauritius and the Indian Ocean region.",
    Icon: Target,
    accent: "from-cyan-300 via-sky-400 to-[#0b5ed7]",
    glow: "bg-cyan-300/24",
  },
  {
    eyebrow: "V I S I O N",
    title: "Lead digital transformation",
    copy:
      "To be the most trusted technology partner in the Indian Ocean region, driving digital transformation across industries through cutting-edge software and IT services.",
    Icon: Eye,
    accent: "from-[#8b5cf6] via-[#4d9fff] to-cyan-300",
    glow: "bg-violet-300/22",
  },
];

export default function MissionVision3D() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const stageRotateX = useTransform(scrollYProgress, [0, 0.45, 1], [10, 0, -9]);
  const stageRotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-9, 0, 9]);
  const stageScale = useTransform(scrollYProgress, [0, 0.45, 1], [0.94, 1, 0.95]);
  const orbY = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const orbYAlt = useTransform(scrollYProgress, [0, 1], [-50, 60]);
  const ringRotate = useTransform(scrollYProgress, [0, 1], [-28, 28]);
  const missionRotateY = useTransform(scrollYProgress, [0.08, 0.34, 0.6], [-34, 0, 18]);
  const visionRotateY = useTransform(scrollYProgress, [0.12, 0.4, 0.7], [34, 0, -18]);
  const missionRotateX = useTransform(scrollYProgress, [0.05, 0.34, 0.7], [18, 0, -10]);
  const visionRotateX = useTransform(scrollYProgress, [0.1, 0.4, 0.75], [18, 0, -10]);
  const missionY = useTransform(scrollYProgress, [0, 0.4, 1], [64, -8, -34]);
  const visionY = useTransform(scrollYProgress, [0, 0.45, 1], [78, 0, -30]);
  const missionScale = useTransform(scrollYProgress, [0, 0.38, 1], [0.88, 1, 0.94]);
  const visionScale = useTransform(scrollYProgress, [0, 0.44, 1], [0.86, 1, 0.94]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-16 text-white [perspective:2200px] md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(196,233,255,0.2),transparent_24%),radial-gradient(circle_at_78%_22%,rgba(139,92,246,0.16),transparent_24%),linear-gradient(180deg,rgba(0,150,255,0.08),rgba(3,15,37,0.2),rgba(0,150,255,0.08))]" />
      <motion.div
        aria-hidden="true"
        style={{ y: orbY }}
        className="absolute left-[6%] top-24 h-72 w-72 rounded-full bg-cyan-200/18 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        style={{ y: orbYAlt }}
        className="absolute bottom-16 right-[5%] h-80 w-80 rounded-full bg-violet-300/16 blur-3xl"
      />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.32em] text-cyan-100 shadow-[0_18px_60px_rgba(3,15,37,0.22)] backdrop-blur-md">
            <Sparkles size={15} />
            Mission &amp; Vision
          </span>
          <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight md:text-6xl">
            Our Purpose &amp; Direction
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/74">
            A clear technology compass for building trusted, measurable and future-ready digital solutions.
          </p>
        </motion.div>

        <div className="relative mx-auto mt-12 max-w-5xl md:mt-16">
          <motion.div
            aria-hidden="true"
            style={{ rotate: ringRotate }}
            className="absolute left-1/2 top-1/2 hidden h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-100/12 md:block"
          />
          <motion.div
            aria-hidden="true"
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-1/2 hidden h-[19rem] w-[19rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/12 md:block"
          />

          <motion.div
            style={{ rotateX: stageRotateX, rotateY: stageRotateY, scale: stageScale }}
            className="grid gap-5 [transform-style:preserve-3d] lg:grid-cols-[minmax(0,0.9fr)_0.56fr_minmax(0,0.9fr)] lg:items-center"
          >
            {cards.map(({ eyebrow, title, copy, Icon, accent, glow }, index) => {
              const cardMotion = index === 0
                ? { rotateY: missionRotateY, rotateX: missionRotateX, y: missionY, scale: missionScale }
                : { rotateY: visionRotateY, rotateX: visionRotateX, y: visionY, scale: visionScale };

              return (
                <motion.article
                  key={eyebrow}
                  initial={{ opacity: 0, y: 46, rotateY: index === 0 ? -16 : 16 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  whileHover={{ y: -16, rotateX: 12, rotateY: index === 0 ? -14 : 14, scale: 1.04 }}
                  transition={{ duration: 0.85, ease: "easeOut", delay: index * 0.12 }}
                  style={cardMotion}
                  className={`group relative mx-auto w-full max-w-[22rem] overflow-hidden rounded-[1.7rem] border border-cyan-100/14 bg-white/[0.04] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl [transform-style:preserve-3d] md:max-w-[24rem] md:p-7 ${index === 1 ? "lg:col-start-3" : ""}`}
                >
                  <div className={`absolute -right-14 -top-14 h-36 w-36 rounded-full ${glow} opacity-70 blur-3xl transition duration-500 group-hover:scale-125`} />
                  <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${accent}`} />
                  <div className="absolute inset-[1px] rounded-[1.6rem] bg-[linear-gradient(145deg,rgba(255,255,255,0.1),rgba(255,255,255,0.02)_28%,rgba(1,8,24,0.22)_100%)]" />
                  <motion.div
                    aria-hidden="true"
                    animate={{ x: ["-130%", "130%"], opacity: [0, 0.45, 0], skewX: [0, -10, 0] }}
                    transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: index * 0.45 }}
                    className="absolute inset-y-0 w-1/2 skew-x-[-18deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.22),transparent)]"
                  />

                  <div className="relative z-10 [transform:translateZ(34px)]">
                    <div className="flex items-start justify-between gap-4">
                      <motion.div
                        animate={{ y: [0, -8, 0], rotate: index === 0 ? [0, -7, 0] : [0, 7, 0], scale: [1, 1.08, 1] }}
                        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                        className={`flex h-14 w-14 items-center justify-center rounded-[1.1rem] bg-gradient-to-br ${accent} shadow-[0_20px_45px_rgba(11,94,215,0.3)]`}
                      >
                        <Icon size={26} className="text-white" />
                      </motion.div>
                      <div className="rounded-full border border-cyan-100/14 bg-white/8 p-2.5">
                        {index === 0 ? <Orbit size={16} className="text-cyan-100" /> : <Zap size={16} className="text-cyan-100" />}
                      </div>
                    </div>

                    <p className="mt-6 text-[11px] font-black uppercase tracking-[0.42em] text-cyan-100/82">{eyebrow}</p>
                    <h3 className="mt-3 text-xl font-black leading-tight text-white md:text-[1.7rem]">{title}</h3>
                    <p className="mt-5 text-sm leading-7 text-white/76 md:text-base">{copy}</p>
                  </div>
                </motion.article>
              );
            })}

            <motion.div
              initial={{ opacity: 0, scale: 0.72, rotateX: 24 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.18 }}
              className="relative order-first mx-auto flex h-44 w-44 items-center justify-center rounded-full border border-cyan-100/18 bg-white/8 shadow-[0_30px_90px_rgba(3,15,37,0.28)] backdrop-blur-xl [transform-style:preserve-3d] lg:order-none lg:col-start-2 lg:row-start-1"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-dashed border-cyan-100/24"
              />
              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.82, 1, 0.82] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-11 rounded-full bg-[radial-gradient(circle,rgba(196,233,255,0.42),rgba(77,159,255,0.2),transparent_70%)]"
              />
              <Zap size={42} className="relative z-10 text-cyan-100 drop-shadow-[0_14px_32px_rgba(125,211,252,0.45)]" />
              {principles.map((item, index) => (
                <motion.span
                  key={item}
                  animate={{ y: [0, -7, 0], opacity: [0.62, 1, 0.62] }}
                  transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: index * 0.25 }}
                  className="absolute rounded-full border border-cyan-100/14 bg-[#04142f]/72 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.22em] text-cyan-50 shadow-[0_14px_36px_rgba(0,0,0,0.18)]"
                  style={{
                    left: index === 0 ? "50%" : index === 1 ? "82%" : index === 2 ? "50%" : "2%",
                    top: index === 0 ? "-4%" : index === 1 ? "50%" : index === 2 ? "92%" : "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


