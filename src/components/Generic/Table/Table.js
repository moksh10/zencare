import "./table.css";
import Button from "../Button/Button";
function Table({ buttons, data }) {
  
  const heading = (
    <thead><tr>
      {data.heading.map((value, index) => (
        <th key={index}>{value}</th>
      ))}
    </tr></thead>
  );
  
  const rows = <tbody>{data.content.map((value, index) => (
    <tr key={index}>
      {Object.values(value).map((val, idx) => {
        return <td key={idx}>{val}</td>}
        
      )}
      
        {buttons.map((value, index) => (
          <td><Button
            key={index}
            type={value.type}
            handleClick={value.handleClick}
            isDisabled={value.isDisabled}
            value={value.value}
          />
          </td>
        ))}
      
      
    </tr>
  ))}</tbody>;
  
  return (
    <div className="table-container">
    <table className="custom-table table-responsive ">
      {heading}
      {rows}
    </table>
    </div>
  );
}
export default Table;
// eslint-disable-next-line no-lone-blocks
