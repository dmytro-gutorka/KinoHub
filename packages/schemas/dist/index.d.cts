import * as z from 'zod';

declare const UserListItem: z.ZodObject<{
    id: z.ZodNumber;
    watchedMediaCount: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    username: z.ZodString;
    registeredAt: z.ZodDate;
    firstName: z.ZodString;
    lastName: z.ZodString;
    avatarUrl: z.ZodNullable<z.ZodString>;
    isEmailConfirmed: z.ZodBoolean;
    isFriend: z.ZodBoolean;
    isPendingOutgoing: z.ZodBoolean;
    isPendingIncoming: z.ZodBoolean;
    friendRequestId: z.ZodNullable<z.ZodNumber>;
    mutualFriendsCount: z.ZodNullable<z.ZodNumber>;
}, z.core.$strip>;
type UserListItemDTO = z.infer<typeof UserListItem>;
declare const UserQuery: z.ZodObject<{
    search: z.ZodOptional<z.ZodString>;
    page: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
type UserQueryDTO = z.infer<typeof UserQuery>;

export { UserListItem, type UserListItemDTO, UserQuery, type UserQueryDTO };
