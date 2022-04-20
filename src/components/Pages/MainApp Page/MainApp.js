import Header from "../../Generic/Header/Header";
import SideBar from "../../Generic/SideBar/SideBar";
import Container from "../../Generic/Container/Container";
import { links } from "../../../App";
function MainApp() {
  // formHeading="Appointment"
  //   formTitle="All Appointment"
  //   inputBoxes={inputBoxes}
  //   buttons={buttons}
  //   textareas={textareas}
  //   select={select}
  // tableData={tableData}
  //links={links}
  return <>
    <Header username="Moksh Teng" />
    <div style={{ display: "flex" }}>
      <SideBar links={links}/>
      <Container />
    </div>
  </>;
}
export default MainApp;
