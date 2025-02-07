"use client";

export default function Footer() {
  return (
    <footer className="bg-white border-top pt-4">
      <div className="container pb-4">
        <div className="row gy-3">
          {/* Footer column 1 */}
          <div className="col-12 col-sm-6 col-md-3">
            <h5 className="fw-bold">For Customers</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-secondary text-decoration-none">Find a Professional</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">How it works</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Login</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Mobile App</a></li>
            </ul>
          </div>
          {/* Footer column 2 */}
          <div className="col-12 col-sm-6 col-md-3">
            <h5 className="fw-bold">For Professionals</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-secondary text-decoration-none">How it works</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Pricing</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Join as a Professional</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Help centre</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Mobile App</a></li>
            </ul>
          </div>
          {/* Footer column 3 */}
          <div className="col-12 col-sm-6 col-md-3">
            <h5 className="fw-bold">About</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-secondary text-decoration-none">About Bark</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Affiliates</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Blog</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Press</a></li>
            </ul>
          </div>
          {/* Footer contact */}
          <div className="col-12 col-sm-6 col-md-3">
            <p className="mb-1"><strong>team@bark.com</strong></p>
            <p className="mb-2 text-secondary">
              020 3697 0237 <br />(open 24 hours a day, 7 days a week)
            </p>
            <div className="d-flex gap-2 mb-2">
              <a
                href="#"
                className="bg-primary text-white text-center rounded-1"
                style={{ width: "24px", height: "24px", lineHeight: "24px" }}
              >
                T
              </a>
              <a
                href="#"
                className="bg-primary text-white text-center rounded-1"
                style={{ width: "24px", height: "24px", lineHeight: "24px" }}
              >
                F
              </a>
              <a
                href="#"
                className="bg-primary text-white text-center rounded-1"
                style={{ width: "24px", height: "24px", lineHeight: "24px" }}
              >
                in
              </a>
            </div>
            <select
              className="form-select form-select-sm"
              style={{ maxWidth: "180px" }}
            >
              <option>United Kingdom</option>
              <option>United States</option>
              <option>Canada</option>
              <option>Australia</option>
            </select>
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-center text-secondary small">
          © 2025 Bark.com Global Limited. Terms &amp; Conditions / Cookie policy / Privacy policy
          <br />
          TrustScore 4.1 ★★★★☆ (99,334 reviews)
        </div>
      </div>
    </footer>
  );
}
