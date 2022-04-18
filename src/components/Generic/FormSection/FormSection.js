import InputBox from "../InputBox/InputBox.js";
import TextArea from "../TextArea/TextArea.js";
import './formsection.css'
function FormSection({ inputBoxes, textareas})
{
    const inputBox = inputBoxes.map((value, index) => (
        <div>
          <div className="div-label">{value.label}</div>
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
          <div className="div-label">{value.label}</div>
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
    return  (<div className="input-form-boxes">
    {inputBox}
    {textarea}
  </div>)

}
export default FormSection