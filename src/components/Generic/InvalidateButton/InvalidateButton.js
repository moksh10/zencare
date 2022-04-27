import "./../Button/button.css";
import { invalidateMap } from "./../../../api map/invalidateMap";
import { useFormContext } from "./../../../states/Global State/Form State/FormState.js";
import { useLoadingContext } from "./../../../states/Global State/Loading State/Loading.js";
import { useErrorContext } from "./../../../states/Global State/Error Message/ErrorMessage.js";
import { useSuccessContext } from "./../../../states/Global State/Success Message/SuccessMessage.js";
import { useLocation, useNavigate } from "react-router-dom";
import { extractIDByEntity } from "./../../../util/extractIDByEntity";
function InvalidateButton({ value, handleClick, type, isDisabled }) {
  const { formData } = useFormContext();
  const { showError } = useErrorContext();
  const { showSuccess } = useSuccessContext();
  const  navigate  = useNavigate();
  const { setIsLoading } = useLoadingContext();
  const location = useLocation();
  const entity =
    location.pathname.split("/").length >= 3
      ? location.pathname.split("/")[2]
      : location.pathname.split("/")[1];

  function click() {
    if (entity !== "doctor") {
      return;
    }
    const put = invalidateMap(entity);
    const id = extractIDByEntity(formData, entity);
    if (id === null) {
      showError("Resource cannot be invalidated");
      return;
    }
    setIsLoading(true);
    put(id).then((response) => {
      if (response.success) {
        const message = response.message;
        setIsLoading(false);
        showSuccess(message);
        setTimeout(() => navigate("/app/" + entity), 2000);
      } else {
        showError(response.message);
        setIsLoading(false);
      }
    });
  }
  return (
    <button className={`button-${type}`} onClick={click} disabled={isDisabled}>
      {value}
    </button>
  );
}
export default InvalidateButton;
