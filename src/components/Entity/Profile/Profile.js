/* eslint-disable react-hooks/exhaustive-deps */
import { useAuth } from "../../../states/Global State/Auth State/AuthState.js";
import Container from "../../Generic/Container/Container.js";
import { useEffect } from "react";
import { useErrorContext } from "../../../states/Global State/Error Message/ErrorMessage.js";
import { useSuccessContext } from "../../../states/Global State/Success Message/SuccessMessage.js";
import { useLoadingContext } from "../../../states/Global State/Loading State/Loading.js";
import { useProfile } from "../../../custom hooks/useProfile.js";
import { useFormContext } from "../../../states/Global State/Form State/FormState.js";
import { getMap } from "./../../../api map/getMap.js";
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
  const fetch = getMap(role);
  useEffect(() => {
    setIsLoading(true);
    fetch(user.userID).then((response) => {
      if (response.success) {
        const data = response.data;
        setFormData(data);
      } else {
        showError(response.message);
      }
      setIsLoading(false);
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
