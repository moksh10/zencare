import API from "../Base API/API.js";

import handleError from "../Error/handleError.js";

async function updateAppointment(appointment) {
  const data = await API.put("/appointment", appointment).catch(handleError);
  return data.data
    ? { success: true, data: data.data.data, message: data.data.message }
    : data.error;
}

export default updateAppointment;
