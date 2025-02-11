"use client";

import { useState } from "react";
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
    services: signedUpService ? [signedUpService] : [],
  });

  const [errors, setErrors] = useState({});
  const [alertMessages, setAlertMessages] = useState([]);
  const [loading, setLoading] = useState(false);
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
  // ✅ Add a new service
  // ------------------------------------------------------------
  const handleAddService = () => {
    if (
      newService.trim() !== "" &&
      !formData.services.includes(newService.trim())
    ) {
      setFormData((prevData) => ({
        ...prevData,
        services: [...prevData.services, newService.trim()],
      }));
    }
    setNewService("");
  };

  // ------------------------------------------------------------
  // ✅ Remove a service
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
      // Skip the 'services' array when checking for empty
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

    // Simulate API request
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
      // Clear alerts
      setTimeout(() => setAlertMessages([]), 4000);
    }, 2000);
  };

  // ------------------------------------------------------------
  // ✅ Render
  // ------------------------------------------------------------
  return (
    <div className="d-flex bg-light" style={{ minHeight: "100vh" }}>
      <div className="flex-grow-1 d-flex justify-content-center align-items-start py-5">
        <div className="container" style={{ maxWidth: "900px" }}>
          {/* ------ Card Container ------ */}
          <div className="card shadow-lg border-0 rounded-3">
            <div className="card-body p-4">
              <h1 className="text-center display-6 fw-bold mb-4 text-dark">
                Join as a Professional
              </h1>

              {/* Alert messages in two columns */}
              {alertMessages.length > 0 && (
                <div
                  className={`alert ${
                    alertMessages[0].includes("✅")
                      ? "alert-success"
                      : "alert-danger"
                  }`}
                  role="alert"
                  style={{ columnCount: 2, columnGap: "1.5rem" }}
                >
                  <ul
                    className="mb-0"
                    style={{
                      listStylePosition: "inside",
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    {alertMessages.map((msg, index) => (
                      <li key={index} style={{ breakInside: "avoid-column" }}>
                        {msg}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {/* ------------- Two Columns ------------- */}
                <div className="row g-4">
                  {/* Left Column */}
                  <div className="col-md-6">
                    <h5 className="fw-bold text-secondary">
                      Personal Information
                    </h5>
                    {/* Name */}
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control form-control-lg"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      <div className="text-danger small">{errors.name}</div>
                    </div>

                    {/* Company Name */}
                    <div className="mb-3">
                      <label className="form-label fw-semibold">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        className="form-control form-control-lg"
                        placeholder="Your company's name"
                        value={formData.companyName}
                        onChange={handleChange}
                      />
                      <div className="text-danger small">
                        {errors.companyName}
                      </div>
                    </div>

                    {/* Email */}
                    <div className="mb-3">
                      <label className="form-label fw-semibold">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control form-control-lg"
                        placeholder="example@domain.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <div className="text-danger small">{errors.email}</div>
                    </div>

                    {/* Phone */}
                    <div className="mb-3">
                      <label className="form-label fw-semibold">
                        Phone Number (UAE)
                      </label>
                      <input
                        type="text"
                        name="phone"
                        className="form-control form-control-lg"
                        placeholder="+971XXXXXXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      <div className="text-danger small">{errors.phone}</div>
                    </div>

                    <h5 className="fw-bold mt-4 text-secondary">
                      You've Signed Up For
                    </h5>
                    <div className="alert alert-secondary d-inline-block">
                      {signedUpService || "No service selected"}
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="col-md-6">
                    <h5 className="fw-bold text-secondary">Business Details</h5>
                    {/* Company Size */}
                    <div className="mb-3">
                      <label className="form-label fw-semibold">
                        Company Size
                      </label>
                      <select
                        className="form-select form-select-lg"
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
                      <div className="text-danger small">
                        {errors.companySize}
                      </div>
                    </div>

                    {/* Street Address */}
                    <div className="mb-3">
                      <label className="form-label fw-semibold">
                        Street Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        className="form-control form-control-lg"
                        placeholder="123 Business Rd"
                        value={formData.address}
                        onChange={handleChange}
                      />
                      <div className="text-danger small">{errors.address}</div>
                    </div>

                    {/* City/State/Zip */}
                    <div className="row g-2">
                      <div className="col-md-4">
                        <label className="form-label fw-semibold">City</label>
                        <input
                          type="text"
                          name="city"
                          className="form-control form-control-lg"
                          placeholder="Dubai"
                          value={formData.city}
                          onChange={handleChange}
                        />
                        <div className="text-danger small">{errors.city}</div>
                      </div>
                      <div className="col-md-4">
                        <label className="form-label fw-semibold">State</label>
                        <input
                          type="text"
                          name="state"
                          className="form-control form-control-lg"
                          placeholder="..."
                          value={formData.state}
                          onChange={handleChange}
                        />
                        <div className="text-danger small">{errors.state}</div>
                      </div>
                      <div className="col-md-4">
                        <label className="form-label fw-semibold">ZIP Code</label>
                        <input
                          type="text"
                          name="zip"
                          className="form-control form-control-lg"
                          placeholder="12345"
                          value={formData.zip}
                          onChange={handleChange}
                        />
                        <div className="text-danger small">{errors.zip}</div>
                      </div>
                    </div>

                    <h5 className="fw-bold mt-4 text-secondary">
                      We Will Also Show You Leads From
                    </h5>
                    <div className="mb-3">
                      {formData.services.map((service, index) => (
                        <span key={index} className="badge bg-primary me-2 p-2">
                          {service}
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

                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Add new service..."
                        value={newService}
                        onChange={(e) => setNewService(e.target.value)}
                      />
                      <button
                        type="button"
                        className="btn btn-secondary btn-lg"
                        onClick={handleAddService}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
                {/* End Two Columns */}

                {/* Submit Button */}
                <div className="mt-5 text-end">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg px-5"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Register"}
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* End Card */}
        </div>
      </div>
    </div>
  );
}
