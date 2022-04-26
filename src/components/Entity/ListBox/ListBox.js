import { useState, useEffect } from "react";
import { useAuth } from "../../../states/Global State/Auth State/AuthState.js";
import Container from "../../Generic/Container/Container.js";
import { useErrorContext } from "../../../states/Global State/Error Message/ErrorMessage.js";
import { useSuccessContext } from "../../../states/Global State/Success Message/SuccessMessage.js";
import { useLoadingContext } from "../../../states/Global State/Loading State/Loading.js";
import { useFormContext } from "../../../states/Global State/Form State/FormState.js";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllMap } from "./../../../api map/getAllMap.js";
import { useQuery } from "./../../../custom hooks/useQuery.js";
import { filterTableData } from "./../../../util/filterTableData.js";
import { getDate } from "./../../../util/getDate.js";
function ListBox() {
  const { user } = useAuth();
  const [tableData, setTableData] = useState([]);
  const { setIsLoading } = useLoadingContext();
  const { showError } = useErrorContext();
  const { formData, resetFormData } = useFormContext();
  const { showSuccess } = useSuccessContext();
  const location = useLocation();
  const navigate = useNavigate();
  const entity = location.pathname.split("/")[2];
  const heading = entity.charAt(0).toUpperCase() + entity.slice(1);
  const title = "All " + heading + "s";
  const role = user.role;
  const fetch = getAllMap(entity, role);
  const query = useQuery(entity, role);
  const queryInputBoxes = query ? query.inputBoxes : [];
  const queryButtons = query ? query.buttons : [];
  function click(id)
  { 
    navigate(""+id)
  }
  const tableButtons = [
    { value: "VIEW", handleClick:click, type: "blue", isDisabled: false },
  ];
  function getData() {
    if (entity === "medicalRecord" && role === "admin") {
      return;
    }
    let resource = "";
    if (entity === "medicalRecord" && role === "patient") {
      resource = user.userID;
    }

    if (entity === "medicalRecord" && role === "doctor") {
      if (formData.patientID) {
        resource = formData.patientID;
      } else {
        return;
      }
    }
    if (entity === "appointment") {
      resource = formData.date ? formData.date : getDate();
    }
    setIsLoading(true);
    fetch(resource, role).then((response) => {
      if (response.success) {
        const data = response.data;
        const filteredTableData = filterTableData(entity, data);
        setTableData([...filteredTableData]);
      } else {
        showError(response.message);
      }
      setIsLoading(false);
    });
  }
  useEffect(() => {
    getData();
    return resetFormData;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setTableData([]);
    getData();
  }, [location]);
  return (
    <>
      <Container
        heading={heading}
        title={title}
        queryInputBoxes={queryInputBoxes}
        queryButtons={queryButtons}
        tableData={tableData}
        tableButtons={tableButtons}
      />
    </>
  );
}
export default ListBox;