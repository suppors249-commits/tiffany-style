import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

interface Category {
  id: number;
  name: string;
  link: string;
  image: string;
  count: number;
}

const categories: Category[] = [
  {
    id: 1,
    name: 'Necklaces & Pendants',
    link: '/Products',
    image: 'https://media.tiffany.com/is/image/tco/60017484_ER_MAIN1X1',
    count: 13065,
  },
  {
    id: 2,
    name: 'Bracelets',
    link: '/Products',
    image: 'https://media.tiffany.com/is/image/tco/69346855_RG_MAIN1X1',
    count: 1470,
  },
  {
    id: 3,
    name: 'Earrings',
    link: '/Products',
    image: 'https://media.tiffany.com/is/image/tco/69346855_RG_MAIN1X1',
    count: 9082,
  },
  {
    id: 4,
    name: 'Rings',
    link: '/Products',
    image: 'https://media.tiffany.com/is/image/tco/75123620_ER_MAIN1X1',
    count: 62810,
  },
];

export const CategoryTiles: React.FC = () => {
  return (
    <section className="py-6 px-4 bg-[#f2f9f5]">
      <div className="container mx-auto max-w-7xl">
        <Swiper
          spaceBetween={30}
          centeredSlides={false}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          
         
          className="mySwiper"
        >
          {categories.map((cat) => (
           <SwiperSlide key={cat.id} className="w-22">
  <a
    href={cat.link}
    className="group block rounded-md overflow-hidden transition"
  >
    <div className="w-full overflow-hidden">
      <img
        src={cat.image}
        alt={cat.name}
        className="w-full h-28 object-cover duration-300"
        loading="lazy"
      />
    </div>

    <div className="text-center p-2">
      <h3 className="text-sm font-semibold text-gray-900">
        {cat.name}
      </h3>
    </div>
  </a>
</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};