import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Aarav Gupta",
    role: "Computer Science Student",
    review:
      "Charcha helped me understand my screen habits and reduce unnecessary scrolling. The AI insights were surprisingly accurate.",
  },
  {
    name: "Priya Sharma",
    role: "Engineering Student",
    review:
      "The personalized recommendations motivated me to build healthier digital routines. The dashboard makes progress easy to track.",
  },
  {
    name: "Rahul Verma",
    role: "University Student",
    review:
      "Simple, beautiful, and incredibly useful. Charcha feels like a personal digital wellbeing coach.",
  },
];

function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-slate-900">
            What Students Say
          </h2>

          <p className="mt-5 text-xl text-gray-600">
            Trusted by students striving for healthier digital habits.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-slate-50 rounded-2xl p-8 shadow-lg"
            >
              <FaQuoteLeft className="text-blue-600 text-3xl mb-5" />

              <p className="text-gray-600 leading-7">"{item.review}"</p>

              <div className="flex text-yellow-400 mt-6 mb-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <h3 className="font-bold text-xl">{item.name}</h3>

              <p className="text-gray-500">{item.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
