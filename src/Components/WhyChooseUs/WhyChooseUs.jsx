import { ShieldCheck, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const WhyChooseUs = () => {
  return (
    <div className="max-w-7xl mx-auto my-24 px-4 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-5 text-primary"
      >
        Why Choose Us?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed"
      >
        Trusted by thousands to reconnect people with their lost belongings.
        Discover what makes us different!
      </motion.p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-6 xl:gap-10"
      >
        {/* Card 1 */}
        <motion.div
          variants={cardVariants}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-white p-8 border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all"
        >
          <ShieldCheck className="text-blue-600 w-14 h-14 mx-auto mb-5" />
          <h3 className="text-2xl font-semibold mb-3">Safe & Verified</h3>
          <p className="text-gray-600">
            Every recovery is securely verified to ensure your belongings are
            returned to the rightful owner.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={cardVariants}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-white p-8 border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all"
        >
          <Clock className="text-green-600 w-14 h-14 mx-auto mb-5" />
          <h3 className="text-2xl font-semibold mb-3">Fast Response</h3>
          <p className="text-gray-600">
            Immediate notifications and quick communication help recover items
            faster than ever.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={cardVariants}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-white p-8 border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all"
        >
          <Users className="text-purple-600 w-14 h-14 mx-auto mb-5" />
          <h3 className="text-2xl font-semibold mb-3">Trusted Community</h3>
          <p className="text-gray-600">
            Built on trust, honesty, and community-driven action to reunite lost
            items with their owners.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhyChooseUs;
