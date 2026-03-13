import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProductCategories } from './components/ProductCategories';
// import { FeaturedProducts } from './components/FeaturedProducts';
import { Categories } from './components/Categories';
import { WhyChooseUs } from './components/WhyChooseUs';
import { BestSellers } from './components/BestSellers';
import { CustomerReviews } from './components/CustomerReviews';
import { InstagramGallery } from './components/InstagramGallery';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { CategoryTiles } from "./components/CategoryTiles";
import { LoveEngagement } from './components/LoveEngagement';
import { ThreeStepsRow } from "./components/ThreeStepsRow";
export default function App() {
  return (
    <div className="min-h-screen" dir="rtl" lang="ar">
      <Header />
      <main>
        <HeroSection />
        <ProductCategories />
        <CategoryTiles />
        <LoveEngagement />
         {/* <ThreeStepsRow /> */}
        {/* <FeaturedProducts /> */}
        {/* <Categories /> */}
        <WhyChooseUs />
        <BestSellers />
        <CustomerReviews />
        <InstagramGallery />
        {/* <Newsletter /> */}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}