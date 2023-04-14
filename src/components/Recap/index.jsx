import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Recap = () => {
  return (
    <>
      <section
        id="features"
        className=" py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <div className=" py-8">
            <h1 className=" text-5xl pl-[10%] sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-left text-white">Recap Of OneHacks II</h1>

            <div className="grid place-items-center py-8">

              <hr className="gradient-line w-4/5" />
            </div>
          </div>
          <div className="pl-[20%] grid grid-cols-1 gap-x-8 gap-y-14  md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Recap;
