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
    id: 0,
    name: "",
    href: "https://www.desmos.com/",
    image: "/static/images/sponsors/demos_logo.png",
  },
  {
    id: 1,
    name: "",
    href: "https://www.yubico.com/",
    //Yubico
    image: "static/images/sponsors/Yubicofinal.jpg",
  },
  {
    id: 2,
    name: "",
    href: "https://balsamiq.com/",
    //Balsamiq
    image: "/static/images/sponsors/balsamiq.png",
  },
  {
    id: 3,
    name: "",
    href: "https://codehs.com/",
    //CodeHS
    image: "/static/images/sponsors/codehs.jpg",
  },
  {
    id: 4,
    name: "",
    href: "https://www.interviewcake.com/",
    //InterviewCake
    image: "/static/images/sponsors/interviewcake.png",
  },
  {
    id: 5,
    name: "",
    href: "https://www.langchain.com/",
    //LangChain
    image: "/static/images/sponsors/LangChain-logo.jpg",
  },
  {
    id: 6,
    name: "",
    href: "https://www.voiceflow.com/",
    //Voiceflow
    image: "/static/images/sponsors/Voiceflow-wordmark-light.png",
  },
  {
    id: 7,
    name: "",
    href: "https://www.wolfram.com/language/",
    //Wolfram
    image: "/static/images/sponsors/wplfram.png",
  },
  {
    id: 8,
    name: "",
    href: "https://nordvpn.com/hackathons",
    image: "/static/images/sponsors/NordVPN_Logo_RGB_Primary_White (1).png",
    rel: "nofollow sponsored"
    //NordVPN 
    //IMPORTANT TO ADD RELLLL!!!!! CHECK W AAYAN JUST TO MAKE SURE
  },
  {
    id: 9,
    name: "",
    href: "https://incogni.com/",
    //Incogni
    image: "/static/images/sponsors/incogni white (3).png",
  },
  {
    id: 10,
    name: "",
    href: "https://nordpass.com/",
    //NordPass
    image: "/static/images/sponsors/NordPass-white-horizontal (1).png",
  },
  {
    id: 11,
    name: "",
    href: "https://codecrafters.io/",
    //CodeCrafter
    image: "/static/images/sponsors/codecrafters.png",
  },
  {
    id: 12,
    name: "",
    href: "https://saily.com/",
    //saily
    image: "/static/images/headshots/saily-logo-white (2).png",
  },
  // {
  //   id: 13,
  //   name: "",
  //   href: "https://artofproblemsolving.com/?srsltid=AfmBOoqQ42oYyvRYvzwAzrDMQZzxIAgU7RcI8J_ZfHjg5u4qfW2fdC95",
  //   //AOPS
  //   image: "/static/images/headshots/aops_logo_pf.png",
  // },
  {
    id: 13,
    name: "",
    href: "https://vueschool.io/",
    image: "/static/images/sponsors/vieschool.png",
  },
  {
    id: 14,
    name: "",
    href: "https://cleanshot.com/",
    image: "/static/images/sponsors/cleanshotx.png",
  },
  {
    id: 15,
    name: "",
    href: "https://artofproblemsolving.com/",
    image: "/static/images/sponsors/aops.png",
    //image: "/static/images/sponsors/aops_logo_pf.png",
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
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="#BDB8E9" className="w-6 h-6">
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
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="#EBD7FD" className="w-6 h-6">
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
