import InputBox from "./../InputBox/InputBox.js";
import Button from "./../Button/Button.js";
import "./querysection.css";
function QuerySection({ queryInputBoxes = [], queryButtons = [] }) {
  let element = <></>;
  if (queryInputBoxes.length !== 0 || queryButtons.length !== 0) {
    element = (
      <div className="query-section-container">
        <div>
          {queryInputBoxes.map((value, index) => {
            return (
              <InputBox
                isDisabled={value.isDisabled}
                name={value.name}
                placeholder={value.placeholder}
                type={value.type}
                value={value.value}
              />
            );
          })}
          {queryButtons.map((value, index) => {
            return (
              <Button
                type={value.type}
                handleClick={value.handleClick}
                isDisabled={value.isDisabled}
                value={value.value}
              />
            );
          })}
        </div>
      </div>
    );
  }
  return element;
}
export default QuerySection;
