import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Recap = () => {
  return (
    <>
      <section
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <h1 className="text-6xl font-bold text-center pr-40 text-white">Recap Of OneHacks II</h1>
          <div className="grid place-items-center py-8">

            <hr className="h-2 rounded-xl object-center bg-gradient-to-r from-logo1 to-logo2 w-2/3" />
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
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
