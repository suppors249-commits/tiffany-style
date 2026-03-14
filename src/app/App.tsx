import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProductCategories } from './components/ProductCategories';
import { Categories } from './components/Categories';
import { WhyChooseUs } from './components/WhyChooseUs';
import { BestSellers } from './components/BestSellers';
import { CustomerReviews } from './components/CustomerReviews';
import { InstagramGallery } from './components/InstagramGallery';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { CategoryTiles } from "./components/CategoryTiles";
import { LoveEngagement } from './components/LoveEngagement';
import { ThreeStepsRow } from "./components/ThreeStepsRow";
import Products from "../pages/Products";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen" dir="rtl" lang="ar">
        <Header />

        <Routes>

          {/* الصفحة الرئيسية */}
          <Route
            path="/"
            element={
              <main>
                <HeroSection />
                <ProductCategories />
                <CategoryTiles />
                <LoveEngagement />
                {/* <ThreeStepsRow /> */}
                <WhyChooseUs />
                <BestSellers />
                <CustomerReviews />
                <InstagramGallery />
              </main>
            }
          />

          {/* صفحة المنتجات */}
          <Route path="/products" element={<Products />} />

        </Routes>

        <Footer />
        <ScrollToTop />
      </div>
    </BrowserRouter>
  );
}
