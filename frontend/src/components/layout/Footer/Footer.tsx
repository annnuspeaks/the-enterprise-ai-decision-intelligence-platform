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
                src={new URL(
                  "../../../assets/nexora-logo.png",
                  import.meta.url,
                ).href}
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
