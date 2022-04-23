import AOS from "aos";
import "aos/dist/aos.css";
import Routes from "./components/Routes.js";
import { UserProvider } from "./states/Global State/Auth State/AuthState.js";
import { LoadingProvider } from "./states/Global State/Loading State/Loading.js";
import { ErrorProvider } from "./states/Global State/Error Message/ErrorMessage.js";
import { SuccessProvider } from "./states/Global State/Success Message/SuccessMessage.js";
import { FormProvider } from "./states/Global State/Form State/FormState.js";
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

  return (
    <>
      <FormProvider>
        <UserProvider>
          <LoadingProvider>
            <ErrorProvider>
              <SuccessProvider>
                <Routes />
              </SuccessProvider>
            </ErrorProvider>
          </LoadingProvider>
        </UserProvider>
      </FormProvider>
    </>
  );
}

export default App;
// eslint-disable-next-line no-lone-blocks
