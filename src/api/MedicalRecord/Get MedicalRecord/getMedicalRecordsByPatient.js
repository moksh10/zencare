import API from "../Base API/API.js";
import {
    errorMessage
} from "../../Error/errorMessage.js";
import handleError from "../../Error/handleError.js"

async function getAllMedicalRecordByPatient(patientID) {
    const data = await API.get(`/medicalRecord/patient/${patientID}`).catch(handleError);
    return data ? data.data : errorMessage

}
export default getAllMedicalRecordByPatient