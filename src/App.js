import {
  mdiAccountBox,
  mdiAccountSupervisorOutline,
  mdiCalendar,
  mdiCalendarPlus,
  mdiDoctor,
  mdiFile,
  mdiFilePlus,
  mdiPlusBox,
  mdiTable,
} from "@mdi/js";
import AOS from "aos";
import "aos/dist/aos.css";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Loading from "./components/Generic/Loading/Loading.js";
const Login = lazy(() => import("./components/Pages/Login Page/LoginPage.js"));
const Signup = lazy(() => import("./components/Pages/Signup Page/Signup.js"));
const Landing = lazy(() =>
  import("./components/Pages/Landing Page/LandingPage.js")
);
const Error = lazy(() => import("./components/Pages/Error Page/ErrorPage.js"));
const MainApp = lazy(() =>
  import("./components/Pages/MainApp Page/MainApp.js")
);
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
  //const loading={<Loading />}/>
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
  const select = [
    {
      label: "Choose Doctor",

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
    },
  ];
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
      <Routes>
        <Route
          path="/"
          element={<Suspense fallback={<Loading />}><Landing /></Suspense>}
        />
        <Route
          path="/login"
          element={<Suspense fallback={<Loading />}><Login /></Suspense>}
        />
        <Route
          path="/signup"
          element={<Suspense fallback={<Loading />}><Signup/></Suspense>}
        />
        <Route
          path="/app"
          element={<Suspense fallback={<Loading />}><MainApp /></Suspense>}
        />
        <Route
          path="*"
          element={<Suspense fallback={<Loading />}><Error /></Suspense>}
        />
      </Routes>
    
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
