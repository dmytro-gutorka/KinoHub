// src/index.ts
import * as z from "zod";
var UserListItem = z.object({
  id: z.number(),
  username: z.string(),
  registeredAt: z.date(),
  firstName: z.string(),
  lastName: z.string(),
  avatarUrl: z.string().nullable(),
  isEmailConfirmed: z.boolean()
});
var UserQuery = z.object({
  search: z.string().optional(),
  page: z.number().optional()
});
export {
  UserListItem,
  UserQuery
};
