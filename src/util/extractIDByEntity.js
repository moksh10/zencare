export const extractIDByEntity = (value, entity) => {
  if (entity === "medicalRecord") {
    return value.patientID;
  }
  if (entity === "appointment") {
    return value.doctorID;
  }
  if (entity === "patient") {
    return value.patientID;
  }
  if (entity === "doctor") {
    return value.doctorID;
  }
  if (entity === "admin") {
    return value.adminID;
  }
  return null;
};
