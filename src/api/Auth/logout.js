import API from "../Base API/API.js";
import {
    errorMessage
} from "../Error/errorMessage.js";
import handleError from "../Error/handleError.js"

async function logout() {
    const data = await API.post('/logoutUser').catch(handleError);
    return data ? {data:data.data.data, success:true} : errorMessage

}
export default logout