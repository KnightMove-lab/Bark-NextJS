"use client";

export default function Discover() {
  return (
    <section className="py-5">
      <div className="container text-center">
        <h2 className="mb-4 fw-bold">Discover</h2>
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-6 g-4 justify-content-center">
          {[
            { title: "Home & Garden", image: "services-homegarden.png" },
            { title: "Health & Wellbeing", image: "services-healthwellbeing.png" },
            { title: "Weddings & Events", image: "services-weddingsevents.png" },
            { title: "Business Services", image: "services-businessservices.png" },
            { title: "Lessons & Training", image: "services-lessonstraining.png" },
            { title: "Other Services", image: "services-otherservices.png" },
          ].map((service, index) => (
            <div key={index} className="col">
              <div className="discover-item d-flex flex-column align-items-center">
                <img
                  src={`https://d18jakcjgoan9.cloudfront.net/s/img/images/material-icons/${service.image}!d=2M4f26`}
                  alt={service.title}
                  className="discover-icon"
                />
                <p className="mb-0 discover-text">{service.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Styling for Hover Effects */}
      <style jsx>{`
        .discover-item {
          padding: 15px;
          border-radius: 12px;
          transition: all 0.3s ease-in-out;
        }

        .discover-icon {
          width: 50px;
          height: 50px;
          transition: transform 0.3s ease-in-out;
        }

        .discover-text {
          font-size: 15px;
          font-weight: 600;
          color: #1a2a6c;
          transition: color 0.3s ease-in-out;
        }

        /* Hover Effect */
        .discover-item:hover {
          background: #f8f9fa;
          transform: translateY(-5px);
          box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
          cursor:pointer;
        }

        .discover-item:hover .discover-text {
          color: #0056b3;
        }
      `}</style>
    </section>
  );
}
