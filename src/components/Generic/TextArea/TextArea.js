import "./textarea.css";
function TextArea({ type, name, placeholder, value, handleInput, isDisabled }) {
  return (
    <textarea
      className="textarea"
      value={value}
      type={type}
      name={name}
      placeholder={placeholder}
      onKeyUp={handleInput}
      onPaste={handleInput}
      onCut={handleInput}
      onInput={handleInput}
      onChange={handleInput}
      disabled={isDisabled}
    ></textarea>
  );
}
export default TextArea;
