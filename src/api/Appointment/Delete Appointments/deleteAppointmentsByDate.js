import API from "./../../Base API/API.js";

import handleError from "../../Error/handleError.js"

async function deleteAppointmentByDate(appointmentDate) {
    const data = await API.delete(`/appointment/date/${appointmentDate}`).catch(handleError);
    return data.data?{success:true,data:data.data.data}:data.error   

}

export default deleteAppointmentByDate