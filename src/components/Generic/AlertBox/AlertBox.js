import "./alertbox.css";
import { useErrorContext } from "./../../../states/Global State/Error Message/ErrorMessage.js";
import { useSuccessContext } from "../../../states/Global State/Success Message/SuccessMessage";
export default function Alertbox() {
  const { successMessage, hasSuccess } = useSuccessContext();
  const { errorMessage, hasError } = useErrorContext();
  let className = "hide";
  let message = "";
  if (hasSuccess) {
    message = successMessage;
    className = "alertbox-success";
  }
  if (hasError) {
    message = errorMessage;
    className = "alertbox-error";
  }

  return <div className={message !== "" ? className : "hide"}>{message}</div>;
}
