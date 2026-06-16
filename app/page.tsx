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
import SoftwareScrollScene from "@/components/SoftwareScrollScene";

import { stagger } from "@/components/motion";
import { ArrowRight } from "lucide-react";

const services = [
  { title: "Enterprise Resource Planning", icon: Database, description: "End-to-end ERP solutions for business sectors that need connected finance, stock, sales, and operations." },
  { title: "POS", icon: Cpu, description: "Easy-to-use, highly customizable point-of-sale software for small, medium, single-store, and multi-store retailers." },
  { title: "Payroll & HR Software", icon: Users, description: "Payroll, PAYE, CSG, NSF, payslips, leave, time, and attendance workflows built for Mauritius compliance." },
  { title: "Mobile Engineering", icon: Smartphone, description: "Cost-effective iOS, Android, and Windows mobile applications that help teams work from anywhere." },
  { title: "Web Application Development", icon: Globe, description: "Fast, maintainable web platforms for portals, dashboards, e-commerce, and internal business tools." },
  { title: "Custom Software Development", icon: Code2, description: "Tailor-made business systems built around your workflows, users, and operational edge cases." },
  { title: "Cloud & DMS", icon: Cloud, description: "Affordable implementation and support for cloud systems, hosting, and document management." },
  { title: "IT Security & Networks", icon: Shield, description: "End-to-end data protection, infrastructure security, compliance, hardware, and network solutions." },
];

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-background text-gray-900">

      <Navbar />
      <section className="relative min-h-screen overflow-hidden bg-background/72 pt-28 text-gray-950">
        <div className="absolute inset-0 opacity-100">
          <SoftwareScrollScene stage="website" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_16%,rgba(11,94,215,0.08),transparent_24%),radial-gradient(circle_at_84%_10%,rgba(77,159,255,0.08),transparent_26%),linear-gradient(180deg,rgba(245,249,255,0.3)_0%,rgba(255,255,255,0.14)_54%,rgba(0,40,104,0.1)_100%)]" />
        <div className="container relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] items-center px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-3xl rounded-3xl border border-white/38 bg-white/32 p-8 text-left shadow-[0_30px_100px_rgba(15,23,42,0.12)] backdrop-blur-[4px] md:p-12"
          >
            <p className="font-semibold uppercase tracking-[0.28em] text-brand-blue">
              Macro Solution Mauritius
            </p>
            <h1 className="mt-5 bg-gradient-to-r from-dark-header via-brand-blue to-dark-header bg-clip-text text-4xl font-bold leading-[1.08] text-transparent md:text-5xl lg:text-6xl">
              Intelligent systems with a more dynamic digital presence.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-700 md:text-xl">
              User friendly ERP, POS, Payroll, HR, mobile, cloud, security, and custom software
              solutions built for productive, competitive, and innovative businesses.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#products"
                className="inline-flex items-center gap-2 rounded-full bg-button-blue px-7 py-4 font-semibold text-white transition hover:bg-hover-blue"
              >
                View products
                <ArrowRight size={18} />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-white/70 px-7 py-4 font-semibold backdrop-blur transition hover:border-hover-blue hover:text-button-blue"
              >
                Contact us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative min-h-[130vh] overflow-hidden bg-[linear-gradient(180deg,rgba(0,40,104,0.78)_0%,rgba(7,27,61,0.62)_48%,rgba(245,249,255,0.34)_100%)] text-white">
        <div className="absolute inset-0 opacity-100">
          <SoftwareScrollScene stage="mobile" />
        </div>
        <div className="sticky top-0 flex min-h-screen items-center py-24">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-full bg-[linear-gradient(90deg,rgba(0,40,104,0.56)_0%,rgba(0,40,104,0.38)_34%,rgba(7,27,61,0.16)_58%,transparent_82%)] lg:w-[52%]" />
          <div className="container relative z-10 mx-auto grid items-center gap-12 px-6 lg:grid-cols-[0.82fr_1.18fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.75 }}
              className="relative max-w-xl rounded-2xl border border-white/16 bg-dark-header/38 p-7 shadow-[0_28px_90px_rgba(0,0,0,0.2)] backdrop-blur-[5px] md:p-8 lg:bg-dark-header/32"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-hover-blue">
                Product engineering flow
              </p>
              <h2 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
                Website and mobile apps built from one connected system.
              </h2>
              <p className="mt-6 text-lg leading-8 text-blue-100">
                Scroll to see the dashboard, mobile app, application logic, and cloud layer separate
                into their roles, then integrate into one software experience.
              </p>
            </motion.div>
            <div className="min-h-[520px]" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative overflow-hidden py-40">
        <div className="absolute inset-0 opacity-100">
          <SoftwareScrollScene stage="desktopErp" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_24%,rgba(11,94,215,0.08),transparent_24%),radial-gradient(circle_at_88%_12%,rgba(77,159,255,0.1),transparent_26%),linear-gradient(180deg,rgba(245,249,255,0.38)_0%,rgba(255,255,255,0.2)_100%)]" />
        <div className="container relative z-10 mx-auto grid items-center gap-20 px-6 lg:grid-cols-2">

          <div className="rounded-3xl border border-white/45 bg-white/42 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-[6px] md:p-10">
            <span className="text-brand-blue font-semibold tracking-widest uppercase">
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
                  <CheckCircle className="text-button-blue" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={false}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 1 }}
            className="relative rounded-3xl border border-white/30 bg-[linear-gradient(145deg,rgba(8,59,138,0.54),rgba(11,94,215,0.42))] p-12 text-white shadow-[0_40px_120px_rgba(0,40,104,0.18)] transform perspective-1000 overflow-hidden backdrop-blur-[5px]"
          >
            <div className="absolute -right-10 -top-8 h-36 w-36 rounded-full bg-white/12 blur-2xl" />
            <div className="absolute -bottom-12 -left-8 h-40 w-40 rounded-full bg-black/10 blur-3xl" />
            <h3 className="text-4xl font-bold">
              Future-Ready Technology Stack
            </h3>
            <p className="mt-6 text-blue-100">
              ERP, POS, Payroll, HRMS, mobile apps, DMS, RPA, security, hardware, and fuel industry systems under one technology partner.
            </p>
          </motion.div>

        </div>
      </section>

      {/* STATS */}
      <section className="relative overflow-hidden bg-[linear-gradient(110deg,rgba(8,59,138,0.86)_0%,rgba(11,94,215,0.74)_38%,rgba(0,40,104,0.88)_100%)] py-32 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.16),transparent_20%),radial-gradient(circle_at_82%_72%,rgba(77,159,255,0.18),transparent_22%)]" />

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
            <motion.div key={i} whileHover={{ scale: 1.1 }}>
              <div className="text-4xl font-bold md:text-5xl">
                <AnimatedCounter end={item.value} suffix="+" />
              </div>
              <p className="mt-3">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>

      </section>

      {/* SERVICES */}
      <section id="services" className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(245,249,255,0.7)_0%,rgba(255,255,255,0.58)_100%)] py-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(11,94,215,0.1),transparent_24%),radial-gradient(circle_at_86%_14%,rgba(77,159,255,0.12),transparent_28%)]" />
        <div className="container relative z-10 mx-auto px-6">

          <div className="mx-auto mb-20 max-w-3xl rounded-3xl border border-white/65 bg-white/72 p-8 text-center shadow-[0_24px_70px_rgba(15,23,42,0.07)] backdrop-blur-md">
            <h2 className="text-3xl font-bold md:text-4xl">Technology Solutions</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">A broader software and IT capability set for retail, operations, service delivery, and digital product teams.</p>
          </div>

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
                  whileHover={{
                    y: -15,
                    scale: 1.03,
                  }}
                  className="
                    group
                    relative
                    rounded-3xl
                    bg-white/82
                    p-10
                    shadow-[0_22px_60px_rgba(15,23,42,0.08)]
                    border border-white/70
                    backdrop-blur
                    transition-all
                    duration-500
                    hover:shadow-[0_25px_80px_rgba(77,159,255,0.25)]
                  "
                >
                  <div className="absolute top-0 right-0 h-24 w-24 bg-button-blue/10 blur-2xl rounded-full" />

                  <Icon className="text-button-blue mb-6" size={34} />

                  <h3 className="text-2xl font-bold">{s.title}</h3>
                  <p className="mt-4 text-gray-600">{s.description}</p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="relative overflow-hidden bg-white/62 py-40 backdrop-blur-[1px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_14%,rgba(11,94,215,0.08),transparent_24%),radial-gradient(circle_at_12%_76%,rgba(77,159,255,0.08),transparent_24%)]" />
        <div className="container relative z-10 mx-auto px-6">
          <ProductCarousel />
        </div>
      </section>

      {/* WHY US */}
      <section className="relative overflow-hidden bg-[linear-gradient(160deg,rgba(0,40,104,0.88)_0%,rgba(8,59,138,0.78)_55%,rgba(11,94,215,0.72)_100%)] py-40 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(77,159,255,0.16),transparent_22%),radial-gradient(circle_at_86%_22%,rgba(255,255,255,0.08),transparent_24%)]" />
        <div className="container relative z-10 mx-auto px-6 text-center">
          <h2 className="mb-20 text-3xl font-bold md:text-4xl">Why Choose Us</h2>

          <div className="grid md:grid-cols-3 gap-10">
            {["Innovation", "Affordability", "Customization"].map((t) => (
              <motion.div
                key={t}
                whileHover={{ scale: 1.05 }}
                className="bg-dark-header/44 p-10 rounded-3xl backdrop-blur-lg border border-white/14"
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
      <section className="relative overflow-hidden bg-background/66 py-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(11,94,215,0.08),transparent_20%),radial-gradient(circle_at_88%_80%,rgba(77,159,255,0.08),transparent_22%)]" />
        <div className="container relative z-10 mx-auto px-6">
          <TestimonialsSlider />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative overflow-hidden bg-[linear-gradient(135deg,rgba(8,59,138,0.86)_0%,rgba(11,94,215,0.76)_45%,rgba(0,40,104,0.9)_100%)] py-40 text-center text-white">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-white/10 blur-3xl rounded-full" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-white/10 blur-3xl rounded-full" />

        <div className="container mx-auto px-6 relative">
          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to Transform Your Business?
          </h2>

          <p className="mt-6 text-xl max-w-2xl mx-auto">
            Let&apos;s build intelligent systems that scale your business.
          </p>

          <a href="/contact" className="mt-10 inline-flex bg-white text-button-blue px-10 py-4 rounded-full font-bold hover:scale-105 hover:text-hover-blue transition">
            Contact Us
          </a>
        </div>
    </section>
      <Footer />

    </main>
  );
}
