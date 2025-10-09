// import * as z from "zod";
//
// export const UserListItem = z.object({
//   id: z.number(),
//   username: z.string(),
//   registeredAt: z.date(),
//   firstName: z.string(),
//   lastName: z.string(),
//   avatarUrl: z.string().nullable(),
//   isEmailConfirmed: z.boolean(),
// })
//
// export type UserListItemDTO = z.infer<typeof UserListItem>;
//
//
// export const UserQuery = z.object({
//   search: z.string().optional(),
//   page: z.number().optional(),
// })
//
// export type UserQueryDTO = z.infer<typeof UserQuery>;
