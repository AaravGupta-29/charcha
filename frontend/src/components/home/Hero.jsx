import { motion } from "framer-motion";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import logo from "../../assets/logo.png";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
        {/* ================= LEFT SIDE ================= */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}

          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-medium shadow-sm">
            ✨ AI Powered • Student Focused • Privacy First
          </div>

          {/* Heading */}

          <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-slate-900">
            Your AI Companion for
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Digital Wellbeing
            </span>
          </h1>

          {/* Subtitle */}

          <h2 className="mt-5 text-2xl font-semibold text-blue-600">
            AI-Powered Digital Wellbeing Platform
          </h2>

          {/* Description */}

          <p className="mt-8 text-lg md:text-xl text-gray-600 leading-9 max-w-2xl">
            Track your screen habits, understand your social media behaviour,
            receive personalized AI-powered insights, and build healthier
            digital routines.
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-10">
            <button className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:scale-105 transition-all duration-300">
              Start Assessment
              <FaArrowRight />
            </button>

            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white hover:scale-105 transition-all duration-300">
              Explore Features
            </button>
          </div>

          {/* Highlights */}

          <div className="mt-10 flex flex-wrap gap-6 text-gray-700 font-medium">
            <span className="flex items-center gap-2">
              <FaCheckCircle className="text-cyan-500" />
              Personalized AI Analysis
            </span>

            <span className="flex items-center gap-2">
              <FaCheckCircle className="text-cyan-500" />
              Secure & Private
            </span>

            <span className="flex items-center gap-2">
              <FaCheckCircle className="text-cyan-500" />
              Built for Students
            </span>
          </div>
        </motion.div>

        {/* ================= RIGHT SIDE ================= */}

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 80 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -15, 0],
          }}
          transition={{
            opacity: { duration: 1 },
            x: { duration: 1 },
            y: {
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            },
          }}
        >
          <img
            src={logo}
            alt="Charcha Logo"
            className="w-72 md:w-80 lg:w-[460px] drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
