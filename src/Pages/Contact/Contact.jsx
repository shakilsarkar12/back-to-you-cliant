import { useState } from "react";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://back-to-you-server.vercel.app/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        } else {
          toast.error("Failed to send message");
        }
      })
      .catch(() => toast.error("Something went wrong"));
  };

  return (
    <div className="min-h-screen flex justify-center mt-20">
      <div className="max-w-5xl mx-auto py-12 px-4">
        <motion.h2
          className="text-xl md:text-2xl lg:text-4xl font-medium mb-8 text-center text-primary"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch With Us
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FiMail className="text-2xl text-primary" />
              <p className="text-lg">support@backtoyou.com</p>
            </div>
            <div className="flex items-center gap-4">
              <FiPhone className="text-2xl text-primary" />
              <p className="text-lg">+880 123 456 789</p>
            </div>
            <div className="flex items-center gap-4">
              <FiMapPin className="text-2xl text-primary" />
              <p className="text-lg">Dhaka, Bangladesh</p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="input input-bordered w-full"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="input input-bordered w-full"
              required
            />
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="textarea textarea-bordered w-full"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary w-full">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
