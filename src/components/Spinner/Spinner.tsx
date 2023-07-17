import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center w-full h-[50vh]">
      <span className="loading loading-dots loading-lg"></span>
    </div>
  );
};

export default Spinner;
