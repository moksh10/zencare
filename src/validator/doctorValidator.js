import { object, string } from "yup";
export const doctorValidator = object({
  doctorID: string().optional(),
  doctorEmail: string().required().email().max(150),
  doctorName: string().required().max(150),
  password: string().min(8).optional(),
  doctorContact: string().required().min(10).max(10),
  doctorAddress: string().required().max(350),
  specialistIn: string().required().max(100),
  shiftStartTime: string().required().max(50),
  shiftEndTime: string().required().max(50)
});
