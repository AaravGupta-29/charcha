import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

import logo from "../../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-950 to-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-4 md:grid-cols-2 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="Charcha Logo"
              className="w-14 h-14 rounded-xl"
            />

            <div>
              <h2 className="text-3xl font-bold text-white">Charcha</h2>

              <p className="text-blue-400 text-sm">
                AI-Powered Digital Wellbeing
              </p>
            </div>
          </div>

          <p className="mt-6 leading-8 text-gray-400">
            Helping students build healthier relationships with technology
            through AI-driven insights, analytics, and personalized
            recommendations.
          </p>
        </div>

        {/* Platform */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">Platform</h3>

          <ul className="space-y-4">
            <li className="hover:text-white transition cursor-pointer">Home</li>

            <li className="hover:text-white transition cursor-pointer">
              Features
            </li>

            <li className="hover:text-white transition cursor-pointer">
              Assessment
            </li>

            <li className="hover:text-white transition cursor-pointer">
              Dashboard
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">Resources</h3>

          <ul className="space-y-4">
            <li className="hover:text-white transition cursor-pointer">
              About
            </li>

            <li className="hover:text-white transition cursor-pointer">
              Privacy Policy
            </li>

            <li className="hover:text-white transition cursor-pointer">
              Terms of Service
            </li>

            <li className="hover:text-white transition cursor-pointer">
              Contact
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">Connect</h3>

          <div className="flex gap-4">
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="#"
              className="w-12 h-12 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="#"
              className="w-12 h-12 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300"
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="mailto:contact@charcha.ai"
              className="w-12 h-12 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300"
            >
              <FaEnvelope size={20} />
            </a>
          </div>

          <p className="mt-8 text-gray-400 leading-7">
            Built with ❤️ for students who want a healthier digital life.
          </p>
        </div>
      </div>

      {/* Bottom */}

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Charcha. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Designed & Developed with React • Tailwind CSS • Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
