"use client";

export default function Hero() {
  return (
    <section className="d-flex align-items-center justify-content-center bg-light" style={{ height: '500px' }}>
      <div className="container text-center">
        <div className="row justify-content-center align-items-center g-4">
          {/* Hero text */}
          <div className="col-12 col-lg-6 text-start">
            <h1 className="fw-bold mb-3 text-dark" style={{ fontSize: '44px', lineHeight: '1.3' }}>
              Find the best professionals in the US
            </h1>
            <p className="text-muted fs-5 mb-4" style={{ fontSize: '18px' }}>
              Get free quotes within minutes
            </p>

            {/* Search bar */}
            <div className="d-flex flex-wrap gap-2 mb-3 align-items-center">
              <input
                type="text"
                className="form-control shadow-sm"
                style={{ width: '300px', height: '48px', fontSize: '16px', borderRadius: '6px' }}
                placeholder="What service are you looking for?"
              />
              <input
                type="text"
                className="form-control shadow-sm"
                style={{ width: '200px', height: '48px', fontSize: '16px', borderRadius: '6px' }}
                placeholder="ZIP code"
              />
              <button className="btn btn-primary shadow-sm" style={{ height: '48px', fontSize: '16px', padding: '10px 20px' }}>
                Search
              </button>
            </div>

            {/* Popular Services */}
            <div className="text-secondary small" style={{ fontSize: '14px', fontWeight: '500' }}>
              Popular: <span className="text-primary">House Cleaning</span>, <span className="text-primary">Web Design</span>, <span className="text-primary">Personal Trainers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
