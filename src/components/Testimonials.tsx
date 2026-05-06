import { motion } from "framer-motion";
import "./Testimonials.css";

const testimonials = [
  {
    quote:
      "AIGETAI transformed our legacy monolith into a cloud-native microservices platform in under four months. The technical depth, clear communication, and ownership mentality made it feel like a world-class in-house team.",
    name: "Sarah Chen",
    role: "CTO",
    company: "NovaTech Systems",
    initials: "SC",
  },
  {
    quote:
      "They built our entire product from the ground up — React frontend, Node.js API, and an ML recommendations engine. Shipped on time with zero compromise on quality. Absolutely phenomenal execution.",
    name: "Marcus Rivera",
    role: "Founder & CEO",
    company: "LaunchPad AI",
    initials: "MR",
  },
  {
    quote:
      "The real-time analytics dashboard they built for us handles over 10 million events per day without breaking a sweat. Clean architecture, thorough documentation, and genuinely brilliant problem-solving at every step.",
    name: "Priya Sharma",
    role: "VP of Engineering",
    company: "FinVault",
    initials: "PS",
  },
];

const StarIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#f59e0b"
    aria-hidden="true"
  >
    <path d="M8 1l1.854 3.757 4.146.603-3 2.923.708 4.127L8 10.25l-3.708 1.16.708-4.127-3-2.923 4.146-.603L8 1z" />
  </svg>
);

export default function Testimonials() {
  return (
    <section className="testimonials-section" aria-labelledby="testimonials-heading">
      <div className="testimonials-inner">
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <span className="testimonials-eyebrow">CLIENT STORIES</span>
          <h2 id="testimonials-heading">
            Trusted by engineering teams that ship
          </h2>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <motion.article
              key={i}
              className="testimonial-card"
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.14 }}
            >
              <div className="stars" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, si) => (
                  <StarIcon key={si} />
                ))}
              </div>

              <blockquote>
                <p className="testimonial-quote">"{t.quote}"</p>
              </blockquote>

              <footer className="testimonial-author">
                <div className="author-avatar" aria-hidden="true">
                  {t.initials}
                </div>
                <div className="author-meta">
                  <strong>{t.name}</strong>
                  <span>
                    {t.role}, {t.company}
                  </span>
                </div>
              </footer>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
