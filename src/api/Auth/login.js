import API from "../Base API/API.js";

import handleError from "../Error/handleError.js"

async function login(loginDetails) {
    const data = await API.post('/auth', loginDetails).catch(handleError);
    return data.data?{success:true,data:data.data.data}:data.error   

}
// const loginDetails = {
//{
// email:"new@gmail.com",
// password:"asdfzxcv",
// role:"PATIENT"


//}

// }
export default login