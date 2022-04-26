export const extractFormData = (data, entity) => {
  const entities = {
    admin: {
      adminEmail: data.adminEmail,
      adminName: data.adminName,
      password: data.password,
      adminContact: data.adminContact,
    },
    doctor: {
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
      patientEmail: data.patientEmail,
      patientName: data.patientName,
      password: data.password,
      patientContact: data.patientContact,
      patientAddress: data.patientAddress,
      patientGender: data.patientGender,
      patientAge: data.patientAge,
    },
    appointment: {
      healthProblem: data.healthProblem,
      appointmentStatus: data.appointmentStatus,
      appointmentDate: data.appointmentDate,
    },
    medicalRecord: {
      medicalRecordDate: data.medicalRecordDate,
      medicalRecordDiagnosis: data.medicalRecordDiagnosis,
      medicalRecordDrugs: data.medicalRecordDrugs,
    },
  };
  return entities[entity];
};
