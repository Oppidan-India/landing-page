// Projects.js

import "./Projects.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import logo from "../assets/logo.jpeg";

function Projects() {

  useEffect(() => {

    window.scrollTo(0, 0);

  }, []);

  const ventures = [

    {
      title: "Oppidan Sportix",
      tagline: "Smart Sports Management Ecosystem",
      description:
        "Oppidan Sportix is a modern multi-sports event management platform designed to simplify tournament operations through technology, automation, live scoring, registrations, and professional event infrastructure.",

      features: [
        "Tournament Management",
        "Live Scoring & Results",
        "Athlete Registration System",
        "Pool & Bracket Automation",
        "Multi-Sport Support",
        "Organizer Dashboard",
        "Analytics & Reports",
        "Live Audience Experience",
      ],

      vision:
        "To build India’s most advanced sports event ecosystem for organizers, athletes, academies, schools, and leagues.",
    },

    {
      title: "Oppidan Golden Dragon Sports Academy",
      tagline: "Discipline • Strength • Excellence",
      description:
        "Oppidan Golden Dragon Sports Academy focuses on athlete development through professional karate training, discipline, fitness, and competitive exposure.",

      features: [
        "Karate Training",
        "Kata & Kumite",
        "Athlete Development",
        "Competition Preparation",
        "Leadership & Confidence",
        "Grassroots Sports Growth",
      ],

      vision:
        "To create nationally and internationally competitive athletes while building confidence, discipline, and leadership in youth.",
    },

    {
      title: "League of Unity",
      tagline: "Where Sports Unite Communities",
      description:
        "League of Unity is a community-driven sports league initiative bringing schools, colleges, clubs, and young athletes together through professionally managed tournaments and competitive events.",

      features: [
        "Cricket",
        "Football",
        "Volleyball",
        "Basketball",
        "Kabaddi",
        "Inter-School Tournaments",
      ],

      vision:
        "To build a powerful youth sports culture through teamwork, competition, and community engagement.",
    },

    {
      title: "Indian Karate League (IKL)",
      tagline: "India’s Premier Karate Championship",
      description:
        "Indian Karate League is a national-level karate competition platform focused on delivering a premium, professional, and international-style tournament experience for athletes.",

      features: [
        "National Participation",
        "Certified Referees",
        "Premium Event Experience",
        "Live Tournament Operations",
        "Athlete Recognition",
        "Professional Branding",
      ],

      vision:
        "To modernize karate tournaments in India and create one of the country’s biggest karate league ecosystems.",
    },

    {
      title: "Oppidan Digi Gold",
      tagline: "Digital Gold Meets Luxury Commerce",
      description:
        "Oppidan Digi Gold is a fintech and jewellery commerce platform that enables digital gold investment, jewellery ecommerce, and smart management systems for jewellers.",

      features: [
        "Digital Gold Investment",
        "Gold SIP System",
        "Jewellery Ecommerce",
        "Admin Management Panel",
        "Real-Time Gold Pricing",
        "Gold-to-Jewellery Conversion",
      ],

      vision:
        "To help jewellers transition into the digital future through secure, scalable, and modern gold commerce technology.",
    },

  ];

  return (

    <div className="projects-page">

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

          <li className="active">
            <Link to="/projects">Ventures</Link>
          </li>

          <li>
            <Link to="/internship">Internship</Link>
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

      {/* HERO */}

      <section className="projects-hero">

        <div className="hero-tag">
          Innovation • Sports • Technology
        </div>

        <h1>
          Our <span>Ventures</span>
        </h1>

        <p>
          Building impactful ecosystems across sports,
          technology, innovation and youth empowerment.
        </p>

      </section>

      {/* VENTURES */}

      <section className="ventures-section">

        <div className="ventures-wrapper">

          {ventures.map((venture, index) => (

            <div className="venture-card" key={index}>

              <div className="venture-top">

                <div className="venture-number">
                  0{index + 1}
                </div>

                <div>

                  <h2>{venture.title}</h2>

                  <span className="venture-tagline">
                    {venture.tagline}
                  </span>

                </div>

              </div>

              <p className="venture-description">
                {venture.description}
              </p>

              <div className="venture-features">

                {venture.features.map((feature, i) => (

                  <div className="feature-pill" key={i}>
                    {feature}
                  </div>

                ))}

              </div>

              <div className="venture-vision">

                <h4>Vision</h4>

                <p>
                  {venture.vision}
                </p>

              </div>

            </div>

          ))}

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

export default Projects;