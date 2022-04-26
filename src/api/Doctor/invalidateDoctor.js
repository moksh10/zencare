import API from "../Base API/API.js";

import handleError from "../Error/handleError.js"

async function invalidateDoctor(doctorID) {
    const data = await API.put(`/doctor/invalidate/${doctorID}`).catch(handleError);
    return data.data?{success:true,data:data.data.data, message: data.data.message}:data.error   

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
export default invalidateDoctor