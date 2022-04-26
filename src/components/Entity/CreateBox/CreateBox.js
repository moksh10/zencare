/* eslint-disable react-hooks/exhaustive-deps */
import { useAuth } from "../../../states/Global State/Auth State/AuthState.js";
import { useErrorContext } from "../../../states/Global State/Error Message/ErrorMessage.js";
import { useLoadingContext } from "../../../states/Global State/Loading State/Loading.js";
import { useFormContext } from "../../../states/Global State/Form State/FormState.js";
import { useLocation } from "react-router-dom";
import { useCreate } from "./../../../custom hooks/useCreate.js";
import { getAllMap } from "../../../api map/getAllMap.js";
import { filterSelectData } from "./../../../util/filterSelectData.js";
import Spinner from "./../../Generic/Spinner/Spinner.js";
import { useEffect, lazy, Suspense } from "react";
const Container = lazy(() => import("../../Generic/Container/Container.js"));
function CreateBox() {
  const { user } = useAuth();
  const { setIsLoading } = useLoadingContext();
  const { showError } = useErrorContext();
  const {  resetFormData, setFormData } = useFormContext();
  const location = useLocation();
  const role = user.role;
  const entity = location.pathname.split("/")[2].slice(3);
  const heading = entity.charAt(0).toUpperCase() + entity.slice(1);
  const title = "Create New " + heading;
  const data = useCreate(entity, role);
  const inputBoxes = data.inputBoxes;
  const textareas = data.textareas;
  const selectboxes = data.selectboxes;
  const buttons = data.buttons;
  function getData() {
    if (entity !== "appointment") {
      resetFormData();
      return;
    }
    const fetch = getAllMap("doctor", role);
    setIsLoading(true);
    fetch().then((response) => {
      if (response.success) {
        const data = response.data;
        const filteredSelectData = filterSelectData(data);
        const tempData = { doctorList: filteredSelectData };
        setFormData({ ...tempData });
      } else {
        showError(response.message);
      }
      setIsLoading(false);
    });
  }
  useEffect(() => {
    getData();
    return resetFormData;
  }, []);
  useEffect(() => {
    getData();
    return resetFormData;
  }, [location]);
  return (
    <Suspense fallback={<Spinner />}>
      <Container
        heading={heading}
        title={title}
        inputBoxes={inputBoxes}
        textareas={textareas}
        selectboxes={selectboxes}
        buttons={buttons}
      />
    </Suspense>
  );
}
export default CreateBox;
