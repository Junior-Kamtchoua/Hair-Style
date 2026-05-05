"use client";

import Link from "next/link";

export default function Collections() {
  const collections = [
    { name: "Raw Indian Hair", image: "/image1.jpg" },
    { name: "Wave", image: "/image2.jpg" },
    { name: "Curly", image: "/image3.jpg" },
    { name: "Lace Closures", image: "/image4.jpg" },
  ];

  return (
    <section className="collections">
      <h2 className="collections__title">SHOP OUR COLLECTIONS</h2>

      <div className="collections__grid">
        {collections.map((item, index) => (
          <Link key={index} href="/shop" className="collections__card">
            <img src={item.image} alt={item.name} />

            <div className="collections__overlay">
              <span className="collections__name">{item.name}</span>

              <div className="collections__btn">VIEW</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
