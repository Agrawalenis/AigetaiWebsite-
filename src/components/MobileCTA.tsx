import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./MobileCTA.css";

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <div className="mcta-wrap">
          <motion.button
            className="mcta-btn"
            onClick={() => navigate("/enquiry")}
            initial={{ y: 90, opacity: 0, scale: 0.85 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 90, opacity: 0, scale: 0.85 }}
            transition={{ type: "spring", stiffness: 420, damping: 30 }}
            whileTap={{ scale: 0.94 }}
          >
            <span className="mcta-shine" />
            <motion.span
              className="mcta-icon"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            >
              ⚡
            </motion.span>
            <span className="mcta-label">Start Your Project</span>
            <motion.span
              className="mcta-arrow"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </motion.button>

          <motion.a
            className="mcta-chat"
            href="https://whatsapp.com/channel/0029VbBkWKjEwEk4Ok5kkf3V"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            initial={{ y: 90, opacity: 0, scale: 0.85 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 90, opacity: 0, scale: 0.85 }}
            transition={{ type: "spring", stiffness: 420, damping: 30, delay: 0.07 }}
            whileTap={{ scale: 0.87 }}
          >
            <span className="mcta-ring" />
            <span className="mcta-ring mcta-ring--slow" />
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.43 0 .06 5.37.06 11.98c0 2.11.55 4.16 1.6 5.98L0 24l6.17-1.62a11.95 11.95 0 0 0 5.87 1.5h.01c6.61 0 11.98-5.37 11.98-11.98a11.9 11.9 0 0 0-3.51-8.42Z" />
            </svg>
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  );
}
