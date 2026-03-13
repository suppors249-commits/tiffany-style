import { ShoppingBag, Heart, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Mobile Menu Icon */}
        <button
          className="lg:hidden text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="القائمة"
        >
          <FontAwesomeIcon icon={faBarsStaggered} className="w-6 h-6" />
        </button>

        {/* Logo in Center */}
        <div className="flex-1 flex justify-center">
          <h1
            className="text-2xl tracking-widest"
            style={{ color: 'var(--luxury-black)', letterSpacing: '0.3em' }}
          >
            Acesories
          </h1>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <button
            aria-label="المفضلة"
            className="hidden sm:block hover:opacity-70 transition-opacity"
          >
            <Heart className="w-5 h-5" style={{ color: 'var(--luxury-black)' }} />
          </button>
          <button
            aria-label="الحساب"
            className="hidden sm:block hover:opacity-70 transition-opacity"
          >
            <User className="w-5 h-5" style={{ color: 'var(--luxury-black)' }} />
          </button>
          <button aria-label="السلة" className="relative hover:opacity-70 transition-opacity">
            <ShoppingBag className="w-5 h-5" style={{ color: 'var(--luxury-black)' }} />
            <span
              className="absolute -top-2 -left-2 w-5 h-5 rounded-full text-xs flex items-center justify-center text-white"
              style={{ backgroundColor: 'var(--luxury-gold)' }}
            >
              0
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-50 bg-black/90 text-white flex flex-col pt-24 px-6 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close X Button */}
        <div className="absolute top-6">
          <button
            className="text-white text-2xl p-2"
            onClick={() => setIsMenuOpen(false)}
            aria-label="إغلاق القائمة"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        {/* Menu Links */}
        <div className="flex flex-col gap-6 text-center text-lg font-semibold mt-8">
          <a
            href="#"
            className="py-3 hover:bg-white/20 rounded-lg transition"
            onClick={() => setIsMenuOpen(false)}
          >
            المتجر
          </a>
          <a
            href="#categories"
            className="py-3 hover:bg-white/20 rounded-lg transition"
            onClick={() => setIsMenuOpen(false)}
          >
            التصنيفات
          </a>
          <a
            href="#bestsellers"
            className="py-3 hover:bg-white/20 rounded-lg transition"
            onClick={() => setIsMenuOpen(false)}
          >
            الأكثر مبيعاً
          </a>
          <a
            href="#"
            className="py-3 hover:bg-white/20 rounded-lg transition"
            onClick={() => setIsMenuOpen(false)}
          >
            من نحن
          </a>
          <a
            href="#"
            className="py-3 hover:bg-white/20 rounded-lg transition"
            onClick={() => setIsMenuOpen(false)}
          >
            اتصل بنا
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center gap-7 justify-center py-40 text-2xl mt-auto">
          <a href="https://facebook.com" target="_blank">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://instagram.com" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://youtube.com" target="_blank">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="https://x.com" target="_blank">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </div>
      </div>
    </header>
  );
}