// app/page.js
import Header from "./components/Header";
import Hero from "./components/Hero";
import PopularServices from "./components/PopularServices";
import Discover from "./components/Discover";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import TrustedBrands from "./components/TrustedBrands";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <PopularServices />
      <TrustedBrands/>
      <Discover />
      <Services />
      <Testimonials />
      <Footer />
    </>
  );
}
