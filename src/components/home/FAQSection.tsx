import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const faqCategories = [
  {
    title: "General / About Company",
    questions: [
      {
        q: "Who are we?",
        a: "Aigetai is an innovative AI company focused on engineering intelligence for the real world. We develop cutting-edge AI systems that power vision, automation, interaction, and cognition for enterprises, creators, and researchers worldwide.",
      },
      {
        q: "What makes us different from other IT companies?",
        a: "We combine deep research expertise with practical product development, delivering AI solutions that work in real-world conditions. Our focus on emerging technologies like BCI, gesture control, and cognitive AI sets us apart.",
      },
      {
        q: "What industries do we serve?",
        a: "We serve healthcare, entertainment, retail, manufacturing, security, and enterprise sectors with tailored AI solutions that address specific industry challenges.",
      },
    ],
  },
  {
    title: "Services & Solutions",
    questions: [
      {
        q: "What IT services do we offer?",
        a: "We offer AI development, computer vision solutions, NLP systems, automation platforms, custom AI agents, and brain-computer interface research and development.",
      },
      {
        q: "Do we provide custom software development?",
        a: "Yes, we develop custom AI-powered applications tailored to your specific business requirements, from concept to deployment and ongoing support.",
      },
      {
        q: "What technologies and tools do we specialize in?",
        a: "We specialize in deep learning frameworks, computer vision, NLP, edge AI deployment, cloud infrastructure, and emerging technologies like EEG signal processing and AR/VR integration.",
      },
    ],
  },
  {
    title: "Client Support & Process",
    questions: [
      {
        q: "How do we start working with new clients?",
        a: "We begin with a discovery call to understand your needs, followed by a technical assessment and proposal. Once aligned, we move to development with regular check-ins and transparent communication.",
      },
      {
        q: "What is our development process?",
        a: "We follow an agile methodology with iterative development cycles, continuous integration, and regular demos. This ensures flexibility and allows for feedback-driven improvements.",
      },
      {
        q: "What post-launch support do we provide?",
        a: "We offer comprehensive post-launch support including monitoring, maintenance, updates, and scaling assistance. Our team is available for ongoing optimization and feature enhancements.",
      },
    ],
  },
  {
    title: "Partnership & Hiring",
    questions: [
      {
        q: "How can companies partner with us?",
        a: "We welcome partnerships for joint ventures, technology licensing, research collaborations, and integration partnerships. Reach out through our contact page to discuss opportunities.",
      },
      {
        q: "Are we hiring developers or interns?",
        a: "Yes! We're always looking for talented individuals passionate about AI. Check our Careers page for current openings in research, engineering, and product development.",
      },
      {
        q: "What's it like to work at Aigetai?",
        a: "We foster an innovation-driven culture with flexible work arrangements, cutting-edge projects, continuous learning opportunities, and a collaborative team environment.",
      },
    ],
  },
  {
    title: "Contact & Engagement",
    questions: [
      {
        q: "Need help with your next project?",
        a: "Our team is ready to help you explore how AI can transform your business. Schedule a free consultation to discuss your requirements and discover tailored solutions.",
      },
      {
        q: "Want a free consultation or quote?",
        a: "Absolutely! We offer free initial consultations and detailed project quotes. Contact us through our website or email us directly at hello@aigetai.com.",
      },
      {
        q: "Ready to transform your idea into a digital solution?",
        a: "Let's make it happen! Share your vision with us, and our team will work with you to design, develop, and deploy an AI solution that exceeds your expectations.",
      },
    ],
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="section-padding">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="heading-section mb-4">
            Frequently Asked <span className="text-gradient-primary">Questions</span>
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            Everything you need to know about Aigetai and our AI solutions
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <AnimatedSection key={category.title} delay={categoryIndex * 0.1}>
              <div className="glass rounded-2xl overflow-hidden">
                <h3 className="text-lg font-semibold text-foreground px-6 py-4 bg-secondary/30">
                  {category.title}
                </h3>
                <Accordion type="single" collapsible className="px-2">
                  {category.questions.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`${categoryIndex}-${index}`}
                      className="border-border/50"
                    >
                      <AccordionTrigger className="px-4 py-4 text-left hover:text-primary transition-colors">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-4 text-muted-foreground">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
