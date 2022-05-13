import "./../Button/button.css";
import { postMap } from "./../../../api map/postMap";
import { useFormContext } from "./../../../states/Global State/Form State/FormState.js";
import { useLoadingContext } from "./../../../states/Global State/Loading State/Loading.js";
import { useNavigate, useLocation } from "react-router-dom";
import { extractFormID } from "./../../../util/extractFormID";
import { extractFormData } from "./../../../util/extractFormData";
import { extractDate } from "./../../../util/extractDate";
import { validateFormData } from "./../../../util/validateFormData";
import { toast } from "react-toastify";
function PostButton({ value, handleClick, type, isDisabled }) {
  const { formData } = useFormContext();
  const { setIsLoading } = useLoadingContext();
  const location = useLocation();
  const navigate = useNavigate();
  const entity =
    location.pathname.split("/").length >= 3
      ? location.pathname.split("/")[2].slice(3)
      : location.pathname.split("/")[1].slice(3);

  function click() {
    const post = postMap(entity);
    const data = extractFormData(formData, entity);
    data.appointmentStatus = "Pending";
    validateFormData(data, entity).then((valid) => {
      if (!valid.error) {
        const id = extractFormID(formData, entity);

        if (entity === "medicalRecord" || entity === "appointment") {
          if (!id) {
            toast.error("Please select option");
            return;
          }
          const date = extractDate(formData, entity);
          if (date) {
            const newDate = new Date(date);
            const today = new Date();
            if (
              !(
                today.getDate() <= newDate.getDate() &&
                today.getMonth() <= newDate.getMonth() &&
                today.getYear() <= newDate.getYear()
              )
            ) {
              toast.error("Please select a valid date");
              return;
            }
          }
        }

        setIsLoading(true);
        post(data, id).then((response) => {
          if (response.success) {
            const message = response.message;
            setIsLoading(false);
            toast.success(message);
            if (entity === "patient") {
              setTimeout(() => navigate("/login"), 2500);
              return;
            }
            setTimeout(() => navigate("/app/" + entity), 2500);
          } else {
            toast.error(response.message);
          }
          setIsLoading(false);
          return;
        });
      } else {
        toast.error(valid.message);
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
