"use client";

import { useState, useEffect } from "react";

export default function WeddingEvents() {
  const [serviceImages, setServiceImages] = useState({ weddingEvents: [] });

  // Dummy Data (Used If No Backend Data Available)
  const dummyServices = {
    weddingEvents: [
      {
        id: 1,
        title: "Wedding Photography",
        image: "https://d18jakcjgoan9.cloudfront.net/s/img/home/wedding-photographer.jpg!d=v1NTZ1",
        badge: "Available online",
      },
      {
        id: 2,
        title: "Event Planning",
        image: "https://d18jakcjgoan9.cloudfront.net/s/img/home/dj.jpg!d=v1NTZ1", // Simulating missing image
        badge: "Available online",
      },
      {
        id: 3,
        title: "Catering Services",
        image: "https://d18jakcjgoan9.cloudfront.net/s/img/home/magician.jpg!d=v1NTZ1",
      },
    ],
  };

  useEffect(() => {
    console.log("Fetching Wedding & Events services...");
    setServiceImages(dummyServices); // No backend call, set dummy data immediately
  }, []);

  // ✅ Fallback function for missing images
  const handleImageError = (e) => {
    if (!e.target.dataset.retry) {
      e.target.dataset.retry = "true"; // Prevents infinite loops
      e.target.src = "/noimage.jpg"; // ✅ Directly from /public (No subfolders)
    }
  };

  return (
    <section className="py-5 bg-light">
      <style jsx>
        {`
          .container {
            max-width: 1100px;
          }

          .fixed-height-img {
            height: 220px;
            width: 100%;
            object-fit: cover;
            border-radius: 10px;
          }

          .overlay-title {
            position: absolute;
            bottom: 10px;
            left: 10px;
            background: rgba(0, 0, 0, 0.8);
            color: #fff;
            padding: 5px 10px;
            font-size: 1rem;
            font-weight: bold;
            border-radius: 5px;
          }

          .badge-overlay {
            position: absolute;
            top: 10px;
            right: 10px;
            background: #002aff;
            color: #fff;
            padding: 5px 10px;
            font-size: 0.8rem;
            font-weight: bold;
            border-radius: 5px;
          }

          .card {
            position: relative;
            border: none;
            transition: transform 0.3s ease-in-out;
          }

          .card:hover {
            transform: translateY(-5px);
          }
        `}
      </style>

      <div className="container">

        {/* Wedding & Events Section */}
        <div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3 className="mb-0">Wedding & Events</h3>
            <a href="#" className="text-decoration-none">View All</a>
          </div>

          <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
            {serviceImages?.weddingEvents?.map((service, index) => (
              <div className="col" key={service.id || index}>
                <div className="card hover-lift">
                  {service.badge && <div className="badge-overlay">{service.badge}</div>}
                  <img
                    src={service.image || "/noimage.jpg"}
                    alt={service.title}
                    className="card-img-top fixed-height-img"
                    onError={handleImageError}
                  />
                  <div className="overlay-title">{service.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
