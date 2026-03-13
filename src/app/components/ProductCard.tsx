import { ShoppingBag, Heart } from 'lucide-react';
import { useState } from 'react';

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  size?: 'normal' | 'large';
}

export function ProductCard({ image, name, price, size = 'normal' }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-lg transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ backgroundColor: 'var(--luxury-white)' }}
    >
      {/* Image Container */}
      <div className={`relative overflow-hidden ${size === 'large' ? 'h-96' : 'h-80'}`}>
        {/* Loading skeleton */}
        {!imageLoaded && (
          <div 
            className="absolute inset-0 animate-pulse"
            style={{ backgroundColor: 'var(--luxury-gray-light)' }}
          />
        )}
        
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onLoad={() => setImageLoaded(true)}
          style={{ opacity: imageLoaded ? 1 : 0 }}
        />
        
        {/* Wishlist Button */}
        <button
          className="absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
          style={{ 
            backgroundColor: 'white',
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'translateY(0)' : 'translateY(-10px)'
          }}
          aria-label="إضافة للمفضلة"
        >
          <Heart className="w-5 h-5" style={{ color: 'var(--luxury-black)' }} />
        </button>

        {/* Overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            opacity: isHovered ? 1 : 0
          }}
        >
          <button
            className="px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2"
            style={{
              backgroundColor: 'var(--luxury-gold)',
              color: 'var(--luxury-black)',
              transform: isHovered ? 'translateY(0)' : 'translateY(10px)'
            }}
          >
            <ShoppingBag className="w-5 h-5" />
            <span>أضف إلى السلة</span>
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6 text-center">
        <h3 className="mb-2" style={{ color: 'var(--luxury-black)' }}>
          {name}
        </h3>
        <p className="text-xl" style={{ color: 'var(--luxury-gold)' }}>
          {price}
        </p>
      </div>
    </div>
  );
}