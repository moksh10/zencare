import "./loading.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import {useFormContext} from "./../../../states/Global State/Form State/FormState.js"
import {useEffect} from 'react'
function Loading() {
  const {resetFormData}=useFormContext();
  useEffect(() => {
    resetFormData()
  },[])
  const loadingIcon = <FontAwesomeIcon icon={faSpinner} spin />;
  return <div className="loading">{loadingIcon}</div>;
}

export default Loading;
