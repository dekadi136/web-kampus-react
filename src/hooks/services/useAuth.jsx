import axios from "axios";

export const registerFetch = async (name, email, password) => {
  return axios
    .post(
      "http://localhost:3000/auth/mahasiswaRegister",
      {
        name: name,
        email: email,
        password: password,
      },
      {
        headers: {
          Accept: "aplication/json",
        },
      }
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log("Error Registrasi Mahasiswa", err);
    });
};

export const loginFetch = async (email, password) => {
  return axios
    .post(
      "http://localhost:3000/auth/mahasiswaLogin",
      {
        email: email,
        password: password,
      },
      {
        headers: {
          Accept: "aplication/json",
        },
      }
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log("Error Login Mahasiswa", err);
    });
};
