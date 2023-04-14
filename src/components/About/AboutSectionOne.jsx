import SectionTitle from "../Common/SectionTitle";


const AboutSectionOne = () => {


  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className=" py-8">
          <h1 className=" text-3xl  sm:text3xl lg:text-4xl xl:text-5xl  text-center text-white">
            <span className="font-bold grad-text">OneHacks II</span> is a completely free virtual hackathon, open to all high school students. No previous coding experience is required!

          </h1>
          <br />
          <br /><br />
          <h1 className=" text-3xl font-semibold  sm:text3xl lg:text-4xl xl:text-5xl  text-center text-white">

            Our main mission is to provide <span className="font-bold grad-text">aspiring coders</span> more opportunities for  <span className="font-bold grad-text">software</span> and  <span className="font-bold grad-text">career development</span>, so they can take their projects to the next level and lead to a more  <span className="font-bold grad-text">innovative</span> future.
          </h1>

          <div className="grid place-items-center py-8">

            {/* <hr className="gradient-line w-4/5" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
