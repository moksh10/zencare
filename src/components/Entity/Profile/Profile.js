/* eslint-disable react-hooks/exhaustive-deps */
import { useAuth } from "../../../states/Global State/Auth State/AuthState.js";
import Container from "../../Generic/Container/Container.js";
import {  useEffect } from "react";
import getAdmin from "../../../api/Admin/getAdmin.js";
import getDoctor from "../../../api/Doctor/getDoctor";
import getPatient from "../../../api/Patient/getPatient";
import { useErrorContext } from "../../../states/Global State/Error Message/ErrorMessage.js";
import { useSuccessContext } from "../../../states/Global State/Success Message/SuccessMessage.js";
import { useLoadingContext } from "../../../states/Global State/Loading State/Loading.js";
import { useProfile } from "../../../custom hooks/useProfile.js";
import { useFormContext } from "../../../states/Global State/Form State/FormState.js";

function Profile() {
  const { user } = useAuth();
  const { setIsLoading } = useLoadingContext();
  const { showError } = useErrorContext();
  const { resetFormData, setFormData } = useFormContext();
  const { showSuccess } = useSuccessContext();
  const role = user.role;
  const data = useProfile(role);
  const inputBoxes = data.inputBoxes;
  const textareas = data.textareas;
  let fetch = null;
  if (role === "admin") {
    fetch = getAdmin;
  } else if (role === "patient") {
    fetch = getPatient;
  } else if (role === "doctor") {
    fetch = getDoctor;
  }
  useEffect(() => {
    setIsLoading(true);
    resetFormData();
    fetch(user.userID).then((response) => {
      if (response.success) {
        const data = response.data;
        setFormData(data);
        setIsLoading(false);
      } else {
        showError(response.error);
        setIsLoading(false);
      }
    });
  }, []);
  return (
    <Container
      heading="Profile"
      title="Update your info!"
      inputBoxes={inputBoxes}
      textareas={textareas}
    />
  );
}
export default Profile;
