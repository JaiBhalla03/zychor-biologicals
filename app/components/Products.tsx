import { Package } from 'lucide-react';

const productsData = [
  {
    category: "Osteoporosis",
    description: "Bone strength, calcium metabolism, and fracture risk reduction",
    products: [
      "Rockfort PTH",
      "Calcichor CC",
      "Calcichor DS",
      "Calcichor Nasal Spray",
      "Calcichor Nano Shots",
      "Zylodro"
    ]
  },
  {
    category: "Osteoarthritis",
    description: "Joint lubrication, cartilage protection, and mobility improvement",
    products: [
      "Tendoplast",
      "Tendoplast UC",
      "Viscogain XL (4 ml)",
      "Viscogain XL (6 ml)",
      "Viscogain 2 ml",
      "Zycoheal LC",
      "Zycoheal Forte"
    ]
  },
  {
    category: "Pain Management",
    description: "Anti-inflammatory and analgesic therapies",
    products: [
      "Zyclofenac SP",
      "Ketorwin",
      "Zytoric 90",
      "Zytoric TH",
      "Deflanil"
    ]
  },
  {
    category: "Antiinfective",
    description: "Treating bacterial infections",
    products: [
      "Linzofast 600"
    ]
  },
  {
    category: "Gastro Care",
    description: "Acid suppression, GERD, gastritis",
    products: [
      "Pantolock DSR"
    ]
  },
  {
    category: "Chronic Wound Management",
    description: "Healing, infection control, tissue regeneration",
    products: [
      "Debrifix",
      "Collabact M2",
      "Collabact Nano",
      "Collabact Nu",
      "Collabact W"
    ]
  }
];

export default function Products() {
  return (
    <section id="products" className="py-16 sm:py-24 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary dark:text-white mb-4 text-center">
          Our Products
        </h2>
        <p className="text-base sm:text-lg text-secondary text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          Explore our comprehensive range of pharmaceutical products across all therapeutic areas.
        </p>

        {/* Product Categories */}
        <div className="space-y-12 sm:space-y-16">
          {productsData.map((section, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-md">
              {/* Category Header */}
              <div className="mb-8 border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-primary dark:text-tertiary mb-2">
                  {section.category}
                </h3>
                <p className="text-sm sm:text-base text-secondary dark:text-gray-400">
                  {section.description}
                </p>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {section.products.map((product, prodIdx) => (
                  <div
                    key={prodIdx}
                    className="flex items-start gap-3 sm:gap-4 p-4 rounded-lg bg-neutral hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-gradient-to-br from-tertiary to-primary">
                        <Package className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm sm:text-base font-semibold text-primary dark:text-tertiary break-words">
                        {product}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
