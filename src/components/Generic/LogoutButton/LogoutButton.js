import "./../Button/button.css";
import { authMap } from "../../../api map/authMap";
import { useLoadingContext } from "../../../states/Global State/Loading State/Loading.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function LogoutButton({ value, handleClick, type, isDisabled }) {
  const navigate = useNavigate();
  const { setIsLoading } = useLoadingContext();
  const logout = authMap("logout");
  function click() {
    setIsLoading(true);
    logout().then((response) => {
      if (response.success) {
        const message = response.message;
        toast.success(message);
        setIsLoading(false);
        setTimeout(() => navigate("/login"), 1200);
      } else {
        toast.error(response.message);
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
