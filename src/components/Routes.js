import { lazy, Suspense } from "react";
import { Route, Routes as Router } from "react-router-dom";
import InfoBox from "./Entity/InfoBox/InfoBox.js";
import Loading from "./Generic/Loading/Loading.js";
const Login = lazy(() => import("./Pages/Login Page/LoginPage.js"));
const Signup = lazy(() => import("./Pages/Signup Page/Signup.js"));
const Landing = lazy(() => import("./Pages/Landing Page/LandingPage.js"));
const Error = lazy(() => import("./Pages/Error Page/ErrorPage.js"));
const MainApp = lazy(() => import("./Pages/MainApp Page/MainApp.js"));
const Profile = lazy(() => import("./Entity/Profile/Profile.js"));
const ListBox = lazy(() => import("./Entity/ListBox/ListBox.js"))
function Routes() {
  return (
    <>
      <Router>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Landing />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<Loading />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/signup"
          element={
            <Suspense fallback={<Loading />}>
              <Signup />
            </Suspense>
          }
        />
        <Route
          path="/app"
          element={
            <Suspense fallback={<Loading />}>
              <MainApp />
            </Suspense>
          }
        >
          <Route
            path="profile"
            element={
              <Suspense fallback={<Loading />}>
                <Profile />
              </Suspense>
            }
          />
          <Route
            path="doctor"
            element={
              <Suspense fallback={<Loading />}>
                <ListBox />
              </Suspense>
            }
          />
          <Route
            path="admin"
            element={
              <Suspense fallback={<Loading />}>
                <ListBox />
              </Suspense>
            }
          />
          <Route
            path="patient"
            element={
              <Suspense fallback={<Loading />}>
                <ListBox />
              </Suspense>
            }
          />
          <Route
            path="appointment"
            element={
              <Suspense fallback={<Loading />}>
                <ListBox />
              </Suspense>
            }
          />
          <Route
            path="medicalRecord"
            element={
              <Suspense fallback={<Loading />}>
                <ListBox />
              </Suspense>
            }
          />
          <Route
            path="doctor/:id"
            element={
              <Suspense fallback={<Loading />}>
                <InfoBox />
              </Suspense>
            }
          />
          <Route
            path="admin/:id"
            element={
              <Suspense fallback={<Loading />}>
                <InfoBox />
              </Suspense>
            }
          />
          <Route
            path="patient/:id"
            element={
              <Suspense fallback={<Loading />}>
                <InfoBox />
              </Suspense>
            }
          />
          <Route
            path="appointment/:id"
            element={
              <Suspense fallback={<Loading />}>
                <InfoBox />
              </Suspense>
            }
          />
          <Route
            path="medicalRecord/:id"
            element={
              <Suspense fallback={<Loading />}>
                <InfoBox />
              </Suspense>
            }
          />
          

        </Route>
        <Route
          path="*"
          element={
            <Suspense fallback={<Loading />}>
              <Error />
            </Suspense>
          }
        />
      </Router>
    </>
  );
}
export default Routes;
