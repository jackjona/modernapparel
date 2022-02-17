import React from "react";

import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const contact = () => {
  return (
    <>
      <div className="bg-white dark:bg-slate-900 ">
        <Announcement />
        <Navbar />
        <div className="w-10/12 py-16 mx-auto  md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
          <div className="flex flex-col justify-between">
            <div className="space-y-2">
              <h2 className="dark:text-gray-100 text-4xl font-bold leading-tight lg:text-5xl">
                Let's talk!
              </h2>
              <div className="text-gray-600 dark:text-gray-200">Don&#39;t Hesitate To Contact Us</div>
            </div>
          </div>
          <form
            novalidate=""
            action="https://formspree.io/f/xzbobbpp"
            method="POST"
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="mt-10">
              <label for="name" className="text-lg dark:text-gray-200">
                Full name
              </label>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="w-full p-3 rounded bg-gray-100"
              />
            </div>
            <div>
              <label for="email" className="text-lg dark:text-gray-200">
                Email
              </label>
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded bg-gray-100"
                required
              />
            </div>
            <div>
              <label for="message" className="text-lg dark:text-gray-200">
                Message
              </label>
              <textarea
                name="message"
                rows="3"
                className="w-full p-3 rounded bg-gray-100"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 text-lg font-bold tracking-wide uppercase rounded bg-emerald-600 text-white"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default contact;

