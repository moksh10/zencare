import "./../Button/button.css";
import { deleteMap } from "./../../../api map/deleteMap.js";
import { useFormContext } from "./../../../states/Global State/Form State/FormState.js";
import { useLoadingContext } from "./../../../states/Global State/Loading State/Loading.js";
import { useErrorContext } from "./../../../states/Global State/Error Message/ErrorMessage.js";
import { useSuccessContext } from "./../../../states/Global State/Success Message/SuccessMessage.js";
import { useLocation,useNavigate } from "react-router-dom";
import { extractIDByEntity } from "./../../../util/extractIDByEntity";
function PutButton({ value, handleClick, type, isDisabled }) {
  const { formData } = useFormContext();
  const { showError } = useErrorContext();
  const { showSuccess } = useSuccessContext();
  const { setIsLoading } = useLoadingContext();
  const location = useLocation();
  const navigate = useNavigate();
  const entity =
    location.pathname.split("/").length >= 3
      ? location.pathname.split("/")[2]
      : location.pathname.split("/")[1];

  function click() {
    const del = deleteMap(entity);
    const id = extractIDByEntity(formData, entity);
    if (!id) {
      showError("Resource could not be deleted");
      return;
    }
    setIsLoading(true);
    del(id).then((response) => {
      if (response.success) {
        const message = response.message;
        setIsLoading(false);
        showSuccess(message);
        setTimeout(() => navigate("/app/" + entity), 2000);
      } else {
        showError(response.message);
      }
      setIsLoading(false);
    });
  }
  return (
    <button className={`button-${type}`} onClick={click} disabled={isDisabled}>
      {value}
    </button>
  );
}
export default PutButton;
