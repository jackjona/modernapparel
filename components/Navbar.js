import React from "react";

const Navbar = () => {
  return (
    <header className="text-gray-600 dark:text-gray-200 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="32" height="32" rx="16" fill="#047857" />
            <path d="M18.5 24L1.5 24" stroke="white" strokeWidth="2" />
            <path d="M29.5 8L14 8" stroke="white" strokeWidth="2" />
            <line
              y1="-1"
              x2="18.0942"
              y2="-1"
              transform="matrix(0.415206 -0.909728 0.909728 0.415204 8.47314 24.2705)"
              stroke="white"
              strokeWidth="2"
            />
            <path
              d="M17.6466 24.1787L24.2891 8.047"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
          <span className="ml-3 text-xl dark:text-gray-200">Modern Apparel</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <a
            className="mr-5 hover:text-gray-900 border-black hover:border-b-2"
            href="/"
          >
            Home
          </a>
          <a
            className="mr-5 hover:text-gray-900 border-black hover:border-b-2"
            href="https://shop.modernapparel.ga/"
          >
            New
          </a>
          <a
            className="mr-5 hover:text-gray-900 border-black hover:border-b-2"
            href="https://shop.modernapparel.ga/search/mens-apparel"
          >
            Mens
          </a>
          <a
            className="mr-5 hover:text-gray-900 border-black hover:border-b-2"
            href="https://shop.modernapparel.ga/search/womens-apparel"
          >
            Womens
          </a>
          <a
            className="mr-5 hover:text-gray-900 border-black hover:border-b-2"
            href="https://shop.modernapparel.ga/search/accessories"
          >
            Accessories
          </a>
        </nav>
        <a
          className="inline-flex items-center bg-emerald-500 border-0 py-2 px-3 focus:outline-none hover:bg-emerald-400 rounded text-gray-100 text-base mt-4 md:mt-0 font-bold cursor-pointer"
          href="https://shop.modernapparel.ga/search"
        >
          Shop Now
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1 animate-none sm:animate-ping"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </header>
  );
};

export default Navbar;

