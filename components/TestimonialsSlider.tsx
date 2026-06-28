"use client";

import { Swiper, SwiperSlide } from "swiper/react";

const testimonials = [
  {
    name: "Mission",
    company: "Macro Solution",
    text: "Design, create, and implement world class IT management software for productive business operations."
  },
  {
    name: "Vision",
    company: "Macro Solution",
    text: "Become one of the leading software and IT solutions companies in the region."
  },
  {
    name: "Promise",
    company: "Macro Solution",
    text: "Deliver user friendly applications at affordable prices, customized around each organization's goals."
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
