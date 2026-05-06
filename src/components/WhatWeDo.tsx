import React from "react";
import { motion } from "framer-motion";
import "./WhatWeDo.css";

type Card = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  tag: string;
};

const CodeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="16,18 22,12 16,6" />
    <polyline points="8,6 2,12 8,18" />
  </svg>
);

const MobileIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);

const BrainIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 3H8a5 5 0 0 0 0 10h1" />
    <path d="M15 3h1a5 5 0 0 1 0 10h-1" />
    <path d="M9 13v8" />
    <path d="M15 13v8" />
    <path d="M9 17h6" />
    <path d="M12 3v10" />
  </svg>
);

const CloudIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
  </svg>
);

const PenIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
  </svg>
);

const GearIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const cards: Card[] = [
  {
    icon: <CodeIcon />,
    title: "Custom Software Development",
    desc: "Tailored solutions engineered for your unique business challenges. Clean architecture, maintainable code, built to outlast hype cycles.",
    tag: "Full-stack · APIs · Microservices",
  },
  {
    icon: <MobileIcon />,
    title: "Web & Mobile Applications",
    desc: "High-performance apps that deliver exceptional user experiences across web, iOS, and Android — built with the frameworks that last.",
    tag: "React · React Native · Flutter",
  },
  {
    icon: <BrainIcon />,
    title: "AI & Machine Learning",
    desc: "Intelligent systems that automate complex workflows, surface actionable insights, and bring real predictive power to your product.",
    tag: "LLMs · ML Pipelines · NLP",
  },
  {
    icon: <CloudIcon />,
    title: "Cloud Infrastructure",
    desc: "Secure, resilient architectures designed for zero-downtime deployment, automated scaling, and cost-optimised performance on any cloud.",
    tag: "AWS · GCP · Kubernetes",
  },
  {
    icon: <PenIcon />,
    title: "UI/UX Design",
    desc: "User-centric design grounded in research — interfaces that are intuitive, accessible, and genuinely enjoyable to use at every touchpoint.",
    tag: "Figma · Design Systems · A/B",
  },
  {
    icon: <GearIcon />,
    title: "DevOps & Automation",
    desc: "CI/CD pipelines, infrastructure as code, and full observability stacks. Ship faster, break less, and own your deployment process.",
    tag: "Docker · Terraform · GitHub Actions",
  },
];

const WhatWeDo = () => (
  <section className="minimal-section" aria-labelledby="whatwedo-heading">
    <div className="minimal-heading-area">
      <span className="minimal-eyebrow">WHAT WE DO</span>
      <h2 id="whatwedo-heading">Services built for modern product teams</h2>
    </div>

    <div className="minimal-grid">
      {cards.map((card, index) => (
        <motion.div
          className="minimal-card"
          key={index}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: index * 0.08 }}
        >
          <div className="minimal-card-icon">{card.icon}</div>
          <h3>{card.title}</h3>
          <p>{card.desc}</p>
          <span className="minimal-card-tag">{card.tag}</span>
        </motion.div>
      ))}
    </div>
  </section>
);

export default WhatWeDo;
