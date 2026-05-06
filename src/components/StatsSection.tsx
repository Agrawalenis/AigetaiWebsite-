import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./StatsSection.css";

const stats = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 80, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "+", label: "Years of Excellence" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasRun.current) return;
        hasRun.current = true;
        observer.disconnect();

        const duration = 2200;
        const start = performance.now();

        const tick = (now: number) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * target));
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="stat-number">
      {count}
      {suffix}
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="stats-section" aria-label="Company statistics">
      <div className="stats-inner">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="stat-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
          >
            <CountUp target={stat.value} suffix={stat.suffix} />
            <p>{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
