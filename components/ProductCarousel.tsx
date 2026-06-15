"use client";

import { Swiper, SwiperSlide } from "swiper/react";

const products = [
  {
    title: "POS",
    description: "A simple, highly customizable POS system for small and medium-sized businesses, from single stores to multi-store retail.",
  },
  {
    title: "Payroll & HR Management",
    description: "Automates payroll tasks with PAYE, CSG, NSF, customized payslips, reports, leave, time, and attendance management.",
  },
  {
    title: "Optical POS",
    description: "POS, CRM, inventory, stock keeping, and invoicing software built for optical retail stores.",
  },
  {
    title: "Enterprise Resource Planning",
    description: "End-to-end ERP applications that connect business functions and improve operational visibility.",
  },
  {
    title: "Car Rental Management",
    description: "Cloud-based software designed to automate the management of vehicle rental businesses.",
  },
  {
    title: "PETROSOFT",
    description: "Cloud-based petrol bunk management software covering the core workflows of fuel industry operations.",
  },
  {
    title: "Document Management System",
    description: "Affordable licensing, implementation, and support packages for small, medium, and large organizations.",
  },
  {
    title: "Biometric Time & Attendance",
    description: "Fingerprint-based attendance systems using recognized biometric devices and reliable attendance control.",
  },
];

export default function ProductCarousel() {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      }}
    >
      {products.map((product, index) => (
        <SwiperSlide key={product.title}>
          <div className="group overflow-hidden rounded-3xl bg-white shadow-lg">
            <div className="relative h-64 overflow-hidden bg-background">
              <div className="absolute left-1/2 top-16 h-36 w-52 -translate-x-1/2 rotate-[-12deg] rounded-2xl bg-hover-blue shadow-2xl transition duration-500 group-hover:rotate-[-6deg]" />
              <div className="absolute left-1/2 top-10 h-36 w-52 -translate-x-[35%] rotate-[10deg] rounded-2xl bg-button-blue shadow-2xl transition duration-500 group-hover:translate-y-3 group-hover:rotate-[5deg]" />
              <div className="absolute left-1/2 top-20 flex h-36 w-52 -translate-x-[60%] rotate-[-2deg] items-center justify-center rounded-2xl bg-dark-header text-4xl font-bold text-white shadow-2xl transition duration-500 group-hover:-translate-y-2">
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold">{product.title}</h3>

              <p className="mt-4 text-gray-600">{product.description}</p>

              <button className="mt-5 font-semibold text-button-blue transition hover:text-hover-blue">
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
