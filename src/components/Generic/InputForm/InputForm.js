import InputBox from "./../InputBox/InputBox.js";
import Button from "./../Button/Button.js";
import TextArea from "./../TextArea/TextArea.js";
import "./inputForm.css";
function InputForm({ inputBoxes, buttons, textareas, formHeading, formTitle }) {
  const button = buttons.map((value, index) => (
    <div>
      <Button
        key={index}
        type={value.type}
        handleClick={value.handleClick}
        isDisabled={value.isDisabled}
        value={value.value}
      />
    </div>
  ));
  const inputBox = inputBoxes.map((value, index) => (
    <div>
      <div className="div-label">
        {value.label}
      </div>
      <InputBox
        key={index}
        isDisabled={value.isDisabled}
        handleInput={value.handleInput}
        name={value.name}
        placeholder={value.placeholder}
        type={value.type}
        value={value.value}
      />
    </div>
  ));
  const textarea = textareas.map((value, index) => (
    <div>
      <div className="div-label">
        {value.label}
      </div>
      <TextArea
        key={index}
        isDisabled={value.isDisabled}
        handleInput={value.handleInput}
        name={value.name}
        placeholder={value.placeholder}
        type={value.type}
        value={value.value}
      />
    </div>
  ));

  return (
    <div className="input-form">
      <h1>{formHeading}</h1>
      <p>{formTitle}</p>
      <div className="input-form-boxes">{inputBox}</div>
      <div className="input-form-boxes">{textarea}</div>
      <div className="input-form-buttons">{button}</div>
    </div>
  );
}
export default InputForm;
