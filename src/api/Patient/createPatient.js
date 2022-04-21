import API from "../Base API/API.js";
import {
    errorMessage
} from "../Error/errorMessage.js";
import handleError from "../Error/handleError.js"

async function createPatient(patient) {
    const data = await API.post('/patient', patient).catch(handleError);
    return data ? data.data : errorMessage

}
// const patient = {
// {
//     patientEmail:"new@gmail.com",
//     patientName:"new",
//     password:"asdfzxcv",
//     patientContact:"9131919191",
//     patientAddress:"Jogindarnagar",
//     patientGender:"male",
//     patientAge:69

// }
// }
export default createPatient