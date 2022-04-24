import "./table.css";
import Button from "../Button/Button";
import { convertToString } from "./../../../util/mapKeyNames.js";
function Table({ tableButtons = [], tableData = [] }) {
  let element = <></>;
  if (tableData.length === 0) {
    return element;
  }
  const heading = (
    <thead>
      <tr>
        {Object.keys(tableData[0]).map((value, index) => (
          <th key={index}>{convertToString(value)}</th>
        ))}
      </tr>
    </thead>
  );

  const rows = (
    <tbody>
      {tableData.map((value, index) => (
        <tr key={index}>
          {Object.values(value).map((val, idx) => {
            return <td key={idx}>{val}</td>;
          })}

          {tableButtons.map((value, index) => (
            <td>
              <Button
                key={index}
                type={value.type}
                handleClick={value.handleClick}
                isDisabled={value.isDisabled}
                value={value.value}
              />
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
  if (tableData.length !== 0 || tableButtons.length !== 0) {
    element = (
      <div className="table-container">
        <table className="custom-table table-responsive ">
          {heading}
          {rows}
        </table>
      </div>
    );
  }
  return element;
}
export default Table;
// eslint-disable-next-line no-lone-blocks
