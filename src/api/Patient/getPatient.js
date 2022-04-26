import API from "../Base API/API.js";

import handleError from "../Error/handleError.js"

async function getPatient(patientID) {
    const data = await API.get(`/patient/${patientID}`).catch(handleError);
    return data.data?{success:true,data:data.data.data, message: data.data.message}:data.error   

}
export default getPatient