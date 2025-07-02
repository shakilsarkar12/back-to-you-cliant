import { ShieldCheck, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};


const WhyChooseUs = () => {
  return (
    <div className="max-w-7xl mx-auto my-10 md:my-20 px-4 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-xl md:text-2xl lg:text-4xl font-medium mb-8 text-center text-primary"
      >
        Why Choose Us?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-neutral mb-12 max-w-2xl mx-auto leading-relaxed"
      >
        Trusted by thousands to reconnect people with their lost belongings.
        Discover what makes us different!
      </motion.p>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 md:gap-4 gap-6"
      >
        {/* Card 1 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0 * 0.1, duration: 0.5 }}
          className="bg-gray-50 dark:bg-accent p-8 rounded-2xl transition-all"
        >
          <ShieldCheck className="text-blue-600 w-14 h-14 mx-auto mb-5" />
          <h3 className="text-2xl font-semibold mb-3">Safe & Verified</h3>
          <p className="text-gray-700 dark:text-neutral">
            Every recovery is securely verified to ensure your belongings are
            returned to the rightful owner.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 1 * 0.1, duration: 0.5 }}
          className="bg-gray-50 dark:bg-accent p-8 rounded-2xl transition-all"
        >
          <Clock className="text-green-600 w-14 h-14 mx-auto mb-5" />
          <h3 className="text-2xl font-semibold mb-3">Fast Response</h3>
          <p className="text-gray-700 dark:text-neutral">
            Immediate notifications and quick communication help recover items
            faster than ever.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 2 * 0.1, duration: 0.5 }}
          className="bg-gray-50 dark:bg-accent p-8 rounded-2xl transition-all"
        >
          <Users className="text-purple-600 w-14 h-14 mx-auto mb-5" />
          <h3 className="text-2xl font-semibold mb-3">Trusted Community</h3>
          <p className="text-gray-700 dark:text-neutral">
            Built on trust, honesty, and community-driven action to reunite lost
            items with their owners.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhyChooseUs;
