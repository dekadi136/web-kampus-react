import ProfileCard from "../../components/ui/mahasiswa/dashboard/profileCardMahasiswa.tsx";
import TabelTugasDanMataKuliah from "../../components/ui/mahasiswa/dashboard/tabelTugasDanMataKuliah.tsx";
import WelcomeCard from "../../components/ui/mahasiswa/dashboard/wellcomeCard.tsx";
import TopNavbar from "../../components/layout/navBar.tsx";
import SideBar from "../../components/layout/sideBar.tsx";
import CourseCard from "../../components/ui/mahasiswa/dashboard/informasiMatakuliahCard.tsx";

function DashboardMahasiswa() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="flex flex-col w-full">
          <TopNavbar />
          <div className="flex gap-10 m-10">
            <div className="w-2/3 flex flex-col gap-10">
              <WelcomeCard />
              <TabelTugasDanMataKuliah />
            </div>
            <div className="flex flex-col gap-10">
              <CourseCard />
              <ProfileCard
                name={"I Gede Suryananda Adikartika"}
                angkatan={"2022"}
                email={"dekadi@gmail.com"}
                jurusan={"Informatika"}
                nim={"2201020038"}
                role={"Mahasiswa"}
                status={"Aktif"}
                // bgColor={"bg-sky-600"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardMahasiswa;
