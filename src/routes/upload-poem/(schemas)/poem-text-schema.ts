import { z } from 'zod'

export const poemTextSchema = z.object({
  poem: z.string()
})
