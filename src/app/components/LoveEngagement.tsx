// LoveEngagement.tsx
import React from 'react';

export const LoveEngagement: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-7xl flex flex-col gap-12">

        {/* فيديو Watchmaking أولاً */}
        <div className="w-full flex flex-col items-center gap-6">
          <div className="relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden shadow-lg">
            <video
              src="https://media.tiffany.com/is/content/tco/2026_WATCH_WK_VIDEO_1x1_2"
              poster="https://media.tiffany.com/is/image/tco/2026_WATCH_WK_STILL_16x9_2"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
          <blockquote className="text-gray-700 text-center max-w-3xl">
            Honoring the legacy of Jean Schlumberger, the new Enamel Diamond watch reimagines his iconic 1962 paillonné enamel bangle in a luminous timepiece. A diamond-set dial is framed by a rotating ring of Tiffany Blue® or white vitreous enamel, accented with the signature 18k yellow gold cross-stitch motif. Snow-set diamonds create unrivaled luminosity, while the freely spinning 18k gold stitches mark the hours with playful sophistication.
          </blockquote>
          <a
            href="https://www.tiffany.com/high-jewelry/education/art-of-watchmaking.html"
            className="inline-block px-6 py-3 bg-black text-white uppercase font-semibold rounded hover:bg-gray-800 transition-colors duration-300"
          >
            Learn More
          </a>
        </div>

        {/* الصورة والنصوص الأساسية تحت الفيديو */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* الصورة */}
          <div className="w-full lg:w-2/3">
            <img
              src="https://media.tiffany.com/is/image/tco/2025_ENGAGEMENTRING_LP_7x5_01_SFCC"
              alt="Love & Engagement"
              className="w-full h-auto object-cover rounded-lg"
              loading="lazy"
            />
          </div>

          {/* النصوص */}
          <div className="w-full lg:w-1/3 flex flex-col justify-center text-center lg:text-left gap-4">
            <h2 className="text-3xl font-bold">Love & Engagement</h2>
            <blockquote className="text-gray-700">
              In 1886, Tiffany introduced the engagement ring as we know it today. We’re proud to build on that legacy as the leader in diamond traceability with responsibly sourced, expertly crafted diamond rings that celebrate love in all its forms.
            </blockquote>
            <a
              href="https://www.tiffany.com/engagement/engagement-rings/"
              className="inline-block mt-2 px-6 py-3 bg-black text-white uppercase font-semibold rounded hover:bg-gray-800 transition-colors duration-300"
            >
              Shop Love & Engagement
            </a>

            {/* العنوان الجديد تحت الوصف */}
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-black">The Art of Watchmaking</h2>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};