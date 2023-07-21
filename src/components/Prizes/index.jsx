
const prizes = ["1st", "2nd", "3rd", "beginner", "creative", "impact", "swag"]
const Pricing = () => {

  return (
    <section className=" pt-16 ">
      < div className=" py-8" >
        <h1 className=" text-5xl grad-text sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-center text-white">PRIZES</h1>

        <div className="grid place-items-center py-8">

          <hr className="gradient-line w-3/5" />
        </div>
      </div >
      <div className="flex flex-wrap justify-center">
        {prizes.map((prize) => (
          <div className=" px-2 py-3  ">
            <img src={`/static/images/prizes/${prize}.jpg`} alt="Prize" className="rounded-[50px] max-w-sm transition-all hover:scale-[120%]" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;