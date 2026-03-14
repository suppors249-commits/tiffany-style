import { Instagram, Facebook } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    shop: [
      { name: 'القلائد', href: '#' },
      { name: 'الأساور', href: '#' },
      { name: 'الخواتم', href: '#' },
      { name: 'الأقراط', href: '#' }
    ],
    company: [
      { name: 'من نحن', href: '#' },
      { name: 'اتصل بنا', href: '#' },
      { name: 'المتجر', href: '#' }
    ],
    support: [
      { name: 'سياسة الشحن', href: '#' },
      { name: 'سياسة الاسترجاع', href: '#' },
      { name: 'سياسة الخصوصية', href: '#' },
      { name: 'الشروط والأحكام', href: '#' }
    ]
  };

  return (
    <footer style={{ backgroundColor: 'var(--luxury-black)', color: 'var(--luxury-white)' }}>
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <h3 
              className="mb-6 tracking-widest text-3xl"
              style={{ color: 'var(--luxury-gold)', letterSpacing: '0.3em' }}
            >
            Soube
            </h3>
            <p className="mb-6 leading-relaxed" style={{ color: 'var(--luxury-gray-light)' }}>
              إكسسوارات فاخرة من Stainless Steel و Gold Plated. تصاميم أنيقة تدوم طويلاً.
            </p>
            {/* Social Media */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: 'var(--luxury-gold)' }}
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" style={{ color: 'var(--luxury-black)' }} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: 'var(--luxury-gold)' }}
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" style={{ color: 'var(--luxury-black)' }} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: 'var(--luxury-gold)' }}
                aria-label="TikTok"
              >
                <span className="text-sm" style={{ color: 'var(--luxury-black)' }}>TT</span>
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="mb-6" style={{ color: 'var(--luxury-gold)' }}>
              المتجر
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:opacity-70 transition-opacity"
                    style={{ color: 'var(--luxury-gray-light)' }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="mb-6" style={{ color: 'var(--luxury-gold)' }}>
              الشركة
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:opacity-70 transition-opacity"
                    style={{ color: 'var(--luxury-gray-light)' }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="mb-6" style={{ color: 'var(--luxury-gold)' }}>
              الدعم
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:opacity-70 transition-opacity"
                    style={{ color: 'var(--luxury-gray-light)' }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div 
        className="border-t py-6"
        style={{ borderColor: 'var(--luxury-gray)' }}
      >
        <div className="container mx-auto px-4 text-center">
          <p style={{ color: 'var(--luxury-gray-light)' }}>
            © 2026 Soo. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
