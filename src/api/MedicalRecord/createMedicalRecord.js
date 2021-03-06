import API from "../Base API/API.js";

import handleError from "../Error/handleError.js"

async function createMedicalRecord( medicalRecord,patientID) {
    const data = await API.post(`/medicalRecord/${patientID}`, medicalRecord).catch(handleError);
    return data.data?{success:true,data:data.data.data, message: data.data.message}:data.error   

}
// const medicalRecord = {
// {
//     medicalRecordDate:"2022-02-12",
//     medicalRecordDiagnosis:"Do this do that",
//     medicalRecordDrugs:"Calpol, narcotics"
// }

// }
export default createMedicalRecord