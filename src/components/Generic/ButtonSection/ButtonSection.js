import Button from "../Button/Button.js";
import PostButton from "../PostButton/PostButton.js";
import "./buttonsection.css";
function ButtonSection({ buttons = [] }) {
  let button = <></>;

  if (buttons.length !== 0) {
    button = (
      <div className="input-form-buttons">
        {buttons.map((value, index) => (
          <div>
            {value.action === "post" ? (
              <PostButton
                key={index}
                type={value.type}
                handleClick={value.handleClick}
                isDisabled={value.isDisabled}
                value={value.value}
              />
            ) : (
              <Button
                key={index}
                type={value.type}
                handleClick={value.handleClick}
                isDisabled={value.isDisabled}
                value={value.value}
              />
            )}
          </div>
        ))}
      </div>
    );
  }
  return button;
}
export default ButtonSection;
