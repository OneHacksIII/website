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
import Schedule from "./components/schedule";
import Speakers  from "./components/Speakers";
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

    
      <div id="About">
        <AboutSectionOne />
      </div>
    
      <div id="Resources">
        <AboutSectionTwo />
      </div>
    
       <div id="Sponsorships">
        <Sponsors />
      </div>
      
      
      <div id="Team">
        <Team id="a" />
      </div>
      <div id="Schedule">
        <Schedule />
      </div>
      <div id="Speakers">
        <Speakers />
      </div>
      <div id="Prizes">
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
