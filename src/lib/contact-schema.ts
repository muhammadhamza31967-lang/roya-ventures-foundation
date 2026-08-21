import { z } from "zod";

const clean = (v: unknown) => (typeof v === "string" ? v.trim().replace(/\s+/g, " ") : v);
const optional = (schema: z.ZodString) =>
  z.preprocess((v) => {
    const c = clean(v);
    return c === "" ? undefined : c;
  }, schema.optional());

export const contactSchema = z.object({
  name: z.preprocess(
    clean,
    z
      .string()
      .min(2, "Please enter your full name")
      .max(100, "Name must be under 100 characters")
      .regex(/^[\p{L}\p{M}'.\- ]+$/u, "Name contains invalid characters"),
  ),
  organisation: optional(z.string().max(120, "Organisation must be under 120 characters")),
  email: z.preprocess(
    (v) => (typeof v === "string" ? v.trim().toLowerCase() : v),
    z.string().email("Please enter a valid email address").max(254),
  ),
  phone: optional(
    z
      .string()
      .min(7, "Please enter a valid phone number")
      .max(24, "Please enter a valid phone number")
      .regex(/^\+?[\d\s().-]{7,24}$/, "Please enter a valid phone number"),
  ),
  subject: optional(z.string().max(150, "Subject must be under 150 characters")),
  message: z.preprocess(
    (v) => (typeof v === "string" ? v.trim() : v),
    z
      .string()
      .min(10, "Please write at least 10 characters")
      .max(3000, "Message must be under 3000 characters"),
  ),
});

export type ContactInput = z.infer<typeof contactSchema>;
