"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiBarChart2, FiFileText, FiAward, FiGlobe } from "react-icons/fi";

const ZoopAnalysisHomepage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white py-4 shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 flex justify-between items-center">
          <img
            src="/logo-placeholder.png"
            alt="Zoop Analysis Solutions"
            className="h-10"
          />
          <ul className="flex space-x-6">
            <li>
              <a
                href="#services"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="bg-blue-50 py-20">
          <div className="container mx-auto px-4 flex items-center">
            <div className="w-1/2 pr-12">
              <h1 className="text-5xl font-bold text-gray-800 mb-6">
                Elevate Your Research with Expert Analysis
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Zoop Analysis Solutions: Your trusted partner in research data
                analysis and publication for medical, dental, and nursing
                scholars.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
            <div className="w-1/2">
              <img
                src="/hero-image-placeholder.png"
                alt="Research Analysis"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Our Comprehensive Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <FiBarChart2 className="h-8 w-8" />,
                  title: "Statistical Analysis",
                  description:
                    "Advanced statistical techniques to derive meaningful insights from your data.",
                },
                {
                  icon: <FiFileText className="h-8 w-8" />,
                  title: "Manuscript Preparation",
                  description:
                    "Expert assistance in preparing high-quality manuscripts for publication.",
                },
                {
                  icon: <FiAward className="h-8 w-8" />,
                  title: "Publication Support",
                  description:
                    "Guidance through the publication process in reputable indexed journals.",
                },
                {
                  icon: <FiGlobe className="h-8 w-8" />,
                  title: "Global Consultation",
                  description:
                    "Virtual consultations breaking geographical barriers for worldwide support.",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-blue-600 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Why Choose Zoop Analysis Solutions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <FiAward className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                    <p className="text-gray-600">
                      Our seasoned data analysts and statisticians specialize in
                      medical, dental, and nursing research, providing
                      unparalleled expertise.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <FiGlobe className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Comprehensive Coverage
                    </h3>
                    <p className="text-gray-600">
                      We support MBBS, BDS, MD, MS, MDS, DM, MCh, and PhD
                      research, covering the full spectrum of medical academia.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <FiFileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Publication Excellence
                    </h3>
                    <p className="text-gray-600">
                      We facilitate publication in SCOPUS, EMBASE, and PubMed
                      indexed journals, adhering to the latest NMC guidelines.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <FiBarChart2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Cutting-edge Analysis
                    </h3>
                    <p className="text-gray-600">
                      Utilize advanced statistical methods and data
                      visualization techniques to enhance your research impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20">
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
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg text-center"
                >
                  <p className="text-gray-600 italic mb-4">
                    "{testimonial.quote}"
                  </p>
                  <p className="font-semibold text-gray-800">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-blue-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Get in Touch
            </h2>
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-300 rounded"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 border border-gray-300 rounded"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 border border-gray-300 rounded"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded"
                ></textarea>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-400">
                Zoop Analysis Solutions provides expert research data analysis
                and publication support for medical, dental, and nursing
                scholars worldwide.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-400">Email: zoopanalysis@gmail.com</p>
              <p className="text-gray-400">Phone: +91-8778074704</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400">
              &copy; 2024 Zoop Analysis Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ZoopAnalysisHomepage;
