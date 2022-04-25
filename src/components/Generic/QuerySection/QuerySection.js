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
              key={index}
                isDisabled={value.isDisabled}
                name={value.name}
                placeholder={value.placeholder}
                type={value.type}
                value={value.value}
                handleInput={value.handleInput}
              />
            );
          })}
          {queryButtons.map((value, index) => {
            return (
              <Button key={index}
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
