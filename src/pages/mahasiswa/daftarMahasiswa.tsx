import ProfileCard from "../../components/ui/mahasiswa/dashboard/profileCardMahasiswa.tsx";
import TabelTugasDanMataKuliah from "../../components/ui/mahasiswa/dashboard/tabelTugasDanMataKuliah.tsx";
import WelcomeCard from "../../components/ui/mahasiswa/dashboard/wellcomeCard.tsx";
import TopNavbar from "../../components/layout/navBar.tsx";
import SideBar from "../../components/layout/sideBar.tsx";
import CourseCard from "../../components/ui/mahasiswa/dashboard/informasiMatakuliahCard.tsx";
import DaftarMahasiswa from "../../components/ui/mahasiswa/dashboard/daftarMahasiswaTable.tsx";

function DashboardMahasiswa() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="flex flex-col w-full">
          <TopNavbar />
          <div className="flex gap-10 m-10">
            <DaftarMahasiswa />
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardMahasiswa;
