"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sunny",
      text: "Excellent service. They responded much faster than I had anticipated and I was left with a wide range of offers.",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: 2,
      name: "Jessica",
      text: "The process was seamless, and I got multiple responses within hours. Highly recommended!",
      image: "https://randomuser.me/api/portraits/women/25.jpg",
    },
    {
      id: 3,
      name: "Mark",
      text: "Quick and professional responses. Found exactly what I was looking for!",
      image: "https://randomuser.me/api/portraits/men/30.jpg",
    },
    {
      id: 4,
      name: "Sophia",
      text: "Bark made it incredibly easy to find and connect with professionals in my area!",
      image: "https://randomuser.me/api/portraits/women/50.jpg",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <style jsx>{`
        .container {
          max-width: 900px;
        }

        .testimonial-slider {
          text-align: center;
          position: relative;
        }

        .testimonial-text {
          font-size: 1.5rem;
          font-style: italic;
          color: #333;
          margin-bottom: 15px;
          transition: opacity 0.5s ease-in-out;
        }

        .testimonial-author {
          font-weight: bold;
          color: #444;
          font-size: 1.2rem;
        }

        .user-images {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          margin-bottom: 30px;
          position: relative;
        }

        .user-circle {
          width: 55px;
          height: 55px;
          border-radius: 50%;
          overflow: hidden;
          transition: all 0.4s ease-in-out;
          opacity: 0.6;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        }

        .user-circle img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .active-user {
          width: 100px;
          height: 100px;
          opacity: 1;
          box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
          transform: scale(1.2);
        }

        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #bbb !important;
          opacity: 0.6;
          margin: 5px;
        }

        .swiper-pagination-bullet-active {
          background: #007bff !important;
          width: 12px;
          height: 12px;
          opacity: 1;
        }
      `}</style>

      <div className="container text-center">
        {/* User Images Display */}
        <div className="user-images">
          {testimonials.map((user, index) => (
            <div key={user.id} className={`user-circle ${index === 0 ? "active-user" : ""}`}>
              <img src={user.image} alt={user.name} />
            </div>
          ))}
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
          className="testimonial-slider"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="testimonial-text">{testimonial.text}</div>
              <div className="testimonial-author">{testimonial.name}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
