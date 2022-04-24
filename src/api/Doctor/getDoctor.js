import API from "../Base API/API.js";

import handleError from "../Error/handleError.js"

async function getDoctor(doctorID) {
    const data = await API.get(`/doctor/${doctorID}`).catch(handleError);
    return data.data?{success:true,data:data.data.data}:data.error   

}
export default getDoctor