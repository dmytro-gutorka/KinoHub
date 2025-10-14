// src/index.ts
import * as z from "zod";
var UserListItem = z.object({
  id: z.number(),
  username: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  isEmailConfirmed: z.boolean(),
  avatarUrl: z.string().nullable(),
  registeredAt: z.date(),
  isFriend: z.boolean(),
  isPendingOutgoing: z.boolean(),
  isPendingIncoming: z.boolean(),
  friendRequestId: z.number().nullable(),
  mutualFriendsCount: z.number().int().nullable(),
  watchedMediaCount: z.number().int().nullish().default(null)
});
var UserPaginatedList = z.object({
  data: z.array(UserListItem),
  totalPages: z.number()
});
var UserQuery = z.object({
  search: z.string().optional(),
  page: z.number().optional()
});
export {
  UserListItem,
  UserPaginatedList,
  UserQuery
};
