import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
  {
    question: "How can I report a lost item?",
    answer:
      "You can go to the 'Add Lost & Found Item' page and fill out the form with the necessary details.",
  },
  {
    question: "How do I claim a found item?",
    answer:
      "Click the 'This is Mine!' button on the item's detail page and submit your recovery information.",
  },
  {
    question: "Is there any charge for posting lost items?",
    answer: "No — our service is completely free for everyone.",
  },
  {
    question: "Can I edit or delete my posted items?",
    answer:
      "Yes. You can manage your posts from the 'Manage My Items' page after logging in.",
  },
];

const FAQSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div className="my-16 space-y-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-xl md:text-2xl lg:text-4xl font-medium mb-4 md:mb-10 text-center text-primary"
      >
        Frequently Asked Questions
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-neutral mb-12 max-w-2xl mx-auto leading-relaxed text-center"
      >
        Got a question? See what others frequently ask and get your answers
        fast!
      </motion.p>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="collapse bg-base-100 border border-base-300 rounded-xl"
        >
          <input type="checkbox" onChange={handleToggle} className="" />
          <div className="collapse-title md:font-medium flex justify-between items-center text-lg">
            <span>{faq.question}</span>
            <FiChevronDown
              size={20}
              className={`text-primary transition-transform duration-300 -mr-6  ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>
          <div className="collapse-content text-gray-600 text-sm leading-relaxed">
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
