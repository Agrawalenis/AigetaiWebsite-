import React from "react";
import "./Footer.css";

// Social icon components (filled circles like Luma)
const InstagramIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
  </svg>
);

const YoutubeIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const TwitterIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 12.07C22 6.48 17.52 2 11.93 2 6.48 2 2 6.48 2 12.07c0 5.08 3.72 9.28 8.59 10.03v-7.1H8.03v-2.93h2.56V9.83c0-2.54 1.5-3.94 3.8-3.94 1.1 0 2.24.2 2.24.2v2.48h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.77l-.44 2.93h-2.33v7.1C18.28 21.35 22 17.15 22 12.07z" />
  </svg>
);

const LinkedinIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const WhatsappIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.43 0 .06 5.37.06 11.98c0 2.11.55 4.16 1.6 5.98L0 24l6.17-1.62a11.95 11.95 0 0 0 5.87 1.5h.01c6.61 0 11.98-5.37 11.98-11.98a11.9 11.9 0 0 0-3.51-8.42Zm-8.48 18.4h-.01a9.93 9.93 0 0 1-5.07-1.39l-.36-.21-3.66.96.98-3.57-.24-.37a9.96 9.96 0 0 1-1.53-5.26C2.15 6.53 6.8 1.88 12.05 1.88a9.91 9.91 0 0 1 7.04 2.9 9.89 9.89 0 0 1 2.91 7.04c0 5.25-4.65 10.06-9.96 10.06Zm5.78-7.45c-.32-.16-1.9-.94-2.19-1.05-.29-.11-.5-.16-.72.16-.21.32-.83 1.05-1.02 1.26-.19.21-.38.24-.7.08-.32-.16-1.35-.5-2.57-1.6-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.38.48-.57.16-.19.21-.32.32-.53.11-.21.05-.39-.02-.55-.08-.16-.72-1.74-.99-2.38-.26-.63-.53-.54-.72-.55l-.62-.01c-.21 0-.55.08-.84.39-.29.32-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.21 2.21 3.38 5.36 4.74.75.32 1.34.51 1.8.65.76.24 1.46.21 2.01.13.61-.09 1.9-.78 2.17-1.54.27-.76.27-1.41.19-1.54-.08-.13-.29-.21-.61-.37Z" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Brand and Social Icons */}
          <div className="footer-left">
            <h3 className="footer-brand">AIGETAI</h3>
            <div className="social-icons">
              <a
                href="https://www.instagram.com/aigetaii?igsh=MXF3ZWVjbWZmc2pnZg=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://youtube.com/@aigetai?si=Gl7A5OBkFU1KBg4q"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <YoutubeIcon />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <TwitterIcon />
              </a>
              <a
                href="https://www.facebook.com/share/18YQoiSUcp/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.linkedin.com/company/ihola/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
               <a
                href="https://whatsapp.com/channel/0029VbBkWKjEwEk4Ok5kkf3V"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Whatsapp"
              >
                <WhatsappIcon />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="footer-links">
            <div className="footer-column">
              <a href="#product">Product</a>
              <a href="#pricing">Pricing</a>
              <a href="#use-cases">Use Cases</a>
              <a href="#api">API</a>
            </div>

            <div className="footer-column">
              <a href="#enterprise">Enterprise</a>
              <a href="#join-us">Join Us</a>
              <a href="#creative-partner">Creative Partner Program</a>
              <a href="#education">Education Program</a>
            </div>

            <div className="footer-column">
              <a href="#learning-hub">Learning Hub</a>
              <a href="#media-kit">Media kit</a>
              <a href="#terms">Terms of Service</a>
              <a href="#privacy">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
