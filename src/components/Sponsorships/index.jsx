import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules

import { Pagination, Navigation } from "swiper";
const brandsData = [
  // {
  //   id: 0,
  //   name: "",
  //   href: "http://about.meta.com/",
  //   image: "/static/images/sponsors/meta.png",
  // },
  // {
  //   id: 1,
  //   name: "",
  //   href: "https://www.wolfram.com/language/",
  //   image: "/static/images/sponsors/wplfram.png",
  // },
  {
    id: 2,
    name: "",
    href: "https://hackplus.io",
    image: "/static/images/sponsors/hackplus.png",
  },
  // {
  //   id: 3,
  //   name: "",
  //   href: "https://echo3d.com",
  //   image: "/static/images/sponsors/echo3d.png",
  // },
  {
    id: 4,
    name: "",
    href: "https://balsamiq.com",
    image: "/static/images/sponsors/baslamiq.png",
  },
  // {
  //   id: 5,
  //   name: "",
  //   href: "https://qoom.io",
  //   image: "/static/images/sponsors/quoom.svg",
  // },
  // {
  //   id: 6,
  //   name: "",
  //   href: "https://taskade.com",
  //   image: "/static/images/sponsors/taskade.png",
  // },
  {
    id: 7,
    name: "",
    href: "https://www.interviewcake.com/",
    image: "/static/images/sponsors/interviewcake.png",
  },
  // {
  //   id: 8,
  //   name: "",
  //   href: "https://www.leading-learners.com/",
  //   image: "/static/images/sponsors/learning.png",
  // },
  // {
  //   id: 9,
  //   name: "",
  //   href: "https://www.hhh4good.org/",
  //   image: "/static/images/sponsors/heartsandhand.jpg",
  // },
  {
    id: 10,
    name: "",
    href: "https://1password.com/",
    image: "/static/images/sponsors/1pwds.png",
  },
  // {
  //   id: 11,
  //   name: "",
  //   href: "https://www.crimsoneducation.org/us/",
  //   image: "/static/images/sponsors/crimson.png",
  // },
  {
    id: 12,
    name: "",
    href: "http://hackp.ac/mlh-StandOutStickers-hackathons",
    image: "/static/images/sponsors/sticker.png",
  },
  {
    id: 1133,
    name: "",
    href: "https://codehs.org/",
    image: "/static/images/sponsors/codehs.jpg",
  },
  {
    id: 12233,
    name: "",
    href: "https://postman.com/",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Postman_%28software%29.png",
  },
  {
    id: 13,
    name: "",
    href: "https://artofproblemsolving.com/",
    image: "/static/images/sponsors/aops.png",
  },
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
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="#E94370" className="w-6 h-6">
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
                      <div className="container   min-w-full max-w-sm  hover:scale-105 transform transition">
                        <a
                          className="justify-center rounded-xl border flex bg-[#ffffff14] p-4 shadow-xl sm:p-6 lg:p-8"
                          href={sponsor.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >

                          <img src={sponsor.image} className="max-h-40" alt={sponsor.name} />

                          <h3 className="mt-3 text-lg text-left  text-white font-bold sm:text-xl">
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
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="#E94370" className="w-6 h-6">
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
