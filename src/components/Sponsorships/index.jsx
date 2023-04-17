import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules

import { Pagination, Navigation } from "swiper";
const brandsData = [
  {
    id: 1,
    name: "UIdeck",
    href: "https://uideck.com",
    image: "/images/brands/uideck.svg",
  },
  {
    id: 2,
    name: "Tailgrids",
    href: "https://tailgrids.com",
    image: "/images/brands/tailgrids.svg",
  },
  {
    id: 3,
    name: "Lineicons",
    href: "https://lineicons.com",
    image: "/images/brands/lineicons.svg",
  },
  {
    id: 4,
    name: "GrayGrids",
    href: "https://graygrids.com",
    image: "/images/brands/graygrids.svg",
  },
  {
    id: 5,
    name: "TailAdmin",
    href: "https://tailadmin.com",
    image: "/images/brands/tailadmin.svg",
  },
  {
    id: 1,
    name: "UIdeck",
    href: "https://uideck.com",
    image: "/images/brands/uideck.svg",
  },
  {
    id: 2,
    name: "Tailgrids",
    href: "https://tailgrids.com",
    image: "/images/brands/tailgrids.svg",
  },
  {
    id: 3,
    name: "Lineicons",
    href: "https://lineicons.com",
    image: "/images/brands/lineicons.svg",
  },
  {
    id: 4,
    name: "GrayGrids",
    href: "https://graygrids.com",
    image: "/images/brands/graygrids.svg",
  },
  {
    id: 5,
    name: "TailAdmin",
    href: "https://tailadmin.com",
    image: "/images/brands/tailadmin.svg",
  },
  // {
  //   id: 52,
  //   name: "TailAdmin",
  //   href: "https://tailadmin.com",
  //   image: "/images/icons/globe.svg",
  // },


];

const Sponsors = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };
  return (

    <section className=" pt-16 ">
      < div className=" py-8" >
        <h1 className=" text-5xl grad-text sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-left pl-[15%] text-white">Sponsorships</h1>

        <div className="grid place-items-center pr-[30%] py-8">

          <hr className="gradient-line w-3/5" />
        </div>
      </div >
      <div className="container">
        <div className="-mx-4 flex ">
          <div className=" max-w-full px-4 flex">
            <button onClick={prevHandler} className="scale-125 text-bluee ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="#0374ef" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>

            </button>
            <Swiper
              // slidesPerView={3}
              slidesPerView={"auto"}

              spaceBetween={15}
              onSwiper={(swiper) => setSwiperRef(swiper)}
              // pagination={{
              //   dynamicBullets: true,
              //   clickable: true,
              // }}
              pagination={{
                type: "progressbar",
              }}
              autoHeight={false}
              modules={[Pagination, Navigation]}
              className="mySwiper"

            >
              {brandsData.map((sponsor) => {

                return (
                  <>

                    <SwiperSlide key={sponsor.id}>
                      {/* <div className="flex h-screen"> */}
                      <div className="container   min-w-full max-w-sm hover:scale-105 transform transition">
                        <a
                          className="block rounded-xl border  bg-[#ffffff14] p-4 shadow-xl sm:p-6 lg:p-8"
                          href={sponsor.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >

                          <img src={sponsor.image} alt={sponsor.name} />

                          <h3 class="mt-3 text-lg text-left  text-white font-bold sm:text-xl">
                            {sponsor.name}
                          </h3>


                        </a>

                      </div>
                      {/* </div> */}
                    </SwiperSlide>

                  </>
                )
              })}


            </Swiper>
            <button onClick={nextHandler} className="scale-125 text-bluee ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="#0374ef" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>


            </button>

          </div>
        </div>
      </div >
    </section >
  );
};

export default Sponsors;