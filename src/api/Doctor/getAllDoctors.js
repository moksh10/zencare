import API from "../Base API/API.js";
import { filterDoctorData } from "./../../util/filterDoctorData.js";
import handleError from "../Error/handleError.js";

async function getAllDoctors(...args) {
  const data = await API.get("/doctor").catch(handleError);
  const newData = data.data
    ? { success: true, data: data.data.data, message: data.data.message }
    : data.error;
  if (args.includes("admin")) {
    newData.data = filterDoctorData(newData.data, "admin");
  } else {
    newData.data = filterDoctorData(newData.data, "other");
  }
  return newData;
}
export default getAllDoctors;
