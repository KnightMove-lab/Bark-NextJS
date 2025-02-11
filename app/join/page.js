// app/join/page.js

import Link from "next/link";


export const metadata = {
  title: "Join as a Professional",
  description: "Join page for professionals",
};

const services = [
  { name: "House Cleaning", icon: "bi bi-house-door-fill" },
  { name: "Graphic Design", icon: "bi bi-palette-fill" },
  { name: "Life Coaching", icon: "bi bi-people-fill" },
  { name: "Bookkeeping Services", icon: "bi bi-file-earmark-text" },
  { name: "Web Design", icon: "bi bi-laptop" },
  { name: "Building Contractors", icon: "bi bi-tools" },
  { name: "General Photography", icon: "bi bi-camera-fill" },
  { name: "Personal Trainers", icon: "bi bi-heart-pulse-fill" },
  { name: "Web Development", icon: "bi bi-code-slash" },
  { name: "Gardening", icon: "bi bi-flower2" },
  { name: "Social Media Marketing", icon: "bi bi-chat-dots-fill" },
  { name: "Commercial & Office Cleaning", icon: "bi bi-building" },
];

export default function JoinPage() {
  return (
    <>
      {/* TOP HERO / MAIN SECTION */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center align-items-center g-5">
            {/* LEFT SIDE: BIG HEADING + FORM + POPULAR SERVICES */}
            <div className="col-12 col-md-6">
              <h1 className="fw-bold mb-3" style={{ fontSize: "2.5rem" }}>
                Secure jobs and grow your business
              </h1>
              <p className="text-muted fs-5 mb-4">
                1000’s of local and remote clients are already waiting for your services
              </p>

              {/* Search input + button */}
              <div className="input-group mb-4" style={{ maxWidth: "450px" }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="What service do you provide?"
                  aria-label="Service"
                />
                <button className="btn btn-primary" type="button">
                  Get started
                </button>
              </div>

              {/* Popular services (two-column list) with icons */}
              <h5 className="fw-semibold mb-2">Popular services</h5>
              <div className="row row-cols-2 g-2 text-secondary">
                {services.map(({ name, icon }, index) => (
                  <div className="col" key={index}>
                    <Link
                      href={`/register?service=${encodeURIComponent(name)}`}
                      className="text-decoration-none text-dark d-flex align-items-center"
                    >
                      <i className={`${icon} me-2`}></i> {name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE: IMAGE ONLY (no badges) */}
            <div className="col-12 col-md-5 text-center">
              <div className="position-relative">
                <img
                  src="https://www.shutterstock.com/shutterstock/videos/3548162805/thumb/10.jpg?ip=x480"
                  alt="Placeholder or Accreditation"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS / LEADS / PRICING CARDS */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-4 text-center">
            {/* Card 1 */}
            <div className="col">
              <div className="card border-0">
                <div className="card-body">
                  <div className="fs-1 mb-3">🕒</div>
                  <h5 className="card-title">Get quality leads</h5>
                  <ul className="list-unstyled text-muted mb-3">
                    <li>View leads locally or nationwide</li>
                    <li>Review leads for free</li>
                    <li>Get leads sent in real time</li>
                  </ul>
                  <a href="#" className="btn btn-outline-primary">
                    How it works
                  </a>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col">
              <div className="card border-0">
                <div className="card-body">
                  <div className="fs-1 mb-3">💬</div>
                  <h5 className="card-title">Win new clients</h5>
                  <ul className="list-unstyled text-muted mb-3">
                    <li>Pick the best leads for your business</li>
                    <li>Unlock verified contact details</li>
                    <li>Call or email them to win the job</li>
                  </ul>
                  <a href="#" className="btn btn-outline-primary">
                    See an example lead
                  </a>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col">
              <div className="card border-0">
                <div className="card-body">
                  <div className="fs-1 mb-3">✔</div>
                  <h5 className="card-title">Grow your business</h5>
                  <ul className="list-unstyled text-muted mb-3">
                    <li>Keep 100% of what you earn</li>
                    <li>No commission or hidden fees</li>
                    <li>Get Hired Guarantee on first leads</li>
                  </ul>
                  <a href="#" className="btn btn-outline-primary">
                    See more about pricing
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS / BUZZING MARKETPLACE */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-12 col-md-6">
              <h2>Join a buzzing marketplace</h2>
              <p className="text-muted">
                Hundreds of thousands of small businesses have found new customers on Bark
              </p>
              <button className="btn btn-primary">Join them</button>
            </div>
            <div className="col-12 col-md-6">
              <div className="row row-cols-2 g-3">
                <div className="col">
                  <div className="border rounded p-3 h-100 text-center">
                    <h4 className="mb-0">10,000s</h4>
                    <small className="text-muted">leads a day</small>
                  </div>
                </div>
                <div className="col">
                  <div className="border rounded p-3 h-100 text-center">
                    <h4 className="mb-0">$1M+</h4>
                    <small className="text-muted">daily business done on Bark</small>
                  </div>
                </div>
                <div className="col">
                  <div className="border rounded p-3 h-100 text-center">
                    <h4 className="mb-0">1,000+</h4>
                    <small className="text-muted">services offered</small>
                  </div>
                </div>
                <div className="col">
                  <div className="border rounded p-3 h-100 text-center">
                    <h4 className="mb-0">500K+</h4>
                    <small className="text-muted">small businesses</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER SUCCESS STORIES */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="mb-3">Customer success stories</h2>
          <p className="text-muted">
            See what other small businesses have to say about Bark
          </p>
          <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
            {/* Card 1 */}
            <div className="col">
              <div className="p-3 h-100 border rounded">
                <div className="mb-3">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfoR47UaCaASxrIHCw0bRrap9EU7yeQHsHfw&s"
                    alt="Customer 1"
                    className="rounded-circle"
                    style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  />
                </div>
                <blockquote className="mb-1">
                  “Our biggest client contacted us through Bark...”
                </blockquote>
                <small className="text-muted d-block mb-2">Stefan Wesley, Sigma Digital</small>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col">
              <div className="p-3 h-100 border rounded">
                <div className="mb-3">
                  <img
                    src="https://www.optilingo.com/wp-content/uploads/2019/01/man-wearing-brown-dress-shirt-holding-white-fedora-hat-1036627-scaled.jpg"
                    alt="Customer 2"
                    className="rounded-circle"
                    style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  />
                </div>
                <blockquote className="mb-1">
                  “We get 82% of our clients through Bark...”
                </blockquote>
                <small className="text-muted d-block mb-2">Leanne Osbourne, Paradigm Cleaning</small>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col">
              <div className="p-3 h-100 border rounded">
                <div className="mb-3">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ZkAiKosKh1PhXnOOvaJMGNmVEu7QnBVWwJJXqYbYlN-e7kV-PE_8IOAphuv4M31v1oU&usqp=CAU"
                    alt="Customer 3"
                    className="rounded-circle"
                    style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  />
                </div>
                <blockquote className="mb-1">
                  “Bark has been far the most effective website I’ve used...”
                </blockquote>
                <small className="text-muted d-block mb-2">Richard Gray, Rugfoot Photography</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LARGER BUSINESSES */}
       {/* LARGER BUSINESSES */}
       <section className="py-5 text-center bg-light">
        <h2 className="mb-4">Larger businesses use Bark too</h2>
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-5">
          {[
            ["Microsoft", "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/copilot-visual-800x532-1"],
            ["Ford", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Au4DG7p1vAUKar2C6Z5Qe_nC6MsSb45nfg&s"],
            ["GE", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSKG8IMSq_uQ5VEOESn1G4BEPvMdZx0mm4gA&s"],
            ["J.P.Morgan", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1nl2A8MaDWOv2nwSnE0z-9_2cnnUybvEkgw&s"],
            ["CNN", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtu56wl58p55A8wtPqkxzC85ORVqipFD6lUD8oIeK4Sqw1TipDBFWCJB80OaYm2Cvw7F8&usqp=CAU"],
          ].map(([name, url], index) => (
            <div key={index} className="text-center" style={{ opacity: 0.4 }}>
              <img
                src={url}
                alt={name}
                className="mx-auto"
                style={{ height: "40px", objectFit: "contain", filter: "grayscale(100%)" }}
              />
              <p className="mt-2">{name}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
