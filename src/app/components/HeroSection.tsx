import { ArrowLeft } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-[90vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Video fixed */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="https://media.tiffany.com/is/image/tco/SO_Knot_4_5_1080x1350_End_Card_Only-2"
        className="fixed top-0 left-0 w-full h-full object-cover -z-20"
      >
        <source
          src="https://media.tiffany.com/is/content/tco/SO_Knot_9_16_1080x1920_End_Card_Only-1"
          type="video/mp4"
        />
      </video>

      {/* Overlay fixed */}
      <div className="fixed inset-0 bg-black/40 -z-10"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center gap-6">
        <h1
          className="tracking-wider text-white"
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "0.1em" }}
        >
          Accessories
        </h1>
        <h2
          className="leading-tight text-[var(--luxury-gold-light)]"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
        >
         STAINLESS STEEL , GOLD PLATED ACCESSORIES
        </h2>
        <p
          className="max-w-2xl text-white"
          style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", lineHeight: 1.8 }}
        >
          تصاميم أنيقة تدوم طويلاً 
        </p>
        <a
          href="#"
          className="px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg inline-flex items-center gap-3 bg-[var(--luxury-gold)] text-[var(--luxury-black)]"
        >
          <span>تسوق الآن</span>
          <ArrowLeft className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}