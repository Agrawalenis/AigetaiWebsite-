import { useRef } from "react";

import Hero from "../components/Hero";


import Footer from "../components/Footer";
import videoBg from "../assets/videoplayback.mp4";
import CircularGallery from "../pages/CircularGallery";
import Masonry from "./Masonry";
import OrbitImages from "./OrbitImages";

import Service from "../components/Service";
import webDevImg1 from "../assets/feature/source2.png";
import webDevImg2 from "../assets/feature/source3.png";
import webDevImg3 from "../assets/feature/source4.png";
import webDevImg4 from "../assets/feature/source5.png";
import webDevImg5 from "../assets/feature/source6.png";
import webDevImg6 from "../assets/feature/source7.png";
import webDevImg7 from "../assets/feature/source8.png";

import WhatWeDo from "../components/WhatWeDo";
import FAQSection from "../components/FAQSection";
export default function Home() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const slider = scrollRef.current;
    if (!slider) return;

    let startX = e.pageX - slider.offsetLeft;
    let scrollLeft = slider.scrollLeft;

    const onMouseMove = (e: MouseEvent) => {
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.2;
      slider.scrollLeft = scrollLeft - walk;
    };

    const onMouseUp = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  const orbitImages = [
    "https://picsum.photos/300/300?grayscale&random=1",
    "https://picsum.photos/300/300?grayscale&random=2",
    "https://picsum.photos/300/300?grayscale&random=3",
    "https://picsum.photos/300/300?grayscale&random=4",
    "https://picsum.photos/300/300?grayscale&random=5",
    "https://picsum.photos/300/300?grayscale&random=6",
  ];

  const masonryItems = [
    {
      id: "m1",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
      url: "https://example.com/m1",
      height: 520,
    },
    {
      id: "m2",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
      url: "https://example.com/m2",
      height: 360,
    },
    {
      id: "m3",
      img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80",
      url: "https://example.com/m3",
      height: 470,
    },
    {
      id: "m4",
      img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80",
      url: "https://example.com/m4",
      height: 320,
    },
    {
      id: "m5",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80",
      url: "https://example.com/m5",
      height: 430,
    },
    {
      id: "m6",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
      url: "https://example.com/m6",
      height: 520,
    },
    {
      id: "m7",
      img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
      url: "https://example.com/m7",
      height: 380,
    },
    {
      id: "m8",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
      url: "https://example.com/m8",
      height: 460,
    },
    {
      id: "m9",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
      url: "https://example.com/m9",
      height: 340,
    },
    {
      id: "m10",
      img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80",
      url: "https://example.com/m10",
      height: 500,
    },
  ];

  return (
    <>
      <Hero />

      {/* NEW HEADLINE SECTION */}
      <section className="headline-section">
        <h2>AIGETAI</h2>
        <p>
          AIGETAI is a forward-thinking software company specializing in
          end-to-end digital solutions. We combine modern frameworks, cloud
          infrastructure, and artificial intelligence to build products that
          solve real problems. From startups to enterprises, we turn complex
          challenges into elegant, scalable software.
        </p>
      </section>

      {/* ===================== */}

      <div style={{ height: "600px", position: "relative" }}>
        <CircularGallery
          bend={1}
          textColor="#000000d3"
          borderRadius={0.05}
          scrollSpeed={2}
          scrollEase={0.05}
        />
      </div>

      <section className="my-24 carousel-section">
        <Service />
      </section>

      <hr className="section-divider" />

      {/* new headline section */}
      <section className="headline-section">
        <h2>Your creative partner for ideation & imagination</h2>
        <p>
          {" "}
          We design and develop web apps, mobile applications, AI-powered
          systems, and custom software—delivering scalable, secure, and reliable
          solutions with ongoing support.
        </p>
      </section>

      {/* orbit images */}
      <section className="orbit-section">
        <OrbitImages
          images={orbitImages}
          shape="ellipse"
          radiusX={570}
          radiusY={100}
          rotation={-8}
          duration={65}
          itemSize={140}
          responsive={true}
          radius={160}
          direction="normal"
          fill
          showPath
          paused={false}
        />
      </section>

      <hr className="section-divider" />

      <WhatWeDo />

      <section
        style={{
          height: "82vh",
          minHeight: "620px",
          position: "relative",
          margin: "2rem 0 2.5rem",
        }}
      >
        <Masonry
          items={masonryItems}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover
          hoverScale={0.95}
          blurToFocus
          colorShiftOnHover={false}
        />
      </section>

      {/* Video Background Section */}
      <section className="video-section">
        <video
          className="video-bg"
          src={videoBg}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="video-overlay">
          <div className="video-content">
            <h2>Your creative partner for ideation & imagination</h2>
            <p>
              We design and develop web apps, mobile applications, AI-powered
              systems, and custom software—delivering scalable, secure, and
              reliable solutions with ongoing support.
            </p>
          </div>
        </div>
      </section>

      {/* WEBSITE FAQ SECTION */}
      <FAQSection />

      {/* <Footer /> */}
    </>
  );
}
