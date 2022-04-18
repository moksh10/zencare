import "./button.css";
function Button({ value, handleClick, type, isDisabled }) {
  return (
    <button
      className={`button-${type}`}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {value}
    </button>
  );
}
export default Button;
