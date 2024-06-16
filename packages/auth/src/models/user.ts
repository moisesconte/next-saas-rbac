<<<<<<< HEAD
import { z } from 'zod'

import { roleSchema } from '../roles'

export const userSchema = z.object({
  id: z.string(),
  role: roleSchema,
})

export type User = z.infer<typeof userSchema>
=======
import { z } from 'zod'

import { roleSchema } from '../roles'

export const userSchema = z.object({
  id: z.string(),
  role: roleSchema,
})

export type User = z.infer<typeof userSchema>
>>>>>>> fed5a4065fe061d0f61ef6f7274f867b0b24ca53
