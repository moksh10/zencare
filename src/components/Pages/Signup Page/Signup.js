import "./signup.css";
import {useRegister} from "./../../../custom hooks/useRegister.js"
import Container from "./../../Generic/Container/Container.js"
function Signup() {
  
  const data=useRegister();
  const inputBoxes=data.inputBoxes
  const textareas=data.textareas
  return (
    <div className="signup-body">
      <Container
        heading="Zencare"
        title="Register Yourself!"
        inputBoxes={inputBoxes}
        textareas={textareas}
      />
    </div>
  );
}
export default Signup;
