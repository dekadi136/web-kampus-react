import { Phone, Mail, FileText } from "lucide-react";

export default function ProfileCard() {
  return (
    <div className="max-w-sm w-full bg-white rounded-2xl shadow p-6">
      {/* Profile Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="https://via.placeholder.com/60"
            alt="Profile"
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-lg">Sophia Millor</h2>
            <p className="text-sm text-gray-500">Sr. UI Designer</p>
          </div>
        </div>
        <button className="text-gray-500">⋮</button>
      </div>

      {/* Contact Icons */}
      <div className="flex justify-center gap-6 mt-5">
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
          <Phone className="w-5 h-5 text-gray-600" />
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
          <Mail className="w-5 h-5 text-gray-600" />
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
          <FileText className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Info Section */}
      <div className="mt-6 space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="font-medium text-gray-600">Company</span>
          <span className="text-gray-500">FoxHr Pvt. Ltd.</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-600">Joining Date</span>
          <span className="text-gray-500">08/08/2018</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-600">Projects</span>
          <span className="text-gray-500">34 Active</span>
        </div>
      </div>
    </div>
  );
}
