import React, { useState } from "react";

export default function TopNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-white shadow px-6 py-3 flex justify-between items-center">
      {/* Left: Title */}
      <h1 className="font-semibold text-lg text-gray-700">Dashboard</h1>

      {/* Right: Profile + Dropdown */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 focus:outline-none"
        >
          {/* Avatar Circle */}
          <div className="w-8 h-8 rounded-full bg-gray-300"></div>
          <span className="text-gray-700 font-medium">NamaMhs</span>
          <svg
            className={`w-4 h-4 text-gray-600 transform transition ${
              open ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Dropdown */}
        {open && (
          <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg py-2 z-10">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Profile
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Logout
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
