import React from "react";
import { motion } from "framer-motion";
import "./TechStack.css";

type Tool = {
  name: string;
  slug: string;
  color: string;
};

type Category = {
  id: string;
  title: string;
  desc: string;
  accent: string;
  tools: Tool[];
};

const categories: Category[] = [
  {
    id: "frontend",
    title: "Frontend",
    desc: "Pixel-perfect, performant interfaces users actually love.",
    accent: "#61DAFB",
    tools: [
      { name: "React", slug: "react", color: "61DAFB" },
      { name: "Next.js", slug: "nextdotjs", color: "ffffff" },
      { name: "TypeScript", slug: "typescript", color: "3178C6" },
      { name: "Tailwind", slug: "tailwindcss", color: "06B6D4" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    desc: "APIs and services that never slow you down.",
    accent: "#5FA04E",
    tools: [
      { name: "Node.js", slug: "nodedotjs", color: "5FA04E" },
      { name: "Python", slug: "python", color: "3776AB" },
      { name: "FastAPI", slug: "fastapi", color: "009688" },
      { name: "Go", slug: "go", color: "00ADD8" },
    ],
  },
  {
    id: "ai",
    title: "AI & ML",
    desc: "Intelligent systems on proven, production-grade frameworks.",
    accent: "#FF6F00",
    tools: [
      { name: "TensorFlow", slug: "tensorflow", color: "FF6F00" },
      { name: "PyTorch", slug: "pytorch", color: "EE4C2C" },
      { name: "OpenAI", slug: "openai", color: "ffffff" },
      { name: "Hugging Face", slug: "huggingface", color: "FFD21E" },
    ],
  },
  {
    id: "database",
    title: "Databases",
    desc: "Storage engineered for scale, speed, and resilience.",
    accent: "#4169E1",
    tools: [
      { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },
      { name: "MongoDB", slug: "mongodb", color: "47A248" },
      { name: "Redis", slug: "redis", color: "FF4438" },
      { name: "GraphQL", slug: "graphql", color: "E10098" },
    ],
  },
  {
    id: "infra",
    title: "Infrastructure",
    desc: "Rock-solid deployments that scale without limits.",
    accent: "#2496ED",
    tools: [
      { name: "Docker", slug: "docker", color: "2496ED" },
      { name: "Kubernetes", slug: "kubernetes", color: "326CE5" },
      { name: "AWS", slug: "amazonaws", color: "FF9900" },
      { name: "Terraform", slug: "terraform", color: "7B42BC" },
    ],
  },
  {
    id: "devtools",
    title: "Dev Tools",
    desc: "The workflow stack that keeps every sprint shipping.",
    accent: "#F05032",
    tools: [
      { name: "GitHub", slug: "github", color: "ffffff" },
      { name: "GH Actions", slug: "githubactions", color: "2088FF" },
      { name: "Figma", slug: "figma", color: "F24E1E" },
      { name: "Grafana", slug: "grafana", color: "F46800" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const toolVariants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.07, duration: 0.35, type: "spring" as const, stiffness: 280, damping: 20 },
  }),
};

export default function TechStack() {
  return (
    <section className="techstack-section" aria-labelledby="techstack-heading">
      <div className="techstack-inner">
        <motion.div
          className="techstack-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <span className="techstack-eyebrow">TOOLS & TECHNOLOGIES</span>
          <h2 id="techstack-heading">
            The exact stack powering our products
          </h2>
          <p>
            Battle-tested, actively maintained, and chosen for one reason — they
            produce the best outcomes for our clients.
          </p>
        </motion.div>

        <motion.div
          className="techstack-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.id}
              className="techstack-card"
              
              style={{ "--accent": cat.accent } as React.CSSProperties}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.22 } }}
            >
              {/* Top accent line slides in on hover via CSS */}
              <div className="tc-accent-line" />

              <div className="tc-header">
                <span className="tc-dot" style={{ background: cat.accent }} />
                <h3>{cat.title}</h3>
              </div>

              <p className="tc-desc">{cat.desc}</p>

              <div className="tc-tools">
                {cat.tools.map((tool, i) => (
                  <motion.div
                    key={tool.name}
                    className="tc-tool"
                    custom={i}
                    variants={toolVariants}
                    whileHover={{
                      scale: 1.1,
                      borderColor: `#${tool.color}40`,
                      transition: { duration: 0.18 },
                    }}
                    title={tool.name}
                  >
                    <img
                      src={`https://cdn.simpleicons.org/${tool.slug}/${tool.color}`}
                      alt={tool.name}
                      width={28}
                      height={28}
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                    <span>{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
