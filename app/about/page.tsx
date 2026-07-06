"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle, Goal, Lightbulb, ShieldCheck, Sparkles, Target, Users } from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AboutScrollHero3D from "@/components/AboutScrollHero3D";
import DataNetworkBackground from "@/components/DataNetworkBackground";
import TechPageBackground from "@/components/TechPageBackground";
import { company, profileHighlights, services, valueCards } from "@/components/companyProfile";
import { fadeUp, stagger } from "@/components/motion";

const values = [
  {
    title: valueCards[0].title,
    text: valueCards[0].text,
    icon: Lightbulb,
  },
  {
    title: "Productivity Focus",
    text: "Every solution is designed to improve productivity, competitiveness, visibility, and control.",
    icon: Goal,
  },
  {
    title: valueCards[2].title,
    text: valueCards[2].text,
    icon: ShieldCheck,
  },
];

const highlights = [`Mission: ${company.mission}`, `Vision: ${company.vision}`, ...profileHighlights];

const motionStats = [
  { label: "Years of Experience", value: "18+", icon: Sparkles },
  { label: "Enterprise Mindset", value: "360Ãƒâ€šÃ‚Â°", icon: Target },
  { label: "Client Partnership", value: "Trusted", icon: Users },
];

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const statsSectionY = useTransform(scrollYProgress, [0.08, 0.2, 0.32], [42, 0, -28]);
  const statsSectionRotateX = useTransform(scrollYProgress, [0.08, 0.2, 0.32], [12, 0, -10]);
  const statsSectionRotateY = useTransform(scrollYProgress, [0.08, 0.2, 0.32], [-8, 0, 8]);
  const overviewCardY = useTransform(scrollYProgress, [0.18, 0.34, 0.5], [56, 0, -34]);
  const valuesSectionY = useTransform(scrollYProgress, [0.34, 0.5, 0.66], [44, 0, -30]);
  const valuesSectionRotateX = useTransform(scrollYProgress, [0.34, 0.5, 0.66], [10, 0, -12]);
  const trustSectionY = useTransform(scrollYProgress, [0.58, 0.74, 0.9], [38, 0, -26]);
  const trustSectionRotateY = useTransform(scrollYProgress, [0.58, 0.74, 0.9], [-8, 0, 8]);

  return (
    <main className="relative overflow-x-clip bg-[#0096FF] text-white">
      <TechPageBackground />

      <Navbar />
      <AboutScrollHero3D title={`${company.tagline}.`} description={company.intro} />

      <section className="relative -mt-10 overflow-hidden py-10 text-white md:-mt-14 md:py-12">
        <div className="container relative z-10 mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            style={{ y: statsSectionY, rotateX: statsSectionRotateX, rotateY: statsSectionRotateY }}
            className="grid gap-6 md:grid-cols-3 [transform-style:preserve-3d]"
          >
            {motionStats.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  animate={{ y: index % 2 === 0 ? [0, -10, 0] : [0, 10, 0], rotateX: [0, 5, 0], rotateY: index % 2 === 0 ? [0, -6, 0] : [0, 6, 0] }}
                  whileHover={{ y: -18, rotateY: index % 2 === 0 ? -12 : 12, rotateX: 12, scale: 1.05 }}
                  transition={{ duration: 6 + index * 0.4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.08] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.22)] backdrop-blur-xl [transform-style:preserve-3d]"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(77,159,255,0.12),transparent_38%,rgba(255,255,255,0.04),rgba(77,159,255,0.08))]" />
                  <div className="relative flex items-center justify-between [transform:translateZ(24px)]">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">{item.label}</p>
                      <h2 className="mt-4 text-4xl font-bold md:text-5xl">{item.value}</h2>
                    </div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-[1.2rem] bg-white/10 text-cyan-200">
                      <Icon size={28} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 text-white [perspective:1800px] md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_22%,rgba(11,94,215,0.12),transparent_24%),radial-gradient(circle_at_88%_12%,rgba(77,159,255,0.14),transparent_26%)]" />
        <motion.div
          aria-hidden="true"
          animate={{ rotate: [0, 180, 360] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8 shadow-[0_0_90px_rgba(77,159,255,0.12)] md:h-[40rem] md:w-[40rem]"
        />
        <div className="container relative z-10 mx-auto grid items-center gap-14 px-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <p className="font-semibold uppercase tracking-[0.28em] text-cyan-300">Who we are</p>
            <h2 className="mt-5 text-3xl font-bold leading-tight md:text-4xl">
              A technology partner for productive, competitive, and innovative businesses.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/72">
              We deliver {services.map((service) => service.title).join(", ").replace("Cloud & Document Management", "cloud and document management").replace("IT Security, Hardware & Networks", "IT security, hardware, and networks")} under one practical delivery team.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 36, rotateX: 6 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            animate={{ y: [0, -16, 0], x: [0, 8, 0, -8, 0], rotateX: [0, 6, 0], rotateY: [0, -10, 0, 10, 0] }}
            whileHover={{ y: -22, rotateY: -14, rotateX: 10, scale: 1.05 }}
            transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="group relative overflow-hidden border border-sky-100/80 bg-[linear-gradient(145deg,rgba(240,250,255,0.96),rgba(212,241,255,0.92),rgba(191,233,255,0.9))] p-8 text-slate-900 shadow-[0_40px_120px_rgba(44,126,201,0.22)] backdrop-blur-xl [transform-style:preserve-3d] [clip-path:polygon(0_0,100%_0,100%_88%,90%_100%,0_100%)]"
          >
            <motion.div
              aria-hidden="true"
              animate={{ scale: [1, 1.14, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-sky-300/40 blur-3xl transition duration-500 group-hover:scale-125"
            />
            <motion.div
              aria-hidden="true"
              animate={{ x: ["-20%", "115%"], opacity: [0, 1, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-y-10 left-[-30%] w-1/2 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.55),transparent)] skew-x-[-18deg]"
            />
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/70 to-transparent" />
            <motion.div
              animate={{ rotateY: [0, 16, 0, -16, 0], y: [0, -8, 0, 8, 0], rotateX: [0, 8, 0] }}
              transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
              className="flex h-16 w-16 items-center justify-center border border-sky-200/80 bg-white/55 text-sky-600 shadow-[0_20px_50px_rgba(0,150,255,0.18)] backdrop-blur [transform:translateZ(36px)] [clip-path:polygon(0_0,100%_0,82%_100%,0_100%)]"
            >
              <Users size={34} />
            </motion.div>
            <h3 className="mt-8 text-3xl font-bold text-slate-900 [transform:translateZ(28px)]">Built around business flow</h3>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 [transform:translateZ(24px)]">
              A light, modern workflow card with a floating motion language that feels active, smooth, and business-ready.
            </p>
            <div className="mt-8 space-y-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
                  whileHover={{ x: 10, y: -4, scale: 1.02 }}
                  animate={{ y: index % 2 === 0 ? [0, -4, 0] : [0, 4, 0] }}
                  className="flex items-start gap-3 border border-sky-100/80 bg-white/55 p-4 shadow-[0_16px_40px_rgba(91,169,230,0.12)] backdrop-blur [transform:translateZ(20px)] [clip-path:polygon(0_0,100%_0,96%_100%,0_100%)]"
                >
                  <CheckCircle className="mt-1 shrink-0 text-[#0096FF]" size={20} />
                  <p className="leading-7 text-slate-700">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden py-14 text-white [perspective:1800px] md:py-20">
        <DataNetworkBackground variant="light" className="opacity-88" />
        <div className="container relative z-10 mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            style={{ y: valuesSectionY, rotateX: valuesSectionRotateX }}
            className="grid gap-8 md:grid-cols-3 [transform-style:preserve-3d]"
          >
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.article
                  key={value.title}
                  variants={fadeUp}
                  animate={{ y: index % 2 === 0 ? [0, -12, 0] : [0, 12, 0], rotateX: [0, 6, 0], rotateY: index % 2 === 0 ? [0, 8, 0] : [0, -8, 0] }}
                  whileHover={{ y: -20, rotateX: 12, rotateY: index % 2 === 0 ? 12 : -12, scale: 1.05 }}
                  transition={{ duration: 6.6 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
                  className="relative overflow-hidden border border-white/12 bg-white/[0.08] p-7 shadow-[0_28px_90px_rgba(0,0,0,0.2)] backdrop-blur-xl [transform-style:preserve-3d] [clip-path:polygon(0_0,100%_0,100%_84%,88%_100%,0_100%)]"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(77,159,255,0.16),transparent_34%,rgba(255,255,255,0.04)_60%,rgba(77,159,255,0.12))]" />
                  <div className="relative [transform:translateZ(24px)]">
                    <div className="flex h-14 w-14 items-center justify-center border border-white/16 bg-white/10 text-cyan-200 [clip-path:polygon(0_0,100%_0,82%_100%,0_100%)]">
                      <Icon size={28} />
                    </div>
                    <h3 className="mt-7 text-2xl font-bold">{value.title}</h3>
                    <p className="mt-4 leading-7 text-white/72">{value.text}</p>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 text-white [perspective:1800px] md:py-20">
        <DataNetworkBackground variant="light" className="opacity-85" />
        <div className="container relative z-10 mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="font-semibold uppercase tracking-[0.3em] text-cyan-300"
            >
              Why Clients Trust Us
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mt-5 text-3xl font-bold md:text-5xl"
            >
              A partnership model built on clarity, quality, and long-term value.
            </motion.h2>
          </div>
          <motion.div style={{ y: trustSectionY, rotateY: trustSectionRotateY }} className="mt-10 grid gap-8 md:mt-12 lg:grid-cols-3 [transform-style:preserve-3d]">
            {[
              ["Business Understanding", "We translate business workflows into practical digital systems."],
              ["Delivery Confidence", "Projects stay focused on usability, quality, and long-term maintainability."],
              ["Support Mindset", "From launch to optimization, we stay engaged as a trusted partner."],
            ].map(([title, text], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30, rotateX: 12 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                animate={{ y: index % 2 === 0 ? [0, -12, 0] : [0, 12, 0], rotateX: [0, 6, 0], rotateY: index % 2 === 0 ? [0, -8, 0] : [0, 8, 0] }}
                whileHover={{ y: -20, rotateY: index % 2 === 0 ? -12 : 12, rotateX: 10, scale: 1.05 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 6.2 + index * 0.3, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-[2rem] border border-white/12 bg-white/[0.08] p-8 shadow-[0_30px_100px_rgba(0,0,0,0.24)] backdrop-blur-xl [transform-style:preserve-3d]"
              >
                <motion.div
                  animate={{ y: [0, -8, 0], rotate: [0, 4, 0, -4, 0] }}
                  transition={{ duration: 5.5 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
                  className="h-16 w-16 rounded-[1.4rem] bg-[linear-gradient(135deg,rgba(11,94,215,0.9),rgba(77,159,255,0.8))]"
                />
                <h3 className="mt-6 text-2xl font-bold">{title}</h3>
                <p className="mt-4 leading-7 text-white/72">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}






