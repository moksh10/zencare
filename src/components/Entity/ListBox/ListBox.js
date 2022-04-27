import { useAuth } from "../../../states/Global State/Auth State/AuthState.js";
import { useErrorContext } from "../../../states/Global State/Error Message/ErrorMessage.js";
import { useLoadingContext } from "../../../states/Global State/Loading State/Loading.js";
import { useFormContext } from "../../../states/Global State/Form State/FormState.js";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllMap } from "./../../../api map/getAllMap.js";
import { useQuery } from "./../../../custom hooks/useQuery.js";
import { filterTableData } from "./../../../util/filterTableData.js";
import { getDate } from "./../../../util/getDate.js";
import Spinner from "./../../Generic/Spinner/Spinner.js";
import { useState, useEffect, lazy, Suspense } from "react";
const Container = lazy(() => import("../../Generic/Container/Container.js"));
function ListBox() {
  const { user } = useAuth();
  const [tableData, setTableData] = useState([]);
  const { setIsLoading } = useLoadingContext();
  const { showError } = useErrorContext();
  const { formData, resetFormData } = useFormContext();
  const location = useLocation();
  const navigate = useNavigate();
  const entity = location.pathname.split("/")[2];
  const heading = entity.charAt(0).toUpperCase() + entity.slice(1);
  const title = "All " + heading + "s";
  const role = user.role;
  const fetch = getAllMap(entity, role);
  const query = useQuery(entity, role);
  const queryInputBoxes = query ? query.inputBoxes : [];
  function click(id) {
    navigate("" + id);
  }
  const tableButtons = [
    { value: "View", handleClick: click, type: "blue", isDisabled: false },
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
        showError("Please enter patient ID");
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
  const queryButtons =
    (entity === "medicalRecord" && role === "doctor") ||
    entity === "appointment"
      ? [
          {
            type: "blue",
            value: "Search",
            isDisabled: false,
            handleClick: getData,
          },
        ]
      : [];

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
      <Suspense fallback={<Spinner />}>
        <Container
          heading={heading}
          title={title}
          queryInputBoxes={queryInputBoxes}
          queryButtons={queryButtons}
          tableData={tableData}
          tableButtons={tableButtons}
        />
      </Suspense>
    </>
  );
}
export default ListBox;
