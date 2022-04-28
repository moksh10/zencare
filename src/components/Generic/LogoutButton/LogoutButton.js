import "./../Button/button.css";
import { authMap } from "../../../api map/authMap";
import { useLoadingContext } from "../../../states/Global State/Loading State/Loading.js";
import { useErrorContext } from "../../../states/Global State/Error Message/ErrorMessage.js";
import { useSuccessContext } from "../../../states/Global State/Success Message/SuccessMessage.js";
import { useNavigate } from "react-router-dom";
function LogoutButton({ value, handleClick, type, isDisabled }) {
  const { showError } = useErrorContext();
  const { showSuccess } = useSuccessContext();
  const navigate = useNavigate();
  const { setIsLoading } = useLoadingContext();
  const logout = authMap("logout");
  function click() {
    setIsLoading(true);
    logout().then((response) => {
      if (response.success) {
        const message = response.message;
        setIsLoading(false);
        showSuccess(message);
        setTimeout(() => navigate("/login"), 1500);
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
export default LogoutButton;
