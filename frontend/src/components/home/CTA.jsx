import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

function CTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center px-6"
      >
        <h2 className="text-5xl font-bold">
          Ready to Improve Your Digital Wellbeing?
        </h2>

        <p className="mt-6 text-xl text-blue-100">
          Join Charcha today and receive AI-powered insights that help you build
          healthier digital habits.
        </p>

        <button className="mt-10 inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow-xl hover:scale-105 transition">
          Start Your Journey
          <FaArrowRight />
        </button>
      </motion.div>
    </section>
  );
}

export default CTA;
