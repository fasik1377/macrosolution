"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="flex w-full items-center justify-between bg-white/82 px-5 py-2.5 backdrop-blur-2xl">
        <motion.div
          initial={{ opacity: 0, y: -14, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          whileHover={{ scale: 1.06 }}
          className="relative [perspective:1100px]"
        >
          <motion.div
            aria-hidden="true"
            animate={{ opacity: [0.18, 0.36, 0.18], scale: [0.92, 1.08, 0.92] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-hover-blue/16 blur-2xl"
          />
          <Link href="/" className="relative flex items-center gap-3" aria-label="Macro Solution home">
            <motion.span
              animate={{
                rotateY: [0, -18, 0, 18, 0],
                rotateX: [0, 8, 0, -6, 0],
                y: [0, -4, 0, 4, 0],
                scale: [1, 1.04, 1, 1.03, 1],
              }}
              transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut" }}
              className="block [transform-style:preserve-3d]"
            >
              <Image
                src="/logo.png"
                alt="Macro Solution"
                width={260}
                height={86}
                priority
                className="h-16 w-auto object-contain drop-shadow-[0_20px_34px_rgba(8,59,138,0.34)] md:h-20"
              />
            </motion.span>
          </Link>
        </motion.div>

        <nav className="hidden items-center gap-1 bg-gradient-to-r from-white via-[#F5F9FF] to-white p-1.5 md:flex">
          {links.map((item, index) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname === item.href;
            const isContact = item.href === "/contact";

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04, duration: 0.38 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`group relative block overflow-hidden px-4 py-2.5 text-sm font-bold transition ${
                    isActive
                      ? "bg-dark-header text-white"
                      : isContact
                        ? "bg-button-blue text-white hover:bg-hover-blue"
                        : "text-gray-700 hover:text-white"
                  }`}
                >
                  {!isActive && !isContact && (
                    <span className="absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-button-blue to-dark-header transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  )}
                  <span className="relative inline-flex items-center gap-1.5">
                    {item.label}
                    {isContact && <ArrowUpRight size={15} />}
                  </span>
                </a>
              </motion.div>
            );
          })}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="bg-white/85 p-3 text-gray-800 md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white/95 md:hidden"
          >
            <div className="flex flex-col gap-3 p-6">
              {links.map((item) => {
                const isActive = item.href === "/" ? pathname === "/" : pathname === item.href;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`px-4 py-3 font-bold transition ${
                      isActive
                        ? "bg-dark-header text-white"
                        : "bg-[#F5F9FF] text-gray-800 hover:bg-button-blue hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
