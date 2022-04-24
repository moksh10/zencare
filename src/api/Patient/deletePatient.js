import API from "../Base API/API.js";

import handleError from "../Error/handleError.js"

async function deletePatient(patientID) {
    const data = await API.delete(`/patient/${patientID}`).catch(handleError);
    return data.data?{success:true,data:data.data.data}:data.error   

}
export default deletePatient