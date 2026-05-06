import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./FAQSection.css";

const faqData = [
  {
    question: "What do you build?",
    answer:
      "We develop scalable web apps, mobile applications, AI systems, and custom software tailored to business needs.",
  },
  {
    question: "Who is it for?",
    answer:
      "Startups, growing teams, and enterprises looking to build or scale digital products.",
  },
  {
    question: "How do I get started?",
    answer:
      "Submit your requirements through the enquiry form. We review and initiate the project.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes. We provide maintenance, updates, and performance optimization post-launch.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="faq-container">
        <p className="faq-subtitle">TRUSTED BY</p>
        <h2 className="faq-title">
          Frequently <br /> Asked Questions
        </h2>

        <div className="faq-list">
          {faqData.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className={`faq-item ${isActive ? "active" : ""}`}
              >
                <div className="faq-header" onClick={() => toggleFAQ(index)}>
                  <h3>{faq.question}</h3>
                  <span className="icon">{isActive ? "×" : "+"}</span>
                </div>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
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
