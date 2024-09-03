"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  IconClipboard,
  IconMail,
  IconPhone,
  IconWorld,
  IconArrowRight,
} from "@tabler/icons-react";

const ZoopAnalysisHomepage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-yellow-400 py-4 sticky top-0 z-50">
        <nav className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Zoop Analysis Solutions
          </h1>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#services"
                className="hover:text-gray-600 transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-gray-600 transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-gray-600 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="bg-yellow-50 py-20 text-center">
          <div className="container mx-auto px-4">
            <TypewriterEffectSmooth
              words={[
                { text: "Elevate" },
                { text: "Your" },
                { text: "Research" },
                { text: "with" },
                { text: "Zoop" },
                { text: "Analysis" },
                { text: "Solutions" },
              ]}
              className="text-5xl font-bold mb-6 text-yellow-600"
            />
            <TextGenerateEffect
              words="Your trusted partner in research data analysis and publication for medical, dental, and nursing scholars."
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-gray-800 font-bold py-3 px-6 rounded-full text-lg">
                Get Started Now
                <IconArrowRight className="ml-2" />
              </Button>
            </motion.div>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-yellow-600">
              Our Comprehensive Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                {
                  title: "Expert Consultation",
                  description:
                    "Personalized consultations tailored to your specific field and research objectives.",
                },
                {
                  title: "Statistical Mastery",
                  description:
                    "Advanced statistical techniques to derive meaningful insights from your data.",
                },
                {
                  title: "Publication Support",
                  description:
                    "Guidance through the publication process in reputable indexed journals.",
                },
                {
                  title: "Data Analysis",
                  description:
                    "Comprehensive data analysis using cutting-edge methodologies and tools.",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <IconClipboard className="h-12 w-12 text-yellow-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-yellow-600">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-yellow-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-yellow-600">
              Why Choose Zoop Analysis Solutions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                {
                  title: "Expert Team",
                  description:
                    "Our seasoned data analysts and statisticians specialize in medical, dental, and nursing research, providing unparalleled expertise.",
                },
                {
                  title: "Comprehensive Coverage",
                  description:
                    "We support MBBS, BDS, MD, MS, MDS, DM, MCh, and PhD research and dissertations, covering the full spectrum of medical academia.",
                },
                {
                  title: "Publication Excellence",
                  description:
                    "We facilitate publication in SCOPUS, EMBASE, and PubMed indexed journals, adhering to the latest NMC guidelines.",
                },
                {
                  title: "Global Accessibility",
                  description:
                    "Our virtual consultation services break geographical barriers, making expert support accessible worldwide.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <h3 className="text-xl font-semibold mb-2 text-yellow-600">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-yellow-600">
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
                  className="bg-yellow-50 p-6 rounded-lg shadow text-center"
                >
                  <p className="text-gray-600 italic mb-4">
                    {testimonial.quote}
                  </p>
                  <p className="font-semibold text-yellow-600">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-yellow-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-yellow-600">
              Get in Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-yellow-300 rounded"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-yellow-300 rounded"
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-yellow-300 rounded"
                  rows={4}
                />
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-800 font-bold py-3 px-6 rounded">
                  Send Message
                </Button>
              </motion.form>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-4 text-gray-700">
                  <IconMail className="h-6 w-6 text-yellow-500" />
                  <span>zoopanalysis@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-700">
                  <IconPhone className="h-6 w-6 text-yellow-500" />
                  <span>+91-8778074704</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-700">
                  <IconWorld className="h-6 w-6 text-yellow-500" />
                  <span>www.zoopanalysis.com</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-yellow-400 py-8 text-center text-gray-800">
        <p>&copy; 2024 Zoop Analysis Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ZoopAnalysisHomepage;
