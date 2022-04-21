import API from "../Base API/API.js";
import {
    errorMessage
} from "../../Error/errorMessage.js";
import handleError from "../../Error/handleError.js"

async function getMedicalRecord(medicalRecordID) {
    const data = await API.get(`/medicalRecord/${medicalRecordID}`).catch(handleError);
    return data ? data.data : errorMessage

}
export default getMedicalRecord