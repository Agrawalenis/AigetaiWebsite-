import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "./service.css";

import demo1 from "../assets/demo1.mp4";
import demo2 from "../assets/demo2.mp4";
import demo3 from "../assets/demo3.mp4";
import demo4 from "../assets/demo4.mp4";
import demo5 from "../assets/demo5.mp4";

type Slide = {
  id: number;
  label: string;
  sub: string;
  video: string;
};

const slides: Slide[] = [
  {
    id: 0,
    label: "Web Development",
    sub: "Scalable, fast, and beautiful web apps built to convert.",
    video: demo1,
  },
  {
    id: 1,
    label: "AI Solutions",
    sub: "Intelligent systems that automate decisions and surface insights.",
    video: demo2,
  },
  {
    id: 2,
    label: "Cloud & DevOps",
    sub: "Zero-downtime infrastructure that scales with your growth.",
    video: demo3,
  },
  {
    id: 3,
    label: "Mobile Apps",
    sub: "Native and cross-platform apps users actually love using.",
    video: demo4,
  },
  {
    id: 4,
    label: "Cybersecurity",
    sub: "End-to-end security audits, hardening, and monitoring.",
    video: demo5,
  },
];

export default function Service() {
  const [activeIndex, setActiveIndex] = useState(3);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const next = () => setActiveIndex((i) => (i + 1) % slides.length);
  const prev = () => setActiveIndex((i) => (i - 1 + slides.length) % slides.length);

  const getCircularOffset = (index: number, center: number) => {
    const total = slides.length;
    let diff = index - center;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === activeIndex) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0.001;
      }
    });
  }, [activeIndex]);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % slides.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{height:1000}}>
      <div className="service-header ">
        <span className="service-eyebrow">OUR SERVICES</span>
        <h2 className="service-heading">
          Everything you need to ship great products
        </h2>
      </div>

      <div className="tabs">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`tab ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            {slide.label}
          </button>
        ))}
      </div>

      <div className="carousel-wrapper">
        <button className="nav left" onClick={prev} aria-label="Previous service">
          <svg viewBox="0 0 24 24">
            <path d="M15 18L9 12L15 6" />
          </svg>
        </button>

        <motion.div
          className="carousel"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.25}
          onDragEnd={(_, info) => {
            if (info.offset.x < -12) next();
            if (info.offset.x > 12) prev();
          }}
        >
          {slides.map((slide, index) => {
            const offset = getCircularOffset(index, activeIndex);
            const slideWidth = 700;

            const isCenter = offset === 0;
            const isLeft = offset === -1;
            const isRight = offset === 1;

            const x = isCenter
              ? -slideWidth / 2
              : isLeft
              ? -700 - slideWidth / 2
              : isRight
              ? 700 - slideWidth / 2
              : offset < 0
              ? -1100
              : 1100;

            const y = isCenter ? 0 : 100;
            const scale = isCenter ? 1.1 : isLeft || isRight ? 0.7 : 0.6;
            const rotate = isCenter ? 0 : offset < 0 ? -12 : 12;
            const opacity = isCenter ? 1 : isLeft || isRight ? 0.55 : 0;
            const blur = isCenter ? "blur(0px)" : "blur(5px)";
            const zIndex = isCenter ? 3 : 2;

            return (
              <motion.div
                key={slide.id}
                className="slide"
                animate={{ x, y, scale, rotate, opacity, filter: blur, zIndex }}
                transition={{ type: "spring", stiffness: 210, damping: 24 }}
              >
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  src={slide.video}
                  muted
                  loop
                  playsInline
                />
                {isCenter && (
                  <div className="slide-overlay">
                    <h3>{slide.label}</h3>
                    <p>{slide.sub}</p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        <button className="nav right" onClick={next} aria-label="Next service">
          <svg viewBox="0 0 24 24">
            <path d="M9 6L15 12L9 18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
