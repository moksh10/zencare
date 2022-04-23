import { useEffect } from "react";
import { useAuth } from "../../../states/Global State/Auth State/AuthState.js";
import Container from "../../Generic/Container/Container.js";
import getAdmin from "../../../api/Admin/getAdmin.js";
import getDoctor from "../../../api/Doctor/getDoctor";
import getPatient from "../../../api/Patient/getPatient";
import { useErrorContext } from "../../../states/Global State/Error Message/ErrorMessage.js";
import { useSuccessContext } from "../../../states/Global State/Success Message/SuccessMessage.js";
import { useLoadingContext } from "../../../states/Global State/Loading State/Loading.js";
import { useFormContext } from "../../../states/Global State/Form State/FormState.js";
import { useParams, useLocation } from "react-router-dom";
import {useInfo} from './../../../custom hooks/useInfo.js'
function InfoBox() {
  const { user } = useAuth();
  const { setIsLoading } = useLoadingContext();
  const { showError } = useErrorContext();
  const { resetFormData, setFormData } = useFormContext();
  const { showSuccess } = useSuccessContext();
  const { id } = useParams();
  const location = useLocation();
  const entity = location.pathname.split("/")[2];
  const role = user.role;
  const heading = entity.charAt(0).toUpperCase() + entity.slice(1);
  const data = useInfo(entity);
  const title= heading+" Information"
  let fetch = null;
  if (role === "admin") {
    fetch = getAdmin;
  } else if (role === "patient") {
    fetch = getPatient;
  } else if (role === "doctor") {
    fetch = getDoctor;
  }
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <Container heading={heading} title={title} />;
}
export default InfoBox;
