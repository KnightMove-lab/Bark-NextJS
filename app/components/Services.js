"use client";

import { useState, useEffect } from "react";

export default function Services() {
  const [serviceImages, setServiceImages] = useState({ homeGarden: [] });

  // Dummy Data (Used If No Backend Data Available)
  const dummyServices = {
    homeGarden: [
      {
        id: 1,
        title: "Gardening",
        image:
          "https://thumbs.dreamstime.com/b/man-woman-janitors-cleaners-cleaning-people-working-washing-cleaning-equipmen-set-cleaning-stuff-service-professional-84136749.jpg",
      },
      {
        id: 2,
        title: "House Cleaning",
        image:
          "https://scrubnbubbles.com/wp-content/uploads/2022/05/cleaning-service.jpeg",
      },
      {
        id: 3,
        title: "Painting & Decorating",
        image:
          "https://d18jakcjgoan9.cloudfront.net/s/img/home/painting-decorating.jpg!d=v1NTZ1", // Simulating missing image
      },
    ],
  };

  useEffect(() => {
    console.log("Fetching services...");
    setServiceImages(dummyServices);
  }, []);

  // Fallback image function
  const handleImageError = (e) => {
    if (e.target.src !== "/noimage.jpg") {
      e.target.src = "/noimage.jpg"; // Use fallback image from public directory
    }
  };

  return (
    <section className="py-5 bg-light">
      <style jsx>{`
        .container {
          max-width: 1100px; /* Limits width to 1100px */
        }

        /* Keeps all images the same height */
        .fixed-height-img {
          height: 220px;
          width: 100%;
          object-fit: cover;
          border-radius: 10px;
        }

        /* Title overlay styling */
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

        /* Card hover effect */
        .card {
          position: relative;
          border: none;
          transition: transform 0.3s ease-in-out;
        }

        .card:hover {
          transform: translateY(-5px);
        }
      `}</style>

      <div className="container">
        <h2 className="text-center mb-4">Popular Services</h2>

        {/* Home & Garden Section */}
        <div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3 className="mb-0">Home &amp; Garden</h3>
            <a href="#" className="text-decoration-none">
              View All
            </a>
          </div>

          {/* ✅ Fix: Ensures correct column count */}
          <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
            {serviceImages?.homeGarden?.map((service, index) => (
              <div className="col" key={service.id || index}>
                <div className="card hover-lift">
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
