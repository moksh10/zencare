import API from "../Base API/API.js";

import handleError from "../Error/handleError.js"

async function deleteDoctor(doctorID) {
    const data = await API.delete(`/doctor/${doctorID}`).catch(handleError);
    return data.data?{success:true,data:data.data.data}:data.error   

}
export default deleteDoctor