import { motion } from "framer-motion";
import { FaArrowRight, FaBrain, FaChartLine } from "react-icons/fa";

function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
    >
      {/* Decorative Background */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
      >
        {/* Badge */}

        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold mb-8">
          🚀 Join the Future of Student Wellbeing
        </div>

        {/* Heading */}

        <h2 className="text-5xl lg:text-6xl font-extrabold leading-tight">
          Ready to Transform
          <br />
          Your Digital Life?
        </h2>

        {/* Description */}

        <p className="mt-8 max-w-3xl mx-auto text-xl text-blue-100 leading-9">
          Charcha leverages Artificial Intelligence to understand your digital
          habits, deliver personalized insights, and help you develop healthier
          technology usage—one step at a time.
        </p>

        {/* Highlights */}

        <div className="flex flex-wrap justify-center gap-8 mt-12 text-lg font-medium">
          <div className="flex items-center gap-3">
            <FaBrain className="text-2xl text-cyan-200" />
            AI-Powered Insights
          </div>

          <div className="flex items-center gap-3">
            <FaChartLine className="text-2xl text-cyan-200" />
            Progress Tracking
          </div>

          <div className="flex items-center gap-3">🔒 Privacy First</div>
        </div>

        {/* Buttons */}

        <div className="mt-14 flex flex-wrap justify-center gap-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-white text-blue-700 px-9 py-4 rounded-xl font-bold shadow-2xl"
          >
            Start Free Assessment
            <FaArrowRight />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="border-2 border-white px-9 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300"
          >
            Learn More
          </motion.button>
        </div>

        {/* Bottom Text */}

        <p className="mt-12 text-blue-100 text-sm">
          Built for students • Privacy-first • AI-powered insights
        </p>
      </motion.div>
    </section>
  );
}

export default CTA;
