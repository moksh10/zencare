export const extractID = (value) => {
  let id;
  if (value.appointmentID) {
    id = value.appointmentID;
  } else if (value.doctorID) {
    id = value.doctorID;
  } else if (value.patientID) {
    id = value.patientID;
  } else if (value.medicalRecordID) {
    id = value.medicalRecordID;
  } else if (value.adminID) {
    id = value.adminID;
  }
  return id;
};
