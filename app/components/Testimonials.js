"use client";

export default function Testimonials() {
  return (
    <section className="py-5">
      <div className="container text-center">
        <div className="row mb-4">
          <div className="col d-flex justify-content-center flex-wrap gap-4">
            {/* Circles */}
            <div className="testimonial-circle">
              <img
                src="https://via.placeholder.com/60.png?text=User1"
                alt="User1"
              />
            </div>
            <div className="testimonial-circle">
              <img
                src="https://via.placeholder.com/60.png?text=User2"
                alt="User2"
              />
            </div>
            <div className="testimonial-circle">
              <img
                src="https://via.placeholder.com/60.png?text=User3"
                alt="User3"
              />
            </div>
            <div className="testimonial-circle">
              <img
                src="https://via.placeholder.com/60.png?text=User4"
                alt="User4"
              />
            </div>
          </div>
        </div>
        <div className="row justify-content-center mb-2">
          <div className="col-md-8">
            <blockquote className="fs-5 fst-italic">
              “Simply Amazing. Made a booking within minutes!”
            </blockquote>
            <div className="fw-semibold">Irene</div>
          </div>
        </div>
        <div>
          {/* Fake dots for the carousel */}
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </section>
  );
}
