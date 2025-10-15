import * as z from 'zod';

declare const UserListItem: z.ZodObject<{
    id: z.ZodNumber;
    biography: z.ZodNullable<z.ZodString>;
    username: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodString;
    isEmailConfirmed: z.ZodBoolean;
    avatarUrl: z.ZodNullable<z.ZodString>;
    registeredAt: z.ZodDate;
    isFriend: z.ZodBoolean;
    isPendingOutgoing: z.ZodBoolean;
    isPendingIncoming: z.ZodBoolean;
    friendRequestId: z.ZodNullable<z.ZodNumber>;
    mutualFriendsCount: z.ZodNullable<z.ZodNumber>;
    watchedMediaCount: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
}, z.core.$strip>;
declare const UserPaginatedList: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        biography: z.ZodNullable<z.ZodString>;
        username: z.ZodString;
        firstName: z.ZodString;
        lastName: z.ZodString;
        isEmailConfirmed: z.ZodBoolean;
        avatarUrl: z.ZodNullable<z.ZodString>;
        registeredAt: z.ZodDate;
        isFriend: z.ZodBoolean;
        isPendingOutgoing: z.ZodBoolean;
        isPendingIncoming: z.ZodBoolean;
        friendRequestId: z.ZodNullable<z.ZodNumber>;
        mutualFriendsCount: z.ZodNullable<z.ZodNumber>;
        watchedMediaCount: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    }, z.core.$strip>>;
    totalPages: z.ZodNumber;
}, z.core.$strip>;
type UserPaginatedListDTO = z.infer<typeof UserPaginatedList>;
type UserListItemDTO = z.infer<typeof UserListItem>;
declare const UserQuery: z.ZodObject<{
    search: z.ZodOptional<z.ZodString>;
    page: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
type UserQueryDTO = z.infer<typeof UserQuery>;

export { UserListItem, type UserListItemDTO, UserPaginatedList, type UserPaginatedListDTO, UserQuery, type UserQueryDTO };
