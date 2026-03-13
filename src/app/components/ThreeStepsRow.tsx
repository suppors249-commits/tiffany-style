// ThreeStepsRow.tsx
import React from "react";

const steps = [
  {
    id: 1,
    icon: "https://cdn.shopify.com/s/files/1/0277/6262/2567/files/WARANTY_652f4150-d96d-4d55-b625-de1d8b65600f.svg?v=1772800087",
    title: "2 Year Warranty",
  },
  {
    id: 2,
    icon: "https://cdn.shopify.com/s/files/1/0277/6262/2567/files/DELIVERY.svg?v=1772801210",
    title: "Free Delivery on Orders £100+",
  },
  {
    id: 3,
    icon: "https://cdn.shopify.com/s/files/1/0277/6262/2567/files/RETURNS_95e89d2f-53f1-47ff-beff-5021e746522c.svg?v=1772800086",
    title: "60-Day Returns",
  },
];

export const ThreeStepsRow: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center gap-2 text-center">
              <img src={step.icon} alt={step.title} className="w-12 h-12 object-contain" />
              <p className="font-semibold text-gray-900">{step.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};