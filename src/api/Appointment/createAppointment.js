import API from "../Base API/API.js";

import handleError from "../Error/handleError.js";

async function createAppointment(appointment, doctorID) {
  const data = await API.post(`/appointment/${doctorID}`, appointment).catch(
    handleError
  );
  return data.data
    ? { success: true, data: data.data.data, message: data.data.message }
    : data.error;
}
export default createAppointment;
