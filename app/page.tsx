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
  FiLinkedin,
  FiTwitter,
  FiFacebook,
  FiInstagram,
} from "react-icons/fi";
import { WobbleCard } from "@/components/ui/wobble-card";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const menuItems = ["Services", "About Us", "Testimonials", "Contact"];

  const scrollToSection = (sectionId: string) => {
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
          <img src="/logo.png" alt="Zoop Analysis Solutions" className="h-12" />
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

const ColorChangeCard = ({
  title,
  description,
  image,
  index,
}: {
  title: string;
  description: string;
  image: string;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`relative overflow-hidden aspect-square ${
        isEven ? "bg-blue-50" : "bg-white"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          src={image}
          alt={title}
          className="object-cover w-full h-full"
          initial={{ scale: 1.2 }}
          animate={{ scale: isHovered ? 1 : 1.2 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </motion.div>
      <div className="relative z-10 p-6 h-full flex flex-col justify-center">
        <motion.div
          className="w-12 h-1 mb-4"
          animate={{
            backgroundColor: isHovered ? "#93C5FD" : "#3B82F6",
          }}
          transition={{ duration: 0.3 }}
        ></motion.div>
        <h3
          className={`text-xl font-semibold mb-2 ${
            isHovered ? "text-white" : "text-gray-800"
          }`}
        >
          {title}
        </h3>
        <p className={`${isHovered ? "text-gray-200" : "text-gray-600"}`}>
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const ZoopAnalysisHomepage = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section ref={heroRef} className="py-40 relative">
          <img
            src="/hero.jpg"
            alt="Medical Research"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="container mx-auto px-4 flex items-center relative z-10">
            <div className="w-full md:w-2/3 lg:w-1/2 pr-12">
              <RoughNotationGroup show={isHeroInView}>
                <motion.h1
                  className="text-5xl font-bold text-white mb-6"
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
                  className="text-xl text-gray-200 mb-8"
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
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
              Our Comprehensive Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
              {[
                {
                  title: "Statistical Analysis",
                  description:
                    "Advanced statistical techniques to derive meaningful insights from your data.",
                  image: "/cards/1.jpg",
                },
                {
                  title: "Manuscript Preparation",
                  description:
                    "Expert assistance in preparing high-quality manuscripts for publication.",
                  image: "/cards/2.jpg",
                },
                {
                  title: "Publication Support",
                  description:
                    "Guidance through the publication process in reputable indexed journals.",
                  image: "/cards/3.jpg",
                },
                {
                  title: "Global Consultation",
                  description:
                    "Virtual consultations breaking geographical barriers for worldwide support.",
                  image: "/cards/4.jpg",
                },
              ].map((service, index) => (
                <ColorChangeCard key={index} {...service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="about-us" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-4xl font-bold mb-12 text-center text-gray-800"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Why Choose Zoop Analysis Solutions?
            </motion.h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto w-full">
              {[
                {
                  icon: FiCheckCircle,
                  title: "Expert Team",
                  description:
                    "Our seasoned data analysts and statisticians specialize in medical, dental, and nursing research, providing unparalleled expertise.",
                },
                {
                  icon: FiGlobe,
                  title: "Comprehensive Coverage",
                  description:
                    "We support MBBS, BDS, MD, MS, MDS, DM, MCh, and PhD research, covering the full spectrum of medical academia.",
                },
                {
                  icon: FiAward,
                  title: "Publication Excellence",
                  description:
                    "We facilitate publication in SCOPUS, EMBASE, and PubMed indexed journals, adhering to the latest NMC guidelines.",
                },
                {
                  icon: FiBarChart2,
                  title: "Cutting-edge Analysis",
                  description:
                    "Utilize advanced statistical methods and data visualization techniques to enhance your research impact.",
                },
              ].map((feature, index) => (
                <WobbleCard
                  key={index}
                  containerClassName="col-span-1 min-h-[300px]"
                  className="flex items-start justify-center p-8 bg-white shadow-lg"
                >
                  <div className="flex flex-col items-start text-left w-full">
                    <feature.icon className="text-4xl text-blue-600 mb-4" />
                    <motion.h3
                      className="text-2xl font-bold mb-4 text-gray-800"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {feature.title}
                    </motion.h3>
                    <motion.p
                      className="text-lg text-gray-600 leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {feature.description}
                    </motion.p>
                  </div>
                </WobbleCard>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="bg-gradient-to-r from-blue-100 to-indigo-100 py-20"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
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
                  className="bg-white p-6 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <p className="text-gray-600 italic mb-4">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="mt-4">
                    <h4 className="font-bold text-lg text-gray-800">
                      {testimonial.name}
                    </h4>
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
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
              Get In Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                  Contact Information
                </h3>
                <p className="mb-4 flex items-center text-gray-600">
                  <FiMail className="text-blue-600 mr-2" />{" "}
                  info@zoopanalysis.com
                </p>
                <p className="mb-4 flex items-center text-gray-600">
                  <FiPhone className="text-blue-600 mr-2" /> +1 (555) 123-4567
                </p>
                <p className="mb-4 flex items-center text-gray-600">
                  <FiMapPin className="text-blue-600 mr-2" /> 123 Main Street,
                  Suite 101, New York, NY 10001
                </p>
                <p className="mb-4 flex items-center text-gray-600">
                  <FiClock className="text-blue-600 mr-2" /> Mon-Fri: 9am - 6pm
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                  Send Us a Message
                </h3>
                <form>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 px-4 py-2"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full border border-gray-300 px-4 py-2"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Message</label>
                    <textarea
                      className="w-full border border-gray-300 px-4 py-2"
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
      <footer className="bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                About Us
              </h3>
              <p className="text-gray-400">
                Zoop Analysis Solutions provides expert research data analysis
                and publication support for medical, dental, and nursing
                scholars.
              </p>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                Quick Links
              </h3>
              <ul className="text-gray-400">
                <li className="mb-2">
                  <a
                    href="#services"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#about-us"
                    className="hover:text-blue-400 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#testimonials"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Testimonials
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#contact"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                Contact Us
              </h3>
              <p className="text-gray-400 mb-2">
                <FiMail className="inline mr-2" /> info@zoopanalysis.com
              </p>
              <p className="text-gray-400 mb-2">
                <FiPhone className="inline mr-2" /> +1 (555) 123-4567
              </p>
              <p className="text-gray-400">
                <FiMapPin className="inline mr-2" /> 123 Main Street, Suite 101,
                New York, NY 10001
              </p>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <FiLinkedin size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <FiTwitter size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <FiFacebook size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <FiInstagram size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            &copy; {new Date().getFullYear()} Zoop Analysis Solutions. All
            Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ZoopAnalysisHomepage;
