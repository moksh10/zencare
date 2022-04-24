import API from "../Base API/API.js";

import handleError from "../Error/handleError.js"

async function logout() {
    const data = await API.post('/logoutUser').catch(handleError);
    return data.data?{success:true,data:data.data.data}:data.error   

}
export default logout