import React from "react";

const NewsletterSuccess = () => {
  return (
    <div className="bg-indigo-900 relative overflow-hidden h-screen">
      <img
        src="/images/confirmation.svg"
        className="absolute h-full w-full object-cover"
        alt="snow mountain illustration"
      />
      <div className="inset-0 bg-black opacity-25 absolute"></div>

      <header className="absolute top-0 left-0 right-0 z-20">
        <nav className="container mx-auto px-6 md:px-12 py-4">
          <div className="md:flex justify-between items-center">
            <div className="flex justify-between items-center">
              <a href="/" className="text-white">
                {/*<svg
                  className="w-8 mr-2 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Capa 1"
                  viewBox="0 0 16.16 12.57"
                >
                  <defs></defs>
                  <path d="M14.02 4.77v7.8H9.33V8.8h-2.5v3.77H2.14v-7.8h11.88z"></path>
                  <path d="M16.16 5.82H0L8.08 0l8.08 5.82z"></path>
                </svg>*/}
              </a>
              <div className="md:hidden">
                <button className="text-white focus:outline-none">
                  {/*<svg
                    className="h-12 w-12"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6H20M4 12H20M4 18H20"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>*/}
                </button>
              </div>
            </div>
          </div>
        </nav>
        <section>
          <div className="animate-none sm:animate-pulse relative items-center w-full px-5 py-18 mx-auto  md:px-12 lg:px-24 max-w-7xl">
            <div className="p-6 border-l-4 border-green-500 -6 rounded-r-xl bg-green-50">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-green-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div className="ml-3">
                  <div className="text-sm text-green-600 capitalize">
                    <p> Your subscription has been confirmed. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-96 xl:py-40">
        <div className="lg:w-3/5 xl:w-2/5 flex flex-col items-start relative z-10">
          <span className="hidden ont-bold uppercase text-green-400">
            Confirmation
          </span>
          <h1 className="font-bold text-6xl sm:text-7xl text-white leading-tight mt-4">
            Thank You For Subscribing!
          </h1>
          <a
            href="/"
            className="animate-none sm:animate-bounce block bg-white hover:bg-gray-100 py-3 px-4 rounded-lg text-lg text-gray-800 font-bold uppercase mt-10"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSuccess;

