import { useNavigate } from "react-router";

type ClassItem = {
  course: string;
  time: string;
  sks: number;
  lecturer: string;
  room: string;
};

type ClassScheduleData = {
  id: number;
  day: string;
  classes: ClassItem[];
}[];

export default function DaftarKelasCard() {
  // === DATA LANGSUNG DI SINI ===
  const data: ClassScheduleData = [
    {
      id: 1,
      day: "Senin",
      classes: [
        {
          course: "Machine Learning",
          time: "18:00 - 20:00",
          sks: 3,
          lecturer: "I Kadek Sumartane",
          room: "Ruang RPL",
        },
      ],
    },
    {
      id: 2,
      day: "Selasa",
      classes: [
        {
          course: "Grafika Komputer",
          time: "18:00 - 20:00",
          sks: 3,
          lecturer: "I Kadek Sumartane",
          room: "Ruang RPL",
        },
      ],
    },
    {
      id: 3,
      day: "Rabu",
      classes: [
        {
          course: "Data Warehouse",
          time: "16:00 - 18:00",
          sks: 2,
          lecturer: "Ni Made Sukasih",
          room: "Ruang Lab",
        },
      ],
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="w-full p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Daftar Kelas</h2>

      <div className="space-y-4">
        {data.map((dayItem, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              {dayItem.day}
            </h3>
            <div className="space-y-4">
              {dayItem.classes.map((cls, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between border border-gray-200 rounded-lg p-4 bg-gray-50 shadow-sm"
                >
                  {/* Kolom kiri */}
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 text-lg">
                      {cls.course}
                    </h4>
                    <p className="text-sm text-gray-600">{cls.time}</p>
                    <p className="text-sm text-gray-600">{cls.lecturer}</p>
                  </div>

                  {/* Kolom tengah */}
                  <div className="flex flex-col items-center text-sm text-gray-600 px-6">
                    <p>{cls.sks} SKS</p>
                    <p>{cls.room}</p>
                  </div>

                  {/* Kolom kanan */}
                  <div>
                    <button
                      onClick={() => navigate(`/daftar-kelas/${dayItem.id}`)}
                      className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                    >
                      Lihat Detail
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
