import InputBox from "./../InputBox/InputBox.js";
import Button from "./../Button/Button.js";
import "./querysection.css";
function QuerySection({ inputBox, button }) {
  return (
    <div className="query-section-container">
      <div>
        <InputBox
          isDisabled={inputBox.isDisabled}
          name={inputBox.name}
          placeholder={inputBox.placeholder}
          type={inputBox.type}
          value={inputBox.value}
        />
        <Button
          type={button.type}
          handleClick={button.handleClick}
          isDisabled={button.isDisabled}
          value={button.value}
        />
      </div>
    </div>
  );
}
export default QuerySection;
