import React from "react";

import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const contact = () => {
  return (
    <>
    <Announcement />
    <Navbar />
    <div class="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
      <div class="flex flex-col justify-between">
        <div class="space-y-2">
          <h2 class="text-4xl font-bold leading-tight lg:text-5xl">
            Let's talk!
          </h2>
          <div class="text-gray-600">Don't Hesitate To Contact Us</div>
        </div>
      </div>
      <form
        novalidate=""
        action="https://formspree.io/f/xzbobbpp"
        method="POST"
        class="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div>
          <label for="name" class="text-lg">
            Full name
          </label>
          <input
            name="name"
            type="text"
            placeholder="Name"
            class="w-full p-3 rounded bg-gray-100"
          />
        </div>
        <div>
          <label for="email" class="text-lg">
            Email
          </label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            class="w-full p-3 rounded bg-gray-100"
            required
          />
        </div>
        <div>
          <label for="message" class="text-lg">
            Message
          </label>
          <textarea
            name="message"
            rows="3"
            class="w-full p-3 rounded bg-gray-100"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          type="submit"
          class="w-full p-3 text-lg font-bold tracking-wide uppercase rounded bg-emerald-600 text-white"
        >
          Send Message
        </button>
      </form>
    </div>
    <Footer />
    </>
  );
};

export default contact;

