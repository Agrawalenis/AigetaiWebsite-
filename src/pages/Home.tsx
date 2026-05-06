import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Hero from "../components/Hero";
import Service from "../components/Service";
import WhatWeDo from "../components/WhatWeDo";
import FAQSection from "../components/FAQSection";
import StatsSection from "../components/StatsSection";
import ProcessSection from "../components/ProcessSection";
import TechMarquee from "../components/TechMarquee";
import TechStack from "../components/TechStack";
import DevOpsFlow from "../components/DevOpsFlow";
import Testimonials from "../components/Testimonials";
import CircularGallery from "../pages/CircularGallery";
import videoBg from "../assets/videoplayback.mp4";

/* Tech-relevant images for the scrolling gallery */
const galleryItems = [
  {
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    text: "Web Development",
  },
  {
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=800&q=80",
    text: "AI & Machine Learning",
  },
  {
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    text: "Cloud Infrastructure",
  },
  {
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    text: "Mobile Applications",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    text: "Data Analytics",
  },
  {
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    text: "Cybersecurity",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80",
    text: "Full Stack",
  },
  {
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    text: "Neural Networks",
  },
  {
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
    text: "Backend Engineering",
  },
  {
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
    text: "DevOps & CI/CD",
  },
];


export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/*  HERO ── */}
      <Hero />

      {/*  COMPANY INTRO ── */}
      <motion.section
        className="headline-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2>We build intelligent software that scales with your vision</h2>
        <p>
          AIGETAI is a forward-thinking software company specialising in
          end-to-end digital solutions. We combine modern frameworks, cloud
          infrastructure, and artificial intelligence to build products that
          solve real problems — for startups and enterprises alike.
        </p>
      </motion.section>

      {/*  STATS ── */}
      <StatsSection />

           {/*  SERVICE CAROUSEL ── */}
      <section className="carousel-section">
        <Service />
      </section>



      {/* TECH MARQUEE ── */}
      <TechMarquee />

      {/*  CIRCULAR GALLERY (tech images) ── */}
      <div style={{ height: "600px", position: "relative" }}>
        <CircularGallery
          items={galleryItems}
          bend={1}
          textColor="#000000d3"
          borderRadius={0.05}
          scrollSpeed={2}
          scrollEase={0.05}
        />
      </div>

 


      {/*  STRATEGIC PARTNER INTRO ── */}
      <motion.section
        className="headline-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2>Your strategic partner for digital innovation</h2>
        <p>
          We design and develop web apps, mobile applications, AI-powered
          systems, and custom software — delivering scalable, secure, and
          reliable solutions with ongoing support at every stage.
        </p>
      </motion.section>

      {/*  PROCESS (replaces OrbitImages) ── */}
      <ProcessSection />

 {/*  TECH STACK ── */}
      <TechStack />

      <hr className="section-divider" />

      {/* WHAT WE DO ── */}
      <WhatWeDo />

     

      {/*  DEVOPS PIPELINE ── */}
      <DevOpsFlow />

      {/*  VIDEO CTA ── */}
      <section className="video-section">
        <video
          className="video-bg"
          src={videoBg}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="video-overlay">
          <motion.div
            className="video-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2>Ready to build something extraordinary?</h2>
            <p>
              Tell us about your project. We'll review it and get back to you
              within 48 hours with a clear plan, timeline, and honest pricing.
            </p>
            <div className="video-actions">
              <button
                className="video-cta-primary"
                onClick={() => navigate("/enquiry")}
              >
                Start Your Project
              </button>
              <button
                className="video-cta-secondary"
                onClick={() => navigate("/explore")}
              >
                See Our Work →
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 12. TESTIMONIALS ── */}
      <Testimonials />

      {/* ── 13. FAQ ── */}
      <FAQSection />
    </>
  );
}
