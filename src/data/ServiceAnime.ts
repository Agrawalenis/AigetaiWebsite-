import webDevImg from "../assets/pizza-hawaiian.png";
import mobileDevImg from "../assets/pizza-pepperoni.png";
import aiImg from "../assets/pizza-spinach.png";
import customSoftwareImg from "../assets/pizza-paneer.png";
import cloudImg from "../assets/pizza-margherita.png";
import securityImg from "../assets/pizza-veggie.png";
// import pizzaBbq from "../assets/pizza-bbq.png";

export interface Service {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
}

export const ServiceAnime: Service[] = [
  {
    id: "web-development",
    name: "WEB",
    title: "Scalable Web Development",
    description:
      "We engineer high-performance web applications using modern frameworks like React and Next.js, optimized for scalability, speed, and seamless user experience.",
    image: webDevImg,
  },
  {
    id: "mobile-development",
    name: "MOBILE",
    title: "Mobile App Development",
    description:
      "Design and build robust Android and iOS applications with intuitive UI, smooth performance, and scalable backend integration.",
    image: mobileDevImg,
  },
  {
    id: "ai-automation",
    name: "AI",
    title: "AI & Automation Systems",
    description:
      "Leverage artificial intelligence to automate workflows, enhance decision-making, and build intelligent, data-driven systems.",
    image: aiImg,
  },
  {
    id: "custom-software",
    name: "CUSTOM",
    title: "Custom Software Solutions",
    description:
      "Tailored software engineered around your business logic, ensuring flexibility, scalability, and long-term maintainability.",
    image: customSoftwareImg,
  },
  {
    id: "cloud-infrastructure",
    name: "CLOUD",
    title: "Cloud & DevOps Infrastructure",
    description:
      "Deploy scalable and reliable systems using cloud platforms with CI/CD pipelines, containerization, and performance optimization.",
    image: cloudImg,
  },
  {
    id: "cybersecurity",
    name: "SECURITY",
    title: "Cybersecurity & Data Protection",
    description:
      "Secure your applications and AI systems with advanced protection strategies, ensuring data integrity and system resilience.",
    image: securityImg,
  },
];
