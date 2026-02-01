import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";

const footerLinks = {
  solutions: [
    { name: "Face Swapping", path: "/solutions#face-swap" },
    { name: "Gesture Control", path: "/solutions#gesture" },
    { name: "AI Automation", path: "/solutions#automation" },
    { name: "AI Agents", path: "/solutions#agents" },
  ],
  company: [
    { name: "Careers", path: "/careers" },
    { name: "About Us", path: "/#about" },
    { name: "Contact", path: "/#contact" },
  ],
  resources: [
    { name: "FAQ", path: "/#faq" },
    { name: "Documentation", path: "#" },
    { name: "Blog", path: "#" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Mail, href: "mailto:hello@aigetai.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="section-container px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">A</span>
              </div>
              <span className="text-xl font-bold text-foreground">Aigetai</span>
            </Link>
            <p className="body-regular max-w-sm mb-6">
              Engineering Intelligence for the Real World. Building advanced AI systems 
              that power vision, automation, interaction, and cognition.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="body-regular hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="body-regular hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="body-regular hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Aigetai. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
