import FlashSale from '../components/FlashSale.jsx';
import Hero from '../components/Hero.jsx'
import Timer from '../components/Timer.jsx'
import BrowserCategories from '../components/BrowseByCategory.jsx';
import BestSellingProducts from '../components/BestSelling.jsx';
// import Slider from '../components/Slider.jsx';
// import ProductCard from '../components/ProductCard.jsx';
import Footer from '../components/Footer.jsx';

export default function Home() {
    return (
      <>
        <Hero />
        <Timer />
        <FlashSale />
        {/* <Slider /> */}
        {/* <ProductCard /> */}
        <BrowserCategories />
        <BestSellingProducts />
        <Footer />
        </>
    );
  }