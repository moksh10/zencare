/* eslint-disable react-hooks/exhaustive-deps */
import { useAuth } from "./../../../states/Global State/Auth State/AuthState.js";
import { useLoadingContext } from "../../../states/Global State/Loading State/Loading.js";
import { useFormContext } from "../../../states/Global State/Form State/FormState.js";
import { useParams, useLocation } from "react-router-dom";
import { useInfo } from "./../../../custom hooks/useInfo.js";
import { getMap } from "../../../api map/getMap.js";
import Spinner from "./../../Generic/Spinner/Spinner.js";
import { useEffect, lazy, Suspense } from "react";
import { toast } from "react-toastify";
const Container = lazy(() => import("../../Generic/Container/Container.js"));
function InfoBox() {
  const { user } = useAuth();
  const { setIsLoading } = useLoadingContext();
  const { resetFormData, setFormData } = useFormContext();
  const { id } = useParams();
  const location = useLocation();
  const role = user.role;
  const entity = location.pathname.split("/")[2];
  const heading = entity.charAt(0).toUpperCase() + entity.slice(1);
  const data = useInfo(entity, role);
  const title = heading + " Information";
  const fetch = getMap(entity);
  const inputBoxes = data.inputBoxes;
  const textareas = data.textareas;
  const buttons = data.buttons;
  function getData() {
    setIsLoading(true);
    resetFormData();
    fetch(id).then((response) => {
      if (response.success) {
        const data = response.data;
        setFormData(data);
      } else {
        toast.error(response.message);
      }
      setIsLoading(false);
    });
  }
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getData();
  }, []);
  useEffect(() => {
    getData();
  }, [location]);
  return (
    <Suspense fallback={<Spinner />}>
      <Container
        heading={heading}
        title={title}
        inputBoxes={inputBoxes}
        textareas={textareas}
        buttons={buttons}
      />
    </Suspense>
  );
}
export default InfoBox;
