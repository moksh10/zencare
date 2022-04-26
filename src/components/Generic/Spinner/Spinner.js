import "./spinner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useLoadingContext } from "./../../../states/Global State/Loading State/Loading.js";
import {useFormContext} from "./../../../states/Global State/Form State/FormState.js"
import {useEffect} from 'react'
function Spinner() {
  let element = <></>;
  const loadingIcon = <FontAwesomeIcon icon={faSpinner} spin />;
  const { isLoading } = useLoadingContext();
  const {resetFormData}=useFormContext();
  useEffect(() => {
    resetFormData()
  },[])
  if (isLoading) {
    element = <div className="loading">{loadingIcon}</div>;
  }

  return element;
}

export default Spinner;
