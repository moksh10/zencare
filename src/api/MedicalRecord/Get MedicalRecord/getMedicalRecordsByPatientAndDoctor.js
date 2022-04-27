import API from "./../../Base API/API.js";

import handleError from "../../Error/handleError.js"

async function getAllMedicalRecordByPatientAndDoctor(patientID) {
    const data = await API.get(`/medicalRecord/doctor/patient/${patientID}`).catch(handleError);
    console.log(data);
    return data.data?{success:true,data:data.data.data, message: data.data.message}:data.error   

}
export default getAllMedicalRecordByPatientAndDoctor