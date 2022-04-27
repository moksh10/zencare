import "./../Button/button.css";
import { putMap } from "./../../../api map/putMap";
import {useAuth} from "./../../../states/Global State/Auth State/AuthState.js"
import { useFormContext } from "./../../../states/Global State/Form State/FormState.js";
import { useLoadingContext } from "./../../../states/Global State/Loading State/Loading.js";
import { useErrorContext } from "./../../../states/Global State/Error Message/ErrorMessage.js";
import { useSuccessContext } from "./../../../states/Global State/Success Message/SuccessMessage.js";
import { extractUpdateFormData } from "./../../../util/extractUpdateFormData";
import { validateFormData } from "./../../../util/validateFormData";
function PutButton({ value, handleClick, type, isDisabled }) {
  const { formData, setFormData } = useFormContext();
  const { showError } = useErrorContext();
  const {user}=useAuth();
  const { showSuccess } = useSuccessContext();
  const { setIsLoading } = useLoadingContext();
  const entity =user.role
  function click() {
    if (entity === "medicalRecord" || entity === "appointment") {
      return;
    }
    console.log(entity)
    const put = putMap(entity);
    const data = extractUpdateFormData(formData, entity);
    validateFormData(data, entity).then((valid) => {
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
export default PutButton;
