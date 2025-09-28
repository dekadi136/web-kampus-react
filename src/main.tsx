import { createBrowserRouter, RouterProvider } from "react-router";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import DashboardMahasiswa from "./pages/mahasiswa/dashboardMahasiswa.tsx";
import Auth from "./components/layout/auth.tsx";
import DaftarMahasiswa from "./pages/mahasiswa/daftarMahasiswa.tsx";
import DaftarTugas from "./pages/mahasiswa/daftarTugas.tsx";
import DaftarKelas from "./pages/mahasiswa/daftarKelas.tsx";
import Info from "./pages/mahasiswa/info.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard-mahasiswa",
    element: <DashboardMahasiswa />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/daftar-mahasiswa",
    element: <DaftarMahasiswa />,
  },
  {
    path: "/daftar-tugas",
    element: <DaftarTugas />,
  },
  {
    path: "/daftar-kelas",
    element: <DaftarKelas />,
  },
  {
    path: "/info",
    element: <Info />,
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
