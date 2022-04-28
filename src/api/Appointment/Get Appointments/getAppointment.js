import API from "./../../Base API/API.js";

import handleError from "../../Error/handleError.js";

async function getAppointment(appointmentID) {
  const data = await API.get(`/appointment/${appointmentID}`).catch(
    handleError
  );
  return data.data
    ? { success: true, data: data.data.data, message: data.data.message }
    : data.error;
}
export default getAppointment;
