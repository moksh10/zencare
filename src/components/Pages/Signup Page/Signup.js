/* eslint-disable react-hooks/exhaustive-deps */
import "./signup.css";
import { useEffect } from "react"
import { useRegister } from "./../../../custom hooks/useRegister.js";
import Container from "./../../Generic/Container/Container.js";
import { useFormContext } from "./../../../states/Global State/Form State/FormState.js";
import { useLocation } from "react-router-dom";
function Signup() {
  const { resetFormData } = useFormContext();
  const data = useRegister();
  const inputBoxes = data.inputBoxes;
  const textareas = data.textareas;
  const buttons = data.buttons;
  const location = useLocation()
  useEffect(() =>{
    resetFormData()
  },[])
  useEffect(() => {
    resetFormData()
    },[location])
  return (
    <div className="signup-body">
      <Container
        heading="Zencare"
        title="Register Yourself!"
        inputBoxes={inputBoxes}
        textareas={textareas}
        buttons={buttons}
      />
    </div>
  );
}
export default Signup;
