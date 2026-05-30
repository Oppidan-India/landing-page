// Home.js

import "./Home.css";
import { Link } from "react-router-dom";

import heroImg from "../assets/hero-section-img.jpg";
import ikl from "../assets/IKL.jpeg";
import opp from "../assets/op.jpeg";
import iklVideo from "../assets/video.mp4";
import lou from "../assets/unity.jpeg";
import ogd from "../assets/dragon.jpeg";
import inn from "../assets/innovator.jpg";
import kar from "../assets/karate.jpg";
import logo from "../assets/logo.jpeg";

/* CLIENT IMAGES */

import c2 from "../assets/c2.jpeg";
import c3 from "../assets/c3.jpeg";
import c4 from "../assets/c4.jpeg";
import c5 from "../assets/c5.jpeg";
import c6 from "../assets/c6.jpeg";
import c7 from "../assets/c7.jpeg";
import c8 from "../assets/c8.png";
import c9 from "../assets/c9.png";
import c10 from "../assets/c10.png";

import t1 from "../assets/t1.jpeg";
import t2 from "../assets/t2.jpeg";
import t3 from "../assets/t3.jpeg";
import t4 from "../assets/t4.jpeg";

function Home() {

  const clients = [

    {
      image: c2,
      name: "OS Solutions",
    },

    {
      image: c3,
      name: "Symbiosis Skills And Professional University",
    },

    {
      image: c4,
      name: "MIT Arts, Commerce and Science College",
    },

    {
      image: c5,
      name: "Viskwakarma Institute of Technology",
    },

    {
      image: c6,
      name: "Glamzon Aesthetic & Slimming",
    },

    {
      image: c7,
      name: "Exceed Engineering Pvt Ltd",
    },

    {
      image: c8,
      name: "Oral Nest Dental Clinic",
    },

    {
      image: c9,
      name: "Cambridge International School",
    },

    {
      image: c10,
      name: "PLESCO",
    },

  ];

  const testimonials = [

    {
      image: t1,
      name: "Santosh Mole",
      role: "Head Coach,Karnataka Team",
      text:
        "Participating in Indian Karate League was a truly professional and well-organized experience for our entire Karnataka team. From athlete management to scheduling, refereeing standards, hospitality, and overall event execution — everything was handled smoothly. The atmosphere motivated our players to perform at their best, and the platform created by Oppidan India and the organizing team is highly appreciated. We are proud to have been part of IKL and look forward to participating in the upcoming seasons with an even bigger team",
    },

    {
      image: t2,
      name: "Dr.Ashutosh Dighe",
      role: "OralNest Dental Clinic",
      text:
        "Oppidan India developed our clinic website with a modern, professional, and user-friendly approach. The team was supportive throughout the process and understood our requirements properly. We are happy with the overall website design and development experience.",
    },

    {
      image: t3,
      name: "Disha Pure",
      role: "Student , Symbiosis Skills & Professional University (SSPU)",
      text:
        "My internship journey at Oppidan India was a great learning experience. I got exposure to practical work, teamwork, and real project environments which helped me improve my confidence and professional skills. The guidance and opportunities provided during the internship made the experience very valuable for my growth.",
    },

    {
      image: t4,
      name: "Aniket Tambe",
      role: "Football Coach, SB Patil School",
      text:
        "League of Unity Inter-School Football Tournament was a fantastic experience for our students. The tournament was organized professionally with great coordination, discipline, and sportsmanship throughout the event. It provided young players a wonderful platform to showcase their talent, teamwork, and confidence. We truly appreciate the efforts of the organizing team in conducting such an energetic and memorable tournament.",
    },

  ];

  return (

    <div className="app">

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

      <section className="hero">

        <div className="hero-left">

          <div className="hero-tag">
            Technology • Sports • Innovation
          </div>

          <h1>
            Building Future Leaders Through
            <span> Technology & Innovation</span>
          </h1>

          <p>
            Oppidan India empowers students, startups and athletes
            through real-world projects, innovation ecosystems and
            practical learning experiences.
          </p>

          <div className="hero-buttons">
            <Link to="/internship">
            <button className="primary-btn">
              Start Your Journey
            </button>
            </Link>
            <Link to="/services">
            <button className="secondary-btn">
              Explore Services
            </button>
            </Link>

          </div>

        </div>

        <div className="hero-right">

          <img
            src={heroImg}
            alt="Hero"
            className="hero-image"
          />

          <div className="floating-card">
            <h3>500+</h3>
            <p>Students Trained</p>
          </div>

        </div>

      </section>

      {/* STATS */}

      <div className="stats">

        <div className="stat-card">
          <h2>500+</h2>
          <p>Students Trained</p>
        </div>

        <div className="stat-card">
          <h2>120+</h2>
          <p>Projects Completed</p>
        </div>

        <div className="stat-card">
          <h2>30+</h2>
          <p>Events Organized</p>
        </div>

        <div className="stat-card">
          <h2>15+</h2>
          <p>Startups Supported</p>
        </div>

      </div>

      {/* ABOUT */}

      <section>

        <div className="section-title">

          <h2>About Oppidan India</h2>

          <p>
            Empowering youth through technology, sports and innovation
          </p>

        </div>

        <div className="about">

          <div className="about-left">

            <img
              src={ikl}
              alt="About"
            />

          </div>

          <div className="about-right">

            <h2>
              Creating Opportunities For The Future
            </h2>

            <p>
              We are building an ecosystem where students,
              developers, startups and athletes can grow through
              real-world experiences, innovation and leadership.
            </p>

            <div className="about-features">

              <div className="feature-box">
                <h3>Vision</h3>
                <p>Build a future-ready innovation ecosystem.</p>
              </div>

              <div className="feature-box">
                <h3>Mission</h3>
                <p>Provide practical learning and live projects.</p>
              </div>

              <div className="feature-box">
                <h3>Innovation</h3>
                <p>Support startups and creative youth ideas.</p>
              </div>

              <div className="feature-box">
                <h3>Sports</h3>
                <p>Empower athletes through digital platforms.</p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section>

        <div className="section-title">

          <h2>Our Services</h2>

          <p>
            Modern digital solutions for businesses and startups
          </p>

        </div>

        <div className="service-grid">

          <div className="service-card">
            <div className="service-icon">💻</div>
            <h3>Website Development</h3>
            <p>Modern responsive websites with premium UI/UX design.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">📱</div>
            <h3>App Development</h3>
            <p>Android and web applications with scalable architecture.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">🤖</div>
            <h3>AI Automation</h3>
            <p>Smart automation solutions using modern AI systems.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">🎯</div>
            <h3>Branding</h3>
            <p>Creative branding and social media growth strategies.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">⚙️</div>
            <h3>CRM Systems</h3>
            <p>Powerful business management and workflow solutions.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">🏆</div>
            <h3>Sports Tech</h3>
            <p>Tournament systems and athlete management platforms.</p>
          </div>

        </div>

      </section>

      {/* PROJECTS */}

      <section>

        <div className="section-title">

          <h2>Our Ventures</h2>

          <p>
            To Build the Nation through Sports and Technology
          </p>

        </div>

        <div className="projects-grid">

          <div className="project-card">

            <div className="project-image-container">
              <img
                src={opp}
                alt="Oppidan Sportix"
              />
            </div>

            <div className="project-content">

              <h3>Oppidan Sportix</h3>

              <p>
                Sports platform connecting athletes,
                tournaments and fans.
              </p>

            

            </div>

          </div>

          <div className="project-card">

            <div className="project-image-container">
              <img
                src={lou}
                alt="League of Unity"
              />
            </div>

            <div className="project-content">

              <h3>League of Unity</h3>

              <p>
                Inter School and Inter Club Sports
                Tournament platform promoting youth sports.
              </p>

              

            </div>

          </div>

          <div className="project-card">

            <div className="project-image-container">
              <img
                src={ogd}
                alt="Oppidan Golden Dragon Sports Academy"
              />
            </div>

            <div className="project-content">

              <h3>Oppidan Golden Dragon Sports Academy</h3>

              <p>
                Premier sports academy offering football,
                cricket, karate and martial arts training.
              </p>

              

            </div>

          </div>

          <div className="project-card">

            <div className="project-image-container">
              <img
                src={inn}
                alt="Oppidan Innovators Club"
              />
            </div>

            <div className="project-content">

              <h3>Oppidan Innovators Club</h3>

              <p>
                Provides hands-on projects, mentorship,
                and opportunities to explore technology and entrepreneurship.
              </p>

            

            </div>

          </div>

          <div className="project-card">

            <div className="project-image-container">
              <img
                src={kar}
                alt="Indian Karate League"
              />
            </div>

            <div className="project-content">

              <h3>Indian Karate League</h3>

              <p>
                India's premier karate championship bringing together
                the best martial artists from across the country.
              </p>

              

            </div>

          </div>

        </div>

      </section>

      {/* CLIENTS */}

      <section className="clients-section">

        <div className="section-title">

          <h2>Recognised By</h2>

          <p>
            Trusted by institutions, startups and organizations
          </p>

        </div>

        <div className="clients-slider">

          <div className="clients-track">

            {clients.map((client, index) => (

              <div className="client-card" key={index}>

                <img
                  src={client.image}
                  alt={client.name}
                />

                <h3>{client.name}</h3>

              </div>

            ))}

            {clients.map((client, index) => (

              <div
                className="client-card"
                key={`duplicate-${index}`}
              >

                <img
                  src={client.image}
                  alt={client.name}
                />

                <h3>{client.name}</h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* IKL */}

      <section>

        <div className="ikl">

          <div className="ikl-left">

            <h1>Indian Karate League</h1>

            <p>
              Building one of India’s biggest karate ecosystems
              with technology, athlete development and
              championship events.
            </p>


            <h2>Season 2 coming soon..</h2>
            <h2> Stay Tuned </h2>

            

          </div>

          <div className="ikl-right">

            <video
              className="ikl-video"
              src={iklVideo}
              autoPlay
              loop
              muted
              playsInline
              controls
            />

          </div>

        </div>

      </section>

      {/* TESTIMONIALS */}

      <section className="testimonials-section">

        <div className="section-title">

          <h2>TESTIMONIALS</h2>

          <p>
            What people say about Oppidan India
          </p>

        </div>

        <div className="testimonial-slider">

          <div className="testimonial-track">

            {testimonials.map((item, index) => (

              <div
                className="testimonial-card-new"
                key={index}
              >

                <div className="testimonial-top">

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div>

                    <h3>{item.name}</h3>
                    <span>{item.role}</span>

                  </div>

                </div>

                <p>
                  “{item.text}”
                </p>

              </div>

            ))}

            {testimonials.map((item, index) => (

              <div
                className="testimonial-card-new"
                key={`duplicate-testimonial-${index}`}
              >

                <div className="testimonial-top">

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div>

                    <h3>{item.name}</h3>
                    <span>{item.role}</span>

                  </div>

                </div>

                <p>
                  “{item.text}”
                </p>

              </div>

            ))}

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

export default Home;