import API from "../Base API/API.js";
import {filterDoctorData} from "./../../util/filterDoctorData.js"
import handleError from "../Error/handleError.js"

async function getAllDoctors(...args) {
    const data = await API.get('/doctor').catch(handleError);
    const newData= data.data?{success:true,data:data.data.data}:data.error   
    if(args.includes("admin"))
    {
        return newData
    }
    newData.data=filterDoctorData(newData.data)
    return newData
}
export default getAllDoctors