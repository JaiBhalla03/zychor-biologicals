export default function Hero() {
  return (
    <section className="relative flex px-4 py-20 sm:py-32 overflow-hidden rounded-lg">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-lg"
        style={{
          backgroundImage: "url('/heroSectionBGImage.png')",
        }}
      ></div>

      {/* Overlay - Neutral gradient from left to right */}
      <div className="absolute inset-0 bg-gradient-to-r from-neutral via-neutral/60 to-transparent rounded-lg"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-secondary">
          Advancing Healthcare with <div className="text-tertiary">Innovative Biological Solutions</div>
        </h1>
        <h3 className="text-lg sm:text-lg text-secondary mb-4">
          Comprehensive pharmaceutical solutions for bone health, joint care, pain management, infection control, and advanced wound healing.
        </h3>
        <p className="text-sm text-se">At Zychor Biologicals, we are committed to delivering high-quality, science-driven therapies that improve patient outcomes and enhance quality of life across multiple therapeutic areas.</p>
        <div className="flex flex-col sm:flex-row gap-4 py-4">
          <a
            href="#products"
            className="px-8 py-3 bg-primary text-neutral rounded-lg hover:bg-primary-dark transition font-semibold text-center"
          >
            Explore Our Products
          </a>
          <a
            href="#contact"
            className="px-8 py-3 text-primary rounded-lg bg-neutral-dark hover:bg-gray-300 transition font-semibold text-center"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
