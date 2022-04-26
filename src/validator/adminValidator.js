import { object, string } from "yup";
export const adminValidator = object({
  adminID: string().optional(),
  adminEmail: string().required().email().max(150),
  adminName: string().required().max(150),
  password: string().min(8).optional(),
  adminContact: string().required().min(10).max(10),
});
