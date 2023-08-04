const Subscribe = () => {
  return (
    <div className="my-20 px-10 md:px-0">
      <div className="bg-error max-w-[1280px] rounded-xl mx-auto py-20 px-10">
        <div className="flex flex-col items-center gap-5">
          <span className="bg-white p-2 px-3 rounded uppercase font-bold">
            keep updated
          </span>
          <h2 className="text-white text-center font-bold text-4xl md:text-5xl">
            Subscribe and Get 50% off
          </h2>
          <p className="text-white text-xl text-center">
            Lorem ipsum dolor sit amet, consectetur elit.
          </p>

          <div className="bg-white p-1 rounded-lg mt-3 flex">
            <input
              className="pl-4 md:w-[350px] outline-none border-none"
              type="email"
              placeholder="Enter your email address"
            />
            <button className="btn btn-neutral btn-sm text-white">
              subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
