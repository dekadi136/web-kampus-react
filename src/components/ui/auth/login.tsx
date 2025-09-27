type toggleProps = {
  onClick?: () => void;
};

export default function Login({ onClick }: toggleProps) {
  return (
    <>
      {/* Form */}
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email/akun pengguna<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="2201020038"
            className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Password<span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="text-right mt-1">
            <a
              href="#"
              className="text-sm text-blue-600 hover:underline"
              onClick={onClick}
            >
              Sudah memiliki akun?
            </a>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Masuk
        </button>
      </form>
    </>
  );
}
