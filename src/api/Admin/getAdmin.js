import API from "../Base API/API.js";
import {
    errorMessage
} from "../Error/errorMessage.js";
import handleError from "../Error/handleError.js"

async function getAdmin(adminID) {
    const data = await API.get(`/admin/${adminID}`).catch(handleError);
    return data ? data.data : errorMessage

}
export default getAdmin