"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import "bootstrap/dist/css/bootstrap.min.css";

export default function RegisterPage() {
  // 1) Grab the "service" from the URL (if present)
  const searchParams = useSearchParams();
  const signedUpService = searchParams.get("service") || "";

  // 2) Set up form state, including an array for services
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    hasWebsite: "",
    website: "",
    companySize: "",
    address: "",
    suite: "",
    city: "",
    state: "",
    zip: "",
    // Pre-fill "services" from the URL if available
    services: signedUpService ? [signedUpService] : [],
  });

  const [errors, setErrors] = useState({});
  const [alertMessages, setAlertMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  // For adding new services on the fly
  const [newService, setNewService] = useState("");

  // ------------------------------------------------------------
  // ✅ Validate Single Field
  // ------------------------------------------------------------
  const validateField = (name, value) => {
    let errorMsg = "";

    if (name === "name" && value.trim() === "") {
      errorMsg = "Name is required.";
    }
    if (name === "companyName" && value.trim() === "") {
        errorMsg = "Company Name is required.";
      }
    if (name === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
      errorMsg = "Invalid email format.";
    }
    if (name === "phone" && !/^(\+971|00971|971)?[0-9]{8,9}$/.test(value)) {
      errorMsg = "Invalid UAE phone number.";
    }
    if (name === "hasWebsite" && value === "") {
      errorMsg = "Please select an option.";
    }
    if (name === "website" && formData.hasWebsite === "yes" && !/^https?:\/\/\S+\.\S+$/.test(value)) {
      errorMsg = "Invalid website URL.";
    }
    if (name === "companySize" && value === "") {
      errorMsg = "Please select company size.";
    }
    if (name === "address" && value.trim() === "") {
      errorMsg = "Address is required.";
    }
    if (name === "city" && value.trim() === "") {
      errorMsg = "City is required.";
    }
    if (name === "state" && value.trim() === "") {
      errorMsg = "State is required.";
    }
    if (name === "zip" && value.trim() === "") {
      errorMsg = "ZIP code is required.";
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMsg }));
  };

  // ------------------------------------------------------------
  // ✅ Handle Input Change
  // ------------------------------------------------------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    validateField(name, value);
  };

  // ------------------------------------------------------------
  // ✅ Add a new service to the array
  // ------------------------------------------------------------
  const handleAddService = () => {
    if (newService.trim() !== "" && !formData.services.includes(newService.trim())) {
      setFormData((prevData) => ({
        ...prevData,
        services: [...prevData.services, newService.trim()],
      }));
    }
    setNewService(""); // Clear the input field
  };

  // ------------------------------------------------------------
  // ✅ Remove a service from the array
  // ------------------------------------------------------------
  const handleRemoveService = (service) => {
    setFormData((prevData) => ({
      ...prevData,
      services: prevData.services.filter((s) => s !== service),
    }));
  };

  // ------------------------------------------------------------
  // ✅ Handle Form Submission
  // ------------------------------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAlertMessages([]);

    // Validate all fields before submitting
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      validateField(key, formData[key]);
      // Skip the 'services' array when checking for empty string
      if (formData[key] === "" && key !== "services") {
        newErrors[key] = `${key.replace(/([A-Z])/g, " $1")} is required.`;
      }
    });

    setErrors(newErrors);

    // Collect error messages for Bootstrap Alert
    const errorMessages = Object.values(newErrors).filter((msg) => msg);
    if (errorMessages.length > 0) {
      setAlertMessages(errorMessages);
      setLoading(false);
      return;
    }

    // Simulate API Request
    setTimeout(() => {
      setLoading(false);
      setAlertMessages(["✅ Registration Successful!"]);
      // Reset form
      setFormData({
        name: "",
        companyName: "",
        email: "",
        phone: "",
        hasWebsite: "",
        website: "",
        companySize: "",
        address: "",
        suite: "",
        city: "",
        state: "",
        zip: "",
        services: signedUpService ? [signedUpService] : [],
      });
      // Clear alerts after a few seconds
      setTimeout(() => setAlertMessages([]), 4000);
    }, 2000);
  };

  // ------------------------------------------------------------
  // ✅ Render
  // ------------------------------------------------------------
  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      {/* ============== LEFT SIDEBAR ============== */}
 

      {/* ============== MAIN CONTENT AREA ============== */}
      <div className="flex-grow-1">
        {/* Alert Messages */}
        {/* {alertMessages.length > 0 && (
          <div
            className={`alert ${
              alertMessages[0].includes("✅") ? "alert-success" : "alert-danger"
            } text-center`}
            role="alert"
          >
            <ul className="mb-0">
              {alertMessages.map((msg, index) => (
                <li key={index}>{msg}</li>
              ))}
            </ul>
          </div>
        )} */}

        <div className="container-fluid mt-5">
          {/* Main Form Container */}
          <div
            className="container p-4 shadow-lg bg-white rounded"
            style={{
              maxWidth: "60%",
              margin: "auto",
              /* Fixed height of 500px with scroll if necessary */
              height: "500px",
              overflowY: "auto",
              marginBottom:"10px"
            }}
          >
            <h2 className="text-center fw-bold mb-4">Join as a Professional</h2>

            <form onSubmit={handleSubmit}>
              {/* ---------------------------------------------- */}
              {/* Show the service from URL, if any, and more */}
              {/* ---------------------------------------------- */}
              <h5 className="fw-bold">You've signed up for</h5>
              <div className="alert alert-secondary d-inline-block">
                {signedUpService || "No service selected"}
              </div>

              <h5 className="fw-bold mt-4">We will also show you leads from</h5>
              <div className="mb-3">
                {formData.services.map((service, index) => (
                  <span key={index} className="badge bg-primary me-2 p-2">
                    {service}{" "}
                    <span
                      className="ms-1"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleRemoveService(service)}
                    >
                      ×
                    </span>
                  </span>
                ))}
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add new service..."
                  value={newService}
                  onChange={(e) => setNewService(e.target.value)}
                />
                <button
                  type="button"
                  className="btn btn-secondary mt-2"
                  onClick={handleAddService}
                >
                  Add Service
                </button>
              </div>

              {/* ---------------------------------------------- */}
              {/* Personal Information Fields */}
              {/* ---------------------------------------------- */}
              <h5 className="fw-bold mt-4">Personal Information</h5>

              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                />
                <div className="text-danger small">{errors.name}</div>
              </div>

              <div className="mb-3">
    <label className="form-label">Company Name</label>
    <input
        type="text"
        name="companyName"
        className="form-control"
        value={formData.companyName}
        onChange={handleChange}
    />
    <div className="text-danger small">{errors.companyName}</div> 
</div>
              <div className="text-danger small">{errors.name}</div>

              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                />
                <div className="text-danger small">{errors.email}</div>
              </div>

              <div className="mb-3">
                <label className="form-label">Phone Number (UAE)</label>
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  placeholder="+971XXXXXXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <div className="text-danger small">{errors.phone}</div>
              </div>

              {/* ---------------------------------------------- */}
              {/* Company Size */}
              {/* ---------------------------------------------- */}
              <h5 className="fw-bold mt-4">Company Size</h5>
              <div className="mb-3">
                <select
                  className="form-select"
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleChange}
                >
                  <option value="">Select company size</option>
                  <option value="Self-employed">Self-employed</option>
                  <option value="2-10">2-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-200">51-200</option>
                  <option value="200+">200+</option>
                </select>
                <div className="text-danger small">{errors.companySize}</div>
              </div>

              {/* ---------------------------------------------- */}
              {/* Business Address */}
              {/* ---------------------------------------------- */}
              <h5 className="fw-bold mt-4">Business Address</h5>
              <div className="mb-3">
                <label className="form-label">Street Address</label>
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  value={formData.address}
                  onChange={handleChange}
                />
                <div className="text-danger small">{errors.address}</div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <label className="form-label">City</label>
                  <input
                    type="text"
                    name="city"
                    className="form-control"
                    value={formData.city}
                    onChange={handleChange}
                  />
                  <div className="text-danger small">{errors.city}</div>
                </div>

                <div className="col-md-4">
                  <label className="form-label">State</label>
                  <input
                    type="text"
                    name="state"
                    className="form-control"
                    value={formData.state}
                    onChange={handleChange}
                  />
                  <div className="text-danger small">{errors.state}</div>
                </div>

                <div className="col-md-4">
                  <label className="form-label">ZIP Code</label>
                  <input
                    type="text"
                    name="zip"
                    className="form-control"
                    value={formData.zip}
                    onChange={handleChange}
                  />
                  <div className="text-danger small">{errors.zip}</div>
                </div>
              </div>

              {/* ---------------------------------------------- */}
              {/* Submit Button */}
              {/* ---------------------------------------------- */}
              <div className="mt-4 text-left">
                <button
                  type="submit"
                  className="btn btn-primary btn-outline"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Register"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
   
    </div>
  );
}
