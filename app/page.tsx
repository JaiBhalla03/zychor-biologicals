import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import TherapeuticAreas from './components/TherapeuticAreas';
import Products from './components/Products';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Section Component */}
      <Hero />

      {/* About Section Component */}
      <About />

      {/* Therapeutic Areas Section Component */}
      <TherapeuticAreas />

      {/* Products Section Component */}
      <Products />

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Interested in our products or have questions? We'd love to hear from you.
          </p>
          <a
            href="mailto:zychorbiologicals@gmail.com"
            className="inline-block px-8 py-3 bg-primary text-neutral rounded-lg hover:bg-primary-dark transition font-semibold"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 text-center border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <p className="mb-2">&copy; 2026 Zychor Biologicals. All rights reserved.</p>
          <p className="text-gray-400">Advanced biological solutions for a sustainable future</p>
        </div>
      </footer>
    </div>
  );
}