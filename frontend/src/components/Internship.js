// Internship.js

import "./Internship.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import logo from "../assets/logo.jpeg";
function Internship() {

  useEffect(() => {

    window.scrollTo(0, 0);

  }, []);

  return (

    <div className="internship-page">

      {/* NAVBAR */}

      <nav className="navbar">

        <img
          src={logo}
          alt="Oppidan India"
          className="logo-img"
        />

        <ul className="nav-links">

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
            <Link to="/internship" className="active">
              Internship
            </Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>

        </ul>

        <Link to="/contact">
          <button className="nav-btn">
            Connect With Us
          </button>
        </Link>

      </nav>

      {/* HERO SECTION */}

      <section className="internship-hero">

        <div className="hero-left">

          <div className="hero-tag">
            Learn • Grow • Innovate
          </div>

          <h1>
            Internships that
            <span> Shape Your Future</span>
          </h1>

          <p>
            Gain real-world experience through practical learning,
            live projects and mentorship from industry professionals.
          </p>

          <div className="hero-buttons">

             <Link to="/contact">
          <button className="nav-btn">
            Apply Now
          </button>
        </Link>

           

          </div>

        </div>

        <div className="hero-right">

          <div className="hero-image">

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
              alt="Internship"
            />

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="stats-section">

        <div className="stat-card">
          <h2>100+</h2>
          <p>Students Mentored</p>
        </div>

        <div className="stat-card">
          <h2>50+</h2>
          <p>Live Projects</p>
        </div>

        <div className="stat-card">
          <h2>98%</h2>
          <p>Completion Rate</p>
        </div>

        <div className="stat-card">
          <h2>Career</h2>
          <p>Growth</p>
        </div>

      </section>

      {/* WHY JOIN */}

      <section className="why-section">

        <div className="section-title">

          <h2>
            Why Join <span>Oppidan India?</span>
          </h2>

          <p>
            We provide a platform where students can work on practical projects,
            improve technical skills and gain industry-level exposure.
          </p>

        </div>

        <div className="benefits-grid">

          <div className="benefit-card">
            <div className="benefit-icon">💻</div>
            <h3>Live Projects</h3>
            <p>
              Work on real-time projects that solve actual business problems.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">👨‍🏫</div>
            <h3>Expert Mentorship</h3>
            <p>
              Learn from industry professionals and get personalized guidance.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">🤝</div>
            <h3>Team Collaboration</h3>
            <p>
              Be part of a supportive team that encourages sharing and growth.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">📜</div>
            <h3>Certificate</h3>
            <p>
              Earn a certificate that adds value to your professional profile.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">🚀</div>
            <h3>Career Growth</h3>
            <p>
              Build confidence and gain industry-level experience.
            </p>
          </div>

        </div>

      </section>

      {/* EXPERIENCE SECTION */}

      <section className="experience-section">

        <div className="experience-left">

          <h2>What You Will Gain</h2>

          <ul>

            <li>Industry-level technical exposure</li>

            <li>Hands-on experience with real-world projects</li>

            <li>Improved problem-solving and analytical skills</li>

            <li>Strong professional network and connections</li>

            <li>Better career opportunities and growth</li>

          </ul>

        </div>

        <div className="experience-right">

          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
            alt="Team Discussion"
          />

        </div>

      </section>

      {/* CTA */}

      <section className="cta-section">

        <div className="cta-content">

          <div>

            <h2>Ready to start your journey?</h2>

            <p>
              Apply now and take the first step towards a brighter future.
            </p>

          </div>

           <Link to="/contact">
          <button className="nav-btn">
            Contact Us
          </button>
        </Link>

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

export default Internship;