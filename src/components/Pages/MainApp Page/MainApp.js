import Header from "../../Generic/Header/Header";
import SideBar from "../../Generic/SideBar/SideBar";
import Container from "../../Generic/Container/Container";
import { links } from "./../../../states/SideBar/links.js";
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
        <SideBar links={links} />
        <Container />
      </div>
    </>
  );
}
export default MainApp;
