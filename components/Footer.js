import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-900 body-font border-t-10 pt-5 border-black">
      <div className="container px-5 py-24 mx-auto capitalize">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-black dark:text-gray-100 tracking-widest text-sm mb-3 uppercase">
              Navigation
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
                  href="https://shop.modernapparel.ga"
                >
                  All Products
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
                  href="/faq"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
                  href="https://shop.modernapparel.ga/en-US/about-us"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
                  href="/contact"
                >
                  Contact
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-black dark:text-gray-100 tracking-widest text-sm mb-3 uppercase">
              Helpful Information
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
                  href="https://shop.modernapparel.ga/en-US/free-shipping"
                >
                  Free Shipping Information
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
                  href="https://shop.modernapparel.ga/en-US/extended-returns"
                >
                  Extended Returns
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
                  href="https://shop.modernapparel.ga/en-US/gift-cards"
                >
                  Gift Cards
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
                  href="https://www.canadapost-postescanada.ca/track-reperage/en#/home"
                >
                  Track Your Order
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-black dark:text-gray-100 tracking-widest text-sm mb-3 uppercase">
              Policies
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
                  href="https://shop.modernapparel.ga/en-US/return-policy"
                >
                  Return Policy
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
                  href="https://shop.modernapparel.ga/en-US/shipping-policy"
                >
                  Shipping Policy
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
                  href="https://shop.modernapparel.ga/en-US/privacy-policy"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
                  href="https://shop.modernapparel.ga/en-US/terms-and-conditions"
                >
                  Terms & Conditions
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-black dark:text-gray-100 tracking-widest text-sm mb-3 uppercase">
              Never Miss A Deal
            </h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <form
                  name="newsletter-signup"
                  method="POST"
                  data-netlify="true"
                  action="/newsletter-success"
                >
                  <input
                    type="hidden"
                    name="form-name"
                    value="newsletter-signup"
                  />
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="email w-full bg-gray-100 dark:bg-gray-300  bg-opacity-50 rounded border border-gray-300 dark:border-gray-200 focus:bg-transparent focus:ring-2 focus:ring-emerald-200 focus:border-emerald-500 text-base outline-none text-gray-700 dark:text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                    <button
                      type="submit"
                      value="Subscribe"
                      className="mt-4 lg:mt-2 xl:mt-4 flex-shrink-0 inline-flex text-white bg-emerald-500 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-600 rounded"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <p className="text-gray-500 dark:text-gray-200 text-sm mt-2 md:text-left text-center">
              By signing up you agree to our &nbsp;
              <a
                href="https://shop.modernapparel.ga/terms-and-conditions"
                className="underline"
              >
                Terms & Conditions
              </a>
              .
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 dark:bg-gray-900">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-bold items-center md:justify-start justify-center text-black dark:text-gray-100">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              className="animate-none sm:animate-pulse"
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

            <span className="ml-3 text-xl">Modern Apparel</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
            &copy; {new Date().getFullYear()} Modern Apparel, Inc. All rights
            reserved.
            <a href="/"></a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

