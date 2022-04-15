import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import LandingPage from "./components/Landing Page/LandingPage.js";
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
  return (
    <>
    <LoginPage/>
    </>
  );
}

export default App;
