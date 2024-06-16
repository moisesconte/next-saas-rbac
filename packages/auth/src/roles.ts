<<<<<<< HEAD
import { z } from 'zod'

export const roleSchema = z.union([
  z.literal('ADMIN'),
  z.literal('MEMBER'),
  z.literal('BILLING'),
])

export type Role = z.infer<typeof roleSchema>
=======
import { z } from 'zod'

export const roleSchema = z.union([
  z.literal('ADMIN'),
  z.literal('MEMBER'),
  z.literal('BILLING'),
])

export type Role = z.infer<typeof roleSchema>
>>>>>>> fed5a4065fe061d0f61ef6f7274f867b0b24ca53
