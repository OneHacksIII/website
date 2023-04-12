import AboutSectionOne from "./components/About/AboutSectionOne";
import AboutSectionTwo from "./components/About/AboutSectionTwo";
import Brands from "./components/Brands";
import Contact from "./components/Contact";
import Recap from "./components/Recap";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";

import Footer from "./components/Footer";
import Header from "./components/Header";


export default function App() {
  return (
    <>
      <div className="bg-blue-200" id="home">
        <Header />
        <Hero />
      </div>
      <div id="Recap">
        <Recap />
      </div>

      <div id="brands">
        <Brands />
      </div>
      <div id="about">
        <AboutSectionOne />
      </div>
      <div id="about-2">
        <AboutSectionTwo />
      </div>
      <div id="testimonials">
        <Testimonials id="a" />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
 
      <div id="contact">
        <Contact />
      </div>
            <Footer/>

    </>
  );
}
