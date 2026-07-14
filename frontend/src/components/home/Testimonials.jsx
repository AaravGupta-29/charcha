import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Rohan Mehta",
    role: "Computer Science Student",
    review:
      "Charcha helped me understand my screen habits and reduce unnecessary scrolling. The AI insights were surprisingly accurate.",
  },
  {
    name: "Ananya Kapoor",
    role: "Engineering Student",
    review:
      "The personalized recommendations motivated me to build healthier digital routines. The dashboard makes progress easy to track.",
  },
  {
    name: "Aditya Singh",
    role: "University Student",
    review:
      "Simple, beautiful, and incredibly useful. Charcha feels like a personal digital wellbeing coach.",
  },
];

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-extrabold text-slate-900">
            Loved by Students
          </h2>

          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-8">
            Thousands of students are building healthier digital habits through
            personalized AI insights and meaningful analytics.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-6 shadow-lg">
                <FaQuoteLeft className="text-white text-xl" />
              </div>

              {/* Review */}
              <p className="text-gray-600 leading-8 italic">"{item.review}"</p>

              {/* Rating */}
              <div className="flex gap-1 text-yellow-400 mt-6 mb-6">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* User */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-xl shadow-md">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.name}
                  </h3>

                  <p className="text-blue-600 text-sm">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
