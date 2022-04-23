import API from "../Base API/API.js";
import {
    errorMessage
} from "../Error/errorMessage.js";
import handleError from "../Error/handleError.js"

async function getPatient(patientID) {
    const data = await API.get(`/patient/${patientID}`).catch(handleError);
    return data ? {data:data.data.data, success:true} : errorMessage

}
export default getPatient