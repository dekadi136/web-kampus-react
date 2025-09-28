import {
  Home,
  Users,
  BookOpen,
  Layers,
  Info,
  Menu,
  ChevronLeft,
} from "lucide-react";
import { useState } from "react";

import { Link } from "react-router";

type sideBarProps = {};

const sideBar = ({}) => {
  const [isCollapsed, setIsCollapse] = useState(false);

  const toggleSidebar = () => {
    setIsCollapse(!isCollapsed);
  };

  return (
    <div
      className={`${
        isCollapsed ? "w-20" : "w-64"
      } h-screen bg-slate-50 flex flex-col shadow-xl border-r border-slate-200 transition-all duration-300 ease-in-out`}
    >
      {/* Header */}
      <div className="px-4 py-8 bg-blue-600 text-white relative">
        <div className={`${isCollapsed ? "text-center" : ""}`}>
          {!isCollapsed ? (
            <div>
              <h1 className="text-2xl font-semibold tracking-wide">
                Primakara
              </h1>
              <p className="text-blue-100 text-sm mt-1 font-medium">
                Education Portal
              </p>
            </div>
          ) : (
            <div className="text-2xl font-bold">P</div>
          )}
        </div>

        {/* Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="absolute -right-3 top-1/2 transform -translate-y-1/2 bg-white text-blue-600 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
        >
          {isCollapsed ? <Menu size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-3 py-6 space-y-1">
        <div className="px-4 py-3 text-slate-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium group relative">
          <Link to="/dashboard-mahasiswa" className="flex items-center gap-3">
            <Home
              size={20}
              className="text-slate-500 group-hover:text-blue-600 flex-shrink-0"
            />
            {!isCollapsed && "Dashboard"}
            {isCollapsed && (
              <div className="absolute left-full ml-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                Dashboard
              </div>
            )}
          </Link>
        </div>

        <div className="px-4 py-3 text-slate-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium group relative">
          <Link to="/daftar-mahasiswa" className="flex items-center gap-3">
            <Home
              size={20}
              className="text-slate-500 group-hover:text-blue-600 flex-shrink-0"
            />
            {!isCollapsed && "Daftar Mahasiswa"}
            {isCollapsed && (
              <div className="absolute left-full ml-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                Daftar Mahasiswa
              </div>
            )}
          </Link>
        </div>

        <div className="px-4 py-3 text-slate-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium group relative">
          <Link to="/daftar-tugas" className="flex items-center gap-3">
            <Home
              size={20}
              className="text-slate-500 group-hover:text-blue-600 flex-shrink-0"
            />
            {!isCollapsed && "Daftar Tugas"}
            {isCollapsed && (
              <div className="absolute left-full ml-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                Daftar Tugas
              </div>
            )}
          </Link>
        </div>
        <div className="px-4 py-3 text-slate-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium group relative">
          <Link to="/daftar-kelas" className="flex items-center gap-3">
            <Home
              size={20}
              className="text-slate-500 group-hover:text-blue-600 flex-shrink-0"
            />
            {!isCollapsed && "Daftar Kelas"}
            {isCollapsed && (
              <div className="absolute left-full ml-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                Daftar Kelas
              </div>
            )}
          </Link>
        </div>

        <div className="px-4 py-3 text-slate-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium group relative">
          <Link to="/info" className="flex items-center gap-3">
            <Home
              size={20}
              className="text-slate-500 group-hover:text-blue-600 flex-shrink-0"
            />
            {!isCollapsed && "Info"}
            {isCollapsed && (
              <div className="absolute left-full ml-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                Info
              </div>
            )}
          </Link>
        </div>
      </nav>

      {/* Footer */}
      <div
        className={`px-4 py-4 border-t border-slate-200 bg-slate-25 ${
          isCollapsed ? "text-center" : ""
        }`}
      >
        {!isCollapsed ? (
          <div>
            <p className="text-xs text-slate-500 font-medium">
              © 2025 Primakara University
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Education Management System
            </p>
          </div>
        ) : (
          <p className="text-xs text-slate-500 font-bold">©2025</p>
        )}
      </div>
    </div>
  );
};

export default sideBar;
