import React, { useRef } from "react";
import "./WhatWeDo.css";

const cards = [
  {
    title: "Brainstorm & Creative Query",
    desc: "Never run out of ideas. Generate, refine, and explore concepts instantly.",
  },
  {
    title: "Boards",
    desc: "Organize ideas visually with structured boards for every workflow.",
  },
  {
    title: "Creative Intelligence",
    desc: "Leverage AI systems to enhance creativity and decision-making.",
  },
  {
    title: "Make Videos",
    desc: "Create and control visual storytelling with precision tools.",
  },
  {
    title: "Generate Images",
    desc: "Produce stunning visuals with AI-powered image generation.",
  },
];

const WhatWeDo = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const cards = document.querySelectorAll(".minimal-card");

    cards.forEach((card) => {
      const rect = (card as HTMLElement).getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = -(y - centerY) / 20;
      const rotateY = (x - centerX) / 20;

      (card as HTMLElement).style.transform = `
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg) 
        scale(1.04)
      `;
    });
  };

  const resetCards = () => {
    const cards = document.querySelectorAll(".minimal-card");
    cards.forEach((card) => {
      (card as HTMLElement).style.transform =
        "rotateX(0deg) rotateY(0deg) scale(1)";
    });
  };

  return (
    <section
      className="minimal-section"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetCards}
    >
      <div className="minimal-container">
        {cards.map((card, index) => (
          <div className="minimal-card" key={index}>
            <h2>{card.title}</h2>
            <p>{card.desc}</p>
            <span>Learn more →</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
