import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./App.css";

type Slide = {
  id: number;
  label: string;
  video: string;
};

const slides: Slide[] = [
  {
    id: 0,
    label: "Film",
    video:
      "https://static.cdn-luma.com/files/sanity/55d01c65-d5a7-4bad-8f22-33baa74aad13.mp4#t=0.001",
  },
  {
    id: 1,
    label: "Anime",
    video:
      "https://static.cdn-luma.com/files/sanity/a7267d5a-d7c7-402f-881e-b07058d49504.mp4#t=0.001",
  },
  {
    id: 2,
    label: "VFX",
    video:
      "https://static.cdn-luma.com/files/sanity/af28ceee-9f30-4bb1-9e01-61622809c663.mp4#t=0.001",
  },
  {
    id: 3,
    label: "Advertising",
    video:
      "https://static.cdn-luma.com/files/sanity/de569b89-354c-4e55-96ba-98285f334cc4.mp4#t=0.001",
  },
  {
    id: 4,
    label: "Gaming",
    video:
      "https://static.cdn-luma.com/files/sanity/851eef41-07f6-4ced-b224-d49a49df5f60.mp4#t=0.001",
  },
];

export default function App() {
  const [active, setActive] = useState(3);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const getCircularOffset = (index: number, center: number) => {
    const total = slides.length;
    let diff = index - center;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  const next = () => setActive((i) => (i + 1) % slides.length);
  const prev = () => setActive((i) => (i - 1 + slides.length) % slides.length);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === active) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0.001;
      }
    });
  }, [active]);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 4500);

    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div className="tabs">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`tab ${index === active ? "active" : ""}`}
            onClick={() => setActive(index)}
          >
            {slide.label}
          </button>
        ))}
      </div>

      <div className="carousel-wrapper">
        <button className="nav left" onClick={prev}>
          <ChevronLeft size={22} />
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
            const offset = getCircularOffset(index, active);
            const slideWidth = 800;

            const isCenter = offset === 0;
            const isLeft = offset === -1;
            const isRight = offset === 1;

            const x = isCenter
              ? -slideWidth / 2
              : isLeft
              ? -760 - slideWidth / 2
              : isRight
              ? 760 - slideWidth / 2
              : (offset < 0 ? -1200 : 1200) - slideWidth / 2;

            const y = isCenter ? 0 : 120;
            const scale = isCenter ? 1.12 : isLeft || isRight ? 0.68 : 0.6;
            const rotate = isCenter ? 0 : offset < 0 ? -15 : 15;
            const opacity = isCenter ? 1 : isLeft || isRight ? 0.7 : 0;
            const blur =
              isCenter ? "blur(0px)" : isLeft || isRight ? "blur(4px)" : "blur(8px)";
            const zIndex = isCenter ? 3 : isLeft || isRight ? 2 : 1;

            return (
              <motion.div
                key={slide.id}
                className="slide"
                animate={{
                  x,
                  y,
                  scale,
                  rotate,
                  opacity,
                  filter: blur,
                  zIndex,
                }}
                transition={{
                  type: "spring",
                  stiffness: 210,
                  damping: 24,
                }}
              >
                <motion.video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  src={slide.video}
                  muted
                  loop
                  playsInline
                  preload="auto"
                />
              </motion.div>
            );
          })}
        </motion.div>

        <button className="nav right" onClick={next}>
          <ChevronRight size={22} />
        </button>
      </div>
    </>
  );
}
