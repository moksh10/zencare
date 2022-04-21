import API from "../Base API/API.js";
import {
    errorMessage
} from "../Error/errorMessage.js";
import handleError from "../Error/handleError.js"

async function getAllAdmins() {
    const data = await API.get('/admin').catch(handleError);
    return data ? data.data : errorMessage

}
export default getAllAdmins