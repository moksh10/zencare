import deleteAdmin from "../api/Admin/deleteAdmin";
import deleteDoctor from "../api/Doctor/deleteDoctor";
import deletePatient from "../api/Patient/deletePatient";
import deleteAppointment from "../api/Appointment/Delete Appointments/deleteAppointment.js"
import deleteMedicalRecord from "../api/MedicalRecord/deleteMedicalRecord";
export const deleteMap = (entity) => {
  const entities = {
    admin: deleteAdmin,
    doctor: deleteDoctor,
    patient: deletePatient,
    appointment: deleteAppointment,
    medicalRecord: deleteMedicalRecord,
  };
  return entities[entity];
};
