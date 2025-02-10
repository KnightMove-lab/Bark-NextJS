// app/page.js
import Hero from "./components/Hero";
import PopularServices from "./components/PopularServices";
import Discover from "./components/Discover";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import TrustedBrands from "./components/TrustedBrands";
import HealthWellbeing from "./components/HealthWellbeing";
import WeddingEvents from "./components/WeddingEvents";
import BusinessServices from "./components/BusinessServices";
export default function Home() {
  return (
    <>
    
      <Hero />
      <PopularServices />
      <TrustedBrands/>
      <Discover />
      <Services />
      <HealthWellbeing/>
      <WeddingEvents/>
      <BusinessServices/>
      <Testimonials />
  
    </>
  );
}
