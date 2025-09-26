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
      <div className="bg-white rounded-lg shadow p-6">
        {/* Navbar */}
        <nav className="flex gap-6 mb-6 border-b pb-2 text-sm font-medium text-gray-600">
          <button className="hover:text-blue-600">Tugas</button>
          <button className="hover:text-blue-600">Kelas Mata Kuliah</button>
        </nav>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-gray-600 font-medium border-b">
              <tr>
                <th className="py-2 px-2">No</th>
                <th className="py-2 px-2">Nama Tugas</th>
                <th className="py-2 px-2">Status</th>
                <th className="py-2 px-2 text-right">Kumpulkan</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {tasks.map((task) => (
                <tr key={task.id} className="border-b last:border-none">
                  <td className="py-3 px-2">{task.id}</td>
                  <td className="py-3 px-2 flex items-center gap-3">
                    {task.title}
                  </td>
                  <td className="py-3 px-2">
                    <span className={`${task.statusColor} font-medium`}>
                      {task.status}
                    </span>
                  </td>
                  <td className="py-3 px-2 text-right">
                    <button className="px-3 py-1 rounded bg-blue-500 text-white text-xs hover:bg-blue-600">
                      {task.action}
                    </button>
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
