import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import cvFile from "../../assets/Sharad_Pandey_CV.pdf";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-brand-col">
          <h2 className="footer-logo">S.P</h2>

          <p className="footer-bio">
            Frontend Developer | Freelancer | BCSIT Student.
            Building modern and responsive web applications
            with passion and dedication.
          </p>

          <div className="footer-socials">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsWhatsapp />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="footer-links-grid">

          {/* Quick Links */}
          <div className="links-group">
            <h3>Quick Links</h3>

            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="links-group">
            <h3>Services</h3>

            <ul>
              <li><a href="#!">Web Development</a></li>
              <li><a href="#!">Frontend Development</a></li>
              <li><a href="#!">Responsive Design</a></li>
              <li><a href="#!">React Development</a></li>
              <li><a href="#!">UI/UX Design</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="links-group">
            <h3>Resources</h3>

            <ul>
              <li>
                <motion.a
                  href={cvFile}
                  download="Sharad_Pandey_CV.pdf"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download CV
                </motion.a>
              </li>

              <li>
                <a href="#projects">Projects</a>
              </li>

              <li>
                <Link to="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link to="/terms-conditions">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          &copy; 2026 Sharad Pandey. All rights reserved.
        </p>

        <p>
          Designed with{" "}
          <span style={{ color: "#e11d48" }}>♥</span>
          {" "}by Sharad Pandey
        </p>
      </div>
    </footer>
  );
}