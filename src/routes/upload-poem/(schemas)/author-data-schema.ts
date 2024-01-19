import { z } from 'zod'

export const authorDataSchema = z.object({
  name: z.string().optional(),
  pseudonim: z.string().optional(),
  birthDate: z.string().optional(),
  deathDate: z.string().optional(),
  gender: z.string().optional().default('MALE')
})
