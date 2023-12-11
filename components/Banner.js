import React from "react";

const Banner = () => {
  return (
    <div className="sm:py-24 max-w-screen-2xl m-auto w-full ">
      <div className="h-96 text-center bg-banner bg-cover bg-center sm:bg-left-top bg-no-repeat text-white dark:text-gray-200">
        <div className="uppercase max-w-lg pt-12 m-auto md:m-0">
          <div className="px-20 pb-5 pt-2 sm:py-6 bg-black bg-opacity-60 sm:bg-opacity-0 sm:backdrop-blur-sm rounded-md">
            <h2 className="pb-6 text-4xl sm:text-5xl font-extrabold drop-shadow-2xl">
              Spending The Holidays At Home
            </h2>
            <p>Enjoy the indoors while wearing comfortable apparel.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
