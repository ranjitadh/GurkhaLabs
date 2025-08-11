// types/contact.ts

import { z } from "zod";

// Enums
export enum InquiryType {
  GENERAL = "GENERAL",
  QUOTATION = "QUOTATION",
  SUPPORT = "SUPPORT",
  OTHER = "OTHER",
}

export enum ServiceType {
  DESIGN = "DESIGN",
  WEB = "WEB",
  GRAPHICS = "GRAPHICS",
  APP = "APP",
  MARKETING = "MARKETING",
  CONSULTING = "CONSULTING",
  OTHERS = "OTHERS",
}

// TypeScript type
export type ContactFormData = {
  name: string;
  inquryType: InquiryType;
  serviceRequired: ServiceType;
  email: string;
  message: string;
};

// Zod schema
export const ContactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  inquryType: z.enum(InquiryType, {
    error: () => ({ message: "Inquiry type is required" }),
  }),
  serviceRequired: z.enum(ServiceType, {
    error: () => ({ message: "Service type is required" }),
  }),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});
