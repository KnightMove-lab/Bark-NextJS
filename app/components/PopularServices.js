"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

export default function PopularServices() {
  const [serviceImages, setServiceImages] = useState([]);

  // Dummy Data (Used If No Backend Data Available)
  const dummyServices = [
    {
      id: 1,
      title: "House Cleaning",
      image: "https://scrubnbubbles.com/wp-content/uploads/2022/05/cleaning-service.jpeg",
    },
    {
      id: 2,
      title: "Web Design",
      image: "https://img.freepik.com/free-photo/web-design-concepts-with-blurred-background_1134-82.jpg",
    },
    {
      id: 3,
      title: "Personal Trainers",
      image: "https://servicemarketwp.imgix.net/wp-content/uploads/2022/09/home-personal-trainer-745x400-1.jpg",
      badge: "Available online",
    },
    {
      id: 4,
      title: "Counselling",
      image: "https://cdn.adu.ac.ae/images-container/images/default-source/adu-new-images/student-councelling-web.jpg?sfvrsn=508f52a6_4",
      badge: "Available online",
    },
    {
      id: 5,
      title: "Accounting",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREiC1g2ohMQW0eRgZ6OvP_O7YpIGn88E1Wgw&s",
      badge: "Available online",
    },
  ];

  // Remove duplicate services
  const uniqueServices = dummyServices.filter(
    (service, index, self) =>
      index === self.findIndex((s) => s.title === service.title)
  );

  // Simulating Fetching Data from Backend
  useEffect(() => {
    async function fetchServices() {
      try {
        console.log("Fetching services...");
        const backendData = null; // Simulating no backend data
        if (backendData) {
          console.log("✅ Backend data found:", backendData);
          setServiceImages(backendData);
        } else {
          console.log("⚠️ No backend data, using dummy data");
          setServiceImages(uniqueServices);
        }
      } catch (error) {
        console.error("❌ Error fetching services:", error);
        setServiceImages(uniqueServices);
      }
    }

    fetchServices();
  }, []);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Popular Services</h2>

        {serviceImages.length === 0 ? (
          <p className="text-center">Loading services...</p>
        ) : (
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            freeMode={true}
            loop={true}
            autoplay={{
              delay: 0, // No pause between loops
              disableOnInteraction: false,
            }}
            speed={12000} // Smooth, slow professional scroll
            modules={[Autoplay, FreeMode]}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
            className="swiper-container"
          >
            {serviceImages.map((service) => (
              <SwiperSlide key={service.id}>
                <div className="image-container">
                  {service.badge && <div className="badge-overlay">{service.badge}</div>}
                  <img src={service.image} className="service-image" alt={service.title} />
                  <div className="image-title">{service.title}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      {/* CSS Styling */}
      <style jsx>{`
        .image-container {
          position: relative;
          width: 100%;
          height: 230px; /* Uniform height for all images */
          overflow: hidden;
          border-radius: 10px;
        }
        .service-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .badge-overlay {
          position: absolute;
          top: 10px;
          right: 10px;
          background: blue;
          color: white;
          padding: 5px 10px;
          border-radius: 5px;
          font-size: 12px;
        }
        .image-title {
          position: absolute;
          bottom: 10px;
          left: 10px;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 5px 10px;
          border-radius: 5px;
          font-weight: bold;
        }
      `}</style>
    </section>
  );
}
