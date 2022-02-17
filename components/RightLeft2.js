import React from "react";

const RightLeft2 = () => {
  return (
    <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
      <div className="flex flex-wrap items-center mx-auto max-w-7xl">
        <div className="flex flex-col items-center lg:items-start mt-12 mb-0 sm:mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0 m-auto pb-16 sm:pb-20">
          <span className="mb-8 text-xs font-bold text-emerald-600 uppercase animate-none sm:animate-pulse">
            
            Everyday Comfort
          </span>
          <h1 className=" mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 dark:text-neutral-200 md:text-7xl lg:text-5xl uppercase ">
            
            Casual Comfort
          </h1>
          <p className="mb-8 text-base leading-relaxed text-center md:text-left text-gray-500 dark:text-gray-200 capitalize max-w-full lg:max-w-sm">
            
            Clothes that are so comfortable you&#39;ll be wanting to wear them
            everywhere.
          </p>
          <div className="mt-0 lg:mt-6 max-w-7xl sm:flex">
            <div className="mt-3 rounded-lg sm:mt-0">
              <a href="https://shop.modernapparel.ga/search">
                <button
                  className="
                    items-center
                    block
                    px-10
                    py-3.5
                    text-base
                    font-medium
                    text-center text-emerald-600
                    transition
                    duration-500
                    ease-in-outs
                    transform
                    border-2 border-emerald-600
                    shadow-md
                    rounded-xl
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-gray-500
                    hover:bg-emerald-600
                    hover:text-white
            
                  "
                >
                  
                  View More
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
          <div>
            <div className="relative w-full max-w-lg m-auto">
              <div className="absolute top-0 rounded-full bg-green-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
              <div className="absolute rounded-full bg-green-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 "></div>
              <div className="relative">
                <img
                  className="object-cover object-center mx-auto rounded-lg shadow-2xl"
                  alt="person wearing emerald sweatpants"
                  src="/images/rightleft2.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightLeft2;

