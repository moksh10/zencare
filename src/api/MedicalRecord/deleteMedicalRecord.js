import API from "../Base API/API.js";
import {
    errorMessage
} from "../Error/errorMessage.js";
import handleError from "../Error/handleError.js"

async function deleteMedicalRecord(medicalRecordID) {
    const data = await API.delete(`/medicalRecord/${medicalRecordID}`).catch(handleError);
    return data ? {data:data.data.data, success:true} : errorMessage

}
export default deleteMedicalRecord