import { useState } from "react";

import Login from "../ui/auth/login";
import Register from "../ui/auth/register";

function Auth() {
  const [isToggle, setIsToggle] = useState(true);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-sky-800">
      <div className="flex h-9/12 font-sans max-w-9/12">
        {/* Kiri */}
        <div className="hidden md:flex flex-1 relative">
          <img
            src="https://dashboard.primakara.ac.id/uploads/Foto_Gedung_Primakara_University_13dee9a554.jpg"
            alt="Gedung Primakara"
            className="w-full h-full object-cover"
            // width={10}
          />
          <div className="absolute bottom-10 left-10 text-white">
            <p className="text-green-400 font-semibold text-sm">
              SELAMAT DATANG
            </p>
            <h2 className="text-2xl font-bold">Sistem Informasi Akademik</h2>
            <p className="text-lg font-semibold">Universitas Primakara</p>
          </div>
        </div>

        {/* Kanan */}
        <div className="flex-1 flex items-center">
          <div className="w-full max-w-md bg-white h-full shadow-md p-8">
            {/* Logo */}
            <div className="flex flex-col items-center mb-6">
              <img
                src="https://rumahvirtual360.com/primakara2/skin/Image_F0B14819_E86A_6563_41C2_ED9C27594864.png?v=1709310615597"
                alt="Logo Primakara"
                className="h-16 mb-2"
              />

              {isToggle ? (
                <>
                  <h3 className="text-lg font-semibold text-gray-700">
                    Masuk dan Verifikasi
                  </h3>
                  <p className="text-sm text-gray-500 text-center mt-1">
                    <span className="font-bold">Baru!</span> Nikmati kemudahan
                    sistem autentikasi tunggal untuk mengakses semua layanan
                    dengan satu akun.
                  </p>
                </>
              ): <h3 className="text-lg font-semibold text-gray-700">
                    Registrasi dan Verifikasi
                  </h3>}
            </div>

            {/* Google Login */}
            <button className="w-full flex items-center justify-center gap-2 py-2 border rounded-lg hover:bg-gray-50 transition">
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                className="h-5 w-5"
              />
              <span>Google</span>
            </button>

            <div className="flex items-center my-4">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="px-2 text-sm text-gray-400">
                atau lanjutkan dengan
              </span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Form */}
            {isToggle ? (
              <Login onClick={handleToggle} />
            ) : (
              <Register onClick={handleToggle} />
            )}

            {/* Footer */}
            <div className="mt-6 text-center">
              <p className="text-xs text-gray-400">
                Powered by{" "}
                <span className="text-red-500 font-semibold">SEVIMA</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
