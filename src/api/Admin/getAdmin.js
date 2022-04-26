import API from "../Base API/API.js";

import handleError from "../Error/handleError.js"

async function getAdmin(adminID) {
    const data = await API.get(`/admin/${adminID}`).catch(handleError);
    return data.data?{success:true,data:data.data.data, message: data.data.message}:data.error 

}
export default getAdmin