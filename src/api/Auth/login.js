import API from "../Base API/API.js";
import {
    errorMessage
} from "../Error/errorMessage.js";
import handleError from "../Error/handleError.js"

async function login(loginDetails) {
    const data = await API.post('/auth', loginDetails).catch(handleError);
    return data ? data.data : errorMessage

}
// const loginDetails = {
//{
// email:"new@gmail.com",
// password:"asdfzxcv",
// role:"PATIENT"


//}

// }
export default login