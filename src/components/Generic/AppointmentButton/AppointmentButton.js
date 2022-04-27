import "./../Button/button.css";
import { putMap } from "./../../../api map/putMap";
import { useFormContext } from "./../../../states/Global State/Form State/FormState.js";
import { useLoadingContext } from "./../../../states/Global State/Loading State/Loading.js";
import { useErrorContext } from "./../../../states/Global State/Error Message/ErrorMessage.js";
import { useSuccessContext } from "./../../../states/Global State/Success Message/SuccessMessage.js";
import { useLocation } from "react-router-dom";
import { extractUpdateFormData } from "./../../../util/extractUpdateFormData";
import { validateFormData } from "./../../../util/validateFormData";
function AppointmentButton({ value, handleClick, type, isDisabled }) {
  const { formData, setFormData } = useFormContext();
  const { showError } = useErrorContext();
  const { showSuccess } = useSuccessContext();
  const { setIsLoading } = useLoadingContext();
  const location = useLocation();
  const entity =
    location.pathname.split("/").length >= 3
      ? location.pathname.split("/")[2]
      : location.pathname.split("/")[1];

  function click() {
    if (entity !== "appointment") {
      return;
    }
    const put = putMap(entity);
    const data = extractUpdateFormData(formData, entity);
    validateFormData(data, entity).then((valid) => {
      if (value === "Done") {
        data.appointmentStatus = "Completed";
      }
      if (value === "Accept") {
        data.appointmentStatus = "Confirmed";
      } else if (value === "Reject") {
        data.appointmentStatus = "Rejected";
      }
      if (!valid.error) {
        setIsLoading(true);
        put(data).then((response) => {
          if (response.success) {
            const message = response.message;
            setIsLoading(false);
            setFormData(response.data);
            showSuccess(message);
          } else {
            showError(response.message);
            setIsLoading(false);
          }
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
export default AppointmentButton;
