// Contact.js

import "./Contact.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SiteNav from "./SiteNav";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    interest: "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   try {
  const response = await fetch("https://landing-page-819a.onrender.com/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json();

  alert(data.message);

  setFormData({
    name: "",
    email: "",
    phone: "",
    role: "",
    interest: "",
    message: "",
  });

} catch (error) {
  alert("Something went wrong. Please try again.");
}
  };

  return (
    <div className="contact-page">

      <SiteNav />

      <section className="contact-hero">
        <div className="hero-tag">
          Contact • Connect • Collaborate
        </div>

        <h1>
          Contact
          <span> Us</span>
        </h1>

        <p>
          Get in touch with Oppidan India for internships,
          projects, collaborations and innovation opportunities.
        </p>
      </section>

      <section className="contact-section">

        <div className="contact-card">
          <h2>Reach Us</h2>

          <p>
            Email:
            <br />
            oppidanindia@gmail.com
          </p>

          <p>
            Phone:
            <br />
            +91 8830450210
          </p>

          <p>
            Location:
            <br />
            Shop no -G2, Swami Plaza, Shahunagar,
            Sambhajinagar, Chinchwad,
            Pimpri-Chinchwad, Maharashtra 411019
          </p>
        </div>

        <div className="contact-card">
          <h2>Working Hours</h2>
          <p>Monday - Friday : 9:00 AM - 6:00 PM</p>
          <p>Saturday : 10:00 AM - 4:00 PM</p>
          <p>Sunday : Closed</p>
        </div>

      </section>

      <section className="form-section">

        <div className="form-card">

          <h2>Send Message</h2>

          <form className="modern-form" onSubmit={handleSubmit}>

            <div className="form-row">

              <div className="input-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="input-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="oppidanindia@gmail.com"
                  required
                />
              </div>

            </div>

            <div className="form-row">

              <div className="input-group">
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXXX XXXXX"
                />
              </div>

              <div className="input-group">
                <label>I am a *</label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select your role</option>
                  <option>Student</option>
                  <option>Developer</option>
                  <option>Designer</option>
                  <option>Business</option>
                </select>
              </div>

            </div>

            <div className="input-group">
              <label>I'm interested in *</label>
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                required
              >
                <option value="">Select your interest</option>
                <option>Internship</option>
                <option>Projects</option>
                <option>Collaboration</option>
                <option>Services</option>
              </select>
            </div>

            <div className="input-group">
              <label>Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="7"
                placeholder="Tell us more about your requirements..."
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>

          </form>

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

export default Contact;
