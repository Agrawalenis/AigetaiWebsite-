import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import "./Career.css";
import BlurText from "../pages/BlurText";
import CircularGallery from "../pages/CircularGallery";

type JobOpening = {
  title: string;
  type: string;
  location: string;
  team: string;
  summary: string;
};

const openPositions: JobOpening[] = [
  {
    title: "Frontend Developer",
    type: "Full Time",
    location: "Remote",
    team: "Product Engineering",
    summary:
      "Build polished interfaces and shipping experiences for AI-powered products.",
  },
  {
    title: "Backend Developer",
    type: "Full Time",
    location: "Remote",
    team: "Platform",
    summary:
      "Design reliable APIs, data services, and scalable application infrastructure.",
  },
  {
    title: "UI/UX Designer",
    type: "Full Time",
    location: "Remote",
    team: "Design",
    summary:
      "Shape intuitive user journeys, visual systems, and product storytelling.",
  },
  {
    title: "AI Research Engineer",
    type: "Full Time",
    location: "Hybrid",
    team: "Research",
    summary:
      "Prototype model workflows, evaluation systems, and agentic experiences.",
  },
  {
    title: "Product Manager",
    type: "Full Time",
    location: "Remote",
    team: "Product",
    summary:
      "Translate customer needs into crisp roadmaps and measurable launches.",
  },
  {
    title: "DevOps Engineer",
    type: "Full Time",
    location: "Remote",
    team: "Infrastructure",
    summary:
      "Own CI/CD, deployments, observability, and production readiness.",
  },
];

export default function Career() {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);

  useEffect(() => {
    if (!selectedJob) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedJob]);

  const handleApplicationSubmit = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    setSelectedJob(null);
  };

  const scrollToOpenPositions = () => {
    const section = document.getElementById("career-open-positions");

    if (!section) {
      return;
    }

    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="careers-page">
      <BlurText
        text="Build The Future Of Imagination"
        delay={150}
        animateBy="letters"
        direction="top"
        className="hero-title"
      />

      <section className="career-pay-hero" aria-label="Career hero">
        <div className="career-pay-floating career-pay-card-a">
          <span>Remote Roles</span>
          <strong>24 Openings</strong>
        </div>

        <div className="career-pay-floating career-pay-card-b">
          <span>Growth Track</span>
          <strong>2x Promotions</strong>
        </div>

        <div className="career-pay-floating career-pay-card-c">
          <span>Global Team</span>
          <strong>22 Countries</strong>
        </div>

        <div className="career-pay-main-card" aria-hidden="true">
          <div className="career-pay-chip chip-dark">Engineering</div>
          <div className="career-pay-chip chip-green">Design</div>
          <div className="career-pay-chip chip-blue">AI Research</div>
          <div className="career-pay-chip chip-light">Product</div>
        </div>

        <p className="career-pay-kicker">AIGETAI Careers</p>
        <h1>
          Careers that feel
          <span>effortless</span>
        </h1>
        <p className="career-pay-subtext">
          Designed for builders who want ownership, velocity, and meaningful work from idea to impact.
        </p>

        <button className="career-pay-cta">Get started</button>
      </section>

      <hr className="section-divider" />

      <section className="career-video">
        <h2>Life at AIGETAI</h2>
        <video autoPlay loop muted playsInline className="career-video-player">
          <source
            src="https://static.cdn-luma.com/files/a1ecc8588bca8e63/careers-hero-video.mp4#t=0.001"
            type="video/mp4"
          />
        </video>
      </section>

      <hr className="section-divider" />

      <section className="career-details">
        <div className="career-title-row">
          <div>
            <h1>We are building a new kind of mind</h1>
            <p>
              We believe real-world physics is the path to general intelligence.
              We unite research, product, and go-to-market into one engine.
            </p>
          </div>
          <button className="career-btn">Join Our Team</button>
        </div>
      </section>

      <section className="career-life">
        <video autoPlay loop muted playsInline className="career-life-player">
          <source
            src="https://videos.pexels.com/video-files/25744121/11904048_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
      </section>

      <section className="career-comp">
        <div className="process-comp">
          <div className="comp-step">
            <h2>Team Members</h2>
            <h3>150+</h3>
          </div>

          <div className="comp-step">
            <h2>Headquarters</h2>
            <h3>Palo Alto, CA</h3>
          </div>

          <div className="comp-step">
            <h2>Users worldwide</h2>
            <h3>30K+</h3>
          </div>

          <div className="comp-step">
            <h2>Total Funding</h2>
            <h3>$3M+</h3>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      <section className="career-blog-content">
        <h2>Why Work with Us</h2>

        <div className="career-blog-grid">
          <div className="career-blog-card">
            <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429" alt="AI Innovation" />
            <div className="career-blog-overlay">
              <span className="career-blog-category">AI Innovation</span>
              <h3>The Future of Artificial Intelligence in Product Development</h3>
              <p>Artificial Intelligence is transforming how modern applications are built.</p>
            </div>
          </div>

          <div className="career-blog-card">
            <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485" alt="Machine Learning" />
            <div className="career-blog-overlay">
              <span className="career-blog-category">Machine Learning</span>
              <h3>Building Scalable Machine Learning Systems</h3>
              <p>Machine learning models are powerful, but deploying them efficiently is the real challenge.</p>
            </div>
          </div>

          <div className="career-blog-card">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" alt="Data Science" />
            <div className="career-blog-overlay">
              <span className="career-blog-category">Data Science</span>
              <h3>Turning Data Into Business Intelligence</h3>
              <p>Organizations generate massive amounts of data every day.</p>
            </div>
          </div>

          <div className="career-blog-card">
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa" alt="Cloud Technology" />
            <div className="career-blog-overlay">
              <span className="career-blog-category">Cloud Technology</span>
              <h3>Cloud Infrastructure for Modern AI Applications</h3>
              <p>Cloud platforms allow developers to build scalable and reliable AI applications.</p>
            </div>
          </div>

          <div className="career-blog-card">
            <img src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f" alt="Software Development" />
            <div className="career-blog-overlay">
              <span className="career-blog-category">Software Development</span>
              <h3>Building Scalable Applications for the Future</h3>
              <p>Modern software development focuses on scalability, performance, and user experience.</p>
            </div>
          </div>

          <div className="career-blog-card">
            <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3" alt="Cybersecurity" />
            <div className="career-blog-overlay">
              <span className="career-blog-category">Cybersecurity</span>
              <h3>Securing AI Systems in the Digital Era</h3>
              <p>As AI systems become more powerful, cybersecurity becomes critical.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="career-jobs" id="career-open-positions">
        <h2>Open Positions</h2>

        <div className="job-grid">
          {openPositions.map((job) => (
            <article className="job-card" key={job.title}>
              <div>
                <div className="job-card-topline">
                  <span>{job.team}</span>
                  <span>{job.location}</span>
                </div>
                <h3>{job.title}</h3>
                <p>
                  {job.type} • {job.location}
                </p>
                <p className="job-summary">{job.summary}</p>
              </div>
              <button type="button" onClick={() => setSelectedJob(job)}>
                Apply
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="career-process">
        <h2>Our Hiring Process</h2>

        <div className="process-grid">
          <div className="process-step">
            <h3>1. Apply</h3>
            <p>Submit your application and portfolio.</p>
          </div>

          <div className="process-step">
            <h3>2. Screening</h3>
            <p>Our team reviews your experience and skills.</p>
          </div>

          <div className="process-step">
            <h3>3. Interview</h3>
            <p>Technical and culture interviews with our team.</p>
          </div>

          <div className="process-step">
            <h3>4. Offer</h3>
            <p>If selected, we send an offer and welcome you onboard.</p>
          </div>
        </div>
      </section>

      <div style={{ height: "600px", position: "relative" }}>
        <CircularGallery
          bend={1}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollSpeed={2}
          scrollEase={0.05}
        />
      </div>

      <section className="career-cta">
        <h2>Ready to Join Us?</h2>
        <p>
          Explore exciting opportunities and become part of a team building the future of AI-driven innovation.
        </p>
        <button type="button" onClick={scrollToOpenPositions}>
          View Open Positions
        </button>
      </section>

      {selectedJob &&
        createPortal(
          <div
            className="career-apply-overlay"
            onClick={() => setSelectedJob(null)}
          >
            <div
              className="career-apply-modal"
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="career-apply-title"
            >
              <div className="career-apply-header">
                <div>
                  <p className="career-apply-kicker">Apply for this role</p>
                  <h2 id="career-apply-title">{selectedJob.title}</h2>
                  <p className="career-apply-meta">
                    {selectedJob.type} • {selectedJob.location} • {selectedJob.team}
                  </p>
                </div>
                <button
                  type="button"
                  className="career-apply-close"
                  onClick={() => setSelectedJob(null)}
                  aria-label="Close application form"
                >
                  Close
                </button>
              </div>

              <form className="career-apply-form" onSubmit={handleApplicationSubmit}>
                <div className="apply-grid">
                  <label>
                    Full Name
                    <input type="text" name="fullName" required />
                  </label>
                  <label>
                    Email Address
                    <input type="email" name="email" required />
                  </label>
                  <label>
                    Phone Number
                    <input type="tel" name="phone" required />
                  </label>
                  <label>
                    Current Location
                    <input type="text" name="location" required />
                  </label>
                  <label>
                    Portfolio or LinkedIn
                    <input type="url" name="portfolio" placeholder="https://" />
                  </label>
                  <label>
                    Years of Experience
                    <input type="number" name="experience" min="0" required />
                  </label>
                </div>

                <label>
                  Cover Letter
                  <textarea
                    name="coverLetter"
                    rows={5}
                    placeholder="Tell us why you are a strong fit for this role"
                    required
                  />
                </label>

                <label>
                  Upload Resume
                  <input type="file" name="resume" accept=".pdf,.doc,.docx" required />
                </label>

                <div className="career-apply-actions">
                  <button type="button" className="secondary" onClick={() => setSelectedJob(null)}>
                    Cancel
                  </button>
                  <button type="submit" className="primary">
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}