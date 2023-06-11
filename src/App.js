import AboutSectionOne from "./components/About/AboutSectionOne";
import AboutSectionTwo from "./components/About/AboutSectionTwo";
import Faq from "./components/Faq";
import Sponsors from "./components/Sponsorships";

import Recap from "./components/Recap";
import Hero from "./components/Hero";
import Pricing from "./components/Prizes";

import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Team from "./components/Team";

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

    
      <div id="about">
        <AboutSectionOne />
      </div>
    
      <div id="about-2">
        <AboutSectionTwo />
      </div>
    
       <div id="Sponsors">
        <Sponsors />
      </div>
      
      
      <div id="Team">
        <Team id="a" />
      </div>
      <div id="pricing">
        <Pricing />
      </div>

      <div id="Faq">
        <Faq />
      </div>
      <Footer />
      <ScrollToTop />

    </>
  );
}
