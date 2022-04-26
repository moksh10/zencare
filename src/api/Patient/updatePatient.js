import API from "../Base API/API.js";

import handleError from "../Error/handleError.js"

async function updatePatient(patient) {
    const data = await API.put('/patient', patient).catch(handleError);
    return data.data?{success:true,data:data.data.data, message: data.data.message}:data.error   

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
export default updatePatient