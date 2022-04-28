import API from "./../../Base API/API.js";

import handleError from "../../Error/handleError.js";

async function getAllAppointmentByDoctorAndDate(appointmentDate) {
  const data = await API.get(
    `/appointment/doctor/date/${appointmentDate}`
  ).catch(handleError);
  return data.data
    ? { success: true, data: data.data.data, message: data.data.message }
    : data.error;
}
export default getAllAppointmentByDoctorAndDate;
