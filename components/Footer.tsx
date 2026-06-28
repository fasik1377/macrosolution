"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Globe2, Mail, Phone } from "lucide-react";
import DataNetworkBackground from "@/components/DataNetworkBackground";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

const contactItems = [
  { icon: Mail, label: "info@macrosolution.mu", href: "mailto:info@macrosolution.mu" },
  { icon: Phone, label: "+230 5768 0610", href: "tel:+23057680610" },
  { icon: Phone, label: "+230 5763 2872", href: "tel:+23057632872" },
  { icon: Globe2, label: "www.macrosolution.mu", href: "https://www.macrosolution.mu" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#031230] text-white">
      <DataNetworkBackground variant="dark" />

      <div className="container relative z-10 mx-auto px-6 py-14 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [0, 2, 0, -2, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
              className="mb-6 inline-flex rounded-[1.75rem] border border-white/12 bg-white/8 p-4 backdrop-blur-md"
            >
              <Image
                src="/PRIMUS LOGO.png"
                alt="PRIMUS secondary logo"
                width={150}
                height={60}
                className="h-auto w-32 object-contain"
              />
            </motion.div>

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/65">
              Let&apos;s Build the Future Together
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight md:text-5xl">
              Macro Solution Ltd - Your Technology Partner in Mauritius
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    whileHover={{ y: -3, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/6 px-4 py-4 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/10"
                  >
                    <Icon size={18} className="shrink-0 text-cyan-300" />
                    <span className="text-sm text-white/90">{item.label}</span>
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/6 p-7 backdrop-blur-md">
            <div className="flex flex-wrap gap-3">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/85 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <p className="mt-8 text-sm leading-7 text-white/65">
              Copyright 2026 Macro Solution. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}