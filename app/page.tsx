"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Smartphone,
  Database,
  Cloud,
  Cpu,
  Users,
  Globe,
  Code2,
  CheckCircle,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCarousel from "@/components/ProductCarousel";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import AnimatedCounter from "@/components/AnimatedCounter";
import Macro3DHero from "@/components/Macro3DHero";

import { fadeUp, stagger } from "@/components/motion";

const services = [
  { title: "Enterprise Resource Planning", icon: Database, description: "End-to-end ERP solutions for business sectors that need connected finance, stock, sales, and operations." },
  { title: "Crystal POS", icon: Cpu, description: "Easy-to-use, highly customizable point-of-sale software for small, medium, single-store, and multi-store retailers." },
  { title: "Payroll & HR Software", icon: Users, description: "Payroll, PAYE, CSG, NSF, payslips, leave, time, and attendance workflows built for Mauritius compliance." },
  { title: "Mobile Engineering", icon: Smartphone, description: "Cost-effective iOS, Android, and Windows mobile applications that help teams work from anywhere." },
  { title: "Web Application Development", icon: Globe, description: "Fast, maintainable web platforms for portals, dashboards, e-commerce, and internal business tools." },
  { title: "Custom Software Development", icon: Code2, description: "Tailor-made business systems built around your workflows, users, and operational edge cases." },
  { title: "Cloud & DMS", icon: Cloud, description: "Affordable implementation and support for cloud systems, hosting, and document management." },
  { title: "IT Security & Networks", icon: Shield, description: "End-to-end data protection, infrastructure security, compliance, hardware, and network solutions." },
];

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-white text-gray-900">

      <Navbar />
      <Macro3DHero />

      {/* ABOUT */}
      <section id="about" className="relative overflow-hidden py-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_24%,rgba(249,115,22,0.12),transparent_24%),radial-gradient(circle_at_88%_12%,rgba(56,189,248,0.14),transparent_26%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]" />
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <span className="text-orange-600 font-semibold tracking-widest uppercase">
              About Macro Solution
            </span>

            <h2 className="mt-6 text-3xl font-bold leading-tight md:text-4xl">
              User friendly applications at affordable prices
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Macro Solution is a company registered under the laws of Mauritius. We help organizations realize their business visions and goals through innovative, high quality, customized IT solutions.
            </p>

            <div className="mt-10 space-y-4">
              {[
                "Mission: design, create, and implement world class IT management software.",
                "Vision: become one of the leading software and IT solutions companies in the region.",
                "Solutions focused on productivity, competitiveness, and innovation.",
                "Comprehensive and cost effective IT services for growing businesses.",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="text-orange-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl border border-white/40 bg-[linear-gradient(145deg,rgba(249,115,22,0.95),rgba(29,78,216,0.86))] p-12 text-white shadow-[0_40px_120px_rgba(15,23,42,0.18)] transform perspective-1000 overflow-hidden"
          >
            <div className="absolute -right-10 -top-8 h-36 w-36 rounded-full bg-white/12 blur-2xl" />
            <div className="absolute -bottom-12 -left-8 h-40 w-40 rounded-full bg-black/10 blur-3xl" />
            <h3 className="text-4xl font-bold">
              Future-Ready Technology Stack
            </h3>
            <p className="mt-6 text-orange-100">
              ERP, POS, Payroll, HRMS, mobile apps, DMS, RPA, security, hardware, and fuel industry systems under one technology partner.
            </p>
          </motion.div>

        </div>
      </section>

      {/* STATS */}
      <section className="relative overflow-hidden bg-[linear-gradient(110deg,#eb6a1f_0%,#f58220_32%,#0f172a_100%)] py-32 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_20%),radial-gradient(circle_at_82%_72%,rgba(56,189,248,0.18),transparent_22%)]" />

        <motion.div
          className="container mx-auto px-6 grid md:grid-cols-4 gap-10 text-center"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {[
            { value: 75, label: "Projects Completed" },
            { value: 75, label: "Happy Clients" },
            { value: 15, label: "Business Solutions" },
            { value: 100, label: "Customer Satisfaction" },
          ].map((item, i) => (
            <motion.div key={i} variants={fadeUp} whileHover={{ scale: 1.1 }}>
              <div className="text-4xl font-bold md:text-5xl">
                <AnimatedCounter end={item.value} suffix="+" />
              </div>
              <p className="mt-3">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>

      </section>

      {/* SERVICES */}
      <section id="services" className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fafc_0%,#fff7ed_100%)] py-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(249,115,22,0.12),transparent_24%),radial-gradient(circle_at_86%_14%,rgba(14,165,233,0.12),transparent_28%)]" />
        <div className="container mx-auto px-6">

          <motion.div className="text-center mb-20" initial="hidden" whileInView="show" variants={fadeUp}>
            <h2 className="text-3xl font-bold md:text-4xl">Technology Solutions</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">A broader software and IT capability set for retail, operations, service delivery, and digital product teams.</p>
          </motion.div>

          <motion.div
            className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            variants={stagger}
            initial="hidden"
            whileInView="show"
          >
            {services.map((s, i) => {
              const Icon = s.icon;

              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{
                    y: -15,
                    rotateX: 8,
                    scale: 1.03,
                  }}
                  className="
                    group
                    relative
                    rounded-3xl
                    bg-white/88
                    p-10
                    shadow-[0_22px_60px_rgba(15,23,42,0.08)]
                    border border-white/70
                    backdrop-blur
                    transition-all
                    duration-500
                    hover:shadow-[0_25px_80px_rgba(249,115,22,0.25)]
                  "
                >
                  <div className="absolute top-0 right-0 h-24 w-24 bg-orange-500/10 blur-2xl rounded-full" />

                  <Icon className="text-orange-600 mb-6" size={34} />

                  <h3 className="text-2xl font-bold">{s.title}</h3>
                  <p className="mt-4 text-gray-600">{s.description}</p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="relative overflow-hidden bg-white py-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_14%,rgba(37,99,235,0.08),transparent_24%),radial-gradient(circle_at_12%_76%,rgba(249,115,22,0.08),transparent_24%)]" />
        <div className="container mx-auto px-6">
          <ProductCarousel />
        </div>
      </section>

      {/* WHY US */}
      <section className="relative overflow-hidden bg-[linear-gradient(160deg,#0f172a_0%,#111827_55%,#1d4ed8_100%)] py-40 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(249,115,22,0.18),transparent_22%),radial-gradient(circle_at_86%_22%,rgba(255,255,255,0.08),transparent_24%)]" />
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-20 text-3xl font-bold md:text-4xl">Why Choose Us</h2>

          <div className="grid md:grid-cols-3 gap-10">
            {["Innovation", "Affordability", "Customization"].map((t) => (
              <motion.div
                key={t}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-white/10 p-10 rounded-3xl backdrop-blur-lg border border-white/10"
              >
                <h3 className="text-3xl font-bold">{t}</h3>
                <p className="mt-4 text-gray-300">
                  Practical systems designed around your operations, budget, and growth plans.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative overflow-hidden bg-[#f8fafc] py-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(249,115,22,0.08),transparent_20%),radial-gradient(circle_at_88%_80%,rgba(56,189,248,0.08),transparent_22%)]" />
        <div className="container mx-auto px-6">
          <TestimonialsSlider />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative overflow-hidden bg-[linear-gradient(135deg,#eb6a1f_0%,#f97316_35%,#2563eb_100%)] py-40 text-center text-white">

        <div className="absolute -top-40 -left-40 w-96 h-96 bg-white/10 blur-3xl rounded-full" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-white/10 blur-3xl rounded-full" />

        <div className="container mx-auto px-6 relative">
          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to Transform Your Business?
          </h2>

          <p className="mt-6 text-xl max-w-2xl mx-auto">
            Let&apos;s build intelligent systems that scale your business.
          </p>

          <a href="/contact" className="mt-10 inline-flex bg-white text-orange-600 px-10 py-4 rounded-full font-bold hover:scale-105 transition">
            Contact Us
          </a>
        </div>
    </section>
      <Footer />

    </main>
  );
}
