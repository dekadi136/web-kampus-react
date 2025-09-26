type ProdileCardProps = {
  name: String;
  email: String;
  nim: String;
  jurusan: String;
  angkatan: String;
  status: String;
  role: String;
  bgColor: String;
};

export default function ProfileCard({
  name,
  email,
  nim,
  jurusan,
  angkatan,
  role,
  status,
  bgColor = "bg-white",
}: ProdileCardProps) {
  return (
    <div className={`max-w-sm w-full ${bgColor} rounded-2xl shadow p-6`}>
      {/* Profile Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="https://c.pxhere.com/photos/e1/41/man_person_portrait_face_passport_photograph-1238378.jpg!d"
            alt="Profile"
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-lg">{name}</h2>
            <p className="text-sm text-gray-500">{nim}</p>
          </div>
        </div>
        <button className="text-gray-500">⋮</button>
      </div>

      {/* Info Section */}
      <div className="mt-6 space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="font-medium text-gray-600">Email</span>
          <span className="text-gray-500">{email}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-600">Jurusan</span>
          <span className="text-gray-500">{jurusan}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-600">Angkatan</span>
          <span className="text-gray-500">{angkatan}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-600">Status</span>
          <span className="text-gray-500">{status}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-600">Role</span>
          <span className="text-gray-500">{role}</span>
        </div>
      </div>
    </div>
  );
}
