import * as z from "zod";

export const UserListItem = z.object({
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
    watchedMediaCount: z.number().int().nullish().default(null),
})

export type UserListItemDTO = z.infer<typeof UserListItem>;


export const UserQuery = z.object({
    search: z.string().optional(),
    page: z.number().optional(),
})

export type UserQueryDTO = z.infer<typeof UserQuery>;