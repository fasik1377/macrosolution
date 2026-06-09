"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BadgeCheck, Clock, Database, FileText, Fuel, ScanFace, ShoppingCart, Users } from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Page3DHero from "@/components/Page3DHero";
import { fadeUp, stagger } from "@/components/motion";

const products = [
  {
    title: "Crystal POS",
    description: "A simple, highly customizable POS system for small and medium-sized businesses, from single stores to multi-store retail.",
    icon: ShoppingCart,
  },
  {
    title: "Payroll & HR Management",
    description: "Automates PAYE, CSG, NSF, payslips, reports, leave, time, attendance, and employee management.",
    icon: Users,
  },
  {
    title: "Optical POS",
    description: "POS, CRM, inventory, stock keeping, and invoicing software built for optical retail stores.",
    icon: BadgeCheck,
  },
  {
    title: "Enterprise Resource Planning",
    description: "End-to-end ERP applications that connect finance, stock, purchasing, sales, and operations.",
    icon: Database,
  },
  {
    title: "PETROSOFT",
    description: "Cloud-based petrol bunk management software covering core workflows of fuel industry operations.",
    icon: Fuel,
  },
  {
    title: "Document Management System",
    description: "Affordable licensing, implementation, and support for small, medium, and large organizations.",
    icon: FileText,
  },
  {
    title: "Biometric Time & Attendance",
    description: "Fingerprint-based attendance systems using recognized biometric devices and reliable attendance control.",
    icon: ScanFace,
  },
  {
    title: "Car Rental Management",
    description: "Cloud-based software designed to automate the management of vehicle rental businesses.",
    icon: Clock,
  },
];

export default function ProductsPage() {
  return (
    <main className="overflow-x-hidden bg-background text-gray-900">
      <Navbar />
      <Page3DHero
        eyebrow="Products"
        title="Business software products for connected daily operations."
        description="Explore Macro Solution products for retail, payroll, ERP, document management, fuel operations, biometric attendance, and industry-specific workflows."
        tone="services"
      />

      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(11,94,215,0.12),transparent_24%),radial-gradient(circle_at_86%_14%,rgba(77,159,255,0.14),transparent_28%),linear-gradient(180deg,#F5F9FF_0%,#ffffff_100%)]" />
        <div className="container relative z-10 mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }} className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-[0.28em] text-brand-blue">Product suite</p>
            <h2 className="mt-5 text-3xl font-bold md:text-4xl">Tools that improve control, speed, and visibility.</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Each product is shaped to make daily work easier for teams that need cleaner transactions, stronger records, and better operational decisions.
            </p>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {products.map((product, index) => {
              const Icon = product.icon;

              return (
                <motion.article
                  key={product.title}
                  variants={fadeUp}
                  whileHover={{ y: -16, rotateX: 7, rotateY: index % 2 === 0 ? 6 : -6, scale: 1.025 }}
                  className="group relative overflow-hidden rounded-3xl border border-brand-blue/10 bg-white/90 p-8 shadow-[0_26px_76px_rgba(0,40,104,0.13)] backdrop-blur [transform-style:preserve-3d]"
                >
                  <div className="absolute right-0 top-0 h-28 w-28 bg-button-blue/12 blur-2xl transition duration-500 group-hover:scale-150" />
                  <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-hover-blue/70 to-transparent" />
                  <motion.div
                    animate={{ rotateY: [0, 13, 0, -13, 0], y: [0, -4, 0, 4, 0] }}
                    transition={{ duration: 5.5 + index * 0.16, repeat: Infinity, ease: "easeInOut" }}
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-button-blue text-white shadow-[0_18px_45px_rgba(11,94,215,0.28)] [transform:translateZ(34px)]"
                  >
                    <Icon size={28} />
                  </motion.div>
                  <h3 className="mt-6 text-2xl font-bold text-dark-header [transform:translateZ(26px)]">{product.title}</h3>
                  <p className="mt-4 leading-7 text-gray-600">{product.description}</p>
                  <a href="/contact" className="mt-7 inline-flex items-center gap-2 font-bold text-button-blue transition hover:text-hover-blue">
                    Enquire now
                    <ArrowUpRight size={18} />
                  </a>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="bg-dark-header py-28 text-white">
        <div className="container mx-auto grid items-center gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="font-semibold uppercase tracking-[0.28em] text-hover-blue">Implementation</p>
            <h2 className="mt-5 text-3xl font-bold md:text-4xl">Products backed by practical setup, training, and support.</h2>
          </div>
          <motion.div
            whileHover={{ rotateY: -5, rotateX: 3, scale: 1.015 }}
            className="rounded-3xl border border-white/10 bg-white/10 p-8 text-xl leading-9 text-gray-100 shadow-[0_32px_90px_rgba(0,0,0,0.22)] backdrop-blur [transform-style:preserve-3d]"
          >
            Macro Solution helps teams choose, configure, and adopt the right product for their workflow, from first discovery through deployment and ongoing support.
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
