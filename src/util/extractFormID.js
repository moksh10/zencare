export const extractFormID = (value, entity) => {
  if (entity === "medicalRecord") {
    return value.patientID;
  }
  if (entity === "appointment") {
    return value.doctorID;
  }
  return null;
};
