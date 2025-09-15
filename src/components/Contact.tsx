"use client";

import React, { FormEvent, useState } from "react";
import { motion } from "framer-motion"


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      staggerChildren: 0.5,
      delayChildren: 0.2,
      ease: "easeIn"
    },
  },
};

// Variants for animating each input field and button
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

async function sendFeedback(data: { name: string, email: string, message: string }) {
  await fetch("http://localhost:3000/api/sendMail", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here,
    // for example, by sending the data to an API endpoint.

    sendFeedback(formData)
    setIsSubmitted(true)
  };

  return (
    <section className=" min-h-screen overflow-hidden relative z-10 space-y-6 py-24 px-4" id="contact">
      <motion.h1
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: .5 }}
        className="heading">Contact Me</motion.h1>
      <motion.div
        className=" max-w-xl mx-auto  py-8 px-6 bg-gray-800 rounded-2xl shadow-2xl space-y-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        <motion.h1
          className="text-3xl sm:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500"
          variants={itemVariants}
        >
          Let&apos;s Connect
        </motion.h1>

        {isSubmitted ? (
          <motion.div
            className="text-center p-8 bg-gray-700 rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-white">Thank you</h2>
            <p className="mt-2 text-lg text-gray-400">Your message has been sent. I will get back to you shortly.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div variants={itemVariants} >
              <label htmlFor="name" className="block text-sm font-medium text-gray-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}  >
              <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}

                className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full px-6 py-3 font-poppin bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-teal-500"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </form>
        )}
      </motion.div>



    </section >
  );
};

export default Contact;
