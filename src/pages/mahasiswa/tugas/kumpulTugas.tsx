import SideBar from "../../../components/layout/sideBar";
import TopNavbar from "../../../components/layout/navBar";
import DaftarTugasCard from "../../../components/ui/mahasiswa/daftarTugas/daftarTugasCard";
import KumpulTugasCard from "../../../components/ui/mahasiswa/daftarTugas/kumpulTugasCard";

export default function KumpulTugas() {
  return (
    <>
      <div className="flex bg-slate-200">
        <SideBar />
        <div className="flex flex-col w-full">
          <TopNavbar />
          <div className="flex gap-10 m-10">
            <KumpulTugasCard course={"Machine Learning"} deadline="7 Hari" />
          </div>
        </div>
      </div>
    </>
  );
}
