import model from "./../../assets/images/model.jpg";

const Exclusive = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-10 lg:gap-20 xl:gap-32 px-10  max-w-[1280px] mx-auto">
        <div className="md:w-[50%] flex justify-center md:justify-end pt-20">
          <img className="w-[70%] md:w-[90%] rounded-lg" src={model} alt="" />
        </div>
        <div className="md:w-[50%] flex flex-col justify-center gap-4">
          <div>
            <span className="bg-white p-2 px-3 rounded">
              Hundreds of Book Genres
            </span>
          </div>
          <h2 className="font-bold text-2xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-6xl ">
            BookFair has a big catalog of 12 Million books online
          </h2>
          <p className="text-lg sm:text-xl md:text-lg xl:text-2xl text-gray-600">
            Efficiently unleash cross-media information without cross-media
            value. Quickly maximize timely deliverables for real-time schemas.
            Dramatically maintain clicks-and-mortar solutions without functional
            solutions.
          </p>
          <div>
            <button className="btn btn-neutral text-white">Browse Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exclusive;
