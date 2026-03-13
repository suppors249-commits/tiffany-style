export function Categories() {
  const categories = [
    { id: 1, name: 'القلائد', nameEn: 'Necklaces', icon: '💎' },
    { id: 2, name: 'الأساور', nameEn: 'Bracelets', icon: '✨' },
    { id: 3, name: 'الخواتم', nameEn: 'Rings', icon: '💍' },
    { id: 4, name: 'الأقراط', nameEn: 'Earrings', icon: '🌟' }
  ];

  return (
    <section id="categories" className="py-20 px-4" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="mb-4 tracking-wider"
            style={{ 
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: 'var(--luxury-black)',
              letterSpacing: '0.1em'
            }}
          >
            التصنيفات
          </h2>
          <div className="w-24 h-0.5 mx-auto" style={{ backgroundColor: 'var(--luxury-gold)' }}></div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <button
              key={category.id}
              className="group p-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: 'white', border: '1px solid var(--luxury-gray-light)' }}
            >
              <div className="text-5xl mb-4">{category.icon}</div>
              <h3 className="mb-2" style={{ color: 'var(--luxury-black)' }}>
                {category.name}
              </h3>
              <p className="text-sm" style={{ color: 'var(--luxury-gray)' }}>
                {category.nameEn}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
