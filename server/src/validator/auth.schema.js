import { z } from "zod";

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const registerSchema = z.object({
  name: z.string().min(3, "Name is required."),
  email: z.email({ message: "Invalid email." }),
  password: z
    .string()
    .min(1, { message: "Password is required", fatal: true })
    .min(8, {
      message: "Password must be at least 8 characters long.",
      fatal: true,
    })
    .regex(
      passwordRegex,
      "Password must include uppercase, lowercase, number, and special character",
    ),
});

export const loginSchema = z.object({
  email: z.email({ message: "Invalid email" }),
  password: z.string().min(1, "Password is required"),
});
