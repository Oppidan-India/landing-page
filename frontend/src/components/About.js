// About.js

import "./About.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import teamImg from "../assets/team.jpeg";
import founderImg from "../assets/founder.jpg";
import logo from "../assets/logo.jpeg";

/* GALLERY IMAGES */

import p1 from "../assets/p1.jpeg";
import p2 from "../assets/p2.jpeg";
import p3 from "../assets/p3.jpeg";
import p4 from "../assets/p4.jpeg";
import p5 from "../assets/p5.jpeg";
import p6 from "../assets/p6.jpeg";
import p7 from "../assets/p7.jpeg";
import p8 from "../assets/p8.jpeg";
import p9 from "../assets/p9.jpeg";
import p10 from "../assets/p10.jpeg";
import p11 from "../assets/p11.jpeg";
import p12 from "../assets/p12.jpeg";
import p13 from "../assets/p13.jpeg";
import p14 from "../assets/p14.jpeg";
import p15 from "../assets/p15.jpeg";
import p16 from "../assets/p16.jpeg";
import p17 from "../assets/p17.jpeg";
import p18 from "../assets/p18.jpeg";
import p19 from "../assets/p19.jpeg";
import p20 from "../assets/p20.jpeg";
import p21 from "../assets/p21.jpeg";
import p22 from "../assets/p22.jpeg";
import p23 from "../assets/p23.jpeg";
import p24 from "../assets/p24.jpeg";
import p25 from "../assets/p25.jpeg";
import p26 from "../assets/p26.jpeg";
import p27 from "../assets/p27.jpeg";
import p28 from "../assets/p28.jpeg";

function About() {

  useEffect(() => {

    window.scrollTo(0, 0);

  }, []);

  const timeline = [

    {
      year: "2022",
      title: "The Beginning",
      text:
        "Oppidan India was founded with a vision to empower youth by providing real-time internship opportunities, enabling them to gain practical experience, develop industry-ready skills, and build successful careers.",
    },

    {
      year: "2023",
      title: "First Milestone",
      text:
        "A software company under the banner of Oppidan India was established with the aim of driving innovation, creating digital solutions, and empowering businesses through technology.",
    },

    {
      year: "2024",
      title: "Growing Strong",
      text:
        "Oppidan India expanded into the software industry with a focus on innovation, digital transformation, and technology-driven solutions.",
    },

    {
      year: "2025",
      title: "New Heights",
      text:
        "The Indian Karate League, League of Unity, Oppidan Sportix, OGD Sports Academy and Oppidan Innovators Club were established as key initiatives under Oppidan India, creating a strong foundation across sports, innovation, youth development, and community engagement.",
    },

    {
      year: "2026",
      title: "Shaping the Future",
      text:
        "Oppidan Digi Gold was developed to provide digital solutions for jewellers, while a digital marketing firm was established to help businesses strengthen their online presence and brand growth.",
    },

  ];

  /* PHOTO GALLERY ARRAY */

  const galleryImages = [
    p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,
    p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,
    p21,p22,p23,p24,p25,p26,p27,p28
  ];

  return (

    <div className="about-page">

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

          <li className="active">
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

         <Link to="/contact">
          <button className="nav-btn">
            Connect With Us
          </button>
        </Link>

      </nav>

      {/* HERO SECTION */}

      <section className="about-hero">

        <div className="about-left">

          <div className="about-tag">
            Who We Are
          </div>

          <h1>
            About
            <span> Oppidan India</span>
          </h1>

          <p>
            Oppidan India is a dynamic technology, sports and
            innovation organization committed to building
            future-ready individuals. We empower students,
            startups and athletes through practical learning,
            real-world exposure and innovation-driven opportunities.
          </p>

        </div>

        <div className="about-right">

          <img
            src={teamImg}
            alt="Oppidan Team"
            className="team-image"
          />

        </div>

      </section>

      {/* TIMELINE */}

      <section className="timeline-section">

        <div className="section-top-tag">
          Our Journey
        </div>

        <div className="timeline-wrapper">

          {timeline.map((item, index) => (

            <div className="timeline-card" key={index}>

              <div className="timeline-dot"></div>

              <h3>{item.year}</h3>

              <h4>{item.title}</h4>

              <p>{item.text}</p>

            </div>

          ))}

        </div>

      </section>

      {/* FOUNDER SECTION */}

      <section className="founder-section">

        <div className="founder-card">

          <div className="founder-image-box">

            <img
              src={founderImg}
              alt="Founder"
            />

          </div>

          <div className="founder-content">

            <div className="section-top-tag">
              Founders Achievements Profile
            </div>

            <h2>Om Ingole</h2>

            <span>
              Founder & CEO, Oppidan India
            </span>

            <ul>
              <li>25x National and 5x International Medalist in Karate</li>
              <li>Awarded by Zee News for “Champion of Resilience and Entrepreneurial Vision”</li>
              <li>India’s Youngest Youth to Host a National-Level Sports Tournament.</li>
              <li>National Youth Award Nominee</li>
              <li>3000+ Students Participated in Oppidan India Events</li>
              <li>100+ Students Currently Training Under the Karate Academy</li>
            </ul>

          </div>

        </div>

      </section>

      {/* MISSION & VISION */}

      <section>

        <div className="mission-grid">

          <div className="mission-card">

            <h3>Our Mission</h3>

            <p>
              To empower youth by providing industry-relevant skills,
              real-world projects and innovation ecosystems that help
              them become confident, capable and future-ready leaders.
            </p>

          </div>

          <div className="mission-card">

            <h3>Our Vision</h3>

            <p>
              To be a leading platform that transforms education,
              sports and technology into opportunities and creates
              a positive impact on individuals and communities.
            </p>

          </div>

        </div>

      </section>

      {/* PHOTO GALLERY */}

      <section className="gallery-section">

        <div className="section-title">

          <h2>Photo Gallery</h2>

          <p>
            Capturing moments from Oppidan India
          </p>

        </div>

        <div className="gallery-grid">

          {galleryImages.map((img, index) => (

            <div className="gallery-card" key={index}>

              <img
                src={img}
                alt={`gallery-${index + 1}`}
              />

            </div>

          ))}

        </div>

      </section>

      {/* VALUES */}

      <section>

        <div className="section-title">

          <h2>Our Core Values</h2>

          <p>
            The principles that define Oppidan India
          </p>

        </div>

        <div className="values-grid">

          <div className="value-card">
            <h3>Excellence</h3>
            <p>
              We are committed to delivering the highest quality in everything we do.
            </p>
          </div>

          <div className="value-card">
            <h3>Innovation</h3>
            <p>
              We encourage creativity and embrace new ideas to build better solutions.
            </p>
          </div>

          <div className="value-card">
            <h3>Empowerment</h3>
            <p>
              We empower individuals with skills, knowledge and opportunities.
            </p>
          </div>

          <div className="value-card">
            <h3>Integrity</h3>
            <p>
              We operate with honesty, transparency and strong ethical values.
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

export default About;