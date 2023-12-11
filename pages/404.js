import Image from "next/image";
import Link from "next/link";
import React from "react";

const Custom404 = () => {
  return (
    <div className="bg-white dark:bg-slate-900">
      <main className=" relative overflow-hidden h-screen">
        <header className="absolute top-0 left-0 right-0 z-20">
          <nav className="container mx-auto px-6 md:px-12 py-4">
            <div className="md:flex justify-between items-center">
              <div className="flex justify-between items-center">
                {/*<div className="md:hidden">
                    <button className="text-gray-800 focus:outline-none">
                      <svg
                        className="h-12 w-12"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 6H20M4 12H20M4 18H20"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>
                  </div>*/}
              </div>
            </div>
          </nav>
        </header>
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32">
          <div className="container mx-auto px-6 flex flex-col justify-between items-center relative">
            <div className="flex w-full items-center justify-center space-x-12 flex-col md:flex-row mb-16 md:mb-8">
              <h1 className="font-thin text-center text-6xl text-gray-800 dark:text-white">
                GOT LOST ?
              </h1>
              <Link href="/">
                <a className="text-black dark:text-gray-200 px-3 py-2 w-32 font-light transition ease-in duration-200 uppercase hover:bg-emerald-600 hover:text-white dark:hover:text-gray-100 border-b text-2xl border-green-600 focus:outline-none">
                  Go Home
                </a>
              </Link>
            </div>
            <div>
              <Image
                src="/images/lost.png"
                className="h-full w-full"
                alt="image of person lost"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Custom404;
