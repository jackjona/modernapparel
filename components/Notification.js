import React from "react";

const Notification = () => {
  return (
    <div className="overflow-hidden relative animate-hideme">
      <div className="notification-box flex flex-col items-center justify-center fixed w-full z-50 p-3">
        <div className="relative flex items-center bg-green-500 text-white text-sm font-bold px-4 py-3 rounded-md transform transition-all duration-500 mb-1 opacity-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <p>Your Message Was Successfully Sent!</p>
        </div>
      </div>
    </div>
  );
};

export default Notification;

