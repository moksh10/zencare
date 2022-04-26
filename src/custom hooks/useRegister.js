import { useFormContext } from "./../states/Global State/Form State/FormState.js";
import { useNavigate } from "react-router-dom";
export const useRegister = () => {
  const { formData, handleInput } = useFormContext();
  const navigate = useNavigate();
  const redirect = () => {
    navigate("/login");
  };
  
  const data = {
    buttons: [
      {
        value: "Go To Login Page",
        handleClick: redirect,
        type: "purple",
        isDisabled: false,
      },
      {
        value: "Sign Up",
        handleClick: null,
        action:"post",
        type: "blue",
        isDisabled: false,
      },
    ],
    inputBoxes: [
      {
        label: "Patient Name",
        type: "text",
        name: "patientName",
        placeholder: "Patient Name",
        value: formData.patientName,
        handleInput: handleInput,
        isDisabled: false,
      },
      {
        label: "Patient Email",
        type: "text",
        name: "patientEmail",
        placeholder: "Patient Email",
        value: formData.patientEmail,
        handleInput: handleInput,
        isDisabled: false,
      },
      {
        label: "Patient Contact",
        type: "tel",
        name: "patientContact",
        placeholder: "Patient Contact",
        value: formData.patientContact,
        handleInput: handleInput,
        isDisabled: false,
      },
      {
        label: "Patient Age",
        type: "number",
        name: "patientAge",
        placeholder: "Patient Age",
        value: formData.patientAge,
        handleInput: handleInput,
        isDisabled: false,
      },
      {
        label: "Patient Gender",
        type: "text",
        name: "patientGender",
        placeholder: "Patient Gender",
        value: formData.patientGender,
        handleInput: handleInput,
        isDisabled: false,
      },
      {
        label: "New Password",
        type: "password",
        name: "password",
        placeholder: "Minimum 8 characters",
        value: formData.password,
        handleInput: handleInput,
        isDisabled: false,
      },
    ],
    textareas: [
      {
        label: "Patient Address",
        name: "patientAddress",
        placeholder: "Patient Address",
        value: formData.patientAddress,
        handleInput: handleInput,
        isDisabled: false,
      },
    ],
  };

  return data;
};
