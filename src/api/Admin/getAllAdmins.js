import API from "../Base API/API.js";

import handleError from "../Error/handleError.js"

async function getAllAdmins(...args) {
    const data = await API.get('/admin').catch(handleError);
    return data.data?{success:true,data:data.data.data}:data.error    

}
export default getAllAdmins