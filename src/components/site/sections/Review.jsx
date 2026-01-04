"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { Arrow } from "@/components/icons/icons";
import Container from "@/components/site/layout/Container";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Review() {
  return (
    <section>
      <Container>
        <div className="text-center pb-10 md:pb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            <span className="text-[var(--navigation-color)] px-2">98%</span>
            of Users Satisfied
          </h2>
        </div>
        <ReviewSwiper />
      </Container>
    </section>
  );
}

const SwiperData = [
  {
    image: "/images/review/Ellipse-3.png",
    alt: "User 1",
    name: "Sophia Turner",
    designation: "Product Designer",
    description:
      "Amazing experience! The interface is super smooth and the support team responds quickly. I've been using this platform for months now and it continues to exceed my expectations.",
  },
  {
    image: "/images/review/Ellipse-3.png",
    alt: "User 2",
    name: "Michael Brown",
    designation: "Full Stack Developer",
    description:
      "I really enjoyed using this platform. It saved me hours of work every week. The automation features are incredible and the learning curve is minimal.",
  },
  {
    image: "/images/review/Ellipse-3.png",
    alt: "User 3",
    name: "Emma Wilson",
    designation: "Marketing Specialist",
    description:
      "The features are exactly what I needed. Highly recommend it to anyone in digital marketing. The analytics dashboard provides insights I never had before.",
  },
  {
    image: "/images/review/Ellipse-3.png",
    alt: "User 4",
    name: "Daniel Lee",
    designation: "Entrepreneur",
    description:
      "Very useful and reliable service. I was able to grow my business faster thanks to this. The customer support is outstanding and always available when needed.",
  },
  {
    image: "/images/review/Ellipse-3.png",
    alt: "User 5",
    name: "Ava Martinez",
    designation: "Content Creator",
    description:
      "Loved the customization options. Makes my workflow so much more enjoyable! The interface is intuitive and the features are exactly what content creators need.",
  },
];

const ReviewSwiper = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation={{
          prevEl: ".review-prev",
          nextEl: ".review-next",
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2.5 },
          1280: { slidesPerView: 3 },
        }}
        className="!overflow-hidden w-full"
      >
        {SwiperData.map((items, index) => (
          <SwiperSlide key={index}>
            <div className="bordered custom-rounded p-8 h-80 cursor-pointer w-full flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Image
                    width={60}
                    height={60}
                    src={items.image}
                    alt={items.alt}
                    className="rounded-full object-cover bordered"
                  />
                  <div>
                    <h4>
                      {items.name}
                    </h4>
                    <span className="text-[var(--font-color)]/80 text-sm">
                      {items.designation}
                    </span>
                  </div>
                </div>
                <p>
                  "{items.description}"
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <button className="review-prev absolute top-1/2 -translate-y-1/2 left-0 md:left-4 z-20 w-10 h-10 md:w-12 md:h-12 bg-[var(--navigation-color)] cursor-pointer rounded-full flex items-center justify-center">
          <Arrow className="w-5 h-5 rotate-90 fill-[var(--navigation-font-color)]" />
        </button>
        <button className="review-next absolute top-1/2 -translate-y-1/2 right-0 md:right-4 z-20 w-10 h-10 md:w-12 md:h-12 bg-[var(--navigation-color)]  cursor-pointer rounded-full flex items-center justify-center">
          <Arrow className="w-5 h-5 rotate-270 fill-[var(--navigation-font-color)]" />
        </button>
      </Swiper>
    </div>
  );
};
