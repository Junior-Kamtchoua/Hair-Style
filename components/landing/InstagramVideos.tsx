"use client";

export default function InstagramVideos() {
  const videos = [
    "/videos/video1.mp4",
    "/videos/video2.mp4",
    "/videos/video1.mp4",
    "/videos/video2.mp4",
  ];

  return (
    <section className="insta">
      <h2 className="insta__title">Follow @dhairboutique on Instagram</h2>

      <div className="insta__grid">
        {videos.map((src, i) => (
          <div key={i} className="insta__card">
            <video src={src} autoPlay loop muted playsInline />
          </div>
        ))}
      </div>
    </section>
  );
}
