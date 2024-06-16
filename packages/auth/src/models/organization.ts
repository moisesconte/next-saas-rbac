<<<<<<< HEAD
import { z } from 'zod'

export const organizationSchema = z.object({
  __typename: z.literal('Organization').default('Organization'),
  id: z.string(),
  ownerId: z.string(),
})

export type Organization = z.infer<typeof organizationSchema>
=======
import { z } from 'zod'

export const organizationSchema = z.object({
  __typename: z.literal('Organization').default('Organization'),
  id: z.string(),
  ownerId: z.string(),
})

export type Organization = z.infer<typeof organizationSchema>
>>>>>>> fed5a4065fe061d0f61ef6f7274f867b0b24ca53
