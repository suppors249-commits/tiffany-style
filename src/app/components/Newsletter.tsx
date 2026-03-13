import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';

export function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section className="py-20 px-4" style={{ backgroundColor: 'var(--luxury-black)' }}>
      <div className="container mx-auto max-w-4xl text-center">
        {/* Section Header */}
        <h2 
          className="mb-4 tracking-wider"
          style={{ 
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: 'var(--luxury-gold)',
            letterSpacing: '0.1em'
          }}
        >
          انضم لعالم Soo للأناقة
        </h2>
        <p className="mb-8 max-w-2xl mx-auto" style={{ color: 'var(--luxury-gray-light)' }}>
          اشترك في نشرتنا البريدية واحصل على خصم 10% على أول طلب
        </p>

        {/* Newsletter Form */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="أدخل بريدك الإلكتروني"
            required
            className="flex-1 px-6 py-4 rounded-full text-right outline-none transition-all duration-300 focus:ring-2"
            style={{ 
              backgroundColor: 'white',
              color: 'var(--luxury-black)',
              border: '1px solid var(--luxury-gray-light)'
            }}
          />
          <button
            type="submit"
            className="px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg inline-flex items-center justify-center gap-3"
            style={{ 
              backgroundColor: 'var(--luxury-gold)',
              color: 'var(--luxury-black)'
            }}
          >
            <span>اشتراك</span>
            <ArrowLeft className="w-5 h-5" />
          </button>
        </form>

        {/* Privacy Note */}
        <p className="mt-6 text-sm" style={{ color: 'var(--luxury-gray)' }}>
          نحترم خصوصيتك. لن نشارك بياناتك مع أطراف خارجية.
        </p>
      </div>
    </section>
  );
}
