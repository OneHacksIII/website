// Import Swiper styles


const Schedule = () => {

  return (

    <section className=" pt-16 ">
      < div className=" py-8" >
        <h1 className=" text-5xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-left pl-[12%] text-white">Schedule</h1>

        <div className="grid place-items-center pr-[40%] py-8">

          <hr className="gradient-line w-3/5" />
        </div>
      </div >
      <div className="container">
        <h3 className="text-white" >*All Times in PST</h3>

        <div className="flex items-center justify-center">
          <img src="/static/images/schedule/schedule.png" alt="Schedule" className="max-w-full max-h-full" />
        </div>
        {/* <h3 className="text-white text-right" >*Workshops will be announced soon</h3> */}

      </div >

    </section >
  );
};

export default Schedule;
