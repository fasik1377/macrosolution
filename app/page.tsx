"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Banknote, BadgePercent, CalendarRange, ClipboardList, CreditCard, UserRound, ShieldCheck, ChartColumn, BadgeCheck, ScanLine, CheckCircle } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCarousel from "@/components/ProductCarousel";
import ProductPortfolio3D from "@/components/ProductPortfolio3D";
import PrimusModules3D from "@/components/PrimusModules3D";
import PrimusShowcase3D from "@/components/PrimusShowcase3D";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import DataNetworkBackground from "@/components/DataNetworkBackground";
import IndustriesWeServe3D from "@/components/IndustriesWeServe3D";
import ProfessionalServices3D from "@/components/ProfessionalServices3D";
import Clients3DSlider from "@/components/Clients3DSlider";
import PayrollFeatures3D from "@/components/PayrollFeatures3D";
import WebMobileShowcase3D from "@/components/WebMobileShowcase3D";

export default function Home() {
  const aboutStats = [
    "18+ Years of Experience",
    "Enterprise Products",
    "Various Business Sectors",
  ];

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
                <Image src="/PRIMUS LOGO ONLY TRI.png" alt="PRIMUS symbol" width={96} height={96} className="h-auto w-20 object-contain" />
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

      <section className="relative overflow-hidden py-24 text-white [perspective:1200px]">
        <div className="container relative z-10 mx-auto px-6">
          <motion.div
            animate={{ x: [0, -40, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="flex w-max gap-6 px-6 [transform-style:preserve-3d]"
          >
            {[...aboutStats, ...aboutStats].map((item, index) => (
              <motion.div
                key={`${item}-${index}`}
                whileHover={{ y: -14, rotateX: 10, rotateY: index % 2 === 0 ? -10 : 10, scale: 1.04 }}
                className="flex h-40 w-[min(82vw,360px)] shrink-0 items-center justify-center border border-white/18 bg-white/10 p-8 text-center shadow-[0_32px_90px_rgba(0,0,0,0.22)] backdrop-blur-xl" style={{ clipPath: index % 3 === 0 ? "polygon(6% 0,100% 0,94% 100%,0 100%)" : index % 3 === 1 ? "polygon(0 12%,100% 0,100% 88%,0 100%)" : "polygon(10% 0,100% 0,90% 100%,0 100%)" }}
              >
                <span className="text-2xl font-bold leading-tight md:text-3xl">
                  {item}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <PrimusModules3D />
      <PrimusShowcase3D />
      <PayrollFeatures3D />
      <ProductPortfolio3D />
      <IndustriesWeServe3D />

      <ProfessionalServices3D />
      <Clients3DSlider />

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

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            className="mt-16 flex w-max gap-8 pb-6"
          >
            {[...leadershipTeam, ...leadershipTeam].map((leader, index) => (
              <motion.article
                key={`${leader.name}-${index}`}
                initial={{ opacity: 0, y: 40, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -16, rotateY: index % 2 === 0 ? -8 : 8, rotateX: 8, scale: 1.02 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="group relative h-[28rem] w-[min(86vw,30rem)] shrink-0 overflow-hidden border border-white/12 bg-white/8 p-8 shadow-[0_30px_120px_rgba(0,0,0,0.28)] backdrop-blur-xl [transform-style:preserve-3d]" style={{ clipPath: index % 2 === 0 ? "polygon(0 0,92% 0,100% 14%,100% 100%,8% 100%,0 86%)" : "polygon(8% 0,100% 0,100% 86%,92% 100%,0 100%,0 14%)" }}
              >
                <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${leader.accent}`} />
                <div className="absolute -right-14 top-10 h-36 w-36 rounded-full bg-white/10 blur-3xl transition duration-500 group-hover:scale-125" />
                <div className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl transition duration-500 group-hover:scale-125" />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%,rgba(77,159,255,0.08))] opacity-70" />

                <div className="relative flex h-full flex-col justify-between [transform:translateZ(30px)]">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <div className={`flex h-20 w-20 items-center justify-center bg-gradient-to-br ${leader.accent} text-2xl font-black text-white shadow-[0_24px_60px_rgba(11,94,215,0.35)]`} style={{ clipPath: index % 2 === 0 ? "polygon(0 0,100% 0,86% 100%,0 100%)" : "polygon(14% 0,100% 0,100% 100%,0 100%)" }}>
                        {leader.initials}
                      </div>
                      <div className="mt-6">
                        <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">{leader.role}</p>
                        <h3 className="mt-3 text-3xl font-bold md:text-4xl">{leader.name}</h3>
                      </div>
                    </div>
                    <div className="hidden h-24 w-24 rounded-full border border-white/10 bg-white/6 md:block" />
                  </div>

                  <div className="relative mt-8 flex-1 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#061a3d]/55 p-6 shadow-inner shadow-black/10">
                    <motion.div
                      animate={{ y: [0, -18, 0] }}
                      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/10 blur-2xl"
                    />
                    <motion.div
                      animate={{ rotate: [0, 180, 360] }}
                      transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                      className="absolute right-4 top-4 h-12 w-12 rounded-full border border-cyan-200/20"
                    />
                    <p className="relative z-10 text-xl leading-relaxed text-white/82 md:text-2xl">
                      {leader.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}





