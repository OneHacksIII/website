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
    id: 52,
    name: "TailAdmin",
    href: "https://tailadmin.com",
    image: "/images/brands/tailadmin.svg",
  },
  {
    id: 51,
    name: "TailAdmin",
    href: "https://tailadmin.com",
    image: "/images/brands/tailadmin.svg",
  },
  {
    id: 53,
    name: "TailAdmin",
    href: "https://tailadmin.com",
    image: "/images/brands/tailadmin.svg",
  },
  {
    id: 54,
    name: "TailAdmin",
    href: "https://tailadmin.com",
    image: "/images/brands/tailadmin.svg",
  },
  {
    id: 52,
    name: "TailAdmin",
    href: "https://tailadmin.com",
    image: "/images/brands/tailadmin.svg",
  },
  {
    id: 522,
    name: "TailAdmin",
    href: "https://tailadmin.com",
    image: "/images/brands/tailadmin.svg",
  },

];

const Brands = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };
  return (

    <section className="bg-primary/[.03] pt-16">
      < div className=" py-8" >
        <h1 className=" text-5xl pr-[10%] sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-right text-white">Sponsors</h1>

        <div className="grid place-items-center py-8">

          <hr className="gradient-line w-4/5" />
        </div>
      </div >
      <div className="container">
        <div className="-mx-4 flex ">
          <div className="w-full h-44 px-4 flex">
            <button onClick={prevHandler} className="scale-125 text-bluee ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="#0374ef" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>

            </button>
            <Swiper

              slidesPerView={3}
              spaceBetween={15}
              onSwiper={(swiper) => setSwiperRef(swiper)}
              pagination={{
                clickable: true,
              }}
              autoHeight={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"

            >
              {brandsData.map((brand) => {
                const { href, image, name } = brand;

                return (
                  <>

                    <SwiperSlide key={brand.id}>
                      {/* <div className="flex h-screen"> */}
                      <div className="  w-full bg-blue-400 justify-center items-center">
                        <a
                          href={href}
                          target="_blank"
                          rel="nofollow noreferrer"
                          className=" inline-flex grayscale w-full transition  hover:grayscale-0 opacity-60 hover:opacity-100"
                        >
                          <img src={image} alt={name} />
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
            {/* <div
              className="wow fadeInUp  overflow-x-auto items-center justify-center rounded-md bg-dark py-8 px-8 dark:bg-primary dark:bg-opacity-5 sm:px-10 md:py-[40px] md:px-[50px] xl:p-[50px] 2xl:py-[60px] 2xl:px-[70px]"
              data-wow-delay=".1s
              "
            >
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div> */}
          </div>
        </div>
      </div >
    </section >
  );
};

export default Brands;
