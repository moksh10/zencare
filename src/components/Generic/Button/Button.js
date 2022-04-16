import './button.css'
function Button({ value, handleClick, type, isDisabled }) {
 console.log(type)
 console.log(isDisabled)
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
