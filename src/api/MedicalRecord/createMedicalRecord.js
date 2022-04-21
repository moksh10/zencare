import API from "../Base API/API.js";
import {
    errorMessage
} from "../Error/errorMessage.js";
import handleError from "../Error/handleError.js"

async function createMedicalRecord(patientID, medicalRecord) {
    const data = await API.post(`/medicalRecord/${patientID}`, medicalRecord).catch(handleError);
    return data ? data.data : errorMessage

}
// const medicalRecord = {
// {
//     medicalRecordDate:"2022-02-12",
//     medicalRecordDiagnosis:"Do this do that",
//     medicalRecordDrugs:"Calpol, narcotics"
// }

// }
export default createMedicalRecord