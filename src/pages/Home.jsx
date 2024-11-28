import FlashSale from '../components/FlashSale.jsx';
import Hero from '../components/Hero.jsx'
import Timer from '../components/Timer.jsx'
// import ProductCard from '../components/ProductCard.jsx';
import Footer from '../components/Footer.jsx';

export default function Home() {
    return (
      <>
        <Hero />
        <Timer />
        <FlashSale />
        <Footer />
        </>
    );
  }