import TopNavbar from "../../../components/layout/navBar.tsx";
import SideBar from "../../../components/layout/sideBar.tsx";

function Info() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex bg-slate-200">
        <SideBar />
        <div className="flex flex-col w-full">
          <TopNavbar />
          <div className="flex gap-10 m-10">
            <h1>Hello World</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
