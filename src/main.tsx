import { createBrowserRouter, RouterProvider } from "react-router";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import DashboardMahasiswa from "./pages/mahasiswa/dashboard/dashboardMahasiswa.tsx";
import Auth from "./pages/mahasiswa/auth/auth.tsx";
import DaftarMahasiswa from "./pages/mahasiswa/daftarMahasiswa/daftarMahasiswa.tsx";
import DaftarTugas from "./pages/mahasiswa/tugas/daftarTugas.tsx";
import DaftarKelas from "./pages/mahasiswa/kelas/daftarKelas.tsx";
import Info from "./pages/mahasiswa/info/info.tsx";
import KumpulTugas from "./pages/mahasiswa/tugas/kumpulTugas.tsx";
import InformasiKelas from "./pages/mahasiswa/kelas/informasiKelas.tsx";

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
    path: "/daftar-tugas/:id",
    element: <KumpulTugas />,
  },
  {
    path: "/daftar-kelas",
    element: <DaftarKelas />,
  },
  {
    path: "/daftar-kelas/:id",
    element: <InformasiKelas />,
  },
  {
    path: "/info",
    element: <Info />,
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
