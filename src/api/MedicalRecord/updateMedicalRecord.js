import API from "../Base API/API.js";

import handleError from "../Error/handleError.js"

async function updateMedicalRecord(medicalRecord) {
    const data = await API.put(`/medicalRecord`, medicalRecord).catch(handleError);
    return data.data?{success:true,data:data.data.data, message: data.data.message}:data.error   

}
// const medicalRecord = {
// {
//     medicalRecordID:2 
//     medicalRecordDate:"2022-02-12",
//     medicalRecordDiagnosis:"Do this do that",
//     medicalRecordDrugs:"Calpol, narcotics"
// }

// }
export default updateMedicalRecord