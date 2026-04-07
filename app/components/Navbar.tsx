import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-6xl px-4 py-2">
        <div className="flex justify-between items-center">
          {/* Logo on the left */}
          <div className="flex items-center gap-3">
            <Image
              src="/zychor_logo.jpeg"
              alt="Zychor Biologicals Logo"
              width={120}
              height={120}
              className="rounded-lg"
            />
          </div>

          {/* Navigation links on the right */}
          <div className="hidden md:flex justify-between gap-8 text-secondary dark:text-tertiary">
            <a href="#about" className="hover:text-primary transition font-medium">
              About
            </a>
            <a href="#products" className="hover:text-primary transition font-medium">
              Products
            </a>
            <a href="#contact" className="hover:text-primary transition font-medium">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
