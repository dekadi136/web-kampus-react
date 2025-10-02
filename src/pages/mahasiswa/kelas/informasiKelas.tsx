import TopNavbar from "../../../components/layout/navBar.tsx";
import SideBar from "../../../components/layout/sideBar.tsx";
import InformasiKelasCard from "../../../components/ui/mahasiswa/daftarKelas/informasiKelasCard.tsx";

function InformasiKelas() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex bg-slate-200">
        <SideBar />
        <div className="flex flex-col w-full">
          <TopNavbar />
          <div className="flex gap-10 m-10">
            <InformasiKelasCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default InformasiKelas;
