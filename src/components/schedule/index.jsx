// Import Swiper styles


// const Schedule = () => {

//   return (

//     <section className=" pt-16 ">
//       < div className=" py-8" >
//         <h1 className=" text-5xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-left pl-[12%] text-white">Schedule</h1>

//         <div className="grid place-items-center pr-[40%] py-8">

//           <hr className="gradient-line w-3/5" />
//         </div>
//       </div >
//       <div className="container">
//         <h3 className="text-white" >*All Times in PST</h3>

//         <div className="flex items-center justify-center">
//           <img src="/static/images/schedule/schedule.png" alt="Schedule" className="max-w-full max-h-full" />
//         </div>
//         {/* <h3 className="text-white text-right" >*Workshops will be announced soon</h3> */}

//       </div >

//     </section >
//   );
// };

const Schedule = () => {
  return (
    <section className="pt-12">
      <div className="pb-6">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-left pl-[12%] text-white">
          Schedule
        </h1>
        <div className="grid place-items-center pr-[40%] py-4">
          <hr className="gradient-line w-3/5" />
        </div>
      </div>
      <div className="container text-center">
        <div className="relative flex items-center justify-center min-h-[300px]">
          {/* Shadow element that just covers the text with a little extra */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-[65%] sm:w-[70%] lg:w-[50%] h-[3rem] sm:h-[3.5rem] lg:h-[4rem] rounded-full blur-2xl opacity-50 bg-gradient-to-r from-[#BDB8E9] to-[#EBD7FD]"></div>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-semibold bg-gradient-to-r from-[#BDB8E9] to-[#EBD7FD] bg-clip-text text-transparent drop-shadow-md shadow-white z-10">
            To be announced soon!
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Schedule;





