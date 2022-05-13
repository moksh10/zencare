import "./selectbox.css";
function SelectBox({ name, options = [], value, handleInput }) {
  return (
    <select name={name} value={value} onChange={handleInput}>
      <option disabled selected value> -- select an option -- </option>
      {options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  );
}
export default SelectBox;
