import getAdmin from "../api/Admin/getAdmin";
import getDoctor from "../api/Doctor/getDoctor";
import getPatient from "../api/Patient/getPatient";
import getAppointment from "../api/Appointment/Get Appointments/getAppointment.js";
import getMedicalRecord from "../api/MedicalRecord/Get MedicalRecord/getMedicalRecord";
export const getMap = {
  admin: getAdmin,
  doctor: getDoctor,
  patient: getPatient,
  appointment: getAppointment,
  medicalRecord: getMedicalRecord,
};
