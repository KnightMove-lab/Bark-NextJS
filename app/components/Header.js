"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect if the screen is mobile-sized
  const handleToggle = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky-top bg-white shadow-sm">
      <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-between py-2 px-3">
          
          {/* Left side: Logo and Explore */}
          <div className="d-flex align-items-center gap-3">
            {/* Logo */}
            <Link href="/" className="fs-4 fw-bold text-dark text-decoration-none d-flex align-items-center">
      <span className="brand">LIGHT HOUSE</span>
      <span className="brand-icon">⚓</span> {/* Add an icon next to it */}
    </Link>
            {/* Explore Dropdown */}
            <div className="position-relative">
              <button
                className="btn text-dark dropdown-toggle fw-bold"
                onClick={handleToggle}
              >
                Explore
              </button>

              {/* Dropdown for Large Screens | Sidebar for Mobile */}
              <div
                className={`dropdown-menu ${isOpen ? "show" : ""} ${
                  isMobile ? "mobile-menu" : ""
                }`}
                style={{
                  width: isMobile ? "100vw" : "280px",
                  height: isMobile ? "100vh" : "auto",
                  position: isMobile ? "fixed" : "absolute",
                  top: isMobile ? "0" : "100%",
                  left: isMobile ? "0" : "auto",
                  padding: "20px",
                  backgroundColor: "white",
                  zIndex: "1050",
                  overflowY: isMobile ? "auto" : "visible",
                  boxShadow: isMobile ? "0px 0px 10px rgba(0, 0, 0, 0.2)" : "none",
                }}
              >
                {/* Close Button for Mobile */}
                {isMobile && (
                  <div className="text-end">
                    <button className="btn btn-outline-dark" onClick={handleToggle}>
                      ✖ Close
                    </button>
                  </div>
                )}

                {/* Services Section */}
                <div className="d-flex justify-content-between align-items-center px-2">
                  <span className="fw-bold text-dark">Services</span>
                  <a href="#" className="text-primary text-decoration-none small fw-bold">
                    See all
                  </a>
                </div>
                <ul className="list-unstyled mt-2 mb-3">
                  <li className="dropdown-item d-flex align-items-center">
                    <i className="bi bi-briefcase-fill text-primary me-2"></i> Business
                  </li>
                  <li className="dropdown-item d-flex align-items-center">
                    <i className="bi bi-calendar-event-fill text-danger me-2"></i> Events & Entertainers
                  </li>
                  <li className="dropdown-item d-flex align-items-center">
                    <i className="bi bi-heart-fill text-success me-2"></i> Health & Wellness
                  </li>
                  <li className="dropdown-item d-flex align-items-center">
                    <i className="bi bi-house-fill text-info me-2"></i> House & Home
                  </li>
                  <li className="dropdown-item d-flex align-items-center">
                    <i className="bi bi-book-fill text-purple me-2"></i> Lessons & Training
                  </li>
                  <li className="dropdown-item d-flex align-items-center">
                    <i className="bi bi-three-dots text-secondary me-2"></i> More
                  </li>
                </ul>

                {/* Popular Services Section */}
                <div className="d-flex justify-content-between align-items-center px-2">
                  <span className="fw-bold text-dark">Popular Services</span>
                  <a href="#" className="text-primary text-decoration-none small fw-bold">
                    See all
                  </a>
                </div>
                <ul className="list-unstyled mt-2">
                  <li className="dropdown-item">Dog & Pet Grooming</li>
                  <li className="dropdown-item">Dog Training</li>
                  <li className="dropdown-item">Dog Walking</li>
                  <li className="dropdown-item">Life Coaching</li>
                  <li className="dropdown-item">Limousine Hire</li>
                  <li className="dropdown-item">Magician</li>
                  <li className="dropdown-item">Private Investigators</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Search Bar positioned near Login button */}
          <div className="search-container d-none d-md-flex">
            <input
              type="text"
              className="form-control search-input"
              placeholder="Search for a service"
            />
            <button className="search-button">
              <i className="bi bi-search"></i>
            </button>
          </div>

          {/* Right Side: Login and Button */}
          <div className="d-flex align-items-center gap-3">
            <Link href="/login" className="text-dark text-decoration-none">
              Login
            </Link>
            <button className="btn btn-primary d-none d-md-block">
              Join as a Professional
            </button>
          </div>
        </div>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        .search-container {
          display: flex;
          align-items: center;
          background: #f8f9fa;
          border-radius: 25px;
          padding: 5px 10px;
          width: 280px;
          margin-left: auto; /* Moves it closer to Login */
        }
        .search-input {
          flex: 1;
          border: none;
          outline: none;
          background: transparent;
          font-size: 14px;
          padding: 5px;
        }
        .search-button {
          background: none;
          border: none;
          color: #555;
          cursor: pointer;
        }
        .search-button i {
          font-size: 18px;
        }
      `}</style>
    </header>
  );
}
