import { useNavigate } from "react-router-dom";

import {
  easeOut,
  motion,
  useScroll,
  useVelocity,
  useMotionValueEvent,
} from "framer-motion";

import demo1 from "../assets/demo1.mp4";
import demo2 from "../assets/demo2.mp4";
import demo3 from "../assets/demo3.mp4";
import demo4 from "../assets/demo4.mp4";
import demo5 from "../assets/demo5.mp4";
import demo6 from "../assets/demo6.mp4";
import "./Hero.css";
import { useState } from "react";

const videos = [
  { src: demo1, x: "200%", y: "-200%", delay: 0, scale: 1 },
  { src: demo2, x: "200%", y: "200%", delay: 1, scale: 1 },
  { src: demo3, x: "-250%", y: "-250%", delay: 2, scale: 1 },
  { src: demo4, x: "-250%", y: "250%", delay: 3, scale: 1 },
  { src: demo5, x: "-130%", y: "180%", delay: 4, scale: 1 },
  { src: demo6, x: "250%", y: "-100%", delay: 5, scale: 1 },
];

export default function Hero() {
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const navigate = useNavigate();

  // Update animation speed based on scroll velocity
  useMotionValueEvent(velocity, "change", (latest) => {
    // Map velocity to speed multiplier (0.5x to 2x speed)
    const speed = Math.min(Math.max(1 + latest * 0.05, 0.5), 2);
    setAnimationSpeed(speed);
  });

  return (
    <section className="hero">
      {/* VIDEO LAYER */}
      <div className="hero-videos">
        {videos.map((video, index) => (
          <motion.video
            key={index}
            className="hero-video"
            src={video.src}
            autoPlay
            muted
            loop
            playsInline
            initial={{
              x: "-70%",
              y: 0,
              opacity: 0,
              scale: 0.01,
              filter: "blur(7px)",
            }}
            animate={{
              x: video.x,
              y: video.y,
              opacity: 1,
              scale: video.scale,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 10 / animationSpeed,
              delay: video.delay,
              ease: easeOut,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        ))}
      </div>

      {/* CONTENT */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <h1>
          We Build Intelligent Software That{" "}
          <span>Scales With Your Vision</span>
        </h1>

        <p>
          Transform ideas into production-ready solutions. Web apps, mobile
          platforms, and AI systems built with cutting-edge technology and
          designed to grow with your business
        </p>

        <div className="hero-actions">
          <button className="primary" onClick={() => navigate("/login")}>
            Start Your Project
          </button>
          <button className="secondary" onClick={() => navigate("/explore")}>
            Explore our work
          </button>
        </div>
      </motion.div>
    </section>
  );
}
