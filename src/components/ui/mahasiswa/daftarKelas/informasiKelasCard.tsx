import React, { useState } from "react";

type Student = {
  name: string;
  nim: string;
  status?: string;
};

type Task = {
  title: string;
  deadline: string;
};

export default function InformasiKelasCard() {
  const [activeTab, setActiveTab] = useState("Mahasiswa");

  // === DATA CONTOH ===
  const course = {
    name: "Machine Learning",
    room: "Ruang RPL",
    lecturer: "I Kadek Sumartane",
    totalStudents: 25,
    totalTasks: 3,
  };

  const students: Student[] = [
    { name: "Made Adi", nim: "21001" },
    { name: "Komang Putra", nim: "21002" },
    { name: "Kadek Luh", nim: "21003" },
  ];

  const tasks: Task[] = [
    { title: "Tugas 1: KNN", deadline: "7 Hari" },
    { title: "Tugas 2: CNN", deadline: "14 Hari" },
  ];

  const banned: Student[] = [
    { name: "Nyoman Budi", nim: "21005", status: "Banned" },
  ];

  const korti: Student[] = [
    { name: "Made Adi", nim: "21001", status: "Korti" },
  ];

  const renderTable = () => {
    switch (activeTab) {
      case "Mahasiswa":
        return (
          <table className="w-full border border-gray-200 text-left text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2">Nama</th>
                <th className="p-2">NIM</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s, i) => (
                <tr key={i} className="border-t">
                  <td className="p-2">{s.name}</td>
                  <td className="p-2">{s.nim}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      case "Tugas":
        return (
          <table className="w-full border border-gray-200 text-left text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2">Judul</th>
                <th className="p-2">Deadline</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((t, i) => (
                <tr key={i} className="border-t">
                  <td className="p-2">{t.title}</td>
                  <td className="p-2">{t.deadline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      case "Banned":
        return (
          <table className="w-full border border-gray-200 text-left text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2">Nama</th>
                <th className="p-2">NIM</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {banned.map((b, i) => (
                <tr key={i} className="border-t text-red-600">
                  <td className="p-2">{b.name}</td>
                  <td className="p-2">{b.nim}</td>
                  <td className="p-2">{b.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      case "Korti":
        return (
          <table className="w-full border border-gray-200 text-left text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2">Nama</th>
                <th className="p-2">NIM</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {korti.map((k, i) => (
                <tr key={i} className="border-t text-blue-600">
                  <td className="p-2">{k.name}</td>
                  <td className="p-2">{k.nim}</td>
                  <td className="p-2">{k.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        {course.name}
      </h2>

      {/* INFO CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-blue-50 rounded-md shadow text-center">
          <p className="text-sm text-gray-600">Ruangan</p>
          <p className="font-semibold">{course.room}</p>
        </div>
        <div className="p-4 bg-blue-50 rounded-md shadow text-center">
          <p className="text-sm text-gray-600">Dosen</p>
          <p className="font-semibold">{course.lecturer}</p>
        </div>
        <div className="p-4 bg-blue-50 rounded-md shadow text-center">
          <p className="text-sm text-gray-600">Jumlah Mhs</p>
          <p className="font-semibold">{course.totalStudents}</p>
        </div>
        <div className="p-4 bg-blue-50 rounded-md shadow text-center">
          <p className="text-sm text-gray-600">Tugas</p>
          <p className="font-semibold">{course.totalTasks}</p>
        </div>
      </div>

      {/* TAB NAVIGATION */}
      <div className="flex gap-3 mb-4">
        {["Mahasiswa", "Tugas", "Banned", "Korti"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">{renderTable()}</div>
    </div>
  );
}
