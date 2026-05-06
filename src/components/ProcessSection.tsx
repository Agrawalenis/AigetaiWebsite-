import { motion } from "framer-motion";
import "./ProcessSection.css";

const steps = [
  {
    number: "01",
    title: "Discovery & Planning",
    desc: "We dive into your requirements, business constraints, and end-user goals. Together we define scope, milestones, and the exact technology stack your product needs—nothing more, nothing less.",
  },
  {
    number: "02",
    title: "Design & Architecture",
    desc: "Our architects design scalable, fault-tolerant systems while our UX team crafts interfaces grounded in user research. Every design decision is justified by data or best practice.",
  },
  {
    number: "03",
    title: "Build & Iterate",
    desc: "Two-week agile sprints with continuous delivery. You see working software every week, provide real-time feedback, and we adapt fast. No black boxes, no surprises.",
  },
  {
    number: "04",
    title: "Launch & Scale",
    desc: "Zero-downtime deployment, automated CI/CD pipelines, full observability stack, and ongoing performance optimization. We own the outcome—not just the code.",
  },
];

export default function ProcessSection() {
  return (
    <section className="process-section" aria-labelledby="process-heading">
      <div className="process-inner">
        <motion.div
          className="process-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <span className="process-eyebrow">HOW WE WORK</span>
          <h2 id="process-heading">
            From idea to shipped product — four focused steps
          </h2>
          <p>
            A proven process refined across hundreds of projects and thousands
            of engineering hours.
          </p>
        </motion.div>

        <div className="process-grid">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="process-card"
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.14 }}
            >
              <span className="process-num" aria-hidden="true">
                {step.number}
              </span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
