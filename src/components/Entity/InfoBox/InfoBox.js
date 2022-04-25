import { useEffect } from "react";
import Container from "../../Generic/Container/Container.js";
import { useErrorContext } from "../../../states/Global State/Error Message/ErrorMessage.js";
import { useSuccessContext } from "../../../states/Global State/Success Message/SuccessMessage.js";
import { useLoadingContext } from "../../../states/Global State/Loading State/Loading.js";
import { useFormContext } from "../../../states/Global State/Form State/FormState.js";
import { useParams, useLocation } from "react-router-dom";
import { useInfo } from "./../../../custom hooks/useInfo.js";
import { getMap } from "../../../api map/getMap.js";
function InfoBox() {
  const { setIsLoading } = useLoadingContext();
  const { showError } = useErrorContext();
  const { resetFormData, setFormData } = useFormContext();
  const { showSuccess } = useSuccessContext();
  const { id } = useParams();
  const location = useLocation();
  const entity = location.pathname.split("/")[2];
  const heading = entity.charAt(0).toUpperCase() + entity.slice(1);
  const data = useInfo(entity);
  const title = heading + " Information";
  const fetch = getMap(entity);
  const inputBoxes = data.inputBoxes;
  const textareas = data.textareas;
  function getData()
  {
    setIsLoading(true);
    resetFormData();
    fetch(id).then((response) => {
        if (response.success) {
        const data = response.data;
        setFormData(data);
      } else {
        showError(response.message);
        
      }
      setIsLoading(false);
    });
  }
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getData()
  }, []);
  useEffect(() => {
    getData()
  },[location])
  return (
    <Container
      heading={heading}
      title={title}
      inputBoxes={inputBoxes}
      textareas={textareas}
    />
  );
}
export default InfoBox;
