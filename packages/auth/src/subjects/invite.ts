<<<<<<< HEAD
import { z } from 'zod'

export const inviteSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('get'),
    z.literal('create'),
    z.literal('delete'),
  ]),
  z.literal('Invite'),
])

export type InviteSubject = z.infer<typeof inviteSubject>
=======
import { z } from 'zod'

export const inviteSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('get'),
    z.literal('create'),
    z.literal('delete'),
  ]),
  z.literal('Invite'),
])

export type InviteSubject = z.infer<typeof inviteSubject>
>>>>>>> fed5a4065fe061d0f61ef6f7274f867b0b24ca53
