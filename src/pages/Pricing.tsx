import "./Pricing.css";

const tiers = [
  {
    name: "Starter",
    price: "₹50k+",
    description: "Ideal for startups looking to launch their first digital product.",
    features: [
      "Custom Web Development",
      "Responsive Design",
      "SEO Optimization",
      "3 Months Support",
      "Basic AI Integration",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    price: "₹150k+",
    description: "Best for growing teams needing scalable software solutions.",
    features: [
      "Full-stack Application",
      "Mobile App Development",
      "Advanced AI Systems",
      "6 Months Support",
      "Cloud Infrastructure Setup",
      "Performance Optimization",
    ],
    cta: "Contact Sales",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large-scale enterprise challenges.",
    features: [
      "Custom Architecture",
      "24/7 Priority Support",
      "End-to-end Automation",
      "Cybersecurity Audits",
      "Dedicated Project Manager",
      "Continuous CI/CD Pipelines",
    ],
    cta: "Schedule a Demo",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <main className="pricing-page">
      <section className="pricing-hero">
        <h1>Transparent Pricing for Every Vision</h1>
        <p>
          Choose a plan that fits your business needs. From initial prototypes to
          enterprise-scale platforms, we've got you covered.
        </p>
      </section>

      <section className="pricing-grid">
        {tiers.map((tier) => (
          <article
            key={tier.name}
            className={`pricing-card ${tier.popular ? "popular" : ""}`}
          >
            {tier.popular && <span className="popular-badge">Most Popular</span>}
            <h2>{tier.name}</h2>
            <div className="price">{tier.price}</div>
            <p>{tier.description}</p>
            <ul>
              {tier.features.map((feature) => (
                <li key={feature}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button className={tier.popular ? "primary" : "secondary"}>
              {tier.cta}
            </button>
          </article>
        ))}
      </section>

      <section className="pricing-faq-link">
        <p>
          Have custom requirements? <a href="/enquiry">Talk to us</a> for a
          personalized quote.
        </p>
      </section>
    </main>
  );
}
