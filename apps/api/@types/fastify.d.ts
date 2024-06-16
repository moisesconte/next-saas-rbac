<<<<<<< HEAD
/* eslint-disable prettier/prettier */
import 'fastify'

import { Member, Organization } from '@prisma/client'

declare module 'fastify' {
  export interface FastifyRequest {
    getCurrentUserId(): Promise<string>
    getUserMembership(
      slug: string
    ): Promise<{ organization: Organization; membership: Member }>
  }
}
=======
import 'fastify'

declare module 'fastify' {
  export interface FastifyRequest {
    getCurrentUserId(): Promise<string>
  }
}
>>>>>>> fed5a4065fe061d0f61ef6f7274f867b0b24ca53
