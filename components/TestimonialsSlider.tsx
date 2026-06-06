"use client";

import { Swiper, SwiperSlide } from "swiper/react";

const testimonials = [
  {
    name: "John Doe",
    company: "ABC Ltd",
    text: "Excellent software and support."
  },
  {
    name: "Sarah Smith",
    company: "XYZ Corp",
    text: "Outstanding digital transformation partner."
  },
  {
    name: "Michael Lee",
    company: "Retail Pro",
    text: "The ERP system changed our business."
  }
];

export default function TestimonialsSlider() {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      loop
    >
      {testimonials.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-10 shadow-lg">
            <p className="text-xl italic">
              &quot;{item.text}&quot;
            </p>

            <h4 className="mt-6 font-bold">
              {item.name}
            </h4>

            <p className="text-gray-500">
              {item.company}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
