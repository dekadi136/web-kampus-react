import SideBar from "../../../components/layout/sideBar";
import TopNavbar from "../../../components/layout/navBar";
import DaftarTugasCard from "../../../components/ui/mahasiswa/daftarTugas/daftarTugasCard";

export default function DaftarTugas() {
  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="flex flex-col w-full">
          <TopNavbar />
          <div className="flex gap-10 m-10">
            <DaftarTugasCard />
          </div>
        </div>
      </div>
    </>
  );
}
