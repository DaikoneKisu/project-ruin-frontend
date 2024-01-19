import { z } from 'zod'
import { authorDataSchema } from './(schemas)/author-data-schema'
import { poemDataSchema } from './(schemas)/poem-data-schema'
import { poemTextSchema } from './(schemas)/poem-text-schema'

export const schema = z
  .object({})
  .merge(authorDataSchema)
  .merge(poemDataSchema)
  .merge(poemTextSchema)
