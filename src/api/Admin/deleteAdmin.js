import API from "../Base API/API.js";
import {
    errorMessage
} from "../Error/errorMessage.js";
import handleError from "../Error/handleError.js"

async function deleteAdmin(adminID) {
    const data = await API.delete(`/admin/${adminID}`).catch(handleError);
    return data ? {data:data.data.data, success:true} : errorMessage

}
export default deleteAdmin