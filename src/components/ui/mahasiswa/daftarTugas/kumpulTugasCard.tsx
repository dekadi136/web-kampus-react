import React, { useState } from "react";

type TaskSubmitProps = {
  course: string;
  deadline: string;
};

export default function KumpulTugasCard({ course, deadline }: TaskSubmitProps) {
  const [link, setLink] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!link) {
      alert("Silakan masukkan link tugas terlebih dahulu!");
      return;
    }

    console.log("Tugas dikirim:", link);
    alert("Tugas berhasil dikirim!");
    setLink("");
  };

  return (
    <div className="w-full p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Kumpul Tugas</h2>

      <div className="border border-gray-200 rounded-lg p-6 bg-gray-50 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">{course}</h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="link"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Kirim link :
            </label>
            <input
              type="url"
              id="link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="https://..."
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex justify-between items-center">
            <p className="text-sm text-red-500 font-medium">
              Deadline {deadline}
            </p>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition"
            >
              Kirim
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
