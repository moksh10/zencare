import { adminValidator } from "./adminValidator";
import { doctorValidator } from "./doctorValidator";
import { patientValidator } from "./patientValidator";
import { appointmentValidator } from "./appointmentValidator";
import { medicalRecordValidator } from "./medicalRecordValidator";
export const mapValidator = (entity) => {
  const entities = {
    admin: adminValidator,
    doctor: doctorValidator,
    patient: patientValidator,
    appointment: appointmentValidator,
    medicalRecord: medicalRecordValidator,
  };
  return entities[entity];
};
