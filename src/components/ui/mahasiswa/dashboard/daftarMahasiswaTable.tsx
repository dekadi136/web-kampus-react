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
    <div className="w-full p-6 bg-white rounded-lg shadow">
      {/* Header */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Daftar Mahasiswa
      </h2>

      {/* Card jumlah mahasiswa */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
        <p className="text-gray-600">Jumlah Mhs</p>
        <p className="text-2xl font-bold text-blue-600">{students.length}</p>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-2 mb-4">
        {["all", "aktif", "nonaktif", "korti"].map((f) => (
          <button
            key={f}
            onClick={() =>
              setFilter(f as "all" | "aktif" | "nonaktif" | "korti")
            }
            className={`px-4 py-2 rounded-md text-sm font-medium border transition ${
              filter === f
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {f === "all"
              ? "All"
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
              className="p-4 bg-gray-50 border border-gray-200 rounded-lg flex justify-between items-center"
            >
              <span className="text-gray-800">{student.name}</span>
              <span
                className={`text-xs px-2 py-1 rounded ${
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
          <p className="text-gray-500">Tidak ada mahasiswa</p>
        )}
      </div>
    </div>
  );
}
