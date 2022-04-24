import API from "./../../Base API/API.js";

import handleError from "../../Error/handleError.js"

async function deleteAppointment(appointmentID) {
    const data = await API.delete(`/appointment/${appointmentID}`).catch(handleError);
    return data.data?{success:true,data:data.data.data}:data.error   

}
export default deleteAppointment