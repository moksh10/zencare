import API from "../Base API/API.js";

import handleError from "../Error/handleError.js"

async function createAppointment(doctorID, appointment) {
    const data = await API.post(`/appointment/${doctorID}`, appointment).catch(handleError);
    return data.data?{success:true,data:data.data.data}:data.error   

}
// const appointment = {
//{
//   healthProblem:"stomach infection",
//   appointmentStatus:"done",
//   appointmentDate:"1999-02-02"

//}

// }
export default createAppointment