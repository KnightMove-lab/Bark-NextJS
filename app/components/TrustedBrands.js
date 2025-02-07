"use client";

import { useState, useEffect } from "react";

export default function TrustedBrands() {
  const [logos, setLogos] = useState([]);

  // Default logos (Used when no backend data is available)
  const defaultLogos = [
    { id: 1, name: "BBC", src: "https://ichef.bbci.co.uk/images/ic/480xn/p0fk7mhm.jpg" },
    { id: 2, name: "Daily Mail", src: "https://8billionangels.org/wp-content/uploads/2022/11/daily-mail-logo.png" },
    { id: 3, name: "The Guardian", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1eMDHC9xfr0G0lvgOTNDjwofe_RwGlBJwGQ&s" },
    { id: 4, name: "Bazaar", src: "https://www.khalidiyahmall.com/media/2482/bbz-en-logo-web.jpg?anchor=center&mode=crop&width=300&height=150&rnd=133742503770000000" },
  ];

  // Simulating fetching from the server
  useEffect(() => {
    async function fetchLogos() {
      try {
        console.log("Fetching logos...");
        const backendData = null; // Simulating no backend data
        if (backendData && backendData.length > 0) {
          setLogos(backendData.slice(0, 4)); // Show only 4 logos
        } else {
          console.log("⚠️ No backend logos found, using default logos");
          setLogos(defaultLogos);
        }
      } catch (error) {
        console.error("❌ Error fetching logos:", error);
        setLogos(defaultLogos);
      }
    }

    fetchLogos();
  }, []);

  return (
    <section className="trusted-brands-section">
      <div className="container">
        <div className="brand-logos">
          {logos.map((logo) => (
            <div key={logo.id} className="brand-logo-container">
              <img src={logo.src} alt={logo.name} className="brand-logo" />
            </div>
          ))}
        </div>
      </div>

      {/* CSS Styling */}
      <style jsx>{`
        .trusted-brands-section {
          background: #f8f9fa;
          padding: 20px 0;
        }
        .brand-logos {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          flex-wrap: wrap;
        }
        .brand-logo-container {
          flex: 1;
          text-align: center;
          max-width: 120px;
          opacity: 0.4; /* Greyed-out effect */
        }
        .brand-logo {
          max-width: 100%;
          height: auto;
          filter: grayscale(100%);
          transition: opacity 0.3s;
        }
        .brand-logo:hover {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .brand-logos {
            flex-wrap: wrap;
          }
          .brand-logo-container {
            flex-basis: 50%;
          }
        }
      `}</style>
    </section>
  );
}
