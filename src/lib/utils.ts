import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import * as z from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SchoolFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(50, { message: "Name must not exceed 50 characters" }),
  description: z
    .string()
    .min(1, { message: "Description is required" })
    .max(200, { message: "Description must not exceed 200 characters" }),
  address: z
    .string()
    .min(5, { message: "Address must be at least 5 characters long" })
    .max(100, { message: "Address must not exceed 100 characters" }),
  country: z
    .string()
    .min(2, { message: "Country must be at least 2 characters long" })
    .max(50, { message: "Country must not exceed 50 characters" }),
  state: z
    .string()
    .min(2, { message: "State/Province must be at least 2 characters long" })
    .max(50, { message: "State/Province must not exceed 50 characters" }),
  city: z
    .string()
    .min(2, { message: "City must be at least 2 characters long" })
    .max(50, { message: "City must not exceed 50 characters" }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits long" })
    .max(12, { message: "Phone number must not exceed 12 digits" }),
});

export type SchoolFormType = z.infer<typeof SchoolFormSchema>;
