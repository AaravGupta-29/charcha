import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-3xl font-bold text-white">Charcha</h2>

          <p className="mt-4 leading-7">
            AI-Powered Digital Wellbeing Platform helping students build
            healthier relationships with technology.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>

          <ul className="space-y-2">
            <li>Home</li>
            <li>Features</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Connect</h3>

          <div className="flex gap-5 text-2xl">
            <FaGithub className="hover:text-white cursor-pointer" />

            <FaLinkedin className="hover:text-white cursor-pointer" />

            <FaInstagram className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="border-t border-slate-700 mt-10 pt-6 text-center text-gray-400">
        © 2026 Charcha. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
