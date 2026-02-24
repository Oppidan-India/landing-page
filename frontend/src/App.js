import React, { useState} from 'react';
import './App.css';
import { Menu, X, Send, Phone, Mail, MapPin, Users, Award, Target, Zap, ArrowRight, Star, Calendar, Trophy, Image as ImageIcon } from 'lucide-react';

const OpidanWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: '',
    interest: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const ventures = [
    {
      name: 'Oppidan India',
      description: 'Internships, EdTech training, workshops for skill development',
      details: 'Comprehensive training programs and internships designed to bridge the gap between academic learning and industry requirements.',
      icon: '🎓',
      logo: '/images/logos/oppidan-india.png',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Oppidan Golden Dragon Sports Academy',
      description: 'Multi-sport training academy',
      details: 'Premier sports academy offering football, cricket, karate, and martial arts training with world-class coaching and facilities.',
      icon: '🥋',
      logo: '/images/logos/golden-dragon.png',
      color: 'from-orange-500 to-orange-600'
    },
    {
      name: 'Indian Karate League',
      description: 'National championship platform for martial arts',
      details: "India's premier karate championship bringing together the best martial artists from across the country.",
      icon: '🏆',
      logo: '/images/logos/indian-karate-league.png',
      color: 'from-red-500 to-red-600'
    },
    {
      name: 'Oppidan Sportix',
      description: 'Multi-sport event tech: registration, pools, live scoring',
      details: 'Comprehensive sports management platform providing end-to-end solutions for tournament organization.',
      icon: '⚡',
      logo: '/images/logos/oppidan-sportix.png',
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Oppidan Innovators Club',
      description: 'Student innovation club fostering creativity and leadership',
      details: 'Provides hands-on projects, mentorship, and opportunities to explore technology and entrepreneurship.',
      icon: '💡',
      logo: '/images/logos/oppidan-innovators.png',
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'League Of Unity',
      description: 'Inter-school and inter-club multi-sport league',
      details: 'Unites young athletes through organized tournaments, certified officials, and impactful sporting experiences.',
      icon: '🤝',
      logo: '/images/logos/league-of-unity.jpg',
      color: 'from-cyan-500 to-cyan-600'
    }
  ];

  const stats = [
    { label: 'Students Trained', value: '500+', icon: Users },
    { label: 'Partner Institutes', value: '25+', icon: Award },
    { label: 'Athletes Trained', value: '150+', icon: Trophy },
    { label: 'Cities Reached', value: '15+', icon: MapPin }
  ];

  const programs = [
    {
      title: 'Student Development Programs',
      description: 'Skill-building tracks in technology, entrepreneurship, leadership, and creative fields.',
      icon: Target
    },
    {
      title: 'Institute Partnerships',
      description: 'Custom workshops, innovation cells, sports collaborations, and campus engagement initiatives.',
      icon: Users
    },
    {
      title: 'Industry Collaboration',
      description: 'Talent pipelines, project partnerships, research support, and innovation-driven problem-solving.',
      icon: Zap
    },
    {
      title: 'Events & Competitions',
      description: 'Hackathons, sports tournaments, ideathons, showcases, and community-driven challenges.',
      icon: Calendar
    }
  ];

  const sportsOffered = [
    'Football', 'Cricket', 'Karate', 'Martial Arts', 'Athletics', 'Basketball'
  ];

  const eventPhotos = [
    {
      title: 'Leadership Speaking Event',
      description: 'Founder addressing students and partners at a major event',
      category: 'leadership',
      image: '/images/gallery/event-1.jpg'
    },
    {
      title: 'Innovators Club Event',
      description: 'Team with creative INIT display and Indian flag artwork',
      category: 'innovation',
      image: '/images/gallery/event-2.jpg'
    },
    {
      title: 'Indian Karate League Recognition',
      description: 'Award ceremony and partnership recognition',
      category: 'sports',
      image: '/images/gallery/event-3.jpg'
    },
    {
      title: 'Student Workshop',
      description: 'Large-scale workshop with MIT Arts Commerce College students',
      category: 'education',
      image: '/images/gallery/event-4.jpg'
    },
    {
      title: 'Team Innovation Display',
      description: 'Innovation team with INNOVATION creative display',
      category: 'innovation',
      image: '/images/gallery/event-5.jpg'
    },
    {
      title: 'India Excellence Awards 2024',
      description: 'Recognition at national awards ceremony',
      category: 'awards',
      image: '/images/gallery/event-6.jpg'
    },
    {
      title: 'Community Engagement',
      description: 'Founder engaging with community leaders',
      category: 'community',
      image: '/images/gallery/event-7.jpg'
    },
    {
      title: 'Karate Championship',
      description: 'Indian Karate League tournament with young participants',
      category: 'sports',
      image: '/images/gallery/event-8.jpg'
    },
    {
      title: 'Media Recognition',
      description: 'Interview at India Excellence Awards',
      category: 'media',
      image: '/images/gallery/event-9.jpg'
    },
    {
      title: 'Workshop Success',
      description: 'Group photo with students and instructors',
      category: 'education',
      image: '/images/gallery/event-10.jpg'
    },
    {
      title: 'Founder Speaking',
      description: 'Inspiring address to audience',
      category: 'leadership',
      image: '/images/gallery/event-11.jpg'
    },
    {
      title: 'Public Speaking Event',
      description: 'Engaging with audience at large gathering',
      category: 'leadership',
      image: '/images/gallery/event-12.jpg'
    },
    {
      title: 'Award Ceremony',
      description: 'Recognition at India Excellence Awards 2024',
      category: 'awards',
      image: '/images/gallery/event-13.jpg'
    },
    {
      title: 'Karate League Partnership',
      description: 'Collaboration with Maharashtra Karate Association',
      category: 'sports',
      image: '/images/gallery/event-14.jpg'
    },
    {
      title: 'Community Leadership',
      description: 'Speaking at community event',
      category: 'community',
      image: '/images/gallery/event-15.jpg'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!formData.fullName || !formData.email || !formData.role || !formData.interest || !formData.message) {
      setSubmitMessage('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage('Thank you! We\'ll get back to you soon.');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          role: '',
          interest: '',
          message: ''
        });
      } else {
        setSubmitMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Error submitting form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
              <div className="flex items-center gap-2">
 <img 
  src="/images/oppidan-logo.jpg" 
  alt="Oppidan India Logo" 
  className="w-50 h-14 object-contain rounded-lg"
/>

             
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'ventures', 'programs', 'sports', 'gallery', 'contact'].map(section => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-blue-600 transition-colors ${
                    activeSection === section ? 'text-blue-600 font-semibold' : 'text-gray-700'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
                      <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'ventures', 'programs', 'sports', 'gallery', 'contact'].map(section => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-3 py-2 capitalize hover:bg-blue-50 rounded-md"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-blue-600 via-blue-700 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white py-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Empowering India's Youth
            </h2>
            <p className="text-xl md:text-2xl mb-4 opacity-90">
              Build skills. Win in sports. Launch real projects.
            </p>
            <p className="text-lg mb-8 max-w-3xl mx-auto opacity-80">
              Oppidan India powers students, institutes, and brands with hands-on tech training, 
              competitive sports, and startup execution—under one youth-first ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                Apply for Internship
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg"
              >
                Book a Call
              </button>
            </div>
          </div>
        </div>
      </section>

    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Recognized By </h2>

        <div className="clients-slider">
        <div className="clients-track">

        {[
          { img: "/images/clients/vit.png", name: "Vishwakarma Institute of Technology", bg: "from-blue-100 to-blue-200" },
          { img: "/images/clients/mit.png", name: "MIT Arts Commerce & Science College", bg: "from-red-100 to-red-200" },
          { img: "/images/clients/nmit.png", name: "NMIET", bg: "from-purple-100 to-purple-200" },
          { img: "/images/clients/symbiosis.png", name: "Symbiosis", bg: "from-orange-100 to-orange-200" },
          { img: "/images/clients/glanzon.png", name: "Glanzon skin care", bg: "from-cyan-100 to-cyan-200" },

          // ⭐ Your newly added clients
          { img: "/images/clients/dpiit.png", name: "DPIIT", bg: "from-yellow-100 to-yellow-200" },
          { img: "/images/clients/jyskai.png", name: "JYSKAI Federation", bg: "from-green-100 to-green-200" },
          { img: "/images/clients/kam.png", name: "Karate Association of Maharashtra", bg: "from-indigo-100 to-indigo-200" },
          { img: "/images/clients/kio.png", name: "Karate India Organisation", bg: "from-red-100 to-red-200" },
          { img: "/images/clients/msme.png", name: "MSME Govt. of India", bg: "from-blue-100 to-blue-200" },
          { img: "/images/clients/os.png", name: "OS Solution", bg: "from-pink-100 to-pink-200" },

        ].map((client, i) => (
          <div key={i} className="client-logo">
            <div className={`w-24 h-24 mb-3 bg-gradient-to-br ${client.bg} rounded-lg flex items-center justify-center shadow-md`}>
              <img
                src={client.img}
                alt={client.name}
                className="w-20 h-20 object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-20 h-20 hidden items-center justify-center">
                <span className="text-xl font-bold">{client.name.slice(0, 4)}</span>
              </div>
            </div>
            <span className="text-sm font-semibold text-gray-700 text-center">{client.name}</span>
          </div>
        ))}

        {/* Duplicate for infinite loop */}
        {[
          { img: "/images/clients/vit.png", name: "Vishwakarma Institute of Technology", bg: "from-blue-100 to-blue-200" },
          { img: "/images/clients/mit.png", name: "MIT Arts Commerce & Science College", bg: "from-red-100 to-red-200" },
          { img: "/images/clients/nmit.png", name: "NMIET", bg: "from-purple-100 to-purple-200" },
          { img: "/images/clients/symbiosis.png", name: "Symbiosis", bg: "from-orange-100 to-orange-200" },
          { img: "/images/clients/glanzon.png", name: "Glanzon skin care", bg: "from-cyan-100 to-cyan-200" },

          // Duplicate of your new clients
          { img: "/images/clients/dpiit.png", name: "DPIIT", bg: "from-yellow-100 to-yellow-200" },
          { img: "/images/clients/jyskai.png", name: "JYSKAI Federation", bg: "from-green-100 to-green-200" },
          { img: "/images/clients/kam.png", name: "Karate Association of Maharashtra", bg: "from-indigo-100 to-indigo-200" },
          { img: "/images/clients/kio.png", name: "Karate India Organisation", bg: "from-red-100 to-red-200" },
          { img: "/images/clients/msme.png", name: "MSME Govt. of India", bg: "from-blue-100 to-blue-200" },
          { img: "/images/clients/os.png", name: "OS Solution", bg: "from-pink-100 to-pink-200" },

        ].map((client, i) => (
          <div key={i + 200} className="client-logo">
            <div className={`w-24 h-24 mb-3 bg-gradient-to-br ${client.bg} rounded-lg flex items-center justify-center shadow-md`}>
              <img
                src={client.img}
                alt={client.name}
                className="w-20 h-20 object-contain"
              />
            </div>
            <span className="text-sm font-semibold text-gray-700 text-center">{client.name}</span>
          </div>
        ))}

          </div>
         </div>
        </div>
      </section>


      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Through Integrated Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oppidan India Group is more than an organization—it's a movement. We believe in the power of 
              integrated learning where technology meets athletics, theory meets practice, and ideas become reality.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {[
              {
                title: 'Skill Development',
                description: 'Hands-on training in cutting-edge technologies with real-world project experience.',
                icon: '🎯'
              },
              {
                title: 'Sports Excellence',
                description: 'Professional sports training and competitive platforms for athletic development.',
                icon: '⚡'
              },
              {
                title: 'Startup Ecosystem',
                description: 'End-to-end support for entrepreneurial ventures and innovation projects.',
                icon: '🚀'
              },
              {
                title: 'Community Building',
                description: 'Connecting students, institutes, and industry partners in a collaborative network.',
                icon: '🤝'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ventures Section */}
      <section id="ventures" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Ventures</h2>
            <p className="text-xl text-gray-600">Diverse initiatives serving students, athletes, and innovators</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ventures.map((venture, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-gray-100">
                <div className="flex items-center justify-center mb-6">
                  <div className={`w-24 h-24 rounded-xl bg-gradient-to-br ${venture.color} flex items-center justify-center shadow-lg`}>
                    <img 
                      src={venture.logo} 
                      alt={`${venture.name} logo`} 
                      className="w-20 h-20 object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <span className="text-5xl hidden">{venture.icon}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">{venture.name}</h3>
                <p className="text-blue-600 font-semibold mb-3 text-center">{venture.description}</p>
                <p className="text-gray-600 text-center">{venture.details}</p>
                <button className="mt-6 w-full text-orange-500 font-semibold flex items-center justify-center hover:text-orange-600 bg-orange-50 py-3 rounded-lg hover:bg-orange-100 transition-colors">
                  Learn More <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Programs & Opportunities</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for students, institutes, and industry</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                  <Icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600">{program.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sports Academy Section */}
      <section id="sports" className="py-16 bg-gradient-to-br from-orange-500 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Oppidan Golden Dragon Sports Academy</h2>
            <p className="text-xl opacity-90">World-class multi-sport training and national competitions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">🏅 Multi-Sport Training</h3>
              <p className="mb-6">Premier sports academy offering professional coaching in multiple disciplines with world-class facilities.</p>
              <div className="grid grid-cols-2 gap-3">
                {sportsOffered.map((sport, index) => (
                  <div key={index} className="bg-white bg-opacity-20 px-4 py-2 rounded-lg text-center font-semibold">
                    {sport}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">🏆 National Competitions</h3>
              <p className="mb-6">Host and participate in prestigious tournaments including the Indian Karate League and League of Unity.</p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Star className="mr-3" size={20} />
                  Certified officials and judges
                </li>
                <li className="flex items-center">
                  <Star className="mr-3" size={20} />
                  Professional tournament organization
                </li>
                <li className="flex items-center">
                  <Star className="mr-3" size={20} />
                  Athlete development programs
                </li>
                <li className="flex items-center">
                  <Star className="mr-3" size={20} />
                  Inter-school and inter-club leagues
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Join Sports Academy
            </button>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Transforming lives through integrated excellence</p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-12 rounded-xl text-center">
            <p className="text-2xl text-gray-700 mb-6">
              "Our impact and achievements recognized by leading media outlets and industry publications."
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Want to be featured in our next success story?
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Your Journey Today
            </button>
          </div>
        </div>
      </section>

      {/* Event Gallery */}
      <section id="gallery" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <ImageIcon className="w-16 h-16 mx-auto mb-4 text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Event Gallery</h2>
            <p className="text-xl text-gray-600">Moments from our workshops, competitions, and collaborations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventPhotos.map((photo, index) => (
              <div key={index} className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="aspect-w-16 aspect-h-12 relative overflow-hidden h-64">
                  <img 
                    src={photo.image} 
                    alt={photo.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-orange-100 hidden items-center justify-center">
                    <div className="text-center p-6">
                      <ImageIcon className="w-16 h-16 mx-auto mb-3 text-blue-600 opacity-50" />
                      <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                        {photo.category}
                      </span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4 group-hover:bg-blue-50 transition-colors">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{photo.title}</h3>
                  <p className="text-sm text-gray-600">{photo.description}</p>
                  <div className="mt-3">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-semibold">
                      {photo.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-6">
              These are just a few highlights from our journey. Follow us on social media to see more!
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                View Full Gallery
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Join Our Events
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">Bring Oppidan India to your campus or brand</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">I am a *</label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select your role</option>
                    <option value="student">Student</option>
                    <option value="educator">Educator</option>
                    <option value="institution">Institution Representative</option>
                    <option value="corporate">Corporate Partner</option>
                    <option value="parent">Parent</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">I'm interested in *</label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select your interest</option>
                  <option value="internship">Internship Programs</option>
                  <option value="sports">Sports Training</option>
                  <option value="institution">Institution Partnership</option>
                  <option value="corporate">Corporate Training</option>
                  <option value="franchise">Franchise Opportunities</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us more about your requirements..."
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-orange-500 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-orange-600 transition-all transform hover:scale-105 flex items-center justify-center disabled:opacity-50"
              >
                <Send className="mr-2" size={20} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitMessage && (
                <div className={`mt-4 p-4 rounded-lg ${
                  submitMessage.includes('Thank you') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {submitMessage}
                </div>
              )}
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Mail className="w-8 h-8 mx-auto mb-3 text-blue-600" />
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">oppidanindia@gmail.com</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Phone className="w-8 h-8 mx-auto mb-3 text-blue-600" />
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">8830450210</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <MapPin className="w-8 h-8 mx-auto mb-3 text-blue-600" />
              <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">office no g2 Swami plaza shahunagar chinchwad pune</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Oppidan India Group</h3>
              <p className="text-gray-400">Empowering India's youth through integrated excellence in education and sports.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white">About</button></li>
                <li><button onClick={() => scrollToSection('ventures')} className="hover:text-white">Ventures</button></li>
                <li><button onClick={() => scrollToSection('programs')} className="hover:text-white">Programs</button></li>
                <li><button onClick={() => scrollToSection('sports')} className="hover:text-white">Sports Academy</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Our Ventures</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Oppidan India</li>
                <li>Oppidan Golden Dragon Sports Academy</li>
                <li>Indian Karate League</li>
                <li>Oppidan Sportix</li>
                <li>Oppidan Innovators Club</li>
                <li>League Of Unity</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>oppidanindia@gmail.com</li>
                <li>Pimpri, Maharashtra</li>
                <li>Available 6pm</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Oppidan India Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OpidanWebsite;