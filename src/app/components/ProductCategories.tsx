import React from 'react';
import { Link } from "react-router-dom";
import product1 from "../images/product/1.png";
import product11 from "../images/product/11.png";

const categories = [
  {
    id: 1,
    title: 'Necklaces ',
    href: '/Products',
    image: 'https://media.tiffany.com/is/image/tco/2026_VDAY_STILL_4X5_13-2'
  },
  {
    id: 2,
    title: 'Bracelets',
    href: '/Products',
    image: 'https://media.tiffany.com/is/image/tco/2026_VDAY_STILL_1x1_36'
  },
  {
    id: 3,
    title: 'Earrings',
    href: '/Products',
    image: product1,
  },
  {
    id: 4,
    title: 'Rings',
    href: '/Products',
     image: product11,
  }
];

export function ProductCategories() {
  return (
    <>
      {/* Section 1: Categories */}
      <section className="py-8 px-4 bg-[#f2f9f5]">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-2" style={{ color: 'var(--luxury-black)' }}>
            Shop by Category
          </h2>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#77b1bc' }}></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={cat.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden bg-[#f2f9f5] duration-300 "
            >
              <div className="relative w-full pb-[100%]">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="text-center py-4 ">
                <span className="font-semibold text-lg" style={{ color: 'var(--luxury-black)' }}>
                  {cat.title}
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

     <section className="container mx-auto px-4 py-6">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="relative  rounded-xl  group">
            <img
  src="https://pretty-courage-4d0ad5fd47.media.strapiapp.com/Diamond_KSA_Mobile_3x_46039a35a0.jpg"
  alt="ألماس"
  className="w-full h-48 object-cover  duration-500 group-hover:scale-105"
/>

            <div className="absolute bottom-4 left-4 text-left text-white">
              <h2 className="text-xl font-bold mb-1">اكسسوار</h2>
              <p className="text-sm mb-3">المجوهرات الماسية لإطلالة تشعّ بالبريق</p>
              <a
                href=""
                className="bg-black px-4 py-2 rounded  transition"
              >
                    <Link to="/products">
  عرض المنتجات
</Link>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative overflow-hidden rounded-xl shadow-lg group">
            <img
              src="https://pretty-courage-4d0ad5fd47.media.strapiapp.com/Gold_KSA_Mobile_3x_c099ebed6b.jpg"
              alt="ذهب"
              className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 text-left text-white">
              <h2 className="text-xl font-bold mb-1">ذهب</h2>
              <p className="text-sm mb-3">سرّ التألق مع مجموعات الذهب</p>
             <a
                href=""
                className="bg-black px-4 py-2 rounded hover:bg-gray-800 transition"
              >
                    <Link to="/products">
  عرض المنتجات
</Link>
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative overflow-hidden rounded-xl shadow-lg group">
            <img
              src="https://pretty-courage-4d0ad5fd47.media.strapiapp.com/Miss_L_KSA_Mobile_3x_937ceb48cc.jpg"
              alt=""
              className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 text-left text-white">
              <h2 className="text-xl font-bold mb-1">انستايل</h2>
              <p className="text-sm mb-3">مجوهرات الذهب والأحجار الملونة من إنستايل تواكب الموضة</p>
              <a
                href="#"
                className="bg-black px-4 py-2 rounded hover:bg-gray-800 transition"
              >
                   <Link to="/products">
     عرض المنتجات

</Link>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
