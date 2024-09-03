"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import {
  FiBarChart2,
  FiFileText,
  FiAward,
  FiGlobe,
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiCheckCircle,
  FiMenu,
  FiX,
} from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const menuItems = ["Services", "About Us", "Testimonials", "Contact"];

  const scrollToSection = (sectionId: any) => {
    const section = document.getElementById(sectionId);
    const navbar = document.querySelector("header");
    const navbarHeight = navbar!.offsetHeight;

    if (section) {
      const sectionTop =
        section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }

    if (isOpen) {
      toggleMenu();
    }
  };

  return (
    <header className="bg-white py-4 border-b border-gray-200 sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <img src="/logo.png" alt="Zoop Analysis Solutions" className="h-16" />
          <ul className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() =>
                    scrollToSection(item.toLowerCase().replace(" ", "-"))
                  }
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
          <button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4"
          >
            <ul className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <li key={item}>
                  <button
                    onClick={() =>
                      scrollToSection(item.toLowerCase().replace(" ", "-"))
                    }
                    className="text-gray-600 hover:text-blue-600 transition-colors block py-2 w-full text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

const ColorChangeCard = ({ icon: Icon, title, description, image }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative overflow-hidden border ${
        isHovered ? "border-blue-300" : "border-gray-200"
      } rounded-lg p-6 transition-all duration-300`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img src={image} alt={title} className="object-cover w-full h-full" />
        <div
          className={`absolute inset-0 ${
            isHovered ? "bg-blue-900 opacity-80" : "bg-gray-900 opacity-70"
          }`}
        ></div>
      </div>
      <div className="relative z-10">
        <Icon
          className={`text-4xl mb-4 ${
            isHovered ? "text-blue-300" : "text-blue-100"
          }`}
        />
        <h3
          className={`text-xl font-semibold mb-2 ${
            isHovered ? "text-white" : "text-gray-100"
          }`}
        >
          {title}
        </h3>
        <p className={`${isHovered ? "text-blue-100" : "text-gray-300"}`}>
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const FeatureCard = ({ icon: Icon, title, description }: any) => (
  <motion.div
    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
    whileHover={{ scale: 1.05, rotate: 1 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Icon className="text-blue-600 text-4xl mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </motion.div>
);

const ZoopAnalysisHomepage = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 py-40 relative"
        >
          <img
            src="/hero.jpg"
            alt="Medical Research"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="container mx-auto px-4 flex items-center relative z-10">
            <div className="w-full md:w-2/3 lg:w-1/2 pr-12">
              <RoughNotationGroup show={isHeroInView}>
                <motion.h1
                  className="text-5xl font-bold text-gray-800 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Elevate Your Research with{" "}
                  <RoughNotation
                    type="highlight"
                    animationDuration={1500}
                    color="#3B82F680"
                  >
                    Expert Analysis
                  </RoughNotation>
                </motion.h1>
                <motion.p
                  className="text-xl text-gray-600 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Zoop Analysis Solutions: Your trusted partner in research data
                  analysis and publication for medical, dental, and nursing
                  scholars.
                </motion.p>
                <motion.button
                  className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </RoughNotationGroup>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Our Comprehensive Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: FiBarChart2,
                  title: "Statistical Analysis",
                  description:
                    "Advanced statistical techniques to derive meaningful insights from your data.",
                  image: "/cards/1.jpg",
                },
                {
                  icon: FiFileText,
                  title: "Manuscript Preparation",
                  description:
                    "Expert assistance in preparing high-quality manuscripts for publication.",
                  image: "/cards/2.jpg",
                },
                {
                  icon: FiAward,
                  title: "Publication Support",
                  description:
                    "Guidance through the publication process in reputable indexed journals.",
                  image: "/cards/3.jpg",
                },
                {
                  icon: FiGlobe,
                  title: "Global Consultation",
                  description:
                    "Virtual consultations breaking geographical barriers for worldwide support.",
                  image: "/cards/4.jpg",
                },
              ].map((service, index) => (
                <ColorChangeCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="about-us" className="bg-gray-100 dark:bg-gray-900 py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Why Choose Zoop Analysis Solutions?
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureCard
                icon={FiCheckCircle}
                title="Expert Team"
                description="Our seasoned data analysts and statisticians specialize in medical, dental, and nursing research, providing unparalleled expertise."
              />
              <FeatureCard
                icon={FiGlobe}
                title="Comprehensive Coverage"
                description="We support MBBS, BDS, MD, MS, MDS, DM, MCh, and PhD research, covering the full spectrum of medical academia."
              />
              <FeatureCard
                icon={FiAward}
                title="Publication Excellence"
                description="We facilitate publication in SCOPUS, EMBASE, and PubMed indexed journals, adhering to the latest NMC guidelines."
              />
              <FeatureCard
                icon={FiBarChart2}
                title="Cutting-edge Analysis"
                description="Utilize advanced statistical methods and data visualization techniques to enhance your research impact."
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr. Sarah Johnson",
                  role: "Cardiologist",
                  quote:
                    "Zoop Analysis Solutions transformed my research data into publishable insights. Their expertise is unmatched!",
                },
                {
                  name: "Dr. Michael Chen",
                  role: "Dental Researcher",
                  quote:
                    "The statistical analysis provided by Zoop was crucial for my publication in a top-tier journal. Highly recommended!",
                },
                {
                  name: "Prof. Emily Brown",
                  role: "Nursing Science",
                  quote:
                    "Working with Zoop Analysis Solutions made the daunting task of data analysis a breeze. Their support was invaluable.",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg border border-gray-200 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <p className="text-gray-600 italic mb-4">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="mt-4">
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact" className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Get In Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-6">
                  Contact Information
                </h3>
                <p className="mb-4 flex items-center">
                  <FiMail className="text-blue-600 mr-2" />{" "}
                  info@zoopanalysis.com
                </p>
                <p className="mb-4 flex items-center">
                  <FiPhone className="text-blue-600 mr-2" /> +1 (555) 123-4567
                </p>
                <p className="mb-4 flex items-center">
                  <FiMapPin className="text-blue-600 mr-2" /> 123 Main Street,
                  Suite 101, New York, NY 10001
                </p>
                <p className="mb-4 flex items-center">
                  <FiClock className="text-blue-600 mr-2" /> Mon-Fri: 9am - 6pm
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-6">
                  Send Us a Message
                </h3>
                <form>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 px-4 py-2 rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full border border-gray-300 px-4 py-2 rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Message</label>
                    <textarea
                      className="w-full border border-gray-300 px-4 py-2 rounded-md"
                      rows={4}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto px-4 text-center text-gray-400">
          &copy; {new Date().getFullYear()} Zoop Analysis Solutions. All Rights
          Reserved.
        </div>
      </footer>
    </div>
  );
};

export default ZoopAnalysisHomepage;
