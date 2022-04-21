import API from "../Base API/API.js";
import {
    errorMessage
} from "../../Error/errorMessage.js";
import handleError from "../../Error/handleError.js"

async function getAllAppointmentByDoctor(doctorID) {
    const data = await API.get(`/appointment/doctor/${doctorID}`).catch(handleError);
    return data ? data.data : errorMessage

}
export default getAllAppointmentByDoctor