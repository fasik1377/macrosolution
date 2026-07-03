"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Banknote, BadgePercent, CalendarRange, ClipboardList, CreditCard, UserRound, ShieldCheck, ChartColumn, BadgeCheck, ScanLine, CheckCircle } from "lucide-react";
import { useRef } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCarousel from "@/components/ProductCarousel";
import ProductPortfolio3D from "@/components/ProductPortfolio3D";
import PrimusModules3D from "@/components/PrimusModules3D";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import DataNetworkBackground from "@/components/DataNetworkBackground";
import IndustriesWeServe3D from "@/components/IndustriesWeServe3D";
import ProfessionalServices3D from "@/components/ProfessionalServices3D";
import Clients3DSlider from "@/components/Clients3DSlider";
import MissionVision3D from "@/components/MissionVision3D";
import PayrollFeatures3D from "@/components/PayrollFeatures3D";
import WebMobileShowcase3D from "@/components/WebMobileShowcase3D";
import HeroSoftwareBackground3D from "@/components/HeroSoftwareBackground3D";

export default function Home() {
  const aboutStats = [
    "18+ Years of Experience",
    "Enterprise Products",
    "Various Business Sectors",
  ];

  const ecosystemSectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress: ecosystemScrollProgress } = useScroll({
    target: ecosystemSectionRef,
    offset: ["start end", "end start"],
  });
  const ecosystemCardScale = useTransform(ecosystemScrollProgress, [0, 0.35, 0.7, 1], [1, 1, 0.98, 0.92]);
  const ecosystemCardRotateX = useTransform(ecosystemScrollProgress, [0, 0.45, 1], [0, 0, -10]);
  const ecosystemCardRotateY = useTransform(ecosystemScrollProgress, [0, 0.5, 1], [0, 0, 8]);
  const shardDistance = useTransform(ecosystemScrollProgress, [0, 0.45, 0.75, 1], [0, 0, 44, 96]);
  const shardFade = useTransform(ecosystemScrollProgress, [0, 0.45, 0.75, 1], [1, 1, 0.96, 0.84]);

  const leadershipTeam = [
    {
      initials: "RK",
      name: "Ranjith Kumar",
      role: "Director",
      description:
        "Visionary leader driving Macro Solution's strategic growth and technology partnerships across Mauritius.",
      accent: "from-[#0b5ed7] via-[#083b8a] to-[#36c2ff]",
    },
    {
      initials: "AN",
      name: "Ashvin Nurkoo",
      role: "Project Manager",
      description:
        "Overseeing delivery of complex IT projects, ensuring quality, timelines and client satisfaction.",
      accent: "from-[#7c3aed] via-[#0b5ed7] to-[#4d9fff]",
    },
  ];
  const renderLeadershipCard = (leader: (typeof leadershipTeam)[number], index: number) => (
    <motion.article
      key={leader.name}
      initial={{ opacity: 0, y: 32, rotateY: index === 0 ? -14 : 14, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ y: -14, rotateX: index === 0 ? 8 : 10, rotateY: index === 0 ? -10 : 10, scale: 1.03 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.08 }}
      className={`group relative mx-auto w-full max-w-[19rem] overflow-hidden border border-cyan-100/14 bg-white/[0.05] p-5 shadow-[0_28px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl [transform-style:preserve-3d] ${index === 0 ? "[clip-path:polygon(12%_0,100%_0,100%_78%,88%_100%,0_100%,0_16%)]" : "[clip-path:polygon(0_0,88%_0,100%_18%,100%_100%,12%_100%,0_82%)]"}`}
    >
      <motion.div
        animate={{ opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut", delay: index * 0.18 }}
        className={`absolute inset-0 bg-gradient-to-br ${leader.accent}`}
      />
      <div className={`absolute inset-[1px] bg-[linear-gradient(145deg,rgba(255,255,255,0.14),rgba(255,255,255,0.03)_24%,rgba(3,15,37,0.22)_56%,rgba(1,8,24,0.38)_100%)] ${index === 0 ? "[clip-path:polygon(12%_0,100%_0,100%_78%,88%_100%,0_100%,0_16%)]" : "[clip-path:polygon(0_0,88%_0,100%_18%,100%_100%,12%_100%,0_82%)]"}`} />
      <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${leader.accent}`} />
      <div className="absolute inset-y-5 left-4 w-px bg-[linear-gradient(180deg,transparent,rgba(196,233,255,0.7),transparent)]" />
      <div className="absolute inset-x-5 bottom-4 h-px bg-[linear-gradient(90deg,transparent,rgba(196,233,255,0.4),transparent)]" />
      <motion.div
        animate={{ x: ["-115%", "125%"] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "linear", delay: index * 0.32 }}
        className="absolute inset-y-0 w-20 skew-x-[-20deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.16),transparent)] blur-md"
      />

      <div className="relative z-10 [transform:translateZ(26px)]">
        <div className="flex items-start justify-between gap-3">
          <motion.div
            animate={{ y: [0, -3, 0], rotate: index === 0 ? [0, 5, 0] : [0, 3, 0], scale: [1, 1.04, 1] }}
            transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut", delay: index * 0.14 }}
            className={`relative flex h-14 w-14 items-center justify-center bg-gradient-to-br ${leader.accent} text-base font-black text-white shadow-[0_18px_34px_rgba(11,94,215,0.26)] ${index === 0 ? "[clip-path:polygon(16%_0,100%_0,100%_82%,84%_100%,0_100%,0_18%)]" : "[clip-path:polygon(0_0,84%_0,100%_18%,100%_100%,16%_100%,0_82%)]"}`}
          >
            <div className="absolute inset-[1px] bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.34),transparent_48%)]" />
            <span className="relative">{leader.initials}</span>
          </motion.div>
          <motion.span
            animate={{ opacity: [0.62, 1, 0.62], y: [0, -2, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
            className="rounded-full border border-cyan-100/12 bg-white/8 px-3 py-1 text-[8px] font-bold uppercase tracking-[0.24em] text-cyan-100"
          >
            Org Node
          </motion.span>
        </div>

        <div className="mt-5">
          <p className="text-[9px] font-semibold uppercase tracking-[0.34em] text-cyan-200/82">{leader.role}</p>
          <h3 className="mt-2 text-xl font-bold text-white">{leader.name}</h3>
        </div>

        <p className="mt-4 text-sm leading-6 text-white/76">{leader.description}</p>

        <div className="mt-5 flex items-center justify-between gap-3">
          <span className="rounded-full border border-cyan-100/12 bg-white/6 px-3 py-1 text-[8px] font-bold uppercase tracking-[0.24em] text-cyan-100">Leadership</span>
          <motion.span
            animate={{ opacity: [0.48, 1, 0.48] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
            className="text-[8px] font-bold uppercase tracking-[0.28em] text-white/56"
          >
            Active
          </motion.span>
        </div>
      </div>
    </motion.article>
  );

  return (
    <main className="relative overflow-x-clip bg-[#0096FF] text-white">
      <motion.div
        aria-hidden="true"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none fixed inset-0 -z-20 bg-[linear-gradient(120deg,#dff5ff_0%,#8dd8ff_24%,#0096FF_52%,#6fcfff_76%,#e6f9ff_100%)] bg-[length:200%_200%]"
      />
      <DataNetworkBackground variant="light" className="fixed inset-0 -z-10 opacity-100" />
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.2, 0.38, 0.2], scale: [0.96, 1.04, 0.96] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none fixed left-[8%] top-[12%] -z-10 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.34),transparent_68%)] blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.12, 0.32, 0.12], scale: [0.92, 1.06, 0.92] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none fixed bottom-[8%] right-[6%] -z-10 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(0,150,255,0.26),transparent_68%)] blur-3xl"
      />

      <Navbar />

      <section className="relative overflow-hidden pt-16 pb-28 text-white">
        <HeroSoftwareBackground3D />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.18),transparent_24%),radial-gradient(circle_at_82%_24%,rgba(111,207,255,0.18),transparent_22%),radial-gradient(circle_at_50%_78%,rgba(0,150,255,0.18),transparent_26%)]" />
        <motion.div
          aria-hidden="true"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
          className="absolute left-1/2 top-1/2 h-[58rem] w-[58rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
        />
        <motion.div
          aria-hidden="true"
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
          className="absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-300/20"
        />

        <div className="container relative z-10 mx-auto px-6">
          <div className="relative mt-8 h-[1120px] md:h-[980px]">
            <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/14 md:h-[46rem] md:w-[46rem]" />
            <div className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-300/20 md:h-[54rem] md:w-[54rem]" />

            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 md:h-[46rem] md:w-[46rem]"
            >
              {[
                { label: "Bank transfer statements", icon: Banknote, className: "left-1/2 top-0 -translate-x-1/2", color: "from-cyan-300 via-sky-400 to-blue-500" },
                { label: "Tax calculating & filing (PAYE)", icon: BadgePercent, className: "right-[14%] top-[8%]", color: "from-violet-300 via-fuchsia-400 to-purple-500" },
                { label: "Multiple payroll period support", icon: CalendarRange, className: "right-0 top-[28%]", color: "from-emerald-300 via-teal-400 to-green-500" },
                { label: "MNS / CNP compatibility", icon: ClipboardList, className: "right-0 top-[56%]", color: "from-amber-300 via-orange-400 to-yellow-500" },
                { label: "Customisable pay-slips", icon: CreditCard, className: "right-[14%] bottom-[8%]", color: "from-rose-300 via-pink-400 to-red-500" },
                { label: "Employee Self-Service portal", icon: UserRound, className: "left-1/2 bottom-0 -translate-x-1/2", color: "from-indigo-300 via-blue-400 to-cyan-500" },
                { label: "Role-based user profiles", icon: ShieldCheck, className: "left-[14%] bottom-[8%]", color: "from-lime-300 via-emerald-400 to-teal-500" },
                { label: "Management dashboards & reports", icon: ChartColumn, className: "left-0 top-[56%]", color: "from-sky-300 via-blue-400 to-indigo-500" },
                { label: "Payroll compliance & audit", icon: BadgeCheck, className: "left-0 top-[28%]", color: "from-orange-300 via-amber-400 to-yellow-500" },
                { label: "Biometric device integration", icon: ScanLine, className: "left-[14%] top-[8%]", color: "from-fuchsia-300 via-violet-400 to-indigo-500" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    whileHover={{ scale: 1.08, y: -8 }}
                    className={`absolute flex h-36 w-36 items-center justify-center rounded-full border border-white/14 p-4 text-center text-[13px] font-semibold text-white shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl md:h-40 md:w-40 md:text-sm ${item.className}`}
                  >
                    <div className={`absolute inset-2 rounded-full bg-gradient-to-br ${item.color} opacity-90`} />
                    <div className="absolute inset-[1px] rounded-full border border-white/24" />
                    <div className="absolute inset-[18%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.34),transparent_68%)]" />
                    <div className="relative z-10 flex flex-col items-center gap-2 leading-5">
                      <Icon size={22} className="text-white drop-shadow-[0_6px_12px_rgba(0,0,0,0.22)]" />
                      <span>{item.label}</span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <div className="absolute left-1/2 top-1/2 z-10 w-[min(86vw,28rem)] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-white/16 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.08))] p-8 text-center shadow-[0_40px_120px_rgba(0,0,0,0.22)] backdrop-blur-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-100">Payroll Processing Engine</p>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">PRIMUS Payroll</h2>
              <p className="mt-5 text-white/78">
                Advanced payroll automation with compliance, reports, employee access, and seamless payroll operations in one intelligent system.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.35 }}
              className="pointer-events-none absolute right-6 top-10 z-20 hidden md:block"
            >
              <motion.div
                animate={{ y: [0, -16, 0], rotate: [0, 6, 0, -6, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-[1.8rem] border border-white/16 bg-white/10 p-4 shadow-[0_25px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl"
              >
                <Image src="/primus-logo-only-tri.png" alt="PRIMUS symbol" width={96} height={96} className="h-auto w-20 object-contain" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <WebMobileShowcase3D />

      <section id="about" className="relative overflow-hidden py-40 text-white [perspective:2200px]">
        <DataNetworkBackground variant="dark" className="opacity-75" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(77,159,255,0.12),transparent_24%),radial-gradient(circle_at_84%_72%,rgba(11,94,215,0.14),transparent_28%),linear-gradient(180deg,rgba(3,18,48,0.18),rgba(3,18,48,0.06))]" />
        <motion.div
          aria-hidden="true"
          animate={{ rotate: [0, 180, 360], scale: [0.96, 1.04, 0.96] }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8 shadow-[0_0_80px_rgba(77,159,255,0.12)] md:h-[42rem] md:w-[42rem]"
        />

        <div className="container relative z-10 mx-auto grid items-center gap-16 px-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 12 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/8 p-8 shadow-[0_30px_120px_rgba(0,0,0,0.24)] backdrop-blur-xl [transform-style:preserve-3d] md:p-10"
          >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_45%,rgba(77,159,255,0.08))]" />
            <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-cyan-300/10 blur-3xl" />

            <div className="relative [transform:translateZ(32px)]">
              <span className="inline-flex rounded-full border border-cyan-300/18 bg-cyan-300/8 px-5 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200">
                About Macro Solution
              </span>

              <h2 className="mt-6 text-3xl font-bold leading-tight md:text-5xl">
                Mauritius-based IT solutions for smarter business growth.
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-white/75">
                Macro Solution Ltd is a Mauritius-based IT company specialising in end-to-end technology solutions for businesses across multiple sectors.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-white/75">
                We design, develop and deploy robust software, PRIMUS - HR & Payroll systems, General Insurance, M-POS and IT Infrastructure, empowering organisations to operate smarter and grow faster.
              </p>

              <div className="mt-10 space-y-4">
                {[
                  "Our flagship product PRIMUS serves leading organisations including SBI Mauritius, New India Assurance, and various sectors.",
                  "Location: Quatre Bornes - Port Louis, Mauritius.",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
                    whileHover={{ x: 8, scale: 1.01 }}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/6 px-4 py-4 text-white/88 backdrop-blur-md"
                  >
                    <CheckCircle className="shrink-0 text-cyan-300" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            </motion.div>

          <div className="relative h-[700px] [perspective:1800px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.88, rotateX: 18, rotateY: -18 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              whileHover={{ rotateX: 6, rotateY: -8, y: -10 }}
              className="absolute left-1/2 top-1/2 h-[26rem] w-[min(88vw,34rem)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[2rem] border border-white/12 bg-white/8 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.28)] backdrop-blur-xl [transform-style:preserve-3d]"
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_45%,rgba(77,159,255,0.08))]" />
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-14 -left-12 h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl" />

              <div className="relative flex h-full flex-col justify-between [transform:translateZ(36px)]">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200">Technology Ecosystem</p>
                  <h3 className="mt-4 text-4xl font-bold">Complete Business Technology Stack</h3>
                  <p className="mt-5 text-white/72">
                    ERP, POS, Payroll, HRMS, mobile apps, web platforms, DMS, cloud, IT security, hardware, networks, and fuel industry systems under one technology partner.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Custom Software",
                    "Mobile Apps",
                    "Cloud & Security",
                    "Business Automation",
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      animate={{ y: index % 2 === 0 ? [0, -8, 0] : [0, 8, 0] }}
                      transition={{ duration: 4.8 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
                      className="rounded-[1.2rem] border border-white/10 bg-white/8 px-4 py-4 text-sm font-semibold text-white/88 shadow-[0_16px_40px_rgba(0,0,0,0.12)]"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -14, 0], rotate: [0, 4, 0, -4, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-2 top-14 rounded-[1.6rem] border border-white/12 bg-[linear-gradient(135deg,rgba(11,94,215,0.88),rgba(77,159,255,0.78))] p-5 shadow-[0_26px_80px_rgba(11,94,215,0.28)] md:left-6"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-white/75">18+ Years</p>
              <p className="mt-3 text-3xl font-bold">Experience</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0], rotate: [0, -3, 0, 3, 0] }}
              transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-12 right-0 rounded-[1.6rem] border border-white/12 bg-[linear-gradient(135deg,rgba(124,58,237,0.85),rgba(11,94,215,0.72))] p-5 shadow-[0_26px_80px_rgba(0,0,0,0.24)] md:right-4"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-white/75">Multi-Sector</p>
              <p className="mt-3 text-3xl font-bold">Business Impact</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0], x: [0, 8, 0] }}
              transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-12 top-8 hidden rounded-[1.4rem] border border-cyan-300/18 bg-white/10 px-5 py-4 text-sm font-semibold text-cyan-200 shadow-[0_18px_60px_rgba(77,159,255,0.16)] backdrop-blur-md md:block"
            >
              Innovation + Execution
            </motion.div>
          </div>
        </div>
      </section>


      <section className="relative overflow-hidden py-24 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#031129_0%,#082a63_42%,#0b3b8a_70%,#04142f_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_24%,rgba(34,211,238,0.12),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(96,165,250,0.12),transparent_24%),radial-gradient(circle_at_50%_78%,rgba(14,165,233,0.12),transparent_28%)]" />

        <div className="container relative z-10 mx-auto px-6">
          <div className="relative mx-auto min-h-[640px] overflow-hidden rounded-[2.4rem] border border-cyan-100/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02)_18%,rgba(2,10,28,0.24)_52%,rgba(1,8,20,0.58)_100%)] shadow-[0_40px_140px_rgba(0,0,0,0.3)] backdrop-blur-xl">
            <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(196,233,255,0.85),transparent)]" />

            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="absolute left-[18%] top-[20%] h-52 w-52 rounded-full border border-cyan-100/18"
            />
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute left-[18%] top-[20%] h-72 w-72 rounded-full border border-cyan-100/10"
            />
            <motion.div
              animate={{ y: [0, -10, 0], rotateY: [0, 8, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[13%] top-[16%] h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.7),rgba(11,59,138,0.18)_55%,transparent_70%)] shadow-[0_0_80px_rgba(34,211,238,0.2)]"
            >
              <div className="absolute inset-[10px] rounded-full border border-cyan-100/18" />
              <div className="absolute left-[48%] top-0 h-full w-px bg-cyan-100/16" />
              <div className="absolute top-[48%] left-0 h-px w-full bg-cyan-100/16" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
              transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[11%] top-[52%] w-40 rounded-[1.5rem] border border-cyan-100/12 bg-[#061731]/70 p-4 shadow-[0_26px_70px_rgba(0,0,0,0.26)] backdrop-blur-md [transform:rotate(-8deg)]"
            >
              <div className="h-20 rounded-[1rem] border border-cyan-100/10 bg-[linear-gradient(180deg,#0c2f67,#081d42)]">
                <div className="m-3 flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0], rotate: [0, -4, 0] }}
              transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-[12%] top-[50%] w-24 rounded-[1.6rem] border border-cyan-100/12 bg-[#061731]/70 p-3 shadow-[0_24px_64px_rgba(0,0,0,0.26)] backdrop-blur-md"
            >
              <div className="h-40 rounded-[1.2rem] border border-cyan-100/10 bg-[linear-gradient(180deg,#0e356f,#071a39)]" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0], x: [0, 6, 0] }}
              transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-[15%] top-[18%] rounded-[1.8rem] border border-cyan-100/12 bg-[#061731]/72 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.26)] backdrop-blur-md"
            >
              <div className="grid gap-2">
                {[1,2,3].map((row) => (
                  <div key={row} className="flex gap-2">
                    <span className="h-4 w-8 rounded-full bg-cyan-100/16" />
                    <span className="h-4 w-12 rounded-full bg-cyan-100/10" />
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 top-1/2 z-20 w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 px-6"
            >
              <motion.div
                style={{ scale: ecosystemCardScale, rotateX: ecosystemCardRotateX, rotateY: ecosystemCardRotateY, transformStyle: "preserve-3d" }}
                className="relative rounded-[2rem] border border-cyan-100/14 bg-[linear-gradient(180deg,rgba(6,23,49,0.78),rgba(4,17,39,0.62))] p-8 text-center shadow-[0_30px_100px_rgba(0,0,0,0.28)] backdrop-blur-xl md:p-10"
              >
                <div className="absolute inset-0 rounded-[2rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%,rgba(56,189,248,0.1))]" />
                <div className="pointer-events-none absolute inset-[1px] rounded-[1.95rem] border border-white/8" />

                {[
                  { x: -1, y: -1 },
                  { x: 0, y: -1 },
                  { x: 1, y: -1 },
                  { x: -1, y: 0 },
                  { x: 1, y: 0 },
                  { x: -1, y: 1 },
                  { x: 0, y: 1 },
                  { x: 1, y: 1 },
                ].map((direction, index) => (
                  <motion.div
                    key={`${direction.x}-${direction.y}`}
                    className="pointer-events-none absolute rounded-[1.25rem] border border-cyan-100/12 bg-[linear-gradient(180deg,rgba(125,211,252,0.18),rgba(14,165,233,0.04))] shadow-[0_18px_40px_rgba(0,0,0,0.12)]"
                    initial={{ opacity: 0.4 }}
                    animate={{ opacity: [0.22, 0.4, 0.22] }}
                    transition={{ duration: 4 + index * 0.18, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                      left: direction.x === -1 ? "10%" : direction.x === 0 ? "38%" : "66%",
                      top: direction.y === -1 ? "10%" : direction.y === 0 ? "38%" : "66%",
                      width: direction.x === 0 ? "24%" : "18%",
                      height: direction.y === 0 ? "24%" : "18%",
                      x: useTransform(shardDistance, (value) => direction.x * value),
                      y: useTransform(shardDistance, (value) => direction.y * value),
                      opacity: shardFade,
                      rotate: useTransform(shardDistance, (value) => (direction.x + direction.y) * 0.14 * value),
                    }}
                  />
                ))}

                <div className="relative z-10 flex flex-col items-center text-center [transform:translateZ(36px)]">
                  <span className="inline-flex rounded-full border border-cyan-100/14 bg-white/8 px-5 py-2 text-sm font-semibold uppercase tracking-[0.34em] text-cyan-200 backdrop-blur-md">
                    Intelligent Digital Ecosystem
                  </span>
                  <h2 className="mt-6 text-3xl font-bold leading-tight text-white md:text-5xl">
                    Connected software experiences built for modern business.
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-white/76 md:text-lg">
                    Web, mobile, cloud, AI-assisted workflows and secure infrastructure connected in one elegant digital architecture.
                  </p>
                  <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                    <button className="rounded-full bg-[linear-gradient(135deg,#0ea5e9,#2563eb)] px-7 py-4 font-semibold text-white shadow-[0_20px_50px_rgba(37,99,235,0.32)] transition hover:scale-[1.02]">
                      Explore Solutions
                    </button>
                    <button className="rounded-full border border-cyan-100/16 bg-white/8 px-7 py-4 font-semibold text-cyan-100 backdrop-blur-md transition hover:bg-white/12">
                      View Portfolio
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {[
              { left: '24%', top: '30%', width: '20%', rotate: '12deg', delay: 0 },
              { left: '28%', top: '58%', width: '18%', rotate: '-8deg', delay: 0.5 },
              { left: '52%', top: '24%', width: '14%', rotate: '18deg', delay: 0.8 },
              { left: '58%', top: '62%', width: '16%', rotate: '-14deg', delay: 1.1 },
              { left: '68%', top: '36%', width: '14%', rotate: '10deg', delay: 1.4 },
            ].map((trail, index) => (
              <motion.div
                key={index}
                animate={{ opacity: [0.25, 0.7, 0.25], scaleX: [0.9, 1.05, 0.9] }}
                transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut', delay: trail.delay }}
                className="absolute h-px bg-[linear-gradient(90deg,rgba(34,211,238,0.0),rgba(34,211,238,0.95),rgba(96,165,250,0.0))]"
                style={{ left: trail.left, top: trail.top, width: trail.width, transform: `rotate(${trail.rotate})` }}
              />
            ))}

            {Array.from({ length: 16 }).map((_, index) => (
              <motion.span
                key={index}
                animate={{ y: [0, -18, 0], opacity: [0.18, 0.65, 0.18], scale: [0.8, 1, 0.8] }}
                transition={{ duration: 4 + (index % 5) * 0.45, repeat: Infinity, ease: 'easeInOut', delay: index * 0.16 }}
                className="absolute h-1.5 w-1.5 rounded-full bg-cyan-100/70"
                style={{ left: `${8 + (index * 5.2) % 82}%`, top: `${14 + (index * 4.8) % 68}%` }}
              />
            ))}
          </div>
        </div>
      </section>
      <PrimusModules3D />
      <ProductPortfolio3D />
      <IndustriesWeServe3D />

      <ProfessionalServices3D />
      <Clients3DSlider />
      <MissionVision3D />

      <section className="relative overflow-hidden py-32 text-white [perspective:2000px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(77,159,255,0.12),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(11,94,215,0.16),transparent_36%)]" />
        <div className="container relative z-10 mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex rounded-full border border-white/15 bg-white/8 px-5 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200 backdrop-blur-md">
              Leadership Team
            </span>
            <h2 className="mt-6 text-4xl font-bold md:text-6xl">The People Behind Our Success</h2>
            <p className="mt-5 text-lg text-white/70 md:text-xl">
              Meet the leadership shaping Macro Solution&apos;s growth, project excellence and trusted client partnerships.
            </p>
          </motion.div>

          <div className="relative mx-auto mt-16 flex max-w-6xl justify-center">
            <div className="relative grid w-full max-w-5xl items-center justify-center gap-8 lg:grid-cols-[minmax(18rem,19rem)_minmax(8rem,12rem)_minmax(18rem,19rem)]">
              {renderLeadershipCard(leadershipTeam[0], 0)}

              <div className="pointer-events-none relative mx-auto flex h-24 w-44 items-center justify-center lg:h-full lg:w-full">
                <motion.div
                  animate={{ opacity: [0.18, 0.48, 0.18], scaleX: [0.92, 1.06, 0.92] }}
                  transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-1/2 top-1/2 h-14 w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(125,211,252,0.18),transparent_68%)] blur-xl"
                />
                <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-[linear-gradient(90deg,rgba(125,211,252,0.08),rgba(125,211,252,0.85),rgba(125,211,252,0.08))]" />
                <motion.div
                  animate={{ x: ["-42%", "42%", "-42%"] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200 shadow-[0_0_22px_rgba(125,211,252,0.8)]"
                />
                <motion.div
                  animate={{ x: ["42%", "-42%", "42%"] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.38 }}
                  className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.82)]"
                />
                <motion.div
                  animate={{ x: [-64, 64], opacity: [0, 1, 0] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
                  className="absolute left-1/2 top-[calc(50%-1rem)] -translate-x-1/2 text-[10px] font-bold tracking-[0.32em] text-cyan-200/82"
                >
                  0101
                </motion.div>
                <motion.div
                  animate={{ x: [64, -64], opacity: [0, 1, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 0.24 }}
                  className="absolute left-1/2 top-[calc(50%+0.55rem)] -translate-x-1/2 text-[10px] font-bold tracking-[0.32em] text-cyan-100/72"
                >
                  DATA
                </motion.div>
                <motion.div
                  animate={{ opacity: [0.24, 1, 0.24], scale: [0.88, 1.12, 0.88] }}
                  transition={{ duration: 2.7, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-100/18"
                />
                <motion.div
                  animate={{ rotate: [0, 180, 360] }}
                  transition={{ duration: 7.5, repeat: Infinity, ease: "linear" }}
                  className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-cyan-100/16"
                />
              </div>

              {renderLeadershipCard(leadershipTeam[1], 1)}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}




































