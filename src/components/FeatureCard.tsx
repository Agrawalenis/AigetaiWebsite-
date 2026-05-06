type Props = {
  title: string;
  desc: string;
};

export default function FeatureCard({ title, desc }: Props) {
  return (
    <div className="feature-card">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
