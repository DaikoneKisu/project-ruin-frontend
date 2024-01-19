import { z } from 'zod'

export const classifierByVerseFormSchema = z.object({
  author: z.string(),
  syllables: z.coerce.number()
})
