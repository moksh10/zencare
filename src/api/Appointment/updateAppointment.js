import API from "../Base API/API.js";
import {
    errorMessage
} from "../Error/errorMessage.js";
import handleError from "../Error/handleError.js"

async function updateAppointment(appointment) {
    const data = await API.put('/appointment', appointment).catch(handleError);
    return data ? data.data : errorMessage
}

// const appointment = {
//{
//   appointmentID:2
//   healthProblem:"stomach infection",
//   appointmentStatus:"done",
//   appointmentDate:"1999-02-02"

//}

// }

export default updateAppointment