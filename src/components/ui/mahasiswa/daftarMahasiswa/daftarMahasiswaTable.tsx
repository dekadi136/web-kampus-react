import React, { useState } from "react";

type Student = {
  id: number;
  name: string;
  status: "aktif" | "nonaktif" | "korti";
};

const students: Student[] = [
  { id: 1, name: "I Made Aditya", status: "aktif" },
  { id: 2, name: "Ni Luh Sari", status: "nonaktif" },
  { id: 3, name: "I Wayan Putra", status: "aktif" },
  { id: 4, name: "Kadek Rina", status: "korti" },
  { id: 5, name: "Komang Yudi", status: "aktif" },
];

export default function DaftarMahasiswa() {
  const [filter, setFilter] = useState<"all" | "aktif" | "nonaktif" | "korti">(
    "all"
  );

  const filteredStudents =
    filter === "all" ? students : students.filter((s) => s.status === filter);

  return (
    <div className="w-full p-6 bg-white rounded-xl shadow-lg">
      {/* Header */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Daftar Mahasiswa
      </h2>

      {/* Card jumlah mahasiswa */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-5 mb-6">
        <p className="text-gray-600 text-sm">Jumlah Mahasiswa</p>
        <p className="text-3xl font-extrabold text-blue-700">
          {students.length}
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        {["all", "aktif", "nonaktif", "korti"].map((f) => (
          <button
            key={f}
            onClick={() =>
              setFilter(f as "all" | "aktif" | "nonaktif" | "korti")
            }
            className={`px-4 py-2 rounded-lg text-sm font-semibold shadow-sm transition ${
              filter === f
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {f === "all"
              ? "Semua"
              : f === "aktif"
              ? "Aktif"
              : f === "nonaktif"
              ? "Non-aktif"
              : "Korti"}
          </button>
        ))}
      </div>

      {/* Student List */}
      <div className="space-y-3">
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student) => (
            <div
              key={student.id}
              className="p-4 bg-gray-50 border border-gray-200 rounded-lg flex justify-between items-center hover:bg-gray-100 transition"
            >
              <span className="text-gray-800 font-medium">{student.name}</span>
              <span
                className={`text-xs px-3 py-1 rounded-full font-medium ${
                  student.status === "aktif"
                    ? "bg-green-100 text-green-700"
                    : student.status === "nonaktif"
                    ? "bg-red-100 text-red-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {student.status}
              </span>
            </div>
          ))
        ) : (
          <p className="text-gray-500 italic">Tidak ada mahasiswa</p>
        )}
      </div>
    </div>
  );
}
