import * as z from "zod";

export const UserListItem = z.object({
    id: z.number(),
    watchedMediaCount: z.number().int().nullish().default(null),
    username: z.string(),
    registeredAt: z.date(),
    firstName: z.string(),
    lastName: z.string(),
    avatarUrl: z.string().nullable(),
    isEmailConfirmed: z.boolean(),
    isFriend: z.boolean(),
    isPendingOutgoing: z.boolean(),
    isPendingIncoming: z.boolean(),
    friendRequestId: z.number().nullable(),
})

export type UserListItemDTO = z.infer<typeof UserListItem>;


export const UserQuery = z.object({
    search: z.string().optional(),
    page: z.number().optional(),
})

export type UserQueryDTO = z.infer<typeof UserQuery>;