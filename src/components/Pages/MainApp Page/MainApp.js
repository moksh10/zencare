import Header from "../../Generic/Header/Header";
import SideBar from "../../Generic/SideBar/SideBar";
import { Outlet } from "react-router-dom";
import "./mainapp.css";
function MainApp() {
  return (
    <>
      <Header username="Moksh Teng" />
      <div className="mainapp-body">
        <SideBar />
        <Outlet />
      </div>
    </>
  );
}
export default MainApp;
