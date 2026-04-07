import { BookSearch, Syringe } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 bg-neutral">
      <div className="">
        <div className="flex flex-col-reverse md:flex-row gap-12 items-start">
          <div className="flex relative justify-center flex-shrink-0 px-4">
            <div className="transform -rotate-5 relative w-fit">
              <Image
                src="/about_image.png"
                alt="Zychor Biologicals"
                width={400}
                height={500}
                className="rounded-3xl shadow-lg"
              />
              
              {/* Glass Morphism Card at bottom right */}
              <div className="absolute -bottom-4 -right-4 rotate-5 bg-white/30 backdrop-blur-md rounded-xl px-4 py-2 shadow-lg border border-white/50">
                <p className="text-xs sm:text-sm font-semibold text-primary">
                  25 Products
                </p>
                <p className="text-xs text-secondary">
                    Across 6 Therapeutic Areas
                </p>
              </div>
            </div>
          </div>

          {/* Text content on the right */}
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary dark:text-white">
            About Zychor Biologicals
            </h2>
            <div>
              <p className="text-secondary leading-relaxed text-lg">
                Zychor Biologicals is a pharmaceutical company focused on delivering high-quality, science-driven healthcare solutions across multiple therapeutic segments. Our commitment is to improve patient outcomes through innovative and reliable formulations.
              </p>
            </div>

            {/* Key Points */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between">
              {/* Point 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-200">
                    <span className="text-secondary text-sm font-bold"><Syringe /></span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-1">
                    Diverse Therapeutic Expertise
                  </h4>
                  <p className="text-secondary">
                    Covering osteoporosis, osteoarthritis, pain management, anti-infective, gastro care, and chronic wound management.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-200">
                    <span className="text-secondary text-sm font-bold"><BookSearch /></span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-1">
                    Quality & Innovation Focus
                  </h4>
                  <p className="text-secondary">
                    Driven by scientific research and a commitment to safe, effective, and reliable healthcare solutions.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
