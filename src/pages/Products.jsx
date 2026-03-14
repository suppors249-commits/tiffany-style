import React from "react";

const products = [
  {
    id: 1,
    title: "سلسلة ذهب عيار 18",
    price: "EGP 59,905",
    image: "https://i.pinimg.com/1200x/5a/45/49/5a4549376e8aea423054b42e1ecdcbc4.jpg",
    image2: "https://cdn11.bigcommerce.com/s-t4k1ukevvr/products/5885/images/96146/115221300012360-1__13117.1768479056.386.513.jpg"
  },
  {
    id: 2,
    title: "سلسلة ذهب عيار 18",
    price: "EGP 59,905",
    image: "https://i.pinimg.com/736x/16/85/13/1685137bf3b55a67e9b47565486fd2ff.jpg",
    image2: "https://i.pinimg.com/736x/b2/d5/fc/b2d5fc636fac0bdcb2ee6fa41dbfd292.jpg"
  },
  {
    id: 3,
    title: "خاتم ذهب فاخر",
    price: "EGP 25,000",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQdEUFb5WznwWBdbabmdxtsg9qtH5KyABxEGCevECUbqLamuIVt",
    image2: "https://img.fantaskycdn.com/2977fdb0c969a02c7524c66394e5fff1_1024x.jpeg"
  },
  {
    id: 4,
    title: "أقراط ذهب",
    price: "EGP 18,000",
    image: "https://img.fantaskycdn.com/bba7fbf6d3b7880de695e4d7f45add4f_750x.jpeg",
    image2: "https://img.fantaskycdn.com/703ab4c26a8139bae8a032955ee51460_750x.jpeg"
  },
  {
    id: 5,
    title: "أقراط ذهب",
    price: "EGP 18,000",
    image: "https://img.fantaskycdn.com/2977fdb0c969a02c7524c66394e5fff1_1024x.jpeg",
    image2: "https://img.fantaskycdn.com/a70754cf1c78109c8d94bf05f360e268_540x.jpeg"
  },
  {
    id: 6,
    title: "أقراط ذهب",
    price: "EGP 18,000",
    image: "https://i.pinimg.com/1200x/d8/1c/d9/d81cd9723fef590ddd469870978dc0f0.jpg",
    image2: "https://i.pinimg.com/1200x/4b/73/ff/4b73ffd2cd1050b71d0a4c0a954af1ea.jpg"
  },
  {
    id: 7,
    title: "أقراط ذهب",
    price: "EGP 18,000",
    image: "https://img.fantaskycdn.com/70df76a882e5601a9e91464759bee09c_750x.jpeg",
    image2: "https://img.fantaskycdn.com/bd50d4c6cd445cc3b9930a205270b452_750x.jpeg"
  },
  {
    id: 8,
    title: "أقراط ذهب",
    price: "EGP 18,000",
    image: "https://img.fantaskycdn.com/ff65186b44ed7f7937d73a39fb963b7f_750x.jpeg",
    image2: "https://img.fantaskycdn.com/ccf384e56373153a7c39f3b145104262_750x.png"
  }
];

export default function Products() {
  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">
        جميع المنتجات
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl group transition"
          >
            <div className="relative overflow-hidden">
              {/* الصورة الأساسية */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-56 object-cover transition duration-300 group-hover:opacity-0"
              />

              {/* الصورة الثانية */}
              <img
                src={product.image2}
                alt={product.title}
                className="absolute top-0 left-0 w-full h-56 object-cover opacity-0 group-hover:opacity-100 transition duration-300"
              />
            </div>

            <div className="p-3 text-center">
              <h3 className="font-semibold text-sm mb-1">
                {product.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}