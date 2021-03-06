import { flattenObject } from "./flattenObject";

export const filterTableData = (entity, data) => {
  if (data.length === 0) {
    return data;
  }
  const admin = new Set(["adminID", "adminName", "adminContact", "adminEmail"]);
  const doctor = new Set([
    "doctorID",
    "doctorName",
    "doctorContact",
    "specialistIn",
    "doctorEmail"
  ]);
  const patient = new Set([
    "patientID",
    "patientName",
    "patientGender",
    "patientAge",
    "patientEmail"
  ]);
  const appointment = new Set([
    "appointmentID",
    "doctorName",
    "patientName",
    "appointmentStatus",
    "healthProblem"
  ]);
  const medicalRecord = new Set([
    "medicalRecordID",
    "medicalRecordDate",
    "patientName",
    "medicalRecordDiagnosis",
    "doctorName",
  ]);
  const filterMap = {
    admin: admin,
    patient: patient,
    doctor: doctor,
    appointment: appointment,
    medicalRecord: medicalRecord,
  };
  const filteredTableData = data.map((value, index) => {
    const newRow = {};
    Object.entries(flattenObject(value)).forEach((val, idx) => {
      if (filterMap[entity].has(val[0])) {
        if(val[0]==="patientName")
        {
          val[0]="xxPatient"
        }if(val[0]==="doctorName")
        {
          val[0]="xxDoctor"
        }
        if(val[0]==="specialistIn")
        {
          val[0]="xxSpecialist"
        }
        newRow[val[0]] = val[1];
      }
    });
    return newRow;
  });
  return filteredTableData;
};
