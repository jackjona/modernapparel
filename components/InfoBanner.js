import React from "react";

const InfoBanner = () => {
  return (
    <div className=" dark:bg-slate-800 border-solid border-2 border-gray-500 dark:text-gray-200 max-w-full m-auto justify-center sm:py-24">
      <div className="p-10 sm:p-0 sm:h-60 flex flex-col sm:flex-row items-center text-center font-mono">
        <div className="flex flex-col sm:flex-1 h-3/4 p-10 sm:p-0 justify-center sm:border-r-2 border-gray-500">
          <img
            className="sm:h-28 h-12"
            src="/images/delivery.svg"
            alt="Delivery Truck"
          />
          <h2 className="pt-4">Free Shipping On Orders $50+</h2>
          <a
            className="p-2 text-sm underline"
            href="https://modernapparel.vercel.app/en-US/free-shipping"
          >
            Learn More
          </a>
        </div>
        <div className="flex flex-col sm:flex-1 h-3/4 p-10 sm:p-0 justify-center sm:border-r-2 border-gray-500">
          <img
            className="sm:h-28 h-12"
            src="/images/return.svg"
            alt="packing box"
          />
          <h2 className="pt-4">Extended Returns</h2>
          <a
            className="p-2 text-sm underline"
            href="https://modernapparel.vercel.app/en-US/extended-returns"
          >
            Learn More
          </a>
        </div>
        <div className="flex flex-col sm:flex-1 h-3/4 p-10 sm:p-0 justify-center sm:border-r-2 border-gray-500">
          <img
            className="sm:h-28 h-12"
            src="/images/tracking.svg"
            alt="package tracking"
          />
          <h2 className="pt-4">Track Your Order</h2>
          <a
            className="p-2 text-sm underline"
            href="https://www.canadapost-postescanada.ca/track-reperage/en#/home"
          >
            Click Here
          </a>
        </div>
        <div className="flex flex-col flex-1 h-3/4 p-10 sm:p-0 justify-center">
          <img
            className="sm:h-28 h-12"
            src="/images/giftcard.svg"
            alt="gift card"
          />
          <h2 className="pt-4">Gift Cards</h2>
          <a
            className="p-2 text-sm underline"
            href="https://modernapparel.vercel.app/en-US/gift-cards"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoBanner;
