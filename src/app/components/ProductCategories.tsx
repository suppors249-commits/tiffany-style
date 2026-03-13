import React from 'react';

const categories = [
  {
    id: 1,
    title: 'Necklaces ',
    href: 'https://www.tiffany.com/jewelry/necklaces-pendants/',
    image: 'https://media.tiffany.com/is/image/tco/2026_VDAY_STILL_4X5_13-2'
  },
  {
    id: 2,
    title: 'Bracelets',
    href: 'https://www.tiffany.com/jewelry/bracelets/',
    image: 'https://media.tiffany.com/is/image/tco/2026_VDAY_STILL_1x1_36'
  },
  {
    id: 3,
    title: 'Earrings',
    href: 'https://www.tiffany.com/jewelry/earrings/',
    image: 'https://media.tiffany.com/is/image/tco/2026_VDAY_STILL_1x1_5'
  },
  {
    id: 4,
    title: 'Rings',
    href: 'https://www.tiffany.com/jewelry/rings/',
    image: 'https://media.tiffany.com/is/image/tco/2026_VDAY_STILL_1x1_14'
  }
];

export function ProductCategories() {
  return (
    <section className="py-20 px-4 bg-[#f2f9f5]">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-2" style={{ color: 'var(--luxury-black)' }}>
          Shop by Category
        </h2>
        <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#77b1bc' }}></div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {categories.map((cat) => (
          <a
            key={cat.id}
            href={cat.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden bg-[#f2f9f5] duration-300"
          >
            <div className="relative w-full pb-[100%] bg-[#f2f9f5]">
              <img
                src={cat.image}
                alt={cat.title}
                className="absolute inset-0 w-full bg-[#f2f9f5] h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="text-center py-4 bg-[#f2f9f5]">
              <span className="font-semibold text-lg" style={{ color: 'var(--luxury-black)' }}>
                {cat.title}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}