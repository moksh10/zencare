/* eslint-disable react-hooks/exhaustive-deps */
import { useAuth } from "../../../states/Global State/Auth State/AuthState.js";
import { useLoadingContext } from "../../../states/Global State/Loading State/Loading.js";
import { useProfile } from "../../../custom hooks/useProfile.js";
import { useFormContext } from "../../../states/Global State/Form State/FormState.js";
import { getMap } from "./../../../api map/getMap.js";
import Spinner from "./../../Generic/Spinner/Spinner.js";
import { useEffect, lazy, Suspense } from "react";
import { toast } from "react-toastify";
const Container = lazy(() => import("../../Generic/Container/Container.js"));
function Profile() {
  const { user } = useAuth();
  const { setIsLoading } = useLoadingContext();
  const { resetFormData, setFormData } = useFormContext();
  const role = user.role;
  const data = useProfile(role);
  const inputBoxes = data.inputBoxes;
  const textareas = data.textareas;
  const buttons = data.buttons;
  const fetch = getMap(role);
  useEffect(() => {
    setIsLoading(true);
    fetch(user.userID).then((response) => {
      if (response.success) {
        const data = response.data;
        setFormData(data);
      } else {
        toast.error(response.message);
      }
      setIsLoading(false);
    });
    return resetFormData;
  }, []);
  return (
    <Suspense fallback={<Spinner />}>
      <Container
        heading="Profile"
        title="Update your info!"
        inputBoxes={inputBoxes}
        textareas={textareas}
        buttons={buttons}
      />
    </Suspense>
  );
}
export default Profile;
