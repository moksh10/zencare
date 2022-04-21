import API from "../Base API/API.js";
import {
    errorMessage
} from "../Error/errorMessage.js";
import handleError from "../Error/handleError.js"

async function getDoctor(doctorID) {
    const data = await API.get(`/doctor/${doctorID}`).catch(handleError);
    return data ? data.data : errorMessage

}
export default getDoctor