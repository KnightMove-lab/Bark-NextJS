"use client";

export default function Services() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Home & Garden */}
        <div className="mb-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3 className="mb-0">Home &amp; Garden</h3>
            <a href="#" className="text-decoration-none">
              View All
            </a>
          </div>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {/* Card 1 */}
            <div className="col">
              <div className="card hover-lift position-relative">
                <img
                  src="https://thumbs.dreamstime.com/b/man-woman-janitors-cleaners-cleaning-people-working-washing-cleaning-equipmen-set-cleaning-stuff-service-professional-84136749.jpg"
                  alt="Gardening"
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h5 className="card-title mb-0">Gardening</h5>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col">
              <div className="card hover-lift">
                <img
                  src="https://via.placeholder.com/300x200.png?text=Cleaning"
                  alt="House Cleaning"
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h5 className="card-title mb-0">House Cleaning</h5>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col">
              <div className="card hover-lift">
                <img
                  src="https://via.placeholder.com/300x200.png?text=Painting"
                  alt="Painting"
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h5 className="card-title mb-0">
                    Painting &amp; Decorating
                  </h5>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="col">
              <div className="card hover-lift">
                <img
                  src="https://via.placeholder.com/300x200.png?text=Pest+Control"
                  alt="Pest Control"
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h5 className="card-title mb-0">Pest Control</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Health & Wellbeing */}
        <div className="mb-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3 className="mb-0">Health &amp; Wellbeing</h3>
            <a href="#" className="text-decoration-none">
              View All
            </a>
          </div>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            <div className="col">
              <div className="card hover-lift position-relative">
                <div className="badge-overlay">Available online</div>
                <img
                  src="https://via.placeholder.com/300x200.png?text=Personal+Training"
                  alt="Personal Training"
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h5 className="card-title mb-0">Personal Training</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card hover-lift position-relative">
                <div className="badge-overlay">Available online</div>
                <img
                  src="https://via.placeholder.com/300x200.png?text=Counselling"
                  alt="Counselling"
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h5 className="card-title mb-0">Counselling</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card hover-lift">
                <img
                  src="https://via.placeholder.com/300x200.png?text=Massage"
                  alt="Massage Therapy"
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h5 className="card-title mb-0">Massage Therapy</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card hover-lift">
                <img
                  src="https://via.placeholder.com/300x200.png?text=Nutrition"
                  alt="Nutritionist"
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h5 className="card-title mb-0">Nutritionist</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
