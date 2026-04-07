import Hero from './components/Hero';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Section Component */}
      <Hero />

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 px-4 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            About Zychor Biologicals
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-primary dark:text-tertiary mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We are committed to developing innovative biological solutions that address global challenges in healthcare, agriculture, and sustainability.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary dark:text-tertiary mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                To be a leading global provider of advanced biological technologies that improve lives and protect our planet for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 sm:py-24 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Our Products
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Biotech Solutions", description: "Innovative biological products for industrial applications" },
              { title: "Agricultural Bio", description: "Sustainable solutions for modern farming and crop health" },
              { title: "Research Grade", description: "High-purity biological materials for research institutions" }
            ].map((product, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 px-4 bg-white dark:bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Interested in our products or have questions? We'd love to hear from you.
          </p>
          <a
            href="mailto:info@zychorbiologicals.com"
            className="inline-block px-8 py-3 bg-primary text-neutral rounded-lg hover:bg-primary-dark transition font-semibold"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-8 px-4 text-center border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <p className="mb-2">&copy; 2026 Zychor Biologicals. All rights reserved.</p>
          <p className="text-gray-400">Advanced biological solutions for a sustainable future</p>
        </div>
      </footer>
    </div>
  );
}