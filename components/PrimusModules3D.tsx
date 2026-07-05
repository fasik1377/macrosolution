"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  BellRing,
  BriefcaseBusiness,
  Building2,
  ClipboardCheck,
  ClipboardList,
  FileWarning,
  LayoutDashboard,
  LineChart,
  ShieldCheck,
  Smartphone,
  Star,
  UserCog,
} from "lucide-react";

function useViewportWidth() {
  const [width, setWidth] = useState(1024);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return width;
}

const modules = [
  {
    title: "Dashboard & Monitoring",
    description: "Leave charts, org hierarchy, aging analysis, HR statistics.",
    icon: LineChart,
  },
  {
    title: "HR & Payroll Processes",
    description: "Leave register updates, government compensation, payroll transactions.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Performance & Grievance",
    description: "Monthly & yearly appraisals, KRA dashboards, grievance tracking.",
    icon: Star,
  },
  {
    title: "Employee Self-Service",
    description: "Download payslips, submit claims, OT applications, grievances.",
    icon: Smartphone,
  },
  {
    title: "Master Data Management",
    description: "Banks, departments, positions, holidays, branches, leave policies.",
    icon: Building2,
  },
  {
    title: "Leave & Claims",
    description: "Leave applications, monthly claims, OT claims, automated calculations.",
    icon: ClipboardList,
  },
  {
    title: "Statutory Reports",
    description: "Emolument, PAYE, CSG, PRGF and yearly statutory returns.",
    icon: LayoutDashboard,
  },
  {
    title: "System Configuration",
    description: "Company profile, financial year, system parameters and custom themes.",
    icon: BellRing,
  },
  {
    title: "Employee Management",
    description: "Profiles, career history, document storage, transfers and promotions.",
    icon: UserCog,
  },
  {
    title: "Approval Workflow",
    description: "Multi-level leave, claims and overtime approval authorisation.",
    icon: ClipboardCheck,
  },
  {
    title: "User & Security",
    description: "Role-based access, password control, audit logs, activity tracking.",
    icon: ShieldCheck,
  },
  {
    title: "v18 New: Grievance Module",
    description: "Newly added: raise, track and resolve grievances end-to-end.",
    icon: FileWarning,
  },
];

function ModuleCard({
  module,
  index,
  activeIndex,
  isCompact,
}: {
  module: (typeof modules)[number];
  index: number;
  activeIndex: number;
  isCompact: boolean;
}) {
  const distance = index - activeIndex;
  const wrappedDistance = ((distance + modules.length + modules.length / 2) % modules.length) - modules.length / 2;
  const isActive = index === activeIndex;
  const distanceMagnitude = Math.abs(wrappedDistance);
  const x = isCompact ? 0 : wrappedDistance * 190;
  const y = distanceMagnitude * (isCompact ? 4 : 18);
  const rotateY = wrappedDistance * (isCompact ? -9 : -16) + (isActive ? 0 : wrappedDistance > 0 ? 8 : -8);
  const rotateX = distanceMagnitude * (isCompact ? 2 : 4);
  const scale = isCompact ? (isActive ? 1 : 0.86) : Math.max(0.72, 1 - distanceMagnitude * 0.12);
  const opacity = isCompact
    ? isActive
      ? 1
      : 0
    : Math.max(0.18, 1 - distanceMagnitude * 0.22);
  const flipDelay = index * 0.55;
  const Icon = module.icon;

  return (
    <motion.article
      initial={{ rotateY: 90, opacity: 0, scale: 0.88 }}
      animate={{
        rotateY: isCompact ? rotateY : [rotateY, rotateY + 180, rotateY + 360],
        rotateX,
        x,
        y,
        scale,
        opacity,
      }}
      transition={{
        rotateY: isCompact
          ? { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
          : { duration: 18, repeat: Infinity, ease: "easeInOut", delay: flipDelay },
        rotateX: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
        x: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
        y: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
        scale: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
        opacity: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
      }}
      style={{ zIndex: modules.length - Math.abs(wrappedDistance) }}
      className="absolute left-1/2 top-1/2 flex h-[238px] w-[min(78vw,320px)] -translate-x-1/2 -translate-y-1/2 flex-col justify-between overflow-hidden rounded-[1.35rem] border border-white/18 bg-white/12 p-5 text-white shadow-[0_34px_100px_rgba(0,0,0,0.24)] backdrop-blur-xl [transform-style:preserve-3d] sm:h-[260px] sm:w-[min(84vw,380px)] sm:rounded-[1.7rem] sm:p-6 lg:h-[280px] lg:w-[min(88vw,440px)] lg:rounded-[2rem] lg:p-7"
    >
      <span className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
      <div className="flex items-start justify-between gap-4 [transform:translateZ(34px)]">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[0.9rem] border border-white/18 bg-white/16 text-cyan-100 sm:h-14 sm:w-14 sm:rounded-[1rem]">
          <Icon size={isCompact ? 22 : 28} />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-50 sm:text-xs sm:tracking-[0.26em]">
          Module {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="[transform:translateZ(38px)]">
        <h3 className="text-xl font-bold leading-tight sm:text-2xl md:text-3xl">{module.title}</h3>
        <p className="mt-3 text-sm leading-6 text-white/88 sm:mt-4 sm:text-base sm:leading-7">{module.description}</p>
      </div>
    </motion.article>
  );
}

export default function PrimusModules3D() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const viewportWidth = useViewportWidth();
  const isCompact = viewportWidth < 768;
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const orbitRotate = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const railX = useTransform(scrollYProgress, [0, 1], ["0%", "-52%"]);

  useEffect(() => {
    return scrollYProgress.on("change", (value) => {
      const rawIndex = Math.floor(value * modules.length);
      const nextIndex = Math.min(modules.length - 1, Math.max(0, rawIndex));
      setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
    });
  }, [scrollYProgress]);

  return (
    <section id="services" ref={sectionRef} className="relative min-h-[190vh] overflow-hidden text-white md:min-h-[220vh]">
      <div className="sticky top-0 min-h-[100svh] overflow-hidden [perspective:1500px]">
        <motion.div
          aria-hidden="true"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(255,255,255,0.34),transparent_22%),radial-gradient(circle_at_80%_74%,rgba(111,207,255,0.24),transparent_28%),linear-gradient(135deg,#eafaff_0%,#9bddff_24%,#0096FF_52%,#69d0ff_76%,#f3fcff_100%)] bg-[length:200%_200%]"
        />
        <motion.div
          aria-hidden="true"
          style={{ rotate: orbitRotate }}
          className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/18 shadow-[0_0_90px_rgba(77,159,255,0.16)] md:h-[48rem] md:w-[48rem]"
        />
        <motion.div
          aria-hidden="true"
          animate={{ opacity: [0.12, 0.34, 0.12], scale: [0.94, 1.06, 0.94] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[8%] top-[12%] h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.24),transparent_68%)] blur-3xl md:h-56 md:w-56"
        />
        <motion.div
          aria-hidden="true"
          animate={{ opacity: [0.12, 0.28, 0.12], scale: [0.92, 1.08, 0.92] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] right-[8%] h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(0,150,255,0.24),transparent_68%)] blur-3xl md:h-64 md:w-64"
        />

        {["UI", "API", "DB", "HR", "PAY", "ERP"].map((label, index) => (
          <motion.div
            key={label}
            aria-hidden="true"
            animate={{ y: [0, -16, 0], scale: [1, 1.08, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: index * 0.6 }}
            className={
              "absolute z-0 hidden h-14 w-14 items-center justify-center rounded-full border border-white/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.2),rgba(255,255,255,0.08))] text-[11px] font-bold uppercase tracking-[0.22em] text-white shadow-[0_12px_30px_rgba(0,0,0,0.14)] backdrop-blur-md md:flex " +
              ["left-[10%] top-[22%]", "left-[24%] top-[14%]", "right-[24%] top-[18%]", "right-[12%] top-[30%]", "left-[14%] bottom-[18%]", "right-[18%] bottom-[14%]"][index]
            }
          >
            <span className="relative z-10">{label}</span>
          </motion.div>
        ))}

        <motion.div aria-hidden="true" style={{ x: railX }} className="absolute bottom-4 left-0 hidden w-max gap-4 opacity-35 sm:flex md:bottom-10">
          {[...modules, ...modules].map((module, index) => (
            <span key={module.title + "-" + index} className="rounded-[1rem] border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-white/80">
              {module.title}
            </span>
          ))}
        </motion.div>

        <div className="container relative z-10 mx-auto grid min-h-[100svh] items-center gap-4 px-4 py-24 sm:px-6 md:gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10 lg:py-0">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100 sm:text-sm sm:tracking-[0.3em]">PRIMUS - Key Modules</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:mt-5 md:text-5xl lg:text-6xl">
              Comprehensive HRMS Functionality
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/80 sm:mt-6 sm:text-lg sm:leading-8">
              A complete HRMS command center covering monitoring, payroll, performance, employee self-service, compliance, approvals, security, grievance handling, and daily workforce operations.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
              <div className="inline-flex items-center gap-2 rounded-[1rem] border border-white/18 bg-white/12 px-4 py-3 text-sm font-bold text-white shadow-[0_18px_50px_rgba(0,0,0,0.16)] backdrop-blur sm:gap-3 sm:rounded-[1.2rem] sm:px-5 sm:py-4 sm:text-base">
                <ClipboardList size={20} className="text-cyan-100" />
                Scroll to explore every module
              </div>
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 2, 0, -2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-[1.6rem] border border-white/14 bg-white/10 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl"
              >
                <Image src="/primus-logo-vertical.png" alt="PRIMUS vertical logo" width={110} height={140} className="h-auto w-20 object-contain md:w-24" />
              </motion.div>
            </div>
          </div>

          <div className="relative h-[390px] [perspective:1500px] sm:h-[500px] lg:h-[700px]">
            {modules.map((module, index) => (
              <ModuleCard key={`${module.title}-${activeIndex === index ? "active" : "idle"}`} module={module} index={index} activeIndex={activeIndex} isCompact={isCompact} />
            ))}

            <div className="absolute bottom-2 left-1/2 z-20 flex w-[min(92vw,28rem)] -translate-x-1/2 items-center justify-center gap-2 sm:bottom-4 sm:w-auto sm:gap-3">
              <div className="hidden rounded-full border border-white/16 bg-white/12 px-5 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white shadow-[0_14px_36px_rgba(0,0,0,0.18)] backdrop-blur-md sm:block">
                Scroll Up
              </div>
              <div className="rounded-full border border-white/16 bg-white/12 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white/80 backdrop-blur-md sm:tracking-[0.28em]">
                {activeIndex + 1} / {modules.length}
              </div>
              <div className="hidden rounded-full border border-white/16 bg-white/12 px-5 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white shadow-[0_14px_36px_rgba(0,0,0,0.18)] backdrop-blur-md sm:block">
                Scroll Down
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}









