import { object, string } from "yup";
export const medicalRecordValidator = object({
  medicalRecordID: string().optional(),
  mdeicalRecordDate: string().required(),
  medicalRecordDrugs: string().required().max(500),
  medicalRecordDiagnosis: string().required().max(1500),
});
