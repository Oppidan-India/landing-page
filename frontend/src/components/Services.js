// Services.js

import "./Services.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import SiteNav from "./SiteNav";

function Services() {

  useEffect(() => {

    window.scrollTo(0, 0);

  }, []);

  return (

    <div className="services-page">

      {/* NAVBAR */}

      <SiteNav />

      {/* HERO */}

      <section className="services-hero">

        <h1>Our Services</h1>

        <p>
          Modern digital solutions for businesses,
          startups and organizations.
        </p>

      </section>

      {/* SERVICES */}

      <section className="services-section">

        <div className="service-grid">

          <div className="service-card">

            <div className="service-icon">💻</div>

            <h3>Website Development</h3>

            <p>
              Modern responsive websites with premium UI/UX design.
            </p>

          </div>

          <div className="service-card">

            <div className="service-icon">📱</div>

            <h3>App Development</h3>

            <p>
              Android and web applications with scalable architecture.
            </p>

          </div>

          <div className="service-card">

            <div className="service-icon">🤖</div>

            <h3>AI Automation</h3>

            <p>
              Smart automation solutions using modern AI systems.
            </p>

          </div>

          <div className="service-card">

            <div className="service-icon">🎯</div>

            <h3>Branding</h3>

            <p>
              Creative branding and social media growth strategies.
            </p>

          </div>

          <div className="service-card">

            <div className="service-icon">⚙️</div>

            <h3>CRM Systems</h3>

            <p>
              Powerful business management and workflow solutions.
            </p>

          </div>

          <div className="service-card">

            <div className="service-icon">🏆</div>

            <h3>Sports Tech</h3>

            <p>
              Tournament systems and athlete management platforms.
            </p>

          </div>

          {/* NEW SERVICES */}

          <div className="service-card">

            <div className="service-icon">🎓</div>

            <h3>Internships</h3>

            <p>
              Real-world internship opportunities for students in technology,
              marketing and business domains.
            </p>

          </div>

          <div className="service-card">

            <div className="service-icon">📢</div>

            <h3>Digital Marketing</h3>

            <p>
              SEO, social media marketing, branding campaigns and digital
              growth strategies for businesses.
            </p>

          </div>

          <div className="service-card">

            <div className="service-icon">🛡️</div>

            <h3>College Workshops for Defense and Technology</h3>

            <p>
              Interactive workshops and training programs focused on defense,
              innovation, cybersecurity and emerging technologies.
            </p>

          </div>

        </div>

      </section>
{/* FOOTER */}

<footer className="footer">

  <div className="footer-col">

    <h2>Oppidan India</h2>

    <p>
      Empowering youth through technology,
      innovation and sports.
    </p>

  </div>

  {/* QUICK LINKS */}

  <div className="footer-col">

    <h3>Quick Links</h3>

    <ul>

      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/about">About</Link>
      </li>

      <li>
        <Link to="/services">Services</Link>
      </li>

      <li>
        <Link to="/projects">Ventures</Link>
      </li>

      <li>
        <Link to="/internship">Internship</Link>
      </li>

      <li>
        <Link to="/contact">Contact</Link>
      </li>

    </ul>

  </div>

  {/* VENTURES */}

  <div className="footer-col">

    <h3>Ventures</h3>

    <p>Oppidan Sportix</p>

    <p>Indian Karate League</p>

    <p>Internship Program</p>

  </div>

  {/* CONTACT */}

  <div className="footer-col">

    <h3>Contact</h3>

    <p>oppidanindia@gmail.com</p>

    <p>contact@oppidanindia.com</p>

    <p>+91 8830450210</p>

    <p>
      Location: Shop no - G2, Swami Plaza,
      Shahunagar, Sambhajinagar,
      Chinchwad, Pimpri-Chinchwad,
      Maharashtra 411019
    </p>

  </div>

</footer>

    </div>

  );

}

export default Services;
