"use client";
import { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password, rememberMe });
  };

  return (
    <section className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card shadow-sm p-4 border-0">
              <h2 className="fw-bold text-dark text-center mb-4">Login</h2>

              <form onSubmit={handleLogin}>
                {/* Email */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                {/* Password */}
                <div className="mb-3">
                  <div className="d-flex justify-content-between">
                    <label className="form-label fw-semibold">Password</label>
                    <a href="#" className="text-primary small">Forgot password?</a>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                {/* Remember Me */}
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="rememberMe">
                    Remember me
                  </label>
                </div>

                {/* Login Button */}
                <button type="submit" className="btn btn-primary w-100">
                  Log in
                </button>

                {/* OR Divider */}
                <div className="text-center text-muted my-3">OR</div>

                {/* Alternative Login Link */}
                <button className="btn btn-outline-primary w-100">
                  Send me a link to log in
                </button>
              </form>

              {/* Footer Links */}
              <div className="text-center mt-4">
                <p className="text-muted mb-1">
                  Offering a service? <Link href="/join" >
              Join as a Professional
            </Link>
                </p>
                <p className="text-muted">
                  Looking for a service? <a href="#" className="text-primary">Get started</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .card {
          border-radius: 12px;
          background: white;
        }
        .btn-primary {
          background-color: #1663ff;
          border: none;
        }
        .btn-primary:hover {
          background-color: #0044cc;
        }
        .form-control {
          border-radius: 6px;
        }
      `}</style>
    </section>
  );
}
