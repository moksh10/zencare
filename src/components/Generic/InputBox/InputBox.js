import "./InputBox.css";
function InputBox({ type, name, placeholder, value, handleInput, isDisabled }) {
  return (
    <input
      className="inputBox"
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onKeyUp={handleInput}
      onPaste={handleInput}
      onCut={handleInput}
      onInput={handleInput}
      onChange={handleInput}
      disabled={isDisabled}
    />
  );
}
export default InputBox;
