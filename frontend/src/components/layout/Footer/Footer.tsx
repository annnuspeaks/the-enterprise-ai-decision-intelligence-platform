// import { Github, Linkedin, Mail } from "lucide-react";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="nexora-footer" id="contact">
      <div className="nexora-footer__inner">
        <div className="nexora-footer__top">
          <div className="nexora-footer__brand">
            <Link to="/" aria-label="Nexora Home">
              <img
                src={
                  new URL("../../../assets/nexora-logo.png", import.meta.url)
                    .href
                }
                alt="Nexora"
                className="nexora-footer__logo"
              />
            </Link>

            <p>
              Enterprise AI Decision Intelligence for customer and business
              analytics.
            </p>
          </div>

          <div className="nexora-footer__column">
            <h3>Quick Links</h3>
            <a href="/#about">About</a>
            <a href="/#features">Features</a>
            <a href="/#technology">Technology</a>
            <Link to="/dashboard">Dashboard</Link>
          </div>

          <div className="nexora-footer__column">
            <h3>Our Other Products</h3>
            <a
              href="https://fraudmatrix.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Fraudmatrix | Fraud Detection System
            </a>
            <a
              href="https://churnmatrix.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Churnmatrix | Customer Churn Prediction
            </a>
            <span>MLOps Automated Training &amp; Deployment Pipeline</span>
            <span>RAG AI Assistant</span>
            <span>Recommendation System</span>
            <span>Time-Series Forecasting Platform</span>
          </div>

          <div className="nexora-footer__column nexora-footer__connect">
            <h3>Connect</h3>

            <a
              href="mailto:annu.speaks@outlook.com"
              className="nexora-footer__contact"
            >
              <Mail size={17} strokeWidth={1.8} />
              <span>annu.speaks@outlook.com</span>
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=India"
              target="_blank"
              rel="noreferrer"
              className="nexora-footer__contact"
              aria-label="Location: India"
            >
              <svg
                viewBox="0 0 24 24"
                width="17"
                height="17"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>

              <span>India</span>
            </a>

            <div className="nexora-footer__socials">
              <a
                href="https://github.com/annnuspeaks"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="19"
                  height="19"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2.25a9.75 9.75 0 0 0-3.08 19c.49.09.67-.21.67-.47v-1.67c-2.72.59-3.29-1.15-3.29-1.15-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.17-.25-4.45-1.09-4.45-4.84 0-1.07.38-1.94 1.03-2.62-.1-.25-.45-1.24.1-2.58 0 0 .84-.27 2.68 1a9.3 9.3 0 0 1 4.88 0c1.84-1.25 2.68-1 2.68-1 .55 1.34.2 2.33.1 2.58.65.68 1.03 1.55 1.03 2.62 0 3.76-2.29 4.59-4.47 4.83.36.31.68.92.68 1.86v2.75c0 .27.18.57.68.47A9.75 9.75 0 0 0 12 2.25Z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/annuspeaks/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="19"
                  height="19"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M5.2 3.5a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM3.3 9.5h3.8v11H3.3v-11Zm6.1 0h3.6V11h.05c.5-.94 1.73-1.93 3.56-1.93 3.81 0 4.51 2.5 4.51 5.75v5.68h-3.8v-5.03c0-1.2-.02-2.74-1.67-2.74-1.68 0-1.94 1.31-1.94 2.66v5.11H9.4v-11Z" />
                </svg>
              </a>

              <a
                href="https://x.com/annu_speaks"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="19"
                  height="19"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.964 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
                </svg>
              </a>

              <a
                href="https://wa.me/917068515424?text=Hi%21%20How%20may%20I%20help%20you%3F"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="nexora-footer__whatsapp"
              >
                {/* WhatsApp icon */}
                <svg
                  viewBox="0 0 24 24"
                  width="19"
                  height="19"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2.25a9.72 9.72 0 0 0-8.43 14.56L2.25 21.75l5.12-1.3A9.75 9.75 0 1 0 12 2.25Zm0 17.45a7.7 7.7 0 0 1-3.92-1.07l-.28-.17-3.04.77.81-2.96-.18-.3A7.7 7.7 0 1 1 12 19.7Zm4.22-5.78c-.23-.12-1.36-.67-1.57-.75-.21-.08-.36-.12-.51.12-.15.23-.59.75-.72.9-.13.16-.27.17-.5.06-.23-.12-.96-.35-1.83-1.11-.68-.6-1.14-1.34-1.27-1.57-.13-.23-.01-.35.1-.46.1-.1.23-.27.35-.4.12-.14.15-.23.23-.39.08-.16.04-.29-.02-.41-.06-.12-.51-1.24-.7-1.7-.18-.44-.37-.38-.51-.39h-.43c-.15 0-.4.06-.61.29-.21.23-.8.78-.8 1.9s.82 2.2.93 2.35c.12.15 1.62 2.48 3.93 3.48.55.24.98.38 1.31.49.55.18 1.05.16 1.45.1.44-.07 1.36-.56 1.55-1.1.19-.54.19-1 .13-1.1-.05-.1-.2-.16-.43-.28Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="nexora-footer__bottom">
          <span>© {currentYear} Nexora. All rights reserved.</span>
          <span>TAS Communication Services | Anurag Shukla</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
