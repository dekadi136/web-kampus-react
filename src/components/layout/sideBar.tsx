import {
  Home,
  Users,
  BookOpen,
  School,
  Info,
  ChevronLeft,
  Menu,
} from "lucide-react";
import { useState } from "react";

import { Link } from "react-router";

const Sidebar = () => {
  const [isCollapsed, setIsCollapse] = useState(false);

  const toggleSidebar = () => {
    setIsCollapse(!isCollapsed);
  };

  const menuItems = [
    { icon: Home, label: "Dashboard", path: "/dashboard-mahasiswa" },
    { icon: Users, label: "Daftar Mahasiswa", path: "/daftar-mahasiswa" },
    { icon: BookOpen, label: "Daftar Tugas", path: "/daftar-tugas" },
    { icon: School, label: "Daftar Kelas", path: "/daftar-kelas" },
    { icon: Info, label: "Info", path: "/info" },
  ];

  return (
    <div
      className={`${
        isCollapsed ? "w-20" : "w-64"
      } h-screen bg-slate-800 flex flex-col transition-all duration-300 ease-in-out`}
    >
      {/* Header */}
      <div className="px-6 py-6 border-b border-slate-700 relative">
        <div className={`${isCollapsed ? "text-center" : ""}`}>
          {!isCollapsed ? (
            <div>
              <h1 className="text-xl font-semibold text-white">Primakara</h1>
              <p className="text-slate-400 text-sm mt-0.5">Education Portal</p>
            </div>
          ) : (
            <div className="text-xl font-semibold text-white">P</div>
          )}
        </div>

        {/* Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="absolute -right-3 top-1/2 transform translate-y-1 bg-slate-700 text-slate-300 rounded-full p-1.5 border border-slate-600 hover:bg-slate-600 hover:text-white transition-colors duration-200"
        >
          {isCollapsed ? <Menu size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="px-3 py-2.5 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors duration-200 cursor-pointer group relative"
            >
              <Link to={item.path}>
                <div className="flex items-center gap-3">
                  <Icon
                    size={20}
                    className="text-slate-400 group-hover:text-blue-400 flex-shrink-0"
                  />
                  {!isCollapsed && (
                    <span className="text-sm font-medium">{item.label}</span>
                  )}
                  {isCollapsed && (
                    <div className="absolute left-full ml-2 px-3 py-2 bg-slate-700 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10 pointer-events-none border border-slate-600">
                      {item.label}
                    </div>
                  )}
                </div>
              </Link>
            </div>
          );
        })}
      </nav>

      {/* Footer */}
      <div
        className={`px-4 py-4 border-t border-slate-700 ${
          isCollapsed ? "text-center" : ""
        }`}
      >
        {!isCollapsed ? (
          <div>
            <p className="text-xs text-slate-400 font-medium">
              © 2025 Primakara University
            </p>
            <p className="text-xs text-slate-500 mt-0.5">
              Education Management System
            </p>
          </div>
        ) : (
          <p className="text-xs text-slate-400 font-semibold">©25</p>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
