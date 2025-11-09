 const slides = [
  { id: 1, img: "/img-1.jpg", name: "Toy 1" },
  { id: 2, img: "/img-2.jpg", name: "Toy 2" },
//   { id: 3, img: "/img-3.jpg", name: "Toy 3" },
  { id: 4, img: "/img-4.jpg", name: "Toy 4" },
//   { id: 5, img: "/img-5.jpg", name: "Toy 5" },
//   { id: 6, img: "/img-6.jpg", name: "Toy 6" },
//   { id: 7, img: "/img-7.jpg", name: "Toy 7" },
//   { id: 8, img: "/img-8.jpg", name: "Toy 8" },
//   { id: 9, img: "/img-9.jpg", name: "Toy 9" },
//   { id: 10, img: "/img-10.jpg", name: "Toy 10" },
//   { id: 11, img: "/img-11.jpg", name: "Toy 11" },
  { id: 12, img: "/img-12.jpg", name: "Toy 12" },
//   { id: 13, img: "/img-13.jpg", name: "Toy 13" },
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
// import { slides } from './toysData';

export default function Slider() {
  return (
    

    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{ clickable: true }}
      navigation={true}
      autoplay={{
        delay: 3000, // 3 seconds per slide
        disableOnInteraction: false, // keeps autoplay even after user interacts
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
          {/* <h3 className="text-center mt-2 font-semibold object-fill">
            {slide.name}
          </h3> */}
        </SwiperSlide>
         
      ))}
    </Swiper>
  );
}

// Slider.jsx
