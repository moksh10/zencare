import API from "../Base API/API.js";

import handleError from "../Error/handleError.js";

async function updateAdmin(admin) {
  const data = await API.put("/admin", admin).catch(handleError);
  return data.data
    ? { success: true, data: data.data.data, message: data.data.message }
    : data.error;
}
export default updateAdmin;
