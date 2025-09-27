import { createBrowserRouter, RouterProvider } from "react-router";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import DashboardMahasiswa from "./pages/mahasiswa/dashboardMahasiswa.tsx";
import Auth from "./components/layout/auth.tsx";

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
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
