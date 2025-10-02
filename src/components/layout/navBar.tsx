import { useState } from "react";
import { ChevronDown, User, LogOut } from "lucide-react";

export default function TopNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-slate-200 shadow-xl px-6 py-3 flex justify-between items-center">
      {/* Left: Title */}
      <h1 className="font-semibold text-lg text-black">Dashboard</h1>

      {/* Right: Profile + Dropdown */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 focus:outline-none hover:bg-slate-700 hover:text-slate-200 px-3 py-2 rounded-lg transition-colors duration-200"
        >
          {/* Avatar Circle */}
          <div className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center">
            <span className="text-slate-300 text-sm font-medium">NM</span>
          </div>
          <span className="font-medium text-sm">NamaMhs</span>
          <ChevronDown
            size={16}
            className={`text-slate-400 transform transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown */}
        {open && (
          <div className="absolute right-0 mt-2 w-48 bg-slate-700 border border-slate-600 rounded-lg overflow-hidden z-10">
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-200 hover:bg-slate-600 hover:text-white transition-colors duration-200"
            >
              <User size={16} className="text-slate-400" />
              Profile
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-200 hover:bg-slate-600 hover:text-white transition-colors duration-200 border-t border-slate-600"
            >
              <LogOut size={16} className="text-slate-400" />
              Logout
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
