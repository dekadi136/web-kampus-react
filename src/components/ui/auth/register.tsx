import React, { useState, useEffect, FormEvent } from "react";
import { RegisterFetch } from "../../../hooks/services/useAuth.ts";

type registerProps = {
  onClick?: () => void;
};

type errorStates = {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  result?: any;
};

function Register({ onClick }: registerProps) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<errorStates>({});

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimName = name.trim();
    const trimEmail = email.trim();
    const trimPassword = password.trim();
    const trimConfirmPassword = confirmPassword.trim();

    let getError: errorStates = {};

    if (trimName === "") {
      getError.name = "Name is required";
    }
    if (trimEmail === "") {
      getError.email = "Email is required";
    }
    if (trimPassword === "") {
      getError.password = "Password is required";
    }
    if (trimPassword !== trimConfirmPassword) {
      getError.confirmPassword = "Password confirmation doesnt match";
    }

    setError(getError);

    if (Object.keys(getError).length > 0) return;

    try {
      const result = await RegisterFetch(trimName, trimEmail, trimPassword);
      console.log("Hasil registrasi mahasiswa = ", result);

      if (!result) {
        setError({ result: "Terjadi kesalahan saat registrasi" });
        return;
      }

      if (typeof result === "string") {
        setError({ result: result });
        console.log("Ini adalah error result", error.result);
        return;
      }

      setError({});
      if (onClick) onClick();
    } catch (err) {
      console.log("Register error", err);
      setError({ result: "Gagal menghubungkan ke server" });
    }
  };

  return (
    <>
      {/* Form Register */}
      <form onSubmit={handleRegister}>
        <div className="flex-col flex-wrap">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Nama<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Nama Lengkap"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {error.name && <p className="text-red-700 text-sm">{error.name}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {error.email && (
              <p className="text-red-700 text-sm">{error.email}</p>
            )}
          </div>

          <div className="flex gap-2  ">
            <div className="">
              <label className="block text-sm font-medium text-gray-700">
                Password<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {error.password && (
                <p className="text-red-700 text-sm">{error.password}</p>
              )}
            </div>

            <div className="">
              <label className="block text-sm font-medium text-gray-700">
                Konfirmasi Password<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {error.confirmPassword && (
                <p className="text-red-700 text-sm">{error.confirmPassword}</p>
              )}
            </div>
          </div>
          {error.result && (
            <p className="text-red-700 text-sm">{error.result}</p>
          )}
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
