
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <>
      <div className="bg-blue-200" id="home">
        <Header />
        <Hero />
      <div id="testimonials">
        <Testimonials id="a" />
      </div>
      </div>
      
      <Footer/>
     
      {/* <div id="features">
        <Features />
      </div>
      <div id="video">

        <Video />
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
      <div id="blog">
        <Blog />
      </div>
      <div id="contact">
        <Contact />
      </div> */}
    </>
  );
}
