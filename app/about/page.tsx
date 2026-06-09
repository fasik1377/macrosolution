"use client";

import { motion } from "framer-motion";
import { CheckCircle, Goal, Lightbulb, ShieldCheck, Users } from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Page3DHero from "@/components/Page3DHero";
import { fadeUp, stagger } from "@/components/motion";

const values = [
  {
    title: "Practical Innovation",
    text: "We shape technology around real daily work, not around unnecessary complexity.",
    icon: Lightbulb,
  },
  {
    title: "Business Focus",
    text: "Every solution is designed to improve productivity, visibility, competitiveness, and control.",
    icon: Goal,
  },
  {
    title: "Reliable Support",
    text: "Implementation, training, maintenance, and technical guidance stay close to your team.",
    icon: ShieldCheck,
  },
];

const highlights = [
  "Company registered under the laws of Mauritius.",
  "Mission: design, create, and implement world class IT management software.",
  "Vision: become one of the leading software and IT solutions companies in the region.",
  "Comprehensive and cost effective IT services for growing businesses.",
];

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden bg-background text-gray-900">
      <Navbar />
      <Page3DHero
        eyebrow="About Macro Solution"
        title="User friendly applications at affordable prices."
        description="Macro Solution helps organizations realize their business visions and goals through innovative, high quality, customized IT solutions built for practical operations."
        tone="services"
      />

      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_22%,rgba(11,94,215,0.12),transparent_24%),radial-gradient(circle_at_88%_12%,rgba(77,159,255,0.14),transparent_26%),linear-gradient(180deg,#F5F9FF_0%,#ffffff_100%)]" />
        <div className="container relative z-10 mx-auto grid items-center gap-14 px-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <p className="font-semibold uppercase tracking-[0.28em] text-brand-blue">Who we are</p>
            <h2 className="mt-5 text-3xl font-bold leading-tight md:text-4xl">
              A technology partner for productive, competitive, and innovative businesses.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We deliver ERP, POS, payroll, HRMS, mobile, web, cloud, document management, security, hardware, and custom software solutions under one practical delivery team.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 36, rotateX: 6 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            whileHover={{ y: -12, rotateY: -8, rotateX: 4, scale: 1.025 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-3xl border border-white/30 bg-gradient-to-br from-dark-header via-brand-blue to-button-blue p-8 text-white shadow-[0_38px_110px_rgba(0,40,104,0.28)] [transform-style:preserve-3d]"
          >
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-hover-blue/25 blur-3xl transition duration-500 group-hover:scale-125" />
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
            <motion.div
              animate={{ rotateY: [0, 14, 0, -14, 0], y: [0, -5, 0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/25 bg-white/15 shadow-2xl backdrop-blur [transform:translateZ(36px)]"
            >
              <Users size={34} />
            </motion.div>
            <h3 className="mt-8 text-3xl font-bold [transform:translateZ(28px)]">Built around business flow</h3>
            <div className="mt-8 space-y-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur [transform:translateZ(20px)]">
                  <CheckCircle className="mt-1 shrink-0 text-hover-blue" size={20} />
                  <p className="leading-7 text-blue-50">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-dark-header py-28 text-white">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" variants={stagger} viewport={{ once: true }} className="grid gap-6 md:grid-cols-3">
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -12, rotateX: 5, rotateY: -4, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-8 shadow-[0_28px_80px_rgba(0,0,0,0.18)] backdrop-blur [transform-style:preserve-3d]"
                >
                  <div className="absolute right-0 top-0 h-24 w-24 bg-hover-blue/15 blur-2xl transition group-hover:scale-125" />
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 [transform:translateZ(30px)]">
                    <Icon className="text-hover-blue" size={30} />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold [transform:translateZ(24px)]">{item.title}</h3>
                  <p className="mt-4 leading-7 text-gray-200">{item.text}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
