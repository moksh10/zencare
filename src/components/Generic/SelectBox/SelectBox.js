import './selectbox.css'
function SelectBox({ options }) {
  return (
    <select>
      {options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  );
}
export default SelectBox;
