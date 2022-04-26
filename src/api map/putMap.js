import updateAdmin from "../api/Admin/updateAdmin";
import updateDoctor from "../api/Doctor/updateDoctor";
import updatePatient from "../api/Patient/updatePatient";
import updateAppointment from "../api/Appointment/updateAppointment.js";
import updateMedicalRecord from "../api/MedicalRecord/updateMedicalRecord";
export const putMap = (entity) => {
  const entities = {
    admin: updateAdmin,
    doctor: updateDoctor,
    patient: updatePatient,
    appointment: updateAppointment,
    medicalRecord: updateMedicalRecord,
  };
  return entities[entity];
};
