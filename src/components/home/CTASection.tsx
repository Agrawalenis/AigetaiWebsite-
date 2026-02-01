import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface CTASectionProps {
  onOpenAuth: () => void;
}

export default function CTASection({ onOpenAuth }: CTASectionProps) {
  return (
    <section className="section-padding overflow-hidden">
      <div className="section-container">
        <AnimatedSection>
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-primary" />
            <div className="absolute inset-0 opacity-30">
              <motion.div
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="w-full h-full"
                style={{
                  backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%),
                                   radial-gradient(circle at 80% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)`,
                }}
              />
            </div>

            {/* Content */}
            <div className="relative z-10 px-8 py-16 md:px-16 md:py-24 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/20 text-primary-foreground mb-6"
              >
                <Sparkles size={16} />
                <span className="text-sm font-medium">Start Your AI Journey</span>
              </motion.div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Ready to Transform Your Business
                <br />
                with Intelligent AI?
              </h2>

              <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10">
                Join the enterprises and creators already leveraging Aigetai's 
                cutting-edge AI solutions to drive innovation and growth.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  onClick={onOpenAuth}
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8 h-14 text-base group"
                >
                  Get Started Free
                  <ArrowRight
                    className="ml-2 transition-transform group-hover:translate-x-1"
                    size={20}
                  />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 h-14 text-base"
                >
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
