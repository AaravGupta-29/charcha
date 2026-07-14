import Hero from "./components/home/Hero";
import Features from "./components/home/Features";
import HowItWorks from "./components/home/HowItWorks";
import Testimonials from "./components/home/Testimonials";
import CTA from "./components/home/CTA";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <Features />

      <HowItWorks />

      <Testimonials />

      <CTA />

      <Footer />
    </>
  );
}

export default App;
