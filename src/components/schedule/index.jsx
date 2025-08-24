import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Schedule = () => {
  return (
    <section className="pt-4">
      <div className="py-4">
        <h1 className="text-5xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-left pl-[12%] text-white">
          Schedule
        </h1>

        <div className="grid place-items-center pr-[40%] py-8">
          <hr className="gradient-line w-3/5" />
        </div>
      </div>

      <div className="container">
        <div className="flex items-center justify-center">
        <img
          src="/static/images/schedule/Website_schedule.png"
          alt="Schedule"
          className="w-[1000px] h-auto"
        />
        </div>
      </div>
    </section>
  );
};

export default Schedule;
