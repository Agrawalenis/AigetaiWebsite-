import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AuthModal from "@/components/auth/AuthModal";
import AnimatedSection from "@/components/ui/AnimatedSection";

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
    title: "AI Face Swapping (Images & Videos)",
    description:
      "Create realistic single-face swaps using advanced AI models with natural expressions and smooth blending. Our technology ensures seamless integration while maintaining authenticity.",
    image: faceSwapImg,
    useCases: [
      "Digital marketing campaigns",
      "Video production and film",
      "Social media content creation",
      "Virtual branding experiences",
    ],
  },
  {
    id: "gesture",
    title: "Human Gesture-Based AI Computer Control System",
    description:
      "Touch-free interaction using real-time hand and body gesture recognition. Experience intuitive control without physical contact, perfect for modern workspaces and accessibility.",
    image: gestureImg,
    useCases: [
      "Smart workplace environments",
      "Assistive technology solutions",
      "Interactive presentations",
      "AR/VR immersive experiences",
    ],
  },
  {
    id: "automation",
    title: "AI Automation for Calls & Messages",
    description:
      "AI-driven voice and messaging systems for automated customer interactions. Handle inquiries, schedule appointments, and engage leads 24/7 with intelligent conversation flows.",
    image: automationImg,
    useCases: [
      "Customer support automation",
      "Sales follow-up sequences",
      "Appointment scheduling & reminders",
      "Lead engagement campaigns",
    ],
  },
  {
    id: "effects",
    title: "AI-Powered Filters & Visual Effects",
    description:
      "Intelligent AI filters and effects for modern digital platforms. Enhance visual content with real-time processing that adapts to context and user preferences.",
    image: effectsImg,
    useCases: [
      "Social media marketing",
      "Brand identity enhancement",
      "Content creation workflows",
      "Advertising campaign assets",
    ],
  },
  {
    id: "editing",
    title: "AI Image Editing & Clothing Change Using Prompts",
    description:
      "Edit images and transform clothing styles using natural language prompts with stunning realism. Simply describe your vision, and watch AI bring it to life.",
    image: editingImg,
    useCases: [
      "Fashion technology platforms",
      "E-commerce product previews",
      "Virtual try-on experiences",
      "Creative design iterations",
    ],
  },
  {
    id: "agents",
    title: "AI Agents (Intelligent Virtual Assistants)",
    description:
      "Autonomous AI agents operating 24/7 for decision-making and task execution. From data analysis to customer interactions, these agents work tirelessly to drive results.",
    image: agentsImg,
    capabilities: [
      "Task automation & scheduling",
      "Real-time data analysis",
      "Chat & voice interaction",
      "API & database integration",
    ],
    useCases: [
      "Customer support agents",
      "AI operations managers",
      "Internal workflow assistants",
      "Smart copilot systems",
    ],
  },
  {
    id: "smart-specs",
    title: "AI Smart Specs (Vision-Enabled AI Glasses)",
    description:
      "AI-powered smart glasses with real-time vision intelligence. See the world enhanced with contextual information, recognition, and augmented overlays.",
    image: smartSpecsImg,
    capabilities: [
      "Object & face recognition",
      "Scene understanding & analysis",
      "Voice & gesture control",
      "AR overlay integration",
    ],
    useCases: [
      "Industrial training programs",
      "Navigation assistance",
      "Security applications",
      "Healthcare & enterprise productivity",
    ],
  },
  {
    id: "bci",
    title: "Brain-Computer Interface (BCI) & Cognitive AI Systems",
    description:
      "AI systems interpreting brain signals for direct human-machine interaction. Pioneering the future of computing through neural interfaces and cognitive analysis.",
    image: bciImg,
    capabilities: [
      "EEG signal interpretation",
      "Mind-driven control interfaces",
      "Cognitive state detection",
      "Neuro-analytics dashboards",
    ],
    useCases: [
      "Healthcare innovation",
      "Assistive technology",
      "Research applications",
      "Future computing paradigms",
    ],
  },
];

export default function Solutions() {
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const openAuth = (mode: "signin" | "signup") => {
    setAuthMode(mode);
    setAuthOpen(true);
  };

  const toggleAuthMode = () => {
    setAuthMode((prev) => (prev === "signin" ? "signup" : "signin"));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenAuth={openAuth} />

      <main className="pt-24">
        {/* Hero */}
        <section className="section-padding bg-mesh">
          <div className="section-container text-center">
            <AnimatedSection>
              <h1 className="heading-display mb-6">
                Our <span className="text-gradient-primary">Solutions</span>
              </h1>
              <p className="body-large max-w-3xl mx-auto">
                Comprehensive AI technologies designed to transform how enterprises,
                creators, and researchers interact with the digital world.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Solutions */}
        {solutions.map((solution, index) => (
          <section
            key={solution.id}
            id={solution.id}
            className={`section-padding ${index % 2 === 1 ? "bg-secondary/30" : ""}`}
          >
            <div className="section-container">
              <div
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <AnimatedSection
                  direction={index % 2 === 0 ? "left" : "right"}
                  className={index % 2 === 1 ? "lg:col-start-2" : ""}
                >
                  <div className="relative group">
                    <div className="absolute -inset-4 rounded-3xl bg-gradient-primary opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="relative rounded-2xl w-full shadow-xl"
                    />
                  </div>
                </AnimatedSection>

                {/* Content */}
                <AnimatedSection
                  direction={index % 2 === 0 ? "right" : "left"}
                  delay={0.2}
                >
                  <h2 className="heading-section mb-6 text-foreground">
                    {solution.title}
                  </h2>
                  <p className="body-large mb-8">{solution.description}</p>

                  {solution.capabilities && (
                    <div className="mb-8">
                      <h4 className="font-semibold text-foreground mb-4">
                        Capabilities
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {solution.capabilities.map((cap) => (
                          <div
                            key={cap}
                            className="flex items-center gap-3 text-muted-foreground"
                          >
                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Check size={14} className="text-primary" />
                            </div>
                            <span className="text-sm">{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className="font-semibold text-foreground mb-4">
                      Use Cases
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {solution.useCases.map((useCase) => (
                        <div
                          key={useCase}
                          className="flex items-center gap-3 text-muted-foreground"
                        >
                          <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                            <Check size={14} className="text-accent" />
                          </div>
                          <span className="text-sm">{useCase}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>
        ))}
      </main>

      <Footer />

      <AuthModal
        isOpen={authOpen}
        mode={authMode}
        onClose={() => setAuthOpen(false)}
        onToggleMode={toggleAuthMode}
      />
    </div>
  );
}
