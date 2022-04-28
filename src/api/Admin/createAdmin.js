import API from "../Base API/API.js";

import handleError from "../Error/handleError.js";

async function createAdmin(admin, ...args) {
  const data = await API.post("/admin", admin).catch(handleError);
  return data.data
    ? { success: true, data: data.data.data, message: data.data.message }
    : data.error;
}
export default createAdmin;
