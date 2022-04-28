import "./../Button/button.css";
import { putMap } from "./../../../api map/putMap";
import { authMap } from "./../../../api map/authMap.js";
import { useAuth } from "./../../../states/Global State/Auth State/AuthState.js";
import { useFormContext } from "./../../../states/Global State/Form State/FormState.js";
import { useLoadingContext } from "./../../../states/Global State/Loading State/Loading.js";
import { extractUpdateFormData } from "./../../../util/extractUpdateFormData";
import { validateFormData } from "./../../../util/validateFormData";

import {toast } from 'react-toastify';
function PutButton({ value, handleClick, type, isDisabled }) {
  const { formData, setFormData } = useFormContext();
  const { user, setUser } = useAuth();
  const { setIsLoading } = useLoadingContext();
  const entity = user.role;
  function click() {
    if (entity === "medicalRecord" || entity === "appointment") {
      return;
    }
    const put = putMap(entity);
    const getUser = authMap("userInfo");
    const data = extractUpdateFormData(formData, entity);
    validateFormData(data, entity).then((valid) => {
      if (!valid.error) {
        setIsLoading(true);
        put(data).then((response) => {
          if (response.success) {
            const message = response.message;
            setIsLoading(false);
            setFormData(response.data);
            toast.success(message)
            getUser().then((response) => {
              if (response.success) {
                setUser({ ...response.data });
              } else {
                setUser({ userID: "", role: "", userName: "" });
              }
            });
          } else {
            toast.error(response.message)
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
export default PutButton;
