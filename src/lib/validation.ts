import { z } from 'zod';

export const optionalString = z.string().trim().optional().or(z.literal(''));

export const generalInfoSchema = z.object({
  title: optionalString,
  description: optionalString,
})

export type GeneralInfoValues = z.infer<typeof generalInfoSchema>;

export const personalInfoSchema = z.object({
  firstName: optionalString,
  lastName: optionalString,
  jobTitle: optionalString,
  city: optionalString,
  country: optionalString,
  phone: optionalString,
  email: optionalString,
  // website: optionalString,
})

export type PersonalInfoValues = z.infer<typeof personalInfoSchema>;