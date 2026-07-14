import { motion } from "framer-motion";
import {
  FaUserPlus,
  FaClipboardList,
  FaRobot,
  FaChartLine,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaUserPlus size={35} className="text-blue-600" />,
    title: "Create Your Account",
    description:
      "Sign up securely and create your personal Charcha profile in just a few clicks.",
  },
  {
    icon: <FaClipboardList size={35} className="text-cyan-500" />,
    title: "Complete Assessment",
    description:
      "Answer a short questionnaire about your digital habits and social media usage.",
  },
  {
    icon: <FaRobot size={35} className="text-purple-500" />,
    title: "AI Analysis",
    description:
      "Our AI analyzes your responses to identify patterns and generate personalized insights.",
  },
  {
    icon: <FaChartLine size={35} className="text-green-500" />,
    title: "Track Your Progress",
    description:
      "Monitor your wellbeing, view trends, and receive recommendations to build healthier habits.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50">
      {" "}
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-slate-900">
            How Charcha Works
          </h2>

          <p className="mt-5 text-xl text-gray-600 max-w-3xl mx-auto">
            A simple four-step journey to understand your digital wellbeing
            through AI-powered insights.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
              }}
              className="relative bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all"
            >
              {/* Step Number */}

              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shadow-lg">
                {index + 1}
              </div>

              {/* Icon */}

              <div className="flex justify-center mt-4 mb-6">{step.icon}</div>

              {/* Title */}

              <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>

              {/* Description */}

              <p className="text-gray-600 leading-7">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
