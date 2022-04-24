import API from "../Base API/API.js";

import handleError from "../Error/handleError.js"

async function getAllDoctors() {
    const data = await API.get('/doctor').catch(handleError);
    return data.data?{success:true,data:data.data.data}:data.error   

}
export default getAllDoctors