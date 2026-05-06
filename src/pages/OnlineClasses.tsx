import { useState } from "react";
import "./OnlineClasses.css";
import reactImg from '../assets/online-class/React-JSi.jpg';
import uiuxImg from '../assets/online-class/UI-UX-Design.jpg';
import AIImg from '../assets/online-class/Artificial intelligence (AI).jpg';
import heroImg from '../assets/online-class/online-hero.jpg';

const CATEGORIES = ["All", "Web Development", "AI & Machine Learning", "UI/UX Design", "Data Science", "Cloud"];

interface Course {
  id: number;
  img: string;
  title: string;
  instructor: string;
  rating: number;
  reviews: number;
  bestseller: boolean;
  category: string;
  hours: number;
  level: string;
  lectures: number;
}

const COURSES: Course[] = [
  {
    id: 1,
    img: reactImg,
    title: "React & TypeScript – The Complete Developer Guide",
    instructor: "Sarah Johnson",
    rating: 4.8,
    reviews: 12403,
    bestseller: true,
    category: "Web Development",
    hours: 42,
    level: "All Levels",
    lectures: 310,
  },
  {
    id: 2,
    img: AIImg,
    title: "Artificial Intelligence A–Z: Build AI Models from Scratch",
    instructor: "Marcus Chen",
    rating: 4.7,
    reviews: 8930,
    bestseller: true,
    category: "AI & Machine Learning",
    hours: 36,
    level: "Beginner",
    lectures: 240,
  },
  {
    id: 3,
    img: uiuxImg,
    title: "UI/UX Design Bootcamp: Figma, Prototyping & Research",
    instructor: "Priya Sharma",
    rating: 4.9,
    reviews: 6210,
    bestseller: false,
    category: "UI/UX Design",
    hours: 28,
    level: "Beginner",
    lectures: 185,
  },
  {
    id: 4,
    img: reactImg,
    title: "Next.js 14 – Full Stack Web Apps with AI Integration",
    instructor: "David Park",
    rating: 4.6,
    reviews: 4100,
    bestseller: false,
    category: "Web Development",
    hours: 31,
    level: "Intermediate",
    lectures: 210,
  },
  {
    id: 5,
    img: AIImg,
    title: "Machine Learning & Deep Learning with Python",
    instructor: "Elena Rossi",
    rating: 4.8,
    reviews: 9820,
    bestseller: true,
    category: "AI & Machine Learning",
    hours: 44,
    level: "All Levels",
    lectures: 290,
  },
  {
    id: 6,
    img: uiuxImg,
    title: "Advanced Figma: Design Systems, Auto Layout & Components",
    instructor: "Amit Patel",
    rating: 4.7,
    reviews: 3310,
    bestseller: false,
    category: "UI/UX Design",
    hours: 18,
    level: "Advanced",
    lectures: 120,
  },
  {
    id: 7,
    img: reactImg,
    title: "Node.js & Express: Backend Development Masterclass",
    instructor: "James Carter",
    rating: 4.7,
    reviews: 7650,
    bestseller: true,
    category: "Web Development",
    hours: 38,
    level: "Intermediate",
    lectures: 250,
  },
  {
    id: 8,
    img: AIImg,
    title: "Data Science & Analytics: From Zero to Expert",
    instructor: "Li Wei",
    rating: 4.6,
    reviews: 5540,
    bestseller: false,
    category: "Data Science",
    hours: 50,
    level: "All Levels",
    lectures: 340,
  },
];

const STATS = [
  { value: "500+", label: "Courses Available" },
  { value: "100+", label: "Enrolled Students" },
  { value: "90+", label: "Expert Instructors" },
  { value: "80%", label: "Satisfaction Rate" },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="oc-stars">
      {[1, 2, 3, 4, 5].map((i) => {
        const filled = i <= Math.floor(rating);
        const partial = !filled && i === Math.ceil(rating);
        return (
          <span key={i} className={`oc-star ${filled ? "filled" : partial ? "partial" : "empty"}`}>
            ★
          </span>
        );
      })}
    </span>
  );
}

export default function OnlineClasses() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const scrollToCourses = () => {
    const coursesSection = document.getElementById("oc-courses");

    if (!coursesSection) {
      return;
    }

    coursesSection.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const browseAllCourses = () => {
    setActiveCategory("All");
    setSearchQuery("");
    setSearchInput("");
    scrollToCourses();
  };

  const filtered = COURSES.filter((c) => {
    const matchCat = activeCategory === "All" || c.category === activeCategory;
    const matchSearch =
      searchQuery === "" ||
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    setSearchQuery(searchInput);
  }

  return (
    <div className="oc-page">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="oc-hero" aria-label="Online classes hero">
        <div className="oc-hero-glow oc-hero-glow-a" />
        <div className="oc-hero-glow oc-hero-glow-b" />

        <div className="oc-hero-content">
          <p className="oc-hero-kicker">Online learning studio</p>
          <h1 className="oc-hero-heading">
            Build Future-Ready Skills
            <span>with immersive courses</span>
          </h1>
          <p className="oc-hero-sub">
            Learn AI, development, design, and data with real projects,
            mentor support, and flexible timelines built for creators.
          </p>

          <div className="oc-hero-actions">
            <button className="oc-hero-primary" type="button" onClick={scrollToCourses}>
              Explore Courses
            </button>
            <button className="oc-hero-secondary" type="button">Watch Demo</button>
          </div>

          <form className="oc-search-bar" onSubmit={handleSearch}>
            <svg className="oc-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search for any course..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>

          <p className="oc-hero-popular">
            Popular: React, Next.js, Python, Figma, Machine Learning
          </p>
        </div>

        <div className="oc-hero-visual" aria-hidden="true">
          <div className="oc-hero-image-wrap">
            <img src={heroImg} alt="" loading="lazy" />
          </div>

          <article className="oc-floating-card oc-floating-card-top">
            <p>Live cohort starts</p>
            <h3>April 18</h3>
          </article>

          <article className="oc-floating-card oc-floating-card-bottom">
            <p>Completion rate</p>
            <h3>94%</h3>
          </article>
        </div>
      </section>

      {/* ── STATS STRIP ──────────────────────────────────── */}
      <section className="oc-stats">
        {STATS.map((s) => (
          <div className="oc-stat" key={s.label}>
            <span className="oc-stat-value">{s.value}</span>
            <span className="oc-stat-label">{s.label}</span>
          </div>
        ))}
      </section>

      {/* ── COURSES ──────────────────────────────────────── */}
      <section className="oc-courses" id="oc-courses">
        <div className="oc-courses-header">
          <h2>
            {activeCategory === "All" ? "All Courses" : activeCategory}
            <span className="oc-courses-count">{filtered.length} courses</span>
          </h2>
        </div>

        {/* Category tabs */}
        <div className="oc-tabs" role="tablist">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              className={`oc-tab ${activeCategory === cat ? "active" : ""}`}
              onClick={() => { setActiveCategory(cat); setSearchQuery(""); setSearchInput(""); }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course grid */}
        {filtered.length === 0 ? (
          <p className="oc-no-results">No courses found. Try a different search or category.</p>
        ) : (
          <div className="oc-grid">
            {filtered.map((course) => (
              <div className="oc-card" key={course.id}>
                <div className="oc-card-thumb">
                  <img src={course.img} alt={course.title} loading="lazy" />
                  {course.bestseller && (
                    <span className="oc-badge-bestseller">Bestseller</span>
                  )}
                </div>
                <div className="oc-card-body">
                  <h3 className="oc-card-title">{course.title}</h3>
                  <p className="oc-card-instructor">{course.instructor}</p>
                  <div className="oc-card-rating">
                    <span className="oc-rating-number">{course.rating.toFixed(1)}</span>
                    <StarRating rating={course.rating} />
                    <span className="oc-rating-reviews">({course.reviews.toLocaleString()})</span>
                  </div>
                  <p className="oc-card-meta">
                    {course.hours}h · {course.lectures} lectures · {course.level}
                  </p>
                </div>
                <div className="oc-card-footer">
                  <button className="oc-btn-enroll">Enroll Now</button>
                  <button className="oc-btn-preview">Preview</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ── WHY LEARN WITH US ────────────────────────────── */}
      <section className="oc-features">
        <div className="oc-features-inner">
          <p className="oc-features-kicker">Why choose AIGETAI</p>
          <h2 className="oc-features-heading">Everything you need to succeed</h2>
          <div className="oc-features-grid">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                ),
                title: "Expert Instructors",
                desc: "Learn directly from industry professionals with years of real-world experience.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                ),
                title: "Hands-on Projects",
                desc: "Every course includes practical assignments and projects to build your portfolio.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                ),
                title: "Learn at Your Pace",
                desc: "Lifetime access to all course materials. Study anytime, from anywhere.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                ),
                title: "Certificate of Completion",
                desc: "Earn verified certificates to share on LinkedIn and showcase to employers.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                ),
                title: "Community Support",
                desc: "Join a vibrant community of learners and get help from peers and mentors.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                ),
                title: "Multi-Device Access",
                desc: "Switch seamlessly between desktop, tablet, and mobile without losing progress.",
              },
            ].map((f) => (
              <div className="oc-feature-card" key={f.title}>
                <div className="oc-feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────── */}
      <section className="oc-cta">
        <div className="oc-cta-inner">
          <h2>Ready to start your learning journey?</h2>
          <p>Join thousands of students already building in-demand skills with AIGETAI.</p>
          <div className="oc-cta-actions">
            <button className="oc-cta-primary">Get Started Free</button>
            <button className="oc-cta-secondary" type="button" onClick={browseAllCourses}>
              Browse All Courses
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
