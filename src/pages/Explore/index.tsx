import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Explore.css";

const impactStats = [
  { value: "120+", label: "Projects launched" },
  { value: "35", label: "Teams supported" },
  { value: "98%", label: "Client satisfaction" },
];

const featureCards = [
  {
    title: "Digital products that feel human",
    text: "We design pages and systems that are warm, trustworthy, and easy to use across every device.",
  },
  {
    title: "Brand-led storytelling",
    text: "Every section is built to communicate your mission clearly with strong typography and visual hierarchy.",
  },
  {
    title: "Fast-moving execution",
    text: "From launch pages to full platforms, we ship polished experiences with a calm, premium finish.",
  },
];

const storyCards = [
  {
    title: "Launch with confidence",
    text: "A strong hero, clear call-to-actions, and clean supporting blocks guide users toward action.",
  },
  {
    title: "Build trust quickly",
    text: "Soft color layers, rounded panels, and concise messaging create an approachable experience.",
  },
  {
    title: "Keep attention moving",
    text: "Overlapping shapes, cards, and measured spacing give the layout depth without feeling crowded.",
  },
];

const sectionReveal = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const gridStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 22, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Explore() {
  return (
    <main className="explore-page">
      <motion.section
        className="explore-hero"
        variants={sectionReveal}
        initial="hidden"
        animate="show"
      >
        <motion.div
          className="explore-hero-copy"
          variants={gridStagger}
          initial="hidden"
          animate="show"
        >
          <motion.p className="explore-kicker" variants={cardReveal}>
            Explore our work
          </motion.p>
          <motion.h1 variants={cardReveal}>
            Thoughtful digital experiences with a calm, elevated feel.
          </motion.h1>
          <motion.p className="explore-copy" variants={cardReveal}>
            Inspired by charity landing pages with generous spacing, soft color
            layers, rounded surfaces, and a clear story that leads people to act.
          </motion.p>

          <motion.div className="explore-actions" variants={cardReveal}>
            <Link className="explore-primary" to="/enquiry">
              Start a Project
            </Link>
            <Link className="explore-secondary" to="/blog">
              Read Updates
            </Link>
          </motion.div>

          <motion.div
            className="explore-stats"
            aria-label="Impact statistics"
            variants={gridStagger}
          >
            {impactStats.map((stat) => (
              <motion.article
                key={stat.label}
                className="stat-card"
                variants={cardReveal}
                whileHover={{ y: -6, scale: 1.01 }}
              >
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="explore-hero-visual"
          aria-hidden="true"
          variants={cardReveal}
          initial="hidden"
          animate="show"
        >
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <motion.div
            className="explore-feature-panel"
            whileHover={{ y: -10, rotate: -0.4 }}
            transition={{ duration: 0.35 }}
          >
            <div className="feature-badge">Featured experience</div>
            <h2>Designed to feel generous, clear, and trustworthy.</h2>
            <p>
              Layered surfaces, soft shadows, and supportive color accents make
              the page feel premium without becoming heavy.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        className="explore-section"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="section-heading" variants={cardReveal}>
          <p>What we build</p>
          <h2>Flexible sections that adapt to your story.</h2>
        </motion.div>

        <motion.div
          className="explore-grid"
          aria-label="Featured capabilities"
          variants={gridStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {featureCards.map((card) => (
            <motion.article
              key={card.title}
              className="feature-card"
              variants={cardReveal}
              whileHover={{ y: -8 }}
            >
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        className="explore-band"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div className="explore-band-copy" variants={cardReveal}>
          <p className="band-label">Mission first design</p>
          <h2>Strong, approachable, and built to guide the next step.</h2>
        </motion.div>

        <motion.div className="explore-band-actions" variants={cardReveal}>
          <Link className="explore-primary" to="/login">
            View Live Demo
          </Link>
          <Link className="explore-secondary" to="/classes">
            See Classes
          </Link>
        </motion.div>
      </motion.section>

      <motion.section
        className="explore-section"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="section-heading" variants={cardReveal}>
          <p>Why it works</p>
          <h2>A layered layout that keeps attention moving naturally.</h2>
        </motion.div>

        <motion.div
          className="story-grid"
          variants={gridStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {storyCards.map((card, index) => (
            <motion.article
              key={card.title}
              className="story-card"
              variants={cardReveal}
              whileHover={{ y: -8 }}
            >
              <span className="story-index">0{index + 1}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        className="explore-footer-cta"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div variants={cardReveal}>
          <p>Ready to build something meaningful?</p>
          <h2>Turn your idea into a page people remember.</h2>
        </motion.div>

        <motion.div variants={cardReveal}>
          <Link className="explore-primary dark" to="/enquiry">
          Contact Us
          </Link>
        </motion.div>
      </motion.section>
    </main>
  );
}
