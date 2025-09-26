import { Home, Users, BookOpen, Layers, Info } from "lucide-react";

type sideBarProps = {};

const sideBar = ({}) => {
  return (
    <div className="w-64 h-screen bg-blue-700 text-white flex flex-col shadow-lg">
      {/* Header */}
      <div className="p-6 text-2xl font-bold border-b border-blue-500">
        Primakara
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 space-y-3">
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-blue-600 transition"
        >
          <Home size={20} /> Dashboard
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-blue-600 transition"
        >
          <Users size={20} /> Daftar Mhs
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-blue-600 transition"
        >
          <BookOpen size={20} /> Daftar Tugas
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-blue-600 transition"
        >
          <Layers size={20} /> Daftar Kelas
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-blue-600 transition"
        >
          <Info size={20} /> Info
        </a>
      </nav>

      {/* Footer */}
      <div className="p-4 text-xs text-blue-200 border-t border-blue-500">
        © 2025 Primakara
      </div>
    </div>
  );
};

export default sideBar;
