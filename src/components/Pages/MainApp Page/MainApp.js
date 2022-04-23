import Header from "../../Generic/Header/Header";
import SideBar from "../../Generic/SideBar/SideBar";
import { Outlet } from "react-router-dom";
import "./mainapp.css";
function MainApp() {
  // formHeading="Appointment"
  //   formTitle="All Appointment"
  //   inputBoxes={inputBoxes}
  //   buttons={buttons}
  //   textareas={textareas}
  //   select={select}
  // tableData={tableData}
  //links={links}
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
