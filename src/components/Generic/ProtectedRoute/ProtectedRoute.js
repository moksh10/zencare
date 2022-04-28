/* eslint-disable react-hooks/exhaustive-deps */
import { useAuth } from "./../../../states/Global State/Auth State/AuthState.js";
import { authMap } from "../../../api map/authMap";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
function ProtectedRoute({ children }) {
  const getUser = authMap("userInfo");
  const { setUser } = useAuth();
  const [element, setElement] = useState(<></>);
  useEffect(() => {
    getUser().then((response) => {
      if (response.success) {
        setUser({ ...response.data });
        setElement(children);
      } else {
        setUser({ userID: "", role: "",userName:"" });
        setElement(<Navigate to="/login" />);
      }
    });
  }, []);

  return element;
}
export default ProtectedRoute;
