import { Instagram } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1721206625539-42e1f345a468?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwamV3ZWxyeSUyMGxpZmVzdHlsZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzczMzcxMjUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1768885560329-5a07715b4447?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBqZXdlbHJ5JTIwZGlzcGxheSUyMGVsZWdhbnR8ZW58MXx8fHwxNzczMjQ1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1721206624465-7d7691ebe50f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwamV3ZWxyeSUyMGxpZmVzdHlsZXxlbnwxfHx8fDE3NzMzNzEyNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1772443326104-21e165fa752f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZ29sZCUyMG5lY2tsYWNlJTIwd29tYW58ZW58MXx8fHwxNzczMzcxMjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1762537132897-f6b577190e80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXllcmVkJTIwZ29sZCUyMG5lY2tsYWNlJTIwd29tYW58ZW58MXx8fHwxNzczMzcxMjUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1727791762060-978deff14028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwcGxhdGVkJTIwZWFycmluZ3MlMjBsdXh1cnl8ZW58MXx8fHwxNzczMzcxMjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function InstagramGallery() {
  return (
    <section className="py-8 px-4" style={{ backgroundColor: 'var(--luxury-white)' }}>
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="w-8 h-8" style={{ color: 'var(--luxury-black)' }} />
            <h2 
              className="tracking-wider"
              style={{ 
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: 'var(--luxury-black)',
                letterSpacing: '0.1em'
              }}
            >
              @Acesories
            </h2>
          </div>
          <p className="mb-4" style={{ color: 'var(--luxury-gray)' }}>
            تابعونا على إنستجرام لأحدث التصاميم
          </p>
          <div className="w-24 h-0.5 mx-auto" style={{ backgroundColor: 'var(--luxury-gold)' }}></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {galleryImages.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
            >
              <img
                src={item.image}
                alt={`Instagram post ${item.id}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div
                className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                style={{ backgroundColor: 'rgba(212, 175, 55, 0.8)' }}
              >
                <Instagram className="w-8 h-8" style={{ color: 'white' }} />
              </div>
            </div>
          ))} 
        </div>
      </div>
    </section>
  );
}
