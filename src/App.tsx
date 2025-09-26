import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ProfileCard from "./components/ui/mahasiswa/profileCardMahasiswa";
import SideBar from "./components/layout/sideBar.tsx";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex gap-20">
        <SideBar />
        <div className="flex gap-14">
          <ProfileCard
            name={"I Gede Suryananda Adikartika"}
            angkatan={"2022"}
            email={"dekadi@gmail.com"}
            jurusan={"Informatika"}
            nim={"2201020038"}
            role={"Mahasiswa"}
            status={"Aktif"}
            bgColor={"bg-sky-600"}
          />
        </div>
      </div>
    </>
  );
}

export default App;
