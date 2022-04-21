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

export default App;
// eslint-disable-next-line no-lone-blocks
