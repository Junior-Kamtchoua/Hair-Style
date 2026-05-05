"use client";

export default function FeaturedProducts() {
  const items = [
    {
      title: "LAOS WAVY CURLY",
      image: "/hero1.jpg",
    },
    {
      title: "BURMESE CURLY",
      image: "/hero2.jpg",
    },
  ];

  return (
    <section className="featured">
      {items.map((item, i) => (
        <div key={i} className="featured__item">
          <div className="featured__imageWrapper">
            <img src={item.image} alt={item.title} />

            {/* DESKTOP OVERLAY */}
            <div className="featured__overlay">
              <h2>{item.title}</h2>
              <button>SHOP THIS</button>
            </div>
          </div>

          {/* MOBILE CONTENT */}
          <div className="featured__mobileContent">
            <h3>{item.title}</h3>
            <button>SHOP THIS</button>
          </div>
        </div>
      ))}
    </section>
  );
}
