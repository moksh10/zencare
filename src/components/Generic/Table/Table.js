import "./table.css";
import TableButton from "../TableButton/TableButton";
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

          {tableButtons.map((val, idx) => {
            let id;
            if (value.appointmentID) {
              id = value.appointmentID;
            }
            else if (value.doctorID) {
              id = value.doctorID;
            }
            else if (value.patientID) {
              id = value.patientID;
            }

            else if (value.medicalRecordID) {
              id = value.medicalRecordID;
            }

            else if (value.adminID) {
              id = value.adminID;
            }

            return (
              <td>
                <TableButton
                  id={id}
                  key={idx}
                  type={val.type}
                  handleClick={val.handleClick}
                  isDisabled={val.isDisabled}
                  value={val.value}
                />
              </td>
            );
          })}
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
