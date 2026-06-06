"use client";

import { motion } from "framer-motion";
import { Quote, Star, TrendingUp, Users, Workflow } from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Page3DHero from "@/components/Page3DHero";
import AnimatedCounter from "@/components/AnimatedCounter";
import { fadeUp, stagger } from "@/components/motion";

const testimonials = [
  {
    name: "Retail Operations Team",
    company: "Multi-store retailer",
    text: "Crystal POS gave our stores a cleaner daily workflow, faster checkout, and better stock visibility across locations.",
    solution: "Crystal POS",
  },
  {
    name: "Finance Manager",
    company: "Local enterprise",
    text: "Payroll processing became easier to control, with reporting, statutory deductions, and payslips handled in one place.",
    solution: "Payroll & HRMS",
  },
  {
    name: "Business Director",
    company: "Service company",
    text: "Macro Solution helped us move from scattered manual processes to connected software that our team can actually use.",
    solution: "ERP",
  },
  {
    name: "Operations Lead",
    company: "Fuel industry",
    text: "PETROSOFT gave us a practical way to manage petrol bunk operations with better visibility and less manual follow-up.",
    solution: "PETROSOFT",
  },
  {
    name: "Administration Team",
    company: "Growing organization",
    text: "The document management implementation made file access, tracking, and internal collaboration much more reliable.",
    solution: "DMS",
  },
  {
    name: "Managing Partner",
    company: "Custom software client",
    text: "Their team understood our workflow and shaped a custom application around the way our business really operates.",
    solution: "Custom Software",
  },
];

const metrics = [
  { value: 75, label: "Projects delivered", icon: Workflow },
  { value: 75, label: "Happy clients", icon: Users },
  { value: 100, label: "Client focus", icon: TrendingUp },
];

export default function TestimonialsPage() {
  return (
    <main className="overflow-x-hidden bg-white text-gray-900">
      <Navbar />
      <Page3DHero
        eyebrow="Client Stories"
        title="Technology that teams enjoy using."
        description="Explore the kind of outcomes Macro Solution builds toward: clearer operations, easier daily work, stronger control, and business systems that support growth."
        tone="testimonials"
      />

      <section className="py-28">
        <div className="container mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-3"
          >
            {metrics.map((metric) => {
              const Icon = metric.icon;

              return (
                <motion.div
                  key={metric.label}
                  variants={fadeUp}
                  whileHover={{ y: -10, rotateX: 5 }}
                  className="rounded-2xl border border-orange-100 bg-[#f8f8f5] p-8 text-center shadow-lg"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                    <Icon size={28} />
                  </div>
                  <div className="mt-6 text-5xl font-bold">
                    <AnimatedCounter end={metric.value} suffix={metric.value === 100 ? "%" : "+"} />
                  </div>
                  <p className="mt-3 font-semibold text-gray-600">{metric.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-50 py-28">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }} className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-[0.28em] text-orange-600">Testimonials</p>
            <h2 className="mt-5 text-5xl font-bold">Built for real operational wins</h2>
          </motion.div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <motion.article
                key={`${item.company}-${item.solution}`}
                initial={{ opacity: 0, y: 35, rotateX: 8 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                whileHover={{ y: -12, rotateY: index % 2 === 0 ? 4 : -4 }}
                transition={{ duration: 0.65, delay: index * 0.04 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-lg"
              >
                <div className="absolute right-0 top-0 h-24 w-24 bg-orange-500/10 blur-2xl" />
                <Quote className="text-orange-500" size={34} />
                <p className="mt-6 text-lg leading-8 text-gray-700">&quot;{item.text}&quot;</p>
                <div className="mt-8 flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{item.company}</p>
                  </div>
                  <div className="flex text-orange-500">
                    {[0, 1, 2, 3, 4].map((star) => (
                      <Star key={star} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
                <p className="mt-5 inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-700">
                  {item.solution}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-950 py-28 text-white">
        <div className="container mx-auto grid items-center gap-10 px-6 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="font-semibold uppercase tracking-[0.28em] text-orange-400">Your Success Story</p>
            <h2 className="mt-5 text-5xl font-bold">Let your systems become a business advantage.</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ rotateY: -5, scale: 1.02 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur"
          >
            <p className="text-xl leading-9 text-gray-200">
              Macro Solution combines business software, infrastructure support, and practical implementation so your team can move faster with less friction.
            </p>
            <a href="/contact" className="mt-8 inline-flex rounded-full bg-orange-500 px-7 py-4 font-bold text-white transition hover:bg-orange-600">
              Start a project
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
