import API from "../Base API/API.js";

import handleError from "../Error/handleError.js"

async function createDoctor(doctor,...args) {
    const data = await API.post('/doctor', doctor).catch(handleError);
    return data.data?{success:true,data:data.data.data, message: data.data.message}:data.error   

}
// const doctor = {
//     doctorEmail: "moksh1@gmail.com",
//     doctorName: "moksh",
//     password: "asdfzxcv",
//     doctorContact: "9111919191",
//     doctorAddress:"Joidarnagar",
//     specialistIn:"Gastrologist",
//     shiftStartTime:"4:30 pm",
//     shiftEndTime:"7:01 pm"

// }
export default createDoctor