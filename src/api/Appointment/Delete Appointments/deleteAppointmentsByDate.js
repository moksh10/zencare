import API from "../Base API/API.js";
import {
    errorMessage
} from "../../Error/errorMessage.js";
import handleError from "../../Error/handleError.js"

async function deleteAppointmentByDate(appointmentDate) {
    const data = await API.delete(`/appointment/date/${appointmentDate}`).catch(handleError);
    return data ? data.data : errorMessage

}

export default deleteAppointmentByDate