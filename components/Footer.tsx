import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dark-header text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Image
              src="/logo.png"
              alt="Macro Solution"
              width={166}
              height={48}
              className="h-12 w-auto object-contain"
            />

            <p className="mt-4 text-gray-400">
              Transforming businesses through innovative software and technology solutions.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-bold">Company</h4>

            <ul className="space-y-3">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/testimonials">Testimonials</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold">Services</h4>

            <ul className="space-y-3 text-gray-400">
              <li>ERP</li>
              <li>POS</li>
              <li>Payroll & HRMS</li>
              <li>Mobile Apps</li>
              <li>Web Apps</li>
              <li>Custom Software</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold">Contact</h4>

            <p className="text-gray-400">info@macrosolution.mu</p>
            <p className="mt-2 text-gray-400">+230 589 006 07</p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8 text-center text-gray-500">
          Copyright 2026 Macro Solution. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
