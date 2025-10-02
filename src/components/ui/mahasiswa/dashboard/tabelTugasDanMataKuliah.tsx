import React from "react";

type Task = {
  id: number;
  title: string;
  status: string;
  statusColor: string;
  action?: string;
};

const tasks: Task[] = [
  {
    id: 1,
    title: "Makalah Data Warehouse",
    status: "Belum Dikerjakan",
    statusColor: "text-red-500",
    action: "Kumpulkan",
  },
  {
    id: 2,
    title: "Resume IT Forensik",
    status: "Proses",
    statusColor: "text-yellow-500",
    action: "Kumpulkan",
  },
  {
    id: 3,
    title: "Proposal Penelitian IoT",
    status: "Selesai",
    statusColor: "text-green-500",
    action: "Terkumpul",
  },
];

export default function TaskTable() {
  return (
    <div className="">
      {/* Card Container */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        {/* Navbar */}
        <nav className="flex gap-6 mb-6 border-b pb-3 text-sm font-medium text-gray-600">
          <button className="hover:text-blue-600 transition-colors">
            Tugas
          </button>
          <button className="hover:text-blue-600 transition-colors">
            Kelas Mata Kuliah
          </button>
        </nav>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="py-3 px-4">No</th>
                <th className="py-3 px-4">Nama Tugas</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Kumpulkan</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {tasks.map((task, index) => (
                <tr
                  key={task.id}
                  className="border-b last:border-none hover:bg-gray-50 transition"
                >
                  <td className="py-3 px-4">{index + 1}</td>
                  <td className="py-3 px-4">{task.title}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${task.statusColor}`}
                    >
                      {task.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    {task.action == "Kumpulkan" ? (
                      <button className="px-4 py-1.5 rounded-md bg-blue-500 text-white text-xs font-medium hover:bg-blue-600 transition">
                        {task.action}
                      </button>
                    ) : (
                      <button className="px-4 py-1.5 rounded-md bg-green-500 text-white text-xs font-medium hover:bg-blue-600 transition">
                        {task.action}
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
