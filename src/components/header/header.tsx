"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";



export default function Header() {
  return (
    <div className="relative w-full">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        className="h-[70vh]"
      >
        <SwiperSlide>
          <div className="w-full h-full cursor-pointer max-sm:h-[200px]">
            <Image
              className="h-full w-full"
              src={"/2.jfif"}
              alt={"pic"}
              priority
              height={3000}
              width={2000}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full cursor-pointer max-sm:h-[200px]">
            <Image
              className="h-full w-full"
              src={"/4.jfif"}
              alt={"pic"}
              priority
              height={3000}
              width={2000}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full cursor-pointer max-sm:h-[200px]">
            <Image
              className="h-full w-full"
              src={"/3.jfif"}
              alt={"pic"}
              priority
              height={3000}
              width={2000}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
