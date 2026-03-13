import { Award, Droplets, Sparkles, Truck } from 'lucide-react';

export function WhyChooseUs() {
  const features = [
    {
      id: 1,
      icon: Award,
      title: 'جودة عالية',
      titleEn: 'High Quality',
      description: 'مواد فاخرة ومتينة'
    },
    {
      id: 2,
      icon: Droplets,
      title: 'مقاوم للماء',
      titleEn: 'Water Resistant',
      description: 'مناسب للاستخدام اليومي'
    },
    {
      id: 3,
      icon: Sparkles,
      title: 'لمسة ذهبية دائمة',
      titleEn: 'Long-Lasting Gold',
      description: 'تطلي ذهبي يدوم طويلاً'
    },
    {
      id: 4,
      icon: Truck,
      title: 'شحن سريع',
      titleEn: 'Fast Shipping',
      description: 'توصيل في 2-3 أيام'
    }
  ];

  return (
    <section className="py-20 px-4" style={{ backgroundColor: 'var(--luxury-black)' }}>
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="mb-4 tracking-wider"
            style={{ 
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: 'var(--luxury-gold)',
              letterSpacing: '0.1em'
            }}
          >
            لماذا تختارنا؟
          </h2>
          <div className="w-24 h-0.5 mx-auto" style={{ backgroundColor: 'var(--luxury-gold)' }}></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="text-center p-8 rounded-lg transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
              >
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
                  style={{ backgroundColor: 'var(--luxury-gold)' }}
                >
                  <Icon className="w-8 h-8" style={{ color: 'var(--luxury-black)' }} />
                </div>
                <h3 className="mb-2" style={{ color: 'var(--luxury-white)' }}>
                  {feature.title}
                </h3>
                <p className="text-sm mb-2" style={{ color: 'var(--luxury-gold-light)' }}>
                  {feature.titleEn}
                </p>
                <p className="text-sm" style={{ color: 'var(--luxury-gray-light)' }}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
