"use client";

const images = [
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
  "/hero4.jpg",
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
  "/hero4.jpg",
];

export default function InstagramSection() {
  return (
    <section id="instagram" className="instagram-section instagram-bg">
      <h2 className="instagram-title">Follow @dhairboutique on Instagram</h2>

      <div className="carousel">
        <div
          className="carousel-track"
          style={{ "--quantity": images.length } as React.CSSProperties}
        >
          {[...images, ...images].map((img, i) => (
            <div
              key={i}
              className="carousel-item"
              style={{ "--position": i + 1 } as React.CSSProperties}
            >
              <div className="instagram-card">
                <img src={img} alt="hair" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
