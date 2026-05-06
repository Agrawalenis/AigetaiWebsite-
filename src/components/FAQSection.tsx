import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./FAQSection.css";

const faqData = [
  {
    question: "What types of projects do you build?",
    answer:
      "We develop scalable web applications, mobile apps (iOS & Android), AI/ML systems, cloud infrastructure, and custom enterprise software. Every project is engineered from the ground up to match your exact requirements and business goals.",
  },
  {
    question: "Who do you typically work with?",
    answer:
      "Startups validating an MVP, growing companies scaling their infrastructure, and enterprises modernizing legacy systems. If you're building something ambitious with real technical complexity, we're the team for it.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "An MVP typically takes 8–12 weeks. Full-scale products range from 3–6 months depending on complexity. We provide a detailed timeline in our discovery phase and hold ourselves accountable to it.",
  },
  {
    question: "How do I get started?",
    answer:
      "Submit your requirements through our enquiry form. Within 48 hours, we'll schedule a discovery call to understand your goals, then deliver a detailed proposal covering scope, timeline, and pricing.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes. We offer flexible maintenance plans covering bug fixes, security patches, performance monitoring, and incremental feature additions. Most clients continue working with us long after the initial product ships.",
  },
  {
    question: "How do you handle communication throughout the project?",
    answer:
      "You get a dedicated project manager, weekly progress calls, a shared project dashboard, and a direct Slack channel with your core team. Transparent communication is non-negotiable for us.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq" aria-labelledby="faq-heading">
      <div className="faq-container">
        <span className="faq-eyebrow">HAVE QUESTIONS?</span>
        <h2 className="faq-title" id="faq-heading">
          Frequently asked questions
        </h2>

        <div className="faq-list" role="list">
          {faqData.map((faq, index) => {
            const isActive = activeIndex === index;
            const panelId = `faq-panel-${index}`;
            const headerId = `faq-header-${index}`;

            return (
              <div
                key={index}
                className={`faq-item ${isActive ? "active" : ""}`}
                role="listitem"
              >
                <button
                  id={headerId}
                  className="faq-header"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isActive}
                  aria-controls={panelId}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon" aria-hidden="true">
                    {isActive ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={headerId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <p className="faq-answer">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
