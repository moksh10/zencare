import API from "./../../Base API/API.js";

import handleError from "../../Error/handleError.js"

async function getAllAppointmentByPatientAndDate(appointmentDate) {
    const data = await API.get(`/appointment/patient/date/${appointmentDate}`).catch(handleError);
    return data.data?{success:true,data:data.data.data}:data.error   

}
export default getAllAppointmentByPatientAndDate