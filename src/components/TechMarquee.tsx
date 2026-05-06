import "./TechMarquee.css";

const techs = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "Python",
  "FastAPI",
  "AWS",
  "Docker",
  "Kubernetes",
  "PostgreSQL",
  "GraphQL",
  "TensorFlow",
  "MongoDB",
  "Redis",
  "Flutter",
  "Terraform",
  "React Native",
  "Go",
  "Kafka",
  "Rust",
];

export default function TechMarquee() {
  return (
    <section className="marquee-section" aria-label="Technologies we use">
      <p className="marquee-label">TECHNOLOGIES WE MASTER</p>
      <div className="marquee-outer" aria-hidden="true">
        <div className="marquee-track">
          {[...techs, ...techs].map((tech, i) => (
            <span key={i} className="marquee-item">
              {tech}
              <span className="marquee-sep">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
