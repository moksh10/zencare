import API from "./../../Base API/API.js";

import handleError from "../../Error/handleError.js";

async function getAllAppointmentByDoctor(doctorID) {
  const data = await API.get(`/appointment/doctor/${doctorID}`).catch(
    handleError
  );
  return data.data
    ? { success: true, data: data.data.data, message: data.data.message }
    : data.error;
}
export default getAllAppointmentByDoctor;
