import API from "../Base API/API.js";
import {
    errorMessage
} from "../../Error/errorMessage.js";
import handleError from "../../Error/handleError.js"

async function getAllMedicalRecordByPatientAndDoctor(patientID) {
    const data = await API.get(`/medicalRecord/doctor/patient/${patientID}`).catch(handleError);
    return data ? data.data : errorMessage

}
export default getAllMedicalRecordByPatientAndDoctor