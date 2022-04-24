import API from "../Base API/API.js";

import handleError from "../Error/handleError.js"

async function getAllPatients() {
    const data = await API.get('/patient').catch(handleError);
    return data.data?{success:true,data:data.data.data}:data.error   

}
export default getAllPatients