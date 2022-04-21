import API from "../Base API/API.js";
import {
    errorMessage
} from "../../Error/errorMessage.js";
import handleError from "../../Error/handleError.js"

async function getAllAppointmentByPatientAndDate(appointmentDate) {
    const data = await API.get(`/appointment/patient/date/${appointmentDate}`).catch(handleError);
    return data ? data.data : errorMessage

}
export default getAllAppointmentByPatientAndDate