export const extractDate = (value, entity) => {
  if (entity === "appointment") {
    return value.appointmentDate;
  }
  return value.medicalRecordDate;
};
