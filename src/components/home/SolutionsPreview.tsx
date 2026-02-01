import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";

// Import solution images
import faceSwapImg from "@/assets/solution-face-swap.jpg";
import gestureImg from "@/assets/solution-gesture.jpg";
import automationImg from "@/assets/solution-automation.jpg";
import effectsImg from "@/assets/solution-effects.jpg";
import editingImg from "@/assets/solution-editing.jpg";
import agentsImg from "@/assets/solution-agents.jpg";
import smartSpecsImg from "@/assets/solution-smart-specs.jpg";
import bciImg from "@/assets/solution-bci.jpg";

const solutions = [
  {
    id: "face-swap",
    title: "AI Face Swapping",
    description: "Realistic face transformations with natural expressions",
    image: faceSwapImg,
  },
  {
    id: "gesture",
    title: "Gesture-Based Control",
    description: "Touch-free interaction through hand and body recognition",
    image: gestureImg,
  },
  {
    id: "automation",
    title: "AI Automation",
    description: "Intelligent voice and messaging for customer interactions",
    image: automationImg,
  },
  {
    id: "effects",
    title: "Visual Effects",
    description: "AI-powered filters and effects for digital platforms",
    image: effectsImg,
  },
  {
    id: "editing",
    title: "AI Image Editing",
    description: "Transform images and clothing with text prompts",
    image: editingImg,
  },
  {
    id: "agents",
    title: "AI Agents",
    description: "Autonomous assistants for 24/7 task execution",
    image: agentsImg,
  },
  {
    id: "smart-specs",
    title: "AI Smart Specs",
    description: "Vision-enabled glasses with real-time intelligence",
    image: smartSpecsImg,
  },
  {
    id: "bci",
    title: "BCI & Cognitive AI",
    description: "Brain-computer interfaces for direct human-machine interaction",
    image: bciImg,
  },
];

export default function SolutionsPreview() {
  return (
    <section id="solutions-preview" className="section-padding bg-mesh">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="heading-section mb-4">
            Our <span className="text-gradient-primary">Solutions</span>
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            Cutting-edge AI technologies designed for enterprises, creators, and researchers
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <AnimatedSection
              key={solution.id}
              delay={index * 0.1}
              direction="up"
            >
              <Link to={`/solutions#${solution.id}`}>
                <GlassCard hover className="h-full group overflow-hidden">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="heading-card text-foreground mb-2 group-hover:text-primary transition-colors">
                    {solution.title}
                  </h3>
                  <p className="body-regular text-sm mb-4">
                    {solution.description}
                  </p>
                  <div className="flex items-center text-primary font-medium text-sm">
                    View Details
                    <ArrowRight
                      className="ml-2 transition-transform group-hover:translate-x-1"
                      size={16}
                    />
                  </div>
                </GlassCard>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
