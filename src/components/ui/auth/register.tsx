type toggleProps = {
  onClick?: () => void;
};

function Register({ onClick }: toggleProps) {
  return (
    <>
      {/* Form Register */}
      <form>
        <div className="flex-col flex-wrap">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Nama<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Nama Lengkap"
              className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="email@example.com"
              className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex gap-2  ">
            <div className="">
              <label className="block text-sm font-medium text-gray-700">
                Password<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="">
              <label className="block text-sm font-medium text-gray-700">
                Konfirmasi Password<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="text-center my-3 text-sm">
            <p>
              Sudah memiliki akun?
              <a
                href="#"
                className=" text-blue-600 hover:underline ml-1"
                onClick={onClick}
              >
                Login
              </a>
            </p>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Daftar
        </button>
      </form>
    </>
  );
}

export default Register;
