import getAllAdmins from "../api/Admin/getAllAdmins.js";
import getAllDoctors from "../api/Doctor/getAllDoctors";
import getAllPatients from "../api/Patient/getPatient";
import getAllAppointmentByDate from "../api/Appointment/Get Appointments/getAllAppointmentByDate";
import getAllAppointmentByDoctorAndDate from "../api/Appointment/Get Appointments/getAllAppointmentByDoctorAndDate";
import getAllAppointmentByPatientAndDate from "../api/Appointment/Get Appointments/getAllAppointmentByPatientAndDate";
import getAllMedicalRecordByPatient from "../api/MedicalRecord/Get MedicalRecord/getMedicalRecordsByPatient";
import getAllMedicalRecordByPatientAndDoctor from "./../api/MedicalRecord/Get MedicalRecord/getMedicalRecordsByPatientAndDoctor.js";
export const getAllMap = (entity, role) => {
  if (entity === "appointment" || entity === "medicalRecord") {
    entity = entity + role;
  }
  const entities = {
    admin: getAllAdmins,
    doctor: getAllDoctors,
    patient: getAllPatients,
    appointmentadmin: getAllAppointmentByDate,
    appointmentdoctor: getAllAppointmentByDoctorAndDate,
    appointmentpatient: getAllAppointmentByPatientAndDate,
    medicalRecordpatient: getAllMedicalRecordByPatient,
    medicalRecorddoctor: getAllMedicalRecordByPatientAndDoctor,
  };
  return entities[entity];
};
