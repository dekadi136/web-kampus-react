type Task = {
  id: number;
  course: string;
  description: string;
  deadline: string;
};

const tasks: Task[] = [
  {
    id: 1,
    course: "Machine Learning",
    description: "Membuat model klasifikasi dengan dataset XYZ",
    deadline: "7 hari",
  },
  {
    id: 2,
    course: "Grafika Komputer",
    description: "Membuat animasi 3D sederhana",
    deadline: "7 hari",
  },
  {
    id: 3,
    course: "Basis Data",
    description: "Membuat ERD dan implementasi MySQL",
    deadline: "3 hari",
  },
];

export default function DaftarTugas() {
  return (
    <div className="w-full p-6 bg-white rounded-lg shadow">
      {/* Header */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Daftar Tugas</h2>

      {/* Card jumlah tugas */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <p className="text-gray-600">Jumlah Tugas</p>
        <p className="text-2xl font-bold text-blue-600">{tasks.length}</p>
      </div>

      {/* List tugas */}
      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="p-4 border border-gray-200 rounded-lg shadow-sm bg-gray-50 flex justify-between items-start"
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {task.course}
              </h3>
              <p className="text-sm text-gray-600">{task.description}</p>
              <p className="text-sm text-red-500 font-medium">
                Deadline {task.deadline}
              </p>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition">
              Buat
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
