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
import { useEffect, useState } from "react";

export default function App() {
  const [isFullRecap, setIsFullRecap] = useState(false);
  useEffect(() => {
    // console.log(window.location.href);
    if (window.location.href.includes("#")) {
      const id = window.location.href.split("#")[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
    const urlParts = window.location.href.split("/");
    const lastPart = urlParts[urlParts.length - 1].toLowerCase();
    
    if (lastPart.includes("fullrecap")) {
      setIsFullRecap(true);
      
    }
    else {
      setIsFullRecap(false);
    }
    // if()

  }, [window.location.href]);
  return (
    <>
      <div className="bg-blue-200" id="home">
        <Header />
        <Hero />
      </div>
      {!isFullRecap && <>
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
        
        {/* <div id="Schedule">
        <Schedule />
      </div>
      <div id="Speakers">
        <Speakers />
      </div>
      <div id="Prizes">
        <Pricing />
      </div> */}

        <div id="Faq">
          <Faq />
        </div>
      </>
      }
      <Footer />
      <ScrollToTop />

    </>
  );
}
