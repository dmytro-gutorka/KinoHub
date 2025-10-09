import * as z from "zod";

export const UserListItem = z.object({
  id: z.number(),
  username: z.string(),
  registeredAt: z.date(),
  firstName: z.string(),
  lastName: z.string(),
  avatarUrl: z.string().nullable(),
  isEmailConfirmed: z.boolean(),
})

export type UserListItemDTO = z.infer<typeof UserListItem>;

