import { Bone, Activity, Pill, Shield, Heart, Bandage } from 'lucide-react';

const therapeuticAreas = [
  {
    icon: Bone,
    title: "Osteoporosis",
    description: "Enhancing bone strength, supporting calcium metabolism, and reducing fracture risk."
  },
  {
    icon: Activity,
    title: "Osteoarthritis",
    description: "Improving joint mobility, protecting cartilage, and restoring active lifestyles."
  },
  {
    icon: Pill,
    title: "Pain Management",
    description: "Effective anti-inflammatory and analgesic therapies for acute and chronic pain relief."
  },
  {
    icon: Shield,
    title: "Antiinfective",
    description: "Targeted treatments for bacterial infections with proven safety and efficacy."
  },
  {
    icon: Heart,
    title: "Gastro Care",
    description: "Advanced solutions for acid-related disorders including GERD and gastritis."
  },
  {
    icon: Bandage,
    title: "Wound Management",
    description: "Promoting faster healing, infection control, and tissue regeneration."
  }
];

export default function TherapeuticAreas() {
  return (
    <section id="therapeutic-areas" className="py-16 sm:py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 text-center">
          Our Therapeutic Areas
        </h2>

        {/* Intro */}
        <p className="text-base sm:text-lg text-secondary text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          We offer a comprehensive range of pharmaceutical solutions across key therapeutic segments, addressing critical healthcare needs with precision and reliability.
        </p>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {therapeuticAreas.map((area, idx) => {
            const IconComponent = area.icon;
            return (
              <div
                key={idx}
                className="bg-neutral rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 border border-gray-200"
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-gradient-to-br from-primary to-tertiary">
                    <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3">
                  {area.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-secondary leading-relaxed">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
