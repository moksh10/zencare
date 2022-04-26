import "./postbutton.css";
import { postMap } from "./../../../api map/postMap";
import { useFormContext } from "./../../../states/Global State/Form State/FormState.js";
import { useLoadingContext } from "./../../../states/Global State/Loading State/Loading.js";
import { useErrorContext } from "./../../../states/Global State/Error Message/ErrorMessage.js";
import { useSuccessContext } from "./../../../states/Global State/Success Message/SuccessMessage.js";
import { useNavigate, useLocation } from "react-router-dom";
import { extractFormID } from "./../../../util/extractFormID";
import { extractFormData } from "./../../../util/extractFormData";
import { validateFormData } from "./../../../util/validateFormData";
function PostButton({ value, handleClick, type, isDisabled }) {
  const { formData } = useFormContext();
  const { showError } = useErrorContext();
  const { showSuccess } = useSuccessContext();
  const { setIsLoading } = useLoadingContext();
  const location = useLocation();
  const navigate = useNavigate();
  const entity = location.pathname.split("/").length>3
    ? location.pathname.split("/")[2].slice(3)
    : location.pathname.split("/")[1].slice(3);

  function click() {
    const post = postMap(entity);
    const data = extractFormData(formData, entity);
    validateFormData(data, entity).then((valid) => {
      if (!valid.error) {
        const id = extractFormID(formData, entity);
        if (entity === "medicalRecord" || entity === "appointment") {
          if (!id) {
            showError("Please choose option");
            return;
          }
        }
        setIsLoading(true);
        post(data, id).then((response) => {
          if (response.success) {
            const message = response.message;
            setIsLoading(false);
            showSuccess(message);
            if (entity === "patient") {
              setTimeout(() => navigate("/login"), 2500);
              return;
            }
            setTimeout(() => navigate("/app/" + entity), 2500);
          } else {
            showError(response.message);
          }
          setIsLoading(false);
          return;
        });
      } else {
        showError(valid.message);
      }
    });
  }
  return (
    <button className={`button-${type}`} onClick={click} disabled={isDisabled}>
      {value}
    </button>
  );
}
export default PostButton;
