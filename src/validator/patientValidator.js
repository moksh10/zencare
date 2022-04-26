import { object, string, number } from "yup";
export const patientValidator = object({
  patientID: string().optional(),
  patientEmail: string().required().email().max(150),
  patientName: string().required().max(150),
  password: string().min(8).optional(),
  patientContact: string().required().min(10).max(10),
  patientAddress: string().required().max(350),
  patientAge: number().required(),
  patientGender: string().required().max(20),
});
