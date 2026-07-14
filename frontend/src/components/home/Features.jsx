import { motion } from "framer-motion";
import {
  FaBrain,
  FaChartLine,
  FaLightbulb,
  FaUserShield,
} from "react-icons/fa";

const features = [
  {
    icon: <FaBrain size={40} className="text-blue-600" />,
    title: "AI Behaviour Analysis",
    description:
      "Analyze your social media usage patterns using intelligent AI-powered insights.",
  },
  {
    icon: <FaChartLine size={40} className="text-cyan-500" />,
    title: "Digital Habit Tracking",
    description:
      "Monitor screen time, usage frequency, and digital wellbeing over time.",
  },
  {
    icon: <FaLightbulb size={40} className="text-purple-500" />,
    title: "Personalized Recommendations",
    description:
      "Receive tailored suggestions to improve your digital habits and maintain balance.",
  },
  {
    icon: <FaUserShield size={40} className="text-green-500" />,
    title: "Privacy First",
    description:
      "Your personal information remains secure while AI generates meaningful insights.",
  },
];

function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-slate-900">
            Powerful Features
          </h2>

          <p className="mt-5 text-xl text-gray-600 max-w-3xl mx-auto">
            Charcha combines AI, analytics, and personalized guidance to help
            students build healthier digital lifestyles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all"
            >
              <div className="mb-6">{feature.icon}</div>

              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>

              <p className="text-gray-600 leading-7">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
