import React from "react";

const ProductGrid = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center text-center sm:py-24 max-w-full uppercase">
      <div className="relative padding px-3 py-12">
        <img
          className="z-0 opacity-90 h-xl transform transition duration-500 hover:none sm:hover:scale-110"
          src="/images/grid1.jpg"
          alt="man wearing jacket sitting on couch"
        />
        <div className="pt-6 transform -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2 absolute">
          <p className="pb-8 text-white text-4xl font-extrabold drop-shadow-2xl">
            Outerwear
          </p>
          <a
            href="https://modernapparel.vercel.app/search"
            className="inline-flex items-center justify-center h-12 mt-1/2 px-9 py-6 font-semibold  border-transparent rounded-lg text-gray-900 bg-white hover:bg-gray-200"
          >
            Shop Now
          </a>
        </div>
      </div>
      <div className="relative padding px-3 py-12">
        <img
          className="z-0 opacity-80 h-xl transform transition duration-500 hover:none sm:hover:scale-110"
          src="/images/grid2.jpg"
          alt="women wearing knitted scarf and hat"
        />
        <div className="pt-6 transform -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2 absolute">
          <p className="pb-8 text-black text-4xl font-extrabold drop-shadow-2xl">
            Knitwear
          </p>
          <a
            href="https://modernapparel.vercel.app/search"
            className="inline-flex items-center justify-center h-12 mt-1/2 px-9 py-6 font-semibold  border-transparent rounded-lg text-white bg-gray-900 hover:bg-gray-800"
          >
            Shop Now
          </a>
        </div>
      </div>
      <div className="relative padding px-3 py-12">
        <img
          className="z-0 opacity-70 h-xl transform transition duration-500 hover:none sm:hover:scale-110"
          src="/images/grid3.jpg"
          alt="man wearing polo shirt sitting"
        />
        <div className="pt-0 transform -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2 absolute">
          <p className="pb-5 text-black text-4xl font-extrabold drop-shadow-2xl">
            Business Casual
          </p>
          <a
            href="https://modernapparel.vercel.app/search"
            className="inline-flex items-center justify-center h-12 mt-1/2 px-9 py-6 font-semibold  border-transparent rounded-lg text-white bg-gray-900 hover:bg-gray-800"
          >
            Shop Now
          </a>
        </div>
      </div>
      <div className="relative padding px-3 py-12">
        <img
          className="z-0 opacity-90 sm:h-xl transform transition duration-500 hover:none sm:hover:scale-110"
          src="/images/grid4.jpg"
          alt="woman wearing lougewear relaxing"
        />
        <div className="pt-6 transform -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2 absolute">
          <p className="pb-8 text-white text-4xl font-extrabold drop-shadow-2xl">
            Loungewear
          </p>
          <a
            href="https://modernapparel.vercel.app/search"
            className="inline-flex items-center justify-center h-12 mt-1/2 px-9 py-6 font-semibold  border-transparent rounded-lg text-gray-900 bg-white hover:bg-gray-200"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
