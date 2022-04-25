import InputBox from "../InputBox/InputBox.js";
import TextArea from "../TextArea/TextArea.js";
import SelectBox from "../SelectBox/SelectBox.js";
import "./formsection.css";
function FormSection({ inputBoxes = [], textareas = [], selectboxes = [] }) {
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
  const selectbox = selectboxes.map((value, index) => (
    <div>
      <div className="div-label">{value.label}</div>
      <SelectBox key={index} name={value.name} options={value.options} value={value.value} handleInput={value.handleInput}/>
    </div>
  ));
  let element = <></>;
  if (
    inputBoxes.length !== 0 ||
    selectboxes.length !== 0 ||
    textareas.length !== 0
  ) {
    element = (
      <div className="input-form-boxes">
        {inputBox}
        {textarea}
        {selectbox}
      </div>
    );
  }
  return element;
}
export default FormSection;
