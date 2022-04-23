import API from "../Base API/API.js";
import {
    errorMessage
} from "../Error/errorMessage.js";
import handleError from "../Error/handleError.js"

async function deleteDoctor(doctorID) {
    const data = await API.delete(`/doctor/${doctorID}`).catch(handleError);
    return data ? {data:data.data.data, success:true} : errorMessage

}
export default deleteDoctor