import React, { useState } from "react";
import SiteStatistics from "../../Components/SiteStatistics/SiteStatistics";
import { Link } from "react-router";
import { motion } from "framer-motion";
import Spinner from "../../Components/Spinner/Spinner";
import FAQSection from "../../Components/FAQSection/FAQSection";

const About = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 400);
  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="max-w-7xl mx-auto py-10">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-50 dark:bg-accent py-10 text-center rounded-xl mb-10"
      >
        <h1 className="text-xl md:text-2xl lg:text-4xl font-medium mb-8 text-center text-primary">
          Lost Something? Found Something?
        </h1>
        <p className="mt-4 text-lg text-neutral">
          We help connect people with their lost belongings.
        </p>
      </motion.section>

      {/* Overview */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-lg text-neutral leading-relaxed mb-8 text-center"
      >
        Welcome to <span className="font-semibold">Lost & Found</span> — a
        simple and reliable platform where people can report lost or found items
        and help others recover their valuable belongings.
      </motion.p>

      {/* Mission, Vision, Goal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-3 gap-6 mb-10"
      >
        {/* Three Cards */}
        {["🎯 Mission", "🌟 Vision", "🚀 Goal"].map((title, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="p-5 bg-gray-50 dark:bg-accent rounded-lg"
          >
            <h2 className="text-2xl font-semibold text-primary mb-3">
              {title}
            </h2>
            <p className="text-neutral">
              {title === "🎯 Mission" &&
                "Connecting people and their belongings through a secure and easy-to-use platform."}
              {title === "🌟 Vision" &&
                "Become the go-to platform for Lost & Found management in the country."}
              {title === "🚀 Goal" &&
                "Help people recover their lost valuable items faster and safer."}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* 📊 Statistics Section */}
      <SiteStatistics />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mt-16"
      >
        <Link
          to="/lost&found"
          className="w-full bg-primary text-white py-2 rounded-lg font-medium hover:bg-secondary hover:text-accent transition duration-300 px-4"
        >
          Browse Lost & Found Items
        </Link>
      </motion.div>
    </div>
  );
};

export default About;
