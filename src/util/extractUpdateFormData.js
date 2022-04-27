export const extractUpdateFormData = (data, entity) => {
  const entities = {
    admin: {
      adminID: data.adminID,
      adminEmail: data.adminEmail,
      adminName: data.adminName,
      password: data.password,
      adminContact: data.adminContact,
    },
    doctor: {
      doctorID: data.doctorID,
      doctorEmail: data.doctorEmail,
      doctorName: data.doctorName,
      password: data.password,
      doctorContact: data.doctorContact,
      doctorAddress: data.doctorAddress,
      specialistIn: data.specialistIn,
      shiftStartTime: data.shiftStartTime,
      shiftEndTime: data.shiftEndTime,
    },
    patient: {
      patientID: data.patientID,
      patientEmail: data.patientEmail,
      patientName: data.patientName,
      password: data.password,
      patientContact: data.patientContact,
      patientAddress: data.patientAddress,
      patientGender: data.patientGender,
      patientAge: data.patientAge,
    },
    appointment: {
      appointmentID: data.appointmentID,
      healthProblem: data.healthProblem,
      appointmentStatus: data.appointmentStatus,
      appointmentDate: data.appointmentDate,
    },
    medicalRecord: {
      medicalRecordID: data.medicalRecordID,
      medicalRecordDate: data.medicalRecordDate,
      medicalRecordDiagnosis: data.medicalRecordDiagnosis,
      medicalRecordDrugs: data.medicalRecordDrugs,
    },
  };
  return entities[entity];
};
