import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/navigation";

// import required modules

import { Mousewheel, Pagination, Navigation } from "swiper";
const faqs = [
  {
    id: 1,
    question: "What is a hackathon?",
    ans: "A hackathon is an event at where codersof all skill levels can come together and create a software project in a limited time.These events are perfect opportunities for you to grow your skills and create connections.",
  },
  {
    id: 2,
    question: "Who can attend?",
    ans: "The event is open to all high schoolers!",
  },
  {
    id: 3,
    question: "Is this an individual event?",
    ans: "No, you can have up to 4 people in a group.Bring some friends with you! If you do not have a group and want to be in one, there will be a group creating meeting after the opening ceremony.",
  },
  {
    id: 4,
    question: "Do I need prior experience?",
    ans: "Nope! Anyone can attend and gain experience working in a coding environment.We'll have workshops and speakers for you to learn about coding languages and other aspects of CS.",
  },
  {
    id: 5,
    question: "Any prizes for winning?",
    ans: "Yes, there are many prizes for the winners and will be announced soon. Additionally, you can view our Devpost page for general participant gifts.Everyone will get something",
  },
  {
    id: 6,
    question: "What is the theme?",
    ans: "The theme will be released during the opening ceremony.",
  },



  // {
  //   id: 52,
  //   name: "TailAdmin",
  //   href: "https://tailadmin.com",
  //   image: "/static/images/icons/globe.svg",
  // },


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

    <section className="pb-10 pt-16 ">
      < div className=" py-8" >
        <h1 className=" text-5xl  sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-center text-white">FAQ</h1>

        <div className="grid place-items-center py-8">

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
              modules={[Pagination, Navigation, Mousewheel]}
              className="mySwiper"

            >
              {faqs.map((faq) => {
                const { question, ans } = faq;

                return (
                  <>

                    <SwiperSlide key={faq.id}>
                      {/* <div className="flex h-screen"> */}
                      <div className="container   min-w-full max-w-sm hover:scale-105 transform transition">
                        <div
                          className="block rounded-xl border  bg-[#ffffff14] p-4 shadow-xl sm:p-6 lg:p-8"

                        >



                          <h3 className="mt-3 text-lg text-left  text-white font-bold sm:text-xl">
                            {question}
                          </h3>

                          <p className="mt-4 text-sm text-left text-body-color">
                            {ans}
                          </p>
                        </div>

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
