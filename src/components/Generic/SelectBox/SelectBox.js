import "./selectbox.css";
function SelectBox({ name, options = [], value, handleInput }) {
  return (
    <select name={name} value={value} onChange={handleInput}>
      {options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  );
}
export default SelectBox;
