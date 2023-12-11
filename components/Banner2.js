import React from "react";

const Banner2 = () => {
  return (
    <div className="py-40">
      <div className="relative h-96 max-w-screen-2xl m-auto text-center bg-banner2 text-blue-800 dark:text-blue-600">
        <div className="transform -translate-x-2/4 -translate-y-2/4 absolute top-2/4 left-1/2 uppercase">
          <div className="sm:px-20 px-4 py-2 sm:py-6 rounded-md bg-white dark:bg-slate-800">
            <h2 className="pb-2 text-4xl sm:text-5xl font-extrabold drop-shadow-2xl">
              <span className="text-red-600">Give</span> The{" "}
              <span className="text-green-600">Gift</span> Of{" "}
              <span className="text-green-600">Giving</span> This{" "}
              <span className="text-red-600">Holiday</span> Season
            </h2>
            <p className="pt-4 text-gray-900 dark:text-gray-200">
              <span className="font-semibold">Donate</span> to the Canadian Red
              Cross, a nonprofit giving individuals clothing to stay warm
              throught the winter.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
