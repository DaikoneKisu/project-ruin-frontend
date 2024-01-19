import { z } from 'zod'

export const poemDataSchema = z.object({
  title: z.string(),
  genre: z.string(),
  subject: z.string(),
  originalLanguage: z.string(),
  description: z.string(),
  elaborationStartDate: z.string().optional(),
  elaborationEndDate: z.string().optional(),
  elaborationPlaces: z.string().optional()
})
