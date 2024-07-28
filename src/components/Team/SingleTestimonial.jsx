

const SinglePerson = ({ person }) => {
  const { name, image, designation } = person;



  return (
    <div className="w-full">
      <div
        className="wow fadeInUp rounded-md p-8 shadow-one bg-[#040610] hover:bg-dark hover:scale-105 transition lg:px-5 xl:px-8"
        data-wow-delay=".1s"
      >
        <div className="flex flex-col items-center content-center text-center">
          <div className="relative h-[200px] w-[200px] overflow-hidden">
            <img className="mx-auto" src={image} width={200} alt={name} />
          </div>
          <div className="w-full">
            <h5 className="mb-1 text-lg font-semibold text-white lg:text-xl">
              {name}
            </h5>
            <p className="text-xs text-center text-body-color">{designation}</p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default SinglePerson;
