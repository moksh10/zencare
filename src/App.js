import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Container from "./components/Generic/Container/Container.js";
import LandingPage from "./components/Landing Page/LandingPage.js";
import Loading from "./components/Loading/Loading.js";
import LoginPage from "./components/Login Page/LoginPage.js";
AOS.init({
  offset: 120,
  delay: 0,
  duration: 1300,
  easing: "ease",
  once: false,
});
AOS.refresh();
function App() {
  //const landingPage=<LandingPage />
  //const loading=<Loading />
  const buttons = [
    { type: "red", value: "Delete",isDisabled: false},
    { type: "blue", value: "View",isDisabled:false },
  ];
  const inputBoxes = [
    {
      label:"Email",
      isDisabled: false,
      name: "Email",
      placeholder: "Email",
      type: "date",
      value: "Something",
    },
    {
      label:"Password",
      isDisabled: false,
      name: "Password",
      placeholder: "Password",
      type: "password",
      value: "",
    },{
      label:"Password",
      isDisabled: false,
      name: "Password",
      placeholder: "Password",
      type: "password",
      value: "",
    },{
      label:"Phone",
      isDisabled: false,
      name: "Phone",
      placeholder: "Phone",
      type: "text",
      value: "Something",
    },
    {
      label:"Appointment Date",
      isDisabled: false,
      name: "Phone",
      placeholder: "Appointment Date",
      type: "date",
      value: "Something",
    },
    {
      label:"Medical Record Date",
      isDisabled: false,
      name: "Phone",
      placeholder: "Medical Record Date",
      type: "date",
      value: "Something",
    },
  ];
  const textareas = [
    
    {
      label:"Appointment Status",
      isDisabled: true,
      name: "Address",
      placeholder: "Address",
      type: "text",
      value: "Something is defuibj f duiaebk ffbiuaebkj fbfuik eaf ieaf iekafi eakf eyiafbieafbie fbeabfieaf aeifbiaebf ",
    },
    {
      label:"Medical Record Drugs",
      isDisabled: true,
      name: "Address",
      placeholder: "Address",
      type: "text",
      value: "Something is defuibj f duiaebk ffbiuaebkj fbfuik eaf ieaf iekafi eakf eyiafbieafbie fbeabfieaf aeifbiaebf ",
    },
    
  ];
  return (
     <Container formHeading="Appointment" formTitle="All Appointment" inputBoxes={inputBoxes} buttons={buttons}/>
   
   );
}

export default App;
// eslint-disable-next-line no-lone-blocks
