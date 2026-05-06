import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./DevOpsFlow.css";

type Step = {
  number: string;
  phase: string;
  desc: string;
  color: string;
  iconSlug: string;
  tools: string[];
};

const steps: Step[] = [
  {
    number: "01",
    phase: "Plan",
    desc: "Requirements scoped, architecture defined, timeline agreed — before a single line of code.",
    color: "#6366f1",
    iconSlug: "notion",
    tools: ["GitHub Issues", "Figma", "Notion"],
  },
  {
    number: "02",
    phase: "Develop",
    desc: "Feature branches, typed code, and continuous integration from the very first commit.",
    color: "#3178C6",
    iconSlug: "typescript",
    tools: ["TypeScript", "React", "Node.js"],
  },
  {
    number: "03",
    phase: "Test & Build",
    desc: "Automated test suites, containerised builds, zero flaky pipelines — quality enforced, not hoped for.",
    color: "#F59E0B",
    iconSlug: "docker",
    tools: ["Jest", "Docker", "GitHub Actions"],
  },
  {
    number: "04",
    phase: "Deploy",
    desc: "Zero-downtime blue-green deployments with instant rollback. Production is never a surprise.",
    color: "#FF9900",
    iconSlug: "kubernetes",
    tools: ["Kubernetes", "AWS", "Terraform"],
  },
  {
    number: "05",
    phase: "Monitor",
    desc: "Full observability, smart alerting, and proactive performance tuning long after launch.",
    color: "#10B981",
    iconSlug: "grafana",
    tools: ["Grafana", "Sentry", "Datadog"],
  },
];

export default function DevOpsFlow() {
  const lineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(lineRef, { once: true, margin: "-100px" });

  return (
    <section className="devops-section" aria-labelledby="devops-heading">
      <div className="devops-inner">
        <motion.div
          className="devops-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <span className="devops-eyebrow">DEVELOPMENT WORKFLOW</span>
          <h2 id="devops-heading">
            From commit to production — zero friction
          </h2>
          <p>
            A battle-hardened CI/CD pipeline that ships high-quality software
            on time, every sprint, with no surprises.
          </p>
        </motion.div>

        <div className="devops-steps" ref={lineRef}>
          {/* Animated gradient progress line */}
          <div className="devops-line-track">
            <motion.div
              className="devops-line-fill"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 2.2, ease: "easeOut", delay: 0.4 }}
              style={{ transformOrigin: "left center" }}
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="devops-step"
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.14 }}
            >
              {/* Pulsing node */}
              <motion.div
                className="devops-node"
                style={{ "--sc": step.color } as React.CSSProperties}
                whileHover={{ scale: 1.15, transition: { type: "spring", stiffness: 380, damping: 20 } }}
              >
                <img
                  src={`https://cdn.simpleicons.org/${step.iconSlug}/ffffff`}
                  alt={step.phase}
                  width={26}
                  height={26}
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                {/* Ripple ring */}
                <motion.span
                  className="devops-ring"
                  animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2.8, repeat: Infinity, delay: i * 0.5 }}
                />
              </motion.div>

              <div className="devops-step-body">
                <span className="devops-num">{step.number}</span>
                <h3>{step.phase}</h3>
                <p>{step.desc}</p>
                <div className="devops-chips">
                  {step.tools.map((t) => (
                    <span key={t} className="devops-chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
