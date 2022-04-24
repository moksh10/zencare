import API from "../Base API/API.js";

import handleError from "../Error/handleError.js"

async function deleteMedicalRecord(medicalRecordID) {
    const data = await API.delete(`/medicalRecord/${medicalRecordID}`).catch(handleError);
    return data.data?{success:true,data:data.data.data}:data.error   

}
export default deleteMedicalRecord