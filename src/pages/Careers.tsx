import { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  Zap,
  Users,
  Lightbulb,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AuthModal from "@/components/auth/AuthModal";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";

const openRoles = [
  {
    title: "AI Research Intern",
    department: "Research",
    location: "Remote / Hybrid",
    type: "Internship",
    description:
      "Join our research team to explore cutting-edge AI techniques in computer vision, NLP, and cognitive systems.",
    skills: ["Python", "PyTorch/TensorFlow", "Research Papers", "Mathematics"],
  },
  {
    title: "Computer Vision Engineer",
    department: "Engineering",
    location: "On-site / Remote",
    type: "Full-time",
    description:
      "Build and deploy real-time computer vision systems for gesture recognition, face analysis, and scene understanding.",
    skills: ["OpenCV", "Deep Learning", "C++/Python", "Edge Deployment"],
  },
  {
    title: "Full Stack AI Developer",
    department: "Product",
    location: "Remote",
    type: "Full-time",
    description:
      "Develop end-to-end AI-powered applications with intuitive interfaces and robust backend systems.",
    skills: ["React/Next.js", "Python", "REST APIs", "Cloud Services"],
  },
  {
    title: "AI Automation Engineer",
    department: "Automation",
    location: "Remote",
    type: "Full-time",
    description:
      "Design and implement AI-driven automation pipelines for voice, messaging, and workflow optimization.",
    skills: ["NLP", "Voice AI", "Workflow Automation", "Integration APIs"],
  },
  {
    title: "Cognitive Systems Researcher",
    department: "Research",
    location: "On-site",
    type: "Full-time",
    description:
      "Pioneer brain-computer interface research and develop next-generation cognitive AI systems.",
    skills: ["Neuroscience", "Signal Processing", "EEG/BCI", "Machine Learning"],
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Cutting-Edge Projects",
    description: "Work on AI systems that shape the future of human-machine interaction",
  },
  {
    icon: Lightbulb,
    title: "Research + Product",
    description: "Bridge the gap between academic research and real-world applications",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Join a team of passionate innovators in a flexible, supportive environment",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Build solutions used by enterprises and creators worldwide",
  },
];

export default function Careers() {
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

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
                Join <span className="text-gradient-primary">Aigetai</span>
              </h1>
              <p className="body-large max-w-3xl mx-auto mb-8">
                Work on real-world AI systems that shape the future of human-machine
                interaction. We're building the next generation of intelligent technology.
              </p>
              <Button
                onClick={() => {
                  document.getElementById("open-roles")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="btn-hero-primary"
              >
                View Open Positions
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </AnimatedSection>
          </div>
        </section>

        {/* Why Work Here */}
        <section className="section-padding">
          <div className="section-container">
            <AnimatedSection className="text-center mb-16">
              <h2 className="heading-section mb-4">
                Why Work at <span className="text-gradient-primary">Aigetai</span>
              </h2>
              <p className="body-large max-w-2xl mx-auto">
                We offer more than just a job – we offer a chance to shape the future
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <AnimatedSection key={benefit.title} delay={index * 0.1}>
                  <GlassCard className="h-full text-center">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                      <benefit.icon size={24} className="text-primary-foreground" />
                    </div>
                    <h3 className="heading-card text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="body-regular text-sm">{benefit.description}</p>
                  </GlassCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Open Roles */}
        <section id="open-roles" className="section-padding bg-secondary/30">
          <div className="section-container">
            <AnimatedSection className="text-center mb-16">
              <h2 className="heading-section mb-4">
                Open <span className="text-gradient-primary">Positions</span>
              </h2>
              <p className="body-large max-w-2xl mx-auto">
                Find your next opportunity to make an impact with AI
              </p>
            </AnimatedSection>

            <div className="max-w-4xl mx-auto space-y-4">
              {openRoles.map((role, index) => (
                <AnimatedSection key={role.title} delay={index * 0.1}>
                  <GlassCard
                    hover
                    className="cursor-pointer"
                    onClick={() =>
                      setSelectedRole(selectedRole === role.title ? null : role.title)
                    }
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div>
                        <h3 className="heading-card text-foreground mb-2">
                          {role.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Briefcase size={14} />
                            {role.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={14} />
                            {role.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={14} />
                            {role.type}
                          </span>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        className="shrink-0"
                        onClick={(e) => {
                          e.stopPropagation();
                          openAuth("signup");
                        }}
                      >
                        Apply Now
                        <ArrowRight className="ml-2" size={16} />
                      </Button>
                    </div>

                    {/* Expanded Content */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: selectedRole === role.title ? "auto" : 0,
                        opacity: selectedRole === role.title ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 mt-6 border-t border-border">
                        <p className="body-regular mb-4">{role.description}</p>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2">
                            Required Skills
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {role.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </GlassCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="section-container">
            <AnimatedSection>
              <div className="glass rounded-3xl p-8 md:p-16 text-center">
                <h2 className="heading-section mb-4 text-foreground">
                  Don't See a Perfect Fit?
                </h2>
                <p className="body-large max-w-2xl mx-auto mb-8">
                  We're always looking for exceptional talent. Send us your resume and
                  tell us how you'd like to contribute to our mission.
                </p>
                <Button
                  onClick={() => openAuth("signup")}
                  className="btn-hero-primary"
                >
                  Submit Your Resume
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
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
