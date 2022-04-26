import { object, string } from "yup";
export const appointmentValidator = object({
  appointmentID: string().optional(),
  appointmentDate: string().required(),
  appointmentStatus: string().required().max(30),
  healthProblem: string().required().max(400),
});
