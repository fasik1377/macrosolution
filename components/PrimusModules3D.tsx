"use client";

import { motion } from "framer-motion";
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

const modules = [
  { title: "Dashboard & Monitoring", description: "Leave charts, org hierarchy, aging analysis, HR statistics.", icon: LineChart },
  { title: "HR & Payroll Processes", description: "Leave register updates, government compensation, payroll transactions.", icon: BriefcaseBusiness },
  { title: "Performance & Grievance", description: "Monthly & yearly appraisals, KRA dashboards, grievance tracking.", icon: Star },
  { title: "Employee Self-Service", description: "Download payslips, submit claims, OT applications, grievances.", icon: Smartphone },
  { title: "Master Data Management", description: "Banks, departments, positions, holidays, branches, leave policies.", icon: Building2 },
  { title: "Leave & Claims", description: "Leave applications, monthly claims, OT claims, automated calculations.", icon: ClipboardList },
  { title: "Statutory Reports", description: "Emolument, PAYE, CSG, PRGF and yearly statutory returns.", icon: LayoutDashboard },
  { title: "System Configuration", description: "Company profile, financial year, system parameters and custom themes.", icon: BellRing },
  { title: "Employee Management", description: "Profiles, career history, document storage, transfers and promotions.", icon: UserCog },
  { title: "Approval Workflow", description: "Multi-level leave, claims and overtime approval authorisation.", icon: ClipboardCheck },
  { title: "User & Security", description: "Role-based access, password control, audit logs, activity tracking.", icon: ShieldCheck },
  { title: "v18 New: Grievance Module", description: "Newly added: raise, track and resolve grievances end-to-end.", icon: FileWarning },
];

const slidingModules = [...modules, ...modules];

export default function PrimusModules3D() {
  return (
    <section id="services" className="relative overflow-hidden py-16 text-white md:py-24">
      <motion.div
        aria-hidden="true"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 44, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
      />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-100">PRIMUS - Key Modules</p>
          <h2 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">Comprehensive HRMS Functionality</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/80 md:text-lg md:leading-8">
            A complete HRMS platform covering payroll, performance, employee self-service, compliance, approvals, security, grievance handling, and daily workforce operations.
          </p>
        </div>

        <div className="group relative mt-12 overflow-hidden [perspective:1800px] md:mt-16">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-[#0000FF] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-[#0000FF] to-transparent" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 58, repeat: Infinity, ease: "linear" }}
            className="flex w-max gap-6 px-3 py-8 group-hover:[animation-play-state:paused]"
          >
            {slidingModules.map((module, index) => {
              const Icon = module.icon;
              return (
                <motion.article
                  key={`${module.title}-${index}`}
                  whileHover={{ y: -12, scale: 1.06 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="relative flex h-[260px] w-[min(82vw,340px)] shrink-0 flex-col justify-between overflow-hidden rounded-[1.7rem] border border-white/18 bg-white/12 p-6 text-white shadow-[0_28px_90px_rgba(0,0,0,0.24)] backdrop-blur-xl md:h-[280px] md:w-[380px] md:p-7"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),transparent_45%,rgba(77,159,255,0.12))]" />
                  <span className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
                  <div className="relative flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/18 bg-white/16 text-cyan-100">
                      <Icon size={27} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.24em] text-blue-50/80">Module {String((index % modules.length) + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="relative">
                    <h3 className="text-2xl font-bold leading-tight">{module.title}</h3>
                    <p className="mt-4 text-base leading-7 text-white/82">{module.description}</p>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
