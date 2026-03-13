import { ProductCard } from './ProductCard';

const bestSellers = [
  {
    id: 1,
    name: 'عقد مطلي بالذهب',
    nameEn: 'Gold Plated Necklace',
    price: '١٢٩ ر.س',
    image: 'https://images.unsplash.com/photo-1758995115560-59c10d6cc28f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnb2xkJTIwamV3ZWxyeSUyMG5lY2tsYWNlJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzMzNjMzODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 2,
    name: 'خاتم ذهبي',
    nameEn: 'Gold Ring',
    price: '١٤٩ ر.س',
    image: 'https://images.unsplash.com/photo-1758995116142-c626a962a682?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwcmluZyUyMGx1eHVyeSUyMGVsZWdhbnR8ZW58MXx8fHwxNzczMzcxMjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 3,
    name: 'أقراط مطلية بالذهب',
    nameEn: 'Gold Plated Earrings',
    price: '١٣٩ ر.س',
    image: 'https://images.unsplash.com/photo-1727791762060-978deff14028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwcGxhdGVkJTIwZWFycmluZ3MlMjBsdXh1cnl8ZW58MXx8fHwxNzczMzcxMjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 4,
    name: 'عقد نسائي طبقات',
    nameEn: "Women's Layered Necklace",
    price: '١٥٩ ر.س',
    image: 'https://images.unsplash.com/photo-1762537132897-f6b577190e80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXllcmVkJTIwZ29sZCUyMG5lY2tsYWNlJTIwd29tYW58ZW58MXx8fHwxNzczMzcxMjUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function BestSellers() {
  return (
    <section id="bestsellers" className="py-20 px-4" style={{ backgroundColor: 'var(--luxury-white)' }}>
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
            الأكثر مبيعاً
          </h2>
          <p className="mb-4" style={{ color: 'var(--luxury-gray)' }}>
            Best Sellers
          </p>
          <div className="w-24 h-0.5 mx-auto" style={{ backgroundColor: 'var(--luxury-gold)' }}></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestSellers.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              size="large"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
