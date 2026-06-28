"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { products } from "@/components/companyProfile";

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
        <SwiperSlide key={product.title} className="h-auto">
          <div className="group flex h-full min-h-[520px] flex-col overflow-hidden rounded-3xl bg-white shadow-lg">
            <div className="relative h-64 overflow-hidden bg-background">
              <div className="absolute left-1/2 top-16 h-36 w-52 -translate-x-1/2 rotate-[-12deg] rounded-2xl bg-hover-blue shadow-2xl transition duration-500 group-hover:rotate-[-6deg]" />
              <div className="absolute left-1/2 top-10 h-36 w-52 -translate-x-[35%] rotate-[10deg] rounded-2xl bg-button-blue shadow-2xl transition duration-500 group-hover:translate-y-3 group-hover:rotate-[5deg]" />
              <div className="absolute left-1/2 top-20 flex h-36 w-52 -translate-x-[60%] rotate-[-2deg] items-center justify-center rounded-2xl bg-dark-header text-4xl font-bold text-white shadow-2xl transition duration-500 group-hover:-translate-y-2">
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-2xl font-bold">{product.title}</h3>

              <p className="mt-4 text-gray-600">{product.description}</p>

              <a href="/products" className="mt-auto pt-5 text-left font-semibold text-button-blue transition hover:text-hover-blue">
                Learn More
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
