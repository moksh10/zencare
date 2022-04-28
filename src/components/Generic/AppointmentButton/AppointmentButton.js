import "./../Button/button.css";
import { putMap } from "./../../../api map/putMap";
import { useFormContext } from "./../../../states/Global State/Form State/FormState.js";
import { useLoadingContext } from "./../../../states/Global State/Loading State/Loading.js";
import { useLocation } from "react-router-dom";
import { extractUpdateFormData } from "./../../../util/extractUpdateFormData";
import { validateFormData } from "./../../../util/validateFormData";
import { toast } from "react-toastify";
function AppointmentButton({ value, handleClick, type, isDisabled }) {
  const { formData, setFormData } = useFormContext();
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
            toast.success(message);
          } else {
            toast.error(response.message);
            setIsLoading(false);
          }
          return;
        });
      } else {
        toast.error(valid.message)
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
