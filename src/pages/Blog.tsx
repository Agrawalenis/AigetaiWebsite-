import { createPortal } from "react-dom";
import { useEffect, useMemo, useState } from "react";
import "./Blog.css";

type BlogCategory = "Company" | "Product" | "Engineering" | "Creator Series";
type BlogFilter = "All" | BlogCategory;

type BlogPost = {
  id: number;
  title: string;
  summary: string;
  category: BlogCategory;
  dateLabel: string;
  dateIso: string;
  readTime: string;
  image: string;
};

const categoryTabs: BlogFilter[] = [
  "All",
  "Company",
  "Product",
  "Engineering",
  "Creator Series",
];

const featuredStory: BlogPost = {
  id: 0,
  title:
    "Frontier AI Labs Form New Safety Compact Around Autonomous Agent Deployments",
  summary:
    "A new coalition of frontier model builders and cloud providers announced a shared protocol for pre-release red teaming, provenance watermarking, and incident disclosure windows.",
  category: "Company",
  dateLabel: "Mar 16, 2026",
  dateIso: "2026-03-16",
  readTime: "6 min read",
  image:
    "https://img.freepik.com/free-photo/blurred-car-lights-wet-windows_181624-521.jpg?t=st=1773747827~exp=1773751427~hmac=5a629323b7d27816892ea0c3f73f068fca8e854878d1b4d554d194d868aa3c77&w=1480",
};

const klingHighlights: BlogPost[] = [
  {
    id: 101,
    title:
      "Kling AI 1.7 Adds Longer Shot Continuity for Character-Locked Video",
    summary:
      "Creators can now maintain style and character identity across longer scenes with fewer prompt resets.",
    category: "Product",
    dateLabel: "Mar 17, 2026",
    dateIso: "2026-03-17",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 102,
    title:
      "Kling AI Studio Introduces Motion Brush Controls for Precision Edits",
    summary:
      "Teams can pin motion paths and depth behavior frame by frame for more cinematic outputs.",
    category: "Creator Series",
    dateLabel: "Mar 16, 2026",
    dateIso: "2026-03-16",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 103,
    title: "Kling AI API Expands Global Access with New Low-Latency Regions",
    summary:
      "Developers report faster render times for real-time prototype workflows and production previews.",
    category: "Engineering",
    dateLabel: "Mar 15, 2026",
    dateIso: "2026-03-15",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
  },
];

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title:
      "Open-Weight Reasoning Models Reach 1M Context on Commodity Clusters",
    summary:
      "Engineering teams report practical long-context inference with optimized memory paging and sparse retrieval pipelines.",
    category: "Engineering",
    dateLabel: "Mar 15, 2026",
    dateIso: "2026-03-15",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title:
      "Meta-Agents Move From Demo to Production in Customer Support Stacks",
    summary:
      "Enterprises are shipping multi-agent systems for triage, billing, and escalation with strict policy constraints.",
    category: "Product",
    dateLabel: "Mar 14, 2026",
    dateIso: "2026-03-14",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Riyadh AI Corridor Announces New Compute Program for Startups",
    summary:
      "Regional operators opened discounted GPU capacity and mentorship tracks focused on Arabic-first AI tools.",
    category: "Company",
    dateLabel: "Mar 13, 2026",
    dateIso: "2026-03-13",
    readTime: "3 min read",
    image:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title:
      "Creator Series: Filmmakers Use Diffusion Video Pipelines for Full Previs",
    summary:
      "Studios are reducing pre-production cycles with scene-consistent generation and style-lock controls.",
    category: "Creator Series",
    dateLabel: "Mar 12, 2026",
    dateIso: "2026-03-12",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    title:
      "AI Chip Roadmap 2026: Memory Bandwidth Becomes the New Battleground",
    summary:
      "Vendors are prioritizing interconnect architecture and low-latency memory over pure TOPS metrics.",
    category: "Engineering",
    dateLabel: "Mar 11, 2026",
    dateIso: "2026-03-11",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    title:
      "Product Update: Realtime Voice Agents Now Support Regional Compliance Modes",
    summary:
      "New deployment profiles add residency-aware routing and encrypted transcript retention options.",
    category: "Product",
    dateLabel: "Mar 10, 2026",
    dateIso: "2026-03-10",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 7,
    title:
      "Company Brief: Enterprise AI Budgets Shift from Pilots to Platform Teams",
    summary:
      "CIOs now assign larger line items to evaluation, governance, and model operations capabilities.",
    category: "Company",
    dateLabel: "Mar 9, 2026",
    dateIso: "2026-03-09",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1560439514-4e9645039924?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 8,
    title:
      "Creator Series: Generative Sound Design Finds Its Place in AAA Workflows",
    summary:
      "Audio teams pair neural synthesis with human mastering to accelerate iteration without sacrificing quality.",
    category: "Creator Series",
    dateLabel: "Mar 8, 2026",
    dateIso: "2026-03-08",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 9,
    title:
      "Engineering Note: Prompt Caching Cuts Inference Costs by 37% at Scale",
    summary:
      "Teams report major cost wins by blending semantic cache keys, validation checks, and adaptive expiry.",
    category: "Engineering",
    dateLabel: "Mar 7, 2026",
    dateIso: "2026-03-07",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 10,
    title: "Global Regulators Publish First Cross-Border AI Audit Framework",
    summary:
      "New interoperability rules define common evidence packages for high-impact model assessments and incident reports.",
    category: "Company",
    dateLabel: "Mar 6, 2026",
    dateIso: "2026-03-06",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 11,
    title:
      "Multimodal Search Becomes Core UX Layer in Enterprise Knowledge Apps",
    summary:
      "Product teams combine text, image, and voice retrieval to reduce friction in internal support and analytics flows.",
    category: "Product",
    dateLabel: "Mar 5, 2026",
    dateIso: "2026-03-05",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 12,
    title:
      "Edge AI Phones Launch with On-Device Diffusion for Private Generation",
    summary:
      "Major handset makers push private inferencing pipelines that keep personal prompts and outputs fully local.",
    category: "Product",
    dateLabel: "Mar 4, 2026",
    dateIso: "2026-03-04",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 13,
    title:
      "Engineering Deep Dive: Hybrid RAG Architectures Beat Baseline Accuracy by 22%",
    summary:
      "Teams blend graph retrieval, long-term memory, and reranking for stronger factual consistency in production agents.",
    category: "Engineering",
    dateLabel: "Mar 3, 2026",
    dateIso: "2026-03-03",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 14,
    title:
      "Creator Series: Indie Studios Train Style-Safe Models with Rights-Cleared Libraries",
    summary:
      "A growing toolchain helps teams build signature visual systems without copyright ambiguity or model contamination.",
    category: "Creator Series",
    dateLabel: "Mar 2, 2026",
    dateIso: "2026-03-02",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 15,
    title: "Quantum-Inspired Optimizers Enter Mainstream AI Training Toolkits",
    summary:
      "Research teams report stable convergence improvements on sparse mixture-of-experts training workloads.",
    category: "Engineering",
    dateLabel: "Mar 1, 2026",
    dateIso: "2026-03-01",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 16,
    title:
      "Tech Funding Watch: AI Infrastructure Startups See Strongest Quarter Since 2024",
    summary:
      "Capital is concentrating in observability, model security, and synthetic data platforms powering enterprise deployments.",
    category: "Company",
    dateLabel: "Feb 28, 2026",
    dateIso: "2026-02-28",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 17,
    title:
      "Wearable Tech Meets AI: Real-Time Health Copilots Expand into Preventive Care",
    summary:
      "New sensor fusion models forecast risk windows earlier and trigger clinician-ready summaries for follow-up.",
    category: "Product",
    dateLabel: "Feb 27, 2026",
    dateIso: "2026-02-27",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 18,
    title:
      "Creator Series: Game Teams Use Generative NPC Dialogue with Live Guardrails",
    summary:
      "Studios deploy constrained conversation engines to deliver dynamic quests while maintaining lore consistency.",
    category: "Creator Series",
    dateLabel: "Feb 26, 2026",
    dateIso: "2026-02-26",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 19,
    title:
      "Cybersecurity Teams Adopt AI SOC Analysts to Reduce False Positives",
    summary:
      "Security operations now use retrieval-grounded agents to triage alerts and surface verifiable remediation paths.",
    category: "Engineering",
    dateLabel: "Feb 25, 2026",
    dateIso: "2026-02-25",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1200&q=80",
  },
];

const allBlogPosts: BlogPost[] = [...klingHighlights, ...blogPosts];

export default function Blog() {
  const [activeFilter, setActiveFilter] = useState<BlogFilter>("All");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const visiblePosts = useMemo(() => {
    if (activeFilter === "All") {
      return allBlogPosts;
    }
    return allBlogPosts.filter((post) => post.category === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedPost(null);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const getPostDetails = (post: BlogPost) => {
    return [
      `${post.summary} Analysts say this trend is accelerating as teams move from pilots to production-grade systems with stricter reliability, observability, and governance requirements.`,
      `Across global markets, leaders are prioritizing practical AI and tech adoption that improves user outcomes, reduces operating costs, and shortens delivery cycles. This story reflects how platform strategy, model capabilities, and regulatory expectations are converging in 2026.`,
      `For product and engineering teams, the main takeaway is to invest in scalable architecture early: stronger data pipelines, security controls, and iterative release workflows are now considered baseline for competitive execution.`,
    ];
  };

  const scrollToNews = () => {
    const newsSection = document.getElementById("blog-news-grid");
    if (!newsSection) {
      return;
    }
    newsSection.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="blog-page">
      <section className="blog-shell">
        <section className="blog-hero" aria-label="Blog hero">
          <div className="blog-hero-copy">
            <p className="blog-kicker">Latest AI + Tech News</p>
            <h1>AI stories that shape what teams build next</h1>
            <p className="blog-hero-subtext">
              Track product launches, model breakthroughs, and engineering
              tactics in one sharp daily feed designed for builders.
            </p>
            <div className="blog-hero-actions">
              <button
                type="button"
                className="blog-hero-cta primary"
                onClick={() => setSelectedPost(featuredStory)}
              >
                Read Featured Story
              </button>
              <button
                type="button"
                className="blog-hero-cta secondary"
                onClick={scrollToNews}
              >
                Explore All News
              </button>
            </div>
            <div className="blog-hero-strip" aria-hidden="true">
              <span>Fresh coverage every day</span>
              <span className="hero-strip-dot" />
              <span>Curated by editors + engineers</span>
            </div>
          </div>

          <div className="blog-hero-visual" aria-hidden="true">
            <span className="blog-orb orb-a" />
            <span className="blog-orb orb-b" />
            <article className="blog-hero-showcase">
              <img
                src={featuredStory.image}
                alt=""
                loading="lazy"
                role="presentation"
              />
              <div className="blog-hero-showcase-overlay">
                <span className="blog-pill">Top Story</span>
                <p>{featuredStory.readTime}</p>
              </div>
            </article>
            <article className="blog-float-card card-left">
              <p>Today</p>
              <h3>19 New Articles</h3>
            </article>
            <article className="blog-float-card card-right">
              <p>Trending</p>
              <h3>AI Infrastructure</h3>
            </article>
          </div>
        </section>

        <section className="blog-featured" aria-label="Featured story">
          <article
            className="blog-featured-card blog-clickable"
            onClick={() => setSelectedPost(featuredStory)}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setSelectedPost(featuredStory);
              }
            }}
          >
            <div className="blog-featured-image-wrap">
              <img
                src={featuredStory.image}
                alt={featuredStory.title}
                loading="lazy"
              />
            </div>
            <div className="blog-featured-body">
              <span className="blog-pill">Featured</span>
              <h2>{featuredStory.title}</h2>
              <p>{featuredStory.summary}</p>
              <div className="blog-meta">
                <span className="blog-pill subdued">
                  {featuredStory.category}
                </span>
                <time dateTime={featuredStory.dateIso}>
                  {featuredStory.dateLabel}
                </time>
                <span className="blog-dot" aria-hidden="true" />
                <span className="blog-read-time">{featuredStory.readTime}</span>
              </div>
            </div>
          </article>
        </section>

        <section className="blog-filter-row" aria-label="Blog categories">
          {categoryTabs.map((category) => (
            <button
              key={category}
              className={`blog-filter-chip ${activeFilter === category ? "active" : ""}`}
              type="button"
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </section>

        <section
          id="blog-news-grid"
          className="blog-grid"
          aria-label="Latest news posts"
        >
          {visiblePosts.map((post, index) => (
            <article
              className="blog-card blog-clickable"
              key={post.id}
              style={{ animationDelay: `${index * 60}ms` }}
              onClick={() => setSelectedPost(post)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setSelectedPost(post);
                }
              }}
            >
              <div className="blog-image-wrap">
                <img src={post.image} alt={post.title} loading="lazy" />
              </div>

              <h3>{post.title}</h3>
              <p>{post.summary}</p>

              <div className="blog-meta">
                <span className="blog-pill subdued">{post.category}</span>
                <time dateTime={post.dateIso}>{post.dateLabel}</time>
                <span className="blog-dot" aria-hidden="true" />
                <span className="blog-read-time">{post.readTime}</span>
              </div>
            </article>
          ))}
        </section>

        {selectedPost &&
          createPortal(
            <div
              className="blog-modal-overlay"
              onClick={() => setSelectedPost(null)}
            >
              <article
                className="blog-modal"
                onClick={(event) => event.stopPropagation()}
                aria-label="News detail"
              >
                <button
                  type="button"
                  className="blog-modal-close"
                  onClick={() => setSelectedPost(null)}
                  aria-label="Close news detail"
                >
                  Close
                </button>

                <div className="blog-modal-image-wrap">
                  <img src={selectedPost.image} alt={selectedPost.title} />
                </div>

                <h2>{selectedPost.title}</h2>

                <div className="blog-meta blog-modal-meta">
                  <span className="blog-pill subdued">
                    {selectedPost.category}
                  </span>
                  <time dateTime={selectedPost.dateIso}>
                    {selectedPost.dateLabel}
                  </time>
                  <span className="blog-dot" aria-hidden="true" />
                  <span className="blog-read-time">
                    {selectedPost.readTime}
                  </span>
                </div>

                {getPostDetails(selectedPost).map((paragraph, paragraphIndex) => (
                  <p key={`${selectedPost.id}-${paragraphIndex}`}>{paragraph}</p>
                ))}
              </article>
            </div>,
            document.body,
          )}
      </section>

      <section className="subscribe-section" aria-label="News intro">
        <h1>Subscribe to Press Updates</h1>
        <p className="subscribe-kicker">
          Want to receive our latest releases directly in your inbox?
        </p>
      </section>

      <section className="input-detail">
        <div className="input-row">
          <input type="text" placeholder="First Name" required />
          <input type="email" placeholder="Last name" required />
        </div>

        <div className="input-row">
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Phone Number" />
        </div>

        <button>Subscribe</button>
      </section>
    </main>
  );
}
