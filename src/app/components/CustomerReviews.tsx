import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'نورة العتيبي',
    rating: 5,
    comment: 'منتجات رائعة وجودة عالية! العقد الذهبي أنيق جداً ومريح في الارتداء.',
    date: 'منذ أسبوعين'
  },
  {
    id: 2,
    name: 'سارة المالكي',
    rating: 5,
    comment: 'أحببت السوار الستيل، مقاوم للماء فعلاً. شحن سريع وتغليف فاخر.',
    date: 'منذ ٣ أسابيع'
  },

];

export function CustomerReviews() {
  return (
    <section className="py-8 px-4" style={{ backgroundColor: '#f9f9f9' }}>
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
            آراء العملاء
          </h2>
          <p className="mb-4" style={{ color: 'var(--luxury-gray)' }}>
            Customer Reviews
          </p>
          <div className="w-24 h-0.5 mx-auto" style={{ backgroundColor: 'var(--luxury-gold)' }}></div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-lg transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: 'white', border: '1px solid var(--luxury-gray-light)' }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4 justify-end">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-current"
                    style={{ color: 'var(--luxury-gold)' }}
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="mb-4 leading-relaxed text-right" style={{ color: 'var(--luxury-gray)' }}>
                {review.comment}
              </p>

              {/* Customer Info */}
              <div className="flex items-center justify-between border-t pt-4" style={{ borderColor: 'var(--luxury-gray-light)' }}>
                <p className="text-sm" style={{ color: 'var(--luxury-gray)' }}>
                  {review.date}
                </p>
                <p style={{ color: 'var(--luxury-black)' }}>
                  {review.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
