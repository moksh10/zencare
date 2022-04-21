import API from "../Base API/API.js";
import {
    errorMessage
} from "../Error/errorMessage.js";
import handleError from "../Error/handleError.js"

async function updateDoctor(doctor) {
    const data = await API.put('/doctor', doctor).catch(handleError);
    return data ? data.data : errorMessage

}
// const doctor = {
//     doctorID:1
//     doctorEmail: "moksh1@gmail.com",
//     doctorName: "moksh",
//     password: "asdfzxcv",
//     doctorContact: "9111919191",
//     doctorAddress:"Joidarnagar",
//     specialistIn:"Gastrologist",
//     shiftStartTime:"4:30 pm",
//     shiftEndTime:"7:01 pm"

// }
export default updateDoctor