import React, { useState } from "react";
import SiteStatistics from "../../Components/SiteStatistics/SiteStatistics";
import { Link } from "react-router";
import { motion } from "framer-motion";
import Spinner from "../../Components/Spinner/Spinner";

const About = () => {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
      setLoading(false);
    }, 400);
    if (loading) {
      return <Spinner />;
    }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-base-200 py-10 text-center rounded-xl mb-10"
      >
        <h1 className="text-xl md:text-2xl lg:text-4xl font-medium mb-8 text-center text-primary">
          Lost Something? Found Something?
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          We help connect people with their lost belongings.
        </p>
      </motion.section>

      {/* Overview */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-lg text-gray-700 leading-relaxed mb-8 text-center"
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
            className="p-5 bg-base-200 rounded-lg"
          >
            <h2 className="text-2xl font-semibold text-primary mb-3">
              {title}
            </h2>
            <p className="text-gray-600">
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
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-16"
      >
        <h2 className="text-3xl font-semibold text-primary mb-6">
          ❓ Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {/* FAQ Items */}
          {[
            [
              "How do I post a lost or found item?",
              "Go to the 'Add Item' page, fill in the required details and submit.",
            ],
            [
              "How can I claim an item?",
              "Visit the item details page and click 'This is mine' or 'Found This' and follow the instructions.",
            ],
            [
              "What happens if someone falsely claims?",
              "We verify submitted information before confirming the claim to prevent misuse.",
            ],
          ].map(([q, a], i) => (
            <div key={i}>
              <h4 className="font-semibold text-primary">{q}</h4>
              <p className="text-gray-600">{a}</p>
            </div>
          ))}
        </div>
      </motion.div>

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
