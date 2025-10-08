import axios from "axios";
import type { AxiosResponse } from "axios";

export type RegisterFetchState = {
  name?: string;
  email?: string;
  password?: string;
};

export type LoginFetch = {
  email?: string;
  password?: string;
};

export type ApiResponse = {
  success?: boolean;
  message?: string;
  token?: string;
  data?: any;
};

export const RegisterFetch = async (
  name: string,
  email: string,
  password: string
): Promise<ApiResponse | undefined> => {
  try {
    const response: AxiosResponse<ApiResponse> = await axios.post(
      "http://localhost:3000/auth/mahasiswaRegister",
      {
        name: name,
        email: email,
        password: password,
      },
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    return response.data;
  } catch (err: any) {
    console.log("Error Registrasi Mahasiswa", err);
    console.log("Ini adalah error 400", err.response.data.error);
    return err.response.data.error;
  }
};

export const LoginFetch = async (
  email: string,
  password: string
): Promise<ApiResponse | undefined> => {
  try {
    const response = await axios.post(
      "http://localhost:3000/auth/mahasiswaLogin",
      {
        email: email,
        password: password,
      },
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    return response.data;
  } catch (err) {
    console.log("Error Login Mahasiswa", err);
    return undefined;
  }
};
