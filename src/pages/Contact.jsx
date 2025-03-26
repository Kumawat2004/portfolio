import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4sgudih", // Replace with your actual Service ID
        "template_eiivlcr", // Replace with your actual Template ID
        form.current,
        "GIpK3C2N882_gEp5D" // Replace with your actual Public Key
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          setIsSent(true);
          setMessage("Message sent successfully!");
          form.current.reset(); // Form reset after successful submission
        },
        (error) => {
          console.log("Error sending email:", error.text);
          setIsSent(false);
          setMessage("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Title Animation */}
      <motion.div 
        className="mb-10 "
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact</h2>
        <div className="w-16 h-1 bg-blue-500 mb-6"></div>
        <p className="text-gray-600 mt-4">
          Feel free to reach out for any inquiries or collaborations!
        </p>
      </motion.div>

      {/* Contact Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Left Side - Contact Info */}
        <motion.div 
          className="bg-white shadow-md rounded-lg p-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Address */}
          <div className="flex items-start space-x-4 mb-6">
            <motion.div 
              className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-500 rounded-full"
              whileHover={{ scale: 1.1 }}
            >
              <FiMapPin size={24} />
            </motion.div>
            <div>
              <h3 className="font-semibold text-gray-900">Address</h3>
              <p className="text-gray-600">Shyam Colony, Chomu, Jaipur-303702</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start space-x-4 mb-6">
            <motion.div 
              className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-500 rounded-full"
              whileHover={{ scale: 1.1 }}
            >
              <FiPhone size={24} />
            </motion.div>
            <div>
              <h3 className="font-semibold text-gray-900">Call Us</h3>
              <p className="text-gray-600">+91 9166577321</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start space-x-4">
            <motion.div 
              className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-500 rounded-full"
              whileHover={{ scale: 1.1 }}
            >
              <FiMail size={24} />
            </motion.div>
            <div>
              <h3 className="font-semibold text-gray-900">Email Us</h3>
              <p className="text-gray-600">prakashkmwt04@gmail.com</p>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-6">
            <iframe
              className="w-full h-52 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28399.700324201443!2d75.70897955!3d27.1574688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1742996349969!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div 
          className="bg-white shadow-md rounded-lg p-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <form ref={form} onSubmit={sendEmail}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">Your Name</label>
                <input
                  type="text"
                  name="from_name"
                  className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Your Email</label>
                <input
                  type="email"
                  name="from_email"
                  className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400"
                  placeholder="example@email.com"
                  required
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Subject</label>
              <input
                type="text"
                name="subject"
                className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400"
                placeholder="Enter Subject"
                required
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                name="message"
                className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400"
                rows="5"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            <div className="mt-6 text-center flex flex-col items-center space-y-3">
  <motion.button 
    type="submit"
    className="bg-blue-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 ease-in-out"
    whileHover={{ scale: 1.1 }}
  >
    {isSent ? " Message Sent!" : " Send Message"}
  </motion.button>
  {message && <p className={`mt-2 text-sm font-semibold ${isSent ? 'text-green-600' : 'text-red-500'}`}>{message}</p>}
</div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;