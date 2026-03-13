import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed left-8 bottom-8 w-12 h-12 rounded-full flex items-center justify-center z-50 transition-all duration-300 hover:scale-110 shadow-lg ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      style={{ backgroundColor: 'var(--luxury-gold)' }}
      aria-label="العودة للأعلى"
    >
      <ArrowUp className="w-6 h-6" style={{ color: 'var(--luxury-black)' }} />
    </button>
  );
}
