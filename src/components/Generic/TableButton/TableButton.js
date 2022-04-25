import "./tablebutton.css";
function TableButton({ id, value, handleClick, type, isDisabled }) {
  function click() {
    return handleClick(id);
  }
  return (
    <button className={`button-${type}`} onClick={click} disabled={isDisabled}>
      {value}
    </button>
  );
}
export default TableButton;
