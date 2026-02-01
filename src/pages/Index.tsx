import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AuthModal from "@/components/auth/AuthModal";
import HeroSection from "@/components/home/HeroSection";
import SolutionsPreview from "@/components/home/SolutionsPreview";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");

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
      
      <main>
        <HeroSection onOpenAuth={() => openAuth("signup")} />
        <SolutionsPreview />
        <FAQSection />
        <CTASection onOpenAuth={() => openAuth("signup")} />
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
};

export default Index;
