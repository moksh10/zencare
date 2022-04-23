import "./textarea.css";
function TextArea({  name, placeholder, value, handleInput, isDisabled }) {
  return (
    <textarea
      className="textarea"
      value={value}
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
