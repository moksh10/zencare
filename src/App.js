import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Container from "./components/Generic/Container/Container.js";
import LandingPage from "./components/Pages/Landing Page/LandingPage.js";
import Loading from "./components/Generic/Loading/Loading.js";
import LoginPage from "./components/Pages/Login Page/LoginPage.js";
import Header from "./components/Generic/Header/Header.js";
import SideBar from "./components/Generic/SideBar/SideBar.js";
import Signup from "./components/Pages/Signup Page/Signup.js"
import {
  mdiAccountBox,
  mdiCalendar,
  mdiCalendarPlus,
  mdiFile,
  mdiFilePlus,
  mdiDoctor,
  mdiPlusBox,
  mdiTable,
  mdiAccountSupervisorOutline,
} from "@mdi/js";
import MainApp from "./components/Pages/MainApp Page/MainApp.js";
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
  const showToast = () => {
    toast.error("I am Tostify!");
  };
  const buttons = [
    { handleClick: showToast, type: "blue", value: "View", isDisabled: false },
    { handleClick: showToast, type: "red", value: "Delete", isDisabled: false },
  ];
  const inputBoxes = [
    {
      label: "Email",
      isDisabled: false,
      name: "Email",
      placeholder: "Email",
      type: "date",
      value: "Something",
    },
    {
      label: "Password",
      isDisabled: false,
      name: "Password",
      placeholder: "Password",
      type: "password",
      value: "",
    },
    {
      label: "Password",
      isDisabled: false,
      name: "Password",
      placeholder: "Password",
      type: "password",
      value: "",
    },
    {
      label: "Phone",
      isDisabled: false,
      name: "Phone",
      placeholder: "Phone",
      type: "text",
      value: "Something",
    },
    {
      label: "Appointment Date",
      isDisabled: false,
      name: "Phone",
      placeholder: "Appointment Date",
      type: "date",
      value: "Something",
    },
    {
      label: "Medical Record Date",
      isDisabled: false,
      name: "Phone",
      placeholder: "Medical Record Date",
      type: "date",
      value: "Something",
    },
  ];
  const select = [{

    label:"Choose Doctor",

    options: [
      {
        label: "Apple",

        value: "apple",
      },

      {
        label: "Mango",

        value: "mango",
      },

      {
        label: "Banana",

        value: "banana",
      },

      {
        label: "Pineapple",

        value: "pineapple",
      },
    ],
  }];
  const textareas = [
    {
      label: "Appointment Status",
      isDisabled: true,
      name: "Address",
      placeholder: "Address",
      type: "text",
      value:
        "Something is defuibj f duiaebk ffbiuaebkj fbfuik eaf ieaf iekafi eakf eyiafbieafbie fbeabfieaf aeifbiaebf ",
    },
    {
      label: "Medical Record Drugs",
      isDisabled: true,
      name: "Address",
      placeholder: "Address",
      type: "text",
      value:
        "Something is defuibj f duiaebk ffbiuaebkj fbfuik eaf ieaf iekafi eakf eyiafbieafbie fbeabfieaf aeifbiaebf ",
    },
  ];

  
  return (
    <>
    <MainApp />
      <ToastContainer limit={3} />
    </>
  );
}

export const links = [
  { value: "Profile", icon: mdiAccountBox, color: "#b6b6b6" },
  { value: "Doctor", icon: mdiDoctor, color: "#00d25b" },
  { value: "Patient", icon: mdiTable, color: "#ffab00" },
  { value: "Admins", icon: mdiAccountSupervisorOutline, color: "#fc424a" },
  { value: "Appointments", icon: mdiCalendar, color: "#ffab00" },
  { value: "Medical Record", icon: mdiFile, color: "#0090e7" },
  { value: "Add New Appointment", icon: mdiCalendarPlus, color: "#ffab00" },
  { value: "Add New Medical Record", icon: mdiFilePlus, color: "#0090e7" },
  { value: "Add New Doctor", icon: mdiPlusBox, color: "#00d25b" },
  { value: "Add New Admin", icon: mdiPlusBox, color: "#fc424a" },
];
export default App;
// eslint-disable-next-line no-lone-blocks
