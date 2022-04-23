import { useEffect, useState } from "react";
import { useAuth } from "../../../states/Global State/Auth State/AuthState";
import getAdmin from "../../../api/Admin/getAdmin.js";
import getDoctor from "../../../api/Doctor/getDoctor";
import getPatient from "../../../api/Patient/getPatient";
import { useErrorContext } from "../../../states/Global State/Error Message/ErrorMessage";
import { useLoadingContext } from "../../../states/Global State/Loading State/Loading";
import "./header.css";
function Header({ username = "" }) {
  const { user } = useAuth();
  const { setIsLoading } = useLoadingContext();
  const { showError } = useErrorContext();
  const [userName, setUserName] = useState("");
  let fetch = null;
  if (user.role === "admin") {
    fetch = getAdmin;
  } else if (user.role === "patient") {
    fetch = getPatient;
  } else if (user.role === "doctor") {
    fetch = getDoctor;
  }
  const map = {
    admin: "adminName",
    patient: "patientName",
    doctor: "doctorName",
  };
  useEffect(() => {
    setIsLoading(true)
    fetch(user.userID).then((response) => {
      if (response.success) {
        setUserName(response.data[map[user.role]]);
        setIsLoading(false)
      } else {
        showError(response.error);
        setIsLoading(false)
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="app-header">
      <div>Zencare</div>
      <div>{userName}</div>
    </div>
  );
}
export default Header;
