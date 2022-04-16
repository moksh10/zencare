import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import InputForm from "./components/Generic/InputForm/InputForm.js";
//import LandingPage from "./components/Landing Page/LandingPage.js";
// import Loading from "./components/Loading/Loading.js";
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
    { type: "yellow", value: "Accept",isDisabled: false},
    
    { type: "green", value: "Accept",isDisabled: false},
    { type: "red", value: "Decline",isDisabled:false },
  ];
  const inputBoxes = [
    {
      label:"Email",
      isDisabled: false,
      name: "Email",
      placeholder: "Email",
      type: "text",
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
      label:"Phone",
      isDisabled: false,
      name: "Phone",
      placeholder: "Phone",
      type: "text",
      value: "Something",
    },
    {
      label:"Phone",
      isDisabled: false,
      name: "Phone",
      placeholder: "Phone",
      type: "text",
      value: "Something",
    }
    
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
    <>
    <div className="login-body">
      <InputForm
        formTitle="Create new appointment"
        formHeading="Appointments"
        buttons={buttons}
        inputBoxes={inputBoxes}
        textareas={textareas}
      />
    </div>
    </>
  );
}

export default App;
