import React from 'react';

export const LoveEngagement: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* الصورة */}
          <div className="w-full lg:w-2/3">
            <img
              src="https://media.tiffany.com/is/image/tco/2025_ENGAGEMENTRING_LP_7x5_01_SFCC"
              alt="Love & Engagement"
              className="w-full h-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>

          {/* النص */}
          <div className="w-full lg:w-1/3 text-center lg:text-left flex flex-col justify-center gap-4">
            <h2 className="text-3xl font-bold">Love & Engagement</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              In 1886, Tiffany introduced the engagement ring as we know it today. We’re proud to build on that legacy as the leader in diamond traceability with responsibly sourced, expertly crafted diamond rings that celebrate love in all its forms.
            </p>
            <a
              href="https://www.tiffany.com/engagement/engagement-rings/"
              className="mt-4 inline-block px-6 py-3 bg-black text-white uppercase text-sm font-semibold rounded hover:bg-gray-800 transition"
            >
              Shop Love & Engagement
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};