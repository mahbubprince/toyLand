const slides = [
  { id: 1, img: "/img-1.jpg", name: "Toy 1" },
  { id: 2, img: "/img-2.jpg", name: "Toy 2" },
  { id: 4, img: "/img-4.jpg", name: "Toy 4" },
  { id: 12, img: "/img-12.jpg", name: "Toy 12" },
];

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

export default function Slider() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{ clickable: true }}
      navigation={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Navigation, Autoplay]}
      className="mySwiper"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <img
            src={slide.img}
            alt={slide.name}
            className="w-full h-[600px] object-cover rounded-lg"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
