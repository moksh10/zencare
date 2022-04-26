import createAdmin from "../api/Admin/createAdmin";
import createDoctor from "../api/Doctor/createDoctor";
import createPatient from "../api/Patient/createPatient";
import createAppointment from "../api/Appointment/createAppointment.js";
import createMedicalRecord from "../api/MedicalRecord/createMedicalRecord";
export const postMap = (entity) => {
  const entities = {
    admin: createAdmin,
    doctor: createDoctor,
    patient: createPatient,
    appointment: createAppointment,
    medicalRecord: createMedicalRecord,
  };
  return entities[entity];
};
